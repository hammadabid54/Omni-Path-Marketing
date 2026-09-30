/**
 * Hub article registry.
 * Maps slug → HubArticle for use-case hubs at root paths.
 */

import type { HubArticle } from "./types";
import { bestSeoToolsForAgencies2026 } from "./articles/best-seo-tools-for-agencies-2026";
import { agencyRankTracker } from "./articles/agency-rank-tracker";
import { shopifySeoTools } from "./articles/shopify-seo-tools";
import { bestSeoToolsForEcommerce } from "./articles/best-seo-tools-for-ecommerce";
import { seoToolsForBeginners } from "./articles/seo-tools-for-beginners";
import { whiteLabelSeoTools } from "./articles/white-label-seo-tools";

const articles: HubArticle[] = [
  bestSeoToolsForAgencies2026,
  agencyRankTracker,
  shopifySeoTools,
  bestSeoToolsForEcommerce,
  seoToolsForBeginners,
  whiteLabelSeoTools,
];

const registry = new Map<string, HubArticle>(
  articles.map((a) => [a.slug, a])
);

export function getHubArticle(slug: string): HubArticle | null {
  return registry.get(slug) ?? null;
}

export function getAllLiveHubs(): HubArticle[] {
  return articles.filter((a) => a.status === "live");
}

export function getAllHubSlugs(): string[] {
  return articles.map((a) => a.slug);
}
