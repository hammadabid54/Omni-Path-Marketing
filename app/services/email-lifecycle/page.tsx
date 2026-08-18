import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { buildMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Mail, ShoppingCart, Bell, Repeat } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Email & Lifecycle Marketing · From $500/mo",
  description:
    "Klaviyo, HubSpot, ActiveCampaign. Welcome series, win-backs, behavioral triggers. From $500/mo.",
  path: "/services/email-lifecycle",
});

const FEATURES = [
  { icon: Mail, title: "Welcome series", d: "Convert new subscribers into first-time buyers." },
  { icon: ShoppingCart, title: "Abandoned cart", d: "Recover 10-30% of lost e-com revenue automatically." },
  { icon: Bell, title: "Behavioral triggers", d: "Browse, view, add-to-wishlist — all trigger the right message." },
  { icon: Repeat, title: "Win-back + loyalty", d: "Re-engage lapsed customers and reward repeat buyers." },
];

export default function EmailLifecycleServicePage() {
  return (
    <>
      <Hero
        eyebrow="Email & Lifecycle Marketing"
        title={
          <>
            Email + lifecycle marketing that{" "}
            <em className="font-serif not-italic text-lime-400">prints money.</em>
          </>
        }
        subhead="Welcome series, abandoned cart, win-back, behavioral triggers. Klaviyo, HubSpot, ActiveCampaign."
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <TldrBox
        items={[
          "Email + lifecycle from $500/mo white-label (55% margin) or $2,000/mo direct.",
          "Klaviyo, HubSpot, ActiveCampaign — we work in whatever you use.",
          "Strategy, automation builds, segmentation, A/B testing, reporting — all included.",
        ]}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we do</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Lifecycle <em className="font-serif not-italic text-lime-400">that runs itself.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
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

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            One platform. <em className="font-serif not-italic text-lime-400">One team.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {[
            { tier: "White-label (Klaviyo / HubSpot)", price: "$500/mo", desc: "Resell at $1,000-1,800/mo · 55% margin" },
            { tier: "Direct · Setup", price: "$1,500 one-time", desc: "Strategy + first 3-5 automations built" },
            { tier: "Direct · Management", price: "$2,000/mo", desc: "Ongoing strategy, builds, A/B testing, reporting" },
          ].map((p) => (
            <StaggerItem key={p.tier}>
              <div className="bento h-full">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{p.tier}</h3>
                  <span className="text-sm font-bold text-lime-400">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-white/65">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        title={<>Ready to make email <em className="font-serif not-italic text-lime-400">your highest-ROI channel?</em></>}
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Script
        id="ld-service-email"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Email & Lifecycle Marketing", description: "Klaviyo, HubSpot, ActiveCampaign. Welcome series, abandoned cart, win-back, behavioral triggers.", path: "/services/email-lifecycle", serviceType: "Email Marketing", priceRange: "$500-$2000" })) }}
      />
      <Script
        id="ld-bc-email"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Email & Lifecycle", url: "/services/email-lifecycle" }])) }}
      />
    </>
  );
}
