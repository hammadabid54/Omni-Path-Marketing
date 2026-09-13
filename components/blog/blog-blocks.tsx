/**
 * BlogBlockRenderer — renders a BlogBlock tree as styled HTML.
 * Server component. No JS, no client deps.
 *
 * Supports inline markdown in text fields: `[anchor](url)` links,
 * `**bold**`, `*italic*`, and `` `inline code` ``.
 * External URLs (http/https) render as <a target="_blank">;
 * relative URLs render as Next.js <Link>.
 */
import type { BlogBlock } from "@/content/blog";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Parse inline markdown in a text field and render as React elements.
 * Supports: `[anchor](url)` links, `**bold**`, `*italic*`, and `` `inline code` ``.
 * External URLs (http/https) render as <a target="_blank">;
 * relative URLs render as Next.js <Link>.
 */
function renderInline(text: string, keyPrefix: string): ReactNode {
  if (!text) return text;
  // Fast path: skip the regex walk if no markdown chars present
  if (!/[\[*`]/.test(text)) return text;

  const parts: ReactNode[] = [];
  // Order matters: links first (longer pattern), then **bold**, *italic*, `code`.
  const regex =
    /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*\n]+?)\*\*|\*([^*\n]+?)\*|`([^`\n]+?)`/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let k = 0;
  const linkClass =
    "text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-300 hover:decoration-blue-300";

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      // [anchor](url) link
      const anchor = match[1];
      const url = match[2];
      if (url.startsWith("http://") || url.startsWith("https://")) {
        parts.push(
          <a
            key={`${keyPrefix}-${k++}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {anchor}
          </a>,
        );
      } else {
        parts.push(
          <Link
            key={`${keyPrefix}-${k++}`}
            href={url}
            className={linkClass}
          >
            {anchor}
          </Link>,
        );
      }
    } else if (match[3] !== undefined) {
      // **bold**
      parts.push(
        <strong
          key={`${keyPrefix}-${k++}`}
          className="font-semibold text-neutral-900"
        >
          {match[3]}
        </strong>,
      );
    } else if (match[4] !== undefined) {
      // *italic*
      parts.push(
        <em key={`${keyPrefix}-${k++}`} className="italic text-neutral-900/90">
          {match[4]}
        </em>,
      );
    } else if (match[5] !== undefined) {
      // `inline code`
      parts.push(
        <code
          key={`${keyPrefix}-${k++}`}
          className="px-1.5 py-0.5 rounded bg-neutral-900/10 text-blue-600 font-mono text-[0.9em]"
        >
          {match[5]}
        </code>,
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

/** Slugify an H2 string for use as a stable HTML id (and TOC anchor target). */
function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Walk all blocks, find H2s, and produce a map from H2 text → unique slug id.
 *  De-duplicates collisions with `-1`, `-2` suffixes (renders as `h-1` if needed). */
function buildHeadingIdMap(blocks: BlogBlock[]): Map<string, string> {
  const map = new Map<string, string>();
  const used = new Set<string>();
  for (const b of blocks) {
    if (b.type === "h2") {
      const base = slugifyHeading(b.text);
      let id = base;
      let n = 2;
      while (used.has(id)) {
        id = `${base}-${n++}`;
      }
      used.add(id);
      map.set(b.text, id);
    }
  }
  return map;
}

export function BlogBlockRenderer({ blocks }: { blocks: BlogBlock[] }) {
  const idMap = buildHeadingIdMap(blocks);
  return (
    <div className="prose-legal">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-neutral-900/80 leading-relaxed text-[17px]">
                {renderInline(b.text, `p-${i}`)}
              </p>
            );
          case "h2": {
            const id = idMap.get(b.text);
            return (
              <h2
                key={i}
                id={id}
                className="mt-14 mb-4 text-2xl md:text-3xl font-bold leading-tight tracking-tight text-neutral-900 scroll-mt-24"
              >
                <a
                  href={`#${id}`}
                  className="no-underline hover:text-blue-600 transition-colors"
                >
                  {renderInline(b.text, `h2-${i}`)}
                </a>
              </h2>
            );
          }
          case "h3":
            return (
              <h3
                key={i}
                className="mt-10 mb-3 text-xl md:text-2xl font-semibold text-neutral-900"
              >
                {renderInline(b.text, `h3-${i}`)}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="my-5 space-y-2 list-disc pl-6 text-neutral-900/80">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed text-[17px]">
                    {renderInline(it, `ul-${i}-${j}`)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="my-5 space-y-2 list-decimal pl-6 text-neutral-900/80">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed text-[17px]">
                    {renderInline(it, `ol-${i}-${j}`)}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-blue-600 pl-6 italic text-xl md:text-2xl text-neutral-900 leading-snug"
              >
                &ldquo;{renderInline(b.text, `q-${i}`)}&rdquo;
                {b.cite && (
                  <footer className="mt-3 text-sm not-italic text-neutral-900/55">
                    — {renderInline(b.cite, `qc-${i}`)}
                  </footer>
                )}
              </blockquote>
            );
          case "callout":
            return (
              <div
                key={i}
                className={[
                  "my-8 rounded-xl border p-5 leading-relaxed",
                  b.tone === "tip" &&
                    "border-blue-600/30 bg-blue-600/5 text-neutral-900/85",
                  b.tone === "warning" &&
                    "border-amber-400/30 bg-amber-400/5 text-neutral-900/85",
                  b.tone === "insight" &&
                    "border-neutral-200/15 bg-neutral-900/4 text-neutral-900/85",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                  {b.tone === "tip"
                    ? "Tip"
                    : b.tone === "warning"
                    ? "Watch out"
                    : "Insight"}
                </div>
                {renderInline(b.text, `co-${i}`)}
              </div>
            );
          case "stats":
            return (
              <div
                key={i}
                className="my-8 grid grid-cols-2 md:grid-cols-4 gap-3"
              >
                {b.items.map((s) => (
                  <div key={s.label} className="bento text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-neutral-900/55">{s.label}</div>
                  </div>
                ))}
              </div>
            );
          case "code":
            return (
              <pre
                key={i}
                className="my-6 overflow-x-auto rounded-lg border border-neutral-200/10 bg-black/40 p-4 text-sm font-mono text-neutral-900/85"
              >
                <code>{b.text}</code>
              </pre>
            );
          case "table":
            return (
              <div key={i} className="my-6 bento overflow-x-auto p-0">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-3 text-left text-[0.7rem] font-medium uppercase tracking-widest text-neutral-900/45 border-b border-neutral-200/5"
                        >
                          {renderInline(h, `th-${i}-${j}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="hover:bg-neutral-900/[0.02]">
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className="px-4 py-3 border-b border-neutral-200/5 text-neutral-900/85"
                          >
                            {renderInline(c, `td-${i}-${j}-${k}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "toc": {
            const h2s = blocks.filter(
              (x): x is { type: "h2"; text: string } => x.type === "h2",
            );
            if (h2s.length < 2) return null;
            return (
              <nav
                key={i}
                aria-label="Table of contents"
                className="my-10 rounded-xl border border-neutral-200/10 bg-neutral-900/[0.02] p-6 md:p-7"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-600 mb-4">
                  In this guide
                </div>
                <ol className="space-y-2.5 text-[15px] list-decimal pl-5 marker:text-neutral-900/40">
                  {h2s.map((h, j) => {
                    const id = idMap.get(h.text);
                    return (
                      <li key={j} className="text-neutral-900/80 leading-snug">
                        <a
                          href={`#${id}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
