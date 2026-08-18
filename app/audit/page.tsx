import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { AuditForm } from "@/components/audit/audit-form";
import { auditFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free SEO Audit · 20-Point Report in 60 Seconds",
  description:
    "Drop in your URL. We'll scan 20 SEO issues in 60 seconds and email you a scored, branded report. No credit card. No sales call.",
  path: "/audit",
});

const CHECKS = [
  "Meta title length + keyword presence",
  "Meta description presence",
  "H1 + heading hierarchy",
  "Image alt text coverage",
  "Internal + external link health",
  "Schema.org JSON-LD presence",
  "Page speed (LCP, FID, CLS)",
  "Mobile-friendly test",
  "SSL + canonical + sitemap",
  "Domain age + WHOIS",
  "Backlink count + top referring domains",
  "Top 5 keyword rankings",
];

export default function AuditPage() {
  return (
    <>
      <Hero
        eyebrow="Free tool · 20-point audit · Delivered in 60 seconds"
        title={
          <>
            See what&apos;s <em className="font-serif not-italic text-lime-400">hurting your rankings.</em>
          </>
        }
        subhead="Drop in your URL. We'll scan 20 SEO issues in 60 seconds and email you a scored, branded report. No credit card. No sales call."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <AuditForm />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/55">Your report covers</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">·</span>
                  <span>{c}</span>
                </li>
              ))}
              <li className="text-white/50">+ 8 more in the full PDF</li>
            </ul>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-white/55">Why trust this audit?</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>· Built on the same tools we use daily — Ahrefs, Lighthouse, Puppeteer</li>
              <li>· No spam — your email is only used to send the audit. Unsubscribe anytime.</li>
              <li>· No sales call required — get the report, decide if you want help</li>
              <li>· Used by 100+ clients — agencies and brands use this to benchmark</li>
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What the report looks like</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            A 15-20 page PDF. <em className="font-serif not-italic text-lime-400">Scored, ranked, actionable.</em>
          </h2>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>· Overall SEO score (0-100)</li>
            <li>· Section scores (technical, on-page, content, links, performance)</li>
            <li>· Top 5 issues ranked by impact</li>
            <li>· 5 quick wins you can ship today</li>
            <li>· Competitor comparison (if you provide one)</li>
            <li>· 90-day prioritized action plan</li>
          </ul>
        </ScrollReveal>
      </Section>

      <FaqSection eyebrow="FAQ" title="Audit questions." items={auditFaq} />

      <CtaSection
        title={<>Ready to see <em className="font-serif not-italic text-lime-400">what&apos;s wrong?</em></>}
        subhead="Submit your URL. Get a 20-point report in 60 seconds. Then decide if you want help."
        primaryCta={{ label: "Run my free audit", href: "#" }}
      />

      <Script
        id="ld-faq-audit"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(auditFaq)) }}
      />
      <Script
        id="ld-bc-audit"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Audit", url: "/audit" }])) }}
      />
    </>
  );
}
