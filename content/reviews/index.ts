/**
 * Review article registry.
 *
 * Each entry maps a (program, cluster) slug pair to its body content.
 * Articles still being written are listed here as `status: "coming-soon"`
 * — the dynamic route renders a placeholder for those.
 */

import type { ReviewArticle } from "./types";
import { semrushVsAhrefs } from "./articles/semrush-vs-ahrefs";
import { mangools } from "./articles/mangools";
import { hunterIo } from "./articles/hunter-io";
import { seRanking } from "./articles/se-ranking";
import { surferSeo } from "./articles/surfer-seo";
import { frase } from "./articles/frase";
import { ahrefs } from "./articles/ahrefs";
import { semrushPricing } from "./articles/semrush-pricing";
import { semrushProPlan } from "./articles/semrush-pro-plan";
import { semrushAlternatives } from "./articles/semrush-alternatives";
import { semrushFreeAlternatives } from "./articles/semrush-free-alternatives";
import { semrushCheapAlternatives } from "./articles/semrush-cheap-alternatives";
import { semrushWorthIt } from "./articles/semrush-worth-it";
import { semrushVsAhrefsVsMoz } from "./articles/semrush-vs-ahrefs-vs-moz";
import { semrushVsSeRanking } from "./articles/semrush-vs-se-ranking";
import { semrushVsSurferSeo } from "./articles/semrush-vs-surfer-seo";
import { semrushFreeTrial } from "./articles/semrush-free-trial";
import { semrushAffiliateProgram } from "./articles/semrush-affiliate-program";
import { semrushNonprofitPricing } from "./articles/semrush-nonprofit-pricing";
import { mangoolsPricing } from "./articles/mangools-pricing";
import { mangoolsKwfinderGuide } from "./articles/mangools-kwfinder-guide";
import { mangoolsVsSemrush } from "./articles/mangools-vs-semrush";
import { mangoolsVsAhrefs } from "./articles/mangools-vs-ahrefs";
import { mangoolsAffiliateProgram } from "./articles/mangools-affiliate-program";
import { seRankingPricing } from "./articles/se-ranking-pricing";
import { seRankingAlternatives } from "./articles/se-ranking-alternatives";
import { seRankingVsSemrush } from "./articles/se-ranking-vs-semrush";
import { seRankingVsAhrefs } from "./articles/se-ranking-vs-ahrefs";
import { surferSeoPricing } from "./articles/surfer-seo-pricing";
import { surferSeoVsFrase } from "./articles/surfer-seo-vs-frase";
import { surferSeoVsSemrush } from "./articles/surfer-seo-vs-semrush";
import { surferSeoAlternatives } from "./articles/surfer-seo-alternatives";
import { hunterIoPricing } from "./articles/hunter-io-pricing";
import { hunterIoAlternatives } from "./articles/hunter-io-alternatives";
import { hunterIoChromeExtensionGuide } from "./articles/hunter-io-chrome-extension-guide";
import { frasePricing } from "./articles/frase-pricing";
import { fraseVsSurferSeo } from "./articles/frase-vs-surfer-seo";
import { fraseVsJasper } from "./articles/frase-vs-jasper";
import { fraseAlternatives } from "./articles/frase-alternatives";

const articles: ReviewArticle[] = [
  semrushVsAhrefs,
  mangools,
  hunterIo,
  seRanking,
  surferSeo,
  frase,
  ahrefs,
  semrushPricing,
  semrushProPlan,
  semrushAlternatives,
  semrushFreeAlternatives,
  semrushCheapAlternatives,
  semrushWorthIt,
  semrushVsAhrefsVsMoz,
  semrushVsSeRanking,
  semrushVsSurferSeo,
  semrushFreeTrial,
  semrushAffiliateProgram,
  semrushNonprofitPricing,
  mangoolsPricing,
  mangoolsKwfinderGuide,
  mangoolsVsSemrush,
  mangoolsVsAhrefs,
  mangoolsAffiliateProgram,
  seRankingPricing,
  seRankingAlternatives,
  seRankingVsSemrush,
  seRankingVsAhrefs,
  surferSeoPricing,
  surferSeoVsFrase,
  surferSeoVsSemrush,
  surferSeoAlternatives,
  hunterIoPricing,
  hunterIoAlternatives,
  hunterIoChromeExtensionGuide,
  frasePricing,
  fraseVsSurferSeo,
  fraseVsJasper,
  fraseAlternatives,
];

const registry = new Map<string, ReviewArticle>(
  articles.map((a) => [`${a.programSlug}::${a.clusterSlug}`, a])
);

export function getReviewArticle(programSlug: string, clusterSlug: string): ReviewArticle | null {
  return registry.get(`${programSlug}::${clusterSlug}`) ?? null;
}

export function getAllLiveReviews(): ReviewArticle[] {
  return articles.filter((a) => a.status === "live");
}
