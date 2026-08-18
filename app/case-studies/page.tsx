import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { CaseStudyCard } from "@/components/case-study/case-study-card";
import { buildMetadata } from "@/lib/seo";
import { CASE_STUDIES } from "@/content/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies · Real Results from Real Clients | Omni Path",
  description:
    "22 client wins across local SEO, enterprise SEO, and SaaS. Anonymized for the global brand. Real numbers. Real compounding.",
  path: "/case-studies",
});

const VERTICALS = Array.from(new Set(CASE_STUDIES.map((c) => c.vertical)));
const REGIONS = Array.from(new Set(CASE_STUDIES.map((c) => c.region)));

export default function CaseStudiesPage() {
  const cards = CASE_STUDIES.map((c) => ({
    slug: c.slug,
    title: c.title,
    vertical: c.vertical,
    region: c.region,
    engagement: c.engagement,
    summary: c.summary,
    headline: c.cardHeadline,
    cardLabel: c.cardLabel,
    sparkline: c.trajectory.map((p) => p.value),
    tags: [c.vertical, c.region, c.engagement],
  }));

  return (
    <>
      <Hero
        title={
          <>
            Real results. <em className="font-serif not-italic text-lime-400">From real clients.</em>
          </>
        }
        subhead="22 client wins across local SEO, enterprise SEO, and SaaS. Anonymized for the global brand. Real numbers. Real compounding."
        trustMicrocopy="All data sourced from Google Search Console, SEMrush, or client analytics. Anonymized for confidentiality."
      />

      <Section spacing="tight">
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/55">
          <span className="text-white/45 mr-1">Filter:</span>
          {VERTICALS.map((v) => (
            <span key={v} className="pill text-xs">
              {v} · {CASE_STUDIES.filter((c) => c.vertical === v).length}
            </span>
          ))}
          <span className="text-white/30 mx-1">|</span>
          {REGIONS.map((r) => (
            <span key={r} className="pill text-xs">
              {r} · {CASE_STUDIES.filter((c) => c.region === r).length}
            </span>
          ))}
        </div>
      </Section>

      <Section spacing="tight">
        <StaggerGroup className="grid gap-5 md:grid-cols-2" stagger={0.04}>
          {cards.map((c) => (
            <StaggerItem key={c.slug}>
              <CaseStudyCard data={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        title={
          <>
            Want to be the <em className="font-serif not-italic text-lime-400">next case study?</em>
          </>
        }
        subhead="Get a free audit, or book a 15-min call with a senior strategist."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />
    </>
  );
}
