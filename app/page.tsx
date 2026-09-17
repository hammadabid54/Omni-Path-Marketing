import { ProofPreview } from "@/components/sections/proof-preview";
import { Building2, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import {
  Search, Megaphone, PenTool, Globe, Share2, Tv, Mail, BarChart3,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ServiceBento, type BentoService } from "@/components/sections/service-bento";
import { PdfPortfolio } from "@/components/sections/pdf-portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { homeFaq } from "@/content/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Marketing Agency · White-Label & Direct | Omni Path",
  description:
    "AI-powered digital marketing agency. White-label from $150-250/client (same engine at every tier). Direct Bronze/Silver/Gold from $250/mo. SEO, paid ads, web, branding, social, email, analytics.",
  path: "/",
});

const SERVICES: BentoService[] = [
  {
    icon: Search,
    title: "SEO",
    description: "White-label, automated, AI-powered. From $150/client at Scale (15+). Same engine at every tier.",
    href: "/services/seo",
    fromPrice: "$150-250/client",
    feature: true,
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    description: "Google + Meta. Bronze / Silver / Gold. Ad spend billed separately.",
    href: "/services/paid-ads",
    fromPrice: "From $250/mo",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Logo, identity, full brand system. Bronze / Silver / Gold tiers.",
    href: "/services/branding",
    fromPrice: "From $150/mo",
  },
  {
    icon: Globe,
    title: "Web & CRO",
    description: "Sites, landing pages, e-com. Mobile-first, fast, SEO-ready.",
    href: "/services/web-design",
    fromPrice: "From $150/mo",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Organic posts, community, short-form. Bronze / Silver / Gold.",
    href: "/services/social-media",
    fromPrice: "From $200/mo",
  },
  {
    icon: Tv,
    title: "TikTok + LinkedIn",
    description: "B2B LinkedIn + Gen Z TikTok ad buying. Bronze / Silver / Gold.",
    href: "/services/tiktok-linkedin-ads",
    fromPrice: "From $250/mo",
  },
  {
    icon: Mail,
    title: "Email & Lifecycle",
    description: "Klaviyo, HubSpot, ActiveCampaign. Welcome series, win-backs, behavioral triggers.",
    href: "/services/email-lifecycle",
    fromPrice: "From $200/mo",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Custom dashboards, attribution modeling, fractional CMO. Real ROI, real numbers.",
    href: "/services/analytics",
    fromPrice: "From $200/mo",
  },
];

const PROCESS_STEPS = [
  { number: "1", title: "AI site audit", description: "We review your site and identify the biggest opportunities.", meta: "5 min · automated" },
  { number: "2", title: "Senior strategist", description: "Reviews audit, picks top 5 priorities, writes the 90-day plan.", meta: "30 min · human" },
  { number: "3", title: "AI content draft", description: "Content and creative take shape around your audience and goals.", meta: "60 min · automated" },
  { number: "4", title: "QA + edit", description: "Strategist reviews, adds insights, approves the final cut.", meta: "15 min · human" },
  { number: "5", title: "Publish + report", description: "Live, backlinks tracked, white-label PDF auto-generated.", meta: "5 min · automated" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Your growth. Our team."
        rightRail={<ProofPreview />}
        title={
          <>
            Stop hiring five agencies.{" "}
            <em className="font-serif not-italic text-blue-600">Hire us once.</em>
          </>
        }
        subhead="We run the full growth stack for ambitious brands — and for the agencies that serve them. SEO, ads, branding, content, web, email, social, analytics. White-label or done-for-you."
        primaryCta={{ label: "I'm a business", href: "/for-businesses" }}
        secondaryCta={{ label: "I'm an agency", href: "/for-agencies" }}
        trustMicrocopy="Business SEO from $250/mo · Agency SEO from $150/client at 15+ clients"
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

      <section className="section" aria-label="Choose how we work together"><div className="container-page grid gap-5 md:grid-cols-2">
        {[{icon:Building2,title:"Grow your business",text:"A dedicated team to plan and deliver your marketing. Choose a service or bring us the whole brief.",href:"/for-businesses",cta:"Explore business services",price:"SEO from $250/month"},{icon:Layers,title:"Scale your agency",text:"Add delivery capacity under your own brand. Keep the client relationship; we handle the agreed work.",href:"/for-agencies",cta:"Explore agency partnerships",price:"SEO from $150/client at 15+ clients"}].map(({icon:Icon,...item})=><a key={item.href} href={item.href} className="bento group"><Icon className="text-blue-600 mb-5" size={28} aria-hidden="true"/><h2 className="text-2xl font-semibold">{item.title}</h2><p className="mt-3 text-slate-600">{item.text}</p><p className="mt-4 text-sm text-slate-600">{item.price}</p><span className="mt-6 flex items-center gap-2 text-blue-700 font-medium">{item.cta}<ArrowRight size={17} aria-hidden="true"/></span></a>)}
      </div></section>

      <PdfPortfolio />

      <ServiceBento
        title={
          <>
            Pick what you need. <em className="font-serif not-italic text-blue-600">Build your growth plan.</em>
          </>
        }
        subhead="Specialist support for your business, or delivery under your agency’s brand."
        services={SERVICES.slice(0, 4)}
      />

      <div className="container-page pb-8"><LinkButton href="/services" variant="ghost">Explore all eight services <ArrowRight size={16} aria-hidden="true" /></LinkButton></div>

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
                    <em className="font-serif not-italic text-blue-600">One invoice.</em>
                  </h2>
                  <p className="mt-4 text-neutral-900/70 max-w-md">
                    SEO, content, social, email, one paid channel, and a monthly report — for less than the cost of one junior hire. AI does the heavy lifting, senior humans do the strategy.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-neutral-900/75">
                    {[
                      "White-label ready (your logo, your domain)",
                      "Monthly report + quarterly strategy call",
                      "Cancel anytime · 14-day onboarding",
                      "One agreed scope across your marketing channels",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl font-bold text-blue-600">$1,999</span>
                    <span className="text-sm text-neutral-900/55">/mo · management fee</span>
                    <span className="text-xs text-slate-600">Ad spend billed separately</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <LinkButton href="/contact?type=business&plan=Full%20Growth%20Stack#enquiry" variant="primary" size="md" magnetic>
                      Get this package
                    </LinkButton>
                    <LinkButton href="#bundle-inclusions" variant="ghost" size="md">
                      See what&apos;s included
                    </LinkButton>
                  </div>
                </div>

                <div id="bundle-inclusions" tabIndex={-1} className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    ["Technical SEO + on-page", "8-12 target keywords / mo"],
                    ["Blog content", "4 published posts / mo"],
                    ["Social media (3 channels)", "12-16 posts / mo"],
                    ["Email automation", "Welcome + 3 flows built"],
                    ["Paid ads (1 channel)", "Up to $5K ad spend managed"],
                    ["Monthly reporting", "Looker Studio dashboard"],
                    ["Quarterly strategy call", "60 min with senior strategist"],
                    ["Dedicated Slack channel", "< 4 hr response, business hrs"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg bg-neutral-900/4 border border-neutral-200/8 p-3">
                      <CheckCircle2 size={18} className="mb-2 text-blue-600" aria-hidden="true" /><div className="text-xs text-slate-600">{k}</div>
                      <div className="mt-1 text-neutral-900">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

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

      <ProcessSteps
        eyebrow="Process"
        title={
          <>
            A clear plan. <em className="font-serif not-italic text-blue-600">Careful execution.</em>
          </>
        }
        subhead="From the first audit to the monthly review, you know what happens next."
        steps={PROCESS_STEPS}
        totalNote="Every stage combines specialist review with tools that keep delivery efficient."
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
            Ready to <em className="font-serif not-italic text-blue-600">stop hiring five agencies?</em>
          </>
        }
        subhead="Get a free audit, or talk to a partner about white-label. Both take less than 5 minutes."
        primaryCta={{ label: "Get my free audit", href: "/audit" }}
        secondaryCta={{ label: "Request a 15-min call", href: "/contact#enquiry" }}
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
