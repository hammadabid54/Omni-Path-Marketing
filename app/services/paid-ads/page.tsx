import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CostComparison } from "@/components/sections/cost-comparison";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema, type FaqItem } from "@/lib/seo";
import {
  Target,
  TrendingUp,
  PenSquare,
  BarChart3,
  FlaskConical,
  Search,
  Megaphone,
  Sparkles,
  LineChart,
  Users,
  Rocket,
  Code2,
  Bot,
  RefreshCw,
  Camera,
  LayoutDashboard,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Paid Ads Management · Google & Meta | From $350/mo",
  description:
    "AI-assisted paid ads management for Google + Meta. Direct from $350/mo. White-label from $250/mo. 60-70% margin. No setup fees. 7-day onboarding.",
  path: "/services/paid-ads",
});

const paidAdsFaqLocal: FaqItem[] = [
  {
    question: "What's the difference between your paid ads and a traditional agency?",
    answer:
      "Traditional agencies bill $1,500-3,000/mo plus 12-15% of ad spend, with account managers juggling 20+ clients and slow turnaround. We run a lean paid media agency on AI + automation, manage a smaller client roster, and ship refinements weekly. Same deliverables, 60-70% lower cost, faster decisions, and direct access to the senior person running your account.",
  },
  {
    question: "Do I need to provide the ad spend, or is it included?",
    answer:
      "Ad spend is billed separately, directly to the platform (Google or Meta). Our management fee covers strategy, creative, bidding, and reporting. This separation means no markup on your media, and you see the real numbers on your platform dashboard. Spend can start at $1,500/mo for lead gen or $5,000/mo for e-com, billed by the platforms themselves.",
  },
  {
    question: "How fast can you launch a campaign?",
    answer:
      "Direct clients: 7-day onboarding. We audit, build the campaign structure, write ad copy, brief creative, and launch. White-label partners: 14 days from signup to first live campaign under your brand. We move fast because we run the same playbook every time and the templates are already built and tested across hundreds of accounts.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Month-to-month, cancel with 30 days notice, no penalty. We keep clients because we deliver, not because we are locked in. Our retention rate sits around 95% after 12 months. If we are not earning the next month, you should not have to pay for it — that is the deal.",
  },
  {
    question: "What platforms do you manage?",
    answer:
      "Google Ads management covers Search, Display, Shopping, and Performance Max. Meta Ads management covers Facebook and Instagram (feed, stories, reels). Both run in 95% of our accounts. We are also adding TikTok, LinkedIn, and Pinterest in 2026 — talk to us if you need one of those early and we will prioritize it for your launch.",
  },
];

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Audit",
    description: "We review your account history, wasted spend, conversion tracking, and audience signals. You get a written brief before we touch anything — the audit is yours to keep, even if you do not hire us.",
    meta: "Day 1-2",
  },
  {
    number: "2",
    title: "Strategy",
    description: "Campaign structure, keyword plan, audience plan, creative brief, and the metrics we will hold ourselves to. You approve everything in writing before launch — no surprises, no scope creep.",
    meta: "Day 3-5",
  },
  {
    number: "3",
    title: "Launch",
    description: "Ship campaigns, verify tracking, set bids, go live. First ads running within 7 days of kickoff on the direct plan. White-label partners launch in 14 days under their own brand.",
    meta: "Day 6-7",
  },
  {
    number: "4",
    title: "Refine",
    description: "Bid tweaks, negative keyword sweeps, A/B tests, audience refreshes. Every Friday: a written update on what changed and the numbers behind it. No black box, no waiting a month to find out.",
    meta: "Weekly",
  },
  {
    number: "5",
    title: "Report",
    description: "PDF report plus a call. Spend, conversions, CPA, ROAS, and the next 30-day plan. Plain English, no marketing jargon. You walk away knowing exactly what your money bought.",
    meta: "Monthly",
  },
];

export default function PaidAdsServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="Paid Ads · white-label + direct"
        heroTitle={
          <>
            Google + Meta ads.{" "}
            <em className="font-serif not-italic text-lime-400">Without the agency overhead.</em>
          </>
        }
        heroSubhead="Paid ads management for Google Ads and Meta Ads. White-label for agencies from $250/mo at 60-70% margin. Direct for businesses from $350/mo. Senior strategists, weekly refinements, no setup fees, cancel anytime."
        heroPrimaryCta={{ label: "Get a free audit", href: "/audit" }}
        heroSecondaryCta={{ label: "See pricing", href: "/pricing" }}
        heroTrustMicrocopy="$0 setup · 7-day onboarding · Cancel anytime"
        definition="AI-assisted paid ads management is the planning, building, and optimization of Google Ads and Meta Ads campaigns using AI for audience research, creative variation generation, automated bid management, and weekly budget reallocation. It delivers lower CPA and higher ROAS than manual management at a flat management fee."

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={
          <>
            The full paid media stack.{" "}
            <em className="font-serif not-italic text-lime-400">Both platforms.</em>
          </>
        }
        whatWeDoSubhead="One team running your Google Ads management, Meta Ads management, and PPC management end-to-end. Strategy, research, creative, bidding, A/B testing, and reporting — all under one roof, billed by a flat monthly management fee instead of a percentage of ad spend."
        features={[
          {
            title: "Campaign strategy",
            description: "Offer positioning, funnel mapping, channel mix, and a 90-day roadmap tied to revenue numbers — not vanity metrics.",
            icon: <Target className="h-5 w-5" />,
          },
          {
            title: "Keyword & audience research",
            description: "Search terms, intent layers, lookalikes, interest stacks, and exclusion lists — all built before launch, not after wasted spend.",
            icon: <Search className="h-5 w-5" />,
          },
          {
            title: "Ad copy & creative",
            description: "Headlines, descriptions, image briefs, video scripts. AI-drafted, human-edited, you approve before launch. We do not run unapproved copy.",
            icon: <PenSquare className="h-5 w-5" />,
          },
          {
            title: "Bid management",
            description: "Manual and automated bid strategies tuned weekly. Negative keywords, placements, and wasted-spend cuts every Friday.",
            icon: <TrendingUp className="h-5 w-5" />,
          },
          {
            title: "A/B testing",
            description: "Headlines, descriptions, audiences, creatives, landing pages. One variable at a time, real numbers, no guessing, no opinions.",
            icon: <FlaskConical className="h-5 w-5" />,
          },
          {
            title: "Reporting",
            description: "White-labeled monthly PDFs, real-time dashboards, plain-English commentary on what changed, why, and what we are doing next.",
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
        directSubhead="You pay the platforms directly for ad spend. We charge a flat monthly management fee. No percentage of spend, no hidden fees, no markup on media. The number you see is the number you pay."
        directTiers={[
          {
            tier: "Starter",
            price: "$350/mo",
            includes:
              "Ad spend <$5K, 1 platform (Google OR Meta), basic campaign setup, weekly bid tweaks, monthly report",
          },
          {
            tier: "Growth",
            price: "$700/mo",
            includes:
              "Ad spend $5-20K, both platforms, audience testing, creative variations, weekly refinements, biweekly call",
            popular: true,
          },
          {
            tier: "Scale",
            price: "$1,200/mo",
            includes:
              "Ad spend $20K+, both platforms, advanced audiences, landing page testing, dedicated strategist, weekly call",
          },
        ]}

        whiteLabelEyebrow="White-label pricing"
        whiteLabelTitle={
          <>
            For agencies.{" "}
            <em className="font-serif not-italic text-lime-400">60-70% margin.</em>
          </>
        }
        whiteLabelSubhead="Resell at $500-1,500/client/month. Your logo, your pricing, your client never sees us. We work for you, not around you."
        whiteLabelTiers={[
          {
            tier: "Starter",
            price: "$250/mo",
            includes: "Resell at $500+/client, 1 client per license",
          },
          {
            tier: "Growth",
            price: "$400/mo",
            includes:
              "Resell at $750-1,200/client, up to 5 clients, weekly white-label report",
            popular: true,
          },
          {
            tier: "Scale",
            price: "$750/mo",
            includes:
              "Resell at $1,200-1,500/client, 10+ clients, dedicated partner manager",
          },
        ]}

        hideFaq
        hideCta
      />

      {/* Direct pricing detail — what's in each tier + the upgrade path */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct plans, in detail</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            What you get.{" "}
            <em className="font-serif not-italic text-lime-400">And what scales with you.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Every plan covers the full paid ads management loop. Higher tiers add platforms, testing depth, creative volume, and senior attention. Move up when your spend does — no re-negotiation, no setup fee on the upgrade.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.08}>
          {/* Starter */}
          <StaggerItem>
            <div className="bento bento-lg h-full flex flex-col">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-xl font-semibold text-white">Direct · Starter</h3>
                <span className="pill text-[10px]">Ad spend &lt;$5K</span>
              </div>
              <p className="mt-1 text-2xl font-bold text-lime-400">$350/mo</p>
              <p className="mt-3 text-sm text-white/55">
                Best for: one channel, one offer, a clean test.
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-white/45 font-semibold">
                What we do under this tier
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>1 platform (Google Ads OR Meta Ads)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>1 campaign, up to 3 ad groups</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Keyword + audience research, 1 round</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>3 ad copy variations per ad group</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Weekly bid + budget adjustments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Monthly performance report (PDF)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Shared Slack channel for questions</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/8">
                <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                  Upgrade to Growth for:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>+ Both Google and Meta managed together</li>
                  <li>+ Multi-campaign structure, up to 6 ad groups</li>
                  <li>+ 6-8 ad copy variations per ad group</li>
                  <li>+ Audience testing across 3-5 segments</li>
                  <li>+ Weekly written updates with rationale</li>
                  <li>+ Biweekly 30-min strategy call</li>
                </ul>
              </div>
            </div>
          </StaggerItem>

          {/* Growth */}
          <StaggerItem>
            <div className="bento bento-lg h-full flex flex-col border-lime-400/30 bg-lime-400/4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-xl font-semibold text-white">Direct · Growth</h3>
                <span className="pill pill-accent text-[10px]">Most popular</span>
              </div>
              <p className="mt-1 text-2xl font-bold text-lime-400">$700/mo</p>
              <p className="mt-3 text-sm text-white/55">
                Best for: ad spend $5-20K, both channels, real testing.
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-white/45 font-semibold">
                What we do under this tier
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Both Google Ads AND Meta Ads</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Multi-campaign structure, up to 6 ad groups</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Audience testing across 3-5 segments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>6-8 ad copy variations per ad group</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Creative variations (images + copy)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Weekly written updates with reasoning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Biweekly 30-min strategy call</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/8">
                <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                  Upgrade to Scale for:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>+ Spend capacity above $20K/mo</li>
                  <li>+ Advanced audience modeling (LTV, value-based)</li>
                  <li>+ Landing page A/B testing built in</li>
                  <li>+ Dedicated senior strategist (1:1)</li>
                  <li>+ Weekly 30-min call, not biweekly</li>
                  <li>+ Custom dashboard feed into your stack</li>
                </ul>
              </div>
            </div>
          </StaggerItem>

          {/* Scale */}
          <StaggerItem>
            <div className="bento bento-lg h-full flex flex-col">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-xl font-semibold text-white">Direct · Scale</h3>
                <span className="pill text-[10px]">Ad spend $20K+</span>
              </div>
              <p className="mt-1 text-2xl font-bold text-lime-400">$1,200/mo</p>
              <p className="mt-3 text-sm text-white/55">
                Best for: high spend, full funnel, dedicated senior attention.
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-white/45 font-semibold">
                What we do under this tier
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Both Google Ads AND Meta Ads, full funnel</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Advanced audience modeling (LTV, value-based)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>8-12 ad copy variations per ad group</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Landing page A/B testing (we ship variants)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Dedicated senior strategist (1:1)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Weekly 30-min call + written weekly brief</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lime-400 mt-0.5">→</span>
                  <span>Custom dashboard feed into your stack</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/8">
                <p className="text-xs uppercase tracking-widest text-white/55 font-semibold">
                  No tier above this
                </p>
                <p className="mt-3 text-sm text-white/70">
                  If your spend crosses $100K/mo, we move you to a custom engagement with a partner manager and a 5-person pod.{" "}
                  <Link href="/contact" className="text-lime-400 hover:underline">
                    Talk to us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <ScrollReveal className="mt-12" delay={0.2}>
          <p className="text-sm text-white/55 text-center max-w-2xl mx-auto">
            Ad spend is billed separately, directly to Google or Meta. The management fee above is what you pay us. No setup fees, no percentage of spend, no hidden costs. See the{" "}
            <Link href="/pricing" className="text-lime-400 hover:underline">
              full pricing
            </Link>{" "}
            for bundle discounts when you pair paid ads with{" "}
            <Link href="/services/seo" className="text-lime-400 hover:underline">
              SEO
            </Link>
            .
          </p>
        </ScrollReveal>
      </Section>

      {/* White-label pricing detail — margin math */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label math</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The numbers.{" "}
            <em className="font-serif not-italic text-lime-400">Your margin, in plain English.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            You pay us a flat fee per client per month. You charge the client whatever you want. Everything ships under your logo — your client never sees us. Here is what that looks like at each tier, with the actual margin numbers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Tier</th>
                  <th className="px-5 py-4 font-medium">You pay us</th>
                  <th className="px-5 py-4 font-medium">You charge client</th>
                  <th className="px-5 py-4 font-medium">Your margin / client</th>
                  <th className="px-5 py-4 font-medium">Margin %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-5 py-4 text-white/85 font-medium">Starter</td>
                  <td className="px-5 py-4 text-white/70">$250/mo</td>
                  <td className="px-5 py-4 text-white/70">$500-800/mo</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">$250-550/mo</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">50-69%</td>
                </tr>
                <tr className="border-b border-white/5 bg-lime-400/5">
                  <td className="px-5 py-4 text-white/85 font-medium">
                    Growth <span className="pill pill-accent text-[10px] ml-1">Popular</span>
                  </td>
                  <td className="px-5 py-4 text-white/70">$400/mo</td>
                  <td className="px-5 py-4 text-white/70">$750-1,200/mo</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">$350-800/mo</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">47-67%</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-white/85 font-medium">Scale</td>
                  <td className="px-5 py-4 text-white/70">$750/mo</td>
                  <td className="px-5 py-4 text-white/70">$1,200-1,500/mo</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">$450-750/mo</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">38-50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.08}>
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                5 clients at Growth
              </p>
              <p className="mt-3 text-3xl font-bold text-white">$1,750-4,000/mo</p>
              <p className="mt-2 text-sm text-white/60">
                Margin on a 5-client book at the Growth tier, charged at the lower to upper end of typical agency pricing.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                10 clients at Growth
              </p>
              <p className="mt-3 text-3xl font-bold text-white">$3,500-8,000/mo</p>
              <p className="mt-2 text-sm text-white/60">
                Double the book, same per-client margin. We do not cap how many clients you can run through us.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
                Partner bundle (8 services)
              </p>
              <p className="mt-3 text-3xl font-bold text-white">From $200/client</p>
              <p className="mt-2 text-sm text-white/60">
                Bundle paid ads with{" "}
                <Link href="/services/seo" className="text-lime-400 hover:underline">
                  SEO
                </Link>
                ,{" "}
                <Link href="/services/branding" className="text-lime-400 hover:underline">
                  branding
                </Link>
                , and{" "}
                <Link href="/services/web-design" className="text-lime-400 hover:underline">
                  web design
                </Link>{" "}
                at lower per-client rates.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* Why us vs traditional agency */}
      <CostComparison
        eyebrow="Why us vs a traditional agency"
        title={
          <>
            Same work. <em className="font-serif not-italic text-lime-400">A different price tag.</em>
          </>
        }
        subhead="We are a senior paid media agency running AI + automation to deliver at a lower cost than a 30-person shop. The math is simple: less overhead, same deliverables, faster decisions, and a senior human on your account — not a junior AM with 30 logins."
        columns={["Omni Path", "Traditional agency"]}
        rows={[
          { label: "Direct management fee", values: ["$350-1,200/mo", "$1,500-3,000/mo"] },
          { label: "Markup on ad spend", values: ["None", "12-15%"] },
          { label: "Time to launch", values: ["7 days", "30-60 days"] },
          { label: "Clients per strategist", values: ["8-12", "20-30"] },
          { label: "Weekly refinements", values: ["Yes (written)", "Sometimes"] },
          { label: "Real human on your call", values: ["Yes, senior", "Junior AM, mostly"] },
        ]}
        highlightColumn={0}
        caption="Pricing based on management fees for a single business spending $5-20K/mo in ad spend. White-label pricing for agencies on the partner program."
      />

      {/* What's in every plan */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&apos;s in every plan</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Non-negotiables.{" "}
            <em className="font-serif not-italic text-lime-400">In every tier.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Whether you are on Starter at $350/mo or Scale at $1,200/mo, these are the baseline you get. We do not strip them out to hit a cheaper headline number. Every client gets the same floor.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Monthly performance report</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                PDF with spend, conversions, CPA, ROAS, top movers, and the next 30-day plan. Plain English, not a screenshot dump.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Megaphone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Dedicated Slack channel</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Direct line to the team running your account. No ticket queue, no waiting two business days for a reply.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Conversion tracking audit</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                We verify GA4, pixels, server-side events, and offline conversions before we touch any campaign. Numbers must be honest.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Senior human oversight</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                AI drafts, humans approve. Every campaign is reviewed by a senior strategist before launch and at every monthly checkpoint.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">No lock-in contract</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Month-to-month. Cancel with 30 days notice, no penalty. We keep clients by delivering, not by trapping them in paperwork.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">No setup fees, ever</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                $0 onboarding, $0 hidden costs, $0 percentage of ad spend. The monthly management fee is the only line item on our invoice.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* Behind the scenes — how we ship paid ads so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            How we ship paid ads <em className="font-serif not-italic text-lime-400">so fast.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            The paid ads stack we run on the back end, the tools that ship your campaigns, the testing cadence, and what it means for your turnaround, your cost, and the volume of creative we can run each week.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Google Ads API + Meta Marketing API</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Direct bid automation through the platforms&apos; native APIs. No manual dashboard, no copy-paste, no waiting on a junior AM to push changes next week. Bid changes ship in minutes, not days, and the audit log is always on.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">GPT-4 + custom prompts</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                20+ ad copy variations per ad group, generated in minutes, A/B tested automatically, with senior human review and approval before any copy ships. We move faster because the first draft is free, and the senior edits only take minutes.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Lookalike modeling + custom audiences</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Audience expansion runs daily, not monthly. We refresh seed lists, exclusion lists, and interest stacks on a daily cron tied to your best customers. Your top of funnel never goes stale because the audience model is always running.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Automated budget reallocation</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Under-performing campaigns lose budget in under 24 hours. Top performers scale the same day. We do not let a bad week bleed into a bad month on your watch — the system pulls the lever the moment the numbers drop.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Camera className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Puppeteer screenshots</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Every landing page variant gets screenshotted and reviewed for compliance, broken forms, broken pixels, and layout regressions before any spend goes through. Catches what humans miss in the QA pass and saves your budget from a bad launch.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Looker Studio dashboards</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Real-time ROAS, CPA, and conversion tracking, white-labeled with your logo, pulled straight from the platform APIs. No PDF exports, no waiting on month-end. You see the same numbers we see, the same day we see them.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <ScrollReveal className="mt-10" delay={0.1}>
          <div className="bento bento-lg border-lime-400/30 bg-lime-400/4">
            <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
              What this means for you
            </p>
            <ul className="mt-4 space-y-3 text-base text-white/85 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-lime-400 mt-1 shrink-0">→</span>
                <span>Bid adjustments every 6 hours, not weekly — no wasted spend sitting in bad campaigns over the weekend.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400 mt-1 shrink-0">→</span>
                <span>20+ creative variants per ad group, always testing — your winning message gets more budget, the losers get cut.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400 mt-1 shrink-0">→</span>
                <span>5 hours of senior human strategy per client per month (vs 25-30 at a traditional agency) — automation does the rest.</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8" delay={0.15}>
          <p className="text-base text-white/75 max-w-3xl mx-auto text-center leading-relaxed">
            Same deliverables as a 30-person shop. Lower cost because the rest is automated, not because we cut corners on strategy, creative, or review. Most agencies charge you for the junior hours. We charge you for the senior strategy and the automation that handles the rest — which is exactly why Starter is $350/mo and Scale is $1,200/mo instead of $500-1,800.
          </p>
        </ScrollReveal>
      </Section>

      {/* The process */}
      <ProcessSteps
        eyebrow="The process"
        title={
          <>
            From signup to live ads in <em className="font-serif not-italic text-lime-400">7 days.</em>
          </>
        }
        subhead="Same playbook, every client. We do not reinvent the wheel for each account — we ship a tested process and customize the inputs. Most teams finish onboarding in a single working week."
        steps={PROCESS_STEPS}
        totalNote="Average launch window: 7 days for direct, 14 days for white-label. From kickoff to first conversion event tracked: 9-11 days."
      />

      <TldrBox
        items={[
          "Paid ads management for Google Ads + Meta Ads, direct from $350/mo, white-label for agencies from $250/mo.",
          "Flat management fee, no percentage of ad spend, no setup fees, no lock-in. 7-day onboarding, senior strategists on every account.",
          "60-70% margin on the white-label program. Same deliverables as a $1,500-3,000/mo traditional agency, lower overhead, faster decisions.",
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Paid ads <em className="font-serif not-italic text-lime-400">questions.</em>
          </>
        }
        items={paidAdsFaqLocal}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            Ready to <em className="font-serif not-italic text-lime-400">scale without the overhead?</em>
          </>
        }
        subhead="Get a free audit of your current campaigns, or book a 15-min strategy call with a senior strategist. No sales team, no SDR, no follow-up spam."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a call", href: "/contact" }}
      />

      <Script
        id="ld-service-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI Paid Ads Management",
              description:
                "AI-assisted paid ads management for Google + Meta. White-label from $250/mo. Direct from $350/mo. 60-70% margin. No setup fees. 7-day onboarding.",
              path: "/services/paid-ads",
              serviceType: "AI Paid Media Management",
              priceRange: "$250-$1200",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(paidAdsFaqLocal)) }}
      />
      <Script
        id="ld-bc-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Paid Ads", url: "/services/paid-ads" },
            ])
          ),
        }}
      />
    </>
  );
}
