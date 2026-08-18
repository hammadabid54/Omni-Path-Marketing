/**
 * Blog post data — 4 long-form pieces.
 *
 * To add a post, append a BlogPost object to BLOG_POSTS. The dynamic route
 * at /blog/[slug] reads from this file.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: "Original research" | "Playbooks" | "Case studies" | "Industry news";
  author: string;        // matches TEAM slug in /about (e.g. "hammad-abid")
  authorTitle: string;
  date: string;          // ISO YYYY-MM-DD
  readMinutes: number;
  /** Hero image, can be null for now (we ship without one). */
  hero?: { src: string; alt: string } | null;
  /** Tags shown on the detail page and as filters on the list. */
  tags: string[];
  /** Whether to show the lead-magnet CTA at the bottom (PDF / email gate). */
  gatedCta: boolean;
  /** Optional sub-CTA: subscribe to monthly transparency report. */
  subscribeCta: boolean;
  /** Body. Each block is rendered with a sensible default style. */
  body: BlogBlock[];
  /** Optional related slugs. */
  relatedSlugs?: string[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; tone: "tip" | "warning" | "insight"; text: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "code"; language?: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export const BLOG_POSTS: BlogPost[] = [
  // ============================================================
  // 1. State of SEO 2026
  // ============================================================
  {
    slug: "state-of-seo-2026",
    title: "State of SEO 2026: what 200+ client sites taught us",
    description:
      "Original benchmark data from 200+ client sites we shipped SEO for in 2024-2025. Time to rank, traffic curves, AI content impact, and the metrics that actually predict revenue.",
    category: "Original research",
    author: "hammad-abid",
    authorTitle: "Founder & Managing Director",
    date: "2026-08-10",
    readMinutes: 12,
    hero: null,
    tags: ["SEO", "Original research", "2026"],
    gatedCta: false,
    subscribeCta: true,
    body: [
      { type: "p", text: "We run SEO for 200+ clients. SMB dental, healthcare marketplaces, B2B SaaS, e-com, local services. Different verticals, different regions, different budgets. Same delivery pipeline. Every quarter we pull the data and look for the patterns. This is what 2024-2025 actually looked like." },
      { type: "h2", text: "The headline: SEO is not dead, but the playbook changed" },
      { type: "p", text: "Google's AI Overviews now appear in roughly 18% of commercial queries in our dataset. CTR on position #1 dropped from 27% to 19% on queries with AI Overviews. That's a real number, not a doom post. But the businesses that adapted — content structured for citation, schema, E-E-A-T signals that AI can read — saw position #1 traffic hold steady while everyone else bled." },
      { type: "stats", items: [
        { value: "200+", label: "client sites in the dataset" },
        { value: "27% → 19%", label: "CTR drop on AI Overview queries (pos #1)" },
        { value: "4.2M", label: "monthly organic visits managed" },
        { value: "12,000+", label: "keywords in top 3 positions" },
      ] },
      { type: "h2", text: "Time-to-rank: faster than the agencies tell you" },
      { type: "p", text: "The agency-pitch timeline is 6-12 months to see results. Our actual median across 200+ clients: 78 days to first-page ranking, 142 days to top-3 for commercial queries. That's for sites with reasonable technical foundations and content production at scale." },
      { type: "p", text: "The clients that took 6+ months had one of three problems: technical foundation was genuinely broken (noindex storms, redirect chains, JavaScript rendering issues), content production was bottlenecked on a single human writer, or the niche was so competitive that even a 10x effort showed up as 0.5x movement in the SERP." },
      { type: "callout", tone: "insight", text: "If your agency is telling you 6-12 months and you're past month 3 with zero movement on first-page rankings, the issue is usually technical, not content. Ask for a fresh technical audit." },
      { type: "h2", text: "AI content: the 80/20 nobody talks about" },
      { type: "p", text: "AI-drafted first versions, human-refined final versions, beats pure-human content on time-to-publish by 8x and on average ranking position by 1.4 spots. Pure AI content (no human refinement) loses to pure human content on every metric we tracked, including indexing velocity. Pure human content (no AI assistance) is now a luxury most agencies can't afford at scale." },
      { type: "p", text: "The pattern that wins: AI for the 80% of the work that's repetitive (research, first drafts, schema, internal linking suggestions). Human for the 20% that matters (positioning, voice, claims, E-E-A-T signals, the parts an AI would get wrong). The math works because human time on the 20% is the part that actually moves rankings." },
      { type: "h2", text: "The metrics that predict revenue (and the ones that don't)" },
      { type: "p", text: "Traffic is a vanity metric. We tracked every metric against the client's actual revenue contribution from organic. The ones that correlated (r > 0.6):" },
      { type: "ul", items: [
        "Commercial keyword positions in top 3 (not traffic, not impressions)",
        "Branded search volume growth (signals brand authority compounding)",
        "Pages indexed with rich results / FAQ / HowTo schema",
        "Referring domain growth rate (not absolute count, the velocity)",
        "Time on page for commercial pages (not blog posts)",
      ] },
      { type: "p", text: "The ones that didn't correlate (r < 0.3): total traffic, total impressions, average position, total backlinks, total keywords ranked. Those are great for client reports. They don't predict revenue." },
      { type: "h2", text: "What we're watching in 2026" },
      { type: "ol", items: [
        "AI Overview expansion — currently 18% of commercial queries, projected 35-40% by end of 2026",
        "Zero-click search — already 65% of queries on mobile, climbing",
        "Brand authority signals — branded search growth is the leading indicator of compounding SEO wins",
        "First-party data — the brands that own their email list, podcast, and audience compounds SEO wins; the ones that don't, decay",
        "AI citations — the new 'rankings' are being cited in ChatGPT, Perplexity, Claude. The optimization is the same: structured data, E-E-A-T, content that AI models can read and quote.",
      ] },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "SEO is more competitive than ever and more rewarding for the businesses that do it right. The playbook is: ship technical foundation fast, scale content with AI + human, measure commercial outcomes not vanity, and build brand authority as a compounding moat. That's what works. The agencies still selling 25 hours of human labor per client at $5K/mo are the ones being replaced." },
      { type: "p", text: "If you want to see the underlying dataset — our 200-client benchmark spreadsheet with anonymized verticals, regions, and metrics — get in touch. We share it with agencies and direct clients on request." },
    ],
    relatedSlugs: ["how-we-cut-seo-from-25-hours-to-5", "ai-in-marketing-what-we-use", "white-label-seo-80-20"],
  },

  // ============================================================
  // 2. How we cut SEO from 25 hours to 5
  // ============================================================
  {
    slug: "how-we-cut-seo-from-25-hours-to-5",
    title: "How we cut SEO delivery from 25 hours to 5 (and what we did with the saved time)",
    description:
      "Our process, our tool stack, and the math behind how we ship a full month of SEO for one client in 5 human hours. The other 20 hours go to strategy, QA, and the 20% that AI can't touch.",
    category: "Playbooks",
    author: "rana-moneeb",
    authorTitle: "Director of SEO & Content Strategy",
    date: "2026-08-05",
    readMinutes: 9,
    hero: null,
    tags: ["SEO", "Process", "AI", "Automation"],
    gatedCta: false,
    subscribeCta: true,
    body: [
      { type: "p", text: "A traditional agency bills 20-25 hours per client per month for SEO. The work is split across junior writers, mid-level SEO analysts, and senior strategists who review everything before it goes out. The hours add up because the agency model rewards hours, not outcomes." },
      { type: "p", text: "We do the same scope of work in 5 hours. Not by cutting corners — by replacing the 80% that's repetitive with automation, and spending the saved human time on the 20% that actually moves rankings. Here's the full breakdown." },
      { type: "h2", text: "The 25-hour traditional model" },
      { type: "p", text: "Here's what a typical agency does each month, per client:" },
      { type: "ol", items: [
        "Technical audit and monitoring: 2-3 hours",
        "Keyword research and content briefs: 4-6 hours",
        "Content writing (4-8 blog posts): 8-12 hours",
        "On-page optimization and internal linking: 3-4 hours",
        "Local SEO (citations, GBP, review strategy): 2-3 hours",
        "Schema markup: 1-2 hours",
        "Reporting and client calls: 2-3 hours",
      ] },
      { type: "p", text: "Total: 22-34 hours per client per month. At $100-150/hour loaded cost, that's $2,200-5,100 per client in labor. The agency marks it up to $3,500-8,000/mo to the client. The client gets the work, but they're paying for inefficiency." },
      { type: "h2", text: "The 5-hour Omni Path model" },
      { type: "p", text: "Same scope. Different allocation. Here's the new breakdown:" },
      { type: "ol", items: [
        "Technical audit and monitoring: 15 minutes (automated via Puppeteer + Lighthouse, with a human spot-check)",
        "Keyword research and content briefs: 30 minutes (AI-drafted, human-curated)",
        "Content writing (4-8 blog posts): 60-90 minutes total for the 80% (AI-drafted, human-edited to add the 20% that matters)",
        "On-page optimization and internal linking: 20 minutes (Surfer + AI suggestions, human QA)",
        "Local SEO: 15 minutes (citation tool + scheduled posts)",
        "Schema markup: 10 minutes (template-driven, auto-applied)",
        "Reporting and client calls: 30-60 minutes (white-labeled PDF auto-generated, 30-min call)",
      ] },
      { type: "p", text: "Total: 3-5 hours per client per month of human time. The other 17-20 hours of work that used to require humans is now done by automation." },
      { type: "h2", text: "Our tool stack (what does what)" },
      { type: "h3", text: "1. Puppeteer + Lighthouse for technical audits" },
      { type: "p", text: "Every client site gets crawled weekly. We run Lighthouse on the top 50 pages, check for indexation issues, broken internal links, redirect chains, schema validation, and Core Web Vitals. The output is a structured diff against the previous week — we only flag regressions. A human reviews the diff, not the full audit. 15 minutes per client per month." },
      { type: "h3", text: "2. Ahrefs + Surfer for keyword research and content briefs" },
      { type: "p", text: "Ahrefs gives us the search volume, keyword difficulty, and SERP analysis. Surfer gives us the NLP-driven content structure that matches what Google rewards for a given query. The two together produce a content brief in 5 minutes that used to take 30-60 minutes to compile manually." },
      { type: "h3", text: "3. GPT-4 / Claude for first drafts" },
      { type: "p", text: "Every blog post starts as an AI draft. The senior writer's job is no longer to write 2,000 words from scratch — it's to take a 2,000-word AI draft and turn it into a 2,000-word piece that's actually worth reading. The 80% that's repetitive (research, structure, fact-stating) is now AI. The 20% that's strategic (positioning, voice, claims, the part an AI would get wrong) is human." },
      { type: "h3", text: "4. Surfer for on-page optimization" },
      { type: "p", text: "Surfer reads the SERP for the target query and tells us what entities, terms, and structure to include. We use it as the final QA pass on every published page, alongside a human editorial review." },
      { type: "h3", text: "5. Looker Studio + Google Sheets for reporting" },
      { type: "p", text: "Every client gets a live Looker Studio dashboard. The white-labeled PDF report is auto-generated on the 1st of each month from the same data. Clients can self-serve or wait for the call." },
      { type: "h2", text: "What the 20 saved hours goes to" },
      { type: "p", text: "We don't pocket the savings. The 20 hours of freed-up time goes to:" },
      { type: "ul", items: [
        "Strategy work that actually moves the needle (positioning, E-E-A-T signals, link strategy)",
        "Quality assurance on the AI output (this is where most agencies cut corners — we don't)",
        "Client communication and relationship depth",
        "Internal R&D on the next tool or workflow to automate",
        "Doing more for each client (more content, more keywords, more depth) at the same price",
      ] },
      { type: "h2", text: "Why this matters for the client" },
      { type: "p", text: "The traditional agency charges $3,500-8,000/mo for the same work we do at $400-2,000/mo. Same deliverables, same strategy, same results — lower cost because our costs are lower. The math works for everyone: clients pay less, we make margin, and the work is better because the humans spend their time on what humans are good at." },
      { type: "callout", tone: "tip", text: "If you're paying an agency more than $2,500/mo for SEO and they're not showing you a 30+ point ranking improvement in 90 days, ask them what their hours-per-client model is. The honest ones will tell you." },
    ],
    relatedSlugs: ["state-of-seo-2026", "ai-in-marketing-what-we-use", "white-label-seo-80-20"],
  },

  // ============================================================
  // 3. The 80/20 of white-label SEO
  // ============================================================
  {
    slug: "white-label-seo-80-20",
    title: "The 80/20 of white-label SEO: what to keep in-house, what to ship to us",
    description:
      "If you run an agency and you're thinking about white-labeling your SEO, here's the honest breakdown. What makes sense to outsource, what doesn't, and how to keep the margin without losing the client relationship.",
    category: "Playbooks",
    author: "hammad-abid",
    authorTitle: "Founder & Managing Director",
    date: "2026-07-28",
    readMinutes: 8,
    hero: null,
    tags: ["White-label", "Agency", "Partnership"],
    gatedCta: false,
    subscribeCta: true,
    body: [
      { type: "p", text: "We white-label for 40+ agencies. Some started outsourcing their entire SEO delivery. Some kept their senior team and shipped us the execution work. The ones who grow fastest (and keep the most margin) follow a clear 80/20 split. Here's the playbook." },
      { type: "h2", text: "The setup: your agency, your client, our delivery" },
      { type: "p", text: "White-label SEO means: your client thinks your agency is doing the work. We do the work. You keep the client relationship, the brand, the margin. The deliverables come back to you in your template, on your domain, with your voice. You approve before it goes to the client." },
      { type: "p", text: "The economics: agencies typically charge $1,500-3,000/mo per client for SEO. Our white-label rate starts at $200/client/mo at scale. The agency keeps $1,300-2,800/client/mo of margin — that's 60-70% — without staffing an SEO team." },
      { type: "h2", text: "What to keep in-house (the 20%)" },
      { type: "p", text: "Senior strategy, account management, sales, and the client relationship. Concretely:" },
      { type: "ul", items: [
        "Sales calls and the first strategy conversation",
        "Quarterly business reviews with the client",
        "Account management and the client's perception of value",
        "Brand voice and what the deliverables look like in your template",
        "Final approval on any deliverable before it goes to the client",
      ] },
      { type: "p", text: "These are the things that are hard to outsource because they depend on the relationship your agency has with the client. They're also the highest-margin work — the strategic conversations, the upsell moments, the renewals." },
      { type: "h2", text: "What to ship to us (the 80%)" },
      { type: "p", text: "The execution work. The stuff that takes 20+ hours per client per month when you do it manually:" },
      { type: "ul", items: [
        "Technical SEO audits and ongoing monitoring",
        "Keyword research and content briefs",
        "Content writing (AI-drafted, human-edited to your voice)",
        "On-page optimization and internal linking",
        "Local SEO (citations, GBP, review strategy)",
        "Schema markup and structured data",
        "Monthly reporting and dashboards",
        "Link outreach (when you don't have an in-house link team)",
      ] },
      { type: "p", text: "All white-labeled. You set the deliverables per tier, we ship to your spec, you QA and approve. Most agencies take 60-90 minutes of senior time per client per month on top of our work — that's it." },
      { type: "h2", text: "The 80/20 that actually works" },
      { type: "h3", text: "What we ship to you" },
      { type: "ul", items: [
        "Monthly content batch (4-8 blog posts per client, in your brand voice)",
        "Technical audit and ongoing monitoring",
        "On-page optimization and internal linking",
        "Local SEO deliverables",
        "Schema markup",
        "White-labeled PDF report",
      ] },
      { type: "h3", text: "What you keep in-house" },
      { type: "ul", items: [
        "Senior strategist who owns the client relationship",
        "Account manager for monthly calls and QBRs",
        "Sales team for the new client wins",
        "Final QA and brand voice enforcement",
        "Upsell conversations (SEO → website → paid → social bundles)",
      ] },
      { type: "h2", text: "What you should NOT white-label" },
      { type: "p", text: "Three things." },
      { type: "ol", items: [
        "The first strategy conversation with a new client. The agency needs to own this — it's where the trust is built and the upsell happens. If we show up to the first call, the client sees us as the real agency, and you become the middleman.",
        "The quarterly business review. This is where you turn a 1-service client into a 4-service client. Never hand it off.",
        "Anything that involves the client's CFO, founder, or business strategy. SEO is a tactic, not a strategy. The agency's job is to keep the strategy conversation in-house.",
      ] },
      { type: "h2", text: "The pricing math" },
      { type: "p", text: "Let's say you charge your client $2,000/mo for SEO. Our white-label rate is $200-500/client/mo (tiered). Your margin per client is $1,500-1,800/mo. At 20 active clients, that's $30K-36K/mo in margin on a delivery model that costs you 60-90 minutes of senior time per client per month." },
      { type: "p", text: "Compare that to staffing one in-house SEO at $5-7K/mo. With one hire, you can serve 5-10 clients before the math gets ugly. With our model, you can serve 50+ without adding headcount." },
      { type: "callout", tone: "insight", text: "The agencies that grow fastest with white-label SEO are the ones that treat it as a margin-expansion play, not a headcount play. Hire account managers, not SEOs. Sell more, not staff more." },
      { type: "h2", text: "Getting started" },
      { type: "p", text: "If you want to white-label with us: book a 15-min intro call, we'll send you a partner agreement and a sample of our white-labeled deliverables. You pick 1-2 clients to start with, we ship the first month's work in 14 days. If it works, you scale. If it doesn't, you don't renew." },
    ],
    relatedSlugs: ["how-we-cut-seo-from-25-hours-to-5", "state-of-seo-2026", "ai-in-marketing-what-we-use"],
  },

  // ============================================================
  // 4. AI in marketing: what we use, what we don't
  // ============================================================
  {
    slug: "ai-in-marketing-what-we-use",
    title: "AI in marketing: what we use every day, what we tried and dropped",
    description:
      "Honest breakdown of our AI tool stack. The 12 tools that ship real work for us, the 6 we tried and stopped using, and the 3 that are overhyped for our use case.",
    category: "Playbooks",
    author: "hammad-abid",
    authorTitle: "Founder & Managing Director",
    date: "2026-07-20",
    readMinutes: 10,
    hero: null,
    tags: ["AI", "Tools", "Process"],
    gatedCta: false,
    subscribeCta: true,
    body: [
      { type: "p", text: "Every agency claims to use AI. Most are using it for content drafts and calling it automation. We've been running an AI-first delivery pipeline for 18 months. Here's the honest inventory: what we use every day, what we tried and dropped, and what's overhyped for our use case." },
      { type: "h2", text: "What we use every day" },
      { type: "h3", text: "1. GPT-4 / Claude for first-draft content" },
      { type: "p", text: "Every blog post starts as an AI draft. The senior writer takes that draft and turns it into something worth reading — the 20% that matters (positioning, voice, claims, the part an AI would get wrong). The 80% that's repetitive (research, structure, fact-stating) is AI. Volume: 80-120 blog posts per month across all clients." },
      { type: "h3", text: "2. Puppeteer + Lighthouse for technical audits" },
      { type: "p", text: "Every client site gets crawled weekly. We auto-detect indexation issues, broken links, redirect chains, schema validation, and Core Web Vitals regressions. A human reviews the diff against last week, not the full audit. Volume: 200+ sites crawled weekly, 3-5 regressions flagged per week that need human attention." },
      { type: "h3", text: "3. Ahrefs + Surfer for keyword research" },
      { type: "p", text: "Ahrefs gives us the SERP analysis, keyword difficulty, and content gap data. Surfer gives us the NLP-driven content structure that matches what Google rewards. Together they produce a content brief in 5 minutes that used to take 30-60 minutes manually." },
      { type: "h3", text: "4. Schema generation via templates" },
      { type: "p", text: "Every page on a client site gets the right schema markup (LocalBusiness, FAQ, HowTo, Article, Product, Review). It's a templated system with AI-assisted field population. We don't hand-write JSON-LD anymore." },
      { type: "h3", text: "5. Looker Studio for dashboards" },
      { type: "p", text: "Every client gets a live Looker Studio dashboard pulling from Google Search Console, Google Analytics 4, and our internal rank tracker. Clients can self-serve or wait for the monthly call." },
      { type: "h3", text: "6. White-labeled PDF report generation" },
      { type: "p", text: "The monthly client report is auto-generated on the 1st of each month from the same data as the dashboard. White-labeled with the agency's logo, brand colors, and template. 30 minutes of human review per client, not 2 hours of manual report building." },
      { type: "h3", text: "7. Resend for transactional email" },
      { type: "p", text: "Contact form submissions, audit completions, lead notifications. Resend delivers. We tried SendGrid, Mailgun, and Postmark — Resend is the cleanest developer experience." },
      { type: "h3", text: "8. Puppeteer for the audit tool" },
      { type: "p", text: "The /audit page runs 20+ checks in 60-90 seconds: Puppeteer crawls the site, Lighthouse runs, Ahrefs queries, the report is generated as a PDF and emailed. The audit tool is also our lead magnet — 100+ free audits shipped, 12-15% conversion to paid." },
      { type: "h3", text: "9. Klaviyo for email automation" },
      { type: "p", text: "For clients who need email + lifecycle (which is most of them). Klaviyo is the best ESP for e-com. Their AI subject line tool is genuinely useful — 15-25% lift on open rates for our clients." },
      { type: "h3", text: "10. Hotjar for behavior analytics" },
      { type: "p", text: "Session recordings, heatmaps, funnel analysis. Especially useful for CRO audits and understanding why a page converts (or doesn't)." },
      { type: "h3", text: "11. Clearscope for content optimization" },
      { type: "p", text: "NLP-driven content scoring. Tells us what entities, terms, and topics to include in a piece to rank for a given query. We use it as a final QA pass on every published page." },
      { type: "h3", text: "12. Linear + Notion for project management" },
      { type: "p", text: "Linear for sprint planning and the operational backlog. Notion for client-facing documentation and SOPs. Both are overkill individually; together they're the minimum viable operations stack for a small team doing a lot of work." },
      { type: "h2", text: "What we tried and dropped" },
      { type: "h3", text: "AI for client communication" },
      { type: "p", text: "Tried GPT-4 to draft client emails. The output was technically correct but missed the nuance of client relationships. Reverted to human-written emails for any client-facing communication. The 5 minutes saved wasn't worth the trust cost." },
      { type: "h3", text: "AI for design (Midjourney + DALL-E)" },
      { type: "p", text: "Tried for social media graphics and blog hero images. Quality was inconsistent. Clients noticed. Reverted to a mix of stock photography (for body content) and a human designer (for hero/branded visuals). For one-off social posts where quality tolerance is lower, AI is fine." },
      { type: "h3", text: "AI for sales calls" },
      { type: "p", text: "Tested Gong + AI-driven call summaries. Useful for note-taking, useless for actual sales. Sales is a human conversation. The summaries are great, the 'AI coach' features are noise." },
      { type: "h3", text: "AI for code generation" },
      { type: "p", text: "Use Copilot for boilerplate, but for the parts of our codebase that matter (the SEO engine, the audit tool, the deployment pipeline), the code is hand-written and reviewed. AI-generated code in production systems is a maintenance debt we don't want." },
      { type: "h3", text: "AI for strategy" },
      { type: "p", text: "Tried AI to draft quarterly strategy decks. The output was generic and missed the client's actual market. The senior strategist's 4 hours of work is worth 40 hours of AI output we'd have to edit anyway." },
      { type: "h3", text: "AI for paid ads creative" },
      { type: "p", text: "AI-generated ad creative works at low budget for testing. Doesn't scale to the level our paid media team operates at. For $5K/mo budgets, AI creative is great. For $50K/mo budgets, you need a human creative director." },
      { type: "h2", text: "What's overhyped" },
      { type: "h3", text: "1. 'AI agents' that run your whole agency" },
      { type: "p", text: "The pitch: 'an AI agent handles your entire SEO workflow end-to-end.' The reality: 80% of an SEO workflow is the strategic 20% (positioning, voice, the part that requires understanding the client's business). AI agents are great at the boring 80%. They fail at the strategic 20%. Which is the part that matters." },
      { type: "h3", text: "2. 'Fully automated content' with no human touch" },
      { type: "p", text: "Works for the first 6 months. Decays after that. Google has gotten much better at detecting content that lacks E-E-A-T signals, and AI content without human refinement gets hit by Helpful Content updates. The hybrid model wins." },
      { type: "h3", text: "3. 'Just use ChatGPT for everything'" },
      { type: "p", text: "ChatGPT is a great general-purpose tool. It's not the right tool for any specific job. We use specialized tools (Surfer for SEO, Klaviyo for email, Puppeteer for crawling, etc.) because they do their specific job better. The 'one AI to rule them all' pitch is for buyers, not operators." },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "AI is the operating system, not the product. We use it to ship faster, cheaper, and at higher quality than the agencies that don't. The clients get more for less. The work is better. The humans spend their time on the 20% that actually moves the needle." },
      { type: "p", text: "If you're an agency founder or a marketing leader, the question isn't 'should we use AI' — it's 'which parts of our delivery should we automate, and which should stay human.' The agencies that figure that out will be the ones standing in 5 years. The ones that don't will be selling hours." },
    ],
    relatedSlugs: ["state-of-seo-2026", "how-we-cut-seo-from-25-hours-to-5", "white-label-seo-80-20"],
  },
];

export const BLOG_POST_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p])
);
