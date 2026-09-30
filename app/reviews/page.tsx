import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Operator-led SEO tool reviews · 6 programs",
  description:
    "Honest, hands-on reviews of the 6 SEO and content tools we actually use on client campaigns. Semrush, Mangools, SE Ranking, Surfer SEO, Hunter.io, Frase, plus Ahrefs comparisons.",
  path: "/reviews",
});

const PROGRAMS = [
  {
    slug: "semrush",
    name: "Semrush",
    sv: "440",
    cpc: "$13.76",
    blurb: "The flagship. All-in-one SEO platform with the largest keyword database and the deepest competitor analysis.",
    status: "active",
  },
  {
    slug: "mangools",
    name: "Mangools",
    sv: "90",
    cpc: "$51.59",
    blurb: "Five lightweight SEO tools (KWFinder, SERPWatcher, LinkMiner, SiteProfiler, SERPChecker). The stack I open daily.",
    status: "active",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    sv: "360",
    cpc: "$22.56",
    blurb: "Strong Semrush alternative with the best white-label reporting for agencies. Direct head-to-head below.",
    status: "active",
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    sv: "190",
    cpc: "$21.01",
    blurb: "Content optimization layer. Briefs, NLP keywords, and on-page scoring — the tool I open right before publishing.",
    status: "active",
  },
  {
    slug: "hunter-io",
    name: "Hunter.io",
    sv: "70",
    cpc: "$13.55",
    blurb: "Email finding and verification. The Chrome extension is open in my browser every workday for cold outreach.",
    status: "active",
  },
  {
    slug: "frase",
    name: "Frase",
    sv: "100",
    cpc: "$8.03",
    blurb: "SERP analysis and AI outline generation. The piece before Surfer in my content-brief workflow.",
    status: "active",
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    sv: "44,300",
    cpc: "$20.04",
    blurb: "Compare-only pillar. Strongest backlink index in the industry. Most comparisons live as clusters under Semrush and Mangools.",
    status: "compare-only",
  },
];

const USE_CASE_HUBS = [
  { slug: "best-seo-tools-for-agencies-2026", name: "Best SEO tools for agencies", sv: "830", cpc: "$57.65" },
  { slug: "agency-rank-tracker", name: "Agency rank tracker", sv: "1,300", cpc: "—" },
  { slug: "shopify-seo-tools", name: "Shopify SEO tools", sv: "590", cpc: "$12.77" },
  { slug: "best-seo-tools-for-ecommerce", name: "Best SEO tools for ecommerce", sv: "150", cpc: "$11.68" },
  { slug: "seo-tools-for-beginners", name: "SEO tools for beginners", sv: "310", cpc: "—" },
  { slug: "white-label-seo-tools", name: "White-label SEO tools", sv: "380", cpc: "$31.34" },
];

export default function ReviewsHubPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews · Operator-led"
        title={
          <>
            The SEO tools we{" "}
            <em className="font-serif not-italic text-blue-600">actually use.</em>
          </>
        }
        subhead="Hands-on reviews of every tool in our stack. Same tools on the same client campaigns. Honest take, operator voice, no sitewide banners."
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Affiliate disclosure</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            We earn a commission when you sign up via our links.
          </h2>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            Every review opens with an operator-voice disclosure in the first 100 words.
            We only recommend tools we actually run on client campaigns — Mangools and Semrush daily,
            Surfer for content briefs, Hunter.io for cold outreach, Frase for SERP analysis.
            No sitewide placements, no forced CTAs, no fake urgency. Read our{" "}
            <a href="/reviews/disclosure" className="text-blue-600 underline-offset-4 hover:underline">
              editorial policy
            </a>
            .
          </p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Program reviews</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Six programs.{" "}
            <em className="font-serif not-italic text-blue-600">One operator.</em>
          </h2>
          <p className="mt-4 text-neutral-900/65 leading-relaxed">
            Each program pillar links to its review, pricing breakdown, alternatives, and direct head-to-head
            comparisons against the other five. SV and CPC shown for the pillar's primary keyword
            (Mangools and agencies are the highest-CPC targets on the site).
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {PROGRAMS.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/reviews/${p.slug}`}
                className="bento bento-lg group block h-full overflow-hidden hover:border-blue-600/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </span>
                  {p.status === "compare-only" && (
                    <span className="text-[10px] uppercase tracking-widest text-neutral-900/45 shrink-0">
                      Compare-only
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-neutral-900/55">
                  Primary keyword: <span className="font-mono">{p.sv} SV</span> · <span className="font-mono">{p.cpc} CPC</span>
                </div>
                <div className="mt-3 text-sm text-neutral-900/75 leading-relaxed break-words">
                  {p.blurb}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-blue-600">
                  Read review →
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Use-case hubs</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            By use case.{" "}
            <em className="font-serif not-italic text-blue-600">By persona.</em>
          </h2>
          <p className="mt-4 text-neutral-900/65 leading-relaxed">
            Persona-targeted hubs link down to every program review. These are the broad-intent pages
            that capture "best X for Y" searches before the buyer knows which tool they want.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.03}>
          {USE_CASE_HUBS.map((h) => (
            <StaggerItem key={h.slug}>
              <Link
                href={`/${h.slug}`}
                className="bento bento-lg group block h-full overflow-hidden hover:border-blue-600/40 transition-colors"
              >
                <div className="text-base font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {h.name}
                </div>
                <div className="mt-1 text-xs text-neutral-900/55 font-mono">
                  {h.sv} SV · {h.cpc} CPC
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-blue-600">
                  Read hub →
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        title={
          <>
            Or hire us.{" "}
            <em className="font-serif not-italic text-blue-600">We run these tools for you.</em>
          </>
        }
        subhead="The same tools. The same workflow. Senior operators ship the work — we just don't make you learn the stack yourself."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Read our process", href: "/process" }}
      />
    </>
  );
}
