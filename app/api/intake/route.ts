import { NextResponse } from "next/server";
import { intakeSchema } from "@/lib/intake-schema";
import {
  markSubmitted,
  resolveTokenStatus,
} from "@/lib/intake-tokens";
import {
  notifyIntakeSubmission,
  sendIntakeClientRecap,
  verifyTurnstile,
} from "@/lib/email";
import { addLead } from "@/lib/leads-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Client intake form submission.
 *
 * Auth model: the URL token IS the auth. The form at /intake/[token]
 * looks up the token, validates it, and submits here with the token
 * in the body. We re-validate server-side to defend against direct API
 * calls with fake / expired / used tokens.
 *
 * On success: token is marked used (one-shot), Hammad gets an HTML
 * notification, client gets a recap email with the credentials
 * checklist. The body is small (form fields only — no credentials).
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const token = typeof raw.token === "string" ? raw.token.trim() : "";
  if (!token) {
    return NextResponse.json({ ok: false, error: "Missing token" }, { status: 400 });
  }

  // Re-validate token server-side. Returns 404 for unknown, 410 for
  // expired, 409 for already-submitted.
  const status = await resolveTokenStatus(token);
  if (status.status === "not-found") {
    return NextResponse.json({ ok: false, error: "Invalid token" }, { status: 404 });
  }
  if (status.status === "expired") {
    return NextResponse.json({ ok: false, error: "This link has expired. Contact us for a new one." }, { status: 410 });
  }
  if (status.status === "submitted") {
    return NextResponse.json({ ok: false, error: "This form has already been submitted." }, { status: 409 });
  }

  // Validate the body.
  const parsed = intakeSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Turnstile — server-side verification.
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
  const ua = req.headers.get("user-agent") || "unknown";
  if (data.turnstileToken) {
    const ok = await verifyTurnstile(data.turnstileToken, ip);
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "Anti-spam check failed. Please refresh and try again." },
        { status: 400 },
      );
    }
  }

  // Send emails (notify Hammad + recap to client). Both fire in parallel
  // and we don't block the response on their result — the form is
  // already submitted, so any email failure is an internal issue.
  const sub = { token, data, ip, userAgent: ua };
  const [notifyRes, recapRes] = await Promise.allSettled([
    notifyIntakeSubmission(sub),
    sendIntakeClientRecap(sub),
  ]);

  if (notifyRes.status === "rejected") {
    console.error("[intake] notify failed:", notifyRes.reason);
  }
  if (recapRes.status === "rejected") {
    console.error("[intake] recap failed:", recapRes.reason);
  }
  const notifyId =
    notifyRes.status === "fulfilled" && notifyRes.value.ok ? notifyRes.value.id ?? null : null;

  // Mark token used. We do this even if the client email failed, so the
  // single-use contract holds. (Re-send the recap manually if needed.)
  await markSubmitted(token, { ip, notifyEmailId: notifyId });

  // Persist the full submission in the local leads store so the admin
  // portal can show it. Includes the entire form payload (services,
  // credentials plan, etc.) — not just the top-level fields.
  await addLead({
    type: "intake",
    name: data.contactName,
    email: data.contactEmail,
    phone: data.contactPhone,
    company: data.businessName,
    url: data.websiteUrl,
    source: "intake-form",
    services: data.services,
    budget: data.monthlyBudget,
    timeline: data.projectStartDate,
    ip,
    notionPageId: undefined, // intake isn't pushed to Notion by default
    notifyEmailId: notifyId ?? undefined,
    data: {
      ...data,
      // Redact the legal signature from the stored payload — it doesn't
      // need to live on disk after the form is submitted.
      signature: undefined,
    },
  });

  return NextResponse.json({
    ok: true,
    emails: {
      notify: notifyRes.status === "fulfilled" && notifyRes.value.ok,
      recap: recapRes.status === "fulfilled" && recapRes.value.ok,
    },
  });
}
