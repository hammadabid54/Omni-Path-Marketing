// Local smoke test for the audit PDF generator.
// Not part of the app — run with: npx tsx scripts/test-pdf.ts
// (or `node --import tsx scripts/test-pdf.ts` if tsx is available)

import { runAudit } from "../lib/audit";
import { generateAuditPdf } from "../lib/audit/generate-pdf";
import { renderAuditHtml } from "../lib/audit/pdf-template";
import { writeFileSync } from "fs";

async function main() {
  const url = process.argv[2] ?? "https://omnipathmarketing.com";
  const name = process.argv[3] ?? "Test Lead";
  const email = process.argv[4] ?? "test@example.com";

  console.log(`[smoke] running audit against ${url}…`);
  const audit = await runAudit(url);
  console.log(`[smoke] audit done — score ${audit.score}/100, ${audit.checks.length} checks`);

  console.log(`[smoke] rendering HTML template…`);
  const html = renderAuditHtml(audit, { name, email, company: "Acme Co" });
  writeFileSync("audit-preview.html", html);
  console.log(`[smoke] wrote audit-preview.html (${(html.length / 1024).toFixed(1)}KB)`);

  console.log(`[smoke] generating PDF via Puppeteer…`);
  const pdf = await generateAuditPdf(audit, { name, email, company: "Acme Co" });
  writeFileSync("audit-preview.pdf", pdf);
  console.log(`[smoke] wrote audit-preview.pdf (${(pdf.length / 1024).toFixed(1)}KB)`);
}

main().catch((err) => {
  console.error("[smoke] FAILED:", err);
  process.exit(1);
});
