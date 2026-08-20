import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { LinkButton } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta";
import { TrajectoryChart } from "@/components/case-study/trajectory-chart";
import { KeywordTable, LandingPageTable } from "@/components/case-study/data-tables";
import { ActivityChecklist } from "@/components/case-study/activity-checklist";
import { CaseStudyToc, type TocItem } from "@/components/case-study/case-study-toc";
import { CaseStudyCard } from "@/components/case-study/case-study-card";
import { buildMetadata } from "@/lib/seo";
import { CASE_STUDIES, CASE_STUDY_BY_SLUG } from "@/content/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDY_BY_SLUG[slug];
  if (!c) return { title: "Case study not found" };
  return buildMetadata({
    title: `${c.title} · ${c.vertical} Case Study | Omni Path`,
    description: c.summary,
    path: `/case-studies/${slug}`,
  });
}

const TOC: TocItem[] = [
  { id: "challenge", label: "The challenge" },
  { id: "strategy", label: "The strategy" },
  { id: "trajectory", label: "The trajectory" },
  { id: "keywords", label: "Top keywords" },
  { id: "pages", label: "Top pages" },
  { id: "activities", label: "What we did" },
  { id: "impact", label: "Business impact" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASE_STUDY_BY_SLUG[slug];
  if (!c) notFound();

  // Trajectory: derive from-to from the chart points
  const fromValue = c.trajectory[0]?.value ?? 0;
  const toValue = c.trajectory[c.trajectory.length - 1]?.value ?? 0;

  const related = c.relatedSlugs
    .map((s) => CASE_STUDY_BY_SLUG[s])
    .filter(Boolean)
    .map((r) => ({
      slug: r.slug,
      title: r.title,
      vertical: r.vertical,
      region: r.region,
      engagement: r.engagement,
      summary: r.summary,
      headline: r.cardHeadline,
      cardLabel: r.cardLabel,
      sparkline: r.trajectory.map((p) => p.value),
      tags: [r.vertical, r.region, r.engagement],
    }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://omnipathmarketing.com/case-studies/${slug}#case-study`,
    headline: c.h1,
    description: c.summary,
    url: `https://omnipathmarketing.com/case-studies/${slug}`,
    datePublished: "2026-02-01",
    dateModified: "2026-08-01",
    inLanguage: "en",
    keywords: [c.vertical, c.region, c.engagement, "AI marketing case study", "SEO results"],
    about: {
      "@type": "Service",
      name: "AI-Powered SEO",
      serviceType: c.vertical,
    },
    author: { "@type": "Organization", name: "Omni Path Marketing", url: "https://omnipathmarketing.com" },
    publisher: {
      "@type": "Organization",
      name: "Omni Path Marketing",
      url: "https://omnipathmarketing.com",
      logo: { "@type": "ImageObject", url: "https://omnipathmarketing.com/logo.svg" },
    },
    isBasedOn: `${c.sourceTag}, ${c.engagement} engagement window (${c.timeline})`,
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <Section spacing="default" className="pt-16 md:pt-24">
        <ScrollReveal>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/case-studies" className="hover:text-lime-400 transition-colors">
                  Case studies
                </Link>
              </li>
              <li aria-hidden className="text-white/30">›</li>
              <li>
                <Link href={`/case-studies?vertical=${encodeURIComponent(c.vertical)}`} className="hover:text-lime-400 transition-colors">
                  {c.vertical}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">›</li>
              <li className="text-white/85" aria-current="page">{c.title}</li>
            </ol>
          </nav>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <ScrollReveal>
              <div className="flex flex-wrap gap-2">
                <span className="pill pill-accent text-[10px]">{c.vertical}</span>
                <span className="pill text-[10px]">{c.region}</span>
                <span className="pill text-[10px]">{c.engagement}</span>
                <span className="pill text-[10px]">{c.service}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight">
                {c.h1}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
                {c.summary}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/contact" variant="primary" size="lg" magnetic>
                  Get a similar result →
                </LinkButton>
                <LinkButton href="/audit" variant="ghost" size="lg">
                  Get a free audit
                </LinkButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <aside className="bento bento-lg">
              <div className="text-xs uppercase tracking-widest text-lime-400 font-semibold">At a glance</div>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                <dt className="text-white/45">Vertical</dt><dd className="text-white">{c.vertical}</dd>
                <dt className="text-white/45">Region</dt><dd className="text-white">{c.region}</dd>
                <dt className="text-white/45">Service</dt><dd className="text-white">{c.vertical} ({c.service})</dd>
                <dt className="text-white/45">Engagement</dt><dd className="text-white">{c.engagement}</dd>
                <dt className="text-white/45">Timeline</dt><dd className="text-white">{c.timeline}</dd>
                <dt className="text-white/45">Data source</dt><dd className="text-white">{c.sourceTag}</dd>
              </dl>
            </aside>
          </ScrollReveal>
        </div>
      </Section>

      {/* ===== TOP STAT STRIP ===== */}
      <Section spacing="tight">
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-3" stagger={0.05}>
          {c.topStats.map((s, i) => (
            <StaggerItem key={s.label}>
              <div className="bento">
                <div className="text-xs uppercase tracking-widest text-white/45">{s.label}</div>
                <div className="mt-2 text-3xl font-bold text-lime">{s.value}</div>
                {s.from && (
                  <div className="mt-1 text-xs text-white/45">
                    <span className="line-through">{s.from}</span> → <span className="text-lime">{s.value}</span>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ===== BODY: sticky TOC + content ===== */}
      <Section>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
          <CaseStudyToc items={TOC} />

          <div className="max-w-3xl">
            {/* THE CHALLENGE */}
            <div id="challenge" className="scroll-mt-24">
              <Eyebrow className="mb-4">The challenge</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                <em className="font-serif not-italic text-lime-400">Page 2</em> is where dreams go to die.
              </h2>
              {c.challenge.map((p) => (
                <p key={p} className="mt-4 text-white/75 leading-relaxed">{p}</p>
              ))}
            </div>

            {/* THE STRATEGY */}
            <div id="strategy" className="scroll-mt-24 mt-16">
              <Eyebrow className="mb-4">The strategy</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                <em className="font-serif not-italic text-lime-400">Fix the foundation.</em> Then ship.
              </h2>
              {c.strategy.map((p) => (
                <p key={p} className={`mt-4 text-white/75 leading-relaxed`}>{p}</p>
              ))}

              <div className="mt-6 grid md:grid-cols-3 gap-3">
                <div className="bento">
                  <div className="text-3xl font-bold text-lime">3 weeks</div>
                  <div className="mt-1 text-sm text-white/65">technical rebuild</div>
                </div>
                <div className="bento">
                  <div className="text-3xl font-bold text-lime">27</div>
                  <div className="mt-1 text-sm text-white/65">pages shipped in 90 days</div>
                </div>
                <div className="bento">
                  <div className="text-3xl font-bold text-lime">18 mo</div>
                  <div className="mt-1 text-sm text-white/65">content calendar roadmap</div>
                </div>
              </div>
            </div>

            {/* THE TRAJECTORY (the chart) */}
            <div id="trajectory" className="scroll-mt-24 mt-16">
              <Eyebrow className="mb-4">The trajectory</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                <em className="font-serif not-italic text-lime-400">6 months,</em> the line tells the story.
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                Monthly trajectory over the engagement window. Source: {c.sourceTag}. We track the
                primary commercial metric, not vanity traffic.
              </p>

              <TrajectoryChart
                data={c.trajectory}
                label="Monthly organic clicks"
                fromValue={fromValue}
                toValue={toValue}
                className="mt-8"
              />

              <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg border border-white/8 p-3">
                  <div className="text-xs text-white/45">First ranking improvement</div>
                  <div className="mt-1 text-lg font-semibold text-lime">Day 18</div>
                </div>
                <div className="rounded-lg border border-white/8 p-3">
                  <div className="text-xs text-white/45">First-page ranking</div>
                  <div className="mt-1 text-lg font-semibold text-lime">Month 2</div>
                </div>
                <div className="rounded-lg border border-white/8 p-3">
                  <div className="text-xs text-white/45">Top-3 commercial keywords</div>
                  <div className="mt-1 text-lg font-semibold text-lime">Month 4</div>
                </div>
              </div>
            </div>

            {/* TOP KEYWORDS TABLE */}
            {c.keywords.length > 0 && (
              <div id="keywords" className="scroll-mt-24 mt-16">
                <Eyebrow className="mb-4">Top commercial keywords</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  Where the <em className="font-serif not-italic text-lime-400">money lives.</em>
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  The highest-value queries driving commercial clicks. Branded and local-intent
                  searches are the bread and butter — these are the people who book.
                </p>
                <div className="mt-6">
                  <KeywordTable rows={c.keywords} />
                </div>
              </div>
            )}

            {/* TOP PAGES TABLE */}
            {c.pages.length > 0 && (
              <div id="pages" className="scroll-mt-24 mt-16">
                <Eyebrow className="mb-4">Top landing pages</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  The pages that <em className="font-serif not-italic text-lime-400">actually convert.</em>
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  The 6-8 pages that carry 90% of the work. Service pages and location pages
                  drive the leads; the homepage carries the brand.
                </p>
                <div className="mt-6">
                  <LandingPageTable rows={c.pages} />
                </div>
              </div>
            )}

            {/* WHAT WE DID */}
            <div id="activities" className="scroll-mt-24 mt-16">
              <Eyebrow className="mb-4">What we did</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                10 <em className="font-serif not-italic text-lime-400">deliverables,</em> one outcome.
              </h2>
              <div className="mt-6">
                <ActivityChecklist items={c.activities} />
              </div>
            </div>

            {/* BUSINESS IMPACT */}
            <div id="impact" className="scroll-mt-24 mt-16">
              <Eyebrow className="mb-4">Business impact</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                From <em className="font-serif not-italic text-lime-400">invisible</em> to a full pipeline.
              </h2>

              <blockquote className="mt-6 bento bento-lg border-l-4 border-lime-400">
                <div className="text-2xl md:text-3xl font-serif italic text-white leading-snug">
                  &ldquo;{c.pullQuote.quote}&rdquo;
                </div>
                <div className="mt-4 text-sm text-white/55">— {c.pullQuote.attribution}</div>
              </blockquote>

              {c.impact.map((p) => (
                <p key={p} className="mt-6 text-white/75 leading-relaxed">{p}</p>
              ))}

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {c.impactMetrics.map((m) => (
                  <div key={m.label} className="bento text-center">
                    <div className="text-3xl font-bold text-lime">{m.value}</div>
                    <div className="mt-1 text-xs text-white/55">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== RELATED CASE STUDIES ===== */}
      {related.length > 0 && (
        <Section className="border-t border-white/5">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <Eyebrow className="mb-3">More case studies</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Same playbook, <em className="font-serif not-italic text-lime-400">different verticals.</em>
              </h2>
            </div>
            <LinkButton href="/case-studies" variant="ghost">
              All case studies →
            </LinkButton>
          </div>

          <StaggerGroup className="grid md:grid-cols-3 gap-4" stagger={0.05}>
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <CaseStudyCard data={r} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      )}

      {/* ===== FINAL CTA ===== */}
      <CtaSection
        title={
          <>
            Want to be the <em className="font-serif not-italic text-lime-400">next case study?</em>
          </>
        }
        subhead="Get a free audit, or book a 15-min call with a senior strategist. We'll show you exactly what's broken, what's working, and what we'd change in the first 30 days."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id={`ld-case-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
