import { NextResponse } from "next/server";
import { z } from "zod";
import { scoreLead } from "@/lib/lead-score";
import { sendContactDelivery, notifyLead } from "@/lib/email";
import { pushLeadToNotion } from "@/lib/notion";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  type: z.enum(["agency", "business"]).default("business"),
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2).optional(),
  agency: z.string().min(2).optional(),
  website: z.string().optional(),
  phone: z.string().optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  note: z.string().optional(),
  agencyClients: z.string().optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const agencyClients = (() => {
    if (!data.agencyClients) return undefined;
    if (data.agencyClients === "40+") return 40;
    const [a] = data.agencyClients.split("-").map(Number);
    return a;
  })();

  const { score, bucket, signals } = scoreLead({
    email: data.email,
    phone: data.phone,
    company: data.company ?? data.agency,
    services: data.services,
    budget: data.budget,
    timeline: data.timeline,
    note: data.note,
    agencyClients,
  });

  void (async () => {
    try {
      await Promise.allSettled([
        pushLeadToNotion({
          type: data.type === "agency" ? "partner" : "contact",
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company ?? data.agency,
          url: data.website,
          message: data.note,
          services: data.services,
          budget: data.budget,
          timeline: data.timeline,
          score,
          bucket,
          signals,
          source: "contact-form",
        }),
        notifyLead({
          type: data.type === "agency" ? "partner" : "contact",
          email: data.email,
          name: data.name,
          company: data.company ?? data.agency,
          services: data.services,
          budget: data.budget,
          note: data.note,
          score,
          bucket,
        }),
        sendContactDelivery({ to: data.email, name: data.name }),
      ]);
    } catch (err) {
      console.error("[contact] side-effects failed", err);
    }
  })();

  return NextResponse.json({ ok: true, score, bucket, signals });
}
