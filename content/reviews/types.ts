/**
 * Review article content types.
 *
 * Each review article on /reviews/[program]/[cluster]/ has:
 *  - program + cluster slug (matches the route)
 *  - target keyword + meta (from MASTER.csv)
 *  - operator-voice disclosure (used in the article intro)
 *  - body blocks (similar to blog.ts BlogBlock, with review-specific extensions)
 *  - related slugs (for the "More from this pillar" footer)
 */

export type ReviewBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; tone: "tip" | "warning" | "insight"; text: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "code"; language?: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "toc" }
  | { type: "verdict"; winner: "tool-a" | "tool-b" | "tie"; toolA: string; toolB: string; text: string }
  | { type: "pros-cons"; toolA: { name: string; pros: string[]; cons: string[] }; toolB: { name: string; pros: string[]; cons: string[] } }
  | { type: "affiliate-cta"; placement: "intro" | "mid" | "primary"; headline: string; body: string; ctaLabel: string; ctaHref: string; tone?: "soft" | "contextual" | "primary" }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "sources"; heading?: string; items: { name: string; url: string; description?: string; sourceType?: "vendor" | "research" | "benchmark" | "operator" }[] };

export type ReviewArticle = {
  programSlug: string;
  clusterSlug: string;
  /** Operator-voice disclosure used in the article intro (rendered before body). */
  disclosure: string;
  /** Optional sub-heading rendered right after the hero (the "TL;DR" lead). */
  tldr?: string;
  /** Optional bulleted TL;DR — overrides paragraph rendering when present. */
  tldrBullets?: string[];
  /** Author + date metadata. */
  author: string;
  authorTitle: string;
  date: string;          // ISO YYYY-MM-DD publish date
  dateModified?: string; // ISO YYYY-MM-DD last material revision
  /** Body content. Rendered in order. */
  body: ReviewBlock[];
  /** Slugs of related reviews (rendered in "More from this pillar" footer). */
  relatedSlugs?: string[];
  /** Whether this article is live or coming-soon. */
  status: "live" | "coming-soon";
};
