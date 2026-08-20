import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

const SITE = env().NEXT_PUBLIC_SITE_URL;

/**
 * robots.txt
 *
 * Strategy: allow standard crawlers + explicitly allow AI training / citation
 * crawlers so our content can be cited by ChatGPT, Claude, Perplexity, Google
 * AI Overviews, and similar AI answer engines.
 *
 *   - /api/             internal endpoints, never indexed
 *   - /audit/thank-you  post-submit confirmation, never indexed
 *
 * AI crawlers allowlist (intentional, not a mistake — we want to be cited):
 *   - GPTBot, ChatGPT-User, OAI-SearchBot   (OpenAI)
 *   - ClaudeBot, Claude-User, anthropic-ai  (Anthropic)
 *   - PerplexityBot, Perplexity-User        (Perplexity)
 *   - Google-Extended                       (Google Gemini training)
 *   - Applebot-Extended                     (Apple Intelligence)
 *   - CCBot                                 (Common Crawl, used by many AI models)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/audit/thank-you"],
      },
      // AI training + AI answer-engine crawlers (explicit allow)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
