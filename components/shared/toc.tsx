/**
 * Auto-generated Table of Contents component.
 *
 * Used by both /reviews/[program]/[cluster]/ and /blog/[slug]/ routes.
 * Extracts H2 headings from the body blocks and renders them as a sticky
 * sidebar on desktop + collapsible card on mobile.
 */

import Link from "next/link";

export type TocEntry = {
  id: string;
  text: string;
};

/** Slugify an H2 string for use as a stable HTML id (and TOC anchor target). */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Extract H2s from any ReviewBlock[] | BlogBlock[] array.
 *  Type-safe discriminated union — works for both block types. */
export function extractH2Entries(blocks: Array<{ type: string; text?: string }>): TocEntry[] {
  const seen = new Set<string>();
  const entries: TocEntry[] = [];
  for (const b of blocks) {
    if (b.type !== "h2" || typeof b.text !== "string") continue;
    const base = slugifyHeading(b.text);
    let id = base;
    let n = 2;
    while (seen.has(id)) {
      id = `${base}-${n++}`;
    }
    seen.add(id);
    entries.push({ id, text: b.text });
  }
  return entries;
}

/** Build a stable id map (text → unique id) for anchor linking.
 *  Returns a Map the renderer can use to apply `id` attributes on H2s. */
export function buildHeadingIdMap(blocks: Array<{ type: string; text?: string }>): Map<string, string> {
  const map = new Map<string, string>();
  for (const entry of extractH2Entries(blocks)) {
    map.set(entry.text, entry.id);
  }
  return map;
}

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  if (entries.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border border-neutral-200/10 bg-neutral-900/[0.02] p-6 md:p-7"
    >
      <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
        In this guide
      </div>
      <ol className="space-y-2.5 text-[15px] list-decimal pl-5 marker:text-neutral-900/40">
        {entries.map((entry) => (
          <li key={entry.id} className="text-neutral-900/80 leading-snug">
            <a
              href={`#${entry.id}`}
              className="hover:text-blue-600 transition-colors"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
