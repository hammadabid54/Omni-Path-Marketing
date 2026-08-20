import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { buildMetadata, faqSchema, breadcrumbSchema, type FaqItem } from "@/lib/seo";
import { FileText, LineChart, BarChart3, PenLine } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Sample Work · Real AI Marketing Deliverables | Omni Path",
  description:
    "Real deliverables from real clients, names redacted. AI-powered SEO reports, paid ads dashboards, branding work, web builds. See the work before you commit.",
  path: "/samples",
});

const SAMPLES = [
  {
    icon: FileText,
    title: "SEO Audit (PDF)",
    desc: "20-point audit with scored sections, top 5 issues, top 5 wins, 90-day plan.",
    tag: "PDF · 15-20 pages",
  },
  {
    icon: PenLine,
    title: "AI-drafted blog post",
    desc: "Long-form post (1,500-2,500 words), AI-drafted, human-edited, image-included, SEO-optimized.",
    tag: "Google Doc / Markdown",
  },
  {
    icon: LineChart,
    title: "Monthly white-label report",
    desc: "Branded PDF report. Rankings, traffic, links, content shipped, next month plan.",
    tag: "PDF · 6-8 pages",
  },
  {
    icon: BarChart3,
    title: "Looker Studio dashboard",
    desc: "Real-time SEO dashboard, embedded under your domain. Client login optional.",
    tag: "Live link",
  },
];

export default function SamplesPage() {
  return (
    <>
      <Hero
        eyebrow="Samples · Redacted, real client work"
        title={
          <>
            See what we <em className="font-serif not-italic text-lime-400">actually ship.</em>
          </>
        }
        subhead="Real audits, blog posts, reports, and dashboards. Names redacted, numbers intact."
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Sample library</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Four sample types.{" "}
            <em className="font-serif not-italic text-lime-400">All real.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.08}>
          {SAMPLES.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <div className="bento bento-lg h-full">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white/45">{s.tag}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <p className="mt-8 text-sm text-white/55">
          Want a live walkthrough? Book a 15-min call and we&apos;ll share a redacted sample live in the meeting.
        </p>
        <LinkButton href="/contact" variant="primary" className="mt-4">
          Book a 15-min call
        </LinkButton>
      </Section>

      <CtaSection
        title={
          <>
            Want the full process <em className="font-serif not-italic text-lime-400">spelled out?</em>
          </>
        }
        primaryCta={{ label: "See our process", href: "/process" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Section>
        <Eyebrow className="mb-4">Related</Eyebrow>
        <div className="grid gap-3 sm:grid-cols-3">
          <LinkButton href="/for-agencies" variant="ghost" className="justify-start">
            <span className="block">
              <span className="text-xs uppercase tracking-widest text-white/45">For agencies</span>
              <span className="block text-white font-semibold mt-1">White-label partner program</span>
              <span className="block text-xs text-white/55 mt-1">All these samples can ship under your brand.</span>
            </span>
          </LinkButton>
          <LinkButton href="/case-studies" variant="ghost" className="justify-start">
            <span className="block">
              <span className="text-xs uppercase tracking-widest text-white/45">Proof</span>
              <span className="block text-white font-semibold mt-1">22 case studies</span>
              <span className="block text-xs text-white/55 mt-1">Real numbers from real engagements.</span>
            </span>
          </LinkButton>
          <LinkButton href="/process" variant="ghost" className="justify-start">
            <span className="block">
              <span className="text-xs uppercase tracking-widest text-white/45">Process</span>
              <span className="block text-white font-semibold mt-1">How we work</span>
              <span className="block text-xs text-white/55 mt-1">The full delivery pipeline, in plain English.</span>
            </span>
          </LinkButton>
        </div>
      </Section>

      <Script
        id="ld-faq-samples"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema([
              {
                question: "Are the sample deliverables real client work?",
                answer:
                  "Yes. Every sample is a real deliverable from a real client engagement. Names, faces, and identifying details are redacted. The numbers, the format, the writing, the design, the structure — all real.",
              },
              {
                question: "Do you sign NDAs before sharing samples?",
                answer:
                  "Yes. If your legal team needs an NDA before we share a sample from a specific client engagement, we sign one. Standard mutual NDA at no cost, signed within 48 hours.",
              },
              {
                question: "Can I see a sample specific to my industry?",
                answer:
                  "If we have a relevant client in your vertical (and not under NDA that prevents it), we can share redacted samples. If we don't, we can show you samples from adjacent verticals and walk you through how the same approach would apply to your business.",
              },
              {
                question: "Are the reports white-labeled under my brand?",
                answer:
                  "Yes. Every deliverable — audit PDFs, monthly reports, dashboards, blog posts, branding work — ships under your logo, your colors, your domain. Your client never sees us.",
              },
            ] as FaqItem[])
          ),
        }}
      />

      <Script
        id="ld-bc-samples"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Samples", url: "/samples" },
            ])
          ),
        }}
      />
    </>
  );
}
