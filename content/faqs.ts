/**
 * FAQ data — shared across pages (home, /for-agencies, /pricing, etc.)
 * Copy source: COPY.md.
 */
import type { FaqItem } from "@/lib/seo";

export const homeFaq: FaqItem[] = [
  {
    question: "How is this so much cheaper than other agencies?",
    answer:
      "Because 80% of SEO work is repetitive. We automated that. Our senior humans focus on the 20% that actually moves the needle — strategy, edge cases, the calls AI gets wrong. Same deliverables. Lower overhead. Lower price.",
  },
  {
    question: "Are you really AI or do humans do the work?",
    answer:
      "Both. AI does the heavy lifting — research, drafts, audits, reports. Humans do the strategy, QA, and final calls. We're transparent about it. See our /process section for the exact breakdown.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Cancel anytime. 30-day notice. No penalty. No retention calls. We'd rather earn your business every month than lock you in.",
  },
  {
    question: "How fast can I get started?",
    answer:
      "White-label: 14 days from signup to your first deliverable. Direct: 7 days from strategy call to kickoff.",
  },
  {
    question: "Do you work with clients globally?",
    answer:
      "Yes. We work with clients worldwide. Pricing is in USD by default; we can bill in AUD, GBP, or EUR if you prefer.",
  },
];

export const agencyFaq: FaqItem[] = [
  {
    question: "Will my clients know I'm using Omni Path?",
    answer:
      "Never. Everything we produce is white-labeled with your logo, your colors, your domain. Your client thinks it's 100% you.",
  },
  {
    question: "What if a client asks technical questions?",
    answer:
      "We provide a private Slack channel with senior strategists. You can ask us in real-time and relay, or hand the channel to your account manager to handle directly.",
  },
  {
    question: "Can I bring my existing SEO clients?",
    answer:
      "Yes. Many agencies migrate existing clients to free up internal time. We audit the current state, hand off the strategy, and continue delivery seamlessly under your brand.",
  },
  {
    question: "What's your minimum client count?",
    answer:
      "1. The Starter tier is built for one-off projects. Most agencies start at 1-2 and grow to 10-20 within 3 months.",
  },
  {
    question: "How do you handle reporting?",
    answer:
      "White-labeled PDF reports auto-generated on the 1st of each month. Real-time dashboard access. We can also feed into your own reporting tool if you have one.",
  },
];

export const businessFaq: FaqItem[] = [
  {
    question: "How is this so much cheaper than other agencies?",
    answer:
      "We built our delivery pipeline on AI + automation, so our costs are 70% lower. We pass the savings to you. Same strategy, same deliverables.",
  },
  {
    question: "Do I get a dedicated account manager?",
    answer:
      "Yes. From Growth tier and up, you get a dedicated strategist who knows your business and runs your monthly call.",
  },
  {
    question: "What if I want to scale up or down?",
    answer:
      "Anytime. Move between tiers as your needs change. Add or remove services monthly. No long contracts.",
  },
  {
    question: "How fast can I see results?",
    answer:
      "SEO: 3-6 months for significant ranking gains. Paid ads: within the first week. Branding/web: 5-14 days for delivery.",
  },
  {
    question: "Can I bring my existing in-house team?",
    answer:
      "Yes. We work alongside in-house teams. Common setup: in-house handles content + community, we handle technical SEO + paid ads.",
  },
];

export const pricingFaq: FaqItem[] = [
  {
    question: "Are there any setup fees?",
    answer:
      "No. $0 setup fees, $0 onboarding fees, $0 hidden costs. We make our money from the monthly retainer, period.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Cancel anytime with 30-day notice. No penalty. We don't lock you in because we don't need to — our retention rate is 95%+.",
  },
  {
    question: "How does the 20% annual discount work?",
    answer:
      "Pay 12 months upfront and we knock 20% off the total. For Growth tier at 5 clients, that's $9,600/year instead of $12,000.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, for 40+ clients or $10k+/mo engagements. Talk to us about your specific needs.",
  },
  {
    question: "Is pricing in AUD?",
    answer: "Default is USD. We can bill in AUD, GBP, or EUR if you prefer.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Credit card, bank transfer, Stripe. We can invoice monthly or quarterly.",
  },
];

export const auditFaq: FaqItem[] = [
  {
    question: "How fast will I get the report?",
    answer: "60-90 seconds after submission. We email it as a PDF and show it on-screen.",
  },
  {
    question: "Is this really free?",
    answer: "Yes. No credit card. No trial. We make money when you hire us, not by selling your data.",
  },
  {
    question: "What if I have multiple sites?",
    answer: "Run the audit as many times as you want. One URL per submission.",
  },
  {
    question: "Do you sell my email?",
    answer: "Never. We use it to send your audit + occasional marketing emails (max 1/week). Unsubscribe anytime.",
  },
  {
    question: "What tools do you use to run the audit?",
    answer:
      "We use Puppeteer (crawling), Lighthouse (performance), Ahrefs (backlinks/keywords), plus our own checks. Same stack we use for client audits.",
  },
  {
    question: "How accurate is the audit?",
    answer:
      "~95% accurate for technical issues. 100% accurate for what it checks. We don't check everything (e.g. content quality, brand sentiment) — those need human review.",
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "How fast will I hear back?",
    answer: "Auto-reply within 1 minute. Human response within 4 business hours.",
  },
  {
    question: "Do you have a sales team?",
    answer:
      "No SDRs, no pushy sales. You'll talk to a senior strategist who can answer technical questions and scope your needs.",
  },
  {
    question: "Can I book a call directly?",
    answer: "Yes. Use the \"Book a 15-min call\" button to pick a time. We'll send a Cal.com link.",
  },
  {
    question: "Is the strategy call really free?",
    answer: "Yes. 15-30 minutes, no obligation, no follow-up spam.",
  },
  {
    question: "Do you work with clients globally?",
    answer:
      "Yes. We work with clients worldwide. Pricing in USD by default; we can bill in AUD, GBP, or EUR if you prefer.",
  },
];

export const processFaq: FaqItem[] = [
  {
    question: "Will my clients know you use AI?",
    answer:
      "If you're white-label, no. All deliverables are branded with your logo. The process is invisible to your client.",
  },
  {
    question: "What if AI gets something wrong?",
    answer:
      "That's why the 20% human QA exists. Strategists review everything before it ships. We catch edge cases AI misses.",
  },
  {
    question: "Can I see a sample report / blog post / audit?",
    answer: "Yes. See our /samples page for redacted examples.",
  },
  {
    question: "What if I want more human involvement?",
    answer:
      "We can dial it up. Custom packages available for clients who want more hands-on account management.",
  },
];

export const aboutFaq: FaqItem[] = [
  {
    question: "Where are you based?",
    answer:
      "We're fully remote and work with clients worldwide. Our team spans multiple timezones so we can support you during business hours.",
  },
  {
    question: "How big is the team?",
    answer: "5 humans, plus 30+ AI workflows and a vetted network of specialist contractors.",
  },
  {
    question: "Why are you so cheap?",
    answer:
      "Because our costs are low. We built our delivery pipeline on AI + automation. We pass the savings to clients instead of marking up labor.",
  },
  {
    question: "Are you a real company?",
    answer:
      "Yes. Registered business, real humans, real contracts, real deliverables. We're a remote-first team serving clients globally.",
  },
];

export const servicesFaq: FaqItem[] = [
  {
    question: "Do I have to buy all eight?",
    answer: "No. Hire us for one, or get the full stack. Most clients start with one and grow.",
  },
  {
    question: "Which service should I start with?",
    answer:
      "Depends on your business. SEO for long-term traffic. Paid ads for immediate leads. Branding for new businesses. See /pricing for the full breakdown.",
  },
  {
    question: "Can I mix and match?",
    answer:
      "Yes. Most clients bundle SEO + Website Care as the lock-in product. Others layer Paid Ads on top.",
  },
];

export const seoFaq: FaqItem[] = [
  {
    question: "How long until I see results?",
    answer:
      "Initial ranking improvements in 30-60 days. Significant traffic in 4-6 months. Top 3 rankings in 6-12 months.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No agency can guarantee specific rankings. We guarantee: monthly deliverables, transparent reporting, and a senior strategist dedicated to your success.",
  },
  {
    question: "What if I'm in a competitive niche?",
    answer:
      "We work with SaaS, e-commerce, local services, professional services, and more. Competitive niches just mean we need a longer runway.",
  },
  {
    question: "Can I bring my existing SEO agency?",
    answer:
      "Yes. Many clients migrate from their previous agency. We'll audit, identify gaps, and continue delivery seamlessly.",
  },
];

export const paidAdsFaq: FaqItem[] = [
  {
    question: "How much should I spend on ads?",
    answer:
      "Depends on your goals. For lead gen: at least $1,500/mo to get meaningful data. For e-com: $5k+/mo to scale.",
  },
  {
    question: "How fast will I see results?",
    answer: "Lead gen campaigns: within the first week. E-com: 2-4 weeks for data, 4-8 weeks for scale.",
  },
  {
    question: "Do I need to provide creative?",
    answer: "No. We write ad copy, brief images, and direct video scripts. You approve before launch.",
  },
  {
    question: "Which platforms do you support?",
    answer: "Google, Meta (Facebook + Instagram). Coming soon: TikTok, LinkedIn, Pinterest.",
  },
];

export const brandingFaq: FaqItem[] = [
  {
    question: "How many revisions do I get?",
    answer: "2 rounds of revisions included in every package. More available at $200/round.",
  },
  {
    question: "Do I own the work?",
    answer: "Yes. Full IP transfer on final payment. You can use the assets commercially without restriction.",
  },
  {
    question: "What file formats do I get?",
    answer:
      "Logo: SVG, PNG (transparent + white bg), PDF, EPS. Identity: + Figma file, color codes, font files. Full system: + brand book (PDF), pitch deck template (PPTX/Keynote).",
  },
  {
    question: "Can you match an existing brand?",
    answer: "Yes, we do brand refreshes. Send us your current assets and we evolve them.",
  },
];

export const webDesignFaq: FaqItem[] = [
  {
    question: "Do you write the copy?",
    answer:
      "Yes. AI-drafted, human-edited. You provide the brief, we handle the rest. Optional: you write, we polish.",
  },
  {
    question: "What platform do you build on?",
    answer: "Next.js for custom. Webflow, WordPress, or Shopify for standard. You choose.",
  },
  {
    question: "Is hosting included?",
    answer: "Not in the build price. We offer hosting + maintenance for $50-200/mo depending on platform.",
  },
  {
    question: "Do you do A/B testing?",
    answer: "Yes, as part of our CRO audit + ongoing optimization packages.",
  },
];

export const automatedSeoFaq: FaqItem[] = [
  {
    question: "How is automated SEO different from regular SEO?",
    answer:
      "Same deliverables (audit, content, links, on-page, reports). Different delivery model. We use AI + automation for the 80% that's repetitive, and senior humans for the 20% that matters. Result: lower cost, faster turnaround, same quality.",
  },
  {
    question: "Do I need to do anything?",
    answer:
      "Almost nothing. You approve the 90-day plan, give us a content brief for each piece, and join a 30-min monthly call. We handle everything else.",
  },
  {
    question: "What if I want to cancel?",
    answer: "Cancel anytime. 30-day notice. No penalty. We don't lock you in.",
  },
  {
    question: "How long until I see results?",
    answer:
      "First ranking improvements in 30-60 days. Significant traffic increase in 4-6 months. Top 3 rankings in 6-12 months.",
  },
  {
    question: "Do you work with e-commerce sites?",
    answer: "Yes. We have e-com-specific playbooks for Shopify, WooCommerce, and BigCommerce.",
  },
];
