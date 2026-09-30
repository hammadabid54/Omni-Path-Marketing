import type { ReviewArticle } from "../types";

/**
 * Surfer SEO Review — Tier 1, KD 28, 250 SV, $21.01 CPC
 *
 * Content optimization layer Hammad uses for pre-publish briefs.
 *
 * Pricing verified against surferseo.com (Sept 2026 restructure).
 * Note: Surfer renamed plans 3x since 2022 — old "Essential/Scale" reviews are stale.
 */
export const surferSeo: ReviewArticle = {
  programSlug: "surfer-seo",
  clusterSlug: "review",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I use Surfer SEO on content briefs at Omni Path Marketing. The Content Editor is open right before any article goes live. If you sign up via any link on this page, I earn a commission at no extra cost to you — that's how this site stays free. Omni Path Marketing pays full price for our Surfer subscription. No free accounts, no vendor comp, no review seed units.",

  tldr:
    "Surfer SEO is the right content optimization tool for teams shipping 10+ SEO articles per month that need NLP-driven briefs and on-page scoring. The Content Editor is the headline feature — it scores an article against the top-ranking pages in real time and tells you exactly which keywords to add, where, and how often. The trade-offs are real: the credit model (1 credit per article opened in the optimizer) gets expensive at scale, the Surfer AI generation feature is mid-tier vs dedicated AI writing tools, and the 2026 plan restructure (now Discovery/Standard/Pro/Peace of Mind) means older reviews cite obsolete plan names. For most content-led SEO teams, the right stack is Surfer (optimization) + Frase (briefs) + Mangools or Ahrefs (keyword research).",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick verdict**: If your content workflow needs NLP-driven briefs and on-page scoring, Surfer is the right default. The Content Editor's real-time scoring against the live SERP is genuinely useful in production. For pure AI writing, [Frase](/reviews/frase/) or dedicated AI writing tools are better. For agencies running 50+ client articles per month, the credit math gets punishing. budget for Pro or Peace of Mind." },

    { type: "h2", text: "Why trust this review" },

    { type: "p", text: "Most Surfer SEO reviews online were written before the 2026 plan restructure and quote obsolete Essential/Scale pricing. This one is different in three ways:" },

    { type: "ul", items: [
      "Pricing verified against [surferseo.com/pricing](https://surferseo.com/pricing/) on Sept 28, 2026. the current Discovery/Standard/Pro/Peace of Mind tiers, not the legacy Essential/Scale plans older reviews cite.",
      "I use Surfer SEO on real client campaigns at Omni Path Marketing. The Content Editor is open right before any article goes live, every article, every week.",
      "I've tested Clearscope, MarketMuse, Frase, and the dedicated AI writing tools alongside Surfer. The comparison notes below come from that production experience.",
    ] },

    { type: "p", text: "I'm the founder of Omni Path Marketing, a boutique SEO agency. We run Surfer for the content optimization layer on every SEO article we publish. after [Frase](/reviews/frase/) for the SERP analysis and outline, before the final draft goes live. The Surfer Content Editor is the last checkpoint before any article ships." },

    { type: "h2", text: "What Surfer SEO actually is" },

    { type: "p", text: "Surfer is a content optimization platform built around the Content Editor:" },

    { type: "ul", items: [
      "**Content Editor**. Real-time scoring against the live SERP. As you write, Surfer tells you which keywords to add, how often, and in which paragraphs. Headline feature.",
      "**SERP Analyzer**. Pull the live SERP for any keyword and see what the top-ranking pages have in common (word count, headings, NLP entities).",
      "**Keyword Research**. Search volume, difficulty, SERP composition, and content score for any keyword.",
      "**Topical Map**. Visualize the topic cluster around any seed keyword and identify content gaps. Useful for content audits.",
      "**Content Audit**. Score your existing published content against the SERP and get a prioritized list of updates.",
      "**Surfer AI** (separate add-on on Scale AI / Peace of Mind). Auto-generates full SEO articles with the same scoring baked in.",
      "**AI Search Analytics**. Track brand visibility across ChatGPT, Gemini, AI Overviews, and other AI engines (Pro plan and above).",
    ] },

    { type: "h2", text: "Pricing. what you actually pay" },

    { type: "p", text: "Surfer renamed its plans three times since 2022. The current lineup (verified Sept 28, 2026) is **Discovery / Standard / Pro / Peace of Mind / Enterprise**. Annual billing saves up to 17%. Pricing below is annual; monthly billing is ~20% higher." },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Discovery", "$41/mo", "$49/mo", "120 document credits/mo, 1 user seat, AI SEO optimizer, plagiarism check, AI detector/humanizer, 10 page-tracking. The right entry point for solo content operators."],
      ["Standard", "$99/mo", "$99/mo", "360 document credits/mo, 3 user seats, full research stack (Keyword Research, Topical Map, Content Audit, SERP Analyzer, Rank Drop Alerts), 25 weekly AI prompts for AI visibility tracking. The right plan for B2B content teams."],
      ["Pro", "$182/mo", "$182/mo", "360 document credits/mo, 5 user seats, all Standard features, unlimited AI Visibility tracking across ChatGPT + 25 prompts/wk across other engines. The right plan for agencies."],
      ["Peace of Mind", "$299/mo", "$299/mo", "Unlimited* document credits, 100 daily AI prompts across all 5 engines, API access, personalized onboarding, dedicated success manager, 10 team seats. *Fair-use policy applies."],
      ["Enterprise", "From $999/mo", "From $999/mo", "SSO, white-label reporting, legal onboarding assistance, custom integrations."],
    ] },

    { type: "callout", tone: "tip", text: "**The credit model is the trap**: every article you open in the Content Editor consumes 1 credit. On Standard at $99/mo with 360 credits, that's ~12 articles/day. but you're also paying per seat and per feature. Heavy content teams (20+ articles/month) will burn through credits fast. Budget for Pro ($182/mo) or Peace of Mind (unlimited) if you're shipping at scale." },

    { type: "h2", text: "The Content Editor. why it works" },

    { type: "p", text: "The Content Editor is Surfer's moat. Here's the workflow:" },

    { type: "ol", items: [
      "Open the Content Editor, paste your target keyword.",
      "Surfer pulls the top 10–50 ranking pages for that keyword and extracts NLP entities, heading structure, word count, and content score.",
      "You write or paste your draft. Surfer scores it in real time against the SERP (0–100 scale).",
      "As the score climbs, Surfer tells you which keywords to add (with suggested frequency), which entities are missing, and which headings to refine.",
      "Hit publish when the score crosses your target threshold (I aim for 80+ for primary articles; 70+ for supporting content).",
    ] },

    { type: "p", text: "What makes this work: the suggestions are tied to the **live SERP**, not a static keyword database. The same article about \"semrush pricing\" written in June 2026 vs December 2026 will get different recommendations because the SERP has changed. This is the feature that separates Surfer from older content tools that scored against a frozen keyword list." },

    { type: "h2", text: "Surfer AI. the auto-generation tier" },

    { type: "p", text: "Surfer AI (bundled in Peace of Mind) auto-generates full SEO articles with the same scoring baked in. The output is decent for first drafts and outline scaffolds, but the writing quality is mid-tier compared to dedicated AI writing tools (Jasper, Claude, GPT-4). Use it as a starting point, not a finished product." },

    { type: "p", text: "For pure AI writing without the SEO scoring, dedicated tools are better. For AI writing WITH integrated SEO optimization, Surfer AI is the right default. the content comes out of the Content Editor already scored against the SERP." },

    { type: "h2", text: "Topical Map and Content Audit. the strategic layer" },

    { type: "p", text: "Two features that get less attention but are operationally important:" },

    { type: "h3", text: "Topical Map" },
    { type: "p", text: "Visualize the topic cluster around any seed keyword. Shows the keyword universe grouped by intent (informational, commercial, navigational), the SERP positions, and the content gaps in your site vs competitors. Useful for content planning on established sites. input your seed, get a 6-month editorial calendar in 10 minutes." },

    { type: "h3", text: "Content Audit" },
    { type: "p", text: "Score every URL on your site against its SERP competitors and get a prioritized list of which articles to update first. The audit returns a per-page score (0–100) and a list of missing entities, keywords, and structural elements. Run this quarterly on established content sites. typical uplift is 10–30% on traffic for under-optimized pages after a single audit cycle." },

    { type: "h2", text: "When NOT to buy Surfer" },

    { type: "p", text: "Honest framing. Skip Surfer if any of these apply:" },

    { type: "ul", items: [
      "You publish fewer than 3 articles/month. the cost-per-article on Standard is ~$0.27/credit, which is hard to justify at low volume. Use [Frase](/reviews/frase/) Starter at $39.20/mo for low-volume content teams.",
      "You don't need SERP-based scoring. if your workflow is pure AI writing without SEO analysis, dedicated AI tools (Jasper, Claude, GPT-4) are better and cheaper.",
      "Your content team is fully integrated with Semrush. Semrush's SEO Writing Assistant covers 80% of the Content Editor surface and you don't need both subscriptions.",
      "You're a large agency with budget pressure at scale. Surfer's credit model is punishing above 50 articles/month. Move to Peace of Mind or restructure the workflow around Frase + manual brief review.",
    ] },

    { type: "h2", text: "Pros and cons" },

    { type: "pros-cons",
      toolA: {
        name: "Surfer SEO",
        pros: [
          "Content Editor's real-time SERP-based scoring is genuinely useful in production. it surfaces terms competitors rank for that you miss",
          "Best-in-class NLP entity recommendations. finds semantic terms that pure keyword tools miss",
          "Topical Map is the right tool for content gap analysis on established sites",
          "Content Audit identifies which existing pages to update and what to add. typical uplift 10–30% per cycle",
          "Surfer AI generation is mid-tier for writing but tier-1 for SEO-baked first drafts",
          "AI Search Analytics on Pro+ tracks brand mentions across ChatGPT, Gemini, AI Overviews",
        ],
        cons: [
          "Credit model (1 credit per article opened) gets expensive at scale. 50+ articles/month requires Peace of Mind at $299/mo",
          "Surfer AI writing quality is mid-tier vs Jasper or GPT-4. use as starting point, not finished copy",
          "Keyword research is shallow compared to Semrush or Ahrefs. Surfer is content-optimization first, keyword-research second",
          "Plans have been renamed 3 times since 2022. older reviews and competitor comparisons often cite obsolete plan names",
          "No permanent free plan, no unlimited free trial. entry is gated behind paid plans",
        ],
      },
      toolB: {
        name: "For comparison",
        pros: [],
        cons: [],
      },
    },

    { type: "h2", text: "Final verdict by use case" },

    { type: "h3", text: "Solo content operators publishing 3–8 articles/month → Surfer Discovery ($41/mo annual)" },
    { type: "p", text: "Discovery covers a typical solo operator's monthly content output (120 credits). Pair with [Mangools](/reviews/mangools/) for keyword research at $30–40/mo total. The combined stack covers 90% of a solo operator's content workflow for ~$70/mo." },

    { type: "h3", text: "B2B SaaS content teams shipping 10–30 articles/month → Surfer Standard ($99/mo annual)" },
    { type: "p", text: "Standard at 360 credits is the volume tier most B2B content teams need. The full research stack + AI visibility tracking is the operational difference vs Discovery. Pair with [Frase](/reviews/frase/) Professional at $103/mo for SERP analysis + AI-driven outlines. the combined workflow is what I run at Omni Path Marketing on content-led engagements." },

    { type: "h3", text: "Agencies running 50+ client articles/month → Surfer Pro or Peace of Mind" },
    { type: "p", text: "Pro ($182/mo annual) gets you 5 seats and unlimited AI Visibility tracking. Peace of Mind ($299/mo annual) removes the credit cap with fair-use. Both are agency-grade. your decision is whether the credit cap or the seat cap is the binding constraint." },

    { type: "h3", text: "Pure AI writing (without SEO scoring) → dedicated tool" },
    { type: "p", text: "If you don't need the SERP-based scoring and just want AI writing, dedicated tools like Jasper, Claude, or GPT-4 are better and cheaper. Surfer is the right choice when SEO optimization is part of the writing workflow, not a separate step." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "Is Surfer SEO better than Frase?",
        a: "Different tools for different jobs. Surfer wins on real-time on-page scoring, NLP entity recommendations, and content audit. Frase wins on SERP analysis, AI-generated outlines, AI Agent's 80+ skills, and bundled AI Visibility tracking on every plan. For most content teams, the right answer is to use both. Frase for SERP analysis + outline, Surfer for on-page optimization. The combined cost ($99/mo Surfer Standard + $103/mo Frase Professional = $185/mo) is roughly 60% of Semrush Pro+.",
      },
      {
        q: "How much does Surfer SEO cost per month?",
        a: "Annual billing: Discovery $41/mo, Standard $99/mo, Pro $182/mo, Peace of Mind $299/mo, Enterprise $999+/mo. Monthly billing is ~20% higher. Pricing verified Sept 28, 2026 against surferseo.com/pricing. The credit model (1 credit per article opened in the Content Editor) is the real cost driver. calculate your actual monthly article output before picking a plan.",
      },
      {
        q: "Does Surfer have a free trial?",
        a: "There is no permanent free plan. Surfer historically offered a 7-day trial; current terms vary. Check [surferseo.com](https://surferseo.com/) for the current evaluation policy. The right way to evaluate is to buy Discovery at $41/mo annual (effectively $41 for a year's worth of evaluation), or use the money-back window if you commit to Standard.",
      },
      {
        q: "Can Surfer AI replace a writer?",
        a: "No. Surfer AI is mid-tier for writing quality vs Jasper or GPT-4. Use it for SEO-baked first drafts that a human editor refines. For finished copy quality, dedicated AI writing tools are better. The right pairing is Surfer AI for outline + first draft + scoring, then a human writer for the second pass.",
      },
      {
        q: "What changed in the 2026 plan restructure?",
        a: "Surfer renamed plans three times since 2022. The current lineup (Sept 2026) is Discovery / Standard / Pro / Peace of Mind / Enterprise. Older reviews citing Essential / Scale / Scale AI are out of date. the plan names, pricing, and credit allocations have all shifted. Always check the live pricing page before budgeting.",
      },
      {
        q: "What's the credit math for a 50-article team?",
        a: "At 50 articles/month on Standard ($99/mo, 360 credits/mo) you'll burn through credits in the first week. Real options for high-volume teams: Pro ($182/mo, 360 credits, 5 seats) for agencies running 50+ client articles, or Peace of Mind ($299/mo, unlimited credits, 10 seats) for in-house teams with heavy publish cadence. Calculate your per-article cost against your team's monthly output before committing.",
      },
    ] },

    { type: "callout", tone: "insight", text: "**Pricing reality check**: All prices above are the annual billing rates. Monthly billing is ~20% higher. The credit model (1 credit per article opened) is the real cost driver. calculate your actual monthly article output before picking a plan. [Check the current pricing](https://surferseo.com/pricing/) before you commit." },

    { type: "affiliate-cta", placement: "primary", headline: "Try Surfer SEO. see the SERP-based scoring in action", body: "If you sign up via this link, I earn a commission at no extra cost to you. Same as if you went to surferseo.com directly. but you keep the site free.", ctaLabel: "Start with Surfer →", ctaHref: "https://surferseo.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this review",
      items: [
        {
          name: "Surfer SEO. Pricing",
          url: "https://surferseo.com/pricing/",
          description: "Official 2026 pricing: Discovery $41/mo annual, Standard $99/mo, Pro $182/mo, Peace of Mind $299/mo, Enterprise $999+. Annual billing saves 17%.",
          sourceType: "vendor",
        },
        {
          name: "Surfer SEO. Content Editor",
          url: "https://surferseo.com/",
          description: "Real-time on-page scoring against the live SERP, NLP entity recommendations, Content Audit, Topical Map, Keyword Research, SERP Analyzer, Surfer AI generation.",
          sourceType: "vendor",
        },
        {
          name: "Allable. Surfer SEO Pricing 2026",
          url: "https://www.allable.ai/blog/surfer-seo-pricing/",
          description: "Independent 2026 verification of plan names, pricing, and credit model mechanics.",
          sourceType: "research",
        },
        {
          name: "AISO Tools. Surfer SEO Pricing 2026",
          url: "https://aisotools.com/pricing/surfer-seo",
          description: "Independent analysis of credit math: ~$2.60/article on Essential annual, ~$1.75/article on Scale annual.",
          sourceType: "research",
        },
        {
          name: "GrouGlobal. SurferSEO Pricing 2026",
          url: "https://grouglobal.com/blog/surferseo-pricing",
          description: "Detailed breakdown of overage fees and credit consumption patterns across plans.",
          sourceType: "research",
        },
      ],
    },
  ],

  relatedSlugs: [
    "pricing",     // /reviews/surfer-seo/pricing
    "vs-frase",   // /reviews/surfer-seo/vs-frase
    "vs-semrush", // /reviews/surfer-seo/vs-semrush
    "alternatives", // /reviews/surfer-seo/alternatives
  ],
};