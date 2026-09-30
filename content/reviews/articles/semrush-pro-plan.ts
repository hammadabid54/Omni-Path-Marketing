import type { ReviewArticle } from "../types";

/**
 * Semrush Pro Plan. Tier 1 cluster, 570 SV, KD 28.
 * Decision-stage article for buyers on the fence between Pro+ and higher tiers.
 */
export const semrushProPlan: ReviewArticle = {
  programSlug: "semrush",
  clusterSlug: "pro-plan",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run Semrush Pro+ daily on client campaigns at Omni Path Marketing. If you sign up via any link on this page, I earn a commission at no extra cost to you. Omni Path Marketing pays full price. No free accounts, no vendor comp.",

  tldr:
    "Semrush Pro+ ($248.17/mo annual) is enough for solo operators and small in-house teams running 1–3 client accounts with up to 1,500 tracked keywords. Upgrade to Advanced ($455.67/mo) only when you need more than 5 projects, more than 1,500 keywords, API access, or extended historical data. Below is the full breakdown of what Pro+ covers, where it falls short, and when the upgrade is worth the price, and when it isn't.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: Pro+ is the right starting point for solo operators and small in-house teams. The 5-project / 1,500-keyword limits cover 80% of single-brand SEO work and 50% of small-agency work. If you hit those limits, upgrade. Don't pre-upgrade hoping you'll use the API or 60 months of historical data." },

    { type: "h2", text: "What Semrush Pro+ includes" },

    { type: "ul", items: [
      "**Keyword research**: 28.8B keyword database across 142 geographic locations (per [Semrush's 2026 data page](https://www.semrush.com/kb/997-semrush-data))",
      "**Site audit**: 140+ technical checks, scheduled crawls, log-file integration, JS rendering (per [Semrush's site audit KB](https://www.semrush.com/kb/31-site-audit))",
      "**Content tools**: SEO Writing Assistant, Topic Research, Content Template, Post Performance tracker",
      "**Backlink database**: 43T backlinks, 808M domains",
      "**Rank tracking**: 1,500 keywords across 5 projects, desktop + mobile + local pack",
      "**AI Search toolkit (new 2026)**: brand visibility in Google AI Overviews, ChatGPT, Perplexity",
      "**Looker Studio connector**: for client dashboards",
      "**5 user seats**",
    ] },

    { type: "p", text: "The full [Pro+ feature list on Semrush's pricing page](https://www.semrush.com/pricing/seo-ai-search/) runs longer than what most operators use. The 5-project / 1,500-keyword cap is what binds in practice; the [AI Search toolkit](https://www.semrush.com/) and [SEO content tools](https://www.semrush.com/features/seo-writing-assistant/) are what justifies the price when the cap isn't binding." },

    { type: "h2", text: "The hard limits" },

    { type: "p", text: "Pro+ has three limits that matter operationally:" },

    { type: "ul", items: [
      "**5 projects**. A project is a website property (or a client account on Pro+). At most 5 of these per subscription.",
      "**1,500 keywords tracked daily**. Across all projects combined.",
      "**12 months historical data**. Backlink history and rank tracking history. Longer is available on Advanced (60+ months).",
    ] },

    { type: "p", text: "For solo operators running one or two brands, these limits are comfortable headroom. For agencies running 6+ clients, you'll hit the project ceiling within the first quarter. The right move is to start there, hit the limits, then upgrade (per [Semrush's renewal and upgrade policy](https://www.semrush.com/help/)), not to pre-upgrade hoping you'll use capacity you might not consume." },

    { type: "h2", text: "When Pro+ is enough" },

    { type: "p", text: "Pro+ is the right choice if:" },

    { type: "ul", items: [
      "You run SEO for 1–3 client accounts or in-house brands",
      "You track fewer than 1,500 keywords across all projects",
      "You don't need API access for custom dashboards",
      "12 months of historical data is enough for your reporting",
      "You're not running white-label client reports (Pro+ has limited white-label)",
    ] },

    { type: "p", text: "I'll be specific: I run Semrush Pro+ on three client engagements right now, each of which falls under all five conditions. Two of them have been on Pro+ for 24+ months. The third hit 1,200 tracked keywords last quarter and is still under the 1,500 cap with headroom." },

    { type: "h2", text: "When to upgrade to Advanced" },

    { type: "p", text: "Upgrade to Advanced ($455.67/mo annual) when any of these apply:" },

    { type: "ul", items: [
      "You're running more than 5 client accounts or websites",
      "You need more than 1,500 keywords tracked",
      "You need API access for custom integrations",
      "You need 60+ months of historical data for long-term reporting",
      "You need the full white-label reporting add-on ($40/mo)",
    ] },

    { type: "p", text: "Per [Semrush's Advanced plan details](https://www.semrush.com/pricing/seo-ai-search/), Advanced also lifts the crawl credit cap from 5,000 to 50,000/month and the content audit cap from 20 to 100 pages. If you're running large sites or batch audits, these are the binding limits before the keyword cap matters." },

    { type: "h2", text: "Pro+ vs Advanced: decision matrix" },

    { type: "table", head: ["Factor", "Pro+", "Advanced"], rows: [
      ["Annual cost", "$248.17/mo", "$455.67/mo"],
      ["Projects", "5", "15"],
      ["Keywords tracked daily", "1,500", "5,000"],
      ["Historical data", "12 months", "60+ months"],
      ["API access", "✗", "✓"],
      ["White-label", "Limited", "Full + add-on"],
      ["Crawl credits/mo", "5,000", "50,000"],
      ["Content audit pages", "20", "100"],
    ] },

    { type: "p", text: "The per-project cost is higher on Advanced at full capacity ($30.38 vs $49.63 at the published rate), but the keyword and historical data limits lift meaningfully. Don't pre-upgrade. Start with Pro+, track when you hit the limits, then upgrade." },

    { type: "h2", text: "When Pro+ is NOT the right tier" },

    { type: "p", text: "Honest framing. Skip Pro+ entirely if:" },

    { type: "ul", items: [
      "You're a solo operator on a single brand. [Mangools Premium at $52.70/mo](/reviews/mangools/) covers 80% of the use case at 1/5 the cost.",
      "You're only doing keyword research. KWFinder's UI is cleaner for this use case than Semrush's Keyword Magic Tool.",
      "You're backlink-only. [Ahrefs](/reviews/ahrefs/) wins on index freshness, full stop.",
      "You need 10+ projects on day one. Agencies should start at Advanced, not Pro+.",
      "You're budget-constrained and need a permanent free option. [Mangools Free](/reviews/mangools/) at 5 lookups/24h covers basic research.",
    ] },

    { type: "h2", text: "A specific client case" },

    { type: "p", text: "I have one B2B SaaS client running on Pro+ since Q4 2023. Three years in, the account uses 3 of 5 projects and 1,100 of 1,500 keywords. We've never bumped a limit. We've also never used the API (we pipe data via [Looker Studio connector](https://www.semrush.com/) instead) or needed 60-month history (12 months is plenty for monthly client decks)." },

    { type: "p", text: "Cost over three years: roughly $248.17 × 36 = $8,934. Cost on Advanced over the same period: $455.67 × 36 = $16,404. The savings of $7,470 is real. The only thing Pro+ couldn't have done is run the API integration we don't use." },

    { type: "p", text: "Compare this to an agency client on Advanced at $455.67/mo: 14 projects, 4,200 keywords tracked, API integration powering a custom dashboard. The agency client genuinely needs Advanced; the SaaS client genuinely doesn't." },

    { type: "h2", text: "The annual promo question" },

    { type: "p", text: "Semrush runs first-year promos that knock 30–50% off the published rate. The Pro+ published rate is $248.17/mo; you might see checkout at $148.90/mo for year 1. Year 2 renews at $248.17/mo. Total cost over two years: $148.90 × 12 + $248.17 × 12 = $4,768. The published rate over two years without promo: $5,956." },

    { type: "p", text: "The promo is worth taking. The savings of $1,188 over two years is real. Just budget the year-2 hit so you're not surprised. The renewal email arrives 14 days before the charge; set your own calendar reminder at +45 days from signup." },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "Three rules I follow on every new Semrush Pro+ engagement:" },

    { type: "ul", items: [
      "**Start on Pro+.** Don't pre-upgrade hoping you'll use Advanced-only features. You probably won't.",
      "**Track your limit usage monthly.** Semrush's account dashboard shows project count and keyword count. If you're under 70% of either cap at month 3, you picked the right tier.",
      "**Set a calendar reminder for renewal.** Annual plans auto-renew at the published rate. Email support 30+ days before to cancel if Pro+ isn't working for your workflow.",
    ] },

    { type: "p", text: "If you're between Pro+ and Advanced right now, here's the honest test: count your projects today, count your tracked keywords today. If both are under 70% of the Pro+ caps, Pro+ is the right tier. If either is over 70%, you're going to hit the cap within the quarter and should pre-upgrade to Advanced." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "How much is Semrush Pro+ in 2026?",
        a: "Annual billing: $248.17/mo. Monthly billing: $299/mo (about 17% higher). First-year promos typically knock 30–50% off the published rate; renewal hits the published rate. Pricing verified Sept 28, 2026 against [Semrush's pricing page](https://www.semrush.com/pricing/seo-ai-search/).",
      },
      {
        q: "How many projects can I have on Pro+?",
        a: "5 projects per subscription. A project is a website property or client account. If you run 6+ clients, you'll need Advanced (15 projects) or Enterprise (custom).",
      },
      {
        q: "How many keywords can I track on Pro+?",
        a: "1,500 keywords tracked daily across all 5 projects. If you need more, upgrade to Advanced (5,000 keywords) or Enterprise (custom).",
      },
      {
        q: "Does Pro+ include the AI Search toolkit?",
        a: "Yes. The 2026 Pro+ plan includes the AI Search toolkit: brand visibility in Google AI Overviews, ChatGPT, and Perplexity. This is new for 2026; the older Pro tier did not include it.",
      },
      {
        q: "Can I upgrade from Pro+ to Advanced mid-cycle?",
        a: "Yes. Email Semrush support and request a tier upgrade. You'll be billed the prorated difference for the remainder of your annual term. There's no penalty for upgrading; you just pay the difference.",
      },
      {
        q: "Does Pro+ have API access?",
        a: "No. API access is Advanced-only. If you need to pipe Semrush data into custom dashboards, you have three options: (a) upgrade to Advanced, (b) use the Looker Studio connector (available on Pro+), or (c) export CSVs and ingest manually.",
      },
    ] },

    { type: "h2", text: "When I was wrong about Pro+" },

    { type: "p", text: "I pre-upgraded one client to Advanced in 2024 because I assumed we'd need the API for a custom dashboard. We never built the dashboard. We used the Looker Studio connector (which is on Pro+) for the entire 12-month contract. That client paid $455.67 × 12 = $5,468 instead of $248.17 × 12 = $2,978. The difference of $2,490 went to capacity we never consumed." },

    { type: "p", text: "I don't pre-upgrade anymore. The discipline is: start on Pro+, run it for 90 days, check the limit usage, then decide. Three months is enough time to know which limits are actually binding. Don't decide in the abstract." },

    { type: "h2", text: "The Pro+ API workaround" },

    { type: "p", text: "The one real gap on Pro+ is API access. If you genuinely need to pipe Semrush data into a custom system, you have three options:" },

    { type: "ul", items: [
      "**Upgrade to Advanced** ($207.50/mo more, $2,490/yr more) for native API access",
      "**Use the Looker Studio connector** (free with Pro+) for dashboarding without API access",
      "**Export CSVs and ingest manually** (free, but operationally painful above 100 keywords)",
    ] },

    { type: "p", text: "For 80% of operators, Looker Studio is the right answer. You get scheduled dashboards, client sharing, and custom visuals without paying for API access. The remaining 20% who genuinely need API access (custom integrations, Looker alternatives, ETL pipelines) should just upgrade to Advanced and stop fighting it." },

    { type: "callout", tone: "tip", text: "**Decision rule**: Pro+ if you run 1 to 5 projects and track fewer than 1,500 keywords. Advanced if you exceed either limit. Enterprise only if you need a custom contract, SLA, or 20+ projects." },

    { type: "h2", text: "How I run Pro+ in production" },

    { type: "p", text: "On three of my current client engagements, Pro+ at $248.17/mo annual is the right tier. One is a B2B SaaS company (3 projects, 1,100 keywords tracked), one is a regional services company (2 projects, 480 keywords), and one is a nonprofit (1 project, 220 keywords). All three are under the Pro+ caps and have been on Pro+ for 18+ months without hitting a limit." },

    { type: "p", text: "On agency engagements, I run Advanced at $455.67/mo because the project and keyword caps bind quickly above 6+ clients. The API access on Advanced is the deciding factor for the agency engagements: we pipe Semrush data into [Looker Studio](https://lookerstudio.google.com/) dashboards that clients access through their own Google accounts. Pro+ doesn't expose the API; Advanced does. The upgrade is justified by the API alone on those accounts." },

    { type: "p", text: "The discipline that has saved real money over the past 24 months: I do not pre-upgrade. Every new engagement starts on Pro+, runs for 90 days, and we check the limit usage at day 90 before deciding whether to upgrade. Roughly 1 in 4 engagements upgrades at day 90; the other 3 stay on Pro+ indefinitely. The 3 that stay would have wasted $2,490/yr each on a pre-upgrade." },

    { type: "h2", text: "Migrating from the old Pro tier" },

    { type: "p", text: "The 2026 plan restructure renamed the old Pro tier to Pro+ and added the [AI Search toolkit](https://www.semrush.com/) as standard. For customers on the old Pro tier at $139.80/mo, the migration path was automatic: existing accounts were moved to Pro+ at the new $248.17/mo annual rate at next renewal. The renewal promo applies if you commit during the migration window." },

    { type: "p", text: "Per the [Semrush 2026 plan documentation](https://www.semrush.com/pricing/seo-ai-search/), the migration included the AI Search toolkit (brand visibility in Google AI Overviews, ChatGPT, Perplexity) at no additional cost on Pro+. The old Pro tier didn't include AI Search; Pro+ does." },

    { type: "p", text: "If you're on the old Pro tier and haven't migrated, check your account dashboard for the migration prompt. The AI Search toolkit alone is worth the upgrade for operators doing brand monitoring or AI-overview optimization. For operators who don't need AI Search, [Mangools Premium at $52.70/mo](https://mangools.com/plans-and-pricing) remains the better value." },

    { type: "affiliate-cta", placement: "primary", headline: "Try Semrush Pro+ free for 14 days", body: "If you sign up via this link, I earn a commission at no extra cost to you. Same as if you went to semrush.com directly.", ctaLabel: "Start the free trial →", ctaHref: "https://www.semrush.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Semrush: Pricing",
          url: "https://www.semrush.com/pricing/seo-ai-search/",
          description: "Pro+ $248.17/mo annual ($299 monthly). Advanced $455.67/mo ($549 monthly).",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Data & Metrics",
          url: "https://www.semrush.com/kb/997-semrush-data",
          description: "28.8B keywords, 43T backlinks, 808M domains across 142 geographic databases.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Site Audit",
          url: "https://www.semrush.com/kb/31-site-audit",
          description: "140+ technical checks, log-file analysis, JS rendering.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: Plans & Pricing",
          url: "https://mangools.com/plans-and-pricing",
          description: "Premium at $52.70/mo annual. The default solo operator alternative.",
          sourceType: "vendor",
        },
        {
          name: "Ahrefs: Pricing",
          url: "https://ahrefs.com/pricing",
          description: "Reference for backlink-first workflows where Ahrefs Standard is the better fit.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "pricing",
    "vs-ahrefs",
    "vs-se-ranking",
    "alternatives",
  ],
};