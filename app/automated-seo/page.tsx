import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { Testimonials } from "@/components/sections/testimonials";
import { automatedSeoFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Automated SEO Service · From $400/month | Omni Path",
  description:
    "Done-for-you SEO with AI-powered audits, content, and links. From $400/month. No long contracts. See your site ranking in 90 days.",
  path: "/automated-seo",
});

const TIMELINE = [
  { step: "Day 1", what: "Free audit. Submit your URL, get a 20-point report in 60 seconds." },
  { step: "Day 2-7", what: "Strategy call (30 min) + 90-day plan. We learn your business, pick top 5 priorities, set the cadence." },
  { step: "Day 8-30", what: "Onboarding + first deliverables. Audit, on-page fixes, content calendar, first 2-4 blog posts, first link batch." },
  { step: "Month 2+", what: "Recurring delivery. Monthly content, links, on-page, reports. Quarterly review." },
];

const TIERS = [
  { tier: "Local", price: "$400/mo", includes: "1 location, GBP, 2 blogs/mo, 4 links/mo, monthly report" },
  { tier: "Growth (popular)", price: "$800/mo", includes: "Multi-location, technical SEO, 4 blogs/mo, 8 links/mo, content strategy, monthly call", popular: true },
  { tier: "Enterprise", price: "$2,000+/mo", includes: "Custom, multi-market, full content engine, dedicated team, weekly calls" },
];

const BUNDLES = [
  { name: "Local + Care", price: "$600/mo" },
  { name: "Growth + Care", price: "$1,200/mo" },
  { name: "Enterprise + Care", price: "$2,500+/mo" },
];

const RESULTS = [
  { time: "Month 1", what: "Audit complete. On-page fixes shipped. Content calendar live." },
  { time: "Month 2-3", what: "Initial ranking improvements. 10-30% increase in organic traffic." },
  { time: "Month 4-6", what: "Significant keyword rankings. 50-100% traffic increase. Leads from organic." },
  { time: "Month 6-12", what: "Top 3 rankings for 10+ keywords. 200-500% traffic increase. 30-50% of inbound leads from organic." },
];

export default function AutomatedSeoPage() {
  return (
    <>
      <Hero
        eyebrow="For businesses · done-for-you SEO"
        title={
          <>
            Rank higher. Convert more.{" "}
            <em className="font-serif not-italic text-lime-400">Scale faster.</em>
          </>
        }
        subhead="Done-for-you SEO with AI-powered audits, content, and links. From $400/month. No long contracts. See your site ranking in 90 days."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <TldrBox
        items={[
          "Automated SEO is SEO delivery powered by AI + automation, with senior humans doing the strategy and QA.",
          "Same quality as a traditional agency. 70% lower cost.",
          "From $400/month for Local. From $800/month for Growth. No setup fees, no long contracts.",
          "Realistic: ranking gains in 30-60 days. Significant traffic in 4-6 months. Top-3 in 6-12 months.",
        ]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <ScrollReveal>
            <Eyebrow className="mb-4">What is automated SEO?</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              AI does 80%. <em className="font-serif not-italic text-lime-400">Humans do 20%.</em> The 20% that matters.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>
              Automated SEO is SEO delivery powered by AI + automation, with senior humans doing the strategy and QA. We use tools like Puppeteer, Lighthouse, Ahrefs, and Surfer to do the heavy lifting (audits, research, content drafts, reports). Our strategists do the 20% that actually moves rankings: positioning, edge cases, content quality.
            </p>
            <p className="mt-4 text-lime-400 font-medium">The result? Same quality as a traditional agency. 70% lower cost.</p>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How it works</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            From audit to live <em className="font-serif not-italic text-lime-400">in 7 days.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {TIMELINE.map((t) => (
            <StaggerItem key={t.step}>
              <div className="bento h-full">
                <span className="text-xs uppercase tracking-widest text-lime-400 font-semibold">{t.step}</span>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">{t.what}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three tiers. <em className="font-serif not-italic text-lime-400">One transparent price.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Tier</th>
                  <th className="px-5 py-4 font-medium">Price</th>
                  <th className="px-5 py-4 font-medium">Includes</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((r, i) => (
                  <tr
                    key={i}
                    className={r.popular ? "border-b border-white/5 bg-lime-400/5 last:border-0" : "border-b border-white/5 last:border-0"}
                  >
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {r.tier}
                      {r.popular && <span className="ml-2 pill pill-accent text-[10px]">Popular</span>}
                    </td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">{r.price}</td>
                    <td className="px-5 py-4 text-white/70">{r.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Bundle</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Lock in with <em className="font-serif not-italic text-lime-400">SEO + Website Care.</em>
          </h2>
          <p className="mt-4 text-white/70">The lock-in product. Higher retention. Full website care + SEO from one team.</p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-3" stagger={0.06}>
          {BUNDLES.map((b) => (
            <StaggerItem key={b.name}>
              <div className="bento h-full flex items-center justify-between gap-3">
                <span className="font-semibold text-white">{b.name}</span>
                <span className="text-lime-400 font-bold">{b.price}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Results timeline</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            What to expect, <em className="font-serif not-italic text-lime-400">honestly.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {RESULTS.map((r) => (
            <StaggerItem key={r.time}>
              <div className="bento h-full">
                <span className="text-xs uppercase tracking-widest text-lime-400 font-semibold">{r.time}</span>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">{r.what}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Testimonials
        items={[
          {
            quote:
              "8 → 47 top-3 keywords in 6 months. Organic traffic 4,200 → 38,000 monthly. Inbound leads 12 → 89/month. ROI in 4 months.",
            attribution: "Acme Co (SaaS)",
            highlight: "+312% traffic",
          },
        ]}
      />

      <FaqSection eyebrow="FAQ" title="Automated SEO questions." items={automatedSeoFaq} />

      <CtaSection
        title={
          <>
            Ready to <em className="font-serif not-italic text-lime-400">stop being invisible</em> on Google?
          </>
        }
        subhead="Get a free audit, or book a 15-min strategy call. Either way, you'll have a 90-day plan in hand."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id="ld-service-auto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Automated SEO", description: "Done-for-you automated SEO with AI audits, content, and links. From $400/month.", path: "/automated-seo", serviceType: "SEO Automation", priceRange: "$400-$2000" })) }}
      />
      <Script
        id="ld-faq-auto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(automatedSeoFaq)) }}
      />
      <Script
        id="ld-bc-auto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Automated SEO", url: "/automated-seo" }])) }}
      />
    </>
  );
}
