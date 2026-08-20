import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { ServiceDefinition } from "@/components/sections/service-definition";
import { FaqSection } from "@/components/sections/faq";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import {
  PenTool,
  Calendar,
  MessageCircle,
  Sparkles,
  Heart,
  BarChart3,
  CheckCircle2,
  Bot,
  CalendarClock,
  Clapperboard,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Social Media Management · From $299/mo White-Label",
  description:
    "AI-assisted social media management. Direct from $349/mo. White-label from $299/mo. Posts, community, short-form video, monthly reporting. 70% lower than traditional agencies.",
  path: "/services/social-media",
});

const FEATURES = [
  {
    icon: PenTool,
    title: "Content creation",
    d: "Captions, carousels, graphics, and short-form scripts written for your brand voice and audience.",
  },
  {
    icon: Calendar,
    title: "Posting schedule",
    d: "12-30 posts per month, scheduled for the times your audience is actually online.",
  },
  {
    icon: MessageCircle,
    title: "Community management",
    d: "Replies to comments, DMs, and mentions. We keep the conversation moving under 4 business hours.",
  },
  {
    icon: Sparkles,
    title: "Short-form video",
    d: "4-6 reels, TikToks, or Shorts per month. Scripted, edited, captioned, and ready to ship.",
  },
  {
    icon: Heart,
    title: "Engagement",
    d: "We engage with your niche, follow relevant accounts, and start conversations that build a real audience.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    d: "Monthly report with reach, engagement rate, follower growth, and what we will test next.",
  },
];

interface DirectTier {
  tier: string;
  price: string;
  items: string[];
  upgrade: string;
  popular?: boolean;
}

const DIRECT_TIERS: DirectTier[] = [
  {
    tier: "Direct · Starter",
    price: "$349/mo",
    items: [
      "1 channel (Instagram OR LinkedIn OR X)",
      "12 posts per month",
      "1 carousel per week",
      "Monthly performance report",
      "Slack support, 4-hour response",
    ],
    upgrade:
      "Upgrade to Growth for: a second channel, short-form video, community management, and a biweekly call.",
  },
  {
    tier: "Direct · Growth",
    price: "$699/mo",
    popular: true,
    items: [
      "2-3 channels (Instagram + LinkedIn + X or TikTok)",
      "20-24 posts per month",
      "4-6 short-form videos per month (reels, TikToks, Shorts)",
      "Community management (comments + DMs)",
      "Engagement and niche outreach",
      "Biweekly strategy call",
    ],
    upgrade:
      "Upgrade to Scale for: 4+ channels, daily posting, a dedicated social lead, and weekly calls.",
  },
  {
    tier: "Direct · Scale",
    price: "$999/mo",
    items: [
      "4+ channels across all relevant platforms",
      "30 posts per month",
      "Daily posting on the primary channel",
      "Dedicated social lead who knows your brand",
      "Weekly strategy call",
      "Quarterly content review and pivot",
    ],
    upgrade:
      "Need a custom pod? We build dedicated teams for 40+ channel accounts and multi-brand portfolios.",
  },
];

const TOOLS = [
  {
    icon: Bot,
    title: "GPT-4 + brand-voice prompts",
    d: "First-draft captions, hashtags, and hooks for every post — written in your tone from a 30-min onboarding call, not a generic template.",
  },
  {
    icon: CalendarClock,
    title: "Buffer, Later, and native schedulers",
    d: "Automated posting, queue management, and per-platform optimal time slots. Posts ship without us touching a phone.",
  },
  {
    icon: Clapperboard,
    title: "CapCut + auto-captions",
    d: "Short-form video editing with auto-captions, jump cuts, and b-roll. 80% faster than manual timelines.",
  },
  {
    icon: TrendingUp,
    title: "Trend monitoring + competitor scraping",
    d: "Daily reports on what's working in your niche, what your top three competitors shipped this week, and where the next wave is heading.",
  },
  {
    icon: MessageSquare,
    title: "ManyChat + community auto-replies",
    d: "DM automation, comment moderation, and lead capture. The conversation never sleeps, and bad replies never reach your audience.",
  },
  {
    icon: BarChart3,
    title: "Looker Studio engagement dashboards",
    d: "Real-time reach, saves, follower growth, and cost-per-engagement, broken down by platform, format, and post.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Audit",
    body: "We review your current channels, competitors, and audience. You get a 30-day content plan within 7 days.",
  },
  {
    num: "02",
    title: "Content plan",
    body: "Every month starts with a content calendar. Topics, formats, hooks, posting times. You approve before production.",
  },
  {
    num: "03",
    title: "Production",
    body: "Our team writes, designs, and edits. You see drafts in a shared workspace and approve in one click.",
  },
  {
    num: "04",
    title: "Posting",
    body: "We post on schedule, run community replies, and engage with your niche. You focus on running the business.",
  },
  {
    num: "05",
    title: "Report",
    body: "First of each month you get a report with reach, engagement, follower growth, and the test plan for next month.",
  },
];

const FAQS = [
  {
    question: "Do I need to provide the content?",
    answer:
      "No. Our team handles scripts, captions, design, and video editing. You approve each piece before it posts. If you have brand assets, voice notes, or product photos, send them over. We work with whatever you can give us, from a full creative brief to a half-finished idea.",
  },
  {
    question: "Which platforms do you cover?",
    answer:
      "Instagram, LinkedIn, X, Facebook, TikTok, and YouTube Shorts. Most clients run 1-3 channels. Starter covers one. Growth covers two to three. Scale runs four or more. We focus on where your audience already spends time, not where the trend says they should be.",
  },
  {
    question: "Do you handle community comments and DMs?",
    answer:
      "Yes. Every plan includes community management. We reply to comments, answer DMs, and engage with relevant accounts in your niche. Response time is under 4 business hours on weekdays. You only step in for sales-qualified leads or sensitive topics we flag for you.",
  },
  {
    question: "How fast will I see engagement growth?",
    answer:
      "Expect early signals in 30-60 days. Follower growth and engagement rate lift in 60-90 days. Meaningful pipeline from social usually shows up by month 3-4. Short-form video compounds faster than static posts. We send a monthly report with the actual numbers, not vanity metrics.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel with 30 days notice. No penalty, no retention call, no awkward conversation. We would rather earn your business every month than lock you into a 12-month contract. Most clients stay for 8+ months because the work pays for itself in pipeline.",
  },
];

export default function SocialMediaServicePage() {
  return (
    <>
      <Hero
        eyebrow="Social Media Management"
        title={
          <>
            Social that <em className="font-serif not-italic text-lime-400">shows up.</em>
          </>
        }
        subhead="Done-for-you social media management for businesses ($349-$999/mo) and agencies ($299/mo white-label). Posts, community, short-form video, monthly reporting. AI + senior human production, 70% lower than traditional agencies."
        primaryCta={{ label: "Book a 15-min call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        trustMicrocopy="Cancel anytime · No setup fees · 20% off annual"
      />

      <ServiceDefinition
        text="AI-assisted social media management is the production and scheduling of posts, short-form video, community replies, and monthly reports across Instagram, Facebook, LinkedIn, X, and TikTok. AI drafts captions and clips; senior strategists curate and approve before anything ships under the client's brand."
      />

      {/* Intro */}
      <Section>
        <ScrollReveal className="max-w-3xl">
          <p className="text-lg text-white/80 leading-relaxed">
            Social media management is the work of showing up consistently on the channels where your customers spend time. We handle content creation, posting, community management, and short-form video so you don&apos;t have to. Whether you want organic social that builds a brand or campaigns that convert, we run the full stack.
          </p>
          <p className="mt-4 text-white/65 leading-relaxed">
            Most agencies charge $3,000-8,000/mo and still miss posts. We charge less because we automated the repetitive 80% of social media marketing and let senior strategists focus on the 20% that actually grows your audience. Same deliverables, lower overhead, real numbers every month.
          </p>
        </ScrollReveal>
      </Section>

      {/* What we do */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What you get</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Six moves, <em className="font-serif not-italic text-lime-400">one retainer.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Everything you need to grow a brand on social, run by a senior team. No junior account manager. No overseas ghost writers. Real people who know your niche.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
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

      {/* Direct pricing */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            For businesses. <em className="font-serif not-italic text-lime-400">No agency overhead.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Three tiers, one transparent monthly fee. Pick the level of output your business needs. Upgrade or downgrade anytime as your goals shift.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {DIRECT_TIERS.map((t) => (
            <div
              key={t.tier}
              className={`bento h-full flex flex-col ${
                t.popular ? "border border-lime-400/30 bg-lime-400/5" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-white">{t.tier}</h3>
                {t.popular && <span className="pill pill-accent text-[10px]">Popular</span>}
              </div>
              <div className="mt-2 text-3xl font-bold text-lime-400">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-white/75">
                {t.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-sm text-white/75 leading-relaxed">
                  <span className="font-semibold text-white">{t.upgrade}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/55">
          Need a custom setup or more than 30 posts per month?{" "}
          <a href="/contact" className="text-lime-400 underline underline-offset-4 hover:text-lime-300">
            Talk to us
          </a>{" "}
          about a dedicated pod.
        </p>
      </Section>

      {/* White-label pricing */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            For agencies. <em className="font-serif not-italic text-lime-400">60%+ margin.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Resell under your brand. We never talk to your client. Reports, posts, and replies ship with your logo, your domain, your voice.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.05}>
          <StaggerItem>
            <div className="bento h-full">
              <h3 className="text-base font-semibold text-white">White-label · Reseller</h3>
              <div className="mt-2 text-3xl font-bold text-lime-400">$299/mo</div>
              <p className="mt-3 text-sm text-white/70">
                Per client. Resell at $1,000-1,800/mo. That&apos;s 60-80% margin on a service you don&apos;t have to staff. We handle content, posting, community, reporting. You handle the relationship.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/75">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>Your logo, your domain, your brand</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>White-labeled monthly reports (PDF + dashboard)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>Add clients at $299 each, no minimum</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>Partner Slack channel for support</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-white/65 leading-relaxed">
                <span className="font-semibold text-white">Margin math:</span> 10 clients × $299 cost = $2,990/mo. Charge $1,200/client × 10 = $12,000/mo revenue.{" "}
                <span className="text-lime-400 font-semibold">$9,010/mo margin.</span>
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bento h-full">
              <h3 className="text-base font-semibold text-white">Agency perks</h3>
              <p className="mt-2 text-sm text-white/70">
                Built for agencies that want to scale social media without scaling headcount.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/75">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>No client count minimums — start with 1</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>Bulk pricing kicks in at 5+ clients</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>Private partner Slack with senior strategists</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>Co-branded sales collateral (case studies, decks)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>30-day money back guarantee on first client</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-white/65 leading-relaxed">
                Bundle with our{" "}
                <a
                  href="/white-label-seo"
                  className="text-lime-400 underline underline-offset-4 hover:text-lime-300"
                >
                  white-label SEO
                </a>{" "}
                at $200/client to ship a social + search retainer for $499 cost, $1,500+ client price.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* Why us vs a traditional agency */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why us</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Traditional agency <em className="font-serif not-italic text-lime-400">vs. us.</em>
          </h2>
          <p className="mt-4 text-white/70">Same deliverables. Different economics. Side by side.</p>
        </ScrollReveal>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {[
            { label: "Cost", us: "$349-999/mo direct, $299/mo white-label", them: "$3,000-8,000/mo per client" },
            { label: "Setup fees", us: "$0", them: "$1,000-5,000" },
            { label: "Production model", us: "AI + senior strategists, 7-day turnaround", them: "Junior AMs, 14-21 day turnaround" },
            { label: "Posts per month", us: "12-30 posts + 4-6 short-form videos", them: "8-12 static posts" },
            { label: "Reports", us: "Monthly + on-demand dashboard", them: "Monthly PDF, often 2 weeks late" },
            { label: "Contract", us: "30-day notice, cancel anytime", them: "12-month lock-in" },
          ].map((row) => (
            <div key={row.label} className="bento">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/45">{row.label}</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-lime-400 font-semibold">Omni Path</div>
                  <div className="mt-1 text-white/80 leading-relaxed">{row.us}</div>
                </div>
                <div>
                  <div className="text-white/55 font-semibold">Traditional</div>
                  <div className="mt-1 text-white/55 leading-relaxed">{row.them}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What's in every plan */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Every plan includes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            No matter the <em className="font-serif not-italic text-lime-400">tier.</em>
          </h2>
          <p className="mt-4 text-white/70">
            We don&apos;t strip features to push you to a higher tier. Every client gets the same backbone.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {[
            "Monthly content calendar approved before production",
            "Senior content strategist, not a junior account manager",
            "Brand voice guide built from a 30-min onboarding",
            "Content library access (stock + original)",
            "Monthly performance report with action items",
            "Slack or email support with a 4-hour response time",
          ].map((item) => (
            <StaggerItem key={item}>
              <div className="bento h-full flex gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-lime-400 shrink-0" />
                <p className="text-sm text-white/80 leading-relaxed">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Behind the scenes — how we ship social so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Posts that <em className="font-serif not-italic text-lime-400">write themselves. Strategy that doesn&apos;t.</em>
          </h2>
          <p className="mt-4 text-white/70">
            The tool stack that lets us ship 30 posts a month per client at a third of the cost of a traditional agency — without cutting corners on quality or strategy.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {TOOLS.map((t) => {
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

        <ScrollReveal className="mt-12 max-w-3xl">
          <div className="bento border border-lime-400/20 bg-lime-400/5">
            <h3 className="text-base font-semibold text-lime-400">What this means for you</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                <span>30 posts/mo, all platforms, on autopilot</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                <span>AI drafts, senior human edits and approves every piece before it ships</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                <span>5 hours of community manager time per client per month (vs 30+ at a traditional agency)</span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-white/75 leading-relaxed">
              That&apos;s why Starter ships at <span className="text-lime-400 font-semibold">$349/mo</span> instead of $3,000+. Same output, lower overhead, real numbers every month — and we pass the savings to you, not to a headcount spreadsheet.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* The process */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            From signup to <em className="font-serif not-italic text-lime-400">first post.</em>
          </h2>
          <p className="mt-4 text-white/70">Five steps. We run the heavy lifting, you approve and ship.</p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5" stagger={0.05}>
          {PROCESS_STEPS.map((s) => (
            <StaggerItem key={s.num}>
              <div className="bento h-full">
                <div className="text-xs font-semibold text-lime-400 tracking-widest">{s.num}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.body}</p>
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
            Social media management questions,{" "}
            <em className="font-serif not-italic text-lime-400">honestly.</em>
          </>
        }
        subhead="The questions we get on every sales call. Straight answers, no fluff."
        items={FAQS}
      />

      {/* Final CTA */}
      <CtaSection
        title={
          <>
            Ready to make social media management{" "}
            <em className="font-serif not-italic text-lime-400">work for you?</em>
          </>
        }
        subhead="Book a 15-min call. We'll send a 30-day content calendar as a free sample. No credit card, no obligation."
        primaryCta={{ label: "Book a 15-min call", href: "/contact" }}
        secondaryCta={{ label: "See full pricing", href: "/pricing" }}
      />

      {/* TldrBox */}
      <TldrBox
        items={[
          "Social media management from $349/mo direct, $299/mo white-label. 70% lower than traditional agencies.",
          "12-30 posts per month, 4-6 short-form videos, community management, monthly reporting included.",
          "Five-step process: audit, plan, produce, post, report. Cancel anytime with 30 days notice.",
        ]}
      />

      {/* JSON-LD */}
      <Script
        id="ld-service-social-media"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI Social Media Management",
              description:
                "AI-assisted social media management. Direct from $349/mo. White-label from $299/mo. Posts, community, short-form video, monthly reporting. 70% lower than traditional agencies.",
              path: "/services/social-media",
              serviceType: "AI Social Media Management",
              priceRange: "$299-$999",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-social-media"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <Script
        id="ld-bc-social-media"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Social Media", url: "/services/social-media" },
            ])
          ),
        }}
      />
    </>
  );
}
