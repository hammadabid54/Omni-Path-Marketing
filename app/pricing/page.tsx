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
    "AI-powered marketing pricing. SEO from $200/client. Web design from $249. Branding in 5 days. Web in 3 days. No setup fees. Cancel anytime. 20% off annual.",
  path: "/pricing",
});

const TIERS = [
  {
    tier: "Starter",
    price: "$250",
    per: "/client/mo",
    min: "1 client",
    popular: false,
    features: [
      "Monthly technical audit",
      "2-4 blog posts/mo",
      "4-8 backlinks/mo",
      "White-label PDF report",
    ],
    cta: { label: "Start with 1 client", href: "/contact" },
  },
  {
    tier: "Growth",
    price: "$200",
    per: "/client/mo",
    min: "5+ clients",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Weekly technical audit",
      "4-8 blog posts/mo",
      "8-12 backlinks/mo",
      "Content strategy + dedicated strategist",
      "White-label PDF + dashboard",
    ],
    cta: { label: "Start at 5 clients", href: "/contact" },
  },
  {
    tier: "Scale",
    price: "$150",
    per: "/client/mo",
    min: "15+ clients",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "Custom content calendar",
      "8-16 blog posts/mo",
      "12-20 backlinks/mo",
      "Dedicated senior strategist",
      "Custom dashboard + partner manager",
      "Co-branded materials",
    ],
    cta: { label: "Scale to 15+", href: "/contact" },
  },
];

const DIRECT = [
  { tier: "Local SEO", price: "$400/mo", best: "Single-location businesses" },
  { tier: "Growth SEO", price: "$800/mo", best: "Multi-location, e-com starter" },
  { tier: "Enterprise SEO", price: "$2,000+/mo", best: "SaaS, e-com scale, multi-market" },
  { tier: "Local + Care bundle", price: "$600/mo", best: "Local SEO + full website maintenance" },
  { tier: "Growth + Care (popular)", price: "$1,200/mo", best: "Growth SEO + maintenance + content edits" },
  { tier: "Enterprise + Care", price: "$2,500+/mo", best: "Everything + dedicated manager" },
];

const ADDON = [
  { service: "Social Media Management", price: "$1,500-3,500/mo" },
  { service: "TikTok Ads", price: "$1,500/mo mgmt + $1,500 setup" },
  { service: "LinkedIn Ads", price: "$2,000/mo mgmt + $1,500 setup" },
  { service: "Email/Lifecycle (Klaviyo)", price: "$2,000/mo mgmt + $1,500 setup" },
  { service: "Analytics/Reporting", price: "$1,500/mo dashboards" },
];

const TERMS = [
  { term: "Contract length", value: "Month-to-month" },
  { term: "Annual commit discount", value: "20% off" },
  { term: "Payment terms", value: "Net 0 (charged on 1st of month)" },
  { term: "Setup fees", value: "$0" },
  { term: "Cancellation", value: "30-day notice, no penalty" },
  { term: "Refunds", value: "Pro-rata for unused months" },
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
          "White-label SEO: $250 / $200 / $150 per client per month.",
          "Direct SEO: $400 / $800 / $2,000+ per month.",
          "20% off annual · No setup fees · Month-to-month.",
          "USD default; AUD/GBP/EUR on request.",
        ]}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label SEO</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three tiers. <em className="font-serif not-italic text-lime-400">Same quality.</em> Better margin as you grow.
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 lg:grid-cols-3" stagger={0.08}>
          {TIERS.map((t) => (
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
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-lime-400 mt-0.5">→</span> {f}
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
          <p className="mt-3 text-xs text-white/45">20% off annual applied. Resell at $700/client.</p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">For my business</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Direct pricing. <em className="font-serif not-italic text-lime-400">Same delivery team.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {DIRECT.map((p) => (
            <StaggerItem key={p.tier}>
              <div className={"bento h-full " + (p.tier.includes("popular") ? "card-glow" : "")}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{p.tier}</h3>
                  <span className="text-lg font-bold text-lime-400">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-white/65">{p.best}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Add-ons</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Layer on the <em className="font-serif not-italic text-lime-400">rest of the stack.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <tbody>
                {ADDON.map((a) => (
                  <tr key={a.service} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4 text-white/85">{a.service}</td>
                    <td className="px-5 py-4 text-lime-400 font-medium text-right">{a.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

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
