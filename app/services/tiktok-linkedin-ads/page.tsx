import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { buildMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Briefcase, Video } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "TikTok + LinkedIn Ads · From $500/mo",
  description:
    "B2B LinkedIn ads + Gen Z TikTok ads. Done-for-you management. From $500/mo.",
  path: "/services/tiktok-linkedin-ads",
});

export default function TikTokLinkedInServicePage() {
  return (
    <>
      <Hero
        eyebrow="TikTok + LinkedIn Ads"
        title={
          <>
            Reach decision-makers (LinkedIn) and{" "}
            <em className="font-serif not-italic text-lime-400">Gen Z buyers</em> (TikTok).
          </>
        }
        subhead="B2B and consumer ad buying on the platforms that actually matter in 2026."
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <TldrBox
        items={[
          "TikTok ads from $500/mo mgmt + $1,500 setup. Gen Z + younger millennial reach.",
          "LinkedIn ads from $1,000/mo mgmt + $1,500 setup. B2B decision-makers.",
          "White-label available for agencies at 55% margin.",
        ]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <div className="bento bento-lg h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">LinkedIn Ads (B2B)</h3>
              <p className="mt-2 text-white/65 leading-relaxed">Reach decision-makers by job title, company, industry, seniority. The highest-intent ad platform for B2B.</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li>· Account-based marketing lists</li>
                <li>· Sponsored content + InMail</li>
                <li>· Lead-gen forms (no landing page needed)</li>
                <li>· Funnel-based retargeting</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bento bento-lg h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                <Video className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">TikTok Ads (Gen Z)</h3>
              <p className="mt-2 text-white/65 leading-relaxed">The platform Gen Z actually lives on. Spark Ads, in-feed video, TopView, and creator collabs.</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li>· UGC + creator-style creative</li>
                <li>· Spark Ads (boost organic posts)</li>
                <li>· Interest + behavior targeting</li>
                <li>· Catalog sales for e-com</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Flat management. <em className="font-serif not-italic text-lime-400">Aligned incentives.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2" stagger={0.05}>
          {[
            { tier: "TikTok Ads (Direct)", price: "$500/mo mgmt + $1,500 setup", desc: "Min ad spend $1,500/mo" },
            { tier: "LinkedIn Ads (Direct)", price: "$1,000/mo mgmt + $1,500 setup", desc: "Min ad spend $3,000/mo" },
            { tier: "White-label (TikTok)", price: "$500/mo", desc: "Resell at $1,000-1,800/mo · 55% margin" },
            { tier: "White-label (LinkedIn)", price: "$1,000/mo", desc: "Resell at $2,000-3,500/mo · 55% margin" },
          ].map((p) => (
            <StaggerItem key={p.tier}>
              <div className="bento h-full">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
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
        title={<>Ready to <em className="font-serif not-italic text-lime-400">reach the right people?</em></>}
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Script
        id="ld-service-ttli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "TikTok + LinkedIn Ads", description: "Done-for-you TikTok and LinkedIn ad management. B2B and Gen Z targeting.", path: "/services/tiktok-linkedin-ads", serviceType: "Paid Advertising", priceRange: "$500-$2000" })) }}
      />
      <Script
        id="ld-bc-ttli"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "TikTok + LinkedIn", url: "/services/tiktok-linkedin-ads" }])) }}
      />
    </>
  );
}
