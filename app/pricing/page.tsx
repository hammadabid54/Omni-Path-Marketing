import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { LinkButton } from "@/components/ui/button";
import { pricingFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Transparent AI Marketing Pricing · No Setup Fees | Omni Path",
  description:
    "AI-powered marketing pricing. White-label SEO from $150/client with 2-4 blogs, 4-8 backlinks, monthly report. Direct SEO from $250/mo. No setup fees. Cancel anytime. 20% off annual.",
  path: "/pricing",
});

// ============================================================================
// WHITE-LABEL (AGENCIES)
// ============================================================================
// Per user direction (2026-08-22): all three agency tiers carry the same
// standardized SEO offering. Price difference between tiers is for volume
// commitment (1 / 5+ / 15+ clients), not deliverables.
const WL_TIERS = [
  {
    tier: "Starter",
    price: "$250",
    per: "/client/mo",
    min: "1 client",
    popular: false,
    cta: { label: "Start with 1 client", href: "/contact" },
  },
  {
    tier: "Growth",
    price: "$200",
    per: "/client/mo",
    min: "5+ clients",
    popular: true,
    cta: { label: "Start at 5 clients", href: "/contact" },
  },
  {
    tier: "Scale",
    price: "$150",
    per: "/client/mo",
    min: "15+ clients",
    popular: false,
    cta: { label: "Scale to 15+", href: "/contact" },
  },
];

// Every white-label tier ships the same SEO engine. Volume unlocks price,
// not features. Tools: SE Ranking for keyword + rank tracking.
const WL_OFFERING = [
  "Monthly technical audit + on-page optimization",
  "2-4 blog posts / month",
  "4-8 backlinks / month",
  "1 location optimization",
  "Keyword tracking via SE Ranking (10 keywords)",
  "Monthly report (white-label PDF)",
];

// Other white-label services — same "tiered price, same offering per tier"
// approach. Prices stay at the existing $150/$200/$250 per-client rates.
const WL_OTHER_SERVICES = [
  {
    service: "Paid Ads (Google / Meta)",
    description: "Full campaign build, audience targeting, A/B testing, monthly optimization.",
  },
  {
    service: "Social Media Management",
    description: "Content calendar, posts, community management, monthly performance report.",
  },
  {
    service: "Web Design & CRO",
    description: "Custom landing pages, full sites, speed optimization, mobile-first builds.",
  },
  {
    service: "Branding",
    description: "Logo, full identity system, brand book, social media kit.",
  },
  {
    service: "Email & Lifecycle",
    description: "Klaviyo / Mailchimp flows, segmentation, deliverability, monthly report.",
  },
  {
    service: "Analytics & Reporting",
    description: "GA4 dashboards, Looker studio, attribution, monthly insights.",
  },
];

// ============================================================================
// DIRECT (BUSINESSES)
// ============================================================================
// Per XPRT-Marketing Service & Pricing Guide (2026-08-22): each service
// has three tiers — Bronze / Silver / Gold — with escalating deliverables.
const DIRECT_SERVICES = [
  {
    name: "SEO",
    tiers: [
      {
        name: "Bronze",
        price: "$250/mo",
        features: [
          "6 blog posts / month",
          "5 backlinks",
          "100 business listings (all-time)",
          "10 primary keywords",
          "On-page: meta + alt + header tags",
          "Monthly keyword rank tracking (10 kw)",
          "Monthly performance report",
          "Email support",
        ],
      },
      {
        name: "Silver",
        price: "$350/mo",
        popular: true,
        features: [
          "10 blog posts / month",
          "10 backlinks",
          "150 business listings (all-time)",
          "20 primary keywords",
          "On-page + internal linking structure",
          "Bi-weekly rank tracking (20 kw)",
          "Quarterly competitor snapshot",
          "Monthly report + review call",
          "Email & chat support",
        ],
      },
      {
        name: "Gold",
        price: "$450/mo",
        features: [
          "15 blog posts / month",
          "20 backlinks",
          "200 business listings (all-time)",
          "35 primary keywords",
          "Full technical SEO audit + schema markup",
          "Weekly rank tracking (35 kw)",
          "Monthly competitor analysis + gap report",
          "Monthly report + bi-weekly strategy call",
          "Priority support + dedicated SEO strategist",
        ],
      },
    ],
  },
  {
    name: "Social Media Management",
    tiers: [
      { name: "Bronze", price: "$200/mo", features: ["2 platforms managed", "12 posts / month", "Custom graphics", "Basic content calendar"] },
      { name: "Silver", price: "$300/mo", popular: true, features: ["3 platforms managed", "20 posts / month", "Custom graphics", "Content calendar + performance reporting"] },
      { name: "Gold", price: "$400/mo", features: ["4+ platforms managed", "30 posts / month", "Custom graphics", "Video content + influencer outreach"] },
    ],
  },
  {
    name: "Paid Ads (PPC / Meta)",
    tiers: [
      { name: "Bronze", price: "$250/mo", features: ["1 platform (Google or Meta)", "Setup + monthly optimization", "3 ad copy variations, 2 static image ads", "Ad spend billed separately"] },
      { name: "Silver", price: "$400/mo", popular: true, features: ["2 platforms", "+ A/B testing + retargeting", "5 ad copy variations, 4 static + 1 video ad", "Ad spend billed separately"] },
      { name: "Gold", price: "$600/mo", features: ["3-4 platforms (+ TikTok / LinkedIn)", "Full-funnel strategy", "8 ad copy variations, 6 static + 3 video ads", "Ad spend billed separately"] },
    ],
  },
  {
    name: "Web Design & Development",
    tiers: [
      { name: "Bronze", price: "$150/mo", features: ["Up to 5 pages", "Domain + hosting setup", "Basic template design", "3 custom graphics / banners", "SSL + basic backup"] },
      { name: "Silver", price: "$300/mo", popular: true, features: ["Up to 10 pages", "Custom (non-template) design", "Contact forms + mobile optimization", "8 custom graphics + 1 promo video", "SSL + weekly backups + malware scan"] },
      { name: "Gold", price: "$500/mo", features: ["Up to 20 pages", "Full custom + e-com / booking integration", "Speed optimization", "15+ custom graphics + 2 promo videos", "SSL + daily backups + firewall + uptime monitoring"] },
    ],
  },
  {
    name: "Branding",
    tiers: [
      { name: "Bronze", price: "$150/mo", features: ["1 logo concept, 2 revisions", "Basic brand color palette"] },
      { name: "Silver", price: "$250/mo", popular: true, features: ["2 logo concepts, 4 revisions", "Color palette + typography guide + business card"] },
      { name: "Gold", price: "$400/mo", features: ["3 logo concepts, unlimited revisions", "Full brand style guide + business card + letterhead", "Social media brand kit"] },
    ],
  },
  {
    name: "Creative Services",
    tiers: [
      { name: "Bronze", price: "$200/mo", features: ["5 static designs", "1 short-form video edit (up to 30 sec)"] },
      { name: "Silver", price: "$350/mo", popular: true, features: ["10 static designs", "3 short-form video edits", "1 campaign creative concept"] },
      { name: "Gold", price: "$550/mo", features: ["20 static designs", "6 short-form video edits", "3 campaign creative concepts + storyboard / concept planning"] },
    ],
  },
];

const TERMS = [
  { term: "Contract length", value: "Month-to-month" },
  { term: "Annual commit discount", value: "20% off" },
  { term: "Payment terms", value: "Net 0 (charged on 1st of month)" },
  { term: "Setup fees", value: "$0" },
  { term: "Cancellation", value: "30-day notice, no penalty" },
  { term: "Refunds", value: "Pro-rata for unused months" },
  { term: "Ad spend", value: "Billed separately, not included in management fees" },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title={
          <>
            Same quality. <em className="font-serif not-italic text-lime-400">Fraction of the cost.</em>
          </>
        }
        subhead="By design. No setup fees. No long contracts. 20% off annual."
      />

      <TldrBox
        title="Pricing at a glance"
        items={[
          "White-label SEO: $250 / $200 / $150 per client per month — same engine at every tier.",
          "Direct SEO: Bronze $250 / Silver $350 / Gold $450 per month.",
          "All white-label services tiered $150-$250 per client, same offering per tier.",
          "20% off annual · No setup fees · Month-to-month.",
          "USD default; AUD/GBP/EUR on request.",
        ]}
      />

      {/* ============================================================ */}
      {/* WHITE-LABEL — AGENCIES                                       */}
      {/* ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label SEO</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three tiers. <em className="font-serif not-italic text-lime-400">Same engine.</em> Better margin as you grow.
          </h2>
          <p className="mt-4 text-white/65 text-sm">
            Every white-label tier ships the same SEO engine. Price scales by client count, not by what you get.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 lg:grid-cols-3" stagger={0.08}>
          {WL_TIERS.map((t) => (
            <StaggerItem key={t.tier}>
              <div className={"bento h-full flex flex-col " + (t.popular ? "bento-feature card-glow" : "")}>
                {t.popular && <span className="pill pill-accent text-[10px] self-start">Most popular</span>}
                <h3 className="mt-2 text-xl font-semibold text-white">{t.tier}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-lime-400">{t.price}</span>
                  <span className="text-sm text-white/55">{t.per}</span>
                </div>
                <div className="mt-1 text-xs text-white/45">{t.min}</div>
                <ul className="mt-6 space-y-2 text-sm text-white/75 flex-1">
                  {WL_OFFERING.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-lime-400 mt-0.5 shrink-0">→</span> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <LinkButton
                  href={t.cta.href}
                  variant={t.popular ? "primary" : "ghost"}
                  className="mt-6 w-full justify-center"
                  size="md"
                >
                  {t.cta.label}
                </LinkButton>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Other white-label services — same $150/$200/$250 tiering, same offering per tier */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Other white-label services</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Same <em className="font-serif not-italic text-lime-400">$150-$250 tier structure.</em> Every service.
          </h2>
          <p className="mt-4 text-white/65 text-sm">
            Pick any service, run it under your brand. Each service has its own standardized offering at every tier — no surprises when a client upgrades.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {WL_OTHER_SERVICES.map((s) => (
            <StaggerItem key={s.service}>
              <div className="bento h-full">
                <h3 className="text-base font-semibold text-white">{s.service}</h3>
                <p className="mt-2 text-sm text-white/65">{s.description}</p>
                <div className="mt-3 text-xs text-lime-400 font-medium">
                  $250 / $200 / $150 per client per month
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Annual cost / margin example */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Annual cost</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Your margin <em className="font-serif not-italic text-lime-400">at 10 clients.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Option</th>
                  <th className="px-5 py-4 font-medium">Annual cost</th>
                  <th className="px-5 py-4 font-medium">Resell revenue</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-5 py-4 text-white/80">In-house SEO specialist</td>
                  <td className="px-5 py-4 line-through text-white/45">~~$96k-$144k~~</td>
                  <td className="px-5 py-4 text-white/60">N/A</td>
                  <td className="px-5 py-4 text-white/60">N/A</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-5 py-4 text-white/80">Other white-label providers</td>
                  <td className="px-5 py-4 line-through text-white/45">~~$48k-$96k~~</td>
                  <td className="px-5 py-4 text-white/70">$84k</td>
                  <td className="px-5 py-4 text-white/70">10-43%</td>
                </tr>
                <tr className="bg-lime-400/5">
                  <td className="px-5 py-4 text-white/85 font-medium">Omni Path · Growth (annual)</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">$19,200</td>
                  <td className="px-5 py-4 text-white/85">$84k</td>
                  <td className="px-5 py-4 text-lime-400 font-semibold">77%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-white/45">20% off annual applied. Resell at $700/client. Same engine at every tier.</p>
        </ScrollReveal>
      </Section>

      {/* ============================================================ */}
      {/* DIRECT — BUSINESSES                                          */}
      {/* ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">For my business</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Direct pricing. <em className="font-serif not-italic text-lime-400">Bronze, Silver, Gold.</em>
          </h2>
          <p className="mt-4 text-white/65 text-sm">
            Pick the tier that matches your stage. Same delivery team, same tools, just different scale.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-12">
          {DIRECT_SERVICES.map((svc) => (
            <div key={svc.name}>
              <ScrollReveal>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{svc.name}</h3>
              </ScrollReveal>
              <StaggerGroup className="grid gap-4 md:grid-cols-3" stagger={0.06}>
                {svc.tiers.map((t) => (
                  <StaggerItem key={t.name}>
                    <div className={"bento h-full flex flex-col " + (t.popular ? "bento-feature card-glow" : "")}>
                      {t.popular && <span className="pill pill-accent text-[10px] self-start">Most popular</span>}
                      <div className="mt-1 flex items-baseline justify-between gap-2">
                        <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                        <span className="text-2xl font-bold text-lime-400">{t.price}</span>
                      </div>
                      <ul className="mt-4 space-y-1.5 text-xs text-white/75 flex-1">
                        {t.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="text-lime-400 mt-1 shrink-0">→</span> <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <LinkButton href="/contact" variant={t.popular ? "primary" : "ghost"} className="mt-5 w-full justify-center" size="sm">
                        Get started
                      </LinkButton>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </Section>

      {/* Payment terms */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Payment terms</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            No surprises. <em className="font-serif not-italic text-lime-400">Ever.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <tbody>
                {TERMS.map((t) => (
                  <tr key={t.term} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4 text-white/60 font-medium">{t.term}</td>
                    <td className="px-5 py-4 text-white/90">{t.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      <FaqSection eyebrow="FAQ" title="Pricing questions." items={pricingFaq} />

      <CtaSection
        title={
          <>
            Not sure which tier? <em className="font-serif not-italic text-lime-400">Start with 1 client.</em>
          </>
        }
        subhead="The Starter tier is built for testing. Move up when you see results."
        primaryCta={{ label: "Start with 1 client", href: "/contact" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id="ld-faq-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pricingFaq)) }}
      />
      <Script
        id="ld-bc-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Pricing", url: "/pricing" }])) }}
      />
    </>
  );
}
