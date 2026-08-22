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
    "Done-for-you growth for ambitious brands. SEO, paid ads, web, branding, social, email. Bronze / Silver / Gold tiers. One team, one invoice. 60-70% lower than traditional agencies.",
  path: "/for-businesses",
});

// Direct (business) pricing — Bronze / Silver / Gold per XPRT-Marketing
// Service & Pricing Guide. Updated 2026-08-22.
const PRICING = [
  { tier: "SEO Bronze", price: "$250/mo", desc: "6 blogs, 5 backlinks, 100 listings, 10 keywords, monthly report" },
  { tier: "SEO Silver", price: "$350/mo", desc: "10 blogs, 10 backlinks, 150 listings, 20 keywords, monthly report + call" },
  { tier: "SEO Gold", price: "$450/mo", desc: "15 blogs, 20 backlinks, 200 listings, 35 keywords, weekly tracking, dedicated strategist" },
  { tier: "Social Media Bronze", price: "$200/mo", desc: "2 platforms, 12 posts, custom graphics, content calendar" },
  { tier: "Social Media Silver", price: "$300/mo", desc: "3 platforms, 20 posts, content calendar + performance reporting" },
  { tier: "Social Media Gold", price: "$400/mo", desc: "4+ platforms, 30 posts, video content + influencer outreach" },
  { tier: "Paid Ads Bronze", price: "$250/mo", desc: "1 platform, setup + monthly optimization, ad spend billed separately" },
  { tier: "Paid Ads Silver", price: "$400/mo", desc: "2 platforms, A/B testing, retargeting, 5 ad copies + 4 static + 1 video" },
  { tier: "Paid Ads Gold", price: "$600/mo", desc: "3-4 platforms, full-funnel strategy, 8 copies + 6 static + 3 video ads" },
  { tier: "Web Design Bronze", price: "$150/mo", desc: "Up to 5 pages, basic template, SSL + backup, 3 custom graphics" },
  { tier: "Web Design Silver", price: "$300/mo", desc: "Up to 10 pages, custom design, contact forms, 8 graphics + 1 promo video" },
  { tier: "Web Design Gold", price: "$500/mo", desc: "Up to 20 pages, e-com / booking ready, speed optimized, 15+ graphics + 2 videos" },
  { tier: "Branding Bronze", price: "$150/mo", desc: "1 logo concept, 2 revisions, basic color palette" },
  { tier: "Branding Silver", price: "$250/mo", desc: "2 logo concepts, 4 revisions, color + typography + business card" },
  { tier: "Branding Gold", price: "$400/mo", desc: "3 logo concepts, unlimited revisions, full style guide + social media kit" },
  { tier: "Creative Bronze", price: "$200/mo", desc: "5 static designs, 1 short-form video edit (30 sec)" },
  { tier: "Creative Silver", price: "$350/mo", desc: "10 static designs, 3 video edits, 1 campaign concept" },
  { tier: "Creative Gold", price: "$550/mo", desc: "20 static designs, 6 video edits, 3 campaign concepts + storyboard" },
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
              Most agencies charge $1,500-3,000/month for SEO. We charge $250-450 — Bronze / Silver / Gold. Same strategy, same deliverables, same results. The difference? We built our delivery pipeline on AI + automation, so our costs are 70% lower. We pass the savings to you.
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
