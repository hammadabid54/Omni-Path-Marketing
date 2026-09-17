import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Eyebrow, Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { LinkButton } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta";
import { BlogBlockRenderer } from "@/components/blog/blog-blocks";
import { buildMetadata, howtoSchema, itemListSchema } from "@/lib/seo";
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
    title: post.title,
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

  // JSON-LD Article schema (enhanced with mainEntityOfPage, keywords, articleSection, image)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://omnipathmarketing.com/blog/${slug}#article`,
    headline: post.title,
    description: post.description,
    url: `https://omnipathmarketing.com/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://omnipathmarketing.com/blog/${slug}` },
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "en",
    keywords: post.tags?.join(", ") || post.category,
    articleSection: post.category,
    image: post.hero || "https://omnipathmarketing.com/og/default.png",
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.title,
          url: author.slug ? `https://omnipathmarketing.com/about/${author.slug}` : undefined,
        }
      : { "@type": "Organization", name: "Omni Path Marketing" },
    publisher: {
      "@type": "Organization",
      name: "Omni Path Marketing",
      url: "https://omnipathmarketing.com",
      logo: { "@type": "ImageObject", url: "https://omnipathmarketing.com/logo.svg" },
    },
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <Section spacing="default" className="pt-16 md:pt-24">
        <ScrollReveal>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-900/55 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
        </ScrollReveal>

        <div className="max-w-3xl">
          {post.liveBadge && (
            <ScrollReveal>
              <div className="mb-5">
                <Badge variant="live">{post.liveBadge}</Badge>
              </div>
            </ScrollReveal>
          )}

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
            <p className="mt-5 text-lg text-neutral-900/70 leading-relaxed">
              {post.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-900/55">
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
                  <span className="text-neutral-900/45">· {post.authorTitle}</span>
                </Link>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readMinutes} min read
              </span>
              <span>
                <time dateTime={post.date} itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              {post.dateModified && post.dateModified !== post.date && (
                <span>
                  <time
                    dateTime={post.dateModified}
                    itemProp="dateModified"
                  >
                    Updated{" "}
                    {new Date(post.dateModified).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
              )}
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
              Get the full <em className="font-serif not-italic text-blue-600">dataset.</em>
            </h3>
            <p className="mt-3 text-neutral-900/70">
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
            <div className="rounded-2xl border border-blue-600/20 bg-blue-600/4 p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                Get our monthly <em className="font-serif not-italic text-blue-600">transparency report.</em>
              </h3>
              <p className="mt-3 text-neutral-900/70 max-w-md mx-auto">
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
        <Section className="border-t border-neutral-200/5">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <Eyebrow className="mb-3">Related posts</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Keep <em className="font-serif not-italic text-blue-600">reading.</em>
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
                  className="bento bento-lg group block hover:border-blue-600/40"
                >
                  <span className="pill text-[10px]">{r.category}</span>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-900/65 line-clamp-2">
                    {r.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-600">
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
        subhead="Request a 15-min call with a senior strategist, or get a free audit of your site."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Request a 15-min call", href: "/contact#enquiry" }}
      />

      <Script
        id={`ld-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== Inline HowTo (GBP blog only) ===== */}
      {slug === "dental-google-business-profile-optimization" && (
        <Script
          id={`ld-howto-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              howtoSchema({
                name: "Optimize a dental Google Business Profile to rank in the Map Pack",
                description:
                  "How dental practices claim, complete, populate, and measure a Google Business Profile to rank in the local Map Pack for \"dentist [city]\" queries.",
                path: `/blog/${slug}`,
                steps: [
                  {
                    name: "Claim and verify the dental GBP",
                    text:
                      "Go to business.google.com and search your practice name. If a listing exists, claim it; if not, create one. Verify via postcard (5-14 days), phone (immediate, where available), or video (when the others aren't an option). Verify every location separately — a DSO with ten offices has ten GBPs and ten flows. If you lost access after a manager or agency transition, Google's reinstatement flow runs 2-4 weeks with proof of management (utility bill, signage photo, or business license).",
                  },
                  {
                    name: "Complete the GBP so Google treats it as authoritative",
                    text:
                      "Profile completeness is a confirmed ranking factor — an incomplete profile loses to a complete one even with more reviews. Fill in NAP (matching the website and top directories exactly), primary category (\"Dentist\" for general practices, or a specialty category), secondary procedure categories, hours including holidays, named services (implants, Invisalign, full-arch, cosmetic, sedation, emergency), accessibility and payment attributes, and a 600-character patient-facing business description. Audit quarterly so hours fields don't decay against competitors who update more.",
                  },
                  {
                    name: "Upload photos and ship weekly GBP posts",
                    text:
                      "Photos and posts are ranking signals, not decoration — Google reads them as evidence the practice is current. Upload 50+ authentic, recent phone photos monthly: exterior, interior, operatories, team, technology (no patient photos without written consent). Ship at least one GBP post per week, 100-300 words, with a CTA button, and mix text, photo, offer, and event formats. Cadence matters more than word count: a weekly 100-word post beats a quarterly 800-word essay, and active profiles outrank stale ones in the Map Pack.",
                  },
                  {
                    name: "Build review velocity into the patient flow",
                    text:
                      "Reviews carry one of the heaviest Map Pack weights through star average, total count, and recency. After the March 2026 Google core update, fresh reviews carry about 2.3x the weight of older reviews, so a practice earning 8-15 new reviews per month beats a practice sitting at 300 reviews with no recent flow. Ask at appointment close-out with text-back requests two hours after the appointment (5-10x better conversion than email blasts). Reply to every review within four business hours. Avoid review gating — Google penalizes filtering patients before asking. Target band: 4.7+ stars, 50+ total reviews.",
                  },
                  {
                    name: "Track Map Pack metrics monthly in GBP Insights",
                    text:
                      "GBP Insights is free inside the dashboard and tracks the metrics that move phone calls: search queries (map to procedure pages), calls (route through Google's forwarding number so call data lands in Insights), direction requests, photo views vs competitors, and bookings if online booking is linked. Route analytics through HIPAA-aware server-side tagging rather than browser pixels — call recordings on Google's forwarding number can capture patient identifiers (first names, procedure types, callback numbers). Review monthly so you catch decay before the Map Pack does.",
                  },
                ],
              }),
            ),
          }}
        />
      )}

      {/* ===== Inline ItemList (dentist SEO checklist blog only) ===== */}
      {slug === "dentist-seo-checklist" && (
        <Script
          id={`ld-itemlist-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              itemListSchema({
                name: "Dental Google Business Profile optimization checklist",
                description:
                  "Eight GBP moves that move Map Pack rankings for dental practices in 2026. Roughly a third of Local Pack ranking weight sits on the GBP itself.",
                path: `/blog/${slug}#the-google-business-profile-checklist`,
                items: [
                  {
                    name: "Claim and verify every location",
                    description:
                      "Postcard, phone, or email — whichever Google offers. Each location gets its own GBP, not a parent dashboard.",
                    url: `/blog/${slug}#the-google-business-profile-checklist`,
                  },
                  {
                    name: "Pick the right primary category",
                    description:
                      "\"Dentist\" is the default. Add procedure-specific secondaries (dental implants, cosmetic dentist, pediatric dentist) where the practice actually does that work.",
                  },
                  {
                    name: "Fill in every field",
                    description:
                      "Hours, services, attributes (wheelchair access, insurance accepted, languages), payment methods, opening date. Profile completeness is a ranking factor.",
                  },
                  {
                    name: "Add procedure-level services",
                    description:
                      "List implants, Invisalign, full-arch, sedation, emergency, cleaning as named services on the GBP, not just on the website.",
                  },
                  {
                    name: "Upload 50+ authentic, recent photos",
                    description:
                      "Exterior, interior, operatories, team, technology. Owner-uploaded phone photos outperform stock.",
                  },
                  {
                    name: "Post weekly GBP updates",
                    description:
                      "Promotions, new technology, team spotlights, FAQs. Cadence matters more than word count.",
                  },
                  {
                    name: "Seed and answer every Q&A",
                    description:
                      "Pre-populate the most common ones yourself, then respond fast to patient-submitted questions.",
                  },
                  {
                    name: "Turn on GBP call tracking",
                    description:
                      "Use Google's forwarding number so call data lands in GBP Insights, not just your POS.",
                  },
                ],
              }),
            ),
          }}
        />
      )}
    </>
  );
}
