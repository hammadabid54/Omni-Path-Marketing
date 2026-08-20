import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { CostComparison } from "@/components/sections/cost-comparison";
import { InlineMarginPanel } from "@/components/sections/margin-card";
import { Testimonials } from "@/components/sections/testimonials";
import { agencyFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "White-Label Marketing Agency Partner Program | Omni Path",
  description:
    "Add AI-powered SEO, paid ads, and 6 more services to your agency without hiring. White-labeled under your brand. 60-70% margin. 14-day onboarding.",
  path: "/for-agencies",
});

const SERVICES = [
  { label: "White-label SEO", price: "$200/client", margin: "70%", resell: "$500-1,500/client" },
  { label: "Paid Ads", price: "$300/mo", margin: "65%", resell: "$800-1,500/mo" },
  { label: "Branding", price: "$150", margin: "60-70%", resell: "$500-1,500" },
  { label: "Web & CRO", price: "$300", margin: "60-70%", resell: "$1,000-3,000" },
  { label: "Social Media", price: "$500/mo", margin: "55%", resell: "$1,000-1,800/mo" },
  { label: "TikTok + LinkedIn", price: "$500/mo", margin: "55%", resell: "$1,000-1,800/mo" },
  { label: "Email & Lifecycle", price: "$500/mo", margin: "55%", resell: "$1,000-1,800/mo" },
  { label: "Analytics", price: "$500/mo", margin: "55%", resell: "$1,000-1,800/mo" },
];

const STEPS = [
  { number: "1", title: "Sign up", description: "5 minutes. Pick a tier, share your logo + colors, send your first 5 client domains." },
  { number: "2", title: "Onboarding (Days 1-14)", description: "We audit every domain, build 90-day roadmaps, set up white-label dashboards, hand you the partner kit." },
  { number: "3", title: "Delivery (Day 15+)", description: "Monthly content, links, on-page, reports — all shipped under your brand. You sell the next client." },
];

export default function ForAgenciesPage() {
  return (
    <>
      <Hero
        eyebrow="For agencies · white-label partner program"
        title={
          <>
            Your <em className="font-serif not-italic text-lime-400">unfair advantage.</em>
          </>
        }
        subhead="Add eight services to your agency without hiring. White-labeled under your brand. Resell at your own prices. We do the work."
        primaryCta={{ label: "See partner pricing", href: "/pricing" }}
        secondaryCta={{ label: "Talk to a partner manager", href: "/contact" }}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Services</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Eight services. <em className="font-serif not-italic text-lime-400">One margin opportunity.</em>
          </h2>
          <p className="mt-4 text-white/70">Resell any of these. Your logo. Your pricing. Your client never knows we exist.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Service</th>
                  <th className="px-5 py-4 font-medium">From price</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                  <th className="px-5 py-4 font-medium">Resell at</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4 text-white/85 font-medium">{s.label}</td>
                    <td className="px-5 py-4 text-white/70">{s.price}</td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">{s.margin}</td>
                    <td className="px-5 py-4 text-white/70">{s.resell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How it works</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            14 days from signup to your <em className="font-serif not-italic text-lime-400">first deliverable.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.1}>
          {STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bento bento-lg h-full">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 font-semibold">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <InlineMarginPanel
        title="Your margin math (10 clients)"
        intro="Pick a tier, price your services, and keep the spread. No hires. No overhead. Zero delivery work for your team."
        rows={[
          { label: "You pay us (10 × $200)", value: "$2,000/mo" },
          { label: "You charge clients (10 × $700)", value: "$7,000/mo" },
          { label: "Your margin", value: "$5,000/mo", highlight: true },
        ]}
        footer="71% margin · Zero delivery work · Cancel anytime"
      />

      <CostComparison
        columns={["Per-client cost", "Annual cost (10 clients)", "Margin if resell at $700"]}
        rows={[
          { label: "In-house SEO hire", values: ["~~$800-1,200~~", "~~$96k-144k~~", "N/A"] },
          { label: "Other white-label providers", values: ["~~$400-800~~", "~~$48k-96k~~", "10-43%"] },
          { label: "Omni Path", values: ["$200", "$24k", "71%"], highlight: true },
        ]}
        caption="Numbers are illustrative. Annual = 12 × monthly × clients. Resell at $700/client is the typical Growth tier price."
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why agencies choose us</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Stay invisible. <em className="font-serif not-italic text-lime-400">Move fast.</em> Make more.
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.08}>
          {[
            { t: "You stay invisible", d: "Every report, dashboard, deliverable — your logo, your colors, your client list. We work behind the curtain." },
            { t: "You move fast", d: "14-day onboarding. Add a new service to your agency this week, not next quarter." },
            { t: "You make more margin", d: "60-70% on resold services. Higher than in-house delivery and higher than other white-label providers." },
            { t: "You scale without risk", d: "No hires. No salary. No overhead. Just a per-client fee that scales with your growth." },
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
              "We used to outsource SEO at $600/client and barely break even. Omni Path does it for $200. We resell at $1,200 and pocket the difference. We doubled our margins in 90 days.",
            attribution: "James Mitchell",
            role: "Founder, Pixel & Co",
            highlight: "12 clients served via Omni Path",
          },
        ]}
      />

      <FaqSection eyebrow="FAQ" title="What agency partners ask." subhead="Straight answers, no pitch." items={agencyFaq} />

      <CtaSection
        title={
          <>
            Ready to add <em className="font-serif not-italic text-lime-400">eight services</em> to your agency?
          </>
        }
        subhead="See partner pricing, or talk to a partner manager about your specific niche."
        primaryCta={{ label: "See partner pricing", href: "/pricing" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id="ld-faq-agencies"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(agencyFaq)) }}
      />
      <Script
        id="ld-bc-agencies"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "For Agencies", url: "/for-agencies" }])) }}
      />
    </>
  );
}
