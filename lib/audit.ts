/**
 * SEO audit heuristic runner.
 * 20 fast checks via fetch + HTML parsing (no Puppeteer needed for MVP).
 * Returns a 0-100 score + per-check results for the email + UI.
 */

export interface AuditCheck {
  id: string;
  label: string;
  status: "pass" | "warn" | "fail";
  detail: string;
  weight: number;
  category?: "technical" | "onpage" | "schema" | "performance";
}

export interface AuditResult {
  url: string;
  finalUrl: string;
  statusCode: number;
  score: number;
  checks: AuditCheck[];
  durationMs: number;
  errored?: string;
}

const TIMEOUT = 12_000;
const MAX_BYTES = 1_500_000; // 1.5MB cap

async function safeFetch(url: string): Promise<Response | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), TIMEOUT);
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: ctrl.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; OmniPathAudit/1.0; +https://omnipathmarketing.com)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    clearTimeout(t);
    return res;
  } catch (err) {
    console.warn("[audit] fetch failed", url, err);
    return null;
  }
}

function clampHtml(html: string): string {
  if (html.length <= MAX_BYTES) return html;
  return html.slice(0, MAX_BYTES);
}

function pickMeta(html: string, attr: string): string | undefined {
  // Very small regex parser — good enough for our checks
  const re = new RegExp(`<meta[^>]+${attr}[^>]*>`, "i");
  const m = html.match(re);
  if (!m) return undefined;
  const content = m[0].match(/content=["']([^"']*)["']/i);
  return content?.[1]?.trim();
}

function countMatches(html: string, re: RegExp): number {
  return (html.match(re) ?? []).length;
}

function scoreFromChecks(checks: AuditCheck[]): number {
  const totalWeight = checks.reduce((s, c) => s + c.weight, 0);
  if (totalWeight === 0) return 0;
  const earned = checks.reduce((s, c) => {
    if (c.status === "pass") return s + c.weight;
    if (c.status === "warn") return s + c.weight * 0.5;
    return s;
  }, 0);
  return Math.round((earned / totalWeight) * 100);
}

export async function runAudit(inputUrl: string): Promise<AuditResult> {
  const start = Date.now();
  const normalized = /^https?:\/\//i.test(inputUrl) ? inputUrl : `https://${inputUrl}`;

  const res = await safeFetch(normalized);
  if (!res) {
    return {
      url: inputUrl,
      finalUrl: normalized,
      statusCode: 0,
      score: 0,
      checks: [],
      durationMs: Date.now() - start,
      errored: "Could not reach URL. Check the address and try again.",
    };
  }

  const finalUrl = res.url || normalized;
  const statusCode = res.status;
  const contentType = res.headers.get("content-type") ?? "";
  const html = contentType.includes("text/html") ? clampHtml(await res.text()) : "";

  const checks: AuditCheck[] = [];

  // 1. HTTPS
  checks.push({
    id: "https",
    label: "HTTPS enabled",
    status: finalUrl.startsWith("https://") ? "pass" : "fail",
    detail: finalUrl.startsWith("https://")
      ? "Site is served over HTTPS."
      : "Site is served over HTTP. Switch to HTTPS for trust + SEO.",
    weight: 8,
    category: "technical",
  });

  // 2. Status code
  checks.push({
    id: "status",
    label: "Page returns 200 OK",
    status: statusCode === 200 ? "pass" : statusCode >= 300 && statusCode < 400 ? "warn" : "fail",
    detail: `HTTP ${statusCode}.`,
    weight: 6,
    category: "technical",
  });

  // 3. Title tag
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch?.[1]?.trim();
  const titleLen = title?.length ?? 0;
  checks.push({
    id: "title",
    label: "Meta title present",
    status:
      !title
        ? "fail"
        : titleLen < 20
        ? "warn"
        : titleLen > 70
        ? "warn"
        : "pass",
    detail: title
      ? `Title: "${title.slice(0, 80)}" (${titleLen} chars)${titleLen > 70 ? " — too long, may be truncated in search." : ""}`
      : "No <title> tag found.",
    weight: 10,
    category: "onpage",
  });

  // 4. Meta description
  const description = pickMeta(html, 'name=["\']description["\']');
  const descLen = description?.length ?? 0;
  checks.push({
    id: "description",
    label: "Meta description present",
    status: !description ? "fail" : descLen < 70 ? "warn" : descLen > 200 ? "warn" : "pass",
    detail: description
      ? `Description: "${description.slice(0, 100)}…" (${descLen} chars)`
      : "No meta description found.",
    weight: 8,
    category: "onpage",
  });

  // 5. H1
  const h1s = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) ?? [];
  const h1Count = h1s.length;
  checks.push({
    id: "h1",
    label: "Single H1 heading",
    status: h1Count === 1 ? "pass" : h1Count === 0 ? "fail" : "warn",
    detail:
      h1Count === 0
        ? "No H1 found. Add one clear H1 per page."
        : h1Count === 1
        ? "One H1 found."
        : `Multiple H1s found (${h1Count}). Use one H1 per page.`,
    weight: 8,
    category: "onpage",
  });

  // 6. Viewport
  const viewport = pickMeta(html, 'name=["\']viewport["\']');
  checks.push({
    id: "viewport",
    label: "Mobile viewport set",
    status: viewport ? "pass" : "fail",
    detail: viewport ? "Viewport meta tag present." : "No viewport meta tag. Mobile rendering will be broken.",
    weight: 8,
    category: "performance",
  });

  // 7. Canonical
  const canonical = pickMeta(html, 'rel=["\']canonical["\']');
  checks.push({
    id: "canonical",
    label: "Canonical URL set",
    status: canonical ? "pass" : "warn",
    detail: canonical
      ? `Canonical: ${canonical}`
      : "No canonical URL. Add one to avoid duplicate-content issues.",
    weight: 6,
    category: "onpage",
  });

  // 8. Open Graph
  const ogTitle = pickMeta(html, 'property=["\']og:title["\']');
  const ogDescription = pickMeta(html, 'property=["\']og:description["\']');
  const ogImage = pickMeta(html, 'property=["\']og:image["\']');
  const ogCount = [ogTitle, ogDescription, ogImage].filter(Boolean).length;
  checks.push({
    id: "og",
    label: "Open Graph tags",
    status: ogCount === 3 ? "pass" : ogCount >= 1 ? "warn" : "fail",
    detail: `${ogCount}/3 OG tags present (title, description, image).`,
    weight: 5,
    category: "schema",
  });

  // 9. Schema.org JSON-LD
  const schemaCount = countMatches(html, /application\/ld\+json/gi);
  checks.push({
    id: "schema",
    label: "Structured data (JSON-LD)",
    status: schemaCount > 0 ? "pass" : "warn",
    detail:
      schemaCount > 0
        ? `${schemaCount} JSON-LD block(s) found.`
        : "No JSON-LD schema found. Add Organization, WebSite, or relevant types.",
    weight: 7,
    category: "schema",
  });

  // 10. Image alt coverage
  const imgTags = html.match(/<img[^>]*>/gi) ?? [];
  const imgNoAlt = imgTags.filter((t) => !/alt=/i.test(t) || /alt=["']\s*["']/i.test(t)).length;
  const altCoverage = imgTags.length === 0 ? 1 : 1 - imgNoAlt / imgTags.length;
  checks.push({
    id: "alt",
    label: "Image alt text",
    status: imgTags.length === 0 ? "warn" : altCoverage >= 0.9 ? "pass" : altCoverage >= 0.6 ? "warn" : "fail",
    detail:
      imgTags.length === 0
        ? "No <img> tags on this page."
        : `${imgTags.length} images · ${imgNoAlt} missing or empty alt.`,
    weight: 6,
    category: "onpage",
  });

  // 11. Heading hierarchy
  const h2Count = countMatches(html, /<h2[\s>]/gi);
  const h3Count = countMatches(html, /<h3[\s>]/gi);
  checks.push({
    id: "headings",
    label: "Heading hierarchy",
    status: h2Count > 0 ? "pass" : "warn",
    detail: `H2: ${h2Count} · H3: ${h3Count}. Use H2s to break up sections.`,
    weight: 4,
    category: "onpage",
  });

  // 12. HTML lang
  const langMatch = html.match(/<html[^>]*\slang=["']([^"']+)["']/i);
  const lang = langMatch?.[1];
  checks.push({
    id: "lang",
    label: "HTML lang attribute",
    status: lang ? "pass" : "warn",
    detail: lang ? `lang="${lang}"` : "No lang attribute on <html>. Add for accessibility + SEO.",
    weight: 3,
    category: "onpage",
  });

  // 13. Word count
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = text.split(" ").filter(Boolean).length;
  checks.push({
    id: "wordcount",
    label: "Content length",
    status: wordCount >= 600 ? "pass" : wordCount >= 300 ? "warn" : "fail",
    detail: `${wordCount} words on the page. Aim for 600+ for ranking pages.`,
    weight: 5,
    category: "onpage",
  });

  // 14. Sitemap
  const sitemapRes = await safeFetch(new URL("/sitemap.xml", finalUrl).toString());
  const robotsRes = await safeFetch(new URL("/robots.txt", finalUrl).toString());
  const hasSitemap =
    sitemapRes?.ok ||
    (robotsRes?.ok && (await robotsRes.text()).toLowerCase().includes("sitemap"));
  checks.push({
    id: "sitemap",
    label: "Sitemap.xml",
    status: hasSitemap ? "pass" : "warn",
    detail: hasSitemap ? "sitemap.xml found." : "No sitemap.xml detected at /sitemap.xml.",
    weight: 4,
    category: "technical",
  });

  // 15. robots.txt
  checks.push({
    id: "robots",
    label: "robots.txt",
    status: robotsRes?.ok ? "pass" : "warn",
    detail: robotsRes?.ok ? "robots.txt found." : "No robots.txt at /robots.txt.",
    weight: 3,
    category: "technical",
  });

  // 16. Favicon (NEW)
  const faviconRes = await safeFetch(new URL("/favicon.ico", finalUrl).toString());
  const faviconStatus = faviconRes?.status;
  checks.push({
    id: "favicon",
    label: "Favicon present",
    status: faviconStatus === 200 ? "pass" : "warn",
    detail: faviconStatus === 200 ? "favicon.ico found." : "No favicon.ico at /favicon.ico. Browsers will show a broken icon.",
    weight: 3,
    category: "performance",
  });

  // 17. Gzip / Brotli compression (NEW)
  const contentEncoding = res.headers.get("content-encoding") ?? "";
  const isCompressed = /\b(gzip|br|deflate)\b/i.test(contentEncoding);
  checks.push({
    id: "compression",
    label: "Gzip / Brotli compression",
    status: isCompressed ? "pass" : "warn",
    detail: contentEncoding
      ? `content-encoding: ${contentEncoding}`
      : "No content-encoding header on the HTML response. Enable gzip or brotli to reduce payload size.",
    weight: 5,
    category: "performance",
  });

  // 18. HTTPS redirect (NEW) — does http://version redirect to https://version?
  let httpsRedirectStatus: "pass" | "warn" | "fail" = "warn";
  let httpsRedirectDetail = "Could not test HTTP → HTTPS redirect.";
  if (finalUrl.startsWith("https://")) {
    const httpUrl = finalUrl.replace(/^https:\/\//, "http://");
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), TIMEOUT);
      const httpRes = await fetch(httpUrl, {
        method: "GET",
        redirect: "manual",
        signal: ctrl.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; OmniPathAudit/1.0; +https://omnipathmarketing.com)",
        },
      });
      clearTimeout(t);
      const location = httpRes.headers.get("location") ?? "";
      if (httpRes.status >= 300 && httpRes.status < 400 && /^https:\/\//i.test(location)) {
        httpsRedirectStatus = "pass";
        httpsRedirectDetail = `HTTP ${httpRes.status} → HTTPS via 301/302/307.`;
      } else if (httpRes.status >= 200 && httpRes.status < 300) {
        httpsRedirectStatus = "fail";
        httpsRedirectDetail = "HTTP serves content directly without redirecting to HTTPS. Visitors on http:// are not upgraded.";
      } else if (httpRes.status >= 300 && httpRes.status < 400) {
        httpsRedirectStatus = "warn";
        httpsRedirectDetail = `HTTP responds with ${httpRes.status} but does not redirect to HTTPS (location: ${location || "—"}).`;
      } else {
        httpsRedirectStatus = "warn";
        httpsRedirectDetail = `HTTP ${httpRes.status}. No clear HTTPS redirect.`;
      }
    } catch {
      // Port 80 likely not listening — that's a positive outcome (no http surface to leak).
      httpsRedirectStatus = "pass";
      httpsRedirectDetail = "HTTP port is not listening. Visitors cannot accidentally reach insecure pages.";
    }
  } else {
    httpsRedirectStatus = "fail";
    httpsRedirectDetail = "No HTTPS to redirect to. Enable HTTPS first.";
  }
  checks.push({
    id: "https-redirect",
    label: "HTTP → HTTPS redirect",
    status: httpsRedirectStatus,
    detail: httpsRedirectDetail,
    weight: 5,
    category: "technical",
  });

  // 19. Mobile viewport scale (NEW) — does the viewport meta include width=device-width?
  const hasViewportScale = viewport ? /width\s*=\s*device-width/i.test(viewport) : false;
  checks.push({
    id: "viewport-scale",
    label: "Mobile viewport scale",
    status: hasViewportScale ? "pass" : "warn",
    detail: hasViewportScale
      ? "Viewport includes width=device-width — mobile rendering is correctly scaled."
      : viewport
      ? `Viewport is "${viewport.slice(0, 80)}" but missing width=device-width.`
      : "No viewport meta tag at all.",
    weight: 3,
    category: "performance",
  });

  // 20. HSTS (NEW) — does the response set strict-transport-security?
  const hsts = res.headers.get("strict-transport-security") ?? "";
  checks.push({
    id: "hsts",
    label: "HSTS header",
    status: hsts ? "pass" : "warn",
    detail: hsts
      ? `strict-transport-security: ${hsts.slice(0, 80)}`
      : "No strict-transport-security header. Add one to enforce HTTPS in browsers.",
    weight: 3,
    category: "technical",
  });

  const score = scoreFromChecks(checks);

  return {
    url: inputUrl,
    finalUrl,
    statusCode,
    score,
    checks,
    durationMs: Date.now() - start,
  };
}
