/**
 * BlogBlockRenderer — renders a BlogBlock tree as styled HTML.
 * Server component. No JS, no client deps.
 */
import type { BlogBlock } from "@/content/blog";
import Link from "next/link";

export function BlogBlockRenderer({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-legal">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-white/80 leading-relaxed text-[17px]">
                {b.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="mt-14 mb-4 text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-10 mb-3 text-xl md:text-2xl font-semibold text-white"
              >
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="my-5 space-y-2 list-disc pl-6 text-white/80">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed text-[17px]">
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="my-5 space-y-2 list-decimal pl-6 text-white/80">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed text-[17px]">
                    {it}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-lime-400 pl-6 italic text-xl md:text-2xl text-white leading-snug"
              >
                &ldquo;{b.text}&rdquo;
                {b.cite && (
                  <footer className="mt-3 text-sm not-italic text-white/55">
                    — {b.cite}
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
                    "border-lime-400/30 bg-lime-400/5 text-white/85",
                  b.tone === "warning" &&
                    "border-amber-400/30 bg-amber-400/5 text-white/85",
                  b.tone === "insight" &&
                    "border-white/15 bg-white/4 text-white/85",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-lime-400">
                  {b.tone === "tip"
                    ? "Tip"
                    : b.tone === "warning"
                    ? "Watch out"
                    : "Insight"}
                </div>
                {b.text}
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
                    <div className="text-2xl md:text-3xl font-bold text-lime-400">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-white/55">{s.label}</div>
                  </div>
                ))}
              </div>
            );
          case "code":
            return (
              <pre
                key={i}
                className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm font-mono text-white/85"
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
                          className="px-4 py-3 text-left text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="hover:bg-white/[0.02]">
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className="px-4 py-3 border-b border-white/5 text-white/85"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
