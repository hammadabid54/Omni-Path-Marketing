import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import {
  Search, Megaphone, PenTool, Globe, Share2, Tv, Mail, BarChart3,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ServiceBento, type BentoService } from "@/components/sections/service-bento";
import { CostComparison } from "@/components/sections/cost-comparison";
import { Testimonials } from "@/components/sections/testimonials";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { homeFaq } from "@/content/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Stop hiring five agencies. Hire us once. | Omni Path",
  description:
    "Full-service digital growth partner. SEO, paid ads, branding, content, web — done for you or white-labeled under your brand. From $200/client.",
  path: "/",
});

const SERVICES: BentoService[] = [
  {
    icon: Search,
    title: "SEO",
    description: "White-label, automated, AI-powered. From $200/client/month with full content engine.",
    href: "/services/seo",
    fromPrice: "$200/client",
    feature: true,
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    description: "Google + Meta. From $250/mo. Flat fee, no % of ad spend.",
    href: "/services/paid-ads",
    fromPrice: "$250/mo",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Logo, identity, full brand system. From $99. White-label ready, 3-day turnaround.",
    href: "/services/branding",
    fromPrice: "$99",
  },
  {
    icon: Globe,
    title: "Web & CRO",
    description: "Sites, landing pages, e-com. Mobile-first, fast, SEO-ready. From $249.",
    href: "/services/web-design",
    fromPrice: "$249",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Organic posts, community, short-form. From $299/mo white-label, $499/mo direct.",
    href: "/services/social-media",
    fromPrice: "$299/mo",
  },
  {
    icon: Tv,
    title: "TikTok + LinkedIn",
    description: "B2B LinkedIn + Gen Z TikTok ad buying. Creative, targeting, optimization.",
    href: "/services/tiktok-linkedin-ads",
    fromPrice: "$299/mo",
  },
  {
    icon: Mail,
    title: "Email & Lifecycle",
    description: "Klaviyo, HubSpot, ActiveCampaign. Welcome series, win-backs, behavioral triggers.",
    href: "/services/email-lifecycle",
    fromPrice: "$299/mo",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Custom dashboards, attribution modeling, fractional CMO. Real ROI, real numbers.",
    href: "/services/analytics",
    fromPrice: "$299/mo",
  },
];

const PROCESS_STEPS = [
  { number: "1", title: "AI site audit", description: "Puppeteer crawls, Lighthouse runs, Ahrefs pulls the data.", meta: "5 min · automated" },
  { number: "2", title: "Senior strategist", description: "Reviews audit, picks top 5 priorities, writes the 90-day plan.", meta: "30 min · human" },
  { number: "3", title: "AI content draft", description: "AI drafts, Surfer optimizes, image generated for the post.", meta: "60 min · automated" },
  { number: "4", title: "QA + edit", description: "Strategist reviews, adds insights, approves the final cut.", meta: "15 min · human" },
  { number: "5", title: "Publish + report", description: "Live, backlinks tracked, white-label PDF auto-generated.", meta: "5 min · automated" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        liveBadge="Now onboarding 8 new agency partners this month"
        title={
          <>
            Stop hiring five agencies.{" "}
            <em className="font-serif not-italic text-lime-400">Hire us once.</em>
          </>
        }
        subhead="We run the full growth stack for ambitious brands — and for the agencies that serve them. SEO, ads, branding, content, web, email, social, analytics. White-label or done-for-you."
        primaryCta={{ label: "I'm a business", href: "/for-businesses" }}
        secondaryCta={{ label: "I'm an agency", href: "/for-agencies" }}
        trustMicrocopy="From $200/client · 14-day onboarding · No long contracts"
      />

      <Suspense fallback={null}>
        <StatsStrip
          stats={[
            { value: 100, suffix: "+", label: "Clients served" },
            { value: 4.2, decimals: 1, suffix: "M", label: "Monthly organic visits" },
            { value: 12000, suffix: "+", label: "Keywords ranked #1-3" },
            { value: 40, suffix: "+", label: "Agency partners" },
          ]}
        />
      </Suspense>

      <ServiceBento
        title={
          <>
            Pick what you need. <em className="font-serif not-italic text-lime-400">Resell them all.</em>
          </>
        }
        subhead="Hire us for one, or get the whole stack under your brand."
        services={SERVICES}
      />

      {/* Full Growth Stack — hero bundled package + transparent pricing table */}
      <section className="section">
        <div className="container-page">
          <ScrollReveal>
            <div className="bento bento-feature bento-lg relative overflow-hidden">
              <div className="grid items-center gap-10 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <span className="pill pill-accent text-[10px]">Most popular</span>
                  <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight">
                    Full Growth Stack.{" "}
                    <em className="font-serif not-italic text-lime-400">One invoice.</em>
                  </h2>
                  <p className="mt-4 text-white/70 max-w-md">
                    SEO, content, social, email, one paid channel, and a monthly report — for less than the cost of one junior hire. AI does the heavy lifting, senior humans do the strategy.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-white/75">
                    {[
                      "White-label ready (your logo, your domain)",
                      "Monthly report + quarterly strategy call",
                      "Cancel anytime · 14-day onboarding",
                      "Same deliverables as a $10K/mo traditional agency",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl font-bold text-lime-400">$1,999</span>
                    <span className="text-sm text-white/55">/mo · all-in</span>
                    <span className="text-xs text-white/45 line-through ml-2">$4,500 at other agencies</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <LinkButton href="/contact" variant="primary" size="md" magnetic>
                      Get this package
                    </LinkButton>
                    <LinkButton href="/services/seo" variant="ghost" size="md">
                      See what&apos;s included
                    </LinkButton>
                  </div>
                </div>

                <div className="lg:col-span-3 grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Technical SEO + on-page", "8-12 keywords ranked / mo"],
                    ["Blog content", "4 published posts / mo"],
                    ["Social media (3 channels)", "12-16 posts / mo"],
                    ["Email automation", "Welcome + 3 flows built"],
                    ["Paid ads (1 channel)", "Up to $5K ad spend managed"],
                    ["Monthly reporting", "Looker Studio dashboard"],
                    ["Quarterly strategy call", "60 min with senior strategist"],
                    ["Dedicated Slack channel", "< 4 hr response, business hrs"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg bg-white/4 border border-white/8 p-3">
                      <div className="text-[10px] uppercase tracking-widest text-white/45">{k}</div>
                      <div className="mt-1 text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Transparent pricing table — all 8 services × 3 tiers */}
          <ScrollReveal className="mt-20 max-w-2xl">
            <Eyebrow className="mb-4">Transparent pricing</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Every service. <em className="font-serif not-italic text-lime-400">Every tier.</em>
            </h2>
            <p className="mt-3 text-white/65">No % of spend, no setup fees, no long contracts. Same deliverables as agencies charging 3-5x.</p>
          </ScrollReveal>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-xs uppercase tracking-widest text-white/45 font-semibold">Service</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-widest text-white/45 font-semibold">Starter</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-widest text-lime-400 font-semibold">Growth · most picked</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-widest text-white/45 font-semibold">Scale</th>
                  <th className="text-right py-3 pl-4 text-xs uppercase tracking-widest text-white/45 font-semibold">White-label</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {[
                  ["SEO", "$400/mo · 1 site", "$800/mo · multi-site", "$2,000+/mo · custom", "$200/client"],
                  ["Paid Ads (mgmt)", "$500/mo · <$5K spend", "$1,000/mo · $5-20K", "$1,800/mo · $20K+", "$250-$750"],
                  ["Branding (one-time)", "$499 · logo", "$1,499 · identity", "$2,999 · full system", "$99-$999"],
                  ["Web & CRO (one-time)", "$749 · landing page", "$1,499 · 5-page site", "$2,999 · custom", "$249-$1,499"],
                  ["Social Media", "$499/mo · 1 channel", "$999/mo · 2-3 channels", "$1,499/mo · 4+", "$299/mo"],
                  ["TikTok Ads (mgmt)", "$499/mo · min $1.5K spend", "$999/mo · min $3K", "$1,499/mo · min $5K", "$299/mo"],
                  ["LinkedIn Ads (mgmt)", "$899/mo · min $3K spend", "$1,499/mo · min $5K", "$2,499/mo · min $10K", "$499/mo"],
                  ["Email & Lifecycle", "$499 setup + $499/mo", "$999 setup + $999/mo", "$1,499 setup + $1,499/mo", "$299/mo"],
                  ["Analytics", "$499 setup · 2 dashboards", "$999/mo · 4 dashboards", "$1,499/mo · attribution", "$299/mo"],
                ].map(([svc, ...tiers]) => (
                  <tr key={svc}>
                    <td className="py-4 pr-4 text-white font-medium">{svc}</td>
                    {tiers.slice(0, 3).map((t, i) => (
                      <td key={i} className={`py-4 px-4 ${i === 1 ? "text-lime-400 font-medium" : "text-white/75"}`}>{t}</td>
                    ))}
                    <td className="py-4 pl-4 text-right text-lime-400 font-medium">{tiers[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-white/45">
              Direct pricing is what your client pays you. White-label is what you pay us to deliver under your brand. 60-70% margin on every line.
            </p>
          </div>
        </div>
      </section>

      {/* For Agencies section */}
      <section className="section">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Add a full SEO team for <em className="font-serif not-italic text-lime-400">$200/client.</em>
              </h2>
              <p className="mt-4 text-white/70 max-w-lg">
                You sell. We deliver. Your client never knows we exist. We use AI to do the heavy lifting, senior humans to do the strategy. You get agency-grade work at freelancer prices.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                {[
                  "No hires. No overhead. No training.",
                  "White-labeled reports, dashboards, deliverables.",
                  "Resell at $500-1,500/client. Keep 60-70% margin.",
                  "14-day onboarding for your first 5 clients.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/for-agencies" variant="primary" size="md" magnetic>
                  Become a partner
                </LinkButton>
                <LinkButton href="/pricing" variant="ghost" size="md">
                  See pricing
                </LinkButton>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <CostComparison
                columns={["Cost per client"]}
                rows={[
                  { label: "Traditional agency", values: ["~~$1,500-3,000~~"] },
                  { label: "Other white-label providers", values: ["~~$400-800~~"] },
                  { label: "Omni Path", values: ["$200"], highlight: true, note: "Same deliverables · 90% lower cost" },
                ]}
                caption="Internal cost at a traditional agency: $800-1,300 to deliver what we ship at $70."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Testimonials
        items={[
          {
            quote:
              "We used to outsource SEO at $600/client and barely break even. Omni Path does it for $200. We resell at $1,200 and pocket the difference. We doubled our margins in 90 days.",
            attribution: "James Mitchell",
            role: "Founder, Pixel & Co",
            highlight: "12 clients served via Omni Path",
          },
        ]}
      />

      {/* Pricing teaser */}
      <section className="section">
        <div className="container-page">
          <ScrollReveal className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Same quality. <em className="font-serif not-italic text-lime-400">Fraction of the cost.</em>
            </h2>
            <p className="mt-4 text-white/70">By design. No setup fees. No long contracts. 20% off annual.</p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { tier: "Starter", price: "$250", clients: "1 client", features: ["Audit + on-page", "2-4 blogs/mo", "4-8 links/mo", "Monthly report"] },
              { tier: "Growth", price: "$200", clients: "5+ clients", popular: true, features: ["+ technical SEO", "4-8 blogs/mo", "8-12 links/mo", "Content strategy + dedicated strategist"] },
              { tier: "Scale", price: "$150", clients: "15+ clients", features: ["+ weekly audit cadence", "8-16 blogs/mo", "12-20 links/mo", "Custom dashboard + partner manager"] },
            ].map((t) => (
              <ScrollReveal key={t.tier} delay={0.05}>
                <div
                  className={
                    "bento h-full " +
                    (t.popular ? "bento-feature card-glow" : "")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{t.tier}</span>
                    {t.popular && <span className="pill pill-accent text-[10px]">Most popular</span>}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-lime-400">{t.price}</span>
                    <span className="text-sm text-white/55">/client/mo</span>
                  </div>
                  <div className="text-xs text-white/45 mt-1">{t.clients}</div>
                  <ul className="mt-5 space-y-2 text-sm text-white/75">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-lime-400">→</span> {f}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    href="/pricing"
                    variant={t.popular ? "primary" : "ghost"}
                    className="mt-6 w-full justify-center"
                    size="md"
                  >
                    See pricing
                  </LinkButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="Process"
        title={
          <>
            5 hours per client per month. <em className="font-serif not-italic text-lime-400">Not 25.</em>
          </>
        }
        subhead="80% of our work is automated. 20% is senior strategy. Here's exactly what happens."
        steps={PROCESS_STEPS}
        totalNote="Total: ~2 hours of human time per client per month. The rest is AI + automation."
      />

      {/* Free audit CTA */}
      <CtaSection
        variant="panel"
        title={
          <>
            Get a <em className="font-serif not-italic text-lime-400">free</em> SEO audit.
          </>
        }
        subhead="20-point audit, scored 0-100. Delivered to your inbox in 60 seconds."
        primaryCta={{ label: "Run my free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Questions, answered."
        subhead="If you don't see your question, just ask."
        items={homeFaq}
      />

      <CtaSection
        title={
          <>
            Ready to <em className="font-serif not-italic text-lime-400">stop hiring five agencies?</em>
          </>
        }
        subhead="Get a free audit, or talk to a partner about white-label. Both take less than 5 minutes."
        primaryCta={{ label: "Get my free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      {/* FAQ schema */}
      <Script
        id="ld-faq-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaq)) }}
      />
    </>
  );
}
