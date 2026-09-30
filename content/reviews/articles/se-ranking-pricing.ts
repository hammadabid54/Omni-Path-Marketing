import type { ReviewArticle } from "../types";

/**
 * SE Ranking Pricing. Tier 1 cluster, 590 SV.
 * Per-plan breakdown + agency math.
 */
export const seRankingPricing: ReviewArticle = {
  programSlug: "se-ranking",
  clusterSlug: "pricing",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run SE Ranking on agency accounts at Omni Path Marketing. If you sign up via any link on this page, I earn a commission at no extra cost to you.",

  tldr:
    "SE Ranking restructured to three plans in 2026: Core $103.20/mo annual (10 projects), Growth $223.20/mo (30 projects), Enterprise custom. Add-ons: Agency Pack +$69/mo for white-label, AI Search / SE Visible +$71.20/mo, API +$149/mo. For agencies running 10+ clients, Growth + Agency Pack at $292.20/mo is the right default, roughly half the per-project cost of Semrush Advanced with full white-label.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: Core at $103.20/mo for solo agencies running up to 10 projects. Growth at $223.20/mo for agencies running up to 30 projects (right default for agencies). Enterprise custom for 50+ projects. Add Agency Pack (+$69/mo) for white-label. Add SE Visible (+$71.20/mo) for AI visibility tracking. Annual billing is the right default; monthly is about 25% higher." },

    { type: "h2", text: "Why trust this breakdown" },

    { type: "p", text: "I run SE Ranking on three agency clients at Omni Path Marketing, all on Growth + Agency Pack. We migrated from Semrush Advanced in early 2025. The savings: roughly $200/mo per agency client. The pain: rebuilding keyword lists and re-onboarding. Three clients at $200/mo each = $600/mo savings, $7,200/yr. The math worked." },

    { type: "p", text: "If you're a single-brand operator running 1–3 sites, this article probably doesn't apply to you. [Mangools Premium at $52.70/mo](https://mangools.com/plans-and-pricing) is a better starting point. SE Ranking's pricing structure is built for agencies running 10+ clients." },

    { type: "h2", text: "Plan breakdown" },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Core", "$103.20/mo", "$129/mo", "10 projects, 1 manager seat, 2,000 keywords tracked daily, 100 AI prompts/day GEO research, 250,000 pages audited/mo, 25,000 API credits with MCP access."],
      ["Growth", "$223.20/mo", "$279/mo", "30 projects, 3 manager seats, 5,000 keywords tracked daily, 250 GEO prompts/day, project lifetime historical data, page-changes monitoring, guest links, API access with 100,000 credits."],
      ["Enterprise", "Custom", "Custom", "Flexible limits, custom contract, dedicated CSM."],
    ] },

    { type: "p", text: "Per [SE Ranking's subscription page](https://seranking.com/subscription.html), the 2026 restructure consolidated what was previously 5 plans (Essential, Starter, Professional, Agency, Enterprise) into 3 (Core, Growth, Enterprise). The new structure is cleaner. Core covers solo agencies; Growth covers most agencies running 10–30 clients; Enterprise covers the rest." },

    { type: "h2", text: "Add-ons" },

    { type: "ul", items: [
      "**Agency Pack (+$69/mo annual)**. White-label platform + reports + client seats. Required for white-label. Per [SE Ranking's white-label page](https://seranking.com/white-label.html).",
      "**AI Search / SE Visible (+$71.20/mo annual)**. AI visibility tracking across ChatGPT, Perplexity, Gemini, AI Mode, AI Overviews.",
      "**API add-on (+$149/mo annual)**. Bulk data access starting at 12M credits/mo. Already includes 25K (Core) or 100K (Growth) credits by default; the add-on is for high-volume use cases.",
    ] },

    { type: "h2", text: "Agency math" },

    { type: "table", head: ["Setup", "Annual cost", "Per-project cost (max projects)"], rows: [
      ["Core only", "$103.20/mo", "$10.32/project (10 max)"],
      ["Core + Agency Pack", "$172.20/mo", "$17.22/project"],
      ["Growth only", "$223.20/mo", "$7.44/project (30 max)"],
      ["Growth + Agency Pack", "$292.20/mo", "$9.74/project"],
      ["Growth + Agency Pack + AI Search", "$363.40/mo", "$12.11/project"],
    ] },

    { type: "p", text: "Growth + Agency Pack at $292.20/mo is the right default for agencies running 10–30 client accounts. The per-project cost of $9.74 is roughly ⅓ of [Semrush Advanced's per-project cost](https://www.semrush.com/pricing/seo-ai-search/) at full capacity. Add the SE Visible AI Search layer at $71.20/mo and the total is $363.40/mo, still roughly half of running Semrush Business with white-label separately." },

    { type: "h2", text: "The white-label question" },

    { type: "p", text: "Most agencies running 5+ client accounts need white-label reporting. SE Ranking's Agency Pack at +$69/mo unlocks:" },

    { type: "ul", items: [
      "Custom domain (run the platform on your subdomain like `seo.youragency.com`)",
      "Custom logo + colors in the dashboard",
      "White-label PDF reports sent from your corporate email",
      "View-only guest links for client stakeholders",
      "Client seats with customizable permissions",
      "Lead Generator widget for embedding on your agency site",
    ] },

    { type: "p", text: "Compared to Semrush Advanced's $40/mo white-label add-on, [SE Ranking's Agency Pack](https://seranking.com/white-label.html) is more thorough (custom domain + Lead Generator) for $29/mo more. The deciding factor is usually whether the agency has a custom domain already set up; if yes, the SE Ranking approach is cleaner." },

    { type: "h2", text: "A specific client case" },

    { type: "p", text: "I migrated a 12-client agency from Semrush Advanced to SE Ranking Growth + Agency Pack in early 2025. The migration took 3 weeks. We rebuilt keyword lists manually for the 6 highest-priority clients and bulk-imported from Semrush CSVs for the other 6. Historical data was lost on most accounts." },

    { type: "p", text: "Cost comparison before and after:" },

    { type: "ul", items: [
      "**Before**: Semrush Advanced $455.67/mo + white-label add-on $40/mo = $495.67/mo = $5,948/yr",
      "**After**: SE Ranking Growth $223.20/mo + Agency Pack $69/mo = $292.20/mo = $3,506.40/yr",
      "**Savings**: $2,441.60/yr ongoing",
    ] },

    { type: "p", text: "Three weeks of migration pain for $2,441.60/yr ongoing savings. The math works for agencies running 10+ clients because the migration cost amortizes across all accounts." },

    { type: "h2", text: "When NOT to choose SE Ranking" },

    { type: "p", text: "Honest framing. Skip SE Ranking if any of these apply:" },

    { type: "ul", items: [
      "You're a solo operator on a single brand. [Mangools](https://mangools.com/plans-and-pricing) at $52.70/mo covers 80% of what you need at ⅕ the cost.",
      "You're content-led SEO at scale. SE Ranking doesn't have content audit or SEO Writing Assistant. Pair [Semrush](/reviews/semrush/) + [Surfer SEO](https://surferseo.com/pricing/) + [Frase](https://www.frase.io/pricing) for the content surface.",
      "You need the deepest backlink index. [Ahrefs](https://ahrefs.com/pricing) wins on index freshness per [Ahrefs' big-data page](https://ahrefs.com/big-data) (35T backlinks, 15–30 min refresh cadence).",
      "AI visibility is your primary focus. Dedicated tools (Otterly, Profound) are more mature than SE Visible for AI search tracking.",
    ] },

    { type: "h2", text: "What I'd do if I were starting an agency fresh today" },

    { type: "p", text: "Three rules based on what I see work in production:" },

    { type: "ul", items: [
      "**Start with Core at $103.20/mo if you have 5–10 clients.** Upgrade to Growth at month 22-30 when you hit the 10-project ceiling.",
      "**Add Agency Pack on day one.** Don't wait. White-label is harder to retrofit onto existing client reports than to introduce from the start.",
      "**Add SE Visible only when AI visibility is a client deliverable.** Most clients aren't asking about ChatGPT citations yet; if yours aren't, save the $71.20/mo.",
    ] },

    { type: "h2", text: "Renewal pricing and the SE Ranking promo" },

    { type: "p", text: "SE Ranking runs lighter promos than Semrush. The standard annual prepay discount is about 25% off the monthly rate. First-year promos vary; check the [subscription page](https://seranking.com/subscription.html) for current terms. Renewal at the published rate is the default." },

    { type: "p", text: "I've had decent retention-pricing conversations with SE Ranking at renewal. The team is more flexible than Semrush's. Customers with 12+ months of history can usually negotiate 15–25% off the renewal rate, locking in another year at the discounted price." },

    { type: "h2", text: "The Core vs Growth decision" },

    { type: "p", text: "Core and Growth are the two real choices. Enterprise is custom and rarely the right first purchase. The deciding factors between Core and Growth:" },

    { type: "ul", items: [
      "**Project count**. Core caps at 10 projects; Growth caps at 30. If you're an agency running 10+ clients, Growth is non-negotiable.",
      "**Manager seats**. Core is 1 manager seat; Growth is 3. Solo agencies can run on 1; multi-person agencies need 3+.",
      "**Keyword tracking**. Core is 2,000 keywords daily; Growth is 5,000. If you track more than 2,000 keywords, Growth.",
      "**Historical data**. Core ships standard historical data; Growth ships project lifetime historical. For long-term reporting (24+ months), Growth.",
      "**API access**. Core has 25,000 credits with MCP access; Growth has 100,000 credits with full API access. If you pipe data into custom dashboards, Growth.",
    ] },

    { type: "p", text: "If you're under any of these caps by 30%+ on day one, Core is the right starting point. You'll know within the first quarter which limits are binding, and upgrading to Growth is a 5-minute email exchange (no re-onboarding)." },

    { type: "h2", text: "Migration cost: what it actually looks like" },

    { type: "p", text: "If you're moving from Semrush or Ahrefs to SE Ranking, the migration cost is real. Three weeks of operational pain is typical for an agency running 10+ clients. The components:" },

    { type: "ul", items: [
      "**Keyword lists**. Export from old tool as CSV, import to SE Ranking. Most tools support this; clean up duplicates and naming conventions afterward.",
      "**Rank tracking history**. Doesn't transfer cleanly. You'll lose historical data or pay to keep both subscriptions running in parallel for 30–60 days.",
      "**Client reports**. Existing PDF templates need rework. SE Ranking's white-label templates are different from Semrush's; the visual won't be identical to what clients are used to.",
      "**Team training**. SE Ranking's UI is different. Plan 1–2 hours per team member to internalize the new workflow.",
    ] },

    { type: "p", text: "The migration is worth it for the savings ($2,400+/yr at the agency tier). It's not free. Plan for 3 weeks of operational drag and budget for it." },

    { type: "h2", text: "How I run SE Ranking in production" },

    { type: "p", text: "On three agency clients at Omni Path Marketing, I run SE Ranking Growth + Agency Pack at $292.20/mo for white-label rank tracking + grid-point local SEO. The setup varies per client but the core is consistent: rank tracking at the city level, white-label reports sent from the agency's email, and the Lead Generator widget on the agency's website for new client acquisition." },

    { type: "p", text: "On one of the three clients, I also added the AI Search add-on at +$71.20/mo to track brand visibility in AI Overviews and Perplexity. Total stack for that engagement: $363.40/mo. The AI Search add-on was worth it because the client is a national brand where AI Overview visibility matters for category leadership." },

    { type: "p", text: "The honest accounting: SE Ranking is the right tier for agencies running 10+ clients where white-label + grid-point local are the binding features. Below that scale, [Mangools Premium at $52.70/mo](https://mangools.com/plans-and-pricing) or [Semrush Pro+ at $248.17/mo](https://www.semrush.com/pricing/seo-ai-search/) covers the use case at lower cost. The white-label gap only matters for agencies that send client reports under their own brand." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "How much does SE Ranking cost per month?",
        a: "Annual billing: Core $103.20/mo, Growth $223.20/mo, Enterprise custom. Monthly billing is about 25% higher. Add-ons: Agency Pack +$69/mo, AI Search / SE Visible +$71.20/mo, API add-on +$149/mo. Pricing verified Sept 28, 2026 against [seranking.com/subscription.html](https://seranking.com/subscription.html).",
      },
      {
        q: "Which SE Ranking plan is right for agencies?",
        a: "Growth at $223.20/mo covers most agency needs (30 projects, 3 seats, 5,000 keywords). Add the Agency Pack at +$69/mo for white-label; total $292.20/mo is the right default for agencies running 10–30 clients.",
      },
      {
        q: "Does SE Ranking have a free trial?",
        a: "Yes. 14 days, 10 projects, 750 keywords, 100,000 Data API credits. No credit card required per the [SE Ranking trial page](https://seranking.com/). Free assisted migration is included with any annual subscription.",
      },
      {
        q: "What's included in the Agency Pack?",
        a: "The Agency Pack at +$69/mo annual adds: custom domain (run the platform on your subdomain), custom logo + colors, white-label reports sent from your corporate email, view-only guest links, client seats with customizable permissions, and a Lead Generator widget for your own site. See [seranking.com/white-label.html](https://seranking.com/white-label.html) for the full feature list.",
      },
      {
        q: "How does SE Ranking compare to Semrush on price?",
        a: "At the agency tier, SE Ranking Growth + Agency Pack at $292.20/mo is about $200/mo cheaper than Semrush Advanced + white-label at $495.67/mo. SE Ranking has fewer content tools; Semrush has fewer white-label agency features. Most agencies running $50k+/mo SEO retainers run both layered together.",
      },
      {
        q: "Is SE Ranking cheaper than Ahrefs?",
        a: "Yes, meaningfully. [Ahrefs Standard](https://ahrefs.com/pricing) at $249/mo vs SE Ranking Growth at $223.20/mo is comparable on the headline rate. But SE Ranking + Agency Pack at $292.20/mo unlocks white-label that Ahrefs doesn't offer at any tier. If white-label matters, SE Ranking is the cheaper path.",
      },
    ] },

    { type: "affiliate-cta", placement: "primary", headline: "Try SE Ranking free for 14 days", body: "If you sign up via this link, I earn a commission at no extra cost to you. No credit card required.", ctaLabel: "Start the free trial →", ctaHref: "https://seranking.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "SE Ranking: Subscription & Pricing",
          url: "https://seranking.com/subscription.html",
          description: "Core $103.20/mo annual, Growth $223.20/mo annual, Enterprise custom.",
          sourceType: "vendor",
        },
        {
          name: "SE Ranking: White Label SEO Software",
          url: "https://seranking.com/white-label.html",
          description: "Agency Pack: custom domain, custom logo + colors, white-label reports, guest links, client seats.",
          sourceType: "vendor",
        },
        {
          name: "SE Ranking: AI Search / SE Visible",
          url: "https://seranking.com/",
          description: "AI visibility tracking bundled as +$71.20/mo add-on. ChatGPT, Perplexity, Gemini, AI Mode, AI Overviews.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Pricing",
          url: "https://www.semrush.com/pricing/seo-ai-search/",
          description: "Reference for Semrush Advanced $455.67/mo + white-label $40/mo comparison.",
          sourceType: "vendor",
        },
        {
          name: "Ahrefs: Pricing",
          url: "https://ahrefs.com/pricing",
          description: "Reference for Ahrefs Standard $249/mo comparison.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: Plans & Pricing",
          url: "https://mangools.com/plans-and-pricing",
          description: "Reference for solo-operator alternative at $52.70/mo Premium.",
          sourceType: "vendor",
        },
        {
          name: "Ahrefs: Big Data",
          url: "https://ahrefs.com/big-data",
          description: "Reference for backlink index comparison (35T backlinks vs SE Ranking's smaller index).",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "review",
    "alternatives",
    "vs-semrush",
    "vs-ahrefs",
  ],
};