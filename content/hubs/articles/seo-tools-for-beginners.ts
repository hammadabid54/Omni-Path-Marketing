import type { HubArticle } from "../types";

/**
 * SEO Tools for Beginners — Tier 1 use-case hub, 310 SV, KD 35
 * Awareness-stage content for first-time SEO operators.
 */
export const seoToolsForBeginners: HubArticle = {
  slug: "seo-tools-for-beginners",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  seoTitle: "SEO tools for beginners: the honest starter kit 2026",
  seoDescription:
    "The 5 SEO tools every beginner needs in 2026. Free tools first, paid upgrades later. What each does, when you need it, and how to avoid the $200/mo rookie mistake.",

  eyebrow: "Use-case hub · Beginner SEO",
  heroTitle: "SEO tools for beginners: the honest starter kit.",
  heroSubhead:
    "You don't need a $200/mo SEO platform to start. The 5-tool beginner kit covers 70% of what most operators need, with free tiers and a clear upgrade path.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick verdict**: Start with the free stack: [Mangools Free](/reviews/mangools/) (5 lookups/24h, no credit card) + Google Search Console + Google Analytics 4. Upgrade to [Mangools Basic at $29.90/mo](/reviews/mangools/) when 5 lookups/24h isn't enough. Skip Semrush until you're running 3+ client accounts or 50+ keywords tracked." },

    { type: "h2", text: "The 5-tool beginner kit" },

    { type: "ul", items: [
      "**[Mangools Free](/reviews/mangools/)** — keyword research + rank tracking. 5 lookups/24h. Real free plan, no credit card, no time limit. The single best free SEO tool in 2026.",
      "**Google Search Console** — first-party keyword data, click-through rates, indexing status. Non-negotiable for any site owner.",
      "**Google Analytics 4** — first-party traffic + conversion data.",
      "**Ahrefs Webmaster Tools** — site audit (up to 100 pages, 3 projects, free). Cleaner UX than Semrush for small sites.",
      "**Ubersuggest Free** — backup keyword tool when Mangools runs out. 3 searches/day.",
    ] },

    { type: "h2", text: "What each tool does" },

    { type: "ul", items: [
      "**Mangools KWFinder** — type a seed keyword, get related keywords with search volume + difficulty + 12-month trend.",
      "**Mangools SERPChecker** — see the top 10 ranking pages for any keyword with DA, backlinks, social signals.",
      "**Mangools SERPWatcher** — track your ranking for any keyword daily (limited to 1 keyword on free plan).",
      "**Google Search Console** — see exactly what queries drive clicks to your site, your position, and CTR.",
      "**Google Analytics 4** — see where your traffic comes from, what they do, and what converts.",
      "**Ahrefs Webmaster Tools** — run a site audit on up to 100 pages to find technical issues.",
      "**Ubersuggest Free** — backup keyword research when Mangools hits its 5 lookups/24h limit.",
    ] },

    { type: "h2", text: "What you do with them" },

    { type: "h3", text: "Day 1: Set up the foundation" },
    { type: "p", text: "Connect Google Search Console + Google Analytics 4 to your site. This is the first-party data layer for everything else." },

    { type: "h3", text: "Day 2: Find your first keyword opportunities" },
    { type: "p", text: "Use KWFinder to research 10–20 seed keywords. Export the list to a Google Sheet. Note the search volumes and KD scores." },

    { type: "h3", text: "Day 3: Audit your site" },
    { type: "p", text: "Run Ahrefs Webmaster Tools on your site. Find the top 5 critical issues. Fix the most impactful one (often slow pages or missing schema)." },

    { type: "h3", text: "Day 4–7: Set up tracking" },
    { type: "p", text: "Track your top 1 keyword in SERPWatcher. Add 5 more in week 2. By month 3, you'll have rank data on 20+ keywords." },

    { type: "h3", text: "Month 2–3: Expand" },
    { type: "p", text: "Add content targeting the keywords you found. Use the free stack to monitor rankings. Adjust based on what's working." },

    { type: "h2", text: "When to upgrade from free" },

    { type: "p", text: "The free stack works until:" },

    { type: "ul", items: [
      "**You track more than 1 keyword** — upgrade to [Mangools Basic at $29.90/mo](/reviews/mangools/) for 200 tracked keywords",
      "**You need a backlink audit** — upgrade to a paid Ahrefs or Semrush tier",
      "**You publish content at scale** — upgrade to Surfer SEO + Semrush for the content-led workflow",
      "**You start working with clients** — upgrade to SE Ranking Growth + Agency Pack for white-label reporting",
    ] },

    { type: "h2", text: "Common beginner mistakes" },

    { type: "ul", items: [
      "**Don't**: Sign up for Semrush Pro+ at $117.33/mo on day 1. The free stack covers 70% of what beginners need.",
      "**Don't**: Buy 3 different SEO tools at once. Pick one paid tier after you've outgrown the free stack.",
      "**Don't**: Chase the highest-traffic keywords. Start with low-KD (under 30) keywords where you can rank.",
      "**Do**: Connect GSC + GA4 first. Most beginners skip this and miss the most valuable first-party data.",
      "**Do**: Track a small number of keywords (5–10) and write content that targets them. Iterate.",
      "**Do**: Audit your site once and fix the issues. Most sites have 20–50 fixable technical issues that boost rankings.",
    ] },

    { type: "affiliate-cta", placement: "primary", headline: "Try Mangools free for 10 days", body: "If you sign up via this link, I earn a commission at no extra cost to you.", ctaLabel: "Start with Mangools Free →", ctaHref: "https://mangools.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Mangools — Plans & Pricing",
          url: "https://mangools.com/plans-and-pricing",
          description: "Free plan: 5 lookups/24h, no credit card. Basic $29.90/mo, Premium $44.90/mo.",
          sourceType: "vendor",
        },
        {
          name: "Google Search Console",
          url: "https://search.google.com/search-console",
          description: "Free first-party keyword + click + index data from Google.",
          sourceType: "vendor",
        },
        {
          name: "Ahrefs Webmaster Tools",
          url: "https://ahrefs.com/webmaster-tools",
          description: "Free site audit, up to 100 pages per project.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "best-seo-tools-for-agencies-2026",
    "shopify-seo-tools",
    "agency-rank-tracker",
    "best-seo-tools-for-ecommerce",
  ],
};
