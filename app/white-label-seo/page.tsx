import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { CostComparison } from "@/components/sections/cost-comparison";
import { MarginCard } from "@/components/sections/margin-card";
import { Testimonials } from "@/components/sections/testimonials";
import { TldrBox } from "@/components/sections/tldr-box";
import { agencyFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "White-Label AI SEO for Agencies · $150-$250/client",
  description:
    "AI-powered white-label SEO for agencies. $150-$250 per client. Same engine at every tier. 60-70% margin. 14-day onboarding. No setup fees.",
  path: "/white-label-seo",
});

// Standardized white-label SEO offering — same at every tier.
// Volume unlocks price, not features. Updated 2026-08-22.
const INCLUDED = [
  { t: "Monthly technical audit", d: "Full site crawl, Core Web Vitals, schema markup, site speed, index coverage. Flags what to fix, in priority order." },
  { t: "On-page optimization", d: "Title tags, meta descriptions, H1s, alt text, internal linking. Applied to priority pages each month." },
  { t: "2-4 blog posts / month", d: "SEO-optimized long-form content. AI-drafted, human-edited, keyword-mapped, image-included." },
  { t: "4-8 backlinks / month", d: "DR 30+ placements from vetted outreach partners. Anchor text and target pages chosen per client." },
  { t: "1 location optimization", d: "Google Business Profile setup, NAP consistency, local citations, geo-targeted content signals." },
  { t: "Keyword tracking (SE Ranking)", d: "10 keywords tracked via SE Ranking. Weekly rank pulls, SERP feature detection, competitor benchmarks." },
  { t: "Monthly white-label report", d: "Your logo, your colors, your client list. Auto-sent on the 1st of each month. PDF + live dashboard." },
];

const STEPS = [
  { number: "0", title: "Sign up", description: "Pick a tier, share your logo + brand colors, send your first 5 client domains. 5 minutes. No card needed to start." },
  { number: "1-14", title: "Onboarding", description: "We audit every domain, build 90-day roadmaps, set up white-label dashboards, hand you the partner kit. Daily Slack updates." },
  { number: "15+", title: "Delivery", description: "Monthly content, links, on-page, reports — all shipped under your brand. You sell the next client. Cancel anytime." },
];

export default function WhiteLabelSeoPage() {
  return (
    <>
      <Hero
        liveBadge="Now onboarding 8 new agency partners this month"
        title={
          <>
            White-label SEO for agencies.{" "}
            <em className="font-serif not-italic text-lime-400">$200/client.</em>
          </>
        }
        subhead="Add a full SEO delivery team to your agency without hiring. We do the work, you put your logo on it. Resell at $500-1,500/client and keep 60-70% margin."
        primaryCta={{ label: "Become a partner", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        trustMicrocopy="14-day onboarding · White-labeled reports · Cancel anytime"
        rightRail={
          <MarginCard
            eyebrow="Your margin math"
            title="10 clients at $700 resale"
            rows={[
              { label: "You pay us", value: "$2,000/mo" },
              { label: "You charge clients", value: "$7,000/mo" },
              { label: "Your margin", value: "$5,000/mo", highlight: true },
            ]}
            footer="71% margin · Zero delivery work"
            ctaText="See full pricing"
            ctaHref="/pricing"
          />
        }
      />

      <TldrBox
        items={[
          "White-label SEO: $250 (1 client) / $200 (5+ clients) / $150 (15+ clients) per month.",
          "Same engine at every tier — volume unlocks price, not features.",
          "Resell at $500-1,500/client for 60-70% margin.",
          "14-day onboarding, no setup fees, cancel anytime.",
        ]}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&apos;s included</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The same engine <em className="font-serif not-italic text-lime-400">at every tier.</em>
          </h2>
          <p className="mt-4 text-white/65 text-sm">
            Whether a client is paying you $500 or $1,500/month, the work we ship is identical. Only the price-per-client you pay us changes with volume.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {INCLUDED.map((c) => (
            <StaggerItem key={c.t}>
              <div className="bento h-full">
                <h3 className="text-lg font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How it works</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            14 days from signup to <em className="font-serif not-italic text-lime-400">first deliverable.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.1}>
          {STEPS.map((s) => (
            <StaggerItem key={s.title}>
              <div className="bento bento-lg h-full">
                <span className="inline-flex h-9 px-3 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 font-semibold text-xs uppercase tracking-widest">
                  Day {s.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CostComparison
        columns={["Per-client cost", "Annual cost (10 clients)", "Margin if resell at $700"]}
        rows={[
          { label: "In-house SEO hire (US/EU)", values: ["~~$800-1,200~~", "~~$96k-144k~~", "N/A"] },
          { label: "Other white-label providers", values: ["~~$400-800~~", "~~$48k-96k~~", "10-43%"] },
          { label: "Omni Path · Growth", values: ["$200", "$24k", "71%"], highlight: true },
        ]}
        caption="Annual cost assumes 20% off annual. 71% margin = $700 - $200 = $500 / $700."
      />

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

      <FaqSection eyebrow="FAQ" title="What agency partners ask." items={agencyFaq} />

      <CtaSection
        title={
          <>
            Ready to add <em className="font-serif not-italic text-lime-400">eight services</em> to your agency?
          </>
        }
        subhead="See partner pricing, or talk to a partner manager about your specific niche."
        primaryCta={{ label: "Become a partner", href: "/contact" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id="ld-service-wlseo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "White-Label SEO", description: "White-label SEO delivery for agencies. $200/client/month. 60-70% margin.", path: "/white-label-seo", serviceType: "White-Label SEO", priceRange: "$200-$250" })) }}
      />
      <Script
        id="ld-faq-wlseo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(agencyFaq)) }}
      />
      <Script
        id="ld-bc-wlseo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "For Agencies", url: "/for-agencies" }, { name: "White-Label SEO", url: "/white-label-seo" }])) }}
      />
    </>
  );
}
