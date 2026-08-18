/**
 * Audit PDF generator (Puppeteer).
 *
 * Production (Vercel serverless): uses `puppeteer-core` with
 * `@sparticuz/chromium` because the bundled Chromium in `puppeteer`
 * is too large for Vercel's function size limit (~50MB on hobby plan).
 * @sparticuz/chromium downloads a slimmed-down Chromium tarball
 * (~50MB unpacked, ~30MB on disk) at runtime.
 *
 * Local dev: same `puppeteer-core` with an auto-detected system Chrome
 * (Chrome / Edge / Chromium). If none is found, the generator throws
 * a helpful error and the audit endpoint falls back to email-only.
 *
 * The browser is always closed via try/finally so a render error
 * cannot leak a Chromium process.
 */

import { existsSync } from "fs";
import type { AuditResult } from "@/lib/audit";
import { renderAuditHtml, type AuditLead } from "./pdf-template";

const DEV_CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

function findDevChrome(): string | undefined {
  for (const p of DEV_CHROME_PATHS) {
    if (existsSync(p)) return p;
  }
  return undefined;
}

async function getLaunchOptions() {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    // Dynamic import to keep the heavy Chromium module out of local bundles.
    const chromium = (await import("@sparticuz/chromium")).default;
    return {
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    };
  }

  const executablePath = findDevChrome();
  if (!executablePath) {
    throw new Error(
      "No system Chrome/Edge found for local PDF generation. " +
        "Install Chrome, or run in production where @sparticuz/chromium is used.",
    );
  }
  return {
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    executablePath,
    headless: true,
  };
}

export async function generateAuditPdf(
  result: AuditResult,
  lead: AuditLead = {},
): Promise<Buffer> {
  // Dynamic import so the puppeteer-core module only loads when we actually
  // need to render. This keeps the audit route snappy on email-only paths
  // and avoids any Vercel cold-start penalty on routes that never trigger.
  const puppeteer = (await import("puppeteer-core")).default;

  const launchOptions = await getLaunchOptions();
  const browser = await puppeteer.launch(launchOptions);

  try {
    const page = await browser.newPage();
    const html = renderAuditHtml(result, lead);
    await page.setContent(html, {
      waitUntil: "networkidle0",
      timeout: 20_000,
    });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
    });
    return Buffer.from(pdf);
  } finally {
    await browser.close().catch(() => {
      /* ignore close errors */
    });
  }
}
