/**
 * Industries config — single source of truth for niche verticals on
 * omnipathmarketing.com. Wave 1 ships Dentists; Phase 2 adds Lawyers,
 * Plumbers, and Real Estate (placeholders are kept commented).
 *
 * Adding a niche:
 *   1. Append a new entry to INDUSTRIES with `available: true`.
 *   2. Create /app/industries/<slug>/page.tsx (hub) and the spoke pages.
 *   3. Add the slug to /app/sitemap.ts staticRoutes.
 */

import type { ServiceId } from "@/content/pricing";

export interface IndustryConfig {
  /** URL-friendly slug, also used for the route segment. */
  slug: string;
  /** Human-readable label (used on cards, dropdowns, breadcrumbs). */
  label: string;
  /** 1-2 sentence pitch for the niche index card. */
  description: string;
  /** Canonical href for the niche hub. */
  href: string;
  /** Service spokes that exist for this niche (matches pricing ServiceId). */
  serviceIds: ServiceId[];
  /** Schema.org serviceType emitted on every page under this niche. */
  serviceSchemaType: string;
  /** If false, the niche is rendered as a "coming soon" stub in indexes. */
  available: boolean;
}

export const INDUSTRIES: IndustryConfig[] = [
  {
    slug: "dentists",
    label: "Dentists",
    description:
      "Solo practices, multi-location groups, and DSOs. Map Pack SEO, paid ads, web design, and social — HIPAA-aware tracking throughout.",
    href: "/industries/dentists",
    serviceIds: ["seo", "paid-ads", "web-design", "social-media"],
    serviceSchemaType: "DentalMarketing",
    available: true,
  },
  // ----- Phase 2 niches (kept as commented placeholders) -----
  // { slug: "lawyers",       label: "Lawyers",       href: "/industries/lawyers",       ... },
  // { slug: "plumbers",      label: "Plumbers",      href: "/industries/plumbers",      ... },
  // { slug: "real-estate",   label: "Real Estate",   href: "/industries/real-estate",   ... },
];

export function getIndustry(slug: string): IndustryConfig | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function listAvailableIndustries(): IndustryConfig[] {
  return INDUSTRIES.filter((i) => i.available);
}
