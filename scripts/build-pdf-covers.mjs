#!/usr/bin/env node
/**
 * build-pdf-covers.mjs
 *
 * One-time script: extract the second-to-last page of every PDF in
 * public/case-study-pdfs/ as a PNG cover and save it to
 * public/case-study-pdfs/covers/<slug>.png.
 *
 * The cover is used as the thumbnail on the PDF Portfolio slider on
 * / and /services/seo. It matches the case-study slug in
 * content/case-study-pdfs.ts so the React component can reference the
 * right file.
 *
 * Why this exists:
 *   - We don't want to ship a heavy PDF.js bundle inside the Next.js app
 *   - We don't want the user to download a 250KB PDF just to see a thumbnail
 *   - The PDFs are anonymized on the UI but contain real client names inside;
 *     the cover image is the only "preview" we show in the card grid.
 *
 * How it works:
 *   1. Launch a headless Chrome via puppeteer-core (same path the audit tool uses).
 *   2. For each PDF, navigate to scripts/pdf-cover-viewer.html?file=<pdf-url>
 *      which loads PDF.js from scripts/vendor/pdfjs/ and renders the
 *      second-to-last page to a <canvas>.
 *   3. Wait for window.__ready === true, then screenshot the canvas.
 *   4. Save as public/case-study-pdfs/covers/<slug>.png.
 *
 * Usage:
 *   node scripts/build-pdf-covers.mjs
 *
 * The script is idempotent — it overwrites existing PNGs in the covers/
 * directory. It is NOT part of `next build`; it only needs to run when
 * the underlying PDFs change or new PDFs are added.
 */

import puppeteer from "puppeteer-core";
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

const PDFS_DIR = path.join(PROJECT_ROOT, "public", "case-study-pdfs");
const COVERS_DIR = path.join(PDFS_DIR, "covers");
const VIEWER_HTML = path.join(__dirname, "pdf-cover-viewer.html");
const VENDOR_DIR = path.join(__dirname, "vendor", "pdfjs");

// PDF.js is downloaded from unpkg (not an npm dep — keeps the project
// package.json clean). If the local vendor copy is missing, fetch it.
const PDFJS_VERSION = "4.7.76";
const PDFJS_BASE = `https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build`;
const PDFJS_FILES = [
  { url: `${PDFJS_BASE}/pdf.min.mjs`, out: "pdf.min.mjs" },
  { url: `${PDFJS_BASE}/pdf.worker.min.mjs`, out: "pdf.worker.min.mjs" },
];

// PDF -> cover filename mapping mirrors content/case-study-pdfs.ts.
// Keep the slugs in sync with the data file.
const COVER_SLUGS = {
  "Hammad_Abid_Dental_Corner_SEO_Case_Study.pdf": "dental-group-sydney-metro",
  "Hammad_Abid_Dental_Specialists_SEO_Case_Study.pdf": "dental-practice-inner-west",
  "Hammad_Abid_Ferny_Hills_Dental_SEO_Case_Study.pdf": "family-dental-brisbane",
  "Hammad_Abid_Glenroy_Smiles_Dental_SEO_Case_Study.pdf": "cosmetic-dental-melbourne-north",
  "Hammad_Abid_Hand_Therapy_Clinic_Sydney_SEO_Case_Study.pdf": "hand-therapy-practice-sydney",
  "Hammad_Abid_Macquarie_Dental_SEO_Case_Study.pdf": "dental-group-macquarie-park",
  "Hammad_Abid_Marham_PK_SEO_Case_Study.pdf": "healthtech-platform-pakistan",
  "Hammad_Abid_My_Dentist_Alderley_Newmarket_SEO_Case_Study.pdf": "family-dental-brisbane-north",
  "Hammad_Abid_Pymble_Dental_SEO_Case_Study.pdf": "dental-group-upper-north-shore",
  "Hammad_Abid_Route2Health_SEO_Case_Study.pdf": "health-booking-platform-anz",
  "Hammad_Abid_Southlakes_Dental_SEO_Case_Study.pdf": "family-dental-south-lakes",
  "Hammad_Abid_Tamworth_Dental_Care_SEO_Case_Study.pdf": "regional-dental-new-england",
  "Hammad_Abid_Taree_Dental_Care_SEO_Case_Study.pdf": "regional-dental-mid-north-coast",
  "Hammad_Abid_Torquay_Dental_SEO_Case_Study.pdf": "family-dental-surf-coast",
};

const DEV_CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

function findDevChrome() {
  for (const p of DEV_CHROME_PATHS) {
    if (existsSync(p)) return p;
  }
  return null;
}

function toFileUrl(p) {
  return pathToFileURL(p).href;
}

async function ensureVendor() {
  mkdirSync(VENDOR_DIR, { recursive: true });
  for (const f of PDFJS_FILES) {
    const outPath = path.join(VENDOR_DIR, f.out);
    if (existsSync(outPath) && statSync(outPath).size > 50_000) continue;
    console.log(`Downloading ${f.out} from unpkg…`);
    const res = await fetch(f.url);
    if (!res.ok) {
      throw new Error(`Failed to download ${f.url}: ${res.status} ${res.statusText}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(outPath, buf);
    console.log(`  → ${f.out} (${(buf.length / 1024).toFixed(1)} KB)`);
  }
}

async function main() {
  if (!existsSync(PDFS_DIR)) {
    console.error(`PDFs directory not found: ${PDFS_DIR}`);
    process.exit(1);
  }
  if (!existsSync(VIEWER_HTML)) {
    console.error(`Cover viewer not found: ${VIEWER_HTML}`);
    process.exit(1);
  }

  await ensureVendor();

  const pdfs = readdirSync(PDFS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .sort();

  if (pdfs.length === 0) {
    console.error(`No PDFs found in ${PDFS_DIR}`);
    process.exit(1);
  }

  // Sanity-check every PDF is mapped to a slug.
  const missing = pdfs.filter((f) => !COVER_SLUGS[f]);
  if (missing.length > 0) {
    console.error(`PDFs without a cover slug mapping (add to COVER_SLUGS):`);
    for (const m of missing) console.error(`  - ${m}`);
    process.exit(1);
  }

  mkdirSync(COVERS_DIR, { recursive: true });

  const chromePath = findDevChrome();
  if (!chromePath) {
    console.error(
      "No system Chrome/Edge found. Install Chrome or set CHROME_PATH env var.",
    );
    console.error("Looked in:");
    for (const p of DEV_CHROME_PATHS) console.error(`  - ${p}`);
    process.exit(1);
  }
  console.log(`Using browser: ${chromePath}`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--allow-file-access-from-files",
    ],
    headless: true,
  });

  let totalBytes = 0;
  let successCount = 0;
  let errorCount = 0;

  try {
    for (const pdf of pdfs) {
      const slug = COVER_SLUGS[pdf];
      const pdfPath = path.join(PDFS_DIR, pdf);
      const coverPath = path.join(COVERS_DIR, `${slug}.png`);

      const viewerUrl = `${toFileUrl(VIEWER_HTML)}?file=${encodeURIComponent(toFileUrl(pdfPath))}`;

      const page = await browser.newPage();
      // Generous viewport — actual canvas is sized by the PDF page itself.
      await page.setViewport({ width: 1400, height: 1800, deviceScaleFactor: 2 });

      try {
        await page.goto(viewerUrl, { waitUntil: "load", timeout: 30_000 });
        // Poll for window.__ready (true = ok, "error" = fail).
        await page.waitForFunction(
          () => window.__ready === true || window.__ready === "error",
          { timeout: 30_000, polling: 100 },
        );

        const ready = await page.evaluate(() => window.__ready);
        if (ready !== true) {
          const errMsg = await page.evaluate(() => window.__pdfError || "unknown");
          throw new Error(`viewer reported error: ${errMsg}`);
        }

        const meta = await page.evaluate(() => window.__pdfMeta);
        const canvasEl = await page.$("#canvas");
        if (!canvasEl) throw new Error("canvas element not found");

        await canvasEl.screenshot({ path: coverPath, type: "png" });

        const size = statSync(coverPath).size;
        totalBytes += size;
        successCount += 1;
        console.log(
          `  ✓ ${pdf} → ${slug}.png  (${meta.width}×${meta.height} · page ${meta.targetPage}/${meta.numPages} · ${(size / 1024).toFixed(1)} KB)`,
        );
      } catch (err) {
        errorCount += 1;
        console.error(`  ✗ ${pdf}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log("");
  console.log(`Done. ${successCount}/${pdfs.length} covers built.`);
  if (errorCount > 0) {
    console.log(`${errorCount} failed.`);
    process.exit(1);
  }
  console.log(`Total: ${(totalBytes / 1024 / 1024).toFixed(2)} MB across ${successCount} files.`);
  console.log(`Output: ${COVERS_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
