import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow, Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PROGRAMS } from "../_programs";
import { getReviewArticle } from "@/content/reviews";
import { ReviewBlockRenderer } from "@/components/reviews/review-blocks";
import { TableOfContents, extractH2Entries } from "@/components/shared/toc";
import { TEAM_BY_SLUG } from "@/content/team";

type Props = { params: Promise<{ program: string; cluster: string }> };

function findCluster(programSlug: string, clusterSlug: string) {
  const program = PROGRAMS.find((p) => p.slug === programSlug);
  if (!program) return null;
  const cluster = program.clusters.find((c) => c.slug === clusterSlug);
  if (!cluster) return null;
  return { program, cluster };
}

export function generateStaticParams() {
  const params: { program: string; cluster: string }[] = [];
  for (const program of PROGRAMS) {
    for (const cluster of program.clusters) {
      params.push({ program: program.slug, cluster: cluster.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { program, cluster } = await params;
  const found = findCluster(program, cluster);
  if (!found) return buildMetadata({ title: "Review not found", path: "/reviews" });
  const { program: p, cluster: c } = found;
  return buildMetadata({
    title: `${c.label} · ${p.name} review`,
    description: c.blurb,
    path: `/reviews/${p.slug}/${c.slug}`,
  });
}

export default async function ClusterArticlePage({ params }: Props) {
  const { program, cluster } = await params;
  const found = findCluster(program, cluster);
  if (!found) notFound();
  const { program: p, cluster: c } = found;

  const article = getReviewArticle(p.slug, c.slug);
  const isLive = article?.status === "live";
  const author = article ? TEAM_BY_SLUG[article.author] : null;

  // For "vs-X" cluster slugs, find the other program
  let compareOther: typeof PROGRAMS[number] | null = null;
  if (c.slug.startsWith("vs-")) {
    const otherSlug = c.slug.replace(/^vs-/, "");
    compareOther = PROGRAMS.find((x) => x.slug === otherSlug) ?? null;
  }

  const siblings = p.clusters.filter((x) => x.slug !== c.slug).slice(0, 6);

  // Build JSON-LD Article schema if we have a live article
  const schema = isLive && article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://omnipathmarketing.com/reviews/${p.slug}/${c.slug}#article`,
        headline: c.label,
        description: c.blurb,
        url: `https://omnipathmarketing.com/reviews/${p.slug}/${c.slug}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://omnipathmarketing.com/reviews/${p.slug}/${c.slug}`,
        },
        datePublished: article.date,
        dateModified: article.dateModified ?? article.date,
        inLanguage: "en",
        articleSection: `${p.name} review`,
        author: author
          ? {
              "@type": "Person",
              name: author.name,
              jobTitle: author.title,
              url: author.slug
                ? `https://omnipathmarketing.com/about/${author.slug}`
                : undefined,
            }
          : { "@type": "Organization", name: "Omni Path Marketing" },
        publisher: {
          "@type": "Organization",
          name: "Omni Path Marketing",
          url: "https://omnipathmarketing.com",
          logo: {
            "@type": "ImageObject",
            url: "https://omnipathmarketing.com/logo.svg",
          },
        },
      }
    : null;

  return (
    <>
      <Hero
        eyebrow={`${p.name} · Cluster article`}
        title={c.label}
        subhead={c.blurb}
      />

      {isLive && article && (
        <Section spacing="tight">
          {/* Article meta bar — author + date + read time */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-900/55">
              {author && (
                <Link
                  href={`/about/${author.slug}`}
                  className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600/15 text-blue-600 text-[11px] font-semibold uppercase">
                    {author.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="text-neutral-900/85 font-medium">{author.name}</span>
                  <span className="text-neutral-900/45">· {article.authorTitle}</span>
                </Link>
              )}
              <span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              {article.dateModified && article.dateModified !== article.date && (
                <span>
                  <time dateTime={article.dateModified}>
                    Updated{" "}
                    {new Date(article.dateModified).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
              )}
            </div>

            {/* Operator-voice disclosure */}
            <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                Affiliate disclosure
              </div>
              <p className="text-[15px] text-neutral-900/85 leading-relaxed">
                {article.disclosure}
              </p>
            </div>

            {/* TL;DR */}
            {(article.tldrBullets || article.tldr) && (
              <div className="mb-10 rounded-xl border border-neutral-200/15 bg-neutral-900/[0.02] p-5">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                  TL;DR
                </div>
                {article.tldrBullets && article.tldrBullets.length > 0 ? (
                  <ul className="space-y-2 text-[16px] text-neutral-900/85 leading-relaxed list-disc pl-5 marker:text-blue-600">
                    {article.tldrBullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[16px] text-neutral-900/85 leading-relaxed">
                    {article.tldr}
                  </p>
                )}
              </div>
            )}

            {/* Auto-generated TOC — top of article, before body */}
            <div className="mb-10">
              <TableOfContents entries={extractH2Entries(article.body)} />
            </div>

            {/* Article body */}
            <ReviewBlockRenderer blocks={article.body} />
          </div>
        </Section>
      )}

      {!isLive && (
        <>
          <Section>
            <div className="max-w-2xl">
              <Eyebrow className="mb-4">Affiliate disclosure</Eyebrow>
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                Operator-voice disclosure
              </h2>
              <p className="mt-4 text-neutral-900/70 leading-relaxed">
                We use {p.name} {p.usageNote} on real client campaigns. If you sign up via our link, we
                earn a commission at no extra cost to you. That&apos;s how this site stays free. We only
                recommend tools we actually run. Read our{" "}
                <Link href="/reviews/disclosure" className="text-blue-600 underline-offset-4 hover:underline">
                  editorial policy
                </Link>
                .
              </p>
            </div>
          </Section>

          <Section>
            <div className="max-w-2xl rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <Eyebrow className="mb-3">Status</Eyebrow>
              <p className="text-sm text-neutral-900/75 leading-relaxed">
                This article is on the publication roadmap. The keyword research is complete (see
                /data/affiliate-keywords/), the affiliate disclosure is set, and the cluster context is
                wired in. Full body content ships next.
              </p>
              {c.sv && (
                <dl className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <dt className="text-neutral-900/55">Search volume</dt>
                    <dd className="mt-1 font-mono font-semibold text-neutral-900">{c.sv}</dd>
                  </div>
                  {c.cpc && (
                    <div>
                      <dt className="text-neutral-900/55">CPC</dt>
                      <dd className="mt-1 font-mono font-semibold text-neutral-900">{c.cpc}</dd>
                    </div>
                  )}
                  {c.kd && (
                    <div>
                      <dt className="text-neutral-900/55">Difficulty</dt>
                      <dd className="mt-1 font-mono font-semibold text-neutral-900">{c.kd}</dd>
                    </div>
                  )}
                </dl>
              )}
            </div>
          </Section>
        </>
      )}

      {/* ===== Continue reading ===== */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Continue reading</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900">
            More from the {p.name} review
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.03}>
          {siblings.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/reviews/${p.slug}/${s.slug}`}
                className="bento bento-lg group block h-full hover:border-blue-600/40 transition-colors"
              >
                <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed line-clamp-3">
                  {s.blurb}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-blue-600">
                  Read article →
                </div>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link
              href={`/reviews/${p.slug}`}
              className="bento bento-lg group block h-full hover:border-blue-600/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                ← Back to {p.name} review
              </h3>
              <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed line-clamp-3">
                See the full cluster and all cross-pillar comparisons.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-blue-600">
                Browse all →
              </div>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {compareOther && (
        <Section>
          <ScrollReveal className="max-w-2xl">
            <Eyebrow className="mb-4">Cross-pillar</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              {p.name} vs {compareOther.name}
            </h2>
            <p className="mt-4 text-neutral-900/65 leading-relaxed">
              This comparison is part of the cross-pillar 6-node graph — every program pillar links to
              every other program pillar exactly once. Read the full {compareOther.name} review for the
              other half of this head-to-head.
            </p>
            <div className="mt-6">
              <LinkButton href={`/reviews/${compareOther.slug}`} variant="primary">
                Read the {compareOther.name} review →
              </LinkButton>
            </div>
          </ScrollReveal>
        </Section>
      )}

      <CtaSection
        title={
          <>
            Or hire us.{" "}
            <em className="font-serif not-italic text-blue-600">We run {p.name} for you.</em>
          </>
        }
        subhead="The same tool. The same workflow. Senior operators ship the work — we just don't make you learn the stack yourself."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Read our process", href: "/process" }}
      />

      {schema && (
        <Script
          id={`ld-review-${p.slug}-${c.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
