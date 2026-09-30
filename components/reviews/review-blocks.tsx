/**
 * ReviewBlockRenderer — renders a ReviewBlock tree as styled HTML.
 * Server component. No JS, no client deps.
 *
 * Extends the blog-blocks renderer with review-specific blocks:
 * - verdict (winner banner for vs-articles)
 * - pros-cons (two-column comparison)
 * - affiliate-cta (FTC-compliant contextual CTA)
 * - faq (Q&A list with stable anchors)
 *
 * Supports inline markdown in text fields: `[anchor](url)` links,
 * `**bold**`, `*italic*`, and `` `inline code` ``.
 *
 * Heading IDs are computed via the shared `buildHeadingIdMap` helper so
 * the auto-generated TOC can deep-link to each H2. H2s are NOT wrapped
 * in <a> — they're plain anchors with `id`, but the text is selectable
 * for better readability.
 */
import type { ReviewBlock } from "@/content/reviews/types";
import Link from "next/link";
import type { ReactNode } from "react";
import { LinkButton } from "@/components/ui/button";
import { buildHeadingIdMap, slugifyHeading } from "@/components/shared/toc";

function renderInline(text: string, keyPrefix: string): ReactNode {
  if (!text) return text;
  if (!/[\[*`]/.test(text)) return text;

  const parts: ReactNode[] = [];
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
      parts.push(
        <strong
          key={`${keyPrefix}-${k++}`}
          className="font-semibold text-neutral-900"
        >
          {match[3]}
        </strong>,
      );
    } else if (match[4] !== undefined) {
      parts.push(
        <em key={`${keyPrefix}-${k++}`} className="italic text-neutral-900/90">
          {match[4]}
        </em>,
      );
    } else if (match[5] !== undefined) {
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

export function ReviewBlockRenderer({ blocks }: { blocks: ReviewBlock[] }) {
  const idMap = buildHeadingIdMap(blocks);
  return (
    <div className="article-prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-neutral-900/85 leading-[1.75] text-[17px] mb-5">
                {renderInline(b.text, `p-${i}`)}
              </p>
            );
          case "h2": {
            const id = idMap.get(b.text);
            return (
              <h2
                key={i}
                id={id}
                className="mt-20 mb-6 text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 scroll-mt-24"
              >
                {renderInline(b.text, `h2-${i}`)}
              </h2>
            );
          }
          case "h3":
            return (
              <h3
                key={i}
                className="mt-12 mb-4 text-2xl md:text-3xl font-semibold text-neutral-900 leading-snug"
              >
                {renderInline(b.text, `h3-${i}`)}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="my-6 space-y-3 list-disc pl-6 text-neutral-900/85 marker:text-blue-600">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-[1.7] text-[17px]">
                    {renderInline(it, `ul-${i}-${j}`)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="my-6 space-y-3 list-decimal pl-6 text-neutral-900/85 marker:text-blue-600 marker:font-semibold">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-[1.7] text-[17px]">
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
                  "my-8 rounded-xl border p-5 leading-[1.7]",
                  b.tone === "tip" &&
                    "border-blue-600/30 bg-blue-600/5 text-neutral-900/90",
                  b.tone === "warning" &&
                    "border-amber-400/30 bg-amber-400/5 text-neutral-900/90",
                  b.tone === "insight" &&
                    "border-neutral-200/15 bg-neutral-900/4 text-neutral-900/90",
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
          case "toc":
            // Manual toc blocks are now ignored — the route auto-generates
            // the TOC at the top of the article from H2s. Keeping the case
            // here so existing content with `toc` blocks still typechecks.
            return null;
          case "verdict": {
            const winnerLabel =
              b.winner === "tool-a"
                ? b.toolA
                : b.winner === "tool-b"
                ? b.toolB
                : "It's a tie";
            const winnerTone =
              b.winner === "tie"
                ? "border-neutral-200/15 bg-neutral-900/4 text-neutral-900/90"
                : "border-blue-600/30 bg-blue-600/5 text-neutral-900/90";
            return (
              <div
                key={i}
                className={`my-10 rounded-xl border p-6 ${winnerTone}`}
              >
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                  Winner: {winnerLabel}
                </div>
                <p className="text-[16px] leading-relaxed text-neutral-900/85">
                  {renderInline(b.text, `v-${i}`)}
                </p>
              </div>
            );
          }
          case "pros-cons":
            return (
              <div
                key={i}
                className="my-10 grid gap-4 md:grid-cols-2"
              >
                {[b.toolA, b.toolB].map((tool, idx) => (
                  <div key={tool.name} className="bento p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-base font-semibold text-neutral-900">
                        {tool.name}
                      </span>
                      {idx === 0 ? (
                        <span className="text-[10px] uppercase tracking-widest text-blue-600">
                          Tool A
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase tracking-widest text-neutral-900/45">
                          Tool B
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
                        Pros
                      </div>
                      <ul className="space-y-1.5 text-sm text-neutral-900/85">
                        {tool.pros.map((p, j) => (
                          <li key={j} className="leading-snug">
                            <span className="text-emerald-600 font-semibold mr-1.5">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-rose-600">
                        Cons
                      </div>
                      <ul className="space-y-1.5 text-sm text-neutral-900/85">
                        {tool.cons.map((c, j) => (
                          <li key={j} className="leading-snug">
                            <span className="text-rose-600 font-semibold mr-1.5">−</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            );
          case "affiliate-cta": {
            const tone =
              b.tone === "soft"
                ? "border-blue-100 bg-blue-50/40"
                : b.tone === "contextual"
                ? "border-blue-200 bg-blue-50/60"
                : "border-blue-600/30 bg-blue-600/8";
            return (
              <div
                key={i}
                className={`my-10 rounded-2xl border p-6 md:p-8 ${tone}`}
              >
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                  {b.placement === "intro"
                    ? "Quick note"
                    : b.placement === "mid"
                    ? "Worth a look"
                    : "Get started"}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight">
                  {b.headline}
                </h3>
                <p className="mt-3 text-[15px] text-neutral-900/75 leading-relaxed">
                  {b.body}
                </p>
                <div className="mt-5">
                  {b.ctaHref.startsWith("http") ? (
                    <a
                      href={b.ctaHref}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-300 hover:text-blue-600 transition-colors"
                    >
                      {b.ctaLabel}
                    </a>
                  ) : (
                    <LinkButton href={b.ctaHref} variant="primary">
                      {b.ctaLabel}
                    </LinkButton>
                  )}
                </div>
              </div>
            );
          }
          case "sources": {
            const sourceBadge = (kind?: string) => {
              switch (kind) {
                case "vendor":
                  return { label: "Vendor", tone: "bg-blue-600/10 text-blue-600" };
                case "research":
                  return { label: "Research", tone: "bg-emerald-600/10 text-emerald-600" };
                case "benchmark":
                  return { label: "Benchmark", tone: "bg-amber-500/10 text-amber-600" };
                case "operator":
                  return { label: "Operator", tone: "bg-neutral-900/[0.04] text-neutral-900/65" };
                default:
                  return null;
              }
            };
            return (
              <section
                key={i}
                className="my-12 rounded-2xl border border-neutral-200/10 bg-neutral-900/[0.02] p-6 md:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                    {b.heading ?? "Sources cited"}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-900/45">
                    {b.items.length} {b.items.length === 1 ? "source" : "sources"}
                  </span>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {b.items.map((s, j) => {
                    const badge = sourceBadge(s.sourceType);
                    return (
                      <li
                        key={j}
                        className="rounded-lg border border-neutral-200/10 bg-white p-4 hover:border-blue-600/40 transition-colors"
                      >
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block no-underline"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[15px] font-semibold text-blue-600 leading-snug">
                              {s.name}
                            </span>
                            {badge && (
                              <span
                                className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest ${badge.tone}`}
                              >
                                {badge.label}
                              </span>
                            )}
                          </div>
                          {s.description && (
                            <div className="mt-2 text-[13px] text-neutral-900/65 leading-snug">
                              {s.description}
                            </div>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          }
          case "faq": {
            return (
              <dl
                key={i}
                className="my-10 space-y-6"
              >
                {b.items.map((q, j) => {
                  const id = slugifyHeading(q.q);
                  return (
                    <div key={j} id={id} className="scroll-mt-24">
                      <dt className="text-lg font-semibold text-neutral-900 leading-snug">
                        {q.q}
                      </dt>
                      <dd className="mt-2 text-[16px] text-neutral-900/80 leading-relaxed">
                        {renderInline(q.a, `faq-${i}-${j}`)}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
