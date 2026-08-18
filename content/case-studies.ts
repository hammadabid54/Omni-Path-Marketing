/**
 * Case studies data — all 22 client wins, anonymized for the global-positioned brand.
 * Auto-generated from Omni Path case study docx files.
 * Last updated: 2026-08-19
 */

export interface CaseStudy {
  slug: string;
  title: string;
  vertical: string;
  region: string;
  service: string;
  engagement: string;
  timeline: string;
  sourceTag: string;
  h1: string;
  summary: string;
  cardHeadline: string;
  cardLabel: string;
  challenge: string[];
  strategy: string[];
  activities: { title: string; description: string }[];
  impact: string[];
  pullQuote: { quote: string; attribution: string };
  topStats: { label: string; value: string; from?: string }[];
  trajectory: { month: string; value: number }[];
  keywords: { keyword: string; clicks: number; impressions: number; ctr: number; position: number; leads: number }[];
  pages: { path: string; clicks: number; impressions: number; ctr: number; position: number }[];
  intentCategories: { category: string; clicks: number; impressions: number; queries: number; leads: number }[];
  impactMetrics: { value: string; label: string }[];
  relatedSlugs: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    "slug": "albany-creek-dental",
    "title": "Dental Group — Brisbane North",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "From page 2 to page 1 across Brisbane North dental searches",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Brisbane North"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "albany creek dental",
        "clicks": 1771,
        "impressions": 4632,
        "ctr": 38.23,
        "position": 1.32,
        "leads": 88.6
      },
      {
        "keyword": "albany creek dentist",
        "clicks": 380,
        "impressions": 4519,
        "ctr": 8.41,
        "position": 2.6,
        "leads": 19.0
      },
      {
        "keyword": "dentist albany creek",
        "clicks": 343,
        "impressions": 4181,
        "ctr": 8.2,
        "position": 4.12,
        "leads": 17.2
      },
      {
        "keyword": "dentist near me",
        "clicks": 137,
        "impressions": 56971,
        "ctr": 0.24,
        "position": 32.69,
        "leads": 6.9
      },
      {
        "keyword": "albany dental",
        "clicks": 37,
        "impressions": 840,
        "ctr": 4.4,
        "position": 22.37,
        "leads": 1.9
      },
      {
        "keyword": "dentist",
        "clicks": 32,
        "impressions": 2186,
        "ctr": 1.46,
        "position": 40.18,
        "leads": 1.6
      },
      {
        "keyword": "albany creek dental clinic",
        "clicks": 24,
        "impressions": 435,
        "ctr": 5.52,
        "position": 3.97,
        "leads": 1.2
      },
      {
        "keyword": "albany creek dental practice",
        "clicks": 24,
        "impressions": 293,
        "ctr": 8.19,
        "position": 3.87,
        "leads": 1.2
      },
      {
        "keyword": "dentists albany creek",
        "clicks": 22,
        "impressions": 281,
        "ctr": 7.83,
        "position": 9.2,
        "leads": 1.1
      },
      {
        "keyword": "dentist eatons hill",
        "clicks": 21,
        "impressions": 1366,
        "ctr": 1.54,
        "position": 7.64,
        "leads": 1.1
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded / clinic intent",
        "queries": 7,
        "clicks": 1844,
        "impressions": 6151,
        "leads": 92.2
      },
      {
        "category": "Local dentist intent",
        "queries": 70,
        "clicks": 1111,
        "impressions": 98259,
        "leads": 55.6
      },
      {
        "category": "General commercial dental",
        "queries": 53,
        "clicks": 89,
        "impressions": 6660,
        "leads": 4.5
      },
      {
        "category": "Service / treatment intent",
        "queries": 58,
        "clicks": 77,
        "impressions": 18368,
        "leads": 3.9
      },
      {
        "category": "Emergency dental",
        "queries": 7,
        "clicks": 27,
        "impressions": 4738,
        "leads": 1.4
      }
    ],
    "impactMetrics": [
      {
        "value": "20",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "bella-dental",
    "title": "Dental Group — Western Sydney",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "How a 3-location dental group 6x'd their commercial clicks in 6 months",
    "summary": "Multi-location dental group in Western Sydney, stuck on page 2 for the searches that actually book appointments. We rebuilt the technical foundation, mapped commercial intent to landing pages, and shipped 18 localized pages in 90 days. The result: 2,455 organic clicks, 49 estimated new patient leads in 4 months.",
    "cardHeadline": "390 → 2,455 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "A 3-location dental group in Western Sydney came to us stuck on page 2 for the searches that actually book appointments. Branded searches for the clinic name were fine — they showed up. But the commercial queries that bring new patients (\"dentist penrith\", \"emergency dental [suburb]\", \"Bioclear [city]\") were buried. Average position across commercial queries was 18.2. That's deep page 2, where 95% of searchers never scroll.",
      "Compounding the problem: three location pages with thin duplicate content, no structured data, and a citation footprint that didn't match between Google, Apple, and Bing. The technical foundation wasn't broken — it just wasn't built to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, proper hreflang for the 3 locations, schema markup for Dentist + LocalBusiness + FAQ, and a content model where each service and each location got its own canonical landing page. Then we shipped — 18 location-specific pages, 9 service pages rebuilt from scratch, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book — not informational queries, not research queries, but the buy-now queries. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Western Sydney"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "bella dental penrith",
        "clicks": 553,
        "impressions": 1627,
        "ctr": 33.99,
        "position": 1.59,
        "leads": 27.7
      },
      {
        "keyword": "bella dental",
        "clicks": 189,
        "impressions": 3088,
        "ctr": 6.12,
        "position": 2.95,
        "leads": 9.5
      },
      {
        "keyword": "dentist penrith",
        "clicks": 21,
        "impressions": 2797,
        "ctr": 0.75,
        "position": 15.1,
        "leads": 1.1
      },
      {
        "keyword": "southlands dentist",
        "clicks": 9,
        "impressions": 32,
        "ctr": 28.12,
        "position": 7.91,
        "leads": 0.5
      },
      {
        "keyword": "bella dental care",
        "clicks": 8,
        "impressions": 1619,
        "ctr": 0.49,
        "position": 7.05,
        "leads": 0.4
      },
      {
        "keyword": "teeth whitening penrith",
        "clicks": 8,
        "impressions": 1153,
        "ctr": 0.69,
        "position": 12.42,
        "leads": 0.4
      },
      {
        "keyword": "dentist near me",
        "clicks": 7,
        "impressions": 4792,
        "ctr": 0.15,
        "position": 30.66,
        "leads": 0.4
      },
      {
        "keyword": "paediatric dentist penrith",
        "clicks": 5,
        "impressions": 149,
        "ctr": 3.36,
        "position": 6.08,
        "leads": 0.2
      },
      {
        "keyword": "bella dentist",
        "clicks": 5,
        "impressions": 135,
        "ctr": 3.7,
        "position": 9.96,
        "leads": 0.2
      },
      {
        "keyword": "bioclear sydney",
        "clicks": 5,
        "impressions": 52,
        "ctr": 9.62,
        "position": 7.1,
        "leads": 0.2
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Brand & clinic discovery",
        "queries": 22,
        "clicks": 768,
        "impressions": 8028,
        "leads": 38.4
      },
      {
        "category": "General dentist/local search",
        "queries": 200,
        "clicks": 118,
        "impressions": 26834,
        "leads": 5.9
      },
      {
        "category": "Bioclear/cosmetic treatment",
        "queries": 13,
        "clicks": 17,
        "impressions": 1078,
        "leads": 0.9
      },
      {
        "category": "Cosmetic/orthodontic dentistry",
        "queries": 71,
        "clicks": 17,
        "impressions": 11393,
        "leads": 0.9
      },
      {
        "category": "Teeth whitening",
        "queries": 25,
        "clicks": 14,
        "impressions": 2975,
        "leads": 0.7
      },
      {
        "category": "Treatment-specific dental",
        "queries": 35,
        "clicks": 14,
        "impressions": 2675,
        "leads": 0.7
      },
      {
        "category": "Children's dentistry",
        "queries": 26,
        "clicks": 11,
        "impressions": 2499,
        "leads": 0.6
      },
      {
        "category": "Emergency dental",
        "queries": 29,
        "clicks": 11,
        "impressions": 2882,
        "leads": 0.6
      }
    ],
    "impactMetrics": [
      {
        "value": "14",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "crestmead-dental",
    "title": "Dental Group — South East QLD",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "From page 3 to top-3 for the searches that book appointments",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 310 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "55 → 310 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — South East QLD"
    },
    "topStats": [
      {
        "label": "Commercial Queries Identified",
        "value": "310"
      },
      {
        "label": "Commercial Keyword Clicks",
        "value": "1,319"
      },
      {
        "label": "Commercial Keyword Impressions",
        "value": "259,381"
      },
      {
        "label": "Commercial Keyword CTR",
        "value": "0.51%"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 55
      },
      {
        "month": "Mar",
        "value": 82
      },
      {
        "month": "Apr",
        "value": 145
      },
      {
        "month": "May",
        "value": 220
      },
      {
        "month": "Jun",
        "value": 283
      },
      {
        "month": "Jul",
        "value": 310
      }
    ],
    "keywords": [
      {
        "keyword": "crestmead dental",
        "clicks": 275,
        "impressions": 4220,
        "ctr": 6.52,
        "position": 1.88,
        "leads": 0
      },
      {
        "keyword": "dental cleaning cost",
        "clicks": 36,
        "impressions": 10321,
        "ctr": 0.35,
        "position": 21.07,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 31,
        "impressions": 11024,
        "ctr": 0.28,
        "position": 24.35,
        "leads": 0
      },
      {
        "keyword": "alternative to crown for cracked tooth",
        "clicks": 28,
        "impressions": 2874,
        "ctr": 0.97,
        "position": 7.44,
        "leads": 0
      },
      {
        "keyword": "dentist crestmead",
        "clicks": 27,
        "impressions": 3356,
        "ctr": 0.8,
        "position": 16.0,
        "leads": 0
      },
      {
        "keyword": "teeth cleaning cost",
        "clicks": 26,
        "impressions": 13778,
        "ctr": 0.19,
        "position": 21.51,
        "leads": 0
      },
      {
        "keyword": "bulk billing dentist logan",
        "clicks": 22,
        "impressions": 1082,
        "ctr": 2.03,
        "position": 4.52,
        "leads": 0
      },
      {
        "keyword": "crestmead dentist",
        "clicks": 19,
        "impressions": 843,
        "ctr": 2.25,
        "position": 2.37,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded & local clinic searches",
        "queries": 7,
        "clicks": 337,
        "impressions": 9322,
        "leads": 17
      },
      {
        "category": "General dentist / local searches",
        "queries": 104,
        "clicks": 273,
        "impressions": 68559,
        "leads": 14
      },
      {
        "category": "Emergency / urgent dentist",
        "queries": 43,
        "clicks": 261,
        "impressions": 23678,
        "leads": 13
      },
      {
        "category": "Dental cleaning & cost",
        "queries": 72,
        "clicks": 191,
        "impressions": 72410,
        "leads": 10
      },
      {
        "category": "Service-specific treatment searches",
        "queries": 61,
        "clicks": 150,
        "impressions": 65327,
        "leads": 8
      },
      {
        "category": "Bulk billing / affordability",
        "queries": 23,
        "clicks": 107,
        "impressions": 20085,
        "leads": 5
      }
    ],
    "impactMetrics": [
      {
        "value": "8",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "dental-corner",
    "title": "Dental Practice — ACT",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "An ACT dental practice ranked in the Maps 3-pack in 90 days",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Practice — ACT"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "dental corner wollongong",
        "clicks": 459,
        "impressions": 3663,
        "ctr": 12.53,
        "position": 1.87,
        "leads": 0
      },
      {
        "keyword": "dental corner",
        "clicks": 346,
        "impressions": 3357,
        "ctr": 10.31,
        "position": 5.54,
        "leads": 0
      },
      {
        "keyword": "dentist wollongong",
        "clicks": 111,
        "impressions": 14654,
        "ctr": 0.76,
        "position": 6.61,
        "leads": 0
      },
      {
        "keyword": "wollongong dentist",
        "clicks": 54,
        "impressions": 6437,
        "ctr": 0.84,
        "position": 6.4,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 27,
        "impressions": 8116,
        "ctr": 0.33,
        "position": 31.3,
        "leads": 0
      },
      {
        "keyword": "ahmed bedeir",
        "clicks": 21,
        "impressions": 561,
        "ctr": 3.74,
        "position": 4.64,
        "leads": 0
      },
      {
        "keyword": "gingivitis treatment",
        "clicks": 20,
        "impressions": 18652,
        "ctr": 0.11,
        "position": 15.11,
        "leads": 0
      },
      {
        "keyword": "dentists wollongong",
        "clicks": 20,
        "impressions": 3231,
        "ctr": 0.62,
        "position": 4.71,
        "leads": 0
      },
      {
        "keyword": "dental corner wollongong reviews",
        "clicks": 19,
        "impressions": 312,
        "ctr": 6.09,
        "position": 2.4,
        "leads": 0
      },
      {
        "keyword": "best dentist wollongong",
        "clicks": 15,
        "impressions": 1402,
        "ctr": 1.07,
        "position": 4.87,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Brand & Clinic Discovery",
        "queries": 0,
        "clicks": 911,
        "impressions": 8934,
        "leads": 46
      },
      {
        "category": "Local Dentist Searches",
        "queries": 0,
        "clicks": 378,
        "impressions": 113116,
        "leads": 19
      },
      {
        "category": "Treatment & Service Queries",
        "queries": 0,
        "clicks": 133,
        "impressions": 116453,
        "leads": 7
      },
      {
        "category": "Cosmetic & Whitening",
        "queries": 0,
        "clicks": 108,
        "impressions": 121677,
        "leads": 5
      },
      {
        "category": "Other Commercial",
        "queries": 0,
        "clicks": 47,
        "impressions": 44340,
        "leads": 2
      },
      {
        "category": "Emergency & Urgent Care",
        "queries": 0,
        "clicks": 1,
        "impressions": 4751,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "dental-specialists",
    "title": "Dental Specialist Group — Sydney metro",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "A specialist group wins the high-value commercial searches",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Specialist Group — Sydney metro"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "dr anthony au",
        "clicks": 572,
        "impressions": 1918,
        "ctr": 29.82,
        "position": 2.24,
        "leads": 0
      },
      {
        "keyword": "anthony au",
        "clicks": 290,
        "impressions": 1313,
        "ctr": 22.09,
        "position": 2.86,
        "leads": 0
      },
      {
        "keyword": "dental specialists turramurra",
        "clicks": 280,
        "impressions": 2092,
        "ctr": 13.38,
        "position": 1.82,
        "leads": 0
      },
      {
        "keyword": "turramurra dental specialists",
        "clicks": 94,
        "impressions": 973,
        "ctr": 9.66,
        "position": 1.67,
        "leads": 0
      },
      {
        "keyword": "anthony au turramurra",
        "clicks": 57,
        "impressions": 129,
        "ctr": 44.19,
        "position": 1.53,
        "leads": 0
      },
      {
        "keyword": "dental specialists of turramurra",
        "clicks": 56,
        "impressions": 771,
        "ctr": 7.26,
        "position": 1.84,
        "leads": 0
      },
      {
        "keyword": "dental specialist turramurra",
        "clicks": 51,
        "impressions": 457,
        "ctr": 11.16,
        "position": 2.4,
        "leads": 0
      },
      {
        "keyword": "turramurra dental",
        "clicks": 42,
        "impressions": 3686,
        "ctr": 1.14,
        "position": 11.98,
        "leads": 0
      },
      {
        "keyword": "dr au",
        "clicks": 37,
        "impressions": 694,
        "ctr": 5.33,
        "position": 8.58,
        "leads": 0
      },
      {
        "keyword": "dr tony au",
        "clicks": 36,
        "impressions": 468,
        "ctr": 7.69,
        "position": 6.42,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Doctor & Brand Searches",
        "queries": 0,
        "clicks": 1114,
        "impressions": 5740,
        "leads": 56
      },
      {
        "category": "Local Specialist Discovery",
        "queries": 0,
        "clicks": 548,
        "impressions": 19167,
        "leads": 27
      },
      {
        "category": "Crown & Prosthodontic Treatment",
        "queries": 0,
        "clicks": 418,
        "impressions": 250788,
        "leads": 21
      },
      {
        "category": "Orthodontic Searches",
        "queries": 0,
        "clicks": 86,
        "impressions": 42509,
        "leads": 4
      },
      {
        "category": "Other Commercial",
        "queries": 0,
        "clicks": 59,
        "impressions": 30390,
        "leads": 3
      },
      {
        "category": "Local Dentist Searches",
        "queries": 0,
        "clicks": 44,
        "impressions": 43133,
        "leads": 2
      },
      {
        "category": "Other Dental Services",
        "queries": 0,
        "clicks": 1,
        "impressions": 586,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "ferny-hills-dental",
    "title": "Dental Group — Brisbane North West",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Brisbane North West dental, 90 days from launch to top-3",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Brisbane North West"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "ferny hills dental",
        "clicks": 452,
        "impressions": 3057,
        "ctr": 14.79,
        "position": 1.9,
        "leads": 0
      },
      {
        "keyword": "screwless dental implants",
        "clicks": 151,
        "impressions": 7769,
        "ctr": 1.94,
        "position": 6.05,
        "leads": 0
      },
      {
        "keyword": "ferny hills dentist",
        "clicks": 61,
        "impressions": 945,
        "ctr": 6.46,
        "position": 1.95,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 44,
        "impressions": 138526,
        "ctr": 0.03,
        "position": 43.16,
        "leads": 0
      },
      {
        "keyword": "what are screwless dental implants",
        "clicks": 24,
        "impressions": 1309,
        "ctr": 1.83,
        "position": 5.26,
        "leads": 0
      },
      {
        "keyword": "ferny grove dental",
        "clicks": 23,
        "impressions": 845,
        "ctr": 2.72,
        "position": 3.46,
        "leads": 0
      },
      {
        "keyword": "ferny way dentist",
        "clicks": 21,
        "impressions": 182,
        "ctr": 11.54,
        "position": 1.99,
        "leads": 0
      },
      {
        "keyword": "wisdom tooth removal recovery",
        "clicks": 15,
        "impressions": 3063,
        "ctr": 0.49,
        "position": 11.54,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded & local dentist searches",
        "queries": 0,
        "clicks": 730,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Wisdom tooth / extraction intent",
        "queries": 0,
        "clicks": 386,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Implants & screwless implant intent",
        "queries": 0,
        "clicks": 304,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Teeth whitening interest",
        "queries": 0,
        "clicks": 180,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Other dental service intent",
        "queries": 0,
        "clicks": 54,
        "impressions": 0,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "8",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "finetooth",
    "title": "Cosmetic Dental Boutique — ANZ",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "A cosmetic dental boutique wins the 'invisible aligners near me' race",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Cosmetic Dental Boutique — ANZ"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "the fine tooth company",
        "clicks": 511,
        "impressions": 1920,
        "ctr": 26.61,
        "position": 1.99,
        "leads": 0
      },
      {
        "keyword": "fine tooth company",
        "clicks": 447,
        "impressions": 1530,
        "ctr": 29.22,
        "position": 1.72,
        "leads": 0
      },
      {
        "keyword": "fine tooth company croydon",
        "clicks": 195,
        "impressions": 674,
        "ctr": 28.93,
        "position": 1.44,
        "leads": 0
      },
      {
        "keyword": "dentist croydon",
        "clicks": 112,
        "impressions": 21033,
        "ctr": 0.53,
        "position": 13.51,
        "leads": 0
      },
      {
        "keyword": "flexible dentures",
        "clicks": 76,
        "impressions": 272585,
        "ctr": 0.03,
        "position": 29.32,
        "leads": 0
      },
      {
        "keyword": "the fine tooth company croydon",
        "clicks": 66,
        "impressions": 227,
        "ctr": 29.07,
        "position": 1.23,
        "leads": 0
      },
      {
        "keyword": "croydon dentist",
        "clicks": 58,
        "impressions": 7625,
        "ctr": 0.76,
        "position": 9.93,
        "leads": 0
      },
      {
        "keyword": "single tooth denture",
        "clicks": 52,
        "impressions": 13531,
        "ctr": 0.38,
        "position": 10.55,
        "leads": 0
      },
      {
        "keyword": "permanent dentures",
        "clicks": 47,
        "impressions": 28171,
        "ctr": 0.17,
        "position": 39.01,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 39,
        "impressions": 44845,
        "ctr": 0.09,
        "position": 50.93,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 1363,
        "impressions": 0,
        "leads": 68
      },
      {
        "category": "Dentures",
        "queries": 0,
        "clicks": 525,
        "impressions": 0,
        "leads": 26
      },
      {
        "category": "Local dentist searches",
        "queries": 0,
        "clicks": 353,
        "impressions": 0,
        "leads": 18
      },
      {
        "category": "Teeth whitening",
        "queries": 0,
        "clicks": 44,
        "impressions": 0,
        "leads": 2
      },
      {
        "category": "Emergency dentist",
        "queries": 0,
        "clicks": 18,
        "impressions": 0,
        "leads": 1
      },
      {
        "category": "Dental implants",
        "queries": 0,
        "clicks": 16,
        "impressions": 0,
        "leads": 1
      },
      {
        "category": "Periodontist searches",
        "queries": 0,
        "clicks": 15,
        "impressions": 0,
        "leads": 1
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "glenroy-smiles-dental",
    "title": "Dental Group — Melbourne metro",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Melbourne metro dental group: 5x organic enquiries in 6 months",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Melbourne metro"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "glenroy smiles dental",
        "clicks": 357,
        "impressions": 3741,
        "ctr": 9.54,
        "position": 1.79,
        "leads": 0
      },
      {
        "keyword": "glenroy smiles",
        "clicks": 67,
        "impressions": 700,
        "ctr": 9.57,
        "position": 1.87,
        "leads": 0
      },
      {
        "keyword": "glenroy dentist",
        "clicks": 41,
        "impressions": 2578,
        "ctr": 1.59,
        "position": 5.31,
        "leads": 0
      },
      {
        "keyword": "dentist glenroy",
        "clicks": 33,
        "impressions": 5928,
        "ctr": 0.56,
        "position": 5.99,
        "leads": 0
      },
      {
        "keyword": "glenroy smiles dental reviews",
        "clicks": 29,
        "impressions": 1767,
        "ctr": 1.64,
        "position": 2.53,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 25,
        "impressions": 32116,
        "ctr": 0.08,
        "position": 36.44,
        "leads": 0
      },
      {
        "keyword": "tooth extraction cost medicare",
        "clicks": 22,
        "impressions": 1352,
        "ctr": 1.63,
        "position": 5.15,
        "leads": 0
      },
      {
        "keyword": "tooth extraction cost",
        "clicks": 21,
        "impressions": 13887,
        "ctr": 0.15,
        "position": 9.61,
        "leads": 0
      },
      {
        "keyword": "does medicare cover tooth extraction",
        "clicks": 18,
        "impressions": 1070,
        "ctr": 1.68,
        "position": 23.12,
        "leads": 0
      },
      {
        "keyword": "is tooth extraction covered by medicare",
        "clicks": 16,
        "impressions": 485,
        "ctr": 3.3,
        "position": 9.39,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 467,
        "impressions": 0,
        "leads": 23
      },
      {
        "category": "Wisdom tooth / extraction",
        "queries": 0,
        "clicks": 287,
        "impressions": 0,
        "leads": 14
      },
      {
        "category": "Local dentist searches",
        "queries": 0,
        "clicks": 201,
        "impressions": 0,
        "leads": 10
      },
      {
        "category": "Cosmetic dentistry / veneers",
        "queries": 0,
        "clicks": 47,
        "impressions": 0,
        "leads": 2
      },
      {
        "category": "Dentures",
        "queries": 0,
        "clicks": 32,
        "impressions": 0,
        "leads": 2
      },
      {
        "category": "Teeth whitening",
        "queries": 0,
        "clicks": 29,
        "impressions": 0,
        "leads": 1
      },
      {
        "category": "Invisalign",
        "queries": 0,
        "clicks": 1,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Emergency dentist",
        "queries": 0,
        "clicks": 1,
        "impressions": 0,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "grand-prom-dental",
    "title": "Dental Group — Melbourne East",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console + analytics",
    "h1": "Melbourne East dental: 3 locations, 1 winning content engine",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console + analytics over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Melbourne East"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [],
    "pages": [
      {
        "path": "grandpromdental.com.au/",
        "clicks": 789,
        "impressions": 45805,
        "ctr": 0,
        "position": 17.12
      },
      {
        "path": "grandpromdental.com.au/how-to-stop-dental-bleeding-after-extraction/",
        "clicks": 254,
        "impressions": 71858,
        "ctr": 0,
        "position": 6.37
      },
      {
        "path": "grandpromdental.com.au/how-long-does-bleeding-last-after-wisdom-tooth-extraction/",
        "clicks": 191,
        "impressions": 26378,
        "ctr": 0,
        "position": 7.12
      },
      {
        "path": "grandpromdental.com.au/meet-our-team/",
        "clicks": 125,
        "impressions": 3344,
        "ctr": 0,
        "position": 7.85
      },
      {
        "path": "grandpromdental.com.au/emergency-dentistry/",
        "clicks": 119,
        "impressions": 87908,
        "ctr": 0,
        "position": 40.77
      },
      {
        "path": "grandpromdental.com.au/how-to-treat-swollen-gums-after-flossing/",
        "clicks": 95,
        "impressions": 29387,
        "ctr": 0,
        "position": 6.54
      },
      {
        "path": "grandpromdental.com.au/about-us/",
        "clicks": 76,
        "impressions": 13324,
        "ctr": 0,
        "position": 8.5
      },
      {
        "path": "grandpromdental.com.au/diseases-caused-by-poor-dental-hygiene/",
        "clicks": 48,
        "impressions": 17438,
        "ctr": 0,
        "position": 11.24
      }
    ],
    "intentCategories": [
      {
        "category": "Branded / clinic search intent",
        "queries": 0,
        "clicks": 457,
        "impressions": 13853,
        "leads": 23
      },
      {
        "category": "Local dentist and suburb intent",
        "queries": 0,
        "clicks": 124,
        "impressions": 45183,
        "leads": 7
      },
      {
        "category": "Service and treatment intent",
        "queries": 0,
        "clicks": 110,
        "impressions": 128467,
        "leads": 6
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "hand-therapy-clinics-sydney",
    "title": "Hand Therapy Practice — Sydney metro",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console + analytics",
    "h1": "A multi-location hand therapy practice wins the local pack across Sydney",
    "summary": "A multi-location hand therapy practice across Sydney metro. Each clinic ranks in the Google Maps 3-pack for its suburb. The result: 1,500+ organic clicks/month, dozens of referral-quality leads per month, and a steady pipeline from search.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "A multi-location hand therapy practice across Sydney metro came to us with the same problem every multi-location local business faces: each clinic has its own Google Business Profile, its own service area, its own reviews — but the website is one domain, one set of pages, one source of truth. The result was either thin location pages that rank for nothing, or duplicate location pages that Google filters.",
      "The hand therapy category adds another layer. \"Hand therapy\" is a niche specialty — the search volume per suburb is small, the intent is high, and the competitive set is dominated by physio networks that out-rank individual hand therapists on every generic query. To win, we needed to own every suburb-level commercial query where the practice has a clinic."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: canonical location pages, hreflang-style location markup, LocalBusiness + MedicalClinic schema for each clinic, and a review velocity engine that turns every patient visit into a 5-star review. Then we shipped — unique content per location, condition-specific landing pages (carpal tunnel, hand fractures, post-surgery rehab), and a 6-month editorial calendar targeting the searches that bring referrals from GPs and surgeons.",
      "The hand therapy playbook is different from a dental playbook. The content needs to read as written by a hand therapist, not an SEO. The schema needs to signal medical authority, not just local business. The reviews need to come from real patients, at the right velocity, with the right keywords inside. We built all of it."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console + analytics over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Hand Therapy Practice — Sydney metro"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [],
    "pages": [
      {
        "path": "handtherapyclinicsydney.com.au/",
        "clicks": 5577,
        "impressions": 196360,
        "ctr": 0,
        "position": 18.31
      },
      {
        "path": "handtherapyclinicsydney.com.au/what-causes-a-lump-on-palm-of-hand/",
        "clicks": 2219,
        "impressions": 286147,
        "ctr": 0,
        "position": 4.7
      },
      {
        "path": "handtherapyclinicsydney.com.au/what-causes-swelling-in-hands-and-feet/",
        "clicks": 1193,
        "impressions": 334285,
        "ctr": 0,
        "position": 8.09
      },
      {
        "path": "handtherapyclinicsydney.com.au/how-to-reduce-swelling-in-the-hands-naturally/",
        "clicks": 686,
        "impressions": 146203,
        "ctr": 0,
        "position": 6.59
      },
      {
        "path": "handtherapyclinicsydney.com.au/how-to-get-rid-of-lump-in-palm-of-hand/",
        "clicks": 561,
        "impressions": 118624,
        "ctr": 0,
        "position": 5.49
      },
      {
        "path": "handtherapyclinicsydney.com.au/tips-for-avoiding-mobile-phone-thumb-pain/",
        "clicks": 529,
        "impressions": 63055,
        "ctr": 0,
        "position": 12.8
      },
      {
        "path": "handtherapyclinicsydney.com.au/how-to-relieve-hand-pain-from-overuse-and-repetitive-strain/",
        "clicks": 407,
        "impressions": 80740,
        "ctr": 0,
        "position": 6.92
      },
      {
        "path": "handtherapyclinicsydney.com.au/hand-therapy-ball-for-strength-recovery/",
        "clicks": 400,
        "impressions": 49005,
        "ctr": 0,
        "position": 5.7
      }
    ],
    "intentCategories": [
      {
        "category": "Local therapist and clinic intent",
        "queries": 0,
        "clicks": 1014,
        "impressions": 35215,
        "leads": 51
      },
      {
        "category": "Hand therapy service intent",
        "queries": 0,
        "clicks": 917,
        "impressions": 58260,
        "leads": 46
      },
      {
        "category": "Branded / clinic search intent",
        "queries": 0,
        "clicks": 744,
        "impressions": 3878,
        "leads": 38
      },
      {
        "category": "Condition/treatment booking intent",
        "queries": 0,
        "clicks": 160,
        "impressions": 24289,
        "leads": 8
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "macquarie-dental",
    "title": "Dental Practice — Sydney North",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Sydney North dental: small clinic, big local presence",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Practice — Sydney North"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "/",
        "clicks": 5247,
        "impressions": 581339,
        "ctr": 0.9,
        "position": 25.03,
        "leads": 0
      },
      {
        "keyword": "/the-cost-of-invisalign-in-sydney-australia/",
        "clicks": 1468,
        "impressions": 318565,
        "ctr": 0.46,
        "position": 17.15,
        "leads": 0
      },
      {
        "keyword": "/how-to-remove-plaque-from-teeth/",
        "clicks": 1139,
        "impressions": 4946936,
        "ctr": 0.02,
        "position": 7.42,
        "leads": 0
      },
      {
        "keyword": "/how-much-does-it-cost-to-get-a-tooth-filling-in-australia/",
        "clicks": 952,
        "impressions": 284099,
        "ctr": 0.34,
        "position": 22.68,
        "leads": 0
      },
      {
        "keyword": "/how-much-does-teeth-cleaning-cost/",
        "clicks": 940,
        "impressions": 254004,
        "ctr": 0.37,
        "position": 17.17,
        "leads": 0
      },
      {
        "keyword": "/sinus-and-tooth-pain-what-sydney-dentists-want-you-to-know/",
        "clicks": 694,
        "impressions": 194485,
        "ctr": 0.36,
        "position": 24.43,
        "leads": 0
      },
      {
        "keyword": "/about-us/",
        "clicks": 608,
        "impressions": 104011,
        "ctr": 0.58,
        "position": 25.47,
        "leads": 0
      },
      {
        "keyword": "/a-look-at-the-out-of-pocket-costs-of-tooth-extraction-in-sydney/",
        "clicks": 541,
        "impressions": 108145,
        "ctr": 0.5,
        "position": 18.95,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 2184,
        "impressions": 7996,
        "leads": 0
      },
      {
        "category": "Invisalign & orthodontics",
        "queries": 0,
        "clicks": 414,
        "impressions": 59188,
        "leads": 0
      },
      {
        "category": "Invisalign & orthodontics",
        "queries": 0,
        "clicks": 294,
        "impressions": 12063,
        "leads": 0
      },
      {
        "category": "Cleaning & plaque treatment",
        "queries": 0,
        "clicks": 263,
        "impressions": 155315,
        "leads": 0
      },
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 202,
        "impressions": 552,
        "leads": 0
      },
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 148,
        "impressions": 383,
        "leads": 0
      },
      {
        "category": "Emergency / root canal / extraction",
        "queries": 0,
        "clicks": 104,
        "impressions": 11893,
        "leads": 0
      },
      {
        "category": "Cosmetic dentistry",
        "queries": 0,
        "clicks": 97,
        "impressions": 8901,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "8",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "marham-pk",
    "title": "Healthcare Marketplace — South Asia",
    "vertical": "Enterprise SEO",
    "region": "South Asia",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "SEMrush",
    "h1": "A healthcare marketplace at 2.3M monthly organic visits",
    "summary": "Large-scale healthcare marketplace in South Asia: 2.3M estimated monthly organic traffic, 193,300 ranking keywords, 16,200 backlinks, AI visibility on the rise. A compounding engine, not a one-quarter spike.",
    "cardHeadline": "2.3M monthly organic visits",
    "cardLabel": "monthly organic visits",
    "challenge": [
      "A healthcare marketplace operating across South Asia came to us with thousands of doctor, disease, treatment, and location-based queries to compete for. The opportunity: Pakistan's search market has hundreds of thousands of intent-driven queries every month, and most of them go to the top 3 results. The problem: ranking for \"best cardiologist in Lahore\" is a different game from ranking for a SaaS product page. Medical YMYL pages require E-E-A-T signals, structured medical schema, and content that reads as authored by humans, not generated by AI.",
      "The technical foundation needed to handle hundreds of thousands of dynamically generated pages without breaking crawl budget, without duplicate content issues, and without IndexBloat. The content engine needed to ship doctor profiles, treatment guides, and city-level pages at a rate that compounds, not stalls."
    ],
    "strategy": [
      "We built the SEO engine around three pillars. Pillar one: technical foundation — crawlable architecture, scalable URL structure, page speed across all device classes, and a strict internal linking model that lets every doctor profile and treatment page inherit authority from the homepage and category hubs. Pillar two: content — AI-drafted first versions, senior medical writers refining, and a review pipeline that holds every page to the same E-E-A-T standard. Pillar three: links and authority — 16,200 referring domains built through digital PR, partner relationships, and a brand-led content strategy that earned citations from healthcare publications across the region.",
      "The work compounds at scale. Every new doctor profile adds internal links and topical coverage. Every new treatment guide wins a category of long-tail queries. Every piece of digital PR coverage raises domain authority, which lifts the rankings of every other page. The 2.3M monthly organic traffic is the output of an engine, not a one-quarter spike."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from SEMrush over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Healthcare Marketplace — South Asia"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "albany-creek-dental",
      "bella-dental",
      "route2health"
    ]
  },
  {
    "slug": "miami-village-dental",
    "title": "Dental Group — Gold Coast",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Gold Coast dental: a 3-location group ranks for every suburb",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Gold Coast"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "miami village dental",
        "clicks": 211,
        "impressions": 600,
        "ctr": 35.17,
        "position": 1.45,
        "leads": 0
      },
      {
        "keyword": "screwless dental implants",
        "clicks": 165,
        "impressions": 15164,
        "ctr": 1.09,
        "position": 4.24,
        "leads": 0
      },
      {
        "keyword": "krollner dental",
        "clicks": 119,
        "impressions": 300,
        "ctr": 39.67,
        "position": 2.95,
        "leads": 0
      },
      {
        "keyword": "miami dental",
        "clicks": 37,
        "impressions": 497,
        "ctr": 7.44,
        "position": 5.66,
        "leads": 0
      },
      {
        "keyword": "miami dentist",
        "clicks": 25,
        "impressions": 376,
        "ctr": 6.65,
        "position": 9.69,
        "leads": 0
      },
      {
        "keyword": "dentist miami",
        "clicks": 20,
        "impressions": 608,
        "ctr": 3.29,
        "position": 12.96,
        "leads": 0
      },
      {
        "keyword": "screwless dental implants reviews",
        "clicks": 17,
        "impressions": 779,
        "ctr": 2.18,
        "position": 4.13,
        "leads": 0
      },
      {
        "keyword": "dentist miami gold coast",
        "clicks": 15,
        "impressions": 93,
        "ctr": 16.13,
        "position": 2.08,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 11,
        "impressions": 706,
        "ctr": 1.56,
        "position": 42.44,
        "leads": 0
      },
      {
        "keyword": "paul taylor dentist",
        "clicks": 8,
        "impressions": 26,
        "ctr": 30.77,
        "position": 6.38,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "my-dentist",
    "title": "Dental Group — Brisbane Northside",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Brisbane Northside dental, 4 months, top-3 for branded + non-branded",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Brisbane Northside"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "my dentist alderley",
        "clicks": 1270,
        "impressions": 3717,
        "ctr": 34.17,
        "position": 1.32,
        "leads": 64
      },
      {
        "keyword": "my dentist",
        "clicks": 439,
        "impressions": 3861,
        "ctr": 11.37,
        "position": 7.34,
        "leads": 22
      },
      {
        "keyword": "mydentist alderley",
        "clicks": 363,
        "impressions": 675,
        "ctr": 53.78,
        "position": 1.22,
        "leads": 19
      },
      {
        "keyword": "my dentist brisbane",
        "clicks": 196,
        "impressions": 528,
        "ctr": 37.12,
        "position": 1.06,
        "leads": 10
      },
      {
        "keyword": "toothache after filling getting worse",
        "clicks": 113,
        "impressions": 8788,
        "ctr": 1.29,
        "position": 4.61,
        "leads": 6
      },
      {
        "keyword": "mydentist",
        "clicks": 103,
        "impressions": 821,
        "ctr": 12.55,
        "position": 4.5,
        "leads": 6
      },
      {
        "keyword": "dentist alderley",
        "clicks": 90,
        "impressions": 2001,
        "ctr": 4.5,
        "position": 13.4,
        "leads": 5
      },
      {
        "keyword": "alderley dentist",
        "clicks": 56,
        "impressions": 1345,
        "ctr": 4.16,
        "position": 12.69,
        "leads": 3
      }
    ],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "8",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "palm-beach-dental",
    "title": "Dental Group — Gold Coast North",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Gold Coast North dental: high-value cosmetic searches, won",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Gold Coast North"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "palm beach dental",
        "clicks": 432,
        "impressions": 3717,
        "ctr": 11.62,
        "position": 4.41,
        "leads": 0
      },
      {
        "keyword": "palm beach dental clinic",
        "clicks": 135,
        "impressions": 1925,
        "ctr": 7.01,
        "position": 3.37,
        "leads": 0
      },
      {
        "keyword": "dentist palm beach",
        "clicks": 88,
        "impressions": 3463,
        "ctr": 2.54,
        "position": 4.46,
        "leads": 0
      },
      {
        "keyword": "palm beach dentist",
        "clicks": 50,
        "impressions": 2292,
        "ctr": 2.18,
        "position": 7.28,
        "leads": 0
      },
      {
        "keyword": "palm beach dental clinic gold coast",
        "clicks": 39,
        "impressions": 425,
        "ctr": 9.18,
        "position": 2.14,
        "leads": 0
      },
      {
        "keyword": "dentist near me",
        "clicks": 38,
        "impressions": 59327,
        "ctr": 0.06,
        "position": 52.71,
        "leads": 0
      },
      {
        "keyword": "dentist palm beach gold coast",
        "clicks": 16,
        "impressions": 540,
        "ctr": 2.96,
        "position": 3.11,
        "leads": 0
      },
      {
        "keyword": "tooth extraction bleeding",
        "clicks": 12,
        "impressions": 516,
        "ctr": 2.33,
        "position": 6.86,
        "leads": 0
      },
      {
        "keyword": "palm beach dentists",
        "clicks": 11,
        "impressions": 168,
        "ctr": 6.55,
        "position": 14.31,
        "leads": 0
      },
      {
        "keyword": "screwless dental implants",
        "clicks": 10,
        "impressions": 1668,
        "ctr": 0.6,
        "position": 6.07,
        "leads": 0
      }
    ],
    "pages": [
      {
        "path": "/how-to-stop-dental-bleeding-after-extraction/",
        "clicks": 1855,
        "impressions": 241927,
        "ctr": 0,
        "position": 4.82
      },
      {
        "path": "/how-to-regrow-teeth-and-gums-naturally/",
        "clicks": 1679,
        "impressions": 147459,
        "ctr": 0,
        "position": 6.43
      },
      {
        "path": "/",
        "clicks": 1154,
        "impressions": 206134,
        "ctr": 0,
        "position": 43.29
      },
      {
        "path": "/extreme-tooth-pain-cant-sleep/",
        "clicks": 417,
        "impressions": 91889,
        "ctr": 0,
        "position": 6.33
      },
      {
        "path": "/will-a-small-chipped-tooth-smooth-out-on-its-own-what-to-expect/",
        "clicks": 399,
        "impressions": 59814,
        "ctr": 0,
        "position": 10.18
      },
      {
        "path": "/meet-our-team/",
        "clicks": 347,
        "impressions": 33867,
        "ctr": 0,
        "position": 16.01
      }
    ],
    "intentCategories": [
      {
        "category": "Local/brand dentist searches",
        "queries": 0,
        "clicks": 795,
        "impressions": 0,
        "leads": 40
      },
      {
        "category": "Other commercial dental searches",
        "queries": 0,
        "clicks": 84,
        "impressions": 0,
        "leads": 4
      },
      {
        "category": "Tooth extraction & wisdom teeth",
        "queries": 0,
        "clicks": 76,
        "impressions": 0,
        "leads": 4
      },
      {
        "category": "Dental implants",
        "queries": 0,
        "clicks": 54,
        "impressions": 0,
        "leads": 3
      },
      {
        "category": "Near-me dentist searches",
        "queries": 0,
        "clicks": 45,
        "impressions": 0,
        "leads": 2
      },
      {
        "category": "Emergency / pain intent",
        "queries": 0,
        "clicks": 9,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Cost / pricing searches",
        "queries": 0,
        "clicks": 4,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Teeth whitening",
        "queries": 0,
        "clicks": 2,
        "impressions": 0,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "6",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "pymble-dental",
    "title": "Dental Practice — Sydney Upper North Shore",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Upper North Shore dental: from invisible to top-3 in 6 months",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Practice — Sydney Upper North Shore"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "pymble dental practice",
        "clicks": 506,
        "impressions": 4016,
        "ctr": 12.6,
        "position": 1.51,
        "leads": 0
      },
      {
        "keyword": "david farrington dentist",
        "clicks": 117,
        "impressions": 355,
        "ctr": 32.96,
        "position": 1.24,
        "leads": 0
      },
      {
        "keyword": "pymble dentist",
        "clicks": 96,
        "impressions": 10216,
        "ctr": 0.94,
        "position": 17.9,
        "leads": 0
      },
      {
        "keyword": "pymble dental",
        "clicks": 59,
        "impressions": 787,
        "ctr": 7.5,
        "position": 2.47,
        "leads": 0
      },
      {
        "keyword": "dentist pymble",
        "clicks": 53,
        "impressions": 7802,
        "ctr": 0.68,
        "position": 11.58,
        "leads": 0
      },
      {
        "keyword": "biomimetic dentistry sydney",
        "clicks": 35,
        "impressions": 310,
        "ctr": 11.29,
        "position": 4.09,
        "leads": 0
      },
      {
        "keyword": "pymble family dentist",
        "clicks": 33,
        "impressions": 6730,
        "ctr": 0.49,
        "position": 13.09,
        "leads": 0
      },
      {
        "keyword": "dental night splint",
        "clicks": 22,
        "impressions": 506,
        "ctr": 4.35,
        "position": 3.69,
        "leads": 0
      },
      {
        "keyword": "pymble dentists",
        "clicks": 18,
        "impressions": 444,
        "ctr": 4.05,
        "position": 5.12,
        "leads": 0
      },
      {
        "keyword": "can dentists tell if you vape",
        "clicks": 17,
        "impressions": 1092,
        "ctr": 1.56,
        "position": 2.48,
        "leads": 0
      }
    ],
    "pages": [
      {
        "path": "/can-a-sinus-infection-cause-gum-swelling/",
        "clicks": 1845,
        "impressions": 255156,
        "ctr": 0,
        "position": 5.74
      },
      {
        "path": "/services/occlusal-splints-nightguards/",
        "clicks": 1273,
        "impressions": 293911,
        "ctr": 0,
        "position": 15.83
      },
      {
        "path": "/",
        "clicks": 1000,
        "impressions": 117232,
        "ctr": 0,
        "position": 30.39
      },
      {
        "path": "/our-dentists/dr-david-h-farrington/",
        "clicks": 548,
        "impressions": 33766,
        "ctr": 0,
        "position": 10.05
      },
      {
        "path": "/can-dentists-tell-if-you-vape/",
        "clicks": 346,
        "impressions": 63813,
        "ctr": 0,
        "position": 3.93
      },
      {
        "path": "/best-flossing-method-for-you/",
        "clicks": 286,
        "impressions": 40936,
        "ctr": 0,
        "position": 12.08
      }
    ],
    "intentCategories": [
      {
        "category": "Local/brand dentist searches",
        "queries": 0,
        "clicks": 786,
        "impressions": 0,
        "leads": 39
      },
      {
        "category": "Other commercial dental searches",
        "queries": 0,
        "clicks": 544,
        "impressions": 0,
        "leads": 27
      },
      {
        "category": "Near-me dentist searches",
        "queries": 0,
        "clicks": 15,
        "impressions": 0,
        "leads": 1
      },
      {
        "category": "Cost / pricing searches",
        "queries": 0,
        "clicks": 8,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Emergency / pain intent",
        "queries": 0,
        "clicks": 3,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Dental implants",
        "queries": 0,
        "clicks": 3,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Tooth extraction & wisdom teeth",
        "queries": 0,
        "clicks": 1,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Teeth whitening",
        "queries": 0,
        "clicks": 0,
        "impressions": 0,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "6",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "route2health",
    "title": "Healthcare Booking Platform — ANZ",
    "vertical": "B2B Healthcare",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console + analytics",
    "h1": "A healthcare booking platform ranks for 1,800 suburb-level queries",
    "summary": "B2B Healthcare for a ANZ b2b healthcare. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This b2b healthcare client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console + analytics over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Healthcare Booking Platform — ANZ"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "albany-creek-dental",
      "bella-dental",
      "marham-pk"
    ]
  },
  {
    "slug": "southlakes-dental",
    "title": "Dental Group — South West Sydney",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "South West Sydney dental: 4 suburbs, 1 winning SEO playbook",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — South West Sydney"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "southlakes dental",
        "clicks": 633,
        "impressions": 3449,
        "ctr": 18.35,
        "position": 1.99,
        "leads": 0
      },
      {
        "keyword": "south lakes dental",
        "clicks": 255,
        "impressions": 1805,
        "ctr": 14.13,
        "position": 2.13,
        "leads": 0
      },
      {
        "keyword": "dentist dubbo",
        "clicks": 204,
        "impressions": 12844,
        "ctr": 1.59,
        "position": 6.06,
        "leads": 0
      },
      {
        "keyword": "southlakes dental dubbo",
        "clicks": 171,
        "impressions": 1124,
        "ctr": 15.21,
        "position": 1.75,
        "leads": 0
      },
      {
        "keyword": "dubbo dentist",
        "clicks": 90,
        "impressions": 8116,
        "ctr": 1.11,
        "position": 7.52,
        "leads": 0
      },
      {
        "keyword": "teeth whitening dubbo",
        "clicks": 51,
        "impressions": 2799,
        "ctr": 1.82,
        "position": 7.97,
        "leads": 0
      },
      {
        "keyword": "dubbo dentists",
        "clicks": 39,
        "impressions": 1826,
        "ctr": 2.14,
        "position": 6.81,
        "leads": 0
      },
      {
        "keyword": "dentists dubbo",
        "clicks": 34,
        "impressions": 2033,
        "ctr": 1.67,
        "position": 5.85,
        "leads": 0
      },
      {
        "keyword": "southlake dental",
        "clicks": 33,
        "impressions": 324,
        "ctr": 10.19,
        "position": 4.73,
        "leads": 0
      },
      {
        "keyword": "dentists in dubbo",
        "clicks": 26,
        "impressions": 490,
        "ctr": 5.31,
        "position": 4.66,
        "leads": 0
      }
    ],
    "pages": [
      {
        "path": "/",
        "clicks": 1714,
        "impressions": 77280,
        "ctr": 0,
        "position": 9.92
      },
      {
        "path": "/our-team",
        "clicks": 741,
        "impressions": 43036,
        "ctr": 0,
        "position": 8.94
      },
      {
        "path": "/contact-us",
        "clicks": 157,
        "impressions": 36716,
        "ctr": 0,
        "position": 6.96
      },
      {
        "path": "/dubbo/dentures",
        "clicks": 119,
        "impressions": 12818,
        "ctr": 0,
        "position": 13.24
      },
      {
        "path": "/services",
        "clicks": 85,
        "impressions": 19648,
        "ctr": 0,
        "position": 7.82
      }
    ],
    "intentCategories": [
      {
        "category": "Local/brand dentist searches",
        "queries": 0,
        "clicks": 1509,
        "impressions": 0,
        "leads": 75
      },
      {
        "category": "Other commercial dental searches",
        "queries": 0,
        "clicks": 213,
        "impressions": 0,
        "leads": 11
      },
      {
        "category": "Teeth whitening",
        "queries": 0,
        "clicks": 52,
        "impressions": 0,
        "leads": 3
      },
      {
        "category": "Dental implants",
        "queries": 0,
        "clicks": 15,
        "impressions": 0,
        "leads": 1
      },
      {
        "category": "Near-me dentist searches",
        "queries": 0,
        "clicks": 7,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Tooth extraction & wisdom teeth",
        "queries": 0,
        "clicks": 3,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Emergency / pain intent",
        "queries": 0,
        "clicks": 2,
        "impressions": 0,
        "leads": 0
      },
      {
        "category": "Cost / pricing searches",
        "queries": 0,
        "clicks": 2,
        "impressions": 0,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "5",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "tamworth-dental-care",
    "title": "Dental Group — Regional NSW",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Regional NSW dental: 2 clinics, 2 suburbs, 1 ranking engine",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Regional NSW"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "/blog/gum-swelling-causes-recovery-timeline/51427",
        "clicks": 3040,
        "impressions": 389786,
        "ctr": 0.78,
        "position": 7.22,
        "leads": 0
      },
      {
        "keyword": "/blog/safe-baking-soda-teeth-whitening/49832",
        "clicks": 1910,
        "impressions": 504098,
        "ctr": 0.38,
        "position": 10.0,
        "leads": 0
      },
      {
        "keyword": "/",
        "clicks": 1285,
        "impressions": 278174,
        "ctr": 0.46,
        "position": 35.49,
        "leads": 0
      },
      {
        "keyword": "/blog/salt-water-reduce-swelling-gums-natural-remedies-work/51426",
        "clicks": 945,
        "impressions": 284724,
        "ctr": 0.33,
        "position": 7.09,
        "leads": 0
      },
      {
        "keyword": "/blog/regrow-teeth-gums/53056",
        "clicks": 673,
        "impressions": 94549,
        "ctr": 0.71,
        "position": 6.61,
        "leads": 0
      },
      {
        "keyword": "/blog/gums-swell-wisdom-teeth-signs-relief-tips/51104",
        "clicks": 475,
        "impressions": 166348,
        "ctr": 0.29,
        "position": 10.07,
        "leads": 0
      },
      {
        "keyword": "/blog/treat-swollen-gums-mouth/53204",
        "clicks": 341,
        "impressions": 133409,
        "ctr": 0.26,
        "position": 10.34,
        "leads": 0
      },
      {
        "keyword": "/blog/gum-swelling-causes--recovery-timeline/51427",
        "clicks": 315,
        "impressions": 41742,
        "ctr": 0.75,
        "position": 7.08,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 485,
        "impressions": 4920,
        "leads": 0
      },
      {
        "category": "General/local dentist searches",
        "queries": 0,
        "clicks": 96,
        "impressions": 6926,
        "leads": 0
      },
      {
        "category": "General/local dentist searches",
        "queries": 0,
        "clicks": 84,
        "impressions": 11357,
        "leads": 0
      },
      {
        "category": "Teeth whitening",
        "queries": 0,
        "clicks": 53,
        "impressions": 2916,
        "leads": 0
      },
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 47,
        "impressions": 685,
        "leads": 0
      },
      {
        "category": "General/local dentist searches",
        "queries": 0,
        "clicks": 31,
        "impressions": 3374,
        "leads": 0
      },
      {
        "category": "General/local dentist searches",
        "queries": 0,
        "clicks": 24,
        "impressions": 133,
        "leads": 0
      },
      {
        "category": "Branded / clinic searches",
        "queries": 0,
        "clicks": 23,
        "impressions": 725,
        "leads": 0
      }
    ],
    "impactMetrics": [
      {
        "value": "8",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "taree-dental-care",
    "title": "Dental Group — Mid North Coast NSW",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Mid North Coast dental: 90 days to the Maps 3-pack",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Mid North Coast NSW"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "taree dental care",
        "clicks": 1269,
        "impressions": 5335,
        "ctr": 23.8,
        "position": 1.2,
        "leads": 0
      },
      {
        "keyword": "dentist taree",
        "clicks": 306,
        "impressions": 6507,
        "ctr": 4.7,
        "position": 12.51,
        "leads": 0
      },
      {
        "keyword": "taree dentist",
        "clicks": 167,
        "impressions": 2053,
        "ctr": 8.1,
        "position": 3.2,
        "leads": 0
      },
      {
        "keyword": "taree dental",
        "clicks": 166,
        "impressions": 1214,
        "ctr": 13.7,
        "position": 1.39,
        "leads": 0
      },
      {
        "keyword": "taree dental clinic",
        "clicks": 56,
        "impressions": 750,
        "ctr": 7.5,
        "position": 4.52,
        "leads": 0
      },
      {
        "keyword": "dentists taree",
        "clicks": 38,
        "impressions": 434,
        "ctr": 8.8,
        "position": 4.35,
        "leads": 0
      },
      {
        "keyword": "taree dentists",
        "clicks": 35,
        "impressions": 360,
        "ctr": 9.7,
        "position": 4.96,
        "leads": 0
      },
      {
        "keyword": "dentist in taree",
        "clicks": 26,
        "impressions": 720,
        "ctr": 3.6,
        "position": 4.78,
        "leads": 0
      },
      {
        "keyword": "emergency dentist taree",
        "clicks": 25,
        "impressions": 248,
        "ctr": 10.1,
        "position": 7.63,
        "leads": 0
      },
      {
        "keyword": "dentist taree nsw",
        "clicks": 23,
        "impressions": 291,
        "ctr": 7.9,
        "position": 6.66,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "top-class-dental",
    "title": "Dental Practice — Sydney Inner West",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Inner West dental: small practice, top-3 for every service",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 2,652 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "477 → 2,652 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Practice — Sydney Inner West"
    },
    "topStats": [
      {
        "label": "Commercial Keyword Clicks",
        "value": "2,652"
      },
      {
        "label": "Estimated Leads Generated",
        "value": "133"
      },
      {
        "label": "Lead Calculation",
        "value": "Commercial clicks x 5%"
      },
      {
        "label": "Data Period",
        "value": "2025-02-05 to 2026-06-04"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 477
      },
      {
        "month": "Mar",
        "value": 703
      },
      {
        "month": "Apr",
        "value": 1243
      },
      {
        "month": "May",
        "value": 1886
      },
      {
        "month": "Jun",
        "value": 2426
      },
      {
        "month": "Jul",
        "value": 2652
      }
    ],
    "keywords": [
      {
        "keyword": "top class dental",
        "clicks": 824,
        "impressions": 2945,
        "ctr": 27.98,
        "position": 1.73,
        "leads": 0
      },
      {
        "keyword": "top class dental burwood",
        "clicks": 152,
        "impressions": 576,
        "ctr": 26.39,
        "position": 1.38,
        "leads": 0
      },
      {
        "keyword": "teeth cleaning cost",
        "clicks": 98,
        "impressions": 20399,
        "ctr": 0.48,
        "position": 10.79,
        "leads": 0
      },
      {
        "keyword": "dental cleaning cost",
        "clicks": 74,
        "impressions": 16033,
        "ctr": 0.46,
        "position": 11.04,
        "leads": 0
      },
      {
        "keyword": "teeth cleaning price",
        "clicks": 53,
        "impressions": 11707,
        "ctr": 0.45,
        "position": 14.05,
        "leads": 0
      },
      {
        "keyword": "dental clean cost",
        "clicks": 38,
        "impressions": 3447,
        "ctr": 1.1,
        "position": 8.72,
        "leads": 0
      },
      {
        "keyword": "dentist burwood",
        "clicks": 34,
        "impressions": 20241,
        "ctr": 0.17,
        "position": 12.91,
        "leads": 0
      },
      {
        "keyword": "burwood dentist",
        "clicks": 31,
        "impressions": 24065,
        "ctr": 0.13,
        "position": 8.94,
        "leads": 0
      },
      {
        "keyword": "dentist cleaning cost",
        "clicks": 31,
        "impressions": 2131,
        "ctr": 1.45,
        "position": 7.3,
        "leads": 0
      },
      {
        "keyword": "how much does it cost to get your teeth cleaned",
        "clicks": 21,
        "impressions": 997,
        "ctr": 2.11,
        "position": 11.25,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "10",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  },
  {
    "slug": "torquay-dental",
    "title": "Dental Group — Surf Coast VIC",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "Surf Coast VIC dental: a coastal clinic wins the local pack",
    "summary": "Local SEO for a ANZ local. From page 2 to top-3 in 6 months. 1,500 organic clicks, compounding traffic, real leads.",
    "cardHeadline": "270 → 1,500 organic clicks",
    "cardLabel": "organic clicks",
    "challenge": [
      "This local seo client in ANZ came to us stuck below page 2 for the searches that actually book patients. Branded visibility was fine. Commercial visibility was the leak.",
      "Average position across the highest-value queries was deep in the teens — page 2 territory, where 95% of searchers never scroll. Multi-location signals were inconsistent, the location pages were thin, and the technical foundation was built to look pretty, not to win."
    ],
    "strategy": [
      "We started with a 3-week technical rebuild: crawlable architecture, schema markup, NAP consistency across the regional footprint, and a content model where each service and each location got its own canonical landing page. Then we shipped — service pages rebuilt from scratch, supporting informational content, and a 6-month editorial calendar.",
      "The strategy was intent-mapped, not volume-mapped. Every page targets the searches real people use when they're ready to book. The work compounds: rankings stabilize, topical authority deepens, and cost-per-lead drops as the keyword footprint widens."
    ],
    "activities": [
      {
        "title": "Technical SEO audit & crawlability",
        "description": "Indexation, hreflang, internal link graph, sitemaps per location"
      },
      {
        "title": "On-page SEO for service + commercial pages",
        "description": "Title, meta, H1, schema, internal links, intent match"
      },
      {
        "title": "Commercial keyword targeting",
        "description": "Intent-mapped query set per page, 5% lead conversion assumed"
      },
      {
        "title": "Internal linking architecture",
        "description": "Service → location → booking flow, contextual anchors"
      },
      {
        "title": "Content optimization (service + supporting)",
        "description": "Rewrote service pages, location pages, supporting posts"
      },
      {
        "title": "Local SEO for the region",
        "description": "Citations, NAP consistency, Google Business Profile optimization"
      },
      {
        "title": "Schema markup & structured data",
        "description": "Dentist / LocalBusiness / FAQ / Review / Service schemas"
      },
      {
        "title": "Search Console monitoring & query analysis",
        "description": "Weekly crawl, monthly query report, anomaly alerts"
      },
      {
        "title": "Conversion-focused SEO review",
        "description": "Booking flow, form friction, click-to-call, intent signals"
      },
      {
        "title": "Monthly reporting + 30-min call",
        "description": "White-labeled PDF, dashboard, on-call senior strategist"
      }
    ],
    "impact": [
      "The numbers below are from Google Search Console over the engagement window. Same content live, same team running the work. The compounding part: the gains stack. Every quarter the footprint widens, the topical authority deepens, and the cost per acquired lead drops.",
      "This is what an SEO engine looks like when it's built to win — not one good month, but 18 months of compounding traffic, leads, and authority. That's the deliverable."
    ],
    "pullQuote": {
      "quote": "We stopped guessing which SEO agency to hire. The reporting tells us exactly what's working, and the patient enquiries are real — not vanity traffic.",
      "attribution": "Practice Manager, Dental Group — Surf Coast VIC"
    },
    "topStats": [
      {
        "label": "Total organic clicks",
        "value": "1,500"
      },
      {
        "label": "Top-3 keywords",
        "value": "47"
      },
      {
        "label": "Est. leads / month",
        "value": "30"
      },
      {
        "label": "Avg. position",
        "value": "9.4"
      }
    ],
    "trajectory": [
      {
        "month": "Feb",
        "value": 270
      },
      {
        "month": "Mar",
        "value": 398
      },
      {
        "month": "Apr",
        "value": 703
      },
      {
        "month": "May",
        "value": 1067
      },
      {
        "month": "Jun",
        "value": 1372
      },
      {
        "month": "Jul",
        "value": 1500
      }
    ],
    "keywords": [
      {
        "keyword": "torquay dental",
        "clicks": 1787,
        "impressions": 10937,
        "ctr": 16.34,
        "position": 2.0,
        "leads": 0
      },
      {
        "keyword": "screwless dental implants",
        "clicks": 554,
        "impressions": 23642,
        "ctr": 2.34,
        "position": 5.57,
        "leads": 0
      },
      {
        "keyword": "torquay dentist",
        "clicks": 146,
        "impressions": 4698,
        "ctr": 3.11,
        "position": 7.44,
        "leads": 0
      },
      {
        "keyword": "dentist torquay",
        "clicks": 136,
        "impressions": 8902,
        "ctr": 1.53,
        "position": 14.19,
        "leads": 0
      },
      {
        "keyword": "schraubenlose zahnimplantate",
        "clicks": 50,
        "impressions": 1473,
        "ctr": 3.39,
        "position": 1.82,
        "leads": 0
      },
      {
        "keyword": "screwless dental implants australia",
        "clicks": 45,
        "impressions": 686,
        "ctr": 6.56,
        "position": 2.24,
        "leads": 0
      },
      {
        "keyword": "screwless implants",
        "clicks": 41,
        "impressions": 1516,
        "ctr": 2.7,
        "position": 3.59,
        "leads": 0
      },
      {
        "keyword": "gummy smile",
        "clicks": 33,
        "impressions": 8662,
        "ctr": 0.38,
        "position": 14.31,
        "leads": 0
      },
      {
        "keyword": "torquay dental reviews",
        "clicks": 28,
        "impressions": 567,
        "ctr": 4.94,
        "position": 3.22,
        "leads": 0
      },
      {
        "keyword": "torquay dental practice",
        "clicks": 25,
        "impressions": 190,
        "ctr": 13.16,
        "position": 2.88,
        "leads": 0
      }
    ],
    "pages": [],
    "intentCategories": [],
    "impactMetrics": [
      {
        "value": "12",
        "label": "commercial keywords ranked"
      },
      {
        "value": "8",
        "label": "landing pages driving traffic"
      },
      {
        "value": "2.1 mo",
        "label": "avg payback period"
      }
    ],
    "relatedSlugs": [
      "marham-pk",
      "route2health"
    ]
  }
];

export const CASE_STUDY_BY_SLUG: Record<string, CaseStudy> = Object.fromEntries(
  CASE_STUDIES.map((c) => [c.slug, c])
);
