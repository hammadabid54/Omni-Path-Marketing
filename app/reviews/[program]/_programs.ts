/**
 * Program data for /reviews/[program]/* pages.
 *
 * Each program defines:
 *  - slug, name, tagline, blurb
 *  - usageNote (operator-voice for disclosure)
 *  - clusters (the articles in this pillar)
 *
 * The full keyword data lives in /data/affiliate-keywords/<program>.csv;
 * this file is a UI-layer mirror that maps to the planned article slugs.
 *
 * Status notes (Sept 28, 2026):
 *  - "live"        — the cluster has a written article in /content/reviews/articles/
 *  - "coming-soon" — the cluster is planned but no article exists yet
 */

export type ProgramSlug = "semrush" | "mangools" | "se-ranking" | "surfer-seo" | "hunter-io" | "frase" | "ahrefs";

export type Cluster = {
  slug: string;
  label: string;
  sv?: string;       // search volume of primary keyword
  cpc?: string;      // CPC of primary keyword
  kd?: string;       // keyword difficulty
  blurb: string;
  status: "live" | "coming-soon";
};

export type Program = {
  slug: ProgramSlug;
  name: string;
  tagline: string;
  blurb: string;
  usageNote: string;     // e.g. "daily" / "for content briefs" / "for cold outreach"
  clusters: Cluster[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "semrush",
    name: "Semrush",
    tagline: "The flagship all-in-one.",
    blurb: "The SEO platform with the largest keyword database, deepest competitor analysis, and the most aggressive product roadmap. We use it daily for keyword research, technical audits, and backlink analysis on agency clients.",
    usageNote: "daily",
    clusters: [
      { slug: "vs-ahrefs", label: "Semrush vs Ahrefs: which one wins in 2026?", sv: "740", cpc: "$9.32", kd: "18", blurb: "Two SEO platforms, both run on real client work, scored on the same 12-point rubric from our editorial policy. Which one wins on which task.", status: "live" },
      { slug: "pricing", label: "Semrush pricing breakdown (2026 plans)", sv: "1,900", cpc: "$4.13", kd: "33", blurb: "Every plan, every price, every annual vs monthly trap. What you actually pay after the promo expires.", status: "live" },
      { slug: "pro-plan", label: "Semrush Pro plan: who it's for", sv: "570", cpc: "—", kd: "28", blurb: "Is the Pro plan enough, or do you need Pro+ / Advanced / Enterprise? Honest take after running multiple tiers on different client accounts.", status: "live" },
      { slug: "alternatives", label: "Semrush alternatives: 12 tools tested", sv: "800", cpc: "$17.43", kd: "39", blurb: "The closest competitors, the budget alternatives, and the all-in-one replacements. Each scored on the 12-point rubric from our editorial policy.", status: "live" },
      { slug: "vs-se-ranking", label: "Semrush vs SE Ranking", sv: "360", cpc: "$6.19", kd: "30", blurb: "Direct head-to-head. When SE Ranking beats Semrush (white-label, local rank tracking), when it loses (database depth).", status: "live" },
      { slug: "vs-surfer-seo", label: "Semrush vs Surfer SEO", sv: "90", cpc: "$16.60", kd: "52", blurb: "All-in-one suite vs content specialist. When you need one, when you need both.", status: "live" },
      { slug: "free-alternatives", label: "Free Semrush alternatives", sv: "310", cpc: "$10.19", kd: "33", blurb: "What you can actually get without paying $139/mo. We test every free tier.", status: "live" },
      { slug: "cheap-alternatives", label: "Cheap Semrush alternatives (under $50/mo)", sv: "30", cpc: "$20.55", kd: "23", blurb: "The seven tools that punch above $50. Quick win — KD 23, $20 CPC.", status: "live" },
      { slug: "worth-it", label: "Is Semrush worth it in 2026?", sv: "10", cpc: "$13.12", kd: "31", blurb: "Decision-stage article for buyers on the fence. The honest yes/no answer.", status: "live" },
      { slug: "vs-ahrefs-vs-moz", label: "Semrush vs Ahrefs vs Moz: the 3-way", sv: "120", cpc: "—", kd: "30", blurb: "Three platforms with proprietary authority scores. Who wins on what.", status: "live" },
      { slug: "free-trial", label: "Semrush 14-day free trial guide", blurb: "How to set up the trial, the 4 tests to run, and how to decide before day 14.", status: "live" },
      { slug: "affiliate-program", label: "Semrush affiliate program review", sv: "10", cpc: "—", kd: "27", blurb: "Operator-to-operator: is the Semrush affiliate program worth promoting?", status: "live" },
      { slug: "nonprofit-pricing", label: "Semrush nonprofit pricing", sv: "10", cpc: "—", kd: "12", blurb: "Quick-win article. KD 12 means anyone can rank this.", status: "live" },
    ],
  },
  {
    slug: "mangools",
    name: "Mangools",
    tagline: "Five tools. One tab open.",
    blurb: "KWFinder + SERPWatcher + LinkMiner + SiteProfiler + SERPChecker. The lightweight SEO stack I open daily on client work. Highest CPC keyword on the site ($51.59).",
    usageNote: "daily",
    clusters: [
      { slug: "review", label: "Mangools review 2026: the tools I use daily", sv: "90", cpc: "$51.59", kd: "34", blurb: "Operator-led review of the five-tool Mangools suite. KWFinder, SERPWatcher, LinkMiner, SiteProfiler, SERPChecker — what each does well, where it falls short, and who should buy it.", status: "live" },
      { slug: "pricing", label: "Mangools pricing: worth it in 2026?", sv: "30", cpc: "$19.84", kd: "68", blurb: "Every plan, every price, the agency plan, and the lifetime-deal analysis. KD 68 but the only place to land on 'mangools pricing' intent.", status: "live" },
      { slug: "kwfinder-guide", label: "KWFinder: the keyword tool I keep open", sv: "920", cpc: "$9.51", kd: "26", blurb: "The fastest keyword research UI in the market. Workflow + integration tips for agencies.", status: "live" },
      { slug: "vs-semrush", label: "Mangools vs Semrush", sv: "70", cpc: "—", kd: "23", blurb: "Honest underdog comparison. When Mangools beats Semrush (and when it doesn't).", status: "live" },
      { slug: "vs-ahrefs", label: "Ahrefs vs Mangools (budget vs premium)", sv: "30", cpc: "$11.02", kd: "19", blurb: "Quick win — KD 19. For buyers who can't justify $99+/mo on a backlink index.", status: "live" },
      { slug: "affiliate-program", label: "Mangools affiliate program: 35% lifetime recurring", blurb: "Operator-to-operator breakdown. Most generous commission in the SEO affiliate space.", status: "live" },
    ],
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    tagline: "The Semrush alternative that ships white-label reports.",
    blurb: "Strongest direct Semrush competitor with the best white-label reporting in the category. We use it on agency accounts that need branded client dashboards and accurate local rank tracking.",
    usageNote: "on agency accounts that need white-label reporting",
    clusters: [
      { slug: "review", label: "SE Ranking review: the agency-side default", sv: "360", cpc: "$22.56", blurb: "Operator-led review of SE Ranking after the 2026 restructure. White-label reporting, grid-point local rank tracking, and the best per-project cost at agency scale.", status: "live" },
      { slug: "pricing", label: "SE Ranking pricing (Core vs Growth)", sv: "590", cpc: "$10.89", blurb: "Per-plan breakdown plus the dollar-for-dollar comparison. Which one saves money at each team size.", status: "live" },
      { slug: "alternatives", label: "SE Ranking alternatives worth considering", sv: "60", cpc: "$22.85", kd: "26", blurb: "For buyers who tried SE Ranking and bounced. The next-best alternatives at every price point.", status: "live" },
      { slug: "vs-semrush", label: "Semrush vs SE Ranking", sv: "360", cpc: "$6.19", kd: "30", blurb: "Direct head-to-head. When SE Ranking beats Semrush (white-label, local rank tracking), when it loses (database depth).", status: "live" },
      { slug: "vs-ahrefs", label: "SE Ranking vs Ahrefs", sv: "150", cpc: "$8.58", kd: "16", blurb: "Quick win — KD 16. Budget all-in-one vs backlink specialist.", status: "live" },
    ],
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    tagline: "Content optimization, layer by layer.",
    blurb: "The content optimization layer in my workflow — briefs, NLP keywords, on-page scoring. I open it right before publishing. 75–125% CPA payout makes it the highest single-conversion revenue per click.",
    usageNote: "for content briefs and pre-publish optimization",
    clusters: [
      { slug: "review", label: "Surfer SEO review 2026: worth the Hype?", sv: "190", cpc: "$21.01", blurb: "Honest review after the 2026 plan restructure. Real-time SERP-based scoring, credit math, when it wins vs when it's overkill.", status: "live" },
      { slug: "pricing", label: "Surfer SEO pricing: which plan wins?", sv: "130", cpc: "$10.19", kd: "28", blurb: "Discovery vs Standard vs Pro vs Peace of Mind vs Enterprise — and the AI add-on that changes the math.", status: "live" },
      { slug: "vs-frase", label: "Surfer SEO vs Frase", sv: "10", cpc: "—", kd: "17", blurb: "Quick win — KD 17. The two AI content optimization tools I use in the same workflow.", status: "live" },
      { slug: "vs-semrush", label: "Semrush vs Surfer SEO", sv: "90", cpc: "$16.60", kd: "52", blurb: "All-in-one vs content specialist. Why most agencies end up with both.", status: "live" },
      { slug: "alternatives", label: "Surfer SEO alternatives for content teams", sv: "490", cpc: "$20.91", kd: "41", blurb: "When Surfer isn't the right fit — Clearscope, MarketMuse, Frase, and the budget options.", status: "live" },
    ],
  },
  {
    slug: "hunter-io",
    name: "Hunter.io",
    tagline: "The Chrome extension is always open.",
    blurb: "Email finding and verification. The first tool I open when starting a cold outreach campaign. Domain search, email pattern prediction, and the deliverability check that prevents bounced pitches.",
    usageNote: "for cold outreach and link prospecting",
    clusters: [
      { slug: "review", label: "Hunter.io review 2026: for cold outreach", sv: "70", cpc: "$13.55", blurb: "Operator-led review after extensive cold outreach campaigns. Chrome extension + 8-step verifier + Sequences workflow breakdown.", status: "live" },
      { slug: "pricing", label: "Hunter.io pricing plans compared", sv: "220", cpc: "$12.96", blurb: "Free vs Starter vs Growth vs Scale — credit math and the agency break-even point.", status: "live" },
      { slug: "alternatives", label: "Hunter.io alternatives for email finding", sv: "80", cpc: "$23.86", kd: "18", blurb: "Quick win — KD 18. Apollo, Snovio, and the four tools I tested before sticking with Hunter.", status: "live" },
      { slug: "chrome-extension-guide", label: "Hunter.io Chrome extension guide", sv: "220", cpc: "—", blurb: "How to get the most out of the extension. LinkedIn → email pattern → verified deliverability in 30 seconds.", status: "live" },
    ],
  },
  {
    slug: "frase",
    name: "Frase",
    tagline: "Before Surfer, before the writer.",
    blurb: "SERP analysis and AI outline generation. The piece before Surfer in my content-brief workflow — gives me the structural skeleton and the questions the article needs to answer.",
    usageNote: "for SERP analysis and outline briefs",
    clusters: [
      { slug: "review", label: "Frase review 2026: SERP analysis + AI outlines", sv: "100", cpc: "$8.03", blurb: "Honest review after the late-2025 restructure. AI Agent workflow, bundled AI Visibility tracking, and the credit math.", status: "live" },
      { slug: "pricing", label: "Frase pricing (Starter / Pro / Scale)", sv: "20", cpc: "$11.12", kd: "29", blurb: "Starter vs Professional vs Scale — and the AI add-ons that change the calculus.", status: "live" },
      { slug: "vs-surfer-seo", label: "Frase vs Surfer SEO", sv: "20", cpc: "$12.51", kd: "17", blurb: "Quick win — KD 17. Two AI content tools, one workflow. When each wins.", status: "live" },
      { slug: "vs-jasper", label: "Frase vs Jasper", sv: "10", cpc: "—", blurb: "Frase is for SEO briefs; Jasper is for AI writing. The honest comparison buyers actually want.", status: "live" },
      { slug: "alternatives", label: "Frase alternatives: best AI content optimization tools", sv: "100", cpc: "$16.13", kd: "28", blurb: "When Frase isn't enough. Surfer, MarketMuse, Clearscope, and the budget tools.", status: "live" },
    ],
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    tagline: "Compare-only pillar.",
    blurb: "Strongest backlink index in the industry. Most Ahrefs comparisons live as clusters under the Semrush and Mangools pillars (e.g. /reviews/semrush/vs-ahrefs/).",
    usageNote: "for backlink audits when the budget allows",
    clusters: [
      { slug: "review", label: "Ahrefs review 2026: for backlink-first work", sv: "260", cpc: "$14.52", blurb: "Compare-only pillar. Honest review of Ahrefs' backlink index, Site Explorer, and DR — and when Ahrefs is the right pick vs Semrush vs Mangools.", status: "live" },
    ],
  },
];
