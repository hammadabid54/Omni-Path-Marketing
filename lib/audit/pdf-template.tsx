/**
 * Branded multi-page audit report HTML template.
 * Returns a self-contained HTML string with inline styles (no external CSS)
 * so Puppeteer can render it to PDF without any network fetches.
 *
 * Design system (locked — do not change without design approval):
 *   - Charcoal #0A0A0F background, Lime #A3E635 accent
 *   - A4 portrait, system fonts only
 *   - Status badges: pass=lime, warn=amber, fail=red
 */

import type { AuditCheck, AuditResult } from "@/lib/audit";

export interface AuditLead {
  name?: string;
  email?: string;
  company?: string;
}

const C = {
  bg: "#0A0A0F",
  accent: "#A3E635",
  accentBright: "#BEF264",
  text: "#FFFFFF",
  text75: "rgba(255, 255, 255, 0.75)",
  text65: "rgba(255, 255, 255, 0.65)",
  text50: "rgba(255, 255, 255, 0.5)",
  text30: "rgba(255, 255, 255, 0.3)",
  line: "rgba(255, 255, 255, 0.08)",
  lineStrong: "rgba(255, 255, 255, 0.16)",
  card: "rgba(255, 255, 255, 0.025)",
  pass: "#A3E635",
  warn: "#F59E0B",
  fail: "#EF4444",
} as const;

const FONT_STACK =
  '-apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif';
const SERIF_STACK = 'Georgia, "Times New Roman", serif';

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function statusColor(status: AuditCheck["status"]): { bg: string; fg: string; border: string } {
  if (status === "pass") {
    return { bg: "rgba(163, 230, 53, 0.12)", fg: C.pass, border: "rgba(163, 230, 53, 0.35)" };
  }
  if (status === "warn") {
    return { bg: "rgba(245, 158, 11, 0.12)", fg: C.warn, border: "rgba(245, 158, 11, 0.35)" };
  }
  return { bg: "rgba(239, 68, 68, 0.12)", fg: C.fail, border: "rgba(239, 68, 68, 0.35)" };
}

function statusLabel(status: AuditCheck["status"]): string {
  if (status === "pass") return "PASS";
  if (status === "warn") return "WARN";
  return "FAIL";
}

const CATEGORY_META: Record<NonNullable<AuditCheck["category"]>, { label: string; description: string }> = {
  technical: { label: "Technical SEO", description: "Server, security, and crawlability" },
  onpage: { label: "On-Page SEO", description: "Content, headings, and metadata" },
  schema: { label: "Schema & Social", description: "Structured data and share previews" },
  performance: { label: "Mobile & Performance", description: "Viewport, compression, and assets" },
};

const CATEGORY_ORDER: Array<NonNullable<AuditCheck["category"]>> = [
  "technical",
  "onpage",
  "schema",
  "performance",
];

function topIssues(checks: AuditCheck[]): AuditCheck[] {
  return [...checks]
    .filter((c) => c.status !== "pass")
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3);
}

function quickWins(checks: AuditCheck[]): AuditCheck[] {
  // Quick wins: remaining fail/warn, lowest weight first (typically the metadata fixes)
  const problems = checks.filter((c) => c.status !== "pass");
  const issueIds = new Set(topIssues(checks).map((c) => c.id));
  return [...problems]
    .filter((c) => !issueIds.has(c.id))
    .sort((a, b) => a.weight - b.weight)
    .slice(0, 3);
}

/** Inline shared CSS for the report. */
function baseStyles(): string {
  return `
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    html, body { margin: 0; padding: 0; background: ${C.bg}; color: ${C.text}; font-family: ${FONT_STACK}; }
    body { font-size: 13px; line-height: 1.55; -webkit-font-smoothing: antialiased; }
    a { color: ${C.accent}; text-decoration: none; }
    .page {
      width: 210mm;
      height: 297mm;
      padding: 22mm 18mm;
      page-break-after: always;
      position: relative;
      overflow: hidden;
    }
    .page:last-of-type { page-break-after: auto; }
    .logo {
      font-family: ${SERIF_STACK};
      font-style: italic;
      font-size: 22px;
      letter-spacing: -0.01em;
      color: ${C.text};
    }
    .logo .dot { color: ${C.accent}; }
    .pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(163, 230, 53, 0.1);
      border: 1px solid rgba(163, 230, 53, 0.3);
      color: ${C.accent};
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 600;
    }
    .muted { color: ${C.text50}; }
    .dim { color: ${C.text30}; }
    .footer {
      position: absolute;
      left: 18mm;
      right: 18mm;
      bottom: 12mm;
      padding-top: 12px;
      border-top: 1px solid ${C.line};
      color: ${C.text50};
      font-size: 10px;
      letter-spacing: 0.04em;
      display: flex;
      justify-content: space-between;
    }
    .footer a { color: ${C.accent}; }
  `;
}

function pageCover(result: AuditResult, date: string): string {
  const scoreColor = result.score >= 80 ? C.accent : result.score >= 50 ? C.warn : C.fail;
  const scoreLabel = result.score >= 80 ? "STRONG" : result.score >= 50 ? "FAIR" : "NEEDS WORK";
  return `
    <section class="page" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div class="logo">Omni<span class="dot">·</span>Path</div>
        <div class="pill">SEO Audit Report</div>
      </div>

      <div>
        <div class="muted" style="font-size:11px; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:14px;">Audited URL</div>
        <div style="font-size:18px; color:${C.text}; font-weight:500; word-break:break-all; line-height:1.4;">${esc(result.finalUrl)}</div>
      </div>

      <div style="text-align:center; margin: 0 auto;">
        <div class="muted" style="font-size:11px; text-transform:uppercase; letter-spacing:0.18em; margin-bottom:8px;">Overall Score</div>
        <div style="font-family:${SERIF_STACK}; font-style:italic; font-size:160px; line-height:1; color:${scoreColor}; font-weight:500; letter-spacing:-0.04em;">${result.score}</div>
        <div style="font-size:18px; color:${C.text30}; margin-top:-8px;">out of 100 · <span style="color:${scoreColor};">${scoreLabel}</span></div>
      </div>

      <div style="display:flex; align-items:flex-end; justify-content:space-between;">
        <div>
          <div class="muted" style="font-size:10px; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:4px;">Generated</div>
          <div style="font-size:13px; color:${C.text};">${esc(date)}</div>
        </div>
        <div style="text-align:right;">
          <div class="muted" style="font-size:10px; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:4px;">Checks Run</div>
          <div style="font-size:13px; color:${C.text};">${result.checks.length} heuristic checks</div>
        </div>
      </div>

      <div class="footer">
        <span>Generated by OmniPath Audit</span>
        <span>omnipathmarketing.com</span>
      </div>
    </section>
  `;
}

function pageSummary(result: AuditResult): string {
  const issues = topIssues(result.checks);
  const wins = quickWins(result.checks);

  const renderCard = (c: AuditCheck, kind: "issue" | "win"): string => {
    const colors = statusColor(c.status);
    const tag = kind === "issue" ? "ISSUE" : "QUICK WIN";
    const tagColor = kind === "issue" ? C.fail : C.accent;
    return `
      <div style="background:${C.card}; border:1px solid ${C.line}; border-radius:18px; padding:20px 22px; margin-bottom:14px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
          <div style="font-size:10px; font-weight:700; letter-spacing:0.12em; color:${tagColor};">${tag}</div>
          <div style="display:inline-block; padding:3px 9px; border-radius:999px; background:${colors.bg}; border:1px solid ${colors.border}; color:${colors.fg}; font-size:9px; font-weight:700; letter-spacing:0.1em;">${statusLabel(c.status)}</div>
        </div>
        <div style="font-size:15px; font-weight:600; color:${C.text}; margin-bottom:6px;">${esc(c.label)}</div>
        <div style="font-size:12px; color:${C.text65}; line-height:1.55;">${esc(c.detail)}</div>
      </div>
    `;
  };

  return `
    <section class="page">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
        <div class="logo">Omni<span class="dot">·</span>Path</div>
        <div class="pill">Executive Summary</div>
      </div>

      <h1 style="font-family:${SERIF_STACK}; font-style:italic; font-size:36px; line-height:1.15; font-weight:500; letter-spacing:-0.02em; margin:18mm 0 4mm; color:${C.text};">
        What we found, and where to start.
      </h1>
      <p style="color:${C.text65}; font-size:13px; margin:0 0 10mm; max-width:150mm;">
        We ran <strong style="color:${C.text};">${result.checks.length} heuristic checks</strong> against <strong style="color:${C.text};">${esc(result.finalUrl)}</strong>. Below are the highest-impact issues and the easiest wins — start with the wins for quick momentum.
      </p>

      <div style="display:flex; gap:8mm;">
        <div style="flex:1;">
          <h2 style="font-size:11px; text-transform:uppercase; letter-spacing:0.14em; color:${C.text50}; margin:0 0 12px; font-weight:700;">Top 3 issues</h2>
          ${issues.length === 0 ? `<div style="background:${C.card}; border:1px solid ${C.line}; border-radius:18px; padding:24px; text-align:center; color:${C.text65};">No failing checks — clean run.</div>` : issues.map((c) => renderCard(c, "issue")).join("")}
        </div>
        <div style="flex:1;">
          <h2 style="font-size:11px; text-transform:uppercase; letter-spacing:0.14em; color:${C.text50}; margin:0 0 12px; font-weight:700;">Top 3 quick wins</h2>
          ${wins.length === 0 ? `<div style="background:${C.card}; border:1px solid ${C.line}; border-radius:18px; padding:24px; text-align:center; color:${C.text65};">No further issues to fix.</div>` : wins.map((c) => renderCard(c, "win")).join("")}
        </div>
      </div>

      <div class="footer">
        <span>OmniPath Audit · Page 2 of 4</span>
        <span>omnipathmarketing.com</span>
      </div>
    </section>
  `;
}

function pageChecklist(result: AuditResult): string {
  const groups: Record<string, AuditCheck[]> = {};
  for (const cat of CATEGORY_ORDER) groups[cat] = [];
  for (const c of result.checks) {
    const cat = c.category ?? "onpage";
    (groups[cat] ||= []).push(c);
  }

  const renderRow = (c: AuditCheck): string => {
    const colors = statusColor(c.status);
    return `
      <tr>
        <td style="width:34px; padding:9px 10px 9px 0; vertical-align:top;">
          <div style="display:inline-block; min-width:30px; padding:3px 8px; border-radius:999px; background:${colors.bg}; border:1px solid ${colors.border}; color:${colors.fg}; font-size:9px; font-weight:700; letter-spacing:0.1em; text-align:center;">${statusLabel(c.status)}</div>
        </td>
        <td style="padding:9px 8px 9px 0; vertical-align:top; width:52mm;">
          <div style="font-size:12px; color:${C.text}; font-weight:600; line-height:1.3;">${esc(c.label)}</div>
        </td>
        <td style="padding:9px 0; vertical-align:top; color:${C.text65}; font-size:11px; line-height:1.45;">
          ${esc(c.detail)}
        </td>
      </tr>
    `;
  };

  const sections = CATEGORY_ORDER.map((cat) => {
    const items = groups[cat] ?? [];
    if (items.length === 0) return "";
    const meta = CATEGORY_META[cat];
    return `
      <div style="margin-bottom:9mm;">
        <div style="display:flex; align-items:baseline; justify-content:space-between; border-bottom:1px solid ${C.line}; padding-bottom:6px; margin-bottom:8px;">
          <h3 style="margin:0; font-size:13px; color:${C.text}; font-weight:700; letter-spacing:-0.005em;">${esc(meta.label)}</h3>
          <span class="muted" style="font-size:10px; letter-spacing:0.04em;">${esc(meta.description)}</span>
        </div>
        <table style="width:100%; border-collapse:collapse;">
          <tbody>
            ${items.map(renderRow).join("")}
          </tbody>
        </table>
      </div>
    `;
  }).join("");

  return `
    <section class="page">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
        <div class="logo">Omni<span class="dot">·</span>Path</div>
        <div class="pill">Full Checklist</div>
      </div>

      <h1 style="font-family:${SERIF_STACK}; font-style:italic; font-size:32px; line-height:1.15; font-weight:500; letter-spacing:-0.02em; margin:14mm 0 2mm; color:${C.text};">
        All ${result.checks.length} checks, by category.
      </h1>
      <p style="color:${C.text65}; font-size:12px; margin:0 0 9mm; max-width:150mm;">
        Each row shows the check, its result, and the exact detail we measured. Anything in red is a blocking issue; amber is a recommended improvement.
      </p>

      ${sections}

      <div class="footer">
        <span>OmniPath Audit · Page 3 of 4</span>
        <span>omnipathmarketing.com</span>
      </div>
    </section>
  `;
}

function pageCta(result: AuditResult, lead: AuditLead): string {
  const firstName = lead.name?.split(/\s+/)[0];
  const headline = firstName
    ? `${firstName}, want us to fix this?`
    : "Want us to fix this?";
  return `
    <section class="page" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div class="logo">Omni<span class="dot">·</span>Path</div>
        <div class="pill">Next step</div>
      </div>

      <div style="text-align:center; margin: 0 auto; max-width:160mm;">
        <h1 style="font-family:${SERIF_STACK}; font-style:italic; font-size:54px; line-height:1.05; font-weight:500; letter-spacing:-0.02em; margin:0 0 8mm; color:${C.text};">
          ${esc(headline)}
        </h1>
        <p style="color:${C.text65}; font-size:15px; line-height:1.6; margin:0 auto 12mm; max-width:140mm;">
          We fixed the issues for clients on this exact scan in under a week. You get a senior strategist, an AI execution layer, and a flat monthly price — no retainers, no surprises.
        </p>

        <div style="display:flex; justify-content:center; gap:6mm; margin-bottom:14mm;">
          <a href="https://omnipathmarketing.com/contact" style="display:inline-block; background:${C.accent}; color:${C.bg}; padding:18px 32px; border-radius:14px; font-weight:700; font-size:15px; letter-spacing:-0.005em;">Get a free 30-min strategy call</a>
          <a href="https://omnipathmarketing.com/pricing" style="display:inline-block; background:transparent; color:${C.text}; padding:18px 32px; border-radius:14px; font-weight:600; font-size:15px; border:1px solid ${C.lineStrong};">See pricing</a>
        </div>

        <div style="display:flex; justify-content:center; gap:18mm; color:${C.text50}; font-size:11px; letter-spacing:0.08em; text-transform:uppercase;">
          <div>
            <div style="color:${C.text}; font-size:22px; font-weight:700; letter-spacing:-0.01em; font-family:${SERIF_STACK}; font-style:italic;">${result.checks.length}</div>
            <div style="margin-top:2px;">Checks run</div>
          </div>
          <div>
            <div style="color:${C.text}; font-size:22px; font-weight:700; letter-spacing:-0.01em; font-family:${SERIF_STACK}; font-style:italic;">${result.score}<span style="color:${C.text30}; font-size:14px;">/100</span></div>
            <div style="margin-top:2px;">Your score</div>
          </div>
          <div>
            <div style="color:${C.text}; font-size:22px; font-weight:700; letter-spacing:-0.01em; font-family:${SERIF_STACK}; font-style:italic;">5h</div>
            <div style="margin-top:2px;">Our turnaround</div>
          </div>
        </div>
      </div>

      <div class="footer">
        <span>OmniPath · Fully remote · Working with clients globally</span>
        <span>omnipathmarketing.com</span>
      </div>
    </section>
  `;
}

/**
 * Build the full self-contained HTML for the audit PDF.
 * Caller is expected to pass the HTML to Puppeteer (`page.setContent`).
 */
export function renderAuditHtml(result: AuditResult, lead: AuditLead = {}): string {
  const date = formatDate(new Date());
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>OmniPath SEO Audit — ${esc(result.finalUrl)}</title>
  <style>${baseStyles()}</style>
</head>
<body>
  ${pageCover(result, date)}
  ${pageSummary(result)}
  ${pageChecklist(result)}
  ${pageCta(result, lead)}
</body>
</html>`;
}
