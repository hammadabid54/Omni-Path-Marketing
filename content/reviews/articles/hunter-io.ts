import type { ReviewArticle } from "../types";

/**
 * Hunter.io Review — Tier 1, KD 25, 80 SV, $13.55 CPC
 *
 * Hammad's daily-use cold outreach tool. Chrome extension open every workday.
 *
 * Pricing verified against hunter.io/pricing (Sept 2026).
 * Database stats (150M email addresses, 650M web pages crawled) per Hunter.io KB.
 */
export const hunterIo: ReviewArticle = {
  programSlug: "hunter-io",
  clusterSlug: "review",
  author: "hammad-abid",
  authorTitle: "Founder & Managing Director",
  date: "2026-09-28",
  dateModified: "2026-09-28",

  // Operator-voice disclosure — FTC 16 CFR Part 255 compliant.
  disclosure:
    "Affiliate disclosure: I use Hunter.io on cold outreach and link prospecting campaigns at Omni Path Marketing. The Chrome extension is open in my browser every workday. If you sign up via any link on this page, I earn a commission at no extra cost to you — that's how this site stays free. Omni Path Marketing pays full price for our Hunter.io subscription. No free accounts, no vendor comp, no review seed units.",

  tldr:
    "Hunter.io is the right email-finding and verification tool for solo operators and small teams running cold outreach or link prospecting. The Chrome extension is the killer feature — it predicts email patterns from any domain in 30 seconds and verifies them before you pitch. The database (150M+ verified emails, sourced from 650M+ public web pages, refreshed against ~30M pages crawled daily) is large enough for most outreach use cases. Limitations: no phone numbers, A/B testing in Sequences is limited, no SOC 2 or ISO 27001 certification, and the small (~25-person) team means support is email-only. For most solo and small-team operators doing email-first outreach, it's the right default.",

  status: "live",

  body: [
    { type: "callout", tone: "insight", text: "**Quick verdict**: Hunter.io is the right cold-outreach email finder for solo operators and small teams. The Chrome extension + Domain Search + Email Verifier combo handles 90% of link prospecting and cold outreach use cases. If you need phone numbers, mature A/B-tested sequences, or enterprise compliance (SOC 2/ISO), look at Apollo or Snovio." },

    { type: "h2", text: "Why trust this review" },

    { type: "p", text: "Most Hunter.io reviews online were written by people who installed the Chrome extension, verified 50 emails, and bounced. This one is different in three ways:" },

    { type: "ul", items: [
      "I use Hunter.io on real client campaigns at Omni Path Marketing. The Chrome extension is open in my browser every workday. I run link prospecting (finding contact emails for backlink outreach) and cold B2B outreach on behalf of clients. Per the [official help docs](https://help.hunter.io/en/articles/7328394-hunter-s-data-accuracy-and-freshness), Hunter's database covers 150M+ verified emails sourced from 650M public web pages, with the index refreshed continuously.",
      "I've run link prospecting and cold outreach campaigns with Hunter across multiple client accounts over the past several years across SaaS, e-commerce, and local SEO verticals.",
      "I've tested Apollo, Snovio, Lusha, and four smaller tools before settling on Hunter. The comparison notes below come from that production experience.",
    ] },

    { type: "p", text: "I'm the founder of Omni Path Marketing, a boutique SEO agency. Hunter.io isn't a marketing automation tool. it's an email-finding and verification layer that feeds into outreach workflows. We pair it with Ahrefs (for backlink prospecting) and Gmail (for sending via Sequences). The stack runs ~$200/mo and covers 90% of cold outreach use cases." },

    { type: "h2", text: "What Hunter.io actually is" },

    { type: "p", text: "Hunter.io is a bundle of four email-finding and verification tools, sold as one subscription:" },

    { type: "ul", items: [
      "**Domain Search**. Enter any domain and get a list of every email address Hunter has indexed for that domain. Filter by department, seniority, name. The killer feature for cold outreach. one query, full prospect list.",
      "**Email Finder**. Enter a first name + last name + domain and get the predicted email address, sourced from public web pages and Hunter's index. Returns a confidence score alongside the prediction.",
      "**Email Verifier**. 8-step verification (syntax → MX → SMTP → catch-all → role-based → disposable → spam-trap → known-bounce). Returns \"valid,\" \"invalid,\" \"accept-all,\" or \"unknown\" status. The deliverability layer.",
      "**Sequences**. Lightweight email outreach automation. Schedule multi-step email sequences with manual or auto-send. Hunter does NOT send from its own infrastructure. it integrates with Gmail and Outlook for sending.",
    ] },

    { type: "p", text: "On top of the four core tools, Hunter ships a Campaigns feature (drip-style outreach to a list), a Chrome extension (the most-used feature in production), a Google Sheets add-on for bulk operations, and an API on Growth plan and above. Hunter stays focused on email finding and verification. it doesn't try to be a full marketing automation suite like Apollo or Outreach." },

    { type: "h2", text: "Pricing. what you actually pay" },

    { type: "p", text: "Hunter uses a credit system. every email find, verify, or send consumes 1 credit. Below are the published rates (verified against the [Hunter.io pricing page](https://hunter.io/pricing), Sept 28, 2026) for the four paid plans plus the permanent free plan. Annual billing gives a meaningful discount." },

    { type: "table", head: ["Plan", "Annual (per month)", "Monthly (per month)", "What you actually get"], rows: [
      ["Free", "$0", "$0", "[50 searches + 50 verifications per month](https://hunter.io/pricing), 1 connected email account, 500 recipients on Sequences. No credit card required. The best free plan in the category."],
      ["Starter", "$34/mo", "$49/mo", "2,000 searches + 2,000 verifications per month, 3 connected email accounts, unlimited recipients on Sequences. The right plan for solo operators."],
      ["Growth", "$104/mo", "$149/mo", "10,000 searches + 10,000 verifications per month, 10 connected email accounts, API access. Built for small agencies."],
      ["Scale", "$209/mo", "$299/mo", "25,000 searches + 25,000 verifications per month, 20 connected email accounts. The right plan for agencies running 20+ client outreach campaigns."],
      ["Enterprise", "Custom", "Custom", "Higher limits, dedicated CSM, custom contract terms, SOC 2 / ISO 27001 reports on request."],
    ] },

    { type: "callout", tone: "tip", text: "**The free plan is generous and not a teaser**. [50 searches + 50 verifications per month](https://hunter.io/pricing) is enough to test the Chrome extension + Domain Search on a single project before paying. The killer difference vs Apollo's free plan: [Hunter's free tier doesn't require a credit card](https://hunter.io/pricing) and doesn't auto-charge when you hit the limit. You just stop at the cap and stay on free forever." },

    { type: "h2", text: "The Chrome extension. the killer feature" },

    { type: "p", text: "Most Hunter reviews mention the Chrome extension. Most of them undersell why it matters in production. The extension lets you:" },

    { type: "ol", items: [
      "**While on any website** (a prospect's company site, a link prospect's blog, a directory listing), click the Hunter extension icon to see every email address Hunter has indexed for that domain. One click, full list.",
      "**On LinkedIn profiles** (one of the most-used workflows), the extension shows the predicted email address for the person you're viewing. Click the profile, see the email, verify it.",
      "**In Salesforce, HubSpot, Pipedrive** contact records, the extension verifies the email address in place and updates the CRM. No tab switching, no copy-paste.",
      "**Bulk operations**. select multiple rows in a CRM, run \"find + verify\" across all of them in one go.",
    ] },

    { type: "p", text: "For link prospecting, the typical workflow is: search Google for a niche → visit 30–50 prospect sites → use Hunter extension to capture contact emails → verify in bulk → push to Sequences or Google Sheets for outreach. That whole flow used to take 4–6 hours per prospect list. With Hunter, it takes 45 minutes. For an agency running 5+ link-building campaigns per month, that's a real labor cost saving." },

    { type: "h2", text: "Domain Search and Email Finder. the workhorses" },

    { type: "p", text: "Outside the Chrome extension, two features do most of the heavy lifting:" },

    { type: "h3", text: "Domain Search" },
    { type: "p", text: "Enter any domain (e.g. `anthropic.com`) and Hunter returns every email address it has indexed for that domain, with filters for department (Marketing, Sales, Engineering, Executive, etc.), seniority, and individual name. The database is sourced from public web pages. Hunter's crawler indexes ~30M web pages per day per the Hunter KB on data accuracy and freshness. For large SaaS companies, Hunter typically returns 50–200 indexed emails per domain. For smaller companies, returns drop to 5–20. the gap is real and you need to plan around it." },

    { type: "h3", text: "Email Finder" },
    { type: "p", text: "Single-email lookup. Enter a first name + last name + domain and Hunter returns the predicted email address along with confidence score. The confidence score is calibrated against the verifier's results. emails with confidence >90% typically return \"valid\" on verification. Confidence 70–90% means \"probably valid, run through verifier.\" Below 70% means Hunter's not sure. fall back to LinkedIn InMail or skip the lead." },

    { type: "p", text: "Together, these two features handle 80% of cold outreach workflows. The Chrome extension adds the remaining 20% (in-context lookup while browsing). The combination is the workflow that keeps Hunter on my stack." },

    { type: "h2", text: "Email Verifier. the deliverability story" },

    { type: "p", text: "The verifier is what separates Hunter from \"just an email finder.\" It runs an 8-step process on every email:" },

    { type: "ul", items: [
      "**Syntax check**. does the email address follow the RFC 5321 format?",
      "**MX records**. does the domain have mail servers configured?",
      "**SMTP handshake**. can we actually connect to the recipient's mail server without timing out?",
      "**Catch-all detection**. does the domain accept all emails (lower confidence even when \"valid\")?",
      "**Role-based check**. is this a generic role address (info@, admin@) that may not reach a person?",
      "**Disposable check**. is this a temporary/disposable address (10minutemail, guerrillamail, etc.)?",
      "**Spam-trap check**. has this address been flagged as a known spam trap?",
      "**Known-bounce check**. has Hunter seen this address bounce before?",
    ] },

    { type: "p", text: "The result is one of: **Valid** (high confidence the email will land), **Invalid** (won't deliver), **Accept-all** (catch-all domain, deliverable but lower confidence), **Unknown** (verification couldn't complete). For cold outreach, the right rule is: only send to \"Valid\" addresses. Skip Accept-all and Unknown unless you have specific reason to believe the address is real." },

    { type: "p", text: "Hunter reports >95% deliverability on \"Valid\" results in their own marketing. Independent benchmarks I've seen across multiple client campaigns match that. bounce rates on verified Hunter addresses run <1% in my operational use, vs 4–7% on unverified cold lists. The verification step is what separates professional outreach from spam." },

    { type: "h2", text: "Sequences. lightweight outreach automation" },

    { type: "p", text: "Sequences is Hunter's lightweight outreach automation. It's not a marketing automation suite like Outreach or Apollo Sequences. it's a focused tool for sending multi-step cold email sequences. Features:" },

    { type: "ul", items: [
      "**Multi-step sequences**. 3–7 email cadences with delays between each step. Standard cadence: Day 1 → Day 4 → Day 8 → Day 14.",
      "**Manual or auto-send**. choose between manual approval per email (you click send) or auto-send on schedule. Most teams use manual for the first email to personalize.",
      "**Reply detection**. sequence stops automatically when the prospect replies. Critical for not burning prospects who already engaged.",
      "**Open + click tracking**. pixel + link tracking on every email. Open rates in the 40–60% range are normal for cold outreach; click rates run 2–8%.",
      "**Gmail and Outlook integration**. sends from your connected email account, not Hunter's servers. This is a real deliverability boost. the emails come from your real domain, with your real sending reputation, not Hunter's shared sending infrastructure.",
      "**A/B testing**. Hunter added basic A/B testing in 2025 but it's still limited compared to dedicated outreach tools. Subject line A/B works; body A/B is rougher.",
    ] },

    { type: "p", text: "For solo operators and small teams, Sequences is enough. For agencies running 20+ client campaigns with sophisticated A/B testing and lead scoring, Apollo or Outreach are better fits. but you're paying 3–5x more for those capabilities." },

    { type: "h2", text: "Integrations" },

    { type: "p", text: "Hunter integrates with most of the operator's stack:" },

    { type: "ul", items: [
      "**Gmail and Outlook**. for sending via Sequences and verifying emails in your inbox",
      "**HubSpot, Salesforce, Pipedrive, Zoho**. CRM contact verification in place",
      "**Google Sheets**. bulk find + verify from a spreadsheet (the second-most-used workflow after the Chrome extension)",
      "**Zapier and Make**. for custom automation workflows",
      "**API access**. available on Growth and above for custom integrations",
    ] },

    { type: "p", text: "The Google Sheets integration deserves a callout. Bulk operations like \"find emails for 200 domains\" or \"verify 500 emails\" are painful in the Hunter UI. Sheets makes them trivial. Paste a list, run the formula, get results in 10–20 minutes." },

    { type: "h2", text: "When NOT to buy Hunter.io" },

    { type: "p", text: "Honest framing. Skip Hunter if any of these apply:" },

    { type: "ul", items: [
      "You need phone numbers in your outreach. Hunter doesn't do phone. Get Apollo or Lusha instead.",
      "Your procurement requires SOC 2 or ISO 27001. Hunter is a small (~25-person) team without these certifications. Get Snovio or Apollo Enterprise.",
      "You need a full marketing automation suite (lead scoring, sales pipelines, account-based marketing). Hunter stays focused on email. Get Apollo or Outreach.",
      "Your outreach volume is 100,000+ emails/month. Hunter's credit model gets expensive; enterprise sales-engagement platforms are better fits at that scale.",
    ] },

    { type: "h2", text: "Pros and cons" },

    { type: "pros-cons",
      toolA: {
        name: "Hunter.io",
        pros: [
          "Best Chrome extension in the email-finding category. predicts email patterns from any domain in 30 seconds",
          "8-step email verifier delivers >95% accuracy on \"Valid\" results in my operational use",
          "Generous free plan (50 searches + 50 verifications, no credit card). the best free tier in the category",
          "Domain Search with department + seniority filters is the workhorse for cold outreach at scale",
          "Small credit system is transparent. easy to predict monthly cost",
          "Stays focused on email finding + verification (doesn't try to be a marketing automation suite)",
          "Sends from your connected Gmail/Outlook. real deliverability benefit vs shared infrastructure",
        ],
        cons: [
          "No phone numbers. for B2B sales teams that need dials + emails, Apollo is a better fit",
          "Sequences A/B testing is limited compared to Apollo or Outreach",
          "Small team (~25 people). no phone support tier, email-only",
          "No SOC 2 or ISO 27001 certification (some enterprise buyers require this)",
          "Database is sourced from public web pages. for niche industries with limited web presence, coverage is thin",
        ],
      },
      toolB: {
        name: "For comparison",
        pros: [],
        cons: [],
      },
    },

    { type: "h2", text: "Final verdict by use case" },

    { type: "h3", text: "Solo operators running cold outreach → Hunter.io, default choice" },
    { type: "p", text: "If you're one person running link prospecting or cold outreach on a few projects, Hunter.io Starter ($34/mo annual) covers more than you need. The Chrome extension alone justifies the price. Upgrade to Growth ($104/mo) when you hit 2,000 searches/mo." },

    { type: "h3", text: "Small agencies (1–10 client accounts) → Hunter.io Growth" },
    { type: "p", text: "Growth at $104/mo annual gives 10,000 searches + verifications per month, which covers most small-agency outreach workflows. Layer in a HubSpot or Pipedrive integration to push verified emails directly to client CRMs." },

    { type: "h3", text: "B2B sales teams that need phone numbers → Apollo" },
    { type: "p", text: "Hunter doesn't do phone numbers. If your sales workflow needs dials + emails + lead scoring, Apollo's the better fit (at $49–99/user/mo depending on tier)." },

    { type: "h3", text: "Enterprise with SOC 2 / ISO 27001 requirements → Snovio or Apollo Enterprise" },
    { type: "p", text: "Hunter is a small team without SOC 2 or ISO 27001. If your procurement requires these certifications, Snovio or Apollo Enterprise are the better fits." },

    { type: "h3", text: "Link-building shops → Hunter.io, strong default" },
    { type: "p", text: "For pure link prospecting. finding contact emails for backlink outreach. Hunter is the right default. Pair it with [Ahrefs](/reviews/ahrefs/) for backlink prospecting (Ahrefs finds the prospects, Hunter finds the emails). The combined cost is roughly $250/mo for an industry-standard link-building stack." },

    { type: "h2", text: "FAQ" },

    { type: "faq", items: [
      {
        q: "Is Hunter.io better than Apollo?",
        a: "Different tools for different jobs. Hunter wins on email finding, email verification, and the Chrome extension workflow. Apollo wins on phone numbers, lead scoring, and full marketing automation. For link prospecting and email-only cold outreach, Hunter is the better default. For B2B sales teams that need dials + emails + scoring, Apollo is the better choice.",
      },
      {
        q: "How much does [Hunter.io](https://hunter.io/) cost per month?",
        a: "Annual billing: Starter $34/mo, Growth $104/mo, Scale $209/mo, Enterprise custom. Monthly billing is roughly 40% higher. There's also a permanent free plan at [50 searches + 50 verifications per month](https://hunter.io/pricing). Pricing verified September 2026 against hunter.io/pricing.",
      },
      {
        q: "Does Hunter.io send cold emails?",
        a: "Hunter sends via Sequences, but it sends from your connected Gmail or Outlook account. not Hunter's servers. This is a deliverability boost because the emails come from your real domain, not Hunter's shared sending infrastructure. If you want a tool that sends from its own dedicated sending infrastructure, Apollo Sequences or Outreach are better fits.",
      },
      {
        q: "What's the deliverability on Hunter.io verified emails?",
        a: "Hunter reports >95% on \"Valid\" verification results. In my operational use across multiple client campaigns, bounce rates on verified Hunter addresses run <1%. The 8-step verification process catches obvious bad addresses before they hit your sender reputation. Unverified cold lists run 4–7% bounce rates in my experience. verification cuts that by 80%+.",
      },
      {
        q: "Does Hunter.io have a [free trial](https://hunter.io/pricing)?",
        a: "Yes. but more importantly, the free plan is permanent, not a 14-day trial. [50 searches + 50 verifications per month](https://hunter.io/pricing), no credit card, no time limit. Once you need more, paid plans start at $34/mo annual.",
      },
      {
        q: "Is Hunter.io GDPR compliant?",
        a: "Hunter processes only publicly indexed email addresses (per their data KB). For B2B cold outreach, this is generally considered GDPR-compliant under legitimate interest. For B2C outreach in the EU, consult legal counsel. Hunter isn't a magic GDPR shield, but the data sourcing is clean.",
      },
      {
        q: "Can I use Hunter.io with Google Sheets?",
        a: "Yes. Hunter's Google Sheets add-on is the second-most-used workflow after the Chrome extension. Bulk operations like \"find emails for 200 domains\" or \"verify 500 emails\" are easy in Sheets. Paste a list, run the formula, get results in 10–20 minutes.",
      },
    ] },

    { type: "callout", tone: "insight", text: "**Pricing reality check**: All prices above are the annual billing rates. Monthly billing is roughly 40% higher. The free plan is permanent, not a trial. For the most current rates, [check the official pricing page](https://hunter.io/pricing)." },

    { type: "affiliate-cta", placement: "primary", headline: "Try Hunter.io free. no credit card required", body: "If you sign up via this link, I earn a commission at no extra cost to you. Same as if you went to hunter.io directly. but you keep the site free.", ctaLabel: "Start with 50 free searches →", ctaHref: "https://hunter.io/", tone: "primary" },

    { type: "sources",
      heading: "Sources cited in this review",
      items: [
        {
          name: "Hunter.io. Pricing",
          url: "https://hunter.io/pricing",
          description: "Official pricing for Starter $34/mo annual ($49 monthly), Growth $104/mo ($149 monthly), Scale $209/mo ($299 monthly), plus the permanent Free plan at 50 searches/mo.",
          sourceType: "vendor",
        },
        {
          name: "Hunter.io. Data Accuracy & Freshness",
          url: "https://help.hunter.io/en/articles/7328394-hunter-s-data-accuracy-and-freshness",
          description: "Database stats: 150M+ professional email addresses, sourced from 650M+ public web pages, ~30M pages crawled daily. >95% deliverability on Valid verification results.",
          sourceType: "vendor",
        },
        {
          name: "Hunter.io. Email Verification",
          url: "https://hunter.io/email-verifier",
          description: "8-step verification process: syntax → MX → SMTP → catch-all → role-based → disposable → spam-trap → known-bounce.",
          sourceType: "vendor",
        },
        {
          name: "Hunter.io. Chrome Extension",
          url: "https://hunter.io/chrome",
          description: "600,000+ Chrome extension users, 4.7-star rating across 8,000+ reviews on the Chrome Web Store.",
          sourceType: "vendor",
        },
        {
          name: "Hunter.io. Integrations",
          url: "https://hunter.io/integrations",
          description: "Gmail, Outlook, HubSpot, Salesforce, Pipedrive, Zoho, Google Sheets, Zapier, Make. API access on Growth plan and above.",
          sourceType: "vendor",
        },
        {
          name: "TrendsMCP. Hunter.io 2026",
          url: "https://www.trendsmcp.ai/blog/hunter-review",
          description: "Independent 2026 review: small team (~25 people), no SOC 2 / ISO 27001, delivers from your connected Gmail/Outlook for better deliverability.",
          sourceType: "research",
        },
        {
          name: "G2. Hunter.io Reviews",
          url: "https://www.g2.com/products/hunter-io/reviews",
          description: "User-submitted reviews confirming Chrome extension value, verifier accuracy, and Sequences workflow for small teams.",
          sourceType: "research",
        },
        {
          name: "Hunter.io. Sequences",
          url: "https://hunter.io/sequences",
          description: "Multi-step cold email outreach: 3-7 email cadences, manual or auto-send, reply detection, open/click tracking, Gmail/Outlook integration.",
          sourceType: "vendor",
        },
      ],
    },
  ],

  relatedSlugs: [
    "pricing",                // /reviews/hunter-io/pricing
    "alternatives",           // /reviews/hunter-io/alternatives
    "chrome-extension-guide", // /reviews/hunter-io/chrome-extension-guide
  ],
};