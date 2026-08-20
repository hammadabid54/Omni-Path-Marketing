import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { ServiceDefinition } from "@/components/sections/service-definition";
import {
  buildMetadata,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { tiktokLinkedInFaq } from "@/content/faqs";
import {
  Video,
  Briefcase,
  Target,
  Sparkles,
  PenSquare,
  FlaskConical,
  Users,
  BarChart3,
  Bot,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI TikTok + LinkedIn Ads Management | From $299/mo White-Label",
  description:
    "AI-assisted TikTok and LinkedIn ads management. B2B lead gen on LinkedIn, Gen Z reach on TikTok. White-label from $299/mo. Direct from $349/mo.",
  path: "/services/tiktok-linkedin-ads",
});

const tiktokDirectTiers = [
  {
    tier: "Starter",
    price: "$349/mo",
    popular: false,
    includes: [
      "1 ad group with 3-5 creative variations",
      "Basic audience testing and interest stacks",
      "In-feed video + Spark Ads setup",
      "Pixel and event tracking on TikTok Ads Manager",
      "Monthly performance report",
    ],
    upgrade:
      "Upgrade to Growth for 3 ad groups, weekly tuning, advanced lookalikes, and Spark Ads amplification.",
  },
  {
    tier: "Growth",
    price: "$699/mo",
    popular: true,
    includes: [
      "3 ad groups with 8-12 creative variations",
      "Spark Ads, in-feed, and TopView rotation",
      "Advanced lookalikes and retargeting segments",
      "Weekly bid, budget, and creative tuning",
      "Bi-weekly performance call",
    ],
    upgrade:
      "Upgrade to Scale for multi-campaign structure, UGC creator sourcing, A/B testing, and a dedicated strategist.",
  },
  {
    tier: "Scale",
    price: "$999/mo",
    popular: false,
    includes: [
      "Multi-campaign structure across audiences",
      "UGC creator sourcing and brief management",
      "Continuous A/B testing on hooks and CTAs",
      "Dedicated TikTok Ads strategist",
      "Weekly call + monthly creative review",
    ],
    upgrade:
      "Already at the top. Add LinkedIn Ads for a full-funnel TikTok awareness to LinkedIn B2B conversion path.",
  },
];

const linkedinDirectTiers = [
  {
    tier: "Starter",
    price: "$599/mo",
    popular: false,
    includes: [
      "1 Sponsored Content campaign",
      "Basic targeting by job title, industry, and seniority",
      "Lead Gen Forms (no landing page required)",
      "Pixel and conversion tracking setup",
      "Monthly performance report",
    ],
    upgrade:
      "Upgrade to Growth for Sponsored Content + InMail + Conversation Ads, ABM targeting, and lead nurturing.",
  },
  {
    tier: "Growth",
    price: "$999/mo",
    popular: true,
    includes: [
      "Sponsored Content, InMail, and Conversation Ads",
      "Account-based marketing (ABM) audience lists",
      "Lead form + landing page split testing",
      "Lead nurturing handoff to your CRM",
      "Bi-weekly performance call",
    ],
    upgrade:
      "Upgrade to Scale for full-funnel campaign structure, advanced ABM, and a dedicated B2B strategist.",
  },
  {
    tier: "Scale",
    price: "$1,699/mo",
    popular: false,
    includes: [
      "Full-funnel: awareness, consideration, conversion",
      "Account-based marketing at scale",
      "Multi-touch attribution and pipeline reporting",
      "Dedicated B2B LinkedIn strategist",
      "Weekly call + quarterly business review",
    ],
    upgrade:
      "Already at the top. Pair with TikTok Ads for top-of-funnel awareness feeding LinkedIn retargeting.",
  },
];

const whiteLabelRows = [
  {
    platform: "TikTok (white-label)",
    price: "$299/mo",
    resell: "Resell at $600-900/mo",
    margin: "60-70% margin",
  },
  {
    platform: "LinkedIn (white-label)",
    price: "$499/mo",
    resell: "Resell at $999-1,500/mo",
    margin: "50-67% margin",
  },
];

const behindTheScenesTools = [
  {
    title: "TikTok Ads API + LinkedIn Campaign Manager API",
    description:
      "Direct bid automation through the official APIs. No manual UI work. Bids refresh daily, budgets rebalance every four hours.",
    icon: <Bot className="h-5 w-5" />,
  },
  {
    title: "GPT-4 + GPT-image-1 creative engine",
    description:
      "20+ creative variations per ad, generated in minutes. Hooks, copy, and visuals ship in a single pass, ready for review.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Spark Ads + UGC creator sourcing",
    description:
      "Automated creator outreach across 50+ marketplaces. Spark Ads amplify the best organic posts without extra spend.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Audience expansion automation",
    description:
      "Lookalike seeds and interest expansion run daily. New audiences ship every week, not every quarter.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Puppeteer screenshot testing",
    description:
      "Every ad variant gets preview-tested on mobile before launch. Catches broken creative before it burns spend.",
    icon: <FlaskConical className="h-5 w-5" />,
  },
  {
    title: "Looker Studio dashboards",
    description:
      "Real-time ROAS by platform, by audience, by creative. You see the numbers the moment they move.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

export default function TikTokLinkedInServicePage() {
  return (
    <>
      <Hero
        eyebrow="Two platforms. Two audiences."
        title={
          <>
            Reach Gen Z on TikTok.{" "}
            <em className="font-serif not-italic text-lime-400">
              Reach decision-makers on LinkedIn.
            </em>
          </>
        }
        subhead="Run TikTok and LinkedIn ads with one team. Direct management for businesses, white-label for agencies. From $299/mo. Same strategists, same process, real numbers."
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        trustMicrocopy="$0 setup · 7-day onboarding · Cancel anytime"
      />

      <ServiceDefinition
        text="AI-assisted TikTok and LinkedIn ads management is the planning, creative production, audience targeting, and bid optimization of paid social campaigns on both platforms. LinkedIn delivers B2B lead gen; TikTok delivers Gen Z reach and brand awareness. Same senior team, flat management fee, white-labeled under the agency's brand."
      />

      <Section>
        <ScrollReveal className="max-w-3xl">
          <Eyebrow className="mb-4">What we do</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Two paid social channels.{" "}
            <em className="font-serif not-italic text-lime-400">One team.</em>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            TikTok and LinkedIn ads are the two highest-intent paid social
            platforms in 2026. We handle creative, targeting, campaign
            structure, tuning, and reporting. You approve every asset before
            it goes live. Built for SMBs and agencies that need paid social
            that converts, not vanity metrics.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {[
            {
              title: "Creative production",
              description:
                "Ad copy, image briefs, UGC scripts for TikTok, carousel and video scripts for LinkedIn. You approve every asset.",
              icon: <PenSquare className="h-5 w-5" />,
            },
            {
              title: "Audience targeting",
              description:
                "TikTok: interests, behaviors, lookalikes, custom segments. LinkedIn: job title, company, seniority, ABM lists.",
              icon: <Target className="h-5 w-5" />,
            },
            {
              title: "Campaign setup",
              description:
                "Pixel, events, conversion API, lead forms, retargeting pools. Configured once, reused across campaigns.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "A/B testing",
              description:
                "Hook tests, creative tests, audience tests, landing page tests. Documented in a shared testing roadmap.",
              icon: <FlaskConical className="h-5 w-5" />,
            },
            {
              title: "Spark Ads and UGC",
              description:
                "TikTok Spark Ads to amplify organic posts, plus UGC creator sourcing on Scale tier for fresh creative weekly.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "Reporting",
              description:
                "Monthly PDF report, real-time dashboard, and a shared Slack channel. White-label reports ship with your logo.",
              icon: <BarChart3 className="h-5 w-5" />,
            },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* TikTok direct pricing */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">TikTok Ads · Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Three tiers.{" "}
            <em className="font-serif not-italic text-lime-400">No surprises.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Flat management fee. Ad spend billed separately to TikTok Ads
            Manager at the platform minimums below. No revenue share, no
            percentage of spend.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-10 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {tiktokDirectTiers.map((t) => (
            <StaggerItem key={t.tier}>
              <div
                className={
                  t.popular
                    ? "bento h-full border-lime-400/30 bg-lime-400/4"
                    : "bento h-full"
                }
              >
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="text-base font-semibold text-white">
                    {t.tier}
                    {t.popular && (
                      <span className="ml-2 pill pill-accent text-[10px]">
                        Popular
                      </span>
                    )}
                  </h3>
                  <span className="text-sm font-bold text-lime-400">
                    {t.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-white/55">
                  Management fee. Ad spend billed separately.
                </p>
                <p className="mt-3 text-sm font-semibold text-white/85">
                  What&apos;s included:
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-white/75">
                  {t.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-lime-400 mt-1">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg border border-white/8 bg-white/2 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-lime-400">
                    Upgrade to{" "}
                    {t.tier === "Starter"
                      ? "Growth"
                      : t.tier === "Growth"
                        ? "Scale"
                        : "Scale +"}{" "}
                    for:
                  </p>
                  <p className="mt-1.5 text-xs text-white/70 leading-relaxed">
                    {t.upgrade}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-center text-xs text-white/45">
          Min ad spend: $1,500/mo Starter · $3,000/mo Growth · $5,000/mo Scale.
          Spend goes directly to TikTok.
        </p>
      </Section>

      {/* LinkedIn direct pricing */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">LinkedIn Ads · Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            B2B paid social.{" "}
            <em className="font-serif not-italic text-lime-400">
              Built for pipeline.
            </em>
          </h2>
          <p className="mt-4 text-white/70">
            LinkedIn runs a higher CPM than other paid social, which is why
            the floors are higher. The trade-off: you can target a CFO at a
            500-person SaaS company by job title, industry, and seniority.
            No other paid social channel gives you that.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-10 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {linkedinDirectTiers.map((t) => (
            <StaggerItem key={t.tier}>
              <div
                className={
                  t.popular
                    ? "bento h-full border-lime-400/30 bg-lime-400/4"
                    : "bento h-full"
                }
              >
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="text-base font-semibold text-white">
                    {t.tier}
                    {t.popular && (
                      <span className="ml-2 pill pill-accent text-[10px]">
                        Popular
                      </span>
                    )}
                  </h3>
                  <span className="text-sm font-bold text-lime-400">
                    {t.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-white/55">
                  Management fee. Ad spend billed separately.
                </p>
                <p className="mt-3 text-sm font-semibold text-white/85">
                  What&apos;s included:
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-white/75">
                  {t.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-lime-400 mt-1">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg border border-white/8 bg-white/2 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-lime-400">
                    Upgrade to{" "}
                    {t.tier === "Starter"
                      ? "Growth"
                      : t.tier === "Growth"
                        ? "Scale"
                        : "Scale +"}{" "}
                    for:
                  </p>
                  <p className="mt-1.5 text-xs text-white/70 leading-relaxed">
                    {t.upgrade}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-center text-xs text-white/45">
          Min ad spend: $3,000/mo Starter · $5,000/mo Growth · $10,000/mo
          Scale. Spend goes directly to LinkedIn.
        </p>
      </Section>

      {/* White-label pricing */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For agencies.{" "}
            <em className="font-serif not-italic text-lime-400">
              60-70% margin.
            </em>
          </h2>
          <p className="mt-4 text-white/70">
            Flat management fee. Resell at 2-3x. Deliver reports under your
            logo. Your client never sees us. Built for agencies running paid
            social for SMB clients who don&apos;t have the budget for a
            full-service agency at $2,000-5,000/mo.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Platform</th>
                  <th className="px-5 py-4 font-medium">Our fee</th>
                  <th className="px-5 py-4 font-medium">Resell at</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                </tr>
              </thead>
              <tbody>
                {whiteLabelRows.map((row) => (
                  <tr
                    key={row.platform}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {row.platform}
                    </td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">
                      {row.price}
                    </td>
                    <td className="px-5 py-4 text-white/70">{row.resell}</td>
                    <td className="px-5 py-4 text-white/70">{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-white/55">
            The math: TikTok costs you $299/mo. Charge the client $600-900/mo.
            That&apos;s $301-601/mo in pure margin, per client, per month.
            Five clients = $1,500-3,000/mo recurring. See the full breakdown
            on our{" "}
            <Link
              href="/pricing"
              className="text-lime-400 underline underline-offset-2 hover:text-lime-300"
            >
              pricing page
            </Link>
            .
          </p>
        </ScrollReveal>
      </Section>

      {/* TikTok vs LinkedIn */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">TikTok vs LinkedIn</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Different platforms.{" "}
            <em className="font-serif not-italic text-lime-400">
              Different jobs.
            </em>
          </h2>
          <p className="mt-4 text-white/70">
            Use both. They don&apos;t compete. TikTok and LinkedIn ads sit at
            opposite ends of the paid social funnel, and the strongest
            strategies stack them.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <div className="bento bento-lg h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Video className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                TikTok = top of funnel, Gen Z, consumer
              </h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                TikTok is where you build awareness, ship UGC creative, and
                reach Gen Z and younger millennials in the same scroll. Cheap
                CPMs, fast creative turnaround, native-feeling ads. Best for
                e-commerce, DTC, consumer apps, and any brand that needs
                top-of-funnel attention from a younger audience.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bento bento-lg h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                LinkedIn = bottom of funnel, B2B, decision-makers
              </h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                LinkedIn is where you reach the people who sign contracts.
                Target by job title, company, seniority, industry, and
                company size — no other paid social channel gives you that.
                Higher CPMs, but every impression hits a real decision-maker.
                Best for B2B advertising, SaaS, professional services, and
                LinkedIn lead gen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* What's in every plan */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&apos;s in every plan</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Same foundation.{" "}
            <em className="font-serif not-italic text-lime-400">
              Every tier.
            </em>
          </h2>
          <p className="mt-4 text-white/70">
            Every plan ships with the same core deliverables, regardless of
            tier. Higher tiers add volume and dedicated support, but never
            skip the basics.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-10 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {[
            {
              title: "Creative brief",
              description:
                "Every campaign starts with a written creative brief: angles, hooks, audience, format, KPIs. You approve before we cut a single asset.",
              icon: <PenSquare className="h-5 w-5" />,
            },
            {
              title: "Audience research",
              description:
                "Interest stacks, lookalike seeds, ABM list build, competitor audience teardown. Documented in a shared research doc.",
              icon: <Users className="h-5 w-5" />,
            },
            {
              title: "Monthly report",
              description:
                "Spend, CPM, CTR, CPC, conversions, cost per lead, and pipeline impact. White-labeled for agencies with your logo.",
              icon: <BarChart3 className="h-5 w-5" />,
            },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Behind the scenes — how we ship TikTok + LinkedIn ads so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Two platforms.{" "}
            <em className="font-serif not-italic text-lime-400">
              One automated machine.
            </em>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            We move fast on TikTok and LinkedIn because most of the work runs
            through automation — not extra billable hours. Here&apos;s the
            stack that ships every campaign.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {behindTheScenesTools.map((t) => (
            <StaggerItem key={t.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {t.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <ScrollReveal delay={0.1} className="mt-12 max-w-3xl">
          <div className="bento bento-lg border-lime-400/25 bg-lime-400/4">
            <h3 className="text-2xl font-semibold text-white">
              What this means for you
            </h3>
            <ul className="mt-5 space-y-2.5 text-base text-white/80 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-lime-400 mt-1">·</span>
                <span>
                  20+ ad variants per campaign, always testing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400 mt-1">·</span>
                <span>Bid adjustments every 4 hours, not weekly.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400 mt-1">·</span>
                <span>
                  5 hours of media buyer time per client per month (vs 30+
                  at a traditional agency).
                </span>
              </li>
            </ul>
            <p className="mt-6 text-base text-white/70 leading-relaxed">
              Less time on the work means lower management fees. That&apos;s
              how TikTok Starter lands at $349/mo and LinkedIn Scale caps at
              $1,699/mo — while traditional agencies charge $3,000-6,000/mo
              for the same scope of work. The automation is your discount.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Process */}
      <ProcessSteps
        eyebrow="The process"
        title={
          <>
            From kickoff to live campaign in{" "}
            <em className="font-serif not-italic text-lime-400">7 days.</em>
          </>
        }
        subhead="Same playbook for TikTok and LinkedIn. Faster for white-label clients because we already have the templates."
        steps={[
          {
            number: "1",
            title: "Strategy call",
            description:
              "30 minutes. We cover goals, audience, budget, KPIs. Direct clients get a written scope within 24 hours.",
            meta: "Day 1",
          },
          {
            number: "2",
            title: "Creative brief",
            description:
              "Angles, hooks, formats, and audience targeting. You approve before we cut any assets. No surprises at launch.",
            meta: "Day 2-3",
          },
          {
            number: "3",
            title: "Build + track",
            description:
              "Pixel, conversion API, lead forms, audiences. White-label setup syncs with your brand assets and reporting first.",
            meta: "Day 4-5",
          },
          {
            number: "4",
            title: "Launch + iterate",
            description:
              "Campaigns go live. We monitor daily, ship improvements weekly, and report monthly. Higher tiers add dedicated calls and review cadence.",
            meta: "Day 7+",
          },
        ]}
        totalNote="White-label clients: 14 days total to first live deliverable. Direct clients: 7 days from kickoff to live campaign."
      />

      {/* FAQ */}
      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            TikTok and LinkedIn ads,{" "}
            <em className="font-serif not-italic text-lime-400">honestly.</em>
          </>
        }
        subhead="The questions every client asks in the first call."
        items={tiktokLinkedInFaq}
      />

      {/* Internal cross-link to related services */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pair it with</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            TikTok and LinkedIn ads work{" "}
            <em className="font-serif not-italic text-lime-400">
              even better stacked.
            </em>
          </h2>
          <p className="mt-4 text-white/70">
            Most clients running TikTok and LinkedIn ads also need Google
            and Meta in the mix. Bundle paid social with our{" "}
            <Link
              href="/services/paid-ads"
              className="text-lime-400 underline underline-offset-2 hover:text-lime-300"
            >
              Google and Meta ads management
            </Link>{" "}
            for full-funnel coverage, or layer in organic{" "}
            <Link
              href="/services/social-media"
              className="text-lime-400 underline underline-offset-2 hover:text-lime-300"
            >
              social media content
            </Link>{" "}
            to feed your Spark Ads and retargeting pools with real assets.
          </p>
        </ScrollReveal>
      </Section>

      {/* Final CTA */}
      <CtaSection
        variant="panel"
        title={
          <>
            Ready to run TikTok and LinkedIn ads{" "}
            <em className="font-serif not-italic text-lime-400">
              that convert?
            </em>
          </>
        }
        subhead="Book a 15-min strategy call. We&apos;ll scope your goals, your audience, and the right platform mix. No pitch deck, no obligation."
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <TldrBox
        items={[
          "TikTok Ads from $349/mo mgmt. LinkedIn Ads from $599/mo mgmt. Ad spend billed separately to the platforms.",
          "White-label from $299/mo (TikTok) and $499/mo (LinkedIn). Resell at 2-3x for 60-70% margin per client.",
          "7-day onboarding, monthly reports, weekly tuning, no setup fees. Cancel anytime with 30 days notice.",
        ]}
      />

      <Script
        id="ld-service-ttli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI TikTok + LinkedIn Ads Management",
              description:
                "AI-assisted TikTok and LinkedIn ads management. B2B lead gen on LinkedIn, Gen Z reach on TikTok. White-label from $299/mo. Direct from $349/mo.",
              path: "/services/tiktok-linkedin-ads",
              serviceType: "AI Paid Social Advertising",
              priceRange: "$299-$1699",
            }),
          ),
        }}
      />
      <Script
        id="ld-faq-ttli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(tiktokLinkedInFaq)),
        }}
      />
      <Script
        id="ld-bc-ttli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              {
                name: "TikTok + LinkedIn Ads",
                url: "/services/tiktok-linkedin-ads",
              },
            ]),
          ),
        }}
      />
    </>
  );
}
