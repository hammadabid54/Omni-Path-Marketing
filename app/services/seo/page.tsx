import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { PdfPortfolio } from "@/components/sections/pdf-portfolio";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import {
  buildMetadata,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  Wrench,
  FileText,
  Link2,
  MapPin,
  BarChart3,
  Phone,
  Sparkles,
  Rocket,
  PenLine,
  Layers,
  ArrowRight,
  Check,
  Gauge,
  Search,
  Bot,
  Code2,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI SEO Services · White-Label & Direct | From $200/client",
  description:
    "AI-powered SEO services. White-label for agencies at $200/client. Direct for businesses at $400/mo. Technical SEO, content, links, AI visibility. 60-70% margin.",
  path: "/services/seo",
});

/* ============================================================
   Direct pricing — detailed cards with explicit tier scope
   ============================================================ */

interface DirectTier {
  name: string;
  price: string;
  badge?: string;
  includes: string[];
  upgrade?: string[];
  cta: { label: string; href: string };
  popular?: boolean;
}

const directTiers: DirectTier[] = [
  {
    name: "Local",
    price: "$400/mo",
    badge: "Starter",
    includes: [
      "1 location, single market",
      "Google Business Profile optimization",
      "Technical SEO audit + fixes (1 round)",
      "On-page SEO: titles, metas, H1s, internal links",
      "2 blog posts per month, AI-drafted and human-edited",
      "4 link placements per month, DR 30+ domains",
      "Monthly report (PDF) + monthly call",
    ],
    upgrade: [
      "Multi-location support across cities or regions",
      "Ongoing technical SEO with quarterly audits",
      "4 blog posts per month with content strategy",
      "8 link placements per month across DR 40+ domains",
      "Dedicated senior strategist on your account",
    ],
    cta: { label: "Start with Local SEO", href: "/contact" },
  },
  {
    name: "Growth",
    price: "$800/mo",
    badge: "Most popular",
    includes: [
      "Multi-location, multi-page targeting",
      "Ongoing technical SEO with quarterly audits",
      "On-page SEO across 20-60 priority pages",
      "4 blog posts per month with content strategy",
      "8 link placements per month, DR 40+ domains",
      "Content strategy + editorial calendar",
      "Monthly call + Slack access to your strategist",
    ],
    upgrade: [
      "Multi-market expansion (national or international)",
      "Custom SEO roadmap and dedicated pod",
      "8 blog posts per month + landing page production",
      "12-16 link placements per month, DR 50+ domains",
      "Weekly calls with senior strategist",
    ],
    cta: { label: "Start with Growth SEO", href: "/contact" },
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$2,000+/mo",
    badge: "Custom",
    includes: [
      "Multi-market SEO across regions or countries",
      "Dedicated team: strategist, writer, link builder",
      "8 blog posts per month + landing pages",
      "12-16 link placements per month, DR 50+ domains",
      "Weekly calls + quarterly strategy review",
      "Custom dashboard wired into your stack",
      "Quarterly content and link strategy refresh",
    ],
    cta: { label: "Talk to us about Enterprise SEO", href: "/contact" },
  },
];

/* ============================================================
   White-label pricing — for agencies that resell
   ============================================================ */

interface WhiteLabelTier {
  name: string;
  ourPrice: string;
  resell: string;
  margin: string;
  clientCount: string;
}

const whiteLabelTiers: WhiteLabelTier[] = [
  {
    name: "Starter",
    ourPrice: "$250/client",
    resell: "$500-800/client",
    margin: "50-69%",
    clientCount: "1 client",
  },
  {
    name: "Growth",
    ourPrice: "$200/client",
    resell: "$750-1,200/client",
    margin: "60-73%",
    clientCount: "5+ clients",
  },
  {
    name: "Scale",
    ourPrice: "$150/client",
    resell: "$1,000-1,500/client",
    margin: "70-85%",
    clientCount: "15+ clients",
  },
];

/* ============================================================
   Why us vs traditional agency — comparison rows
   ============================================================ */

const whyUsRows = [
  {
    label: "Monthly fee",
    us: "$400-2,000/mo",
    them: "$1,500-3,000/mo",
  },
  {
    label: "Technical SEO audit",
    us: "Included, every quarter",
    them: "One-time, then billable",
  },
  {
    label: "Blog posts per month",
    us: "2-16 included",
    them: "1-2, then $200+ each",
  },
  {
    label: "Link placements per month",
    us: "4-16 included",
    them: "2-4, then $150+ each",
  },
  {
    label: "Reports",
    us: "White-labeled, monthly",
    them: "Quarterly, mostly screenshots",
  },
  {
    label: "Lock-in contract",
    us: "None, month-to-month",
    them: "12-month typical",
  },
  {
    label: "Time to first results",
    us: "30-60 days",
    them: "90-120 days",
  },
];

/* ============================================================
   Behind the scenes — the AI + automation stack
   ============================================================ */

const stackTools = [
  {
    icon: <Gauge className="h-5 w-5" />,
    name: "Puppeteer + Lighthouse",
    body: "Automated Core Web Vitals crawl that runs on every deploy and catches performance regressions before Google does. Replaces the 3-day manual audit most agencies still ship quarterly.",
    stat: "Audits 200+ pages in 90 seconds",
  },
  {
    icon: <Search className="h-5 w-5" />,
    name: "Ahrefs API + GPT-4",
    body: "Backlink profile analysis, content gap detection, and automated weekly reports that ship as PDFs. We catch losing keywords and link decay before they hit your traffic.",
    stat: "Tracks 50K+ keywords daily",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    name: "Surfer SEO + NLP",
    body: "Content scoring and semantic enrichment for every post. Each brief gets graded against the top 10 ranking pages before we start writing, not after the draft is done.",
    stat: "Every brief scored before we write",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    name: "GPT-4 + custom prompts",
    body: "First-draft content for 100% of blog posts. A senior editor human-edits, fact-checks, and adds your voice before anything ships. AI handles the typing. Human handles the judgment.",
    stat: "1,500-word draft in under 4 minutes",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    name: "Screaming Frog + custom scripts",
    body: "Full site audit, broken links, redirect chains, schema validation, and indexation checks. Automated Slack alerts fire the moment something breaks or shifts.",
    stat: "Crawls 100K URLs per run",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    name: "Looker Studio + BigQuery",
    body: "Real-time white-label dashboards for every client. No manual reporting, no screenshot dumps, no \"I will have that to you next week\" emails. The data is live and branded for you.",
    stat: "Refreshes every 6 hours, auto-broadcasts",
  },
];

/* ============================================================
   What's in every plan
   ============================================================ */

const includedInEveryPlan = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "White-labeled monthly report",
    body: "Branded PDF with rankings, traffic, links shipped, content shipped, and the next 30-day plan. Ready to forward to your client.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Monthly strategy call",
    body: "30 minutes with the strategist running your account. Numbers first, opinions second, written recap delivered within 24 hours.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "No lock-in contract",
    body: "Month-to-month. Cancel with 30 days notice, no penalty. We earn the renewal by delivering, not by trapping you in paperwork.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "No setup fees, ever",
    body: "$0 onboarding, $0 hidden costs, $0 percentage of spend. The monthly fee is the only line item on our invoice.",
  },
];

/* ============================================================
   The process
   ============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Audit",
    body: "Full technical SEO audit: crawl, indexation, Core Web Vitals, content gaps, backlink profile. You get the audit in writing, yours to keep.",
    meta: "Week 1",
  },
  {
    number: "02",
    title: "Strategy",
    body: "90-day roadmap with target keywords, content plan, link plan, and the metrics we will track. You approve in writing before we ship a single line.",
    meta: "Week 1-2",
  },
  {
    number: "03",
    title: "Build",
    body: "Technical fixes ship first, then on-page SEO across priority pages, then content production and link outreach. Every change is logged and dated.",
    meta: "Month 1-2",
  },
  {
    number: "04",
    title: "Publish",
    body: "Blog posts, landing pages, guest articles, link placements go live on a fixed cadence. You see every URL before it goes public and can flag changes.",
    meta: "Month 2+",
  },
  {
    number: "05",
    title: "Report",
    body: "Monthly PDF with rankings, traffic, conversions, links shipped, content shipped, and the next 30-day plan. Plain English, no dashboard dump.",
    meta: "Every month",
  },
];

/* ============================================================
   FAQ — page-specific, defined inline to avoid drift
   ============================================================ */

const seoFaq: FaqItem[] = [
  {
    question: "How fast will I rank?",
    answer:
      "First ranking improvements show up in 30-60 days, usually on long-tail and low-competition terms. Meaningful organic traffic follows in 4-6 months. Top 3 rankings on competitive terms take 6-12 months and depend on your niche, your domain authority, and how much content and link velocity we put behind it. We will not promise specific rankings, because no honest agency can. We will show you the work and the movement every month.",
  },
  {
    question: "Do I have to commit to a long contract?",
    answer:
      "No. Month-to-month, cancel with 30 days notice, no penalty. SEO takes time, so we expect to keep you past the first three months, but we do not lock you in. The Growth and Enterprise tiers give a 20% discount if you pay annually, which is optional. Our retention is high because we deliver, not because we trap clients in paperwork.",
  },
  {
    question: "What's the difference between white-label and direct?",
    answer:
      "White-label is for agencies: you pay us $150-250 per client per month, resell at $500-1,500, and keep 60-70% margin. Your client never sees us, every deliverable ships under your logo, and you set the price. Direct is for businesses: you pay us $400-2,000 per month, the work ships under the Omni Path brand, and you talk to us directly. Same delivery team, same quality, different wrapper.",
  },
  {
    question: "Do you write the content or do I?",
    answer:
      "We write it. Every blog post and landing page is AI-drafted, human-edited, and fact-checked by a senior editor before it ships. You approve topics and outlines in advance, and you get to review drafts before they publish, but you do not have to write a single word. If you want to contribute subject matter expertise, we will interview you and bake it into the draft.",
  },
  {
    question: "How do you report on results?",
    answer:
      "Monthly PDF, white-labeled for agency partners. The report covers rankings (target keywords + movement), organic traffic, conversions, content shipped, links shipped, and the next 30-day plan. Plain English, no dashboard dump. White-label partners get a private portal where they can pull reports on demand for any client. Monthly call covers the same numbers live with the strategist running the account.",
  },
];

export default function SeoServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="SEO · white-label + direct"
        heroTitle={
          <>
            SEO that ranks.{" "}
            <em className="font-serif not-italic text-lime-400">Without the agency overhead.</em>
          </>
        }
        heroSubhead="White-label SEO services for agencies at $200/client. Direct SEO services for businesses at $400/mo. Technical SEO, on-page, content, links, local, reporting. Same deliverables as a $1,500-3,000/mo traditional agency at 60-70% lower cost."
        heroPrimaryCta={{ label: "Get a free audit", href: "/audit" }}
        heroSecondaryCta={{ label: "See pricing", href: "/pricing" }}
        heroTrustMicrocopy="Cancel anytime · No setup fees · 20% off annual"
        definition="AI-powered SEO is search engine optimization that combines AI audits, AI-drafted content, automated link outreach, and schema structured for Google AI Overviews and AI assistants (ChatGPT, Perplexity, Claude). It ranks clients in commercial-intent search faster than manual SEO at a fraction of the cost."

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={
          <>
            The full SEO stack.{" "}
            <em className="font-serif not-italic text-lime-400">One team.</em>
          </>
        }
        whatWeDoSubhead="Technical SEO, on-page SEO, content production, link building, local SEO, and reporting — run by one senior team under one flat monthly fee. No subcontractors, no account-manager relay, no waiting two weeks for an answer."
        features={[
          {
            title: "Technical SEO",
            description: "Site audits, Core Web Vitals, schema markup, crawl budget, indexation fixes, site speed. The plumbing that decides whether Google can even read your site.",
            icon: <Wrench className="h-5 w-5" />,
          },
          {
            title: "On-page SEO",
            description: "Title tags, meta descriptions, H1s, internal link architecture, content optimization across 20-60 priority pages per cycle.",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            title: "Content production",
            description: "2-16 blog posts per month, AI-drafted and human-edited. Editorial calendar, briefs, outlines, and final drafts, all approved before publish.",
            icon: <PenLine className="h-5 w-5" />,
          },
          {
            title: "Link building",
            description: "4-16 placements per month on DR 30-50+ domains. Guest posts, niche edits, digital PR. No PBNs, no link farms, no spam.",
            icon: <Link2 className="h-5 w-5" />,
          },
          {
            title: "Local SEO",
            description: "Google Business Profile optimization, citations, local pack ranking, review velocity, and multi-location scaling for regional businesses.",
            icon: <MapPin className="h-5 w-5" />,
          },
          {
            title: "Reporting",
            description: "White-labeled monthly PDFs, real-time dashboards, monthly calls, written recaps. Plain English, no screenshot dumps, no vanity metrics.",
            icon: <BarChart3 className="h-5 w-5" />,
          },
        ]}

        directEyebrow="Direct pricing"
        directTitle={
          <>
            For businesses.{" "}
            <em className="font-serif not-italic text-lime-400">Flat fee, no markup.</em>
          </>
        }
        directSubhead="Three tiers, one monthly fee, no percentage of spend. The number on your invoice is the number on your books. Move up when your business does, no re-negotiation, no setup fee on the upgrade."

        hideFaq
        hideCta
      />

      {/* ============================================================
          Direct pricing — detailed cards with upgrade path
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct plans, in detail</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            What you get.{" "}
            <em className="font-serif not-italic text-lime-400">And what scales with you.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Every plan covers the full search engine optimization loop — technical, on-page, content, links, local, reporting. Higher tiers add volume, multi-location support, and dedicated senior attention. Move up when your business does, no setup fee on the upgrade.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-5 lg:grid-cols-3"
          stagger={0.06}
        >
          {directTiers.map((tier, i) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "bento h-full flex flex-col",
                  tier.popular && "border-lime-400/40 bg-lime-400/[0.03]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-lime-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Direct · {tier.name}
                    </h3>
                  </div>
                  {tier.badge && (
                    <span
                      className={cn(
                        "pill text-[10px]",
                        tier.popular ? "pill-accent" : ""
                      )}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-lime-400">
                    {tier.price}
                  </span>
                  <span className="text-xs text-white/55">per month</span>
                </div>

                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/55">
                    What we do under this tier
                  </p>
                  <ul className="mt-3 space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-white/80 leading-relaxed"
                      >
                        <Check className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.upgrade && tier.upgrade.length > 0 && (
                  <div className="mt-6 rounded-lg border border-white/8 bg-white/[0.02] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-lime-400">
                      Upgrade to {directTiers[i + 1]?.name ?? "next tier"} for:
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {tier.upgrade.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-white/70 leading-relaxed"
                        >
                          <ArrowRight className="h-3.5 w-3.5 mt-1 text-white/40 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <LinkButton
                    href={tier.cta.href}
                    variant={tier.popular ? "primary" : "ghost"}
                    size="md"
                    className="w-full"
                  >
                    {tier.cta.label}
                  </LinkButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal className="mt-10" delay={0.15}>
          <p className="text-sm text-white/55 text-center max-w-2xl mx-auto">
            Ad spend is not a factor for SEO. The monthly fee above is the only line item — no setup fees, no percentage of revenue, no hidden costs. Pair SEO with{" "}
            <Link href="/services/paid-ads" className="text-lime-400 hover:underline">
              paid ads
            </Link>{" "}
            for immediate leads while organic compounds. See the{" "}
            <Link href="/pricing" className="text-lime-400 hover:underline">
              full pricing
            </Link>{" "}
            for bundle discounts.
          </p>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          White-label pricing — for agencies that resell
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            For agencies.{" "}
            <em className="font-serif not-italic text-lime-400">60-70% margin.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Resell under your own brand. Your client never sees us, never hears from us, and every deliverable ships with your logo and your colors. The numbers below show the math: what you pay us, what you charge, and the margin you keep.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Tier</th>
                  <th className="px-5 py-4 font-medium">You pay us</th>
                  <th className="px-5 py-4 font-medium">Resell at</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                  <th className="px-5 py-4 font-medium">Client count</th>
                </tr>
              </thead>
              <tbody>
                {whiteLabelTiers.map((row) => (
                  <tr
                    key={row.name}
                    className={cn(
                      "border-b border-white/5 last:border-0",
                      row.name === "Growth" && "bg-lime-400/5"
                    )}
                  >
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {row.name}
                      {row.name === "Growth" && (
                        <span className="pill pill-accent text-[10px] ml-2">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">
                      {row.ourPrice}
                    </td>
                    <td className="px-5 py-4 text-white/85">{row.resell}</td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">
                      {row.margin}
                    </td>
                    <td className="px-5 py-4 text-white/70">{row.clientCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-white/45">
            Margins calculated on the low end of the resell range. White-label
            partner agencies get a private Slack, white-labeled delivery portal,
            and a dedicated partner manager after 5 active clients.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-10 grid gap-4 md:grid-cols-3"
          stagger={0.08}
        >
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                5 clients at Growth
              </p>
              <p className="mt-3 text-3xl font-bold text-white">$2,750-5,000/mo</p>
              <p className="mt-2 text-sm text-white/60">
                Margin on a 5-client book at the Growth tier, charged at the lower to upper end of typical agency pricing.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                15 clients at Scale
              </p>
              <p className="mt-3 text-3xl font-bold text-white">$12,750-20,250/mo</p>
              <p className="mt-2 text-sm text-white/60">
                Scale-tier pricing on a 15-client book. We do not cap how many clients you can run through us.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                Partner bundle (8 services)
              </p>
              <p className="mt-3 text-3xl font-bold text-white">From $150/client</p>
              <p className="mt-2 text-sm text-white/60">
                Bundle SEO with{" "}
                <Link href="/services/paid-ads" className="text-lime-400 hover:underline">
                  paid ads
                </Link>
                ,{" "}
                <Link href="/services/web-design" className="text-lime-400 hover:underline">
                  web design
                </Link>
                , and{" "}
                <Link href="/services/branding" className="text-lime-400 hover:underline">
                  branding
                </Link>{" "}
                at lower per-client rates.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Behind the scenes — how we ship SEO so fast
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            How we ship{" "}
            <em className="font-serif not-italic text-lime-400">
              10x faster than the agency down the street.
            </em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Most SEO agencies bill you for meetings, account-manager handoffs, and quarterly manual reports. We replaced that overhead with a custom AI and automation stack. Same work, same deliverables, shipped faster and priced 60-70% lower.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {stackTools.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {tool.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {tool.body}
                </p>
                <p className="mt-4 text-xs text-lime-400 font-medium">
                  {tool.stat}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal className="mt-12" delay={0.1}>
          <div className="rounded-2xl border border-lime-400/20 bg-lime-400/[0.04] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-lime-400">
              What this means for you
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-white">5h</p>
                <p className="mt-1 text-sm text-white/70 leading-relaxed">
                  Human time per client per month. Traditional agencies run 25-30h per account. The rest is the overhead you are paying for.
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Every 30 days</p>
                <p className="mt-1 text-sm text-white/70 leading-relaxed">
                  100% of clients get a fresh technical audit. Most agencies audit quarterly at best. Some never re-audit after month one.
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">70% lower</p>
                <p className="mt-1 text-sm text-white/70 leading-relaxed">
                  Same deliverables. 5x faster turnaround. 70% lower cost. The number on your invoice is the number on your books.
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm text-white/75 max-w-2xl leading-relaxed">
              That is why we can charge $200/client for white-label SEO while the agency down the street charges $1,500. We do less manual work. We ship more, and ship it sooner.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          Why us vs a traditional agency
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why us vs a traditional agency</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Same work.{" "}
            <em className="font-serif not-italic text-lime-400">A different price tag.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Traditional SEO agencies charge studio overhead, account-manager layers, and 12-month lock-ins. We built the delivery pipeline on AI and automation so our costs are 60-70% lower. The savings go to you. The quality stays. Here is the side-by-side.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">What you get</th>
                  <th className="px-5 py-4 font-medium text-lime-400">
                    Omni Path
                  </th>
                  <th className="px-5 py-4 font-medium">Traditional agency</th>
                </tr>
              </thead>
              <tbody>
                {whyUsRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {row.label}
                    </td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">
                      {row.us}
                    </td>
                    <td className="px-5 py-4 text-white/60">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-8 max-w-3xl">
          <p className="text-sm text-white/65 leading-relaxed">
            The short version: search engine optimization services that cost $1,500-3,000/mo at a traditional agency land at $400-2,000/mo here, with the same deliverables and a senior human on your account. The process is faster because we cut the meetings, the account-manager relay, and the long proposal cycles. Your rankings move sooner, your bill is lower, and you ship with no lock-in contract from day one. Pair SEO with{" "}
            <Link href="/services/paid-ads" className="text-lime-400 hover:underline">
              paid ads
            </Link>{" "}
            for immediate leads while organic compounds.
          </p>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          What's in every plan
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&apos;s in every plan</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Non-negotiables.{" "}
            <em className="font-serif not-italic text-lime-400">In every tier.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Whether you are on Local at $400/mo or Enterprise at $2,000+/mo, these are the baseline you get. We do not strip them out to hit a cheaper headline number. Every client gets the same floor.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {includedInEveryPlan.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          The process
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Audit to ranking.{" "}
            <em className="font-serif not-italic text-lime-400">Five steps.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Same process whether you are a direct client booking an $800 Growth plan or an agency running a $200 white-label resell. Audit lands in week one. Strategy approved in week two. Technical fixes, content, and links ship from month one.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          stagger={0.08}
        >
          {processSteps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bento h-full">
                <div className="flex items-center gap-2 text-lime-400 text-xs uppercase tracking-widest font-semibold">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/10">
                    {step.number}
                  </span>
                  Step
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {step.body}
                </p>
                <p className="mt-3 text-xs text-white/45 inline-flex items-center gap-1.5">
                  <span className="dot" /> {step.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal
          className="mt-10 text-center text-sm text-white/55"
          delay={0.2}
        >
          Total time, audit to first ranking movement:{" "}
          <span className="text-lime-400 font-semibold">30-60 days</span>.
          Meaningful organic traffic in 4-6 months. Top 3 rankings in 6-12 months.
        </ScrollReveal>
      </Section>

      {/* Internal links — pair SEO with the rest of the stack */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/55">
            Pair SEO with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <LinkButton
              href="/services/paid-ads"
              variant="ghost"
              size="sm"
              className="justify-start"
            >
              <ArrowRight className="h-4 w-4 text-lime-400" />
              Paid ads — get leads now while SEO compounds
            </LinkButton>
            <LinkButton
              href="/services/content"
              variant="ghost"
              size="sm"
              className="justify-start"
            >
              <ArrowRight className="h-4 w-4 text-lime-400" />
              Content — ship more posts, faster
            </LinkButton>
            <LinkButton
              href="/services/web-design"
              variant="ghost"
              size="sm"
              className="justify-start"
            >
              <ArrowRight className="h-4 w-4 text-lime-400" />
              Web design — fix the technical SEO baseline
            </LinkButton>
          </div>
        </div>
      </Section>

      <TldrBox
        items={[
          "SEO services from $400/mo direct, $200/client white-label. Technical, on-page, content, links, local, reporting — one team, one flat fee.",
          "White-label for agencies: 60-70% margin. Resell at $500-1,500/client under your brand, your client never sees us.",
          "Same deliverables as a $1,500-3,000/mo traditional SEO agency. 60-70% lower cost, no lock-in contract, senior strategist on every account.",
        ]}
      />

      <PdfPortfolio />

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            SEO questions,{" "}
            <em className="font-serif not-italic text-lime-400">honestly.</em>
          </>
        }
        subhead="If you don't see your question here, just ask. We reply within 4 business hours, no sales team in between."
        items={seoFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            Ready to <em className="font-serif not-italic text-lime-400">rank higher?</em>
          </>
        }
        subhead="Get a free audit, or book a 15-min call with a senior SEO strategist. No sales team, no SDR follow-up, no proposal deck."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a call", href: "/contact" }}
      />

      <Script
        id="ld-service-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI SEO Services",
              description:
                "AI-powered SEO services. White-label for agencies at $200/client. Direct for businesses at $400/mo. Technical SEO, content, links, AI visibility. 60-70% margin.",
              path: "/services/seo",
              serviceType: "AI Search Engine Optimization",
              priceRange: "$200-$2000",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(seoFaq)),
        }}
      />
      <Script
        id="ld-bc-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "SEO", url: "/services/seo" },
            ])
          ),
        }}
      />
    </>
  );
}
