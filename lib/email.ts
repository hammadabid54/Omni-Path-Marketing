import { Resend } from "resend";
import { env, resendEnabled } from "./env";
import type { LeadScoreResult } from "./lead-score";

/* =========================================================
   Email templates (Resend) — graceful no-op when not configured.
   ========================================================= */

const FROM = () => `Omni Path Marketing <${env().RESEND_FROM_EMAIL}>`;
const NOTIFY = () => env().RESEND_NOTIFY_EMAIL;

function client() {
  const key = env().RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

function brandChrome(inner: string): string {
  return `<!doctype html>
<html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;background:#0a0a0f;color:#fff;font-family:ui-sans-serif,system-ui,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <div style="display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(163,230,53,0.1);border:1px solid rgba(163,230,53,0.3);color:#a3e635;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;font-weight:600;margin-bottom:24px;">Omni Path Marketing</div>
    ${inner}
    <div style="margin-top:40px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.5);font-size:12px;line-height:1.6;">
      <p style="margin:0 0 8px;">Omni Path Marketing · Fully remote · Working with clients globally</p>
      <p style="margin:0;"><a href="${env().NEXT_PUBLIC_SITE_URL}" style="color:#a3e635;text-decoration:underline;">omnipathmarketing.com</a></p>
    </div>
  </div>
</body></html>`;
}

export interface AuditDeliveryArgs {
  to: string;
  name: string;
  url: string;
  score: number;
  bucket: LeadScoreResult["bucket"];
  pdfUrl?: string;
  /** Optional PDF attachment. When provided, the email gets the full report attached. */
  pdf?: Buffer;
}

export async function sendAuditDelivery(args: AuditDeliveryArgs) {
  if (!resendEnabled()) {
    console.log("[email] Resend not configured — skipping audit delivery to", args.to);
    return { ok: false, reason: "not-configured" };
  }
  const c = client();
  if (!c) return { ok: false, reason: "no-client" };

  const scoreColor = args.bucket === "hot" ? "#bef264" : args.bucket === "warm" ? "#facc15" : "#fb7185";
  const inner = `
    <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px;font-weight:700;letter-spacing:-0.02em;">Your audit is ready, ${escapeHtml(args.name)}.</h1>
    <p style="color:rgba(255,255,255,0.75);line-height:1.6;margin:0 0 24px;">We scanned <strong style="color:#fff;">${escapeHtml(args.url)}</strong> and generated your 20-point report.</p>
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:24px;margin:0 0 24px;">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Overall SEO score</div>
      <div style="font-size:48px;font-weight:700;color:${scoreColor};line-height:1;margin:0 0 4px;">${args.score}<span style="font-size:24px;color:rgba(255,255,255,0.5);">/100</span></div>
      <div style="font-size:13px;color:rgba(255,255,255,0.6);">Bucket: ${args.bucket.toUpperCase()}</div>
    </div>
    ${args.pdf
      ? `<p style="color:rgba(255,255,255,0.75);line-height:1.6;margin:0 0 8px;">Your full 20-point audit report is attached as a PDF.</p>
         <p style="color:rgba(255,255,255,0.5);line-height:1.6;margin:0 0 24px;font-size:12px;">Filename: <span style="font-family:ui-monospace,monospace;color:#a3e635;">omni-path-audit.pdf</span></p>`
      : args.pdfUrl
      ? `<a href="${args.pdfUrl}" style="display:inline-block;background:#a3e635;color:#0a0a0f;padding:14px 24px;border-radius:10px;font-weight:600;text-decoration:none;margin-bottom:16px;">Download full PDF report</a>`
      : ""}
    <p style="color:rgba(255,255,255,0.65);line-height:1.6;margin:16px 0 0;">Want help fixing the issues? <a href="${env().NEXT_PUBLIC_SITE_URL}/contact" style="color:#a3e635;">Book a free 15-min call</a> or see <a href="${env().NEXT_PUBLIC_SITE_URL}/pricing" style="color:#a3e635;">our pricing</a>.</p>
  `;

  try {
    const result = await c.emails.send({
      from: FROM(),
      to: args.to,
      subject: `Your SEO audit for ${args.url} — Score ${args.score}/100`,
      html: brandChrome(inner),
      attachments: args.pdf
        ? [
            {
              filename: "omni-path-audit.pdf",
              content: args.pdf,
              contentType: "application/pdf",
            },
          ]
        : undefined,
    });
    if (result.error) {
      console.error(`[email] audit delivery failed: ${result.error.message}`);
    } else {
      console.log(`[email] audit delivery sent id=${result.data?.id} to=${args.to}`);
    }
    return { ok: !result.error, id: result.data?.id, error: result.error?.message };
  } catch (err) {
    console.error("[email] audit delivery threw:", err);
    return { ok: false, error: String(err) };
  }
}

export async function sendContactDelivery(args: { to: string; name: string }) {
  if (!resendEnabled()) {
    console.log("[email] Resend not configured — skipping contact confirmation to", args.to);
    return { ok: false, reason: "not-configured" };
  }
  const c = client();
  if (!c) return { ok: false, reason: "no-client" };

  const inner = `
    <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px;font-weight:700;">Got it, ${escapeHtml(args.name)}.</h1>
    <p style="color:rgba(255,255,255,0.75);line-height:1.6;margin:0 0 16px;">We received your message and a senior strategist will reply within 4 business hours.</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.6;margin:0 0 24px;">In the meantime, want to see what we ship daily? <a href="${env().NEXT_PUBLIC_SITE_URL}/process" style="color:#a3e635;">See our process</a>.</p>
    <a href="${env().NEXT_PUBLIC_CALCOM_URL}" style="display:inline-block;background:#a3e635;color:#0a0a0f;padding:14px 24px;border-radius:10px;font-weight:600;text-decoration:none;">Or book a 15-min call now</a>
  `;

  try {
    const result = await c.emails.send({
      from: FROM(),
      to: args.to,
      subject: "We got your message — Omni Path",
      html: brandChrome(inner),
    });
    if (result.error) {
      console.error(`[email] contact delivery failed: ${result.error.message}`);
    } else {
      console.log(`[email] contact delivery sent id=${result.data?.id} to=${args.to}`);
    }
    return { ok: !result.error, id: result.data?.id, error: result.error?.message };
  } catch (err) {
    console.error("[email] contact delivery failed:", err);
    return { ok: false, error: String(err) };
  }
}

export async function notifyLead(lead: {
  type: "audit" | "contact" | "partner";
  email: string;
  name?: string;
  company?: string;
  url?: string;
  score?: number;
  bucket?: LeadScoreResult["bucket"];
  services?: string[];
  budget?: string;
  note?: string;
}) {
  if (!resendEnabled()) {
    console.log("[email] Resend not configured — skipping internal notify");
    return { ok: false };
  }
  const c = client();
  if (!c) return { ok: false };

  const rows: Array<[string, string]> = [
    ["Type", lead.type],
    ["Email", lead.email],
  ];
  if (lead.name) rows.push(["Name", lead.name]);
  if (lead.company) rows.push(["Company", lead.company]);
  if (lead.url) rows.push(["URL", lead.url]);
  if (lead.score != null) rows.push(["Score", `${lead.score}/100 (${lead.bucket ?? "n/a"})`]);
  if (lead.services && lead.services.length) rows.push(["Services", lead.services.join(", ")]);
  if (lead.budget) rows.push(["Budget", lead.budget]);
  if (lead.note) rows.push(["Note", lead.note.slice(0, 240) + (lead.note.length > 240 ? "…" : "")]);

  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.04em;">${escapeHtml(k)}</td><td style="padding:8px 12px;color:#fff;font-size:14px;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const inner = `
    <h1 style="font-size:22px;line-height:1.2;margin:0 0 16px;font-weight:700;">New ${lead.type} lead</h1>
    <table style="width:100%;border-collapse:collapse;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;">${table}</table>
  `;

  try {
    const result = await c.emails.send({
      from: FROM(),
      to: NOTIFY(),
      subject: `[${lead.bucket?.toUpperCase() ?? "LEAD"}] ${lead.type} — ${lead.email}`,
      html: brandChrome(inner),
    });
    if (result.error) {
      console.error(`[email] notifyLead failed: ${result.error.message}`);
    } else {
      console.log(`[email] notifyLead sent id=${result.data?.id} to=${NOTIFY()}`);
    }
    return { ok: !result.error, id: result.data?.id, error: result.error?.message };
  } catch (err) {
    console.error("[email] notify failed:", err);
    return { ok: false };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
