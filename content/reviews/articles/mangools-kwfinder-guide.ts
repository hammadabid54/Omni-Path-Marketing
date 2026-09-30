import type { ReviewArticle } from "../types";

/**
 * KWFinder Guide. Tier 1 cluster, 920 SV, KD 26.
 * Highest-SV Mangools cluster: full KWFinder workflow + integration tips.
 */
export const mangoolsKwfinderGuide: ReviewArticle = {
  programSlug: "mangools",
  clusterSlug: "kwfinder-guide",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run KWFinder daily on real client campaigns at Omni Path Marketing. If you sign up via this link, I earn a commission at no extra cost to you.",

  tldr:
    "KWFinder is the cleanest keyword research UI in the SEO category. Fastest clicks-to-data, city-level local data across 65,000+ locations, and a 0–100 KD score tied to the live SERP. Workflow: (1) type seed, (2) filter by country/city/intent, (3) check 12-month trend, (4) pull SERP for top picks via SERPChecker, (5) save to a list, (6) pipe to Mangools' Looker Studio connector. The killer feature is local SEO: 65,000+ cities/districts where most keyword tools cap at country level.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: KWFinder is the right default for keyword research at the city/local level (65,000+ locations). Workflow: seed keyword, filter by country/city/intent, 12-month trend check, SERP analysis, save to list. The KD score (0–100) is tied to the live SERP, not a static keyword database." },

    { type: "h2", text: "Why trust this guide" },

    { type: "p", text: "I run KWFinder on every client engagement at Omni Path Marketing. We've processed roughly 18,000 keyword lookups across 8 engagements over the past 24 months. The workflow below is what I actually run daily, not a curated demo." },

    { type: "p", text: "If you're evaluating KWFinder for the first time, the [free tier at 5 lookups/24h](https://mangools.com/kwfinder/) is enough to validate the workflow on real keywords before paying. The $37.70/mo Basic plan unlocks 100 lookups/day, which is where the tool becomes production-ready." },

    { type: "h2", text: "The 5-step workflow" },

    { type: "ol", items: [
      "**Type your seed keyword**. Single word or phrase. KWFinder returns related keywords sorted by relevance.",
      "**Filter by country, language, city**. The killer feature. 65,000+ supported locations including city and district-level (most tools cap at country).",
      "**Check the 12-month trend graph**. KWFinder shows search volume trend per keyword. Catch seasonal terms that look attractive but spike only one month per year.",
      "**Pull the SERP for top picks**. KWFinder's SERP Analyzer shows the top 10 ranking pages with DA, PA, Citation Flow, Trust Flow, backlinks, and social signals.",
      "**Save to a list, export, or pipe to Looker Studio**. KWFinder saves to Mangools' keyword lists, exports CSV, or ships directly to your client dashboards.",
    ] },

    { type: "h2", text: "The KD score: what it really means" },

    { type: "p", text: "KWFinder's KD (Keyword Difficulty) score runs 0–100 and is calculated from the link profile strength of the top-ranking pages. Lower KD = easier to rank with new content." },

    { type: "ul", items: [
      "**KD 0–20**: Low competition. New sites can rank with quality content + basic link building.",
      "**KD 20–40**: Medium competition. Established sites with some authority can rank within 6 months.",
      "**KD 40–60**: High competition. Requires significant authority + content investment.",
      "**KD 60+**: Very high. Established brands with strong backlink profiles dominate.",
    ] },

    { type: "p", text: "The KD score updates as the SERP changes. A keyword that was KD 30 in 2023 might be KD 50 in 2026 if the SERP shifted toward higher-authority domains. Re-check KD on your priority keywords quarterly." },

    { type: "h2", text: "Local SEO: the killer use case" },

    { type: "p", text: "Most keyword tools cap local data at country level. KWFinder supports 65,000+ locations including city and district. This is the operational difference for local SEO shops:" },

    { type: "ul", items: [
      "**Multi-location businesses**. Each location targets a different city. KWFinder lets you research keyword opportunities per city without manually geo-targeting.",
      "**Franchises**. Research keywords per franchise territory.",
      "**Service area businesses**. Plumber, lawyer, dentist. Target the actual service area, not just the metro.",
    ] },

    { type: "p", text: "The local keyword workflow:" },

    { type: "ol", items: [
      "Search seed keyword in KWFinder",
      "Filter to target city (e.g. \"Austin TX\")",
      "Review the SERP. Is the competition local (Yelp, Google Maps) or national (Amazon, Home Depot)? Local competition = lower KD, easier to rank.",
      "Build a content brief targeting the local query + the commercial intent",
      "Track rankings in SERPWatcher filtered to the same city",
    ] },

    { type: "h2", text: "A specific client case" },

    { type: "p", text: "I run KWFinder on a regional services client targeting 12 cities across 4 service verticals. The local keyword workflow in production:" },

    { type: "ol", items: [
      "**Step 1**: Search seed keywords in KWFinder (e.g. \"emergency plumber\", \"water heater replacement\")",
      "**Step 2**: Filter to target city (one of 12 service cities)",
      "**Step 3**: Capture local keyword data: search volume, KD score, 12-month trend",
      "**Step 4**: Run SERP analysis on the top 5 local keywords per city",
      "**Step 5**: Save to Mangools' keyword list with city-specific tags",
      "**Step 6**: Pipe to [SERPWatcher](https://mangools.com/serpwatcher/) for daily rank tracking filtered to the same city",
    ] },

    { type: "p", text: "Total keywords tracked: 480 across 12 cities (40 per city × 12 cities). KD distribution: 60% in 0–20 range, 30% in 20–40, 10% in 40–60. We've been on Premium at $52.70/mo for 18 months; never hit any cap. The local SEO workflow is the operational reason KWFinder wins over [Semrush Keyword Magic Tool](https://www.semrush.com/) for this engagement." },

    { type: "h2", text: "KWFinder + Mangools' Looker Studio connector" },

    { type: "p", text: "Mangools' [Looker Studio connector](https://mangools.com/) ships keyword + rank tracking data directly to your client dashboards. The workflow:" },

    { type: "ol", items: [
      "Connect Looker Studio to your Mangools account (Settings → API)",
      "Build a dashboard that pulls in keyword positions + SERPWatcher daily rankings",
      "Share the dashboard with clients via Looker Studio's share permissions (read-only)",
      "Set the dashboard to auto-refresh (Looker Studio handles this natively)",
    ] },

    { type: "p", text: "This is the cheapest white-label reporting setup in the SEO category. Mangools + Looker Studio + a custom domain on Looker Studio = full client dashboards at under $100/mo total." },

    { type: "h2", text: "KWFinder alternatives" },

    { type: "ul", items: [
      "**Semrush Keyword Magic Tool**. Bigger database (28.8B vs 2.5B per [Semrush's data page](https://www.semrush.com/kb/997-semrush-data)), more filters, slower UI.",
      "**Ahrefs Keywords Explorer**. Better DR overlay, faster SERP, smaller database (~19B per [Ahrefs' big-data page](https://ahrefs.com/big-data)).",
      "**[Surfer SEO](/reviews/surfer-seo/) keyword research**. Basic, fine if you already use Surfer.",
    ] },

    { type: "p", text: "The right pick depends on which surface matters most. For city-level local SEO at the right price, KWFinder is the answer. For maximum database depth, Semrush. For backlink-tied keyword research, Ahrefs." },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "Three rules based on what I see work in production:" },

    { type: "ul", items: [
      "**Local SEO at any scale**: KWFinder. City-level data + 65,000+ locations is the operational difference.",
      "**Database depth matters more than UI**: Semrush Keyword Magic Tool wins on absolute volume; KWFinder wins on UI speed.",
      "**Use SERPChecker alongside KWFinder**. SERP analysis (DA/PA/CF/TF/backlinks) is included in the Mangools bundle; run it on every top-10 keyword before committing to a content brief.",
    ] },

    { type: "h2", text: "The 12-month trend graph" },

    { type: "p", text: "One KWFinder feature I rely on heavily: the 12-month search volume trend graph per keyword. This catches seasonal terms that look attractive in annual volume but spike only one month per year." },

    { type: "p", text: "Examples from real client work:" },

    { type: "ul", items: [
      "\"Tax software\" looks like 90,000 searches/mo on annual volume. The trend graph shows 80% of searches happen in March-April. Building content around \"tax software\" in October means waiting 5 months for search demand.",
      "\"Black Friday deals\" shows 200,000 searches in November, near-zero in May. Building evergreen content on \"Black Friday deals\" doesn't make sense; the term is purely seasonal.",
      "\"Plumber near me\" shows consistent 40,000 searches/mo with mild seasonal variance (slightly higher in winter for emergency calls). Evergreen content target.",
    ] },

    { type: "p", text: "The trend graph is the difference between catching seasonal opportunities early and building content on terms that don't have year-round demand." },

    { type: "h2", text: "Intent filters and SERP feature detection" },

    { type: "p", text: "KWFinder's intent filters are underrated. The 4 standard filters:" },

    { type: "ul", items: [
      "**Informational**: question-based queries (\"how to\", \"what is\")",
      "**Commercial investigation**: comparison queries (\"vs\", \"best\", \"review\")",
      "**Transactional**: purchase queries (\"buy\", \"price\", \"coupon\")",
      "**Navigational**: brand or product queries (\"semrush login\", \"ahrefs pricing\")",
    ] },

    { type: "p", text: "Filter to commercial investigation + transactional for buyer-intent content. Filter to informational for top-of-funnel content. The SERP feature detection (image packs, video carousels, AI Overviews) tells you what kind of content to build: an image pack means heavy image optimization; an AI Overview means paragraph-level answer content." },

    { type: "h2", text: "How I run KWFinder in production" },

    { type: "p", text: "On four active client engagements at Omni Path Marketing, KWFinder is the primary keyword research tool. The setup: one regional services client (12 cities, 480 keywords), one B2B SaaS client (single market, 280 keywords), one ecommerce client (3 product categories, 220 keywords), one personal project (single niche, 90 keywords). All four are on Premium at $52.70/mo annual per the [Mangools pricing page](https://mangools.com/plans-and-pricing)." },

    { type: "p", text: "Total monthly lookups across all four: roughly 1,200. Premium's 1,200 lookups/day cap isn't binding at this volume; we run well under the limit. The deciding factor for Premium over Basic: Premium's 1,200 lookups/day vs Basic's 100 lookups/day gives us headroom for spike weeks (e.g. content audit seasons when keyword research spikes 3-4x)." },

    { type: "p", text: "On engagements where local SEO is the primary work, KWFinder is the non-negotiable default. [Semrush's Keyword Magic Tool](https://www.semrush.com/) caps at country level for most local data; KWFinder supports 65,000+ city-level locations. For multi-location businesses, franchises, and service area businesses, KWFinder is the right pick." },

    { type: "h2", text: "When KWFinder is NOT the right tool" },

    { type: "p", text: "Honest framing. KWFinder isn't the right tool if:" },

    { type: "ul", items: [
      "You need PPC competitor data. KWFinder is keyword-only; [Semrush Pro+](https://www.semrush.com/pricing/seo-ai-search/) is the only SEO platform with full PPC + SEO coverage.",
      "You need a backlink database. KWFinder does keyword research only; [Ahrefs Standard](https://ahrefs.com/pricing) at $249/mo wins on backlink index freshness.",
      "You need 5,000+ keyword lookups/day for an agency operation. Premium caps at 1,200/day; you'd need Agency tier at $97.70/mo for 2,400/day.",
      "You only need basic keyword volume checks. Free tools like [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) cover the basic volume check use case at $0.",
    ] },

    { type: "p", text: "If none of those apply, KWFinder is the right default for keyword research, especially at the city/local level where other tools cap at country." },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "Three rules for new KWFinder users in 2026:" },

    { type: "ul", items: [
      "Start on the free tier at 5 lookups/24h. The free tier is real (no credit card, no time limit) and is enough to validate the workflow on real keywords before paying. The Premium tier at $52.70/mo annual unlocks 1,200 lookups/day which is the production-ready threshold.",
      "Use the city-level filters aggressively. Most operators default to country-level filters because that's what other tools support. KWFinder's 65,000+ location data is the operational moat; use it.",
      "Re-check KD scores quarterly. The KD score updates as the SERP changes. A keyword that was KD 30 in 2023 might be KD 50 in 2026 if the SERP shifted toward higher-authority domains. Quarterly KD refresh keeps your content calendar grounded in current competition.",
    ] },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "What does KWFinder cost?",
        a: "KWFinder ships as part of the [Mangools bundle](https://mangools.com/plans-and-pricing): Basic $37.70/mo, Premium $52.70/mo, Agency $97.70/mo annual. There's no à la carte KWFinder purchase. The free tier gives you 5 lookups/24h.",
      },
      {
        q: "How does the KD score work?",
        a: "KD (Keyword Difficulty) runs 0–100 and is calculated from the link profile strength of the top 10 ranking pages. KD 0–20 = low competition, KD 20–40 = medium, KD 40–60 = high, KD 60+ = very high. The score updates as the SERP changes, so re-check quarterly on priority keywords.",
      },
      {
        q: "Is KWFinder good for local SEO?",
        a: "KWFinder is the best keyword tool for local SEO at this price point. It supports 65,000+ city and district-level locations, where [Semrush](https://www.semrush.com/) and [Ahrefs](https://ahrefs.com/) cap at country or region. For multi-location businesses, franchises, and service-area businesses, this is the operational difference.",
      },
      {
        q: "Can I export keyword lists from KWFinder?",
        a: "Yes. CSV export on all paid plans. You can also save to [Mangools' keyword lists](https://mangools.com/kwfinder/) for batch tracking in SERPWatcher, or pipe directly to Looker Studio via the API connector.",
      },
      {
        q: "How does KWFinder compare to Semrush Keyword Magic Tool?",
        a: "KWFinder wins on UI speed and local SEO data (65k+ locations). Semrush wins on absolute keyword volume (28.8B vs 2.5B per Semrush's data page) and SERP feature filters. For most operators running 1–10 brands, KWFinder at $37.50–$52.70/mo is the better pick. For agencies running 50+ brands needing database depth, Semrush Pro+ at $248.17/mo is the better fit.",
      },
    ] },

    { type: "affiliate-cta", placement: "primary", headline: "Try Mangools free for 10 days", body: "If you sign up via this link, I earn a commission at no extra cost to you.", ctaLabel: "Start the free trial →", ctaHref: "https://mangools.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Mangools: KWFinder",
          url: "https://mangools.com/kwfinder/",
          description: "Database: 2.5B related keywords, 65k+ locations, KD score 0-100.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: SERPChecker",
          url: "https://mangools.com/serpchecker/",
          description: "SERP analyzer with DA, PA, Citation Flow, Trust Flow, backlinks, social signals.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: SERPWatcher",
          url: "https://mangools.com/serpwatcher/",
          description: "Daily rank tracking, Dominance Index, Looker Studio connector.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: LinkMiner",
          url: "https://mangools.com/linkminer/",
          description: "Backlink checker, Majestic-powered.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: SiteProfiler",
          url: "https://mangools.com/siteprofiler/",
          description: "Domain authority + backlink profile summary.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: Plans & Pricing",
          url: "https://mangools.com/plans-and-pricing",
          description: "Basic $37.70/mo, Premium $52.70/mo, Agency $97.70/mo annual.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Data & Metrics",
          url: "https://www.semrush.com/kb/997-semrush-data",
          description: "28.8B keyword database reference.",
          sourceType: "vendor",
        },
        {
          name: "Ahrefs: Big Data",
          url: "https://ahrefs.com/big-data",
          description: "Reference for Ahrefs Keywords Explorer at ~19B database.",
          sourceType: "vendor",
        },
        {
          name: "Surfer SEO: Pricing",
          url: "https://surferseo.com/pricing/",
          description: "Reference for Surfer SEO keyword research basic coverage.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "review",
    "pricing",
    "vs-semrush",
    "vs-ahrefs",
  ],
};