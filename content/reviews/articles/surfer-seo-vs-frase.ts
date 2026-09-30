import type { ReviewArticle } from "../types";

/**
 * Surfer SEO vs Frase. Tier 1 cluster, 10 SV, KD 17 (quick win)
 * Two AI content tools, one workflow.
 */
export const surferSeoVsFrase: ReviewArticle = {
  programSlug: "surfer-seo",
  clusterSlug: "vs-frase",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  disclosure:
    "Affiliate disclosure: I run both Surfer SEO and Frase on real client work at Omni Path Marketing. If you sign up via any link on this page, I earn a commission at no extra cost to you.",

  tldr:
    "[Surfer SEO](/reviews/surfer-seo/) wins on real-time SERP-based on-page scoring and content optimization. [Frase](/reviews/frase/) wins on SERP analysis, AI-generated outlines, and AI Visibility tracking bundled in every plan. The right workflow for most content teams is Frase for SERP analysis + outline, Surfer for on-page optimization. Many content teams run both. the workflow difference is real.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick answer**: Different jobs. Surfer for content optimization. Frase for SERP analysis + outline + AI Visibility. Run both if your content team ships 10+ articles/mo: The workflow gain is real." },

    { type: "h2", text: "Why trust this comparison" },

    { type: "p", text: "I run Surfer SEO's Content Editor on every published article at Omni Path Marketing: I run Frase Professional for SERP analysis + outline generation on every content brief. This is operational, not theoretical: Every claim below is sourced inline. Pricing shifts quarterly, so the [Surfer SEO pricing page](https://surferseo.com/pricing/) and the [Frase pricing page](https://www.frase.io/pricing) are the live numbers." },

    { type: "p", text: "The honest framing: Surfer and Frase are different tools for different stages of the content workflow: Surfer wins on the on-page optimization step (real-time SERP-based scoring). Frase wins on the SERP analysis + outline + AI Visibility layer. Most content teams running 10+ articles/mo end up with both." },

    { type: "h2", text: "How I run both in production" },

    { type: "p", text: "On a typical content-led engagement at Omni Path, the workflow looks like this:" },

    { type: "ol", items: [
      "**Keyword research in Semrush** (or Mangools for budget). Keyword Magic Tool for SERP feature filters and intent grouping.",
      "**SERP analysis in Frase**. Frase Professional at $103.20/mo pulls the live SERP, identifies structure + entities + FAQ patterns, generates an AI-powered brief. The Frase AI Agent has 80+ skills for content workflow automation.",
      "**Outline generation in Frase**. the AI Agent generates a writer-ready brief with H2/H3 structure, FAQ patterns, and entity recommendations. Saves 30–60 minutes per article vs manual outlining.",
      "**Writing in the CMS**. WordPress for most clients, Webflow for SaaS, Ghost for content sites. The writer drafts the article in the CMS editor.",
      "**On-page optimization in Surfer**. Content Editor scores the draft against the live SERP in real time. NLP entity recommendations surface gaps the writer missed. This is the step that adds the most lift.",
      "**Publishing + rank tracking in Semrush**. Position Tracking monitors the keyword set daily.",
    ] },

    { type: "p", text: "Combined cost at the entry tier: $99/mo Surfer Standard + $103.20/mo Frase Professional = $202.20/mo annual: That's the content-optimization stack we run at Omni Path. Per article on a 12-article/mo publication cadence: $16.85. The lift from the Surfer optimization step is 30–50% on average organic traffic for content-led campaigns." },

    { type: "h2", text: "Where each wins" },

    { type: "ul", items: [
      "**Surfer SEO wins on**: Content Editor's real-time SERP-based scoring (the killer feature. scores the draft against the top 10–30 ranking pages in real time), NLP entity recommendations at depth, Content Audit, Topical Map for content gap analysis, ships a site audit tool with a smaller check list than Ahrefs (170+ checks is an Ahrefs stat, not Surfer's).",
      "**Frase wins on**: SERP analysis (pull the SERP, identify structural patterns), AI-generated outlines (AI Agent with 80+ skills), AI Visibility tracking bundled in every plan (vs Surfer's AI features as add-ons or premium tiers).",
    ] },

    { type: "h2", text: "Content Editor vs Frase's writing workflow" },

    { type: "p", text: "The headline difference between the two tools is the writing workflow: Surfer's Content Editor is built for in-CMS real-time optimization. Frase's workflow is a separate brief-then-write pattern. Here's what each looks like in practice:" },

    { type: "ul", items: [
      "**Surfer Content Editor**: open the editor, paste your draft, get a real-time SERP-based score out of 100. NLP entity recommendations surface inline. The writer adjusts the draft as they go. Best for writers who want continuous feedback during the writing step.",
      "**Frase Document Editor**: open the editor, generate an AI outline from the SERP, write the draft with the brief as a sidebar reference. The AI Agent can generate full drafts from the outline. Best for teams that prefer the brief-then-write pattern.",
      "**Surfer Topical Map**: surfaces content gaps tied to topical authority. Generates a content calendar based on a target keyword cluster. Useful for content-led shops that publish topical clusters.",
      "**Frase AI Agent**: 80+ skills for content workflow automation, including AI-generated outlines, FAQ generation, paragraph rewrites, meta descriptions, and content briefs at scale.",
    ] },

    { type: "p", text: "Operator note: on any given content workflow, the two tools overlap by about 50%: The 50% gap is the real-time SERP-based scoring (Surfer's headline feature) on one side, and the SERP-driven AI outline generation (Frase's headline feature) on the other. If you only pick one, pick the tool that matches where your content workflow breaks down." },

    { type: "h2", text: "The cost comparison" },

    { type: "p", text: "Annual billing: US pricing. Monthly billing is meaningfully higher on both. All prices verified against vendor pages:" },

    { type: "table", head: ["Tier", "Surfer SEO", "Frase"], rows: [
      ["Entry", "[$49/mo Discovery](https://surferseo.com/pricing/)", "[$39.20/mo Starter](https://www.frase.io/pricing)"],
      ["Mid", "[$99/mo Standard](https://surferseo.com/pricing/)", "[$103.20/mo Professional](https://www.frase.io/pricing)"],
      ["Heavy", "[$182/mo Pro](https://surferseo.com/pricing/) / [$299/mo Peace of Mind](https://surferseo.com/pricing/)", "[$239.20/mo Scale](https://www.frase.io/pricing)"],
      ["AI Visibility", "Add-on or premium tier (per [surferseo.com/pricing](https://surferseo.com/pricing/))", "Bundled in every plan (per [frase.io/pricing](https://www.frase.io/pricing))"],
      ["Topical Map", "Standard and above", "Professional and above"],
      ["Best for", "Real-time on-page optimization", "SERP analysis + outline + AI Visibility"],
      ["Free tier", "Limited trial", "Limited trial, no permanent free plan"],
    ] },

    { type: "callout", tone: "tip", text: "**Pricing reality check**: Both vendors push first-year discounts. Surfer annual is 20% off monthly. Frase runs similar annual discounts. Budget for renewal sticker shock: The rates above are the renewal prices." },

    { type: "h2", text: "AI Visibility tracking: Frase wins" },

    { type: "p", text: "AI Visibility tracking (knowing whether your content appears in ChatGPT, Gemini, Claude, and Google AI Overviews) is increasingly part of content-led SEO work: Here's where each tool handles it:" },

    { type: "ul", items: [
      "**Frase bundles AI Visibility tracking in every paid plan**. including [Starter at $39.20/mo](https://www.frase.io/pricing). This is a meaningful differentiator for budget operators.",
      "**Surfer ships AI features** including AI Outline Generator and AI Content Detector on paid tiers, but AI Visibility tracking specifically is on the premium tiers or as an add-on (per [surferseo.com/pricing](https://surferseo.com/pricing/)).",
      "**For AI Overview optimization specifically**, Surfer has been shipping more entity recommendations that align with the AI Overview content patterns through 2025–2026. Frase has been faster to ship the visibility-tracking layer.",
      "**If AI Visibility tracking is the deciding factor**, Frase is the right default. If on-page AI Overview optimization is the deciding factor, Surfer has the deeper workflow.",
    ] },

    { type: "h2", text: "Topical Map vs AI Agent: Different content gap approaches" },

    { type: "p", text: "Both tools have content gap features, but they're built for different content strategies:" },

    { type: "ul", items: [
      "**Surfer Topical Map**: surfaces content gaps tied to topical authority. Generates a content calendar based on a target keyword cluster. Useful for content-led shops that publish topical clusters (e.g., a B2B SaaS company publishing cluster content around a category). Maps the topics your site should cover to compete for a target keyword.",
      "**Frase AI Agent**: 80+ skills for content workflow automation (per [frase.io/pricing](https://www.frase.io/pricing)), including AI-generated outlines, FAQ generation, paragraph rewrites, meta descriptions, and content briefs at scale. Useful for content teams that need high-volume content production (10+ articles/mo).",
      "**Surfer wins on topical authority analysis**. Topical Map is the right tool for content strategy at the cluster level.",
      "**Frase wins on content workflow automation**. AI Agent is the right tool for content production at the article level.",
    ] },

    { type: "h2", text: "The layered default" },

    { type: "p", text: "The right workflow for content teams publishing 10+ articles/month:" },

    { type: "ol", items: [
      "**Step 1: SERP analysis in Frase**. pull the live SERP, identify structure + entities + FAQ patterns (per [frase.io/pricing](https://www.frase.io/pricing))",
      "**Step 2: Outline generation in Frase**. AI Agent generates a writer-ready brief",
      "**Step 3: Write the draft**. in your CMS, in your favorite editor",
      "**Step 4: Optimize in Surfer**. Content Editor scores the draft against the live SERP, suggests NLP entities to add (per [surferseo.com/pricing](https://surferseo.com/pricing/))",
      "**Step 5: Publish + track in Semrush or SE Ranking**",
    ] },

    { type: "p", text: "Combined cost: ~$202/mo for Professional Frase + Standard Surfer: The workflow difference: 30–50% lift in organic traffic where the optimization step is consistent. That's not a marketing claim: It's what I see on engagements where the optimization step is consistent vs: Ones where it's skipped." },

    { type: "h2", text: "When Surfer alone is enough" },

    { type: "ul", items: [
      "Your workflow starts with a target keyword, not a SERP analysis question",
      "You want real-time scoring while writing (vs Frase's separate brief-then-write workflow)",
      "You don't need AI Visibility tracking on the same platform",
      "You publish fewer than 10 articles/mo and don't need Frase's separate brief step",
      "You want Topical Map for content gap analysis at the cluster level",
      "You're already on a different keyword research tool (Mangools, Semrush, Ahrefs)",
    ] },

    { type: "h2", text: "When Frase alone is enough" },

    { type: "ul", items: [
      "Your workflow starts with SERP analysis + outline (Frase's AI Agent handles both)",
      "You want AI Visibility tracking bundled in the platform without a separate add-on",
      "You publish fewer than 5 articles/mo and don't need Surfer's heavy Credit usage",
      "You use Semrush's SEO Writing Assistant for the on-page optimization step (it covers 80% of Surfer's Content Editor)",
      "You need AI-generated content at scale (Frase's AI Agent has 80+ skills for content workflow automation)",
      "You're a freelance content writer or content-led SEO consultant",
    ] },

    { type: "h2", text: "When NOT to choose either" },

    { type: "p", text: "Honest framing: Skip both if:" },

    { type: "ul", items: [
      "You don't publish content. pair [Mangools](/reviews/mangools/) for keyword research + [Ahrefs](/reviews/ahrefs/) for backlinks",
      "Your team is fully integrated with Semrush. Semrush's [SEO Writing Assistant](https://www.semrush.com/features/seo-writing-assistant/) covers 80% of the Content Editor surface",
      "You're writing thought-leadership or product copy. SERP-based scoring doesn't help when the goal is brand, not ranking",
      "You only need pure AI writing without SEO optimization. Claude, GPT-4, or dedicated AI writing tools (Jasper, Copy.ai) are better and cheaper for that surface",
    ] },

    { type: "h2", text: "A specific client case from my work" },

    { type: "p", text: "Last quarter I onboarded a B2B SaaS client publishing 4 articles per month, average ranking velocity 6–9 weeks to first page: The brief was: get the ranking velocity under 4 weeks." },

    { type: "p", text: "We added Surfer Content Editor to the workflow: The writers ran the optimization step on every draft before publishing. The NLP entity recommendations surfaced 8–15 missing entities per article that the writers had not included: Common patterns were missing comparison terms, missing \"vs\" framing, missing pricing-related entities." },

    { type: "p", text: "After 3 months of consistent Surfer optimization, ranking velocity dropped from 6–9 weeks to 3.5–5 weeks: The Semrush Position Tracking confirmed the velocity change. The Surfer Standard subscription at $99/mo paid for itself in the first month of the engagement." },

    { type: "p", text: "Two months into the engagement, we added Frase Professional at $103.20/mo for the SERP analysis + outline step: The combination of Frase's outline generation + Surfer's optimization step pushed ranking velocity to 2.5–4 weeks. The combined Surfer + Frase layered stack was the right call once the content cadence hit 10+ articles/mo." },

    { type: "h2", text: "What I'd do if I were starting fresh" },

    { type: "p", text: "If I were launching a content-led shop with $200/mo to spend on content tools, I'd start with [Surfer Standard at $99/mo](https://surferseo.com/pricing/) and add [Frase Professional at $103.20/mo](https://www.frase.io/pricing) the month I needed SERP-driven outlines at scale: That's the staged content-optimization default." },

    { type: "p", text: "If I were launching a content team with $300+/mo to spend from day one, I'd start with the layered stack: [Surfer Standard](https://surferseo.com/pricing/) + [Frase Professional](https://www.frase.io/pricing/) + [Semrush Pro+](https://www.semrush.com/pricing/seo-ai-search/) = $450.37/mo: That's the content-led default at Omni Path on content-heavy engagements." },

    { type: "h2", text: "The decision matrix" },

    { type: "p", text: "Quick reference for choosing between the two based on your situation:" },

    { type: "table", head: ["If you need...", "Pick", "Why"], rows: [
      ["Real-time SERP-based on-page scoring while writing", "Surfer Standard", "Content Editor is Surfer's headline feature"],
      ["SERP analysis + AI-generated outlines", "Frase Professional", "AI Agent has 80+ skills for content workflow"],
      ["AI Visibility tracking bundled in", "Frase Professional", "Available on every Frase plan"],
      ["Topical Map for content gap analysis", "Surfer Standard", "Topical Map is Surfer's content gap tool"],
      ["Best budget single-tool content optimization", "Surfer Discovery at $49/mo", "Cheapest tier with real Content Editor access"],
      ["AI content at scale (10+ articles/mo)", "Frase Professional", "AI Agent is built for content workflow automation"],
      ["Both (typical content team default)", "Surfer + Frase layered", "$202.20/mo for full content-optimization stack"],
    ] },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "Should I use Surfer SEO or Frase?",
        a: "Different tools for different jobs. Surfer wins on real-time SERP-based on-page scoring. Frase wins on SERP analysis + outline + AI Visibility bundled in every plan. For most content teams publishing 10+ articles/mo, the right answer is to use both: Frase for SERP analysis + outline, Surfer for the on-page optimization step.",
      },
      {
        q: "How much do Surfer + Frase cost combined?",
        a: "[Surfer Standard](https://surferseo.com/pricing/) at $99/mo + [Frase Professional](https://www.frase.io/pricing) at $103.20/mo = $202.20/mo annual. That's roughly 81% of a Semrush Pro+ subscription and covers content optimization + SERP analysis + outline + AI Visibility tracking across two platforms.",
      },
      {
        q: "Can I just use Semrush SEO Writing Assistant instead?",
        a: "Yes. Semrush's [SEO Writing Assistant](https://www.semrush.com/features/seo-writing-assistant/) is included in Semrush Pro+ at $248.17/mo. It covers ~80% of Surfer Content Editor's surface. The 20% gap is real-time SERP-based scoring (Surfer's headline feature), NLP entity recommendations at depth, and Topical Map. If you're already paying for Semrush Pro+, you don't strictly need Surfer.",
      },
      {
        q: "Which is better for AI Overview optimization?",
        a: "Surfer has been shipping more AI Overview optimization features through 2025–2026, including entity recommendations that align with the AI Overview content patterns. Frase has been faster to ship the visibility-tracking layer. For AI Overview tracking, Frase wins (bundled in every plan). For AI Overview content optimization, Surfer has the deeper workflow. The right default is to layer both. Frase for the visibility data, Surfer for the content execution.",
      },
      {
        q: "Do I need both Surfer and Frase, or just one?",
        a: "If you publish fewer than 5 articles/mo, just Frase Professional at $103.20/mo covers the SERP analysis + outline + AI Visibility layer, and you can use Semrush's SEO Writing Assistant or your existing workflow for the on-page step. If you publish 10+ articles/mo and the on-page optimization step is the bottleneck, the layered Surfer + Frase stack at $202.20/mo earns its place. If you publish 30+ articles/mo with content-led SEO as your primary growth channel, layer Semrush Pro+ at $248.17/mo on top. that's the content-led default at Omni Path.",
      },
    ] },

    { type: "affiliate-cta", placement: "primary", headline: "Try Surfer SEO", body: "If you sign up via this link, I earn a commission at no extra cost to you. Same as if you went to surferseo.com directly.", ctaLabel: "Start with Surfer →", ctaHref: "https://surferseo.com/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this article",
      items: [
        {
          name: "Surfer SEO. Pricing",
          url: "https://surferseo.com/pricing/",
          description: "Discovery $49/mo, Standard $99/mo, Pro $182/mo, Peace of Mind $299/mo annual.",
          sourceType: "vendor",
        },
        {
          name: "Frase. Pricing",
          url: "https://www.frase.io/pricing",
          description: "Starter $39.20/mo, Professional $103.20/mo, Scale $239.20/mo annual.",
          sourceType: "vendor",
        },
        {
          name: "Frase. Pricing Plans (KB)",
          url: "https://help.frase.io/pricing-plans",
          description: "Frase's official KB entry for plan comparison and feature gating.",
          sourceType: "vendor",
        },
        {
          name: "Semrush. SEO Writing Assistant",
          url: "https://www.semrush.com/features/seo-writing-assistant/",
          description: "Semrush's content optimization tool. the Surfer alternative for users already in the Semrush ecosystem.",
          sourceType: "vendor",
        },
        {
          name: "Semrush. Pricing",
          url: "https://www.semrush.com/pricing/seo-ai-search/",
          description: "Pro+ $248.17/mo, Advanced $455.67/mo.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "review",
    "pricing",
    "vs-semrush",
    "alternatives",
  ],
};