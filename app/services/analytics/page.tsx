import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { buildMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { BarChart3, Layers, Compass } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Analytics & Reporting · From $500/mo",
  description:
    "Custom dashboards, attribution modeling, fractional CMO. From $500/mo.",
  path: "/services/analytics",
});

const FEATURES = [
  { icon: BarChart3, title: "Dashboards", d: "Custom Looker Studio dashboards, embedded under your domain." },
  { icon: Layers, title: "Attribution", d: "Multi-touch attribution modeling. Know what actually drives revenue." },
  { icon: Compass, title: "Fractional CMO", d: "Senior strategy without the full-time cost. Quarterly planning, monthly reviews." },
];

export default function AnalyticsServicePage() {
  return (
    <>
      <Hero
        eyebrow="Analytics & Reporting"
        title={
          <>
            Dashboards + attribution.{" "}
            <em className="font-serif not-italic text-lime-400">Real ROI, real numbers.</em>
          </>
        }
        subhead="Custom Looker Studio dashboards, attribution modeling, fractional CMO services."
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <TldrBox
        items={[
          "Analytics & reporting from $500/mo white-label (55% margin) or $1,500/mo direct.",
          "Looker Studio dashboards, GA4 setup, attribution modeling, monthly reviews.",
          "Fractional CMO available for Growth tier and up. Quarterly planning included.",
        ]}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What you get</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Clarity, not <em className="font-serif not-italic text-lime-400">more dashboards.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.05}>
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
            From dashboards to <em className="font-serif not-italic text-lime-400">decisions.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {[
            { tier: "White-label", price: "$500/mo", desc: "Resell at $1,000-1,800/mo · 55% margin" },
            { tier: "Direct · Dashboard Build", price: "$1,500 one-time", desc: "Custom Looker Studio setup, 2-4 dashboards" },
            { tier: "Direct · Reporting", price: "$1,500/mo", desc: "Dashboards + monthly executive summary" },
            { tier: "Direct · Attribution", price: "$2,000/mo", desc: "Multi-touch attribution + monthly insights" },
            { tier: "Direct · Fractional CMO", price: "$3,500/mo", desc: "Quarterly planning + monthly reviews + on-call" },
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
        title={<>Ready to <em className="font-serif not-italic text-lime-400">know what works?</em></>}
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Script
        id="ld-service-analytics"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Analytics & Reporting", description: "Custom dashboards, attribution modeling, fractional CMO services.", path: "/services/analytics", serviceType: "Analytics", priceRange: "$500-$3500" })) }}
      />
      <Script
        id="ld-bc-analytics"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Analytics", url: "/services/analytics" }])) }}
      />
    </>
  );
}
