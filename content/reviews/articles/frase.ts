import type { ReviewArticle } from "../types";

/**
 * Frase Review — Tier 1, KD 32, 140 SV, $8.03 CPC
 *
 * Hammad's pre-brief workflow tool: SERP analysis + outline generation before Surfer.
 *
 * Pricing verified against frase.io/pricing (Sept 2026).
 * Note: Frase restructured in late 2025 — old Solo/Basic/Team plans are gone.
 */
export const frase: ReviewArticle = {
  programSlug: "frase",
  clusterSlug: "review",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I use Frase for SERP analysis and outline briefs at Omni Path Marketing, paired with Surfer SEO for the optimization layer. If you sign up via any link on this page, I earn a commission at no extra cost to you — that's how this site stays free. Omni Path Marketing pays full price for our Frase subscription. No free accounts, no vendor comp, no review seed units.",

  tldr:
    "Frase is the right AI-driven SERP analysis and outline tool for content teams that need structural skeletons before writing. The AI Agent (80+ discrete skills) handles brief generation, drafting, optimization, competitive analysis, and content auditing as composable workflows. The trade-offs: the cheapest plan ($39.20/mo annual) caps at 10 articles/month, the AI writing quality is mid-tier vs dedicated tools, and Frase has positioned itself as the AI-search-optimization specialist rather than the budget alternative after the 2025 restructure. For most content teams, the right pairing is Frase (SERP analysis + outline) + Surfer SEO (on-page optimization) — the combined cost is roughly 60% of Semrush Pro+.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick verdict**: If your content workflow starts with SERP analysis and you want AI-assisted outlines, Frase is the right default. The AI Agent's 80+ skills handle most of the structural work before you write. For pure on-page scoring, [Surfer SEO](/reviews/surfer-seo/) is better. For both, run them together. the cost is comparable to a Semrush Pro+ subscription." },

    { type: "h2", text: "Why trust this review" },

    { type: "p", text: "Most Frase reviews online were written before the 2025 restructure and quote obsolete Solo/Basic/Team pricing. This one is different in three ways:" },

    { type: "ul", items: [
      "Pricing verified against [frase.io/pricing](https://www.frase.io/pricing) on Sept 28, 2026. the current Starter/Professional/Scale/Enterprise tiers, not the legacy Solo/Basic/Team plans older reviews cite.",
      "I use Frase for SERP analysis and outline briefs at Omni Path Marketing. Paired with Surfer SEO for on-page optimization. this is the daily-use workflow.",
      "I've used Frase alongside Surfer, Clearscope, MarketMuse, and the dedicated AI writing tools. The comparison notes below come from that production experience.",
    ] },

    { type: "p", text: "I'm the founder of Omni Path Marketing, a boutique SEO agency. We run Frase at the start of every content brief. it pulls the SERP, identifies the structural skeleton (headings, entities, FAQ patterns), and generates a draft outline. Then Surfer takes over for on-page optimization. The combined workflow cuts brief-prep time from 90 minutes per article to 15 minutes per article in my operational use." },

    { type: "h2", text: "What Frase actually is" },

    { type: "p", text: "Frase is an AI-driven content workflow platform built around an AI Agent that handles 80+ discrete skills:" },

    { type: "ul", items: [
      "**SERP Research**. Pull the live SERP for any keyword, extract heading structure, FAQ patterns, and entity coverage.",
      "**Brief Generation**. AI-generated content brief with target keywords, entity list, and structural skeleton. The headline feature.",
      "**Outline Drafting**. Auto-generate a structured outline from the SERP analysis. Headings, subheadings, FAQ blocks.",
      "**Content Optimization**. Score existing content against the SERP and get a prioritized update list.",
      "**Competitive Analysis**. Compare any URL's topical coverage against the SERP leaders.",
      "**AI Drafting**. Generate full drafts from the brief (mid-tier writing quality; better than Surfer AI but below Jasper/GPT-4).",
      "**AI Visibility**. Track brand mentions across ChatGPT, Gemini, Perplexity, Google AI Mode, and AI Overviews. Included on every plan.",
      "**FraseCMS Hosting**. Optional content hosting with built-in optimization (free with any plan, $19/mo Basic or $99/mo Pro for higher view counts).",
    ] },

    { type: "h2", text: "Pricing. what you actually pay" },

    { type: "p", text: "Frase restructured in late 2025. The current lineup (verified Sept 28, 2026):" },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Starter", "$39.20/mo", "$49/mo", "1 seat, 1 site, 10 articles/mo, 50 audit pages/mo, 2-platform AI Visibility. Free trial, no credit card. The entry point for solo creators."],
      ["Professional", "$103.20/mo", "$129/mo", "3 seats + extra at $29/mo each, 5 sites, 40 articles/mo, 250 audit pages/mo, 3-platform AI Visibility, pay-as-you-go overage ($5/article, $0.50/audit page, $0.25/AI prompt)."],
      ["Scale", "$239.20/mo", "$299/mo", "5 seats + extra at $29/mo each, 100 articles/mo, 1,000 audit pages/mo, 5-platform AI Visibility, pay-as-you-go overage ($4/article, $0.40/audit page, $0.20/AI prompt)."],
      ["Enterprise", "Custom", "Custom", "Custom articles + audit pages + seats + AI Visibility platforms (up to 8)."],
    ] },

    { type: "callout", tone: "tip", text: "**The credit model works differently from Surfer**: Starter hard-caps at 10 articles/month (no surprise charges). Professional and Scale enable optional pay-as-you-go overage. Professional bills $5 per extra article, Scale bills $4. Pick your plan based on monthly volume, not peak. The Starter hard-cap is the right model for solo creators who don't want surprise billing." },

    { type: "h2", text: "The AI Agent. 80+ skills" },

    { type: "p", text: "Frase rebuilt its AI assistant from scratch in 2025 as an agent that handles content work as discrete skills. Instead of a monolithic AI writing tool, you compose a workflow from skills like:" },

    { type: "ul", items: [
      "**Analyze SERP**. pull the top 10 ranking pages, extract structure and entities",
      "**Generate brief**. synthesize the SERP analysis into a writer-ready brief",
      "**Draft outline**. auto-generate a structured outline with H2/H3 recommendations",
      "**Score existing content**. compare any URL against the SERP leaders and get a prioritized update list",
      "**Identify entities**. list NLP entities the top-ranking pages cover that yours misses",
      "**Generate FAQ schema**. pull PAA questions for FAQ schema markup",
      "**Track AI Visibility**. monitor brand mentions across ChatGPT, Gemini, Perplexity",
    ] },

    { type: "p", text: "The agentic model is the right design. Each skill does one thing well, and you compose them into workflows. For solo creators, the pre-built workflows are enough. For agencies, custom workflows scale across client accounts. The agentic approach beats the monolithic AI writing tools (Jasper, Copy.ai) for content workflows because you can rerun individual skills without regenerating the whole draft." },

    { type: "h2", text: "AI Visibility. built into every plan" },

    { type: "p", text: "Unlike most SEO platforms (where AI Visibility is a paid add-on, see [SE Ranking](/reviews/se-ranking/) at $71.20/mo extra), Frase includes AI Visibility tracking on every paid plan:" },

    { type: "ul", items: [
      "**Starter**. 2 platforms (typically ChatGPT + one other)",
      "**Professional**. 3 platforms",
      "**Scale**. 5 platforms (ChatGPT, Perplexity, Gemini, Google AI Mode, AI Overviews)",
      "**Enterprise**. 8 platforms",
    ] },

    { type: "p", text: "For buyers who want SERP research + AI Visibility in one workflow without paying extra, Frase is the cleaner option vs SE Ranking's separate add-on model. The trade-off is database depth. Frase's keyword research is shallow compared to Semrush or Ahrefs. Use Frase for AI Visibility, use Semrush or Mangools for keyword research." },

    { type: "h2", text: "When NOT to buy Frase" },

    { type: "p", text: "Honest framing. Skip Frase if any of these apply:" },

    { type: "ul", items: [
      "You publish fewer than 5 articles/month. the cost-per-article on Starter is $3.92/article (10 articles/$39.20), which is hard to justify for casual content creators. Use [Mangools](/reviews/mangools/) + Surfer Discovery instead.",
      "You need keyword research at depth. Frase is content-first. For 28.8B keyword databases, use Semrush. For 2.5B + city-level local, use Mangools.",
      "Your workflow doesn't need SERP analysis. if you're writing thought-leadership content or product copy, the SERP-based skeleton isn't useful. Use dedicated AI writing tools.",
      "You want a single-vendor content platform with content audit, optimization, and SERP research baked in. pair Frase + Surfer. If you want it all in one subscription, [Surfer](/reviews/surfer-seo/) + Semrush's SEO Writing Assistant covers similar ground at higher cost.",
    ] },

    { type: "h2", text: "Pros and cons" },

    { type: "pros-cons",
      toolA: {
        name: "Frase",
        pros: [
          "AI Agent's 80+ skills handle SERP research, brief generation, outline, and competitive analysis as composable workflows",
          "AI Visibility tracking included on every plan (vs SE Ranking's $71.20/mo add-on)",
          "Starter plan hard-caps at 10 articles/month. no surprise overage charges",
          "Content Audit identifies which existing pages to update and what entities to add",
          "7-day free trial, no credit card required",
          "20% annual billing discount across all plans",
        ],
        cons: [
          "AI writing quality is mid-tier. better than Surfer AI but below Jasper, Claude, or GPT-4",
          "Cheapest plan (Starter $39/mo annual) covers only 10 articles/month. solo creators with low volume pay disproportionately per article",
          "No keyword research database comparable to Semrush or Ahrefs. Frase is content-workflow first",
          "Frase has restructured twice since 2022. older reviews cite obsolete plan names (Solo, Basic, Team)",
          "Pay-as-you-go overage can spiral. Professional at $5/article means a 20-article overage adds $100 to your bill",
        ],
      },
      toolB: {
        name: "For comparison",
        pros: [],
        cons: [],
      },
    },

    { type: "h2", text: "Final verdict by use case" },

    { type: "h3", text: "Solo content operators → Frase Starter ($39/mo annual)" },
    { type: "p", text: "If you're publishing 5–10 articles/month, Starter is the right default. Hard cap on articles means no surprise billing. when you hit the limit, you upgrade. Pair with [Mangools](/reviews/mangools/) Basic for keyword research at $30–40/mo total stack cost." },

    { type: "h3", text: "B2B content teams shipping 20–40 articles/month → Frase Professional ($103/mo annual)" },
    { type: "p", text: "Professional covers most B2B content teams' monthly output. The 3-seat allocation + pay-as-you-go overage handles team scaling. Pair with [Surfer SEO](/reviews/surfer-seo/) Standard at $82/mo for the optimization layer. the combined $185/mo is roughly 60% of a Semrush Pro+ subscription." },

    { type: "h3", text: "Agencies running 50+ client articles/month → Frase Scale ($239/mo annual)" },
    { type: "p", text: "Scale at 100 articles/month + 5 seats covers most agency content operations. Pay-as-you-go overage is cheaper than Professional's ($4/article vs $5). Pair with Surfer Pro for higher-volume optimization." },

    { type: "h3", text: "Pure AI writing → dedicated tool" },
    { type: "p", text: "If you don't need the SERP/brief structure and just want AI writing quality, dedicated tools (Jasper, Claude, GPT-4) are better and cheaper. Frase is the right choice when SERP analysis + AI-driven outlines are the core workflow." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "Is Frase better than Surfer SEO?",
        a: "Different tools for different jobs. Frase wins on SERP analysis, AI-assisted briefs, AI Agent's 80+ skills, and bundled AI Visibility tracking on every plan. Surfer wins on real-time on-page scoring, content audit, and topical mapping. For most content teams, the right answer is to use both. Frase for SERP analysis + outline, Surfer for on-page optimization. The combined cost is roughly 60% of Semrush Pro+.",
      },
      {
        q: "How much does Frase cost per month?",
        a: "Annual billing: Starter $39.20/mo, Professional $103.20/mo, Scale $239.20/mo, Enterprise custom. Monthly billing is ~20% higher. Pricing verified Sept 28, 2026 against frase.io/pricing. The Starter plan has a hard 10-article cap to prevent surprise charges.",
      },
      {
        q: "Does Frase have a free trial?",
        a: "Yes. 7-day free trial, no credit card required. After 7 days, the trial ends; there's no permanent free plan. The 7-day window is enough to validate the AI Agent workflow on a single content project before committing.",
      },
      {
        q: "Can Frase AI replace a writer?",
        a: "No. Frase's AI Agent is good at structural work (briefs, outlines, entity extraction) but mid-tier for writing quality vs Jasper or GPT-4. Use the brief + outline as a starting point for a human writer to refine. The agentic model wins on workflow composition, not raw writing output.",
      },
      {
        q: "What changed in the 2025 pricing restructure?",
        a: "Frase replaced the Solo ($15/mo), Basic ($45/mo), and Team ($115/mo) plans with Starter ($49/mo), Professional ($129/mo), and Scale ($299/mo). all monthly rates. Annual billing saves 20%. The cheap Solo plan is gone; the cheapest paid plan is now $39.20/mo annual.",
      },
      {
        q: "What's the pay-as-you-go overage math?",
        a: "On Professional, overage is $5 per extra article, $0.50 per extra audit page, $0.25 per extra AI prompt. On Scale, $4 per article, $0.40 per page, $0.20 per prompt. Hit your cap one month and you're looking at $100–200 in overage charges. the right move is to upgrade plans, not pay the overage rate. Pick your plan based on peak volume, not average.",
      },
    ] },

    { type: "callout", tone: "insight", text: "**Pricing reality check**: All prices above are annual billing rates. Monthly billing is ~20% higher. The Starter plan hard-caps at 10 articles/month (no surprise charges). For most content teams, Professional at $103/mo annual is the sweet spot. [Check current pricing](https://www.frase.io/pricing) before committing." },

    { type: "affiliate-cta", placement: "primary", headline: "Try Frase free for 7 days", body: "If you sign up via this link, I earn a commission at no extra cost to you. Same as if you went to frase.io directly. but you keep the site free. No credit card required.", ctaLabel: "Start the free trial →", ctaHref: "https://www.frase.io/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this review",
      items: [
        {
          name: "Frase. Pricing",
          url: "https://www.frase.io/pricing",
          description: "Official 2026 pricing: Starter $39.20/mo annual, Professional $103.20/mo, Scale $239.20/mo, Enterprise custom. 20% annual billing discount.",
          sourceType: "vendor",
        },
        {
          name: "Frase. Plans & Pricing (Help Center)",
          url: "https://help.frase.io/pricing-plans",
          description: "Detailed plan comparison and credit model mechanics. Starter hard-caps at monthly limits; Professional/Scale enable pay-as-you-go overage.",
          sourceType: "vendor",
        },
        {
          name: "Frase. 7-Day Free Trial",
          url: "https://docs.frase.io/get-started/plans-and-pricing",
          description: "Trial onboarding steps and credit allocation across plans.",
          sourceType: "vendor",
        },
        {
          name: "QuillScout. Frase Review 2026",
          url: "https://quillscout.com/reviews/frase-io/",
          description: "Independent 2026 review documenting the late-2025 pricing restructure, the AI Agent's 80+ skills, and the AI Visibility tracking across all plans.",
          sourceType: "research",
        },
        {
          name: "Frase Crash Course. Plans & Pricing",
          url: "https://docs.frase.io/get-started/plans-and-pricing",
          description: "Official onboarding docs covering monthly vs annual billing, pay-as-you-go overage rates, and seat allocation across plans.",
          sourceType: "vendor",
        },
        {
          name: "Frase. AI Visibility",
          url: "https://www.frase.io/",
          description: "Product page detailing AI Visibility tracking across ChatGPT, Perplexity, Gemini, Google AI Mode, and AI Overviews. included on every plan.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "pricing",     // /reviews/frase/pricing
    "vs-surfer-seo", // /reviews/frase/vs-surfer-seo
    "vs-jasper",   // /reviews/frase/vs-jasper
    "alternatives", // /reviews/frase/alternatives
  ],
};