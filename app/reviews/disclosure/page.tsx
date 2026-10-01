import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Editorial policy · Affiliate disclosure",
  description:
    "How we pick tools, how we test them, and how we disclose affiliate relationships on every review. Operator-led, FTC-compliant, no sitewide banners.",
  path: "/reviews/disclosure",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Editorial policy"
        title={
          <>
            How we run these{" "}
            <em className="font-serif not-italic text-blue-600">reviews.</em>
          </>
        }
        subhead="FTC-compliant affiliate disclosure, our testing methodology, and the editorial rules every /reviews/* article follows."
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Affiliate disclosure</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Operator-voice disclosure on every review.
          </h2>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            Every review on <code>/reviews/*</code> opens with an operator-voice affiliate disclosure in
            the first 100 words. We earn a commission when you sign up via our links, at no extra cost
            to you. That&apos;s how this site stays free.
          </p>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            We follow the FTC&apos;s 16 CFR Part 255 guidelines. Disclosure appears <em>before</em> any
            affiliate link. Disclosure language is in plain English, not legalese. We never use the
            phrase &ldquo;we may earn a commission&rdquo; without naming the specific tool — readers know exactly
            which link is monetized.
          </p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we don&apos;t do</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            No sitewide placements. No forced CTAs.
          </h2>
          <ul className="mt-4 space-y-3 text-neutral-900/70 leading-relaxed">
            <li>· No affiliate links in the sidebar, header, footer, or any global nav.</li>
            <li>· No more than three CTAs per article (intro disclosure, contextual mid-article, primary pre-conclusion).</li>
            <li>· No &ldquo;limited time offer&rdquo; urgency unless the program itself runs one.</li>
            <li>· No fake scarcity, no fake testimonials, no paid reviews disguised as organic.</li>
            <li>· No affiliate links in articles where the tool isn&apos;t the subject of the article.</li>
          </ul>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How we pick tools</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Only tools we actually run.
          </h2>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            We run six programs on real client campaigns: <strong>Semrush, Mangools, SE Ranking,
            Surfer SEO, Hunter.io, Frase</strong>. We add a tool to <code>/reviews/*</code> only
            after we&apos;ve used it for at least one paid client engagement (or 30 days of internal
            use, whichever is longer).
          </p>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            For tools we don&apos;t run personally — currently <strong>Ahrefs</strong> — we publish
            compare-only articles (vs-articles) where the comparison is grounded in our direct
            experience with the other tool in the head-to-head.
          </p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Methodology</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            How we test.
          </h2>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            For every full review, we run the tool on a real client campaign for at least 4 weeks.
            We score on a 12-point rubric: keyword database, rank tracking accuracy, competitor
            analysis depth, UI speed, learning curve, integrations, pricing transparency,
            customer support, white-label options, agency features, deliverability (where
            applicable), and reporting.
          </p>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            Reviews refresh quarterly. Pricing, features, and CPCs shift. We update{" "}
            <code>dateModified</code> on each article and note material changes in the intro.
          </p>
        </ScrollReveal>
      </Section>

      <CtaSection
        title={
          <>
            Read the reviews.{" "}
            <em className="font-serif not-italic text-blue-600">Skip the hype.</em>
          </>
        }
        subhead="Six programs. Forty-plus articles. Every cluster linked back to its pillar. The honest take on every SEO tool in our stack."
        primaryCta={{ label: "See all reviews", href: "/reviews" }}
        secondaryCta={{ label: "Hire us instead", href: "/pricing" }}
      />
    </>
  );
}
