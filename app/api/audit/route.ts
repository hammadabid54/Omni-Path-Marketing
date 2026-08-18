import { NextResponse } from "next/server";
import { z } from "zod";
import { runAudit } from "@/lib/audit";
import { scoreLead } from "@/lib/lead-score";
import { sendAuditDelivery, notifyLead } from "@/lib/email";
import { pushLeadToNotion } from "@/lib/notion";
import { generateAuditPdf } from "@/lib/audit/generate-pdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  url: z.string().min(3),
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
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

  const { url, name, email, company } = parsed.data;
  const urlWithScheme = /^https?:\/\//i.test(url) ? url : `https://${url}`;

  try {
    const audit = await runAudit(urlWithScheme);

    const leadInput = {
      email,
      company,
      submittedAudit: true,
    };
    const { score, bucket, signals } = scoreLead(leadInput);

    // Fire-and-forget the side-effects; the response shouldn't wait on them.
    void (async () => {
      try {
        // Generate the PDF in parallel with Notion/notification so total
        // wall time is roughly max(notion, notify, pdf) instead of sum.
        let pdf: Buffer | undefined;
        try {
          pdf = await generateAuditPdf(audit, { name, email, company });
          console.log(
            "[audit] PDF generated",
            `${(pdf.length / 1024).toFixed(1)}KB`,
            `for ${audit.finalUrl}`,
          );
        } catch (err) {
          console.error("[audit] PDF generation failed, sending email without attachment", err);
        }

        await Promise.allSettled([
          pushLeadToNotion({
            type: "audit",
            name,
            email,
            company,
            url: audit.finalUrl,
            score,
            bucket,
            signals,
            source: "audit-tool",
          }),
          notifyLead({
            type: "audit",
            email,
            name,
            company,
            url: audit.finalUrl,
            score: audit.score,
            bucket,
          }),
          sendAuditDelivery({
            to: email,
            name,
            url: audit.finalUrl,
            score: audit.score,
            bucket,
            pdf,
          }),
        ]);
      } catch (err) {
        console.error("[audit] post-run side-effects failed", err);
      }
    })();

    return NextResponse.json({
      ok: true,
      score: audit.score,
      bucket,
      signals,
      url: audit.finalUrl,
      statusCode: audit.statusCode,
      durationMs: audit.durationMs,
      checks: audit.checks,
      errored: audit.errored,
    });
  } catch (err) {
    console.error("[audit] run failed", err);
    return NextResponse.json(
      { ok: false, error: "Audit failed. Please try again." },
      { status: 500 },
    );
  }
}
