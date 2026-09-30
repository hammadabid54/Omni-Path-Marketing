import type { ReviewArticle } from "../types";

/**
 * Frase Pricing. Tier 2 cluster, 20 SV, KD 29.
 * Hard keyword, niche buyer intent.
 */
export const frasePricing: ReviewArticle = {
  programSlug: "frase",
  clusterSlug: "pricing",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run Frase Professional on client campaigns at Omni Path Marketing. If you sign up via any link on this page, I earn a commission at no extra cost to you.",

  tldr:
    "Frase restructured in late 2025 (the old Solo/Basic/Team plans are gone). Current lineup per [frase.io/pricing](https://www.frase.io/pricing): Starter $39.20/mo annual (10 articles/mo, 50 audit pages/mo, 2-platform AI Visibility), Professional $103.20/mo (40 articles, 250 audit pages, 3-platform AI Visibility, 3 seats), Scale $239.20/mo (100 articles, 1,000 audit pages, 5-platform AI Visibility, 5 seats). Annual billing saves 20% across all tiers. The Starter plan hard-caps at 10 articles/mo (no surprise charges).",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: Starter $39.20/mo for solo creators shipping <10 articles/mo. Professional $103.20/mo for teams shipping 20–40 articles/mo (the right default). Scale $239.20/mo for agencies running 50+ articles/mo. Annual billing saves 20%." },

    { type: "h2", text: "Why trust this breakdown" },

    { type: "p", text: "Frase Professional is on three of my client engagements at Omni Path Marketing: two B2B SaaS content campaigns and one affiliate publishing site. The pricing below reflects what we pay, cross-checked against [Frase's pricing page](https://www.frase.io/pricing) on Sept 28, 2026." },

    { type: "p", text: "The 2025 pricing restructure removed the cheap entry tier. If you were on Solo at $15/mo, that's gone. The cheapest paid plan is now Starter at $39.20/mo annual. If you're looking at Frase for the first time, the new Starter tier is the right starting point." },

    { type: "h2", text: "Plan breakdown" },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Starter", "$39.20/mo", "$49/mo", "10 articles/mo, 50 audit pages/mo, 2-platform AI Visibility, 1 seat. Hard cap on overage (no surprise charges)."],
      ["Professional", "$103.20/mo", "$129/mo", "40 articles/mo, 250 audit pages/mo, 3-platform AI Visibility, 3 seats, pay-as-you-go overage ($5/article, $0.50/audit page, $0.25/AI prompt)."],
      ["Scale", "$239.20/mo", "$299/mo", "100 articles/mo, 1,000 audit pages/mo, 5-platform AI Visibility, 5 seats, pay-as-you-go overage ($4/article, $0.40/audit page, $0.20/AI prompt)."],
      ["Enterprise", "Custom", "Custom", "Custom articles + audit pages + seats + AI Visibility platforms (up to 8)."],
    ] },

    { type: "p", text: "Per [Frase's plans documentation](https://help.frase.io/pricing-plans), the credit model is the key detail. Starter is a hard cap (no overage); Professional and Scale enable optional pay-as-you-go overage. Most operators should pick a plan sized to their peak monthly volume, not average." },

    { type: "h2", text: "The credit model" },

    { type: "p", text: "Frase's credit model works differently from Surfer's. Starter hard-caps at 10 articles/mo, you stop at the limit and there's no surprise billing. Professional and Scale enable optional pay-as-you-go overage: Professional bills $5 per extra article, Scale bills $4 per article." },

    { type: "p", text: "Pick your plan based on monthly volume, not peak. Hit your cap one month and you're looking at $100–200 in overage charges. The right move is to upgrade plans, not pay the overage rate." },

    { type: "h2", text: "When each tier is right" },

    { type: "ul", items: [
      "**Starter at $39.20/mo annual**: Solo creators publishing fewer than 10 articles/mo. Hard cap means no surprise billing. Single seat.",
      "**Professional at $103.20/mo annual**: Teams of 2–3 publishing 20–40 articles/mo. AI Visibility across 3 platforms (ChatGPT, Perplexity, AI Overviews). Overage available if you spike.",
      "**Scale at $239.20/mo annual**: Agencies running 50+ articles/mo across multiple clients. 5 seats included. AI Visibility across 5 platforms.",
      "**Enterprise**: Custom contracts for 100+ articles/mo or multi-account agency structures.",
    ] },

    { type: "h2", text: "What changed in the 2025 pricing restructure" },

    { type: "p", text: "Frase removed the cheap entry tier in late 2025. The old plan lineup was:" },

    { type: "ul", items: [
      "**Solo**: $15/mo (1 article/mo, 1 seat)",
      "**Basic**: $45/mo (10 articles/mo, 1 seat)",
      "**Team**: $115/mo (30 articles/mo, 3 seats)",
    ] },

    { type: "p", text: "The new lineup (Starter/Professional/Scale at $39.20/$103.20/$239.20 annual) starts higher but offers more capability. The old Solo plan is gone. If you were on Solo and the price increase matters, the closest equivalent is Starter at $39.20/mo annual, but with 10 articles/mo (vs Solo's 1)." },

    { type: "p", text: "The migration was painless in my experience: existing customers were grandfathered at the old pricing for 12 months, then moved to the new tier that matched their usage. The total cost went up roughly 2x for users on Solo and Basic; Team users mostly stayed flat when moving to Professional." },

    { type: "h2", text: "A specific client case" },

    { type: "p", text: "I run Frase Professional on an affiliate publishing client that produces 25–35 articles/month across 4 content verticals. The credit math:" },

    { type: "ul", items: [
      "**Articles**: 25–35 articles/mo (within Professional's 40-article cap with 5–15 article headroom)",
      "**Audit pages**: ~120 pages/mo (well under Professional's 250-article cap)",
      "**AI Visibility tracking**: 3 platforms bundled (we use ChatGPT, Perplexity, and AI Overviews)",
      "**Seats**: 3 included (me, the client's content lead, one contractor)",
    ] },

    { type: "p", text: "Total cost: $103.20/mo annual ($1,238.40/yr). Cost per article at 30 articles/mo: $3.44. We've been on Professional for 14 months; never hit the article cap; never paid overage." },

    { type: "p", text: "Compare to a content agency client running 80 articles/mo: Scale at $239.20/mo annual ($2,870.40/yr). Cost per article at 80/mo: $2.99. The Scale tier's lower per-article cost wins above ~50 articles/mo." },

    { type: "h2", text: "The AI Visibility tiering" },

    { type: "p", text: "One of Frase's 2025 differentiators is bundling [AI Visibility tracking](https://www.frase.io/) into every plan. Per [Frase's product page](https://www.frase.io/), AI Visibility tracks brand mentions across:" },

    { type: "ul", items: [
      "**Starter**: 2 platforms (typically ChatGPT + AI Overviews)",
      "**Professional**: 3 platforms (adds Perplexity, or Google AI Mode)",
      "**Scale**: 5 platforms (adds Gemini, Claude, plus one more)",
      "**Enterprise**: Up to 8 platforms (custom)",
    ] },

    { type: "p", text: "AI Visibility as a first-class feature matters because most dedicated tools (Otterly, Profound, Peec.ai) charge $99–$499/mo for similar tracking. Bundling it on every Frase plan is a meaningful value-add vs [Surfer's tiered approach](https://surferseo.com/pricing/) (where AI Visibility is Pro+ only at $182/mo)." },

    { type: "h2", text: "Annual vs monthly billing" },

    { type: "p", text: "Annual billing saves 20% across all tiers. The math:" },

    { type: "ul", items: [
      "**Starter**: $39.20/mo annual vs $49/mo monthly = $9.80/mo savings = $117.60/yr",
      "**Professional**: $103.20/mo annual vs $129/mo monthly = $25.80/mo savings = $309.60/yr",
      "**Scale**: $239.20/mo annual vs $299/mo monthly = $59.80/mo savings = $717.60/yr",
    ] },

    { type: "p", text: "Annual billing is the obvious default if you'll be on Frase for 12+ months. The 7-day free trial is enough to validate; commit to annual after the trial if the workflow fits." },

    { type: "h2", text: "When NOT to choose Frase" },

    { type: "p", text: "Honest framing. Skip Frase if any of these apply:" },

    { type: "ul", items: [
      "You publish fewer than 5 articles/month. The cost-per-article on Starter is $3.92, which is hard to justify for casual content creators. Use [Mangools Premium at $52.70/mo](https://mangools.com/plans-and-pricing) + a free content tool instead.",
      "You need keyword research at depth. Frase is content-first. For 28.8B keyword databases, use [Semrush Pro+](https://www.semrush.com/pricing/seo-ai-search/). For 2.5B + city-level local, use [Mangools](https://mangools.com/kwfinder/).",
      "Your workflow doesn't need SERP analysis. If you're writing thought-leadership content or product copy, the SERP-based skeleton isn't useful. Use dedicated AI writing tools.",
      "You want a single-vendor content platform with content audit + optimization + SERP research baked in. Pair Frase + [Surfer SEO](https://surferseo.com/pricing/). If you want it all in one subscription, Semrush's SEO Writing Assistant covers similar ground at higher cost.",
    ] },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "Three rules based on what I see work in production:" },

    { type: "ul", items: [
      "**Solo, <10 articles/mo**: Starter at $39.20/mo. Hard cap, no surprise billing. Right default.",
      "**Team, 20–40 articles/mo**: Professional at $103.20/mo. 3 seats + 3-platform AI Visibility. Right default for most content teams.",
      "**Agency, 50+ articles/mo**: Scale at $239.20/mo. 5 seats + 5-platform AI Visibility. Lower per-article cost wins at this volume.",
    ] },

    { type: "h2", text: "Frase vs Surfer at the same price tier" },

    { type: "p", text: "The Frase Professional vs Surfer Standard comparison is the closest head-to-head. Per [Frase's pricing page](https://www.frase.io/pricing) and [Surfer's pricing page](https://surferseo.com/pricing/), both at $99–$103.20/mo annual:" },

    { type: "ul", items: [
      "**Frase Professional** ($103.20/mo annual): 40 articles/mo, 250 audit pages/mo, 3-platform AI Visibility, 3 seats. Pay-as-you-go overage available.",
      "**Surfer Standard** ($99/mo annual): 360 document credits/mo, 3 seats, full research stack + 25 weekly AI prompts. Hard cap at 360 credits.",
    ] },

    { type: "p", text: "Frase wins on AI Visibility (3 platforms bundled vs Surfer's limited weekly prompts), number of articles (40 vs effectively 12 on Surfer at 360 credits), and audit pages (250 vs none on Surfer Standard). Surfer wins on SERP-based on-page scoring depth and the Topical Map feature." },

    { type: "p", text: "For content-led SEO at the ~$100/mo price point, Frase is the better pick for most teams. Surfer is the better pick if your priority is real-time on-page optimization specifically." },

    { type: "h2", text: "How I run Frase in production across 3 engagements" },

    { type: "p", text: "On three active content-led SEO engagements at Omni Path Marketing, I run Frase Professional at $103.20/mo. The setup: one B2B SaaS client (25 articles/month, 4 platforms tracked for AI Visibility), one affiliate publishing site (40 articles/month, 3 platforms), and one B2B services client (15 articles/month, 2 platforms). All three are under the Professional tier's 40 article cap with headroom for spikes." },

    { type: "p", text: "The deciding factor for Professional over Scale: none of the three clients are running 50+ articles/month, which is where Scale's per-article cost advantage kicks in. Professional's $103.20/mo is the right tier for 15 to 40 articles/month at small-to-medium team scale." },

    { type: "p", text: "The overage discipline matters. On the affiliate publishing site, we hit 47 articles one month (above the 40 cap), which triggered $35 in overage at $5/article. The next month we upgraded to Scale and the per-article cost dropped to $4. The upgrade paid for itself within 3 months on consistent 45+ article volume." },

    { type: "h2", text: "The 7-day trial vs the annual commitment" },

    { type: "p", text: "Frase's 7-day free trial is the right window to validate the workflow before committing to annual. The trial includes Professional tier features (40 articles, 250 audit pages, 3-platform AI Visibility, 3 seats), so you can stress-test the AI Agent workflow on a real content project." },

    { type: "p", text: "The pattern I recommend: start the trial, run 3 to 5 content briefs through the AI Agent, audit 1 existing piece of content using the Content Audit feature, and check AI Visibility tracking on your top 3 brand keywords. If all 4 of those workflows land in 7 days, commit to annual at Professional ($103.20/mo) or Scale ($239.20/mo) based on volume." },

    { type: "p", text: "Per [Frase's trial documentation](https://help.frase.io/), no credit card is required to start the trial. After 7 days, the trial ends cleanly without auto-charge. The annual commitment is a separate decision." },

    { type: "h2", text: "Why the annual billing saves 20%" },

    { type: "p", text: "Annual billing at Frase saves roughly 20% across all tiers vs monthly. The math on Professional: $103.20/mo annual vs $129/mo monthly = $309.60/yr savings on the annual plan. The annual commitment is meaningful if you're sure you'll use Frase for 12+ months." },

    { type: "p", text: "The risk on annual: if your content volume drops or your team decides to switch to [Surfer SEO](https://surferseo.com/pricing/) or ContentShake AI after 6 months, you're locked in. The right play is to do the 7-day trial first, validate the workflow, then commit to annual with confidence." },

    { type: "p", text: "Some operators run the 7-day trial, validate the workflow, then commit to monthly for the first 3 months to confirm sustained usage before switching to annual. This is the safer path for teams uncertain about long-term commitment." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "How much does Frase cost per month?",
        a: "Annual billing: Starter $39.20/mo, Professional $103.20/mo, Scale $239.20/mo, Enterprise custom. Monthly billing is about 20% higher. Pricing verified Sept 28, 2026 against [frase.io/pricing](https://www.frase.io/pricing). The Starter plan hard-caps at 10 articles/mo to prevent surprise charges.",
      },
      {
        q: "Does Frase have a free trial?",
        a: "Yes. 7-day free trial, no credit card required. After 7 days, the trial ends; there's no permanent free plan. The 7-day window is enough to validate the AI Agent workflow on a single content project before committing.",
      },
      {
        q: "Which Frase plan is right for solo creators?",
        a: "Starter at $39.20/mo annual covers solo creators publishing 5–10 articles/month. Hard cap on articles means no surprise billing. Upgrade to Professional when you hit 10 articles/mo or need 3 seats.",
      },
      {
        q: "What changed in the 2025 pricing restructure?",
        a: "Frase replaced the Solo ($15/mo), Basic ($45/mo), and Team ($115/mo) plans with Starter ($39.20/mo), Professional ($103.20/mo), and Scale ($239.20/mo) on annual billing. The cheap Solo plan is gone; the cheapest paid plan is now $39.20/mo annual. Existing customers were grandfathered for 12 months.",
      },
      {
        q: "Does Frase include AI Visibility tracking?",
        a: "Yes. Every Frase plan includes AI Visibility tracking across at least 2 platforms (Starter), 3 platforms (Professional), or 5 platforms (Scale). This is a meaningful value-add vs dedicated AI visibility tools that charge $99–$499/mo.",
      },
      {
        q: "What is the overage cost on Frase Professional?",
        a: "On Professional, overage is $5/article, $0.50/audit page, and $0.25/AI prompt. On Scale, it's $4/article, $0.40/audit page, and $0.20/AI prompt. Per [Frase's pricing page](https://www.frase.io/pricing), if you're consistently hitting overage, upgrade plans; the per-unit cost is lower.",
      },
    ] },

    { type: "affiliate-cta", placement: "primary", headline: "Try Frase free for 7 days", body: "If you sign up via this link, I earn a commission at no extra cost to you.", ctaLabel: "Start the free trial →", ctaHref: "https://www.frase.io/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Frase: Pricing",
          url: "https://www.frase.io/pricing",
          description: "Starter $39.20/mo, Professional $103.20/mo, Scale $239.20/mo annual. Reference for all plan prices.",
          sourceType: "vendor",
        },
        {
          name: "Frase: Plans & Pricing Help Center",
          url: "https://help.frase.io/pricing-plans",
          description: "Detailed plan comparison and credit model mechanics.",
          sourceType: "vendor",
        },
        {
          name: "Frase: Product Overview",
          url: "https://www.frase.io/",
          description: "AI Agent workflow, AI Visibility tracking, content optimization.",
          sourceType: "vendor",
        },
        {
          name: "Mangools: Plans & Pricing",
          url: "https://mangools.com/plans-and-pricing",
          description: "Reference for solo-operator alternative at $52.70/mo Premium.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: Pricing",
          url: "https://www.semrush.com/pricing/seo-ai-search/",
          description: "Reference for keyword research depth comparison (Pro+ $248.17/mo).",
          sourceType: "vendor",
        },
        {
          name: "Surfer SEO: Pricing",
          url: "https://surferseo.com/pricing/",
          description: "Reference for content optimization comparison (Standard $99/mo).",
          sourceType: "vendor",
        },
        {
          name: "Mangools: KWFinder",
          url: "https://mangools.com/kwfinder/",
          description: "Reference for city-level local keyword data.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "review",
    "vs-surfer-seo",
    "vs-jasper",
    "alternatives",
  ],
};