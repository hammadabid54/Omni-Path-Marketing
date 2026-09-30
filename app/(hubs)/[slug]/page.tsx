import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { getHubArticle, getAllHubSlugs } from "@/content/hubs";
import { ReviewBlockRenderer } from "@/components/reviews/review-blocks";
import { TableOfContents, extractH2Entries } from "@/components/shared/toc";
import { TEAM_BY_SLUG } from "@/content/team";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllHubSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHubArticle(slug);
  if (!hub) return buildMetadata({ title: "Hub not found", path: "/" });
  return buildMetadata({
    title: hub.seoTitle,
    description: hub.seoDescription,
    path: `/${slug}`,
  });
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getHubArticle(slug);
  if (!hub) notFound();

  const author = TEAM_BY_SLUG[hub.author];
  const isLive = hub.status === "live";

  // Build JSON-LD Article schema
  const schema = isLive
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://omnipathmarketing.com/${slug}#article`,
        headline: hub.heroTitle,
        description: hub.seoDescription,
        url: `https://omnipathmarketing.com/${slug}`,
        datePublished: hub.date,
        dateModified: hub.dateModified ?? hub.date,
        inLanguage: "en",
        articleSection: "Use-case hub",
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
          logo: { "@type": "ImageObject", url: "https://omnipathmarketing.com/logo.svg" },
        },
      }
    : null;

  // Build related-hub links (cross-link between hubs)
  const relatedHubs: { slug: string; title: string }[] = [
    { slug: "best-seo-tools-for-agencies-2026", title: "Best SEO tools for agencies 2026" },
    { slug: "agency-rank-tracker", title: "Agency rank tracker" },
    { slug: "shopify-seo-tools", title: "Shopify SEO tools" },
    { slug: "seo-tools-for-beginners", title: "SEO tools for beginners" },
    { slug: "best-seo-tools-for-ecommerce", title: "Best SEO tools for ecommerce" },
    { slug: "white-label-seo-tools", title: "White-label SEO tools" },
  ].filter((h) => h.slug !== slug && hub.relatedSlugs?.includes(h.slug));

  return (
    <>
      <Hero
        eyebrow={hub.eyebrow}
        title={hub.heroTitle}
        subhead={hub.heroSubhead}
      />

      {isLive && (
        <Section spacing="tight">
          <div className="max-w-3xl mx-auto">
            {/* Author meta bar */}
            {author && (
              <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-900/55">
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
                  <span className="text-neutral-900/45">· {hub.authorTitle}</span>
                </Link>
                <span>
                  <time dateTime={hub.date}>
                    {new Date(hub.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
                {hub.dateModified && hub.dateModified !== hub.date && (
                  <span>
                    <time dateTime={hub.dateModified}>
                      Updated{" "}
                      {new Date(hub.dateModified).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                )}
              </div>
            )}

            {/* Auto-generated TOC */}
            <div className="mb-10">
              <TableOfContents entries={extractH2Entries(hub.body)} />
            </div>

            {/* Article body — uses the same ReviewBlockRenderer since block structure is identical */}
            <ReviewBlockRenderer blocks={hub.body} />
          </div>
        </Section>
      )}

      {/* Continue reading — cross-link to other hubs + program reviews */}
      {relatedHubs.length > 0 && (
        <Section>
          <ScrollReveal className="max-w-2xl">
            <Eyebrow className="mb-4">Continue reading</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900">
              More use-case hubs
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {relatedHubs.map((h) => (
              <Link
                key={h.slug}
                href={`/${h.slug}`}
                className="bento bento-lg group block hover:border-blue-600/40 transition-colors"
              >
                <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {h.title}
                </h3>
                <div className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-blue-600">
                  Read hub →
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaSection
        title={
          <>
            Or hire us.{" "}
            <em className="font-serif not-italic text-blue-600">We run these tools for you.</em>
          </>
        }
        subhead="The same stack. The same workflow. Senior operators ship the work — we just don't make you learn the stack yourself."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Browse all reviews", href: "/reviews" }}
      />

      {schema && (
        <Script
          id={`ld-hub-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
