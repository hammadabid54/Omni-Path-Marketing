import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { FileText, LineChart, BarChart3, PenLine } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Sample Work · Redacted Deliverables | Omni Path",
  description:
    "Real audits, blog posts, and reports from real client work. Redacted and anonymized. See what we actually ship.",
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
    </>
  );
}
