/**
 * HubArticle type — used by use-case hub articles at root paths
 * (e.g. /best-seo-tools-for-agencies-2026/, /agency-rank-tracker/).
 *
 * Same block structure as ReviewArticle; different route handler.
 */

import type { ReviewArticle } from "@/content/reviews/types";

export type HubArticle = {
  /** Slug — also becomes the URL. Must be unique across all hubs. */
  slug: string;
  /** Author meta. */
  author: string;
  authorTitle: string;
  date: string;
  dateModified?: string;
  /** SEO meta. */
  seoTitle: string;
  seoDescription: string;
  /** Hero block content. */
  eyebrow: string;
  heroTitle: string;
  heroSubhead: string;
  /** Body — same block types as ReviewArticle. */
  body: ReviewArticle["body"];
  /** Optional bulleted TL;DR — overrides paragraph rendering when present. */
  tldrBullets?: string[];
  /** Status. */
  status: "live" | "coming-soon";
  /** Optional related hubs (other use-case hubs to recommend). */
  relatedSlugs?: string[];
};
