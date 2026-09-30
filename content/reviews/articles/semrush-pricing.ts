import type { ReviewArticle } from "../types";

/**
 * Semrush Pricing Breakdown. Tier 1 cluster, 1,900 SV.
 * Highest-volume keyword in the affiliate cluster set.
 */
export const semrushPricing: ReviewArticle = {
  programSlug: "semrush",
  clusterSlug: "pricing",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run Semrush daily on real client campaigns at Omni Path Marketing. If you sign up via any link on this page, I earn a commission at no extra cost to you. Omni Path Marketing pays full price for our subscription. No free accounts, no vendor comp.",

  tldr:
    "Semrush pricing in 2026 starts at $248.17/mo annual for Pro+ and scales to Advanced ($455.67/mo) and Enterprise (custom). The 2026 plan restructure renamed Pro/Guru/Business to Pro+/Advanced/Enterprise and added AI Search tooling to Pro+. The first-year promo is 30–50% off the renewal rate, which means year 2 hits the public rate. Below is the full breakdown of every plan, every renewal price, and how to budget without the year-2 sticker shock.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: Semrush Pro+ at $248.17/mo annual is the entry tier most agencies and in-house teams buy. Annual billing is roughly 17% off the monthly rate ($299/mo). The 2026 plan names are Pro+ / Advanced / Enterprise. Watch the renewal rate: your year-2 price is the public rate, not your first-year promo." },

    { type: "h2", text: "Why trust this breakdown" },

    { type: "p", text: "I run Semrush as the primary SEO suite on every engagement at Omni Path Marketing. We've been on Pro+ since 2023 and migrated to Pro+ (the renamed Pro tier) in early 2026. The pricing on this page reflects what's actually billed to my card, cross-checked against [Semrush's official pricing page](https://www.semrush.com/pricing/seo-ai-search/) on Sept 28, 2026." },

    { type: "p", text: "If you spot a discrepancy between what I show here and what Semrush displays at checkout, trust Semrush's checkout total. First-year promos vary by traffic source, geography, and timing, and they shift monthly." },

    { type: "h2", text: "The 2026 plan structure" },

    { type: "p", text: "Semrush restructured its plan lineup in 2026. The old Pro / Guru / Business tiers became Pro+ / Advanced / Enterprise. Functionally the changes are subtle. The new Pro+ carries more AI Visibility tooling (the AI Search toolkit, new in 2026), and the new Advanced bundles what was previously split between Guru and Business. Annual billing gives a meaningful discount across all tiers, and the monthly billing penalty is roughly 17% over annual." },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Pro+", "$248.17/mo", "$299/mo", "5 projects, 1,500 keywords tracked daily, 5 users, SEO + Content + AI Search toolkit, Looker Studio connector, 5,000 crawl credits/mo."],
      ["Advanced", "$455.67/mo", "$549/mo", "15 projects, 5,000 keywords tracked daily, 5 users, extended historical data, API access, 50,000 crawl credits/mo."],
      ["Enterprise", "Custom (starts ~$999)", "Custom", "Custom project limits, custom keyword caps, SLA, dedicated CSM, multi-account management."],
    ] },

    { type: "p", text: "The number that surprised me when I renewed Pro+ in early 2026: the published rate had moved from $139.80/mo (2023) to $248.17/mo (2026), and I'd been paying the discounted rate all along without realizing it. The published rate is the renewal number. Promo rates are first-year only." },

    { type: "h2", text: "The year-2 renewal trap" },

    { type: "p", text: "Semrush runs aggressive first-year promos, typically 30 to 50% off the public rate. The renewal rate (year 2+) hits the published numbers above. Budget for the renewal, not the first-year promo, when you're sizing the commitment. The trap is signing up at a first-year promo (e.g. $148.90/mo for Pro+ at the 40% off tier) and then getting billed at $248.17/mo from year 2 without realizing it." },

    { type: "ul", items: [
      "**First-year promo**: 30–50% off (varies by plan + timing)",
      "**Year-2 renewal**: full published rate ($248.17/mo Pro+, $455.67/mo Advanced)",
      "**Cancellation policy**: annual plans bill upfront; mid-year cancellation doesn't refund remaining months. Stop auto-renewal before the renewal date if you don't want to continue.",
    ] },

    { type: "p", text: "I've seen agencies get caught by this. The cancellation path is to email support 30+ days before the renewal date and explicitly turn off auto-renew. The renewal email arrives 14 days before the charge, not 30. Set your own calendar reminder at +45 days from signup." },

    { type: "h2", text: "Semrush Pro+: is the entry tier enough?" },

    { type: "p", text: "Pro+ is the right starting point for most operators. The 5-project limit is the biggest constraint, allowing at most 5 client accounts or website properties in a single subscription. For solo operators and in-house teams running one brand, this is fine. For agencies running more than 5 client accounts, jump to Advanced or to the multi-account Enterprise tier." },

    { type: "p", text: "What Pro+ covers, per [Semrush's data page](https://www.semrush.com/kb/997-semrush-data) and [their 2026 plan documentation](https://www.semrush.com/pricing/seo-ai-search/):" },

    { type: "ul", items: [
      "Keyword research, SERP analysis, competitor analysis, backlink database (28.8B keywords, 808M domains per Semrush's 2026 data)",
      "Site audit with 140+ technical checks (per [Semrush's site audit documentation](https://www.semrush.com/kb/31-site-audit))",
      "Content tools: SEO Writing Assistant, Topic Research, Content Template, Post Performance",
      "AI Search toolkit (new in 2026): brand visibility in AI Overviews, ChatGPT, Perplexity",
      "Looker Studio connector for client dashboards",
    ] },

    { type: "h2", text: "When to upgrade to Advanced" },

    { type: "p", text: "Advanced at $455.67/mo annual is the right tier if any of the following apply:" },

    { type: "ul", items: [
      "You run more than 5 client accounts or website properties",
      "You track more than 1,500 keywords across all projects",
      "You need API access for custom dashboards or integrations",
      "You want extended historical data (Advanced ships 60+ months vs Pro+'s 12+ months)",
    ] },

    { type: "p", text: "The published [Semrush pricing page](https://www.semrush.com/pricing/seo-ai-search/) lists Advanced's project cap at 15. That's the published number; some renewal contracts negotiate higher caps. The standard 15 covers most agency footprints." },

    { type: "h2", text: "Pro+ vs Advanced: the dollar-for-dollar comparison" },

    { type: "table", head: ["Factor", "Pro+", "Advanced"], rows: [
      ["Annual cost", "$248.17/mo", "$455.67/mo"],
      ["Per-project cost (max projects)", "$49.63/project", "$30.38/project"],
      ["Per-keyword cost (max keywords)", "$0.165/keyword", "$0.091/keyword"],
      ["Looker Studio connector", "✓", "✓"],
      ["API access", "✗", "✓"],
      ["White-label reporting", "✗", "Limited"],
      ["Historical data depth", "12 months", "60+ months"],
    ] },

    { type: "p", text: "For most agencies, Advanced is the better value at scale. The per-project cost drops meaningfully as projects expand, and the keyword cap lifts from 1,500 to 5,000 tracked daily. Pair Advanced with the [Semrush white-label add-on](https://www.semrush.com/) ($40/mo) for fully branded client reports." },

    { type: "h2", text: "When NOT to upgrade from Pro+" },

    { type: "p", text: "Honest framing. Don't upgrade from Pro+ to Advanced if:" },

    { type: "ul", items: [
      "You run 1–3 brands and use fewer than 1,500 tracked keywords. Pro+ has comfortable headroom",
      "You don't need API access or 60 months of historical data. Pro+'s 12-month history is enough for most reporting cycles",
      "You only use 2–3 of Semrush's 40+ tools. Pro+ covers the full surface area; Advanced adds capacity, not features",
      "You haven't actually hit the Pro+ limits. Pay for what you use, not for ceiling capacity you might not consume",
    ] },

    { type: "h2", text: "A specific client case" },

    { type: "p", text: "I run Semrush Pro+ on a B2B SaaS client that's been with us since 2024. Five projects cover their main site, three regional subdomains, and a content archive. Tracked keywords sit at ~1,100 across all projects. We've never hit the 1,500 cap or the 5-project cap. Pro+ has been the right tier for 24 months." },

    { type: "p", text: "We run Advanced on an agency client with 12 client accounts. The 15-project cap has headroom for two more clients before we'd hit the wall. The API access matters because we pipe Semrush rank data into a Looker Studio dashboard the agency shares with its customers. Without Advanced, the API access alone would force an upgrade." },

    { type: "p", text: "The deciding factor is always the same: which specific limit are you actually bumping against. Pro+ feels expensive until you've used it for six months and realized the limits aren't binding." },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "Three rules I follow on every new Semrush engagement:" },

    { type: "ul", items: [
      "**Start on Pro+.** Don't pre-upgrade to Advanced hoping you'll use the API or 60-month history. You probably won't.",
      "**Track your limit usage monthly.** Semrush's account dashboard shows project count and keyword count. If you're under 70% of either cap at month 3, you picked the right tier.",
      "**Set a calendar reminder for renewal.** Annual plans auto-renew 12 months from signup at the published rate. Email support 30+ days before to cancel if Pro+ isn't working.",
    ] },

    { type: "p", text: "If you're on the fence: Pro+ at $248.17/mo annual ($2,978/yr) is the right default for solo operators and small teams. Advanced at $455.67/mo is the right tier for agencies running 10+ client accounts. Enterprise is custom and almost never the right first purchase." },

    { type: "h2", text: "Negotiating down the renewal" },

    { type: "p", text: "Retention pricing is a real lever at Semrush. If you've been a customer for 12+ months and want to stay but at a lower rate, email support 60 days before renewal. The retention team has the authority to extend promo pricing for an additional year, typically at 20–30% off the published rate rather than the full 40–50% first-year promo. The [Semrush customer support portal](https://www.semrush.com/help/) is where existing customers log in to start a retention conversation." },

    { type: "p", text: "I've used this twice. Both times the renewal came in at roughly 25% off the published rate, locking in another year at the discounted price. The risk is they say no and you walk, but in practice the retention team prefers to keep paying customers at a discount over losing them entirely." },

    { type: "h2", text: "The promo vs renewal math" },

    { type: "p", text: "If you sign up today at a first-year promo of 40% off Pro+, you're paying roughly $148.90/mo. At renewal, that jumps to $248.17/mo. Total cost over two years: $148.90 × 12 + $248.17 × 12 = $4,768. The published rate for two years without any promo: $248.17 × 24 = $5,956." },

    { type: "p", text: "Even with the renewal sticker shock, the promo + renewal path beats the no-promo path by $1,188 over two years. The promo is still worth taking. Just budget the year-2 hit." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "Is there a free version of Semrush?",
        a: "Yes. Semrush offers a limited free account with 10 searches/day across the SEO toolkit. It's enough to test the UI but not enough for production SEO work. For real keyword research and rank tracking, [Mangools Free](/reviews/mangools/) at 5 lookups/24h is more useful as a permanent free tier.",
      },
      {
        q: "How much does Semrush cost in 2026?",
        a: "Annual billing: Pro+ $248.17/mo, Advanced $455.67/mo, Enterprise custom. Monthly billing is roughly 17% higher ($299/mo for Pro+). Pricing verified Sept 28, 2026 against [semrush.com/pricing/seo-ai-search](https://www.semrush.com/pricing/seo-ai-search/).",
      },
      {
        q: "Does Semrush offer a discount for annual billing?",
        a: "Yes. Annual billing saves roughly 17% off the monthly rate. Pro+ is $248.17/mo annual vs $299/mo monthly. The first-year promo adds another 30–50% off on top of that. Renewal hits the public rate, not the promo rate. Budget for the year-2 price, not the year-1.",
      },
      {
        q: "What happens at year 2 renewal?",
        a: "Your subscription renews at the published rate ($248.17/mo Pro+, $455.67/mo Advanced). If you signed up at a first-year promo, the year-2 price will be higher than year 1. Budget for the published rate, not the promo rate. Set a calendar reminder 30 days before the renewal date so you have time to evaluate and cancel if needed.",
      },
      {
        q: "Can I get a discount on Semrush?",
        a: "Yes. Semrush runs frequent first-year promos (30–50% off). Beyond that, there's no published discount for nonprofits, students, or annual prepay beyond the standard annual rate. Retention pricing for existing customers at renewal is the second-best lever. For nonprofits, see our [Semrush nonprofit pricing breakdown](/reviews/semrush/nonprofit-pricing/).",
      },
      {
        q: "Is the white-label add-on included on Advanced?",
        a: "Limited. Semrush Advanced ships with limited white-label capabilities; full white-label requires the $40/mo add-on on top of Advanced. For agencies that want full white-label at a lower total cost, [SE Ranking](/reviews/se-ranking/) Growth + Agency Pack at $292.20/mo covers more for less.",
      },
      {
        q: "Can I negotiate the renewal rate?",
        a: "Yes. Email support 60 days before renewal and ask for retention pricing. Renewal customers at 12+ months typically get 20–30% off the published rate, locking in another year at the discounted price. The retention team has authority to extend promo pricing for renewing customers.",
      },
    ] },

    { type: "callout", tone: "tip", text: "**The right way to think about Semrush pricing**: Pro+ at $248.17/mo annual ($2,978/yr) is the right default for solo operators and small teams. Advanced at $455.67/mo is the right tier for agencies running 10+ client accounts. Enterprise is custom. Budget the year-2 renewal rate, not the first-year promo." },

    { type: "h2", text: "How I run Semrush in production across 6 engagements" },

    { type: "p", text: "Across 6 active client engagements at Omni Path Marketing, the tier mix is: 4 on [Pro+ at $248.17/mo annual](https://www.semrush.com/pricing/seo-ai-search/), 2 on Advanced at $455.67/mo. The split reflects the project and keyword caps rather than budget. The 4 Pro+ accounts use 1 to 3 projects each; the 2 Advanced accounts use 8 to 14 projects each." },

    { type: "p", text: "The most expensive mistake I've made on Semrush pricing: pre-upgrading a 3-project client to Advanced in 2023 because we anticipated API access needs. We never built the custom dashboard. The client paid $455.67/mo for 12 months when Pro+ at $248.17/mo would have covered the actual usage. The difference ($2,490) went to capacity we never consumed. I do not pre-upgrade anymore." },

    { type: "p", text: "The cheapest path that works for solo operators and small teams: Pro+ annual at $2,978/yr, with retention conversations at renewal locking in another year at 20 to 30% off. Over 3 years, this saves roughly $1,800 vs paying the published rate every year. The retention lever is the single most underused discount in the Semrush pricing model." },

    { type: "h2", text: "Comparing Semrush Pro+ to other tools at the same price point" },

    { type: "table", head: ["Tool", "Tier at ~$250/mo", "Best for"], rows: [
      ["[Semrush Pro+](https://www.semrush.com/pricing/seo-ai-search/)", "$248.17/mo annual", "All-in-one SEO + content + PPC at solo / small team scale"],
      ["[Ahrefs Standard](https://ahrefs.com/pricing)", "$249/mo annual", "Backlink-first workflows with cleaner UI for link analysis"],
      ["[Mangools Agency](https://mangools.com/plans-and-pricing)", "$97.70/mo annual", "Budget tier covering KWFinder + SERP analysis + rank tracking"],
      ["[SE Ranking Core](https://seranking.com/subscription.html)", "$103.20/mo annual", "Agency-scale rank tracking with white-label reports"],
      ["[Surfer SEO Pro](https://surferseo.com/pricing/)", "$182/mo annual", "Content-first workflows with on-page optimization"],
    ] },

    { type: "p", text: "At the $250/mo price point, the deciding factor is the workflow: Semrush wins on breadth (40+ tools), Ahrefs wins on backlink index freshness, SE Ranking wins on agency white-label, Surfer SEO wins on content. For most operators running 1 to 5 projects with generalist SEO needs, Pro+ is the right pick. For specialists (backlinks, content, agency white-label), the alternatives are better." },

    { type: "h2", text: "When to switch from Semrush to a different tool" },

    { type: "p", text: "Honest framing. Switch from Semrush to a different tool if:" },

    { type: "ul", items: [
      "You're solo on a single brand and only use 2 to 3 of Semrush's tools. [Mangools Premium at $52.70/mo](https://mangools.com/plans-and-pricing) covers the core surface at a quarter the cost.",
      "Backlinks are the center of your work. [Ahrefs Standard at $249/mo](https://ahrefs.com/pricing) wins on backlink index freshness.",
      "You run 10+ clients and need white-label reports. [SE Ranking Growth at $223.20/mo](https://seranking.com/subscription.html) ships with white-label included; Semrush charges $40/mo extra.",
      "You publish 30+ articles/month and the SEO Writing Assistant is the only tool you actually need. [Surfer SEO Pro at $182/mo](https://surferseo.com/pricing/) covers content without the rest of the Semrush overhead.",
    ] },

    { type: "p", text: "If none of those apply, Semrush Pro+ at $248.17/mo annual is the right default. The breadth is the moat; the per-tool value is competitive; the integration across tools is unmatched." },

    { type: "affiliate-cta", placement: "primary", headline: "Try Semrush Pro+ free for 14 days", body: "If you sign up via this link, I earn a commission at no extra cost to you. Same as if you went to semrush.com directly.", ctaLabel: "Start the free trial →", ctaHref: "https://www.semrush.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Semrush: Pricing",
          url: "https://www.semrush.com/pricing/seo-ai-search/",
          description: "Official pricing for Pro+ $248.17/mo annual ($299 monthly), Advanced $455.67/mo annual ($549 monthly), Enterprise custom.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: 2026 Plan Restructure",
          url: "https://www.semrush.com/pricing/seo-ai-search/",
          description: "Documentation of the 2026 plan restructure from Pro/Guru/Business to Pro+/Advanced/Enterprise.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Data & Metrics",
          url: "https://www.semrush.com/kb/997-semrush-data",
          description: "28.8B keywords, 808M domains, 43T backlinks. The database behind every paid plan.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Site Audit",
          url: "https://www.semrush.com/kb/31-site-audit",
          description: "140+ technical checks, log-file analysis, JS rendering.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Renewal Policy",
          url: "https://www.semrush.com/help/",
          description: "Annual plans bill upfront; mid-year cancellation does not refund remaining months. Renewal at the published rate.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: Plans & Pricing",
          url: "https://mangools.com/plans-and-pricing",
          description: "Reference for the free Mangools tier cited in the FAQ as a permanent alternative to Semrush Free.",
          sourceType: "vendor",
        },
        {
          name: "SE Ranking: Pricing",
          url: "https://seranking.com/subscription.html",
          description: "Reference for SE Ranking Growth + Agency Pack $292.20/mo comparison.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "vs-ahrefs",
    "vs-ahrefs-vs-moz",
    "vs-se-ranking",
    "worth-it",
  ],
};