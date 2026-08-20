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
import {
  buildMetadata,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/seo";
import {
  Mail,
  ShoppingCart,
  Bell,
  Repeat,
  Settings,
  Eye,
  Check,
  TrendingUp,
  Sparkles,
  Plug,
  Zap,
  Clock,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Email & Lifecycle Marketing · From $299/mo White-Label",
  description:
    "AI-driven lifecycle marketing on Klaviyo, HubSpot, ActiveCampaign. Welcome, abandoned cart, win-back, behavioral triggers. Direct from $349. White-label from $299/mo.",
  path: "/services/email-lifecycle",
});

const FEATURES = [
  {
    icon: Settings,
    title: "Platform setup",
    d: "Klaviyo, HubSpot, or ActiveCampaign configured end-to-end: domains authenticated, lists imported, branding applied, sender reputation baselined.",
  },
  {
    icon: Mail,
    title: "Welcome series",
    d: "Convert new subscribers into first-time buyers with a 3-5 email automated sequence that fires the moment someone signs up.",
  },
  {
    icon: ShoppingCart,
    title: "Abandoned cart",
    d: "Recover 10-30% of lost e-com revenue with a 3-email cart sequence timed to buyer behavior, with optional discount and reminder variants.",
  },
  {
    icon: Eye,
    title: "Browse abandonment",
    d: "Catch window-shoppers before they leave with a 2-email reminder flow tied to product views, categories, and price drops.",
  },
  {
    icon: Bell,
    title: "Win-back",
    d: "Re-engage lapsed customers at 60, 90, and 120 days with a 3-email sequence that brings dead subscribers back to life.",
  },
  {
    icon: Repeat,
    title: "Behavioral triggers",
    d: "Viewed product, added to wishlist, repeat purchase, birthday — every event fires the right message, on the right day, in the right tone.",
  },
];

interface SetupTier {
  tier: string;
  price: string;
  cadence: string;
  blurb: string;
  includes: string[];
  upgrade: string;
  popular?: boolean;
}

const SETUP_TIERS: SetupTier[] = [
  {
    tier: "Starter",
    price: "$349",
    cadence: "one-time",
    blurb: "1 platform, the essentials built.",
    includes: [
      "1 platform (Klaviyo, HubSpot, or ActiveCampaign)",
      "2 flows built: Welcome + Abandoned Cart",
      "List import from your current ESP",
      "Domain authentication (SPF, DKIM, DMARC)",
      "Branded templates, ready to send",
    ],
    upgrade:
      "Upgrade to Growth for: 2 more flows (Browse, Post-Purchase), 2 popups, and basic segmentation.",
  },
  {
    tier: "Growth",
    price: "$699",
    cadence: "one-time",
    blurb: "1 platform, the full revenue engine.",
    popular: true,
    includes: [
      "1 platform (Klaviyo, HubSpot, or ActiveCampaign)",
      "4 flows: Welcome, Cart, Browse, Post-Purchase",
      "2 popups built and configured",
      "Basic segmentation (RFM-lite, 5+ segments)",
      "List import + deliverability check",
    ],
    upgrade:
      "Upgrade to Scale for: multi-platform, 6+ flows, advanced automation, deliverability audit, 2 list-building campaigns.",
  },
  {
    tier: "Scale",
    price: "$999",
    cadence: "one-time",
    blurb: "Multi-platform, advanced automation.",
    includes: [
      "Multi-platform (e.g. Klaviyo + HubSpot together)",
      "6+ flows built end-to-end",
      "Advanced automation (branching, conditional logic)",
      "Full deliverability audit + sender-score fixes",
      "2 list-building campaigns with creative",
    ],
    upgrade:
      "Every setup plan ships with domain authentication, branded templates, and a 30-day post-launch check-in.",
  },
];

const MGMT_TIERS: SetupTier[] = [
  {
    tier: "Starter",
    price: "$349/mo",
    cadence: "monthly",
    blurb: "Steady output, no strategy overhead.",
    includes: [
      "4 email campaigns per month",
      "1 A/B test per month",
      "Basic performance reporting",
      "List hygiene + deliverability monitoring",
    ],
    upgrade:
      "Upgrade to Growth for: 2x the campaigns, 4x the A/B tests, full segmentation, and a monthly strategy call.",
  },
  {
    tier: "Growth",
    price: "$699/mo",
    cadence: "monthly",
    blurb: "Segmentation plus a monthly strategy call.",
    popular: true,
    includes: [
      "8 email campaigns per month",
      "4 A/B tests per month",
      "Segmentation strategy + ongoing maintenance",
      "Monthly 30-min strategy call",
      "Priority support, 1 business day",
    ],
    upgrade:
      "Upgrade to Scale for: unlimited campaigns, advanced segmentation, behavioral triggers, and weekly calls.",
  },
  {
    tier: "Scale",
    price: "$999/mo",
    cadence: "monthly",
    blurb: "Unlimited output, senior attention.",
    includes: [
      "Unlimited campaigns",
      "Advanced segmentation + behavioral triggers",
      "Weekly 30-min strategy call",
      "Dedicated senior strategist",
      "Same-day support, 4 business hours",
    ],
    upgrade:
      "Every management plan includes deliverability monitoring and a monthly report — no add-on fees.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery + audit",
    d: "We audit your current ESP, list health, and revenue gaps. You get a 1-page written plan inside 3 business days, no fluff.",
  },
  {
    step: "02",
    title: "Strategy + build",
    d: "We map every flow, segment, and campaign. You approve the plan. We build it inside your account — or ours, your call.",
  },
  {
    step: "03",
    title: "Launch + test",
    d: "Flows go live, campaigns ship weekly, A/B tests run from week one. We tune based on the numbers, not opinions.",
  },
  {
    step: "04",
    title: "Report + iterate",
    d: "Monthly report covers revenue, deliverability, list growth, and the bets we're making next month. No vanity metrics.",
  },
];

const EMAIL_FAQ: FaqItem[] = [
  {
    question: "Which email platform do you support?",
    answer:
      "Klaviyo for e-commerce, HubSpot for B2B and mixed funnels, ActiveCampaign for SMBs on a budget. We also work in Mailchimp, Brevo, and Customer.io on request. We hold partner status with Klaviyo and HubSpot, so onboarding and deliverability support are direct, with no middleman slowing you down. If you're on a platform we don't officially support, we'll be honest and tell you upfront.",
  },
  {
    question: "Do I need the management plan or just setup?",
    answer:
      "Setup is a one-time build: we configure your platform and ship the first 2-6 flows. Management is the ongoing work — campaigns, A/B tests, segmentation, and monthly reporting. Most clients start with Setup, then add Management 30-60 days later. If you have an in-house marketer who can run campaigns, Setup alone is enough to get your revenue engine running.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Welcome series and abandoned cart start generating revenue within 7-14 days. Browse abandonment, post-purchase, and win-back flows show measurable lift in 30-60 days. Behavioral triggers and advanced segmentation compound over 60-90 days. We set per-flow expectations in the strategy call before we build anything — no vague promises, no surprises.",
  },
  {
    question: "Will you migrate from my current ESP?",
    answer:
      "Yes. We handle the full migration: list export and re-import, template rebuilds, flow recreation, domain authentication, and a 30-day overlap period with both ESPs running in parallel. The cutover happens during low-traffic hours, and we verify deliverability, open rates, and revenue tracking before turning off your old platform for good.",
  },
  {
    question: "Do you handle deliverability?",
    answer:
      "Yes, and it's built into every plan at no extra cost. We monitor bounce rate, spam complaints, sender reputation, and inbox placement monthly. Setup tiers above Starter include a full deliverability audit: domain authentication, list cleaning, sunset flows, and a sender-score baseline. We fix problems before they cost you revenue — we've never lost a client's sender reputation.",
  },
];

function PricingCard({ tier, accent }: { tier: SetupTier; accent?: boolean }) {
  return (
    <div
      className={
        tier.popular
          ? "bento h-full flex flex-col border-lime-400/40 bg-lime-400/[0.04]"
          : "bento h-full flex flex-col"
      }
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{tier.tier}</h3>
        {tier.popular && (
          <span className="pill pill-accent text-[10px]">Most picked</span>
        )}
        {accent && !tier.popular && (
          <span className="pill text-[10px]">Best value</span>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-lime-400 tracking-tight">
          {tier.price}
        </span>
        <span className="text-sm text-white/55">{tier.cadence}</span>
      </div>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{tier.blurb}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-white/55">
        What&rsquo;s included
      </p>
      <ul className="mt-3 grid gap-2.5">
        {tier.includes.map((line) => (
          <li
            key={line}
            className="flex items-start gap-2 text-sm text-white/80 leading-relaxed"
          >
            <Check className="h-4 w-4 mt-0.5 text-lime-400 flex-shrink-0" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 pt-4 border-t border-white/8">
        <p className="text-xs text-white/65 leading-relaxed">
          <span className="text-lime-400 font-semibold">{tier.upgrade.split(":")[0]}:</span>
          {tier.upgrade.includes(":")
            ? tier.upgrade.split(":").slice(1).join(":")
            : ""}
        </p>
      </div>
    </div>
  );
}

const STACK = [
  {
    icon: Sparkles,
    title: "GPT-4 + brand-voice prompts",
    d: "First-draft subject lines, preview text, and body copy in your brand voice. We tune every prompt per client with your tone, your offers, and your banned phrases — so the writing sounds like you wrote it on a Tuesday morning, not a robot at 3am.",
  },
  {
    icon: Plug,
    title: "Klaviyo, HubSpot, ActiveCampaign APIs",
    d: "Direct flow-builder access through the platform's own API. No UI clicking, no screen-share, no waiting on a human to drag-and-drop blocks. We push 4-8 campaigns and 6+ flows per month from a single workspace, in your account or ours.",
  },
  {
    icon: Zap,
    title: "Behavioral trigger engine",
    d: "Browse abandonment, cart, post-purchase, win-back, birthday, repeat-purchase — every customer event fires the right message on the right day, with no manual work from your team. The flows check themselves and adapt to new SKUs.",
  },
  {
    icon: Clock,
    title: "Send-time tuning",
    d: "An ML model picks the per-recipient send time based on past open behavior. Each subscriber gets the email when they're most likely to act — not when we hit 'schedule'. Open rates climb 15-25% on average.",
  },
  {
    icon: FlaskConical,
    title: "A/B testing framework",
    d: "Every campaign auto-tests subject and body variants on a 20% slice, then rolls the winner out to the rest of the list. You get more revenue per send without ever running a manual split test.",
  },
  {
    icon: ShieldCheck,
    title: "Deliverability monitoring",
    d: "Daily inbox placement checks, bounce and spam-rate alerts, sender-score tracking across Gmail, Outlook, and Yahoo. We catch and fix problems before they cost you revenue — and we've never lost a client's sender reputation.",
  },
];

export default function EmailLifecycleServicePage() {
  return (
    <>
      <Hero
        eyebrow="Email & Lifecycle Marketing"
        title={
          <>
            Email that{" "}
            <em className="font-serif not-italic text-lime-400">prints money.</em>
          </>
        }
        subhead="Email marketing services on Klaviyo, HubSpot, or ActiveCampaign. Welcome series, abandoned cart, win-back, behavioral triggers. Built once, running forever."
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "See full pricing", href: "/pricing" }}
        trustMicrocopy="$0 setup fees on management · Cancel anytime · 20% off annual"
      />

      <ServiceDefinition
        text="AI-driven lifecycle marketing is the design and operation of automated email sequences — welcome, abandoned cart, win-back, post-purchase, and behavioral triggers — on Klaviyo, HubSpot, or ActiveCampaign. AI drafts the copy, segments the list, and personalizes send times; senior strategists set the lifecycle map and review before send."
      />

      {/* What we do */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we do</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Lifecycle marketing that{" "}
            <em className="font-serif not-italic text-lime-400">runs itself.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Six core jobs. One revenue engine. We build the flows, segment the
            list, and ship the campaigns so every subscriber gets the right
            message at the right moment — without you touching a thing.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {f.d}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      {/* Direct pricing — setup one-time */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing · setup (one-time)</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Build it once.{" "}
            <em className="font-serif not-italic text-lime-400">Pay once.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Setup is the one-time build: platform configured, flows built,
            templates branded, list imported. After that, you can run it
            yourself or hand it to our management team. Three tiers, listed
            side by side so you can pick the right one in 30 seconds.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-5 md:grid-cols-3"
          stagger={0.05}
        >
          {SETUP_TIERS.map((t) => (
            <StaggerItem key={t.tier}>
              <PricingCard tier={t} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Direct pricing — management monthly */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing · management (monthly)</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Run it every month.{" "}
            <em className="font-serif not-italic text-lime-400">Win on autopilot.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Management is what happens after setup: campaigns shipped, A/B
            tests run, segments built, reports delivered. Three tiers — pick
            the volume that matches your list. Cancel anytime with 30 days
            notice.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-5 md:grid-cols-3"
          stagger={0.05}
        >
          {MGMT_TIERS.map((t) => (
            <StaggerItem key={t.tier}>
              <PricingCard tier={t} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-sm text-white/55 max-w-2xl">
          Already have your ESP and just want the team to run it? Skip setup,
          start with Starter management at $349/mo and we&rsquo;ll audit your
          account for free in week one.
        </p>
      </Section>

      {/* White-label pricing */}
      <Section>
        <div className="rounded-3xl border border-lime-400/25 bg-lime-400/[0.04] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <Eyebrow className="mb-4">White-label pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                For agencies.{" "}
                <em className="font-serif not-italic text-lime-400">60-70% margin.</em>
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                One flat fee, all-in. Resell at $1,000-1,800/mo per client and
                keep 60-70% of the recurring revenue. We work under your
                brand, your dashboard, your client-facing deliverables.
                Your client never sees us.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-white/80">
                {[
                  "$299/mo all-in — no setup fees, no add-ons",
                  "Resell at $1,000-1,800/mo for 60-70% margin",
                  "White-labeled reports, dashboards, deliverables",
                  "Klaviyo, HubSpot, ActiveCampaign, or your stack",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-lime-400 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/for-agencies"
                  className="inline-flex items-center justify-center rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-[#0A0A0F] hover:bg-lime-300 transition-colors"
                >
                  See agency partner program
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 transition-colors"
                >
                  See full pricing
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0A0A0F] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
                The margin math
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/70">Your cost (us)</span>
                  <span className="text-base font-semibold text-white">$299/mo</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/70">You charge client</span>
                  <span className="text-base font-semibold text-lime-400">$1,200/mo</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-baseline justify-between">
                  <span className="text-sm text-white/70">Your margin</span>
                  <span className="text-xl font-bold text-lime-400">$901/mo</span>
                </div>
                <p className="text-xs text-white/55 pt-1">
                  10 clients = $9,010/mo recurring. 75% margin before you
                  touch a deliverable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why email pays for itself */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
          <ScrollReveal>
            <Eyebrow className="mb-4">Why email pays for itself</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              The highest-ROI channel in{" "}
              <em className="font-serif not-italic text-lime-400">your stack.</em>
            </h2>
            <p className="mt-4 text-white/70">
              No other channel comes close. Here&rsquo;s what the industry
              benchmarks say — and why email beats{" "}
              <Link href="/services/paid-ads" className="text-lime-400 underline-offset-4 hover:underline">
                paid ads
              </Link>{" "}
              and even{" "}
              <Link href="/services/seo" className="text-lime-400 underline-offset-4 hover:underline">
                organic SEO
              </Link>{" "}
              on first-dollar ROI.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { stat: "$36", label: "Average return for every $1 spent on email (Litmus, DMA benchmark)" },
                { stat: "4,200%", label: "Average ROI on email vs. other channels (DMA)" },
                { stat: "60x", label: "Customer acquisition cost compared to paid social" },
                { stat: "99%", label: "Of users check email daily — every other channel is below 30%" },
              ].map((s) => (
                <div key={s.stat} className="bento h-full">
                  <p className="text-3xl md:text-4xl font-bold text-lime-400 tracking-tight">
                    {s.stat}
                  </p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/65 leading-relaxed">
              The number is conservative. Our clients typically see 50-80x
              once abandoned cart and win-back flows are live. Source:{" "}
              <span className="text-white/80">Litmus 2024 State of Email, DMA Marketer Email Tracker</span>.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* What's in every plan */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&rsquo;s in every plan</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            No add-on fees.{" "}
            <em className="font-serif not-italic text-lime-400">No surprises.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Two things ship in every single plan, white-label or direct, setup
            or management. We don&rsquo;t gate them behind a higher tier.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.05}
        >
          {[
            {
              icon: TrendingUp,
              title: "Deliverability monitoring",
              d: "Bounce rate, spam complaints, sender reputation, and inbox placement checked every week. We flag and fix problems before they cost you revenue — not after.",
            },
            {
              icon: Mail,
              title: "Monthly performance report",
              d: "A 1-page written report every month: revenue attributed, list growth, deliverability score, top-performing campaigns, and what we're testing next.",
            },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {f.d}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <p className="mt-6 text-sm text-white/55">
          Need a custom scope? Most clients start with one of the tiers above
          and add services as they scale. Talk to us about a tailored plan at{" "}
          <Link href="/contact" className="text-lime-400 underline-offset-4 hover:underline">
            /contact
          </Link>
          .
        </p>
      </Section>

      {/* Behind the scenes — how we ship email so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Emails that{" "}
            <em className="font-serif not-italic text-lime-400">write, test, and send themselves.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Our tech stack does the heavy lifting so campaigns ship in hours, not weeks — and the numbers keep climbing while you sleep.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {STACK.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="bento h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {f.d}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <div className="mt-10 rounded-2xl border border-lime-400/25 bg-lime-400/[0.04] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
            What this means for you
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 text-lime-400 flex-shrink-0" />
              <span>8 campaigns per month, all auto-tested and shipped on time.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 text-lime-400 flex-shrink-0" />
              <span>Behavioral triggers fire 24/7, even when we&rsquo;re asleep.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 text-lime-400 flex-shrink-0" />
              <span>5 hours of email marketer time per client per month — vs 25+ hours at a traditional agency.</span>
            </li>
          </ul>
        </div>
        <p className="mt-6 text-sm text-white/65 max-w-2xl">
          Automation is why Starter management costs $349/mo instead of $2,000+. We pass the savings straight to you. The work output is the same. The price is not. That&rsquo;s the whole point of the model.
        </p>
      </Section>

      {/* The process */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Four steps.{" "}
            <em className="font-serif not-italic text-lime-400">No hand-waving.</em>
          </h2>
          <p className="mt-4 text-white/70">
            What happens from the moment you book a call to the first month of
            revenue. No 90-day onboarding, no mystery deliverables.
          </p>
        </ScrollReveal>
        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.05}
        >
          {PROCESS.map((p) => (
            <StaggerItem key={p.step}>
              <div className="bento h-full">
                <span className="text-xs font-bold tracking-widest text-lime-400">
                  STEP {p.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {p.d}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* FAQ */}
      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Email marketing services,{" "}
            <em className="font-serif not-italic text-lime-400">honestly.</em>
          </>
        }
        subhead="Five questions we get every week, answered in plain English."
        items={EMAIL_FAQ}
      />

      {/* Final CTA */}
      <CtaSection
        variant="panel"
        title={
          <>
            Ready to make email your{" "}
            <em className="font-serif not-italic text-lime-400">highest-ROI channel?</em>
          </>
        }
        subhead="Book a 15-min call. We'll audit your current setup and tell you which tier fits — even if it's not ours."
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "See full pricing", href: "/pricing" }}
      />

      {/* TldrBox */}
      <TldrBox
        title="Key takeaways"
        items={[
          "Email marketing services from $299/mo white-label (resell at $1,000-1,800/mo for 60-70% margin).",
          "Direct: $349-$999 one-time setup + $349-$999/mo management. Klaviyo, HubSpot, or ActiveCampaign.",
          "Setup is build-once. Management is run-it-forever. Buy either, or both. Deliverability + monthly report in every plan.",
        ]}
      />

      <Script
        id="ld-service-email"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI Email & Lifecycle Marketing",
              description:
                "AI-driven lifecycle marketing on Klaviyo, HubSpot, ActiveCampaign. Welcome, abandoned cart, win-back, behavioral triggers. Direct from $349. White-label from $299/mo.",
              path: "/services/email-lifecycle",
              serviceType: "AI Email & Lifecycle Marketing",
              priceRange: "$299-$999",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-email"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(EMAIL_FAQ)),
        }}
      />
      <Script
        id="ld-bc-email"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Email & Lifecycle", url: "/services/email-lifecycle" },
            ])
          ),
        }}
      />
    </>
  );
}
