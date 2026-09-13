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
import { getDirectService, WL_OTHER_SERVICES, WL_PRICE_RANGE } from "@/content/pricing";
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
  Check,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI TikTok + LinkedIn Ads · From $400/mo Direct · White-Label $150-250/client",
  description:
    "AI-assisted TikTok and LinkedIn ads management. B2B lead gen on LinkedIn, Gen Z reach on TikTok. Direct Bronze $400 / Silver $600 / Gold $900. White-label $150-250 / client / mo.",
  path: "/services/tiktok-linkedin-ads",
});

/* ============================================================
   Direct pricing — read from central config
   ============================================================ */
const directService = getDirectService("tiktok-linkedin-ads")!;

interface DirectTierRow {
  name: string;
  price: string;
  popular?: boolean;
  includes: string[];
  upgrade?: string;
  cta: { label: string; href: string };
}

const directTiers: DirectTierRow[] = directService.tiers.map((t, i) => ({
  name: t.id,
  price: t.price,
  popular: t.popular,
  includes: t.features,
  upgrade:
    i < directService.tiers.length - 1
      ? `Upgrade to ${directService.tiers[i + 1].id} for: ${directService.tiers[i + 1]!.features.slice(0, 3).join(" + ")}.`
      : undefined,
  cta: { label: `Start with ${t.id}`, href: "/contact" },
}));

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

const WL_ROW = WL_OTHER_SERVICES.find((s) => s.id === "paid-ads")!; // closest match — TikTok/LinkedIn sits under paid social

export default function TikTokLinkedInServicePage() {
  return (
    <>
      <Hero
        eyebrow="Two platforms. Two audiences."
        title={
          <>
            Reach Gen Z on TikTok.{" "}
            <em className="font-serif not-italic text-blue-600">
              Reach decision-makers on LinkedIn.
            </em>
          </>
        }
        subhead="Run TikTok and LinkedIn ads with one team. Direct management for businesses (Bronze $400 / Silver $600 / Gold $900). White-label for agencies ($150-250 / client / mo). Same strategists, same process, real numbers."
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
            <em className="font-serif not-italic text-blue-600">One team.</em>
          </h2>
          <p className="mt-5 text-lg text-neutral-900/70 leading-relaxed">
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
                "TikTok Spark Ads to amplify organic posts, plus UGC creator sourcing on Gold tier for fresh creative weekly.",
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
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Direct pricing — single Bronze/Silver/Gold for both platforms */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing · TikTok + LinkedIn Ads</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Three tiers.{" "}
            <em className="font-serif not-italic text-blue-600">No surprises.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Flat management fee per platform. Pick one to start, or run both on the same Bronze / Silver / Gold structure. Ad spend is billed separately to TikTok and LinkedIn at the platform minimums below. No revenue share, no percentage of spend.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-10 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {directTiers.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className={
                  t.popular
                    ? "bento h-full flex flex-col border-blue-600/40 bg-blue-600/4"
                    : "bento h-full flex flex-col"
                }
              >
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Direct · {t.name}
                    {t.popular && (
                      <span className="ml-2 pill pill-accent text-[10px]">
                        Most popular
                      </span>
                    )}
                  </h3>
                  <span className="text-sm font-bold text-blue-600">
                    {t.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-900/55">
                  Management fee per platform. Ad spend billed separately.
                </p>
                <p className="mt-3 text-sm font-semibold text-neutral-900/85">
                  What&rsquo;s included:
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-neutral-900/75">
                  {t.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-blue-600 mt-1">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                {t.upgrade && (
                  <div className="mt-4 rounded-lg border border-neutral-200/8 bg-neutral-900/2 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Upgrade
                    </p>
                    <p className="mt-1.5 text-xs text-neutral-900/70 leading-relaxed">
                      {t.upgrade}
                    </p>
                  </div>
                )}
                <div className="mt-auto pt-6">
                  <Link
                    href={t.cta.href}
                    className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-[#0A0A0F] hover:bg-blue-300 transition-colors"
                  >
                    {t.cta.label}
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-center text-xs text-neutral-900/45">
          Min ad spend: TikTok $1,500/mo Bronze · $3,000/mo Silver · $5,000/mo Gold.
          LinkedIn $3,000/mo Bronze · $5,000/mo Silver · $10,000/mo Gold. Spend goes directly to each platform.
        </p>
      </Section>

      {/* White-label pricing — standard $150-250 / client / mo */}
      <Section>
        <div className="rounded-3xl border border-blue-600/25 bg-blue-600/[0.04] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <Eyebrow className="mb-4">White-label pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                For agencies.{" "}
                <em className="font-serif not-italic text-blue-600">
                  60-70% margin.
                </em>
              </h2>
              <p className="mt-4 text-neutral-900/75 leading-relaxed">
                {WL_ROW.description} One flat fee, all-in. Resell at $1,000-1,800/mo per client and keep 60-70% of the recurring revenue. We work under your brand, your dashboard, your client-facing deliverables. Your client never sees us.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-neutral-900/80">
                {[
                  `${WL_PRICE_RANGE} all-in — no setup fees, no add-ons`,
                  "Resell at $1,000-1,800/mo for 60-70% margin",
                  "White-labeled reports, dashboards, deliverables",
                  "TikTok, LinkedIn, Meta, or your stack",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/for-agencies"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-[#0A0A0F] hover:bg-blue-300 transition-colors"
                >
                  See agency partner program
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200/15 bg-neutral-900/5 px-5 py-2.5 text-sm font-medium text-neutral-900/85 hover:bg-neutral-900/10 transition-colors"
                >
                  See full pricing
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-900/55">
                The margin math
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-neutral-900/70">Your cost (us)</span>
                  <span className="text-base font-semibold text-neutral-900">$200/mo</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-neutral-900/70">You charge client</span>
                  <span className="text-base font-semibold text-blue-600">$1,200/mo</span>
                </div>
                <div className="border-t border-neutral-200/10 pt-3 flex items-baseline justify-between">
                  <span className="text-sm text-neutral-900/70">Your margin</span>
                  <span className="text-xl font-bold text-blue-600">$1,000/mo</span>
                </div>
                <p className="text-xs text-neutral-900/55 pt-1">
                  10 clients = $10,000/mo recurring. 83% margin before you touch a deliverable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* TikTok vs LinkedIn */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">TikTok vs LinkedIn</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Different platforms.{" "}
            <em className="font-serif not-italic text-blue-600">
              Different jobs.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Use both. They don&apos;t compete. TikTok and LinkedIn ads sit at
            opposite ends of the paid social funnel, and the strongest
            strategies stack them.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <div className="bento bento-lg h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                <Video className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-neutral-900">
                TikTok = top of funnel, Gen Z, consumer
              </h3>
              <p className="mt-2 text-neutral-900/65 leading-relaxed">
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
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-neutral-900">
                LinkedIn = bottom of funnel, B2B, decision-makers
              </h3>
              <p className="mt-2 text-neutral-900/65 leading-relaxed">
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
            <em className="font-serif not-italic text-blue-600">
              Every tier.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
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
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
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
            <em className="font-serif not-italic text-blue-600">
              One automated machine.
            </em>
          </h2>
          <p className="mt-5 text-lg text-neutral-900/70 leading-relaxed">
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
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {t.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <ScrollReveal delay={0.1} className="mt-12 max-w-3xl">
          <div className="bento bento-lg border-blue-600/25 bg-blue-600/4">
            <h3 className="text-2xl font-semibold text-neutral-900">
              What this means for you
            </h3>
            <ul className="mt-5 space-y-2.5 text-base text-neutral-900/80 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-blue-600 mt-1">·</span>
                <span>
                  20+ ad variants per campaign, always testing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 mt-1">·</span>
                <span>Bid adjustments every 4 hours, not weekly.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 mt-1">·</span>
                <span>
                  5 hours of media buyer time per client per month (vs 30+
                  at a traditional agency).
                </span>
              </li>
            </ul>
            <p className="mt-6 text-base text-neutral-900/70 leading-relaxed">
              Less time on the work means lower management fees. That&apos;s
              how Bronze lands at $400/mo per platform — while traditional agencies charge $3,000-6,000/mo
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
            <em className="font-serif not-italic text-blue-600">7 days.</em>
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

      {/* Internal cross-link to related services */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pair it with</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            TikTok and LinkedIn ads work{" "}
            <em className="font-serif not-italic text-blue-600">
              even better stacked.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Most clients running TikTok and LinkedIn ads also need Google
            and Meta in the mix. Bundle paid social with our{" "}
            <Link
              href="/services/paid-ads"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-300"
            >
              Google and Meta ads management
            </Link>{" "}
            for full-funnel coverage, or layer in organic{" "}
            <Link
              href="/services/social-media"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-300"
            >
              social media content
            </Link>{" "}
            to feed your Spark Ads and retargeting pools with real assets.
          </p>
        </ScrollReveal>
      </Section>

      <TldrBox
        items={[
          `TikTok + LinkedIn ads from $400/mo mgmt per platform. Direct Bronze / Silver / Gold.`,
          `White-label ${WL_PRICE_RANGE}. Resell at 2-3x for 60-70% margin per client.`,
          "7-day onboarding, monthly reports, weekly tuning, no setup fees. Cancel anytime with 30 days notice.",
        ]}
      />

      {/* FAQ */}
      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            TikTok and LinkedIn ads,{" "}
            <em className="font-serif not-italic text-blue-600">honestly.</em>
          </>
        }
        subhead="The questions every client asks in the first call."
        items={tiktokLinkedInFaq}
      />

      {/* Final CTA */}
      <CtaSection
        variant="panel"
        title={
          <>
            Ready to run TikTok and LinkedIn ads{" "}
            <em className="font-serif not-italic text-blue-600">
              that convert?
            </em>
          </>
        }
        subhead="Book a 15-min strategy call. We&apos;ll scope your goals, your audience, and the right platform mix. No pitch deck, no obligation."
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Script
        id="ld-service-ttli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI TikTok + LinkedIn Ads Management",
              description:
                "AI-assisted TikTok and LinkedIn ads management. B2B lead gen on LinkedIn, Gen Z reach on TikTok. Direct Bronze $400 / Silver $600 / Gold $900. White-label $150-250 / client / mo.",
              path: "/services/tiktok-linkedin-ads",
              serviceType: "AI Paid Social Advertising",
              priceRange: "$400-$900",
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
