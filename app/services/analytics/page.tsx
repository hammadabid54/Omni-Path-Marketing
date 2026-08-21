import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { ServiceDefinition } from "@/components/sections/service-definition";
import { FaqSection } from "@/components/sections/faq";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import type { FaqItem } from "@/lib/seo";
import {
  LayoutDashboard,
  Settings2,
  GitBranch,
  Target,
  CalendarClock,
  Compass,
  Check,
  Table2,
  TrendingUp,
  Database,
  Server,
  Workflow,
  Sparkles,
  Activity,
  Bell,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Marketing Analytics & Reporting · From $299/mo White-Label",
  description:
    "AI-powered marketing analytics. Custom dashboards, GA4 setup, server-side tagging, attribution modeling, weekly commentary. White-label from $299/mo. Direct from $349/mo.",
  path: "/services/analytics",
});

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Custom dashboards",
    d: "Looker Studio dashboards built around your KPIs. Embedded under your domain, branded for you or your client, refreshed hourly.",
  },
  {
    icon: Settings2,
    title: "GA4 setup",
    d: "Server-side tracking, custom events, conversions, audiences, and ecommerce schema. The plumbing that makes every other tool accurate.",
  },
  {
    icon: GitBranch,
    title: "Attribution modeling",
    d: "Multi-touch attribution that shows which ads, emails, and content actually drive revenue. Last-click lies — we fix it.",
  },
  {
    icon: Target,
    title: "Conversion tracking",
    d: "Form fills, purchases, signups, scroll depth, video plays, custom events. Server-side where it matters. No more data gaps.",
  },
  {
    icon: CalendarClock,
    title: "Reporting cadence",
    d: "Weekly summary for Growth and Scale. Monthly executive recap for every tier. Quarterly business review for Scale clients.",
  },
  {
    icon: Compass,
    title: "Fractional CMO",
    d: "4 hours of senior strategy time per month at Scale tier. Quarterly planning, channel mix, hiring decisions. No full-time cost.",
  },
];

interface DirectTier {
  tier: string;
  price: string;
  includes: string[];
  upgrade?: string;
  popular?: boolean;
}

const DIRECT_TIERS: DirectTier[] = [
  {
    tier: "Starter",
    price: "$349/mo",
    includes: [
      "1 dashboard",
      "4 KPIs tracked",
      "Monthly email summary",
      "GA4 audit + cleanup (one-time)",
    ],
    upgrade:
      "Upgrade to Growth for: 4 dashboards, all major channels (GA4, ads, email, social), weekly summary, monthly strategy call.",
  },
  {
    tier: "Growth",
    price: "$699/mo",
    includes: [
      "4 dashboards",
      "All major channels: GA4, paid ads, email, social",
      "Weekly summary",
      "Monthly 30-min strategy call",
      "Conversion tracking setup",
      "Custom KPI definitions for your business",
    ],
    upgrade:
      "Upgrade to Scale for: multi-touch attribution, 6+ dashboards, 4 hours of fractional CMO time per month, weekly call.",
    popular: true,
  },
  {
    tier: "Scale",
    price: "$999/mo",
    includes: [
      "Multi-touch attribution modeling",
      "6+ dashboards",
      "4 hours of fractional CMO time per month",
      "Weekly strategy call",
      "Server-side GA4 + conversion tracking",
      "Quarterly business review",
      "Priority support — same-day replies",
    ],
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What tools do you use for dashboards?",
    answer:
      "Looker Studio (Google Data Studio) for client-facing dashboards, GA4 for web analytics, plus native connectors for Meta Ads, Google Ads, LinkedIn, TikTok, HubSpot, Stripe, and most CRMs. If you have an existing tool stack we plug into it. We do not force a platform on you.",
  },
  {
    question: "Do you set up GA4 or just report on it?",
    answer:
      "Both, depending on the tier. Starter covers a one-time GA4 audit and cleanup. Growth and Scale include full server-side GA4 setup — custom events, conversions, audiences, ecommerce schema, and BigQuery export where it makes sense. We do not just report on broken data.",
  },
  {
    question: "Can you do multi-touch attribution?",
    answer:
      "Yes, on the Scale tier. We model first-touch, last-touch, linear, time-decay, and data-driven attribution. The output is a clear answer to which channels actually drive pipeline, not just last-click credit. Most clients find 20-40% of their paid spend is misattributed.",
  },
  {
    question: "How often do I get reports?",
    answer:
      "Starter: monthly email summary. Growth: weekly written summary plus monthly 30-min strategy call. Scale: weekly strategy call, monthly executive recap, quarterly business review. All tiers include real-time dashboard access — the cadence is for human review, not data delivery.",
  },
  {
    question: "Can you integrate with my CRM?",
    answer:
      "Yes. We connect to HubSpot, Salesforce, Pipedrive, Zoho, Close, and most others via native API. We model pipeline, deal velocity, and revenue attribution end-to-end — not just top-of-funnel traffic. The dashboards show what marketing actually drives, in dollars.",
  },
];

export default function AnalyticsServicePage() {
  return (
    <>
      <Hero
        eyebrow="Analytics & Reporting"
        title={
          <>
            Numbers you can{" "}
            <em className="font-serif not-italic text-lime-400">actually read.</em>
          </>
        }
        subhead="Marketing analytics services for agencies and businesses. We build custom marketing dashboards, set up GA4, model attribution, and run weekly reporting so you know what's working. From $349/mo direct, $299/mo white-label."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        trustMicrocopy="Cancel anytime · No setup fees · 20% off annual · Setup in 7 days"
      />

      <ServiceDefinition
        text="AI-powered marketing analytics is the setup, modeling, and reporting of marketing performance across paid, organic, email, and social — custom dashboards, GA4 + server-side tagging, attribution modeling, and weekly commentary in plain English. The data is live, the client sees the same numbers you see, and the report ships under the agency's brand."
      />

      {/* What we do — 6 features */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we do</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            The full analytics stack.{" "}
            <em className="font-serif not-italic text-lime-400">One team.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Most agencies hand you a spreadsheet and call it reporting. We build the
            dashboards, set up the tracking, model the attribution, and run the
            cadence. Six jobs, one team, monthly rate.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.d}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      {/* Direct pricing — 3 tiers, explicit "What's included" + upgrade line */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For businesses.{" "}
            <em className="font-serif not-italic text-lime-400">No agency overhead.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Same delivery team, no markup. Pick the tier that matches your channel
            count, then move up or down as your needs change.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3" stagger={0.06}>
          {DIRECT_TIERS.map((t) => (
            <StaggerItem key={t.tier}>
              <div
                className={
                  "bento h-full flex flex-col " +
                  (t.popular ? "border-lime-400/40 ring-1 ring-lime-400/30" : "")
                }
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">
                    {t.tier}
                    {t.popular && (
                      <span className="ml-2 pill pill-accent text-[10px]">Popular</span>
                    )}
                  </h3>
                  <span className="text-lg font-bold text-lime-400">{t.price}</span>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
                    What&apos;s included
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    {t.includes.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                        <span className="leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {t.upgrade && (
                  <p className="mt-5 rounded-lg border border-lime-400/20 bg-lime-400/5 p-3 text-xs text-white/75 leading-relaxed">
                    {t.upgrade}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* White-label pricing — single tier, margin math */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For agencies.{" "}
            <em className="font-serif not-italic text-lime-400">60-70% margin.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Resell under your brand, your domain, your client relationship. We are
            invisible. You keep the markup.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]" stagger={0.05}>
          <StaggerItem>
            <div className="bento h-full">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-white">White-label · Analytics</h3>
                <span className="text-lg font-bold text-lime-400">$299/mo</span>
              </div>
              <p className="mt-2 text-sm text-white/70">per client · billed to you monthly</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span>All Growth tier features (4 dashboards, weekly summary, monthly call)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span>Branded under your logo and your domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span>White-labeled PDF reports on the 1st of every month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span>Private Slack channel with senior strategists</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span>Your client never talks to us directly</span>
                </li>
              </ul>
              <p className="mt-5 rounded-lg border border-lime-400/20 bg-lime-400/5 p-3 text-xs text-white/75 leading-relaxed">
                <strong className="text-white">Volume discount:</strong> 5+ clients drops
                to $249/client. 15+ clients drops to $199/client. Ask about partner
                pricing.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                The math
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Resell math that works</h3>
              <div className="mt-5 space-y-3 text-sm text-white/80">
                <div className="flex items-baseline justify-between border-b border-white/8 pb-2">
                  <span>You pay us</span>
                  <span className="font-semibold text-white">$299/mo</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/8 pb-2">
                  <span>You charge client</span>
                  <span className="font-semibold text-white">$1,000 - $1,800/mo</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/8 pb-2">
                  <span>Your gross margin</span>
                  <span className="font-semibold text-lime-400">$701 - $1,501/mo</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>Margin %</span>
                  <span className="font-bold text-lime-400">70% - 83%</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-white/55 leading-relaxed">
                At 10 clients, that is $7,000-15,000/mo of pure margin on one service
                line. Add <Link href="/services/seo" className="text-lime-400 hover:underline">SEO</Link>{" "}
                and <Link href="/services/paid-ads" className="text-lime-400 hover:underline">paid ads</Link>{" "}
                and you run a full-stack agency on delivery cost under $10k/mo.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* Behind the scenes — how we ship analytics so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Dashboards that{" "}
            <em className="font-serif not-italic text-lime-400">build themselves.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Traditional agencies run on analyst hours. We run on automation. Here is
            the stack that ships fresh data to your dashboard every morning, no
            manual work required.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {[
            {
              icon: Database,
              title: "Looker Studio + BigQuery",
              d: "Direct connectors to GA4, Google Ads, Meta, and Klaviyo. No CSV exports, no copy-paste. The data lands in the dashboard before you finish your coffee.",
            },
            {
              icon: Server,
              title: "GA4 Measurement Protocol",
              d: "Server-side event tracking. No GTM tag bloat, no ad-blocker data loss, no iOS 14-style blind spots. Conversions get counted the way they should be.",
            },
            {
              icon: Workflow,
              title: "Python + dbt daily ETL",
              d: "Every morning at 6am, fresh data lands in every dashboard. dbt models turn raw events into clean, tested, business-ready tables your team can trust.",
            },
            {
              icon: Sparkles,
              title: "GPT-4 + SQL auto-summaries",
              d: "The weekly report writes itself. We feed the model your KPIs, it writes the commentary, flags anomalies, and calls out what to focus on next.",
            },
            {
              icon: Activity,
              title: "Puppeteer + Lighthouse",
              d: "Performance and SEO scores for your top pages, tracked daily. Core Web Vitals, accessibility, and page speed on the same dashboard as your revenue.",
            },
            {
              icon: Bell,
              title: "Slack + email alerting",
              d: "KPI anomalies fire alerts to the right person. Cost-per-acquisition spike at 2am? You know before your morning standup starts.",
            },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <StaggerItem key={t.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{t.d}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <div className="bento h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                What this means for you
              </p>
              <ul className="mt-5 space-y-4 text-sm text-white/85">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span className="leading-relaxed">
                    <strong className="text-white">Daily data refresh,</strong> not
                    monthly. Your dashboard is never more than 24 hours stale.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span className="leading-relaxed">
                    <strong className="text-white">
                      Weekly auto-generated reports,
                    </strong>{" "}
                    sent to your inbox every Monday morning.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <span className="leading-relaxed">
                    <strong className="text-white">
                      5 hours of analyst time per client per month
                    </strong>{" "}
                    (vs 30+ at a traditional agency). That is why the price is what
                    it is.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bento h-full flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-bold leading-snug text-white">
                Automation is why a 4-person team can run analytics for{" "}
                <em className="font-serif not-italic text-lime-400">
                  200+ clients.
                </em>
              </p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                Manual reporting is a cost we pass on. We do not have that cost, so
                you do not pay it. That is the whole business model in one sentence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* What dashboards look like */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What you get</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            What the marketing dashboards{" "}
            <em className="font-serif not-italic text-lime-400">actually show.</em>
          </h2>
          <p className="mt-4 text-white/70">
            No vanity charts. Every panel answers a specific question a founder,
            marketing lead, or client would actually ask.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {[
            {
              icon: TrendingUp,
              title: "Traffic & channel ROI",
              d: "Sessions, conversions, and revenue broken down by source. See exactly what organic, paid, email, and social each contribute — in dollars, not just clicks.",
            },
            {
              icon: Target,
              title: "Conversion funnel",
              d: "Step-by-step drop-off from landing page view to form fill or purchase. Spot the leak in your funnel before you spend another dollar on traffic.",
            },
            {
              icon: GitBranch,
              title: "Attribution paths",
              d: "Multi-touch attribution that shows the full path to purchase. Which touchpoints actually drive pipeline versus which get last-click credit by accident.",
            },
            {
              icon: Table2,
              title: "Channel-level cost & ROAS",
              d: "Spend, revenue, and return for every channel side-by-side. Google Ads, Meta, LinkedIn, TikTok, email — all on one panel, all in your currency.",
            },
            {
              icon: CalendarClock,
              title: "Cohort retention",
              d: "How users from a specific signup week or campaign cohort behave over 30, 60, 90 days. Stop focusing on first-session metrics that do not retain.",
            },
            {
              icon: LayoutDashboard,
              title: "Executive summary",
              d: "One-page view for founders and clients. The 6 numbers that matter this month, what changed, and the one thing to do next.",
            },
          ].map((d) => {
            const Icon = d.icon;
            return (
              <StaggerItem key={d.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{d.d}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      {/* Why us vs spreadsheet reporting */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">Why us</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Dashboards, not{" "}
              <em className="font-serif not-italic text-lime-400">spreadsheets.</em>
            </h2>
            <p className="mt-4 text-white/70">
              A spreadsheet is not a marketing analytics service. It is a snapshot
              someone built once and forgot. Live dashboards, accurate tracking, and
              weekly human review are the difference between data you look at and
              data you act on.
            </p>
          </ScrollReveal>
          <StaggerGroup className="grid gap-3" stagger={0.04}>
            {[
              {
                h: "Real-time, not week-old",
                d: "Spreadsheets get exported Friday and emailed Monday. Our dashboards refresh hourly, so you see what is happening today.",
              },
              {
                h: "Accurate source data",
                d: "Half of bad reporting comes from broken GA4. We fix the tracking first, so every number on every panel is right.",
              },
              {
                h: "Built around your KPIs",
                d: "Your business has 4-6 numbers that matter. We build the dashboard around those, not a generic template.",
              },
              {
                h: "A human reviews every week",
                d: "Growth and Scale tiers include a weekly written summary or call. We flag what changed, what is working, what to do next.",
              },
              {
                h: "Attribution, not last-click",
                d: "Spreadsheets default to last-click attribution, which lies. We model multi-touch so you know which channels actually drive revenue.",
              },
              {
                h: "Plug into your stack",
                d: "HubSpot, Salesforce, Stripe, Meta, Google, LinkedIn, TikTok. We connect to what you already use — no new tool to learn.",
              },
            ].map((b) => (
              <StaggerItem key={b.h}>
                <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/2 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{b.h}</h3>
                    <p className="mt-1 text-sm text-white/65 leading-relaxed">{b.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* What's in every plan */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Always included</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            What ships in{" "}
            <em className="font-serif not-italic text-lime-400">every plan.</em>
          </h2>
          <p className="mt-4 text-white/70">
            These are not upsells. They are the baseline we run on every engagement.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-3" stagger={0.05}>
          {[
            {
              h: "GA4 audit",
              d: "Full audit of your current GA4 setup. We find the gaps, duplicates, and missing events before we build a single dashboard.",
            },
            {
              h: "Custom KPI definition",
              d: "We sit with you, define the 4-6 numbers that actually matter for your business, and build the dashboards around them.",
            },
            {
              h: "Monthly report",
              d: "A written recap of what changed, what is working, what is not, and the one thing to focus on next month. Every tier.",
            },
          ].map((b) => (
            <StaggerItem key={b.h}>
              <div className="bento h-full">
                <h3 className="text-lg font-semibold text-white">{b.h}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{b.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* The process */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            From signup to live dashboards{" "}
            <em className="font-serif not-italic text-lime-400">in 7 days.</em>
          </h2>
          <p className="mt-4 text-white/70">
            No 90-day onboarding. No discovery phase that ships a deck. We move fast
            because the work is repeatable.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {[
            {
              step: "01",
              h: "Audit + KPI call",
              d: "Day 1. We audit your current tracking, then run a 30-min call to lock the 4-6 KPIs your dashboards will be built around.",
            },
            {
              step: "02",
              h: "Tracking setup",
              d: "Days 2-4. Server-side GA4, conversion events, custom dimensions, CRM and ad platform connectors wired in and validated.",
            },
            {
              step: "03",
              h: "Dashboard build",
              d: "Days 4-6. Looker Studio dashboards built, branded, embedded under your domain. You review, we revise, you approve.",
            },
            {
              step: "04",
              h: "Reporting cadence",
              d: "Day 7 and onward. Weekly summary or call kicks off. Monthly executive recap. Quarterly business review for Scale clients.",
            },
          ].map((p) => (
            <StaggerItem key={p.step}>
              <div className="bento h-full">
                <span className="text-xs font-bold tracking-widest text-lime-400">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.h}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* TldrBox */}
      <TldrBox
        items={[
          "Marketing analytics services from $349/mo direct, $299/mo white-label (60-70% margin).",
          "GA4 setup, conversion tracking, attribution modeling, custom dashboards, fractional CMO — six jobs, one team.",
          "Setup in 7 days. Cancel anytime. No setup fees. Same team that runs the Fortune-500 stack, billed like a small agency.",
        ]}
      />

      {/* FAQ */}
      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Analytics questions,{" "}
            <em className="font-serif not-italic text-lime-400">honestly.</em>
          </>
        }
        subhead="Five questions we get on every sales call, answered straight."
        items={FAQ_ITEMS}
      />

      {/* Final CTA */}
      <CtaSection
        title={
          <>
            Ready to{" "}
            <em className="font-serif not-italic text-lime-400">know what works?</em>
          </>
        }
        subhead="Get a free 60-second audit, or book a 15-min call. We will show you exactly what your marketing analytics services setup is missing — no pitch, no obligation."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a call", href: "/contact" }}
      />

      {/* JSON-LD */}
      <Script
        id="ld-service-analytics"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI Marketing Analytics & Reporting",
              description:
                "AI-powered marketing analytics. Custom dashboards, GA4 setup, server-side tagging, attribution modeling, weekly commentary. White-label from $299/mo. Direct from $349/mo.",
              path: "/services/analytics",
              serviceType: "AI Marketing Analytics",
              priceRange: "$299-$999",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-analytics"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_ITEMS)),
        }}
      />
      <Script
        id="ld-bc-analytics"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Analytics", url: "/services/analytics" },
            ])
          ),
        }}
      />
    </>
  );
}
