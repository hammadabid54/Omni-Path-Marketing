import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { Testimonials } from "@/components/sections/testimonials";
import { businessFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Digital Marketing Agency for Businesses | Omni Path",
  description:
    "Done-for-you growth for ambitious brands. AI-powered SEO, paid ads, web, branding, social, email. One team, one invoice. 60-70% lower than traditional agencies.",
  path: "/for-businesses",
});

const PRICING = [
  { tier: "Local SEO", price: "$400/mo", desc: "1 location, GBP, 2 blogs, 4 links, monthly report" },
  { tier: "Growth SEO", price: "$800/mo", desc: "Multi-location, 4 blogs, 8 links, content strategy" },
  { tier: "Enterprise SEO", price: "$2,000+/mo", desc: "Custom, dedicated team, weekly calls" },
  { tier: "Local + Website Care", price: "$600/mo", desc: "Local SEO + full website maintenance" },
  { tier: "Growth + Care (popular)", price: "$1,200/mo", desc: "Growth SEO + maintenance + content edits" },
  { tier: "Paid Ads Starter", price: "$500/mo", desc: "+ $1,500/mo min spend" },
  { tier: "Paid Ads Growth", price: "$1,000/mo", desc: "+ $3,000/mo min spend" },
  { tier: "Paid Ads Scale", price: "$2,000/mo", desc: "+ $10,000/mo min spend" },
  { tier: "Brand Identity", price: "$2,500", desc: "Logo, guide, messaging, pitch deck (14 days)" },
  { tier: "Landing Page", price: "$1,000", desc: "1 high-converting page (5 days)" },
  { tier: "Standard Site", price: "$2,500", desc: "5-8 pages (10 days)" },
  { tier: "Custom Site", price: "$5,000+", desc: "10-20 pages (14 days)" },
];

const STEPS = [
  { number: "1", title: "Free audit", description: "Submit your URL. Get a 20-point report in 60 seconds." },
  { number: "2", title: "Strategy call", description: "30 minutes. We learn your business, walk through the audit, recommend the right tier." },
  { number: "3", title: "Onboarding", description: "7 days. We audit deeper, build the 90-day plan, kick off delivery." },
  { number: "4", title: "Delivery + reporting", description: "Monthly. White-labeled work, monthly report, quarterly review." },
];

export default function ForBusinessesPage() {
  return (
    <>
      <Hero
        eyebrow="For businesses · done-for-you growth"
        title={
          <>
            Get a full growth team for <em className="font-serif not-italic text-lime-400">less than one senior hire.</em>
          </>
        }
        subhead="Done-for-you growth services for ambitious brands. SEO, paid ads, branding, content, web, email, social, analytics. All under one roof, one team, one invoice."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <ScrollReveal>
            <Eyebrow className="mb-4">The 80/20 story</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Why we&apos;re <em className="font-serif not-italic text-lime-400">half the cost</em> of other agencies.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>
              Most agencies charge $1,500-3,000/month for SEO. We charge $400-2,000. Same strategy, same deliverables, same results. The difference? We built our delivery pipeline on AI + automation, so our costs are 70% lower. We pass the savings to you.
            </p>
            <p className="mt-4">
              You get a full senior growth team for less than one mid-level hire. We earn your business every month. No long contracts, no setup fees, no surprises.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Pick a tier. <em className="font-serif not-italic text-lime-400">Scale when you&apos;re ready.</em>
          </h2>
          <p className="mt-4 text-white/70">Move between tiers as your needs change. No long contracts.</p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {PRICING.map((p) => (
            <StaggerItem key={p.tier}>
              <div className={"bento h-full " + (p.tier.includes("popular") ? "card-glow" : "")}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{p.tier}</h3>
                  <span className="text-lg font-bold text-lime-400">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-white/65">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How it works</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            From audit to live <em className="font-serif not-italic text-lime-400">in 7 days.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {STEPS.map((s) => (
            <StaggerItem key={s.number}>
              <div className="bento h-full">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 font-semibold">
                  {s.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why choose Omni Path</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            One team. <em className="font-serif not-italic text-lime-400">One invoice.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.06}>
          {[
            { t: "One team, one invoice", d: "No more managing 4 freelancers." },
            { t: "Half the cost", d: "AI + automation = 70% lower overhead = lower price for you." },
            { t: "Senior humans on the 20% that matters", d: "Strategy, QA, edge cases. Not just execution." },
            { t: "Month-to-month", d: "No long contracts. We earn your business every month." },
          ].map((c) => (
            <StaggerItem key={c.t}>
              <div className="bento h-full">
                <h3 className="text-lg font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{c.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Testimonials
        items={[
          {
            quote:
              "We went from invisible on Google to ranking top-3 for our top 10 keywords in 6 months. Inbound leads went from 12 to 89 per month. Best money we spend.",
            attribution: "Founder, Acme Co (SaaS)",
            highlight: "8 → 47 top-3 keywords",
          },
        ]}
      />

      <FaqSection eyebrow="FAQ" title="Straight answers for business owners." items={businessFaq} />

      <CtaSection
        title={
          <>
            Ready to <em className="font-serif not-italic text-lime-400">stop juggling agencies?</em>
          </>
        }
        subhead="Get a free audit, or book a 15-min call. Either way, you'll know in 5 minutes if we're a fit."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id="ld-faq-businesses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(businessFaq)) }}
      />
      <Script
        id="ld-bc-businesses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "For Businesses", url: "/for-businesses" }])) }}
      />
    </>
  );
}
