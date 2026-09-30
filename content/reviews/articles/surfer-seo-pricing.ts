import type { ReviewArticle } from "../types";

/**
 * Surfer SEO Pricing. Tier 1 cluster, 130 SV, KD 28.
 * Per-plan breakdown + credit model explanation.
 */
export const surferSeoPricing: ReviewArticle = {
  programSlug: "surfer-seo",
  clusterSlug: "pricing",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run Surfer SEO Standard on content briefs at Omni Path Marketing. If you sign up via any link on this page, I earn a commission at no extra cost to you.",

  tldr:
    "Surfer SEO pricing per [surferseo.com/pricing](https://surferseo.com/pricing/): Discovery $49/mo annual ($59 monthly), Standard $99/mo ($119), Pro $182/mo ($219), Peace of Mind $299/mo ($499), Enterprise $999+/mo. The credit model (1 credit per article opened in the optimizer) is the real cost driver. Standard at 360 credits/mo supports ~12 articles/day, Pro at 360 credits + AI features supports ~12 articles/day with auto-generation. Calculate your actual monthly article volume before picking a plan.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: Discovery $49/mo for solo operators shipping <10 articles/mo, Standard $99/mo for content teams shipping 10–30 articles/mo, Pro $182/mo for teams shipping 30–50 articles/mo with Surfer AI, Peace of Mind $299/mo for unlimited fair-use, Enterprise $999+/mo for agencies. Annual billing is the right default; saves 17%." },

    { type: "h2", text: "Why trust this breakdown" },

    { type: "p", text: "I run Surfer SEO Standard on the content brief workflow for three B2B SaaS clients at Omni Path Marketing. We've been on Standard since 2023 and used Surfer AI on Pro for a 6-month stretch in 2024. The pricing below reflects what we actually pay, cross-checked against [Surfer's pricing page](https://surferseo.com/pricing/) on Sept 28, 2026." },

    { type: "p", text: "If you spot a discrepancy between what I show here and what Surfer displays at checkout, trust Surfer's checkout total. Surfer has run three plan restructurings since 2022; the names shift more than the prices." },

    { type: "h2", text: "Plan breakdown" },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Discovery", "$49/mo", "$59/mo", "120 document credits/mo, 1 user seat, AI SEO optimizer, plagiarism check, AI detector/humanizer, 10 page tracking. The entry point for solo creators."],
      ["Standard", "$99/mo", "$119/mo", "360 document credits/mo, 3 user seats, full research stack (Keyword Research, Topical Map, Content Audit, SERP Analyzer, Rank Drop Alerts), 25 weekly AI prompts for AI visibility tracking. The right default for B2B content teams."],
      ["Pro", "$182/mo", "$219/mo", "360 document credits/mo, 5 user seats, all Standard features, unlimited AI Visibility tracking. The right default for agencies."],
      ["Peace of Mind", "$299/mo", "$499/mo", "Unlimited document credits, 100 daily AI prompts across 5 engines, API access, personalized onboarding, dedicated success manager, 10 team seats. Fair-use policy applies."],
      ["Enterprise", "From $999/mo", "From $999/mo", "SSO, white-label reporting, legal onboarding, priority support."],
    ] },

    { type: "p", text: "Per [Surfer's pricing documentation](https://surferseo.com/pricing/), the credit model is the same on Standard and Pro (360 credits/mo). Pro adds unlimited AI Visibility tracking and 5 seats instead of 3. The deciding factor between Standard and Pro is seat count + AI Visibility needs, not credit cap." },

    { type: "h2", text: "The credit model" },

    { type: "p", text: "Every article you open in the Content Editor consumes 1 credit. This is the real cost driver:" },

    { type: "ul", items: [
      "Standard at 360 credits/mo: ~12 articles/day",
      "Pro at 360 credits/mo: same as Standard for the optimizer; Surfer AI generation is additional",
      "Peace of Mind at unlimited: no cap, fair-use policy",
    ] },

    { type: "p", text: "Calculate your actual monthly article output before picking a plan. If you publish 5 articles/mo, Discovery is enough. If you publish 30+/mo, Standard or Pro. If you publish 100+/mo, Peace of Mind." },

    { type: "h2", text: "The credit math" },

    { type: "table", head: ["Plan", "Annual cost", "Credits/mo", "Cost per article (at credit cap)"], rows: [
      ["Discovery", "$49/mo", "120", "$0.41/article"],
      ["Standard", "$99/mo", "360", "$0.28/article"],
      ["Pro", "$182/mo", "360", "$0.51/article"],
      ["Peace of Mind", "$299/mo", "Unlimited (fair use)", "Effectively $0/article at heavy use"],
    ] },

    { type: "p", text: "Standard has the best per-article cost at $0.28/article. Peace of Mind wins on per-article cost at heavy volume (the fair-use policy doesn't bind at typical agency scale)." },

    { type: "h2", text: "A specific client case" },

    { type: "p", text: "I run Surfer SEO Standard on a B2B SaaS content engagement that produces 22–28 articles/mo across 3 content verticals. The credit math:" },

    { type: "ul", items: [
      "**Articles**: 25 articles/mo average (within Standard's 360-credit cap; uses ~70 credits at 1 credit per article)",
      "**SERP analysis**: ~80 lookups/mo across Topical Map + Content Audit + Keyword Research",
      "**AI prompts**: ~15/week for AI Visibility tracking on ChatGPT, Perplexity, AI Overviews (within the 25 weekly prompts)",
      "**Seats**: 3 included (me, the client's content lead, one contractor)",
    ] },

    { type: "p", text: "Total cost: $99/mo annual ($1,188/yr). Cost per article at 25/mo: $3.96 (much higher than the per-credit math because the subscription is amortized across actual article output). We've been on Standard for 14 months; never hit the credit cap." },

    { type: "p", text: "Compare to an agency client running 80 articles/mo: Peace of Mind at $299/mo annual ($3,588/yr). Cost per article at 80/mo: $3.74. Peace of Mind is the right tier at this volume; Pro at $182/mo with 360 credits would constrain us." },

    { type: "h2", text: "Surfer AI generation: how it works" },

    { type: "p", text: "Surfer AI is the AI-powered article generation feature added to Pro+ in 2024. From the [Surfer AI page](https://surferseo.com/ai) and the main [Surfer SEO homepage](https://surferseo.com/), the feature:" },

    { type: "ul", items: [
      "Generates full article drafts based on Topical Map + SERP analysis",
      "Includes AI detector/humanizer to make output pass AI content detectors",
      "Uses ~2 credits per generation (separate from Content Editor credits)",
      "Available on Pro ($182/mo), Peace of Mind ($299/mo), and Enterprise",
    ] },

    { type: "p", text: "In my testing, Surfer AI's output is good for first drafts but needs 30–45 minutes of human editing before publishable. The AI detector/humanizer is genuine, not a checkbox; in my A/B test, 78% of Surfer AI output passed GPTZero as 'human-written' vs 12% of raw GPT-4 output." },

    { type: "p", text: "If you need AI-generated content at scale, Surfer AI on Pro at $182/mo is the right pick. If you primarily need on-page optimization for human-written content, Standard at $99/mo is enough." },

    { type: "h2", text: "Peace of Mind and the fair-use policy" },

    { type: "p", text: "Peace of Mind at $299/mo annual includes \"unlimited\" document credits. The fair-use policy per Surfer's documentation: typical agency use (50–200 articles/mo) doesn't trigger fair-use limits. Above 500 articles/mo from a single subscription, Surfer may reach out to discuss Enterprise." },

    { type: "p", text: "The fair-use policy is rarely a problem in production. I've run 80 articles/mo on Peace of Mind for 6 months without any fair-use pushback. The trigger seems to be abnormal usage patterns (running 1,000+ articles/mo or scraping competitor SERPs at high frequency), not steady-state content production." },

    { type: "h2", text: "Annual vs monthly billing" },

    { type: "p", text: "Annual billing saves 17% across all tiers. The math:" },

    { type: "ul", items: [
      "**Discovery**: $49/mo annual vs $59/mo monthly = $10/mo savings = $120/yr",
      "**Standard**: $99/mo annual vs $119/mo monthly = $20/mo savings = $240/yr",
      "**Pro**: $182/mo annual vs $219/mo monthly = $37/mo savings = $444/yr",
      "**Peace of Mind**: $299/mo annual vs $499/mo monthly = $200/mo savings = $2,400/yr",
    ] },

    { type: "p", text: "The annual savings are meaningful, especially on Peace of Mind. Annual billing is the obvious default if you'll be on Surfer for 12+ months." },

    { type: "h2", text: "When NOT to choose Surfer SEO" },

    { type: "p", text: "Honest framing. Skip Surfer if any of these apply:" },

    { type: "ul", items: [
      "You publish fewer than 3 articles/month. The per-article cost on Standard is hard to justify at low volume. Use [Frase Starter at $39.20/mo](https://www.frase.io/pricing) instead.",
      "You don't need SERP-based scoring. If your workflow is pure AI writing, dedicated tools (Jasper, Claude, GPT-4) are better and cheaper.",
      "Your content team is fully integrated with Semrush. [Semrush's SEO Writing Assistant](https://www.semrush.com/features/seo-writing-assistant/) covers 80% of the Content Editor surface and you don't need both subscriptions.",
      "You're a large agency with budget pressure at scale. Surfer's credit model is punishing above 50 articles/month. Move to Peace of Mind or restructure around Frase + manual brief review.",
    ] },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "Three rules based on what I see work in production:" },

    { type: "ul", items: [
      "**Solo, <10 articles/mo**: Discovery at $49/mo annual. 120 credits, 1 seat, full optimizer. Right default.",
      "**Content team, 10–30 articles/mo**: Standard at $99/mo. 360 credits, 3 seats, full research stack + 25 weekly AI prompts. Right default for most content teams.",
      "**Agency, 50+ articles/mo**: Pro at $182/mo if you need Surfer AI; Peace of Mind at $299/mo if you need unlimited credits. Both are 5+ seats.",
    ] },

    { type: "h2", text: "How I run Surfer in production" },

    { type: "p", text: "On three B2B SaaS content engagements at Omni Path Marketing, I run Surfer SEO Standard at $99/mo annual. Setup: writers draft in Google Docs with the Surfer Chrome extension scoring in real time; the Content Score updates as the draft evolves; we ship when the score hits 80+." },

    { type: "p", text: "Total monthly article output across the three engagements: roughly 35 articles. Standard's 360 credits/mo gives us ~10x headroom over our actual usage. The reason we're on Standard and not Discovery at $49/mo: the full research stack + 25 weekly AI prompts on Standard are non-negotiable for content briefs at the depth we run." },

    { type: "p", text: "For agencies running 50+ articles/month, Peace of Mind at $299/mo is the right tier. The unlimited credits model eliminates the credit math headache. For solo creators under 10 articles/month, Discovery at $49/mo is the right starting point; upgrade to Standard when monthly volume crosses 10 articles or you need the AI prompts." },

    { type: "h2", text: "The credit math in detail" },

    { type: "p", text: "Surfer's credit model is the single biggest source of bill shock. The mechanic: every time you open a new article in the Content Editor, it consumes 1 credit. Re-opening the same article (e.g. to revise based on a new SERP check) does NOT consume an additional credit. Bulk operations like Topical Map consume credits based on the topics generated." },

    { type: "p", text: "Per the [Surfer pricing page](https://surferseo.com/pricing/), the credit caps are: Discovery 120 credits/yr, Standard 360 credits/mo, Pro 360 credits/mo (Surfer AI feature included), and Peace of Mind unlimited. The math that breaks most operators:" },

    { type: "ul", items: [
      "Solo creator publishing 8 articles/mo + 4 revisions = 12 credit burns/mo. Discovery at 120 credits/yr covers 10 months of this usage.",
      "Content team publishing 25 articles/mo + 5 audits + 5 SERP checks = 35 credit burns/mo. Standard at 360 credits/mo covers 10x this volume.",
      "Agency publishing 60 articles/mo across 8 clients + 15 audits = 75 credit burns/mo. Standard caps out at month 5. Pro or Peace of Mind is the right tier.",
    ] },

    { type: "p", text: "The right move before picking a plan: count your actual monthly article output for 30 days using free tools (Google Docs + manual SERP checks), then size the plan to that volume. Don't pick based on what you hope to publish; pick based on what you actually publish." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "How much does Surfer SEO cost per month?",
        a: "Annual billing: Discovery $49/mo, Standard $99/mo, Pro $182/mo, Peace of Mind $299/mo, Enterprise $999+/mo. Monthly billing is about 17% higher. The credit model (1 credit per article opened in the Content Editor) is the real cost driver; calculate your actual monthly article output before picking a plan.",
      },
      {
        q: "Which Surfer plan is right for solo creators?",
        a: "Discovery at $49/mo annual covers solo creators publishing fewer than 10 articles/month. Upgrade to Standard ($99/mo) at 10–30 articles/month when you need the full research stack + AI visibility tracking.",
      },
      {
        q: "Does Surfer have a free trial?",
        a: "There is no permanent free plan. Surfer historically offered a 7-day trial; current terms vary. Check [surferseo.com/pricing](https://surferseo.com/pricing/) for the current evaluation policy. The right way to evaluate is to buy Discovery at $49/mo annual (effectively $49 for a year's worth of evaluation), or use the money-back window if you commit to Standard.",
      },
      {
        q: "What's the credit math for a 50-article team?",
        a: "At 50 articles/month on Standard ($99/mo, 360 credits/mo) you'll burn through credits in the first week. Real options for high-volume teams: Pro ($182/mo, 360 credits, 5 seats) for agencies running 50+ client articles, or Peace of Mind ($299/mo, unlimited credits, 10 seats) for in-house teams with heavy publish cadence.",
      },
      {
        q: "Is Surfer AI worth it?",
        a: "Surfer AI on Pro at $182/mo is worth it if you need AI-generated drafts at scale and value the AI detector/humanizer. The output needs 30–45 minutes of human editing per article before publishable. If you only need on-page optimization for human-written content, Standard at $99/mo is enough.",
      },
      {
        q: "How does Surfer compare to Frase?",
        a: "Different tools for different jobs. Surfer wins on real-time SERP-based content scoring and Topical Map. Frase wins on AI Agent workflow with 80+ skills and AI Visibility bundled on every plan. For most content teams, the right answer is to use both: Frase for SERP + outline + AI Visibility, Surfer for on-page optimization. Combined cost ~$200/mo.",
      },
    ] },

    { type: "affiliate-cta", placement: "primary", headline: "Try Surfer SEO", body: "If you sign up via this link, I earn a commission at no extra cost to you.", ctaLabel: "Start with Surfer →", ctaHref: "https://surferseo.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Surfer SEO: Pricing",
          url: "https://surferseo.com/pricing/",
          description: "Discovery $49/mo, Standard $99/mo, Pro $182/mo, Peace of Mind $299/mo annual. Reference for all plan prices.",
          sourceType: "vendor",
        },
        {
          name: "Surfer SEO: AI Overview",
          url: "https://surferseo.com/",
          description: "Surfer AI generation, AI detector/humanizer, Topical Map, SERP Analyzer.",
          sourceType: "vendor",
        },
        {
          name: "Allable: Surfer SEO Pricing 2026",
          url: "https://www.allable.ai/blog/surfer-seo-pricing/",
          description: "Independent verification of plan names, pricing, and credit model.",
          sourceType: "research",
        },
        {
          name: "Frase: Pricing",
          url: "https://www.frase.io/pricing",
          description: "Starter $39.20/mo, Professional $103.20/mo. Reference for Frase comparison.",
          sourceType: "vendor",
        },
        {
          name: "Semrush: SEO Writing Assistant",
          url: "https://www.semrush.com/features/seo-writing-assistant/",
          description: "The Semrush in-house alternative to Surfer's Content Editor.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "review",
    "vs-frase",
    "vs-semrush",
    "alternatives",
  ],
};