import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { LinkButton } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta";
import { BlogBlockRenderer } from "@/components/blog/blog-blocks";
import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS, BLOG_POST_BY_SLUG } from "@/content/blog";
import { TEAM_BY_SLUG } from "@/content/team";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POST_BY_SLUG[slug];
  if (!post) return { title: "Post not found" };
  return buildMetadata({
    title: `${post.title} | Omni Path Blog`,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POST_BY_SLUG[slug];
  if (!post) notFound();

  const author = TEAM_BY_SLUG[post.author];
  const related = (post.relatedSlugs ?? [])
    .map((s) => BLOG_POST_BY_SLUG[s])
    .filter(Boolean);

  // JSON-LD Article schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: author
      ? { "@type": "Person", name: author.name, jobTitle: author.title }
      : { "@type": "Organization", name: "Omni Path Marketing" },
    publisher: { "@type": "Organization", name: "Omni Path Marketing" },
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <Section spacing="default" className="pt-16 md:pt-24">
        <ScrollReveal>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-lime-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
        </ScrollReveal>

        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="pill pill-accent">{post.category}</span>
              {post.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              {post.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/55">
              {author && (
                <Link
                  href={`/about/${author.slug}`}
                  className="inline-flex items-center gap-2 hover:text-lime-400 transition-colors"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 text-[11px] font-semibold uppercase">
                    {author.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="text-white/85 font-medium">{author.name}</span>
                  <span className="text-white/45">· {post.authorTitle}</span>
                </Link>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readMinutes} min read
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ===== BODY ===== */}
      <Section spacing="tight">
        <article className="max-w-3xl mx-auto">
          <ScrollReveal>
            <BlogBlockRenderer blocks={post.body} />
          </ScrollReveal>
        </article>
      </Section>

      {/* ===== INLINE CTA ===== */}
      {post.gatedCta && (
        <Section spacing="tight">
          <div className="bento bento-lg text-center max-w-2xl mx-auto">
            <Eyebrow className="mb-3 eyebrow-accent">Get the report</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Get the full <em className="font-serif not-italic text-lime-400">dataset.</em>
            </h3>
            <p className="mt-3 text-white/70">
              Download the complete State of SEO 2026 report — 200-client benchmark data, anonymized, free with your email.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="input flex-1"
                aria-label="Email address"
              />
              <LinkButton href="/contact" variant="primary">
                Get the report
              </LinkButton>
            </form>
          </div>
        </Section>
      )}

      {/* ===== SUBSCRIBE CTA ===== */}
      {post.subscribeCta && !post.gatedCta && (
        <Section spacing="tight">
          <ScrollReveal>
            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/4 p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                Get our monthly <em className="font-serif not-italic text-lime-400">transparency report.</em>
              </h3>
              <p className="mt-3 text-white/70 max-w-md mx-auto">
                What we shipped, what worked, what didn&apos;t. One email per month. No spam.
              </p>
              <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="input flex-1"
                  aria-label="Email address"
                />
                <LinkButton href="/contact" variant="primary">
                  Subscribe
                </LinkButton>
              </form>
            </div>
          </ScrollReveal>
        </Section>
      )}

      {/* ===== RELATED POSTS ===== */}
      {related.length > 0 && (
        <Section className="border-t border-white/5">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <Eyebrow className="mb-3">Related posts</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Keep <em className="font-serif not-italic text-lime-400">reading.</em>
              </h2>
            </div>
            <LinkButton href="/blog" variant="ghost">
              All posts →
            </LinkButton>
          </div>

          <StaggerGroup className="grid md:grid-cols-3 gap-4" stagger={0.05}>
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="bento bento-lg group block hover:border-lime-400/40"
                >
                  <span className="pill text-[10px]">{r.category}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white leading-snug group-hover:text-lime-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 line-clamp-2">
                    {r.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-lime-400">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      )}

      <CtaSection
        title={
          <>
            Want to talk to the team that wrote this?
          </>
        }
        subhead="Book a 15-min call with a senior strategist, or get a free audit of your site."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id={`ld-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
