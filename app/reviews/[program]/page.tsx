import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";
import { PROGRAMS, type ProgramSlug } from "./_programs";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ program: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ program: string }> }
): Promise<Metadata> {
  const { program } = await params;
  const p = PROGRAMS.find((x) => x.slug === program);
  if (!p) return buildMetadata({ title: "Review not found", path: "/reviews" });
  return buildMetadata({
    title: `${p.name} review · Operator-led`,
    description: p.blurb,
    path: `/reviews/${p.slug}`,
  });
}

export default async function ProgramPillarPage(
  { params }: { params: Promise<{ program: string }> }
) {
  const { program } = await params;
  const p = PROGRAMS.find((x) => x.slug === program) as
    | (typeof PROGRAMS)[number]
    | undefined;
  if (!p) notFound();

  // Only link to other programs where this program actually has a vs-X cluster
  // (i.e. an article has been written). Prevents dead-end "Review not found" links.
  const crossPillar = PROGRAMS.filter(
    (x) => x.slug !== p.slug && p.clusters.some((c) => c.slug === `vs-${x.slug}`)
  );

  return (
    <>
      <Hero
        eyebrow={`Review · ${p.name}`}
        title={
          <>
            {p.name}.{" "}
            <em className="font-serif not-italic text-blue-600">{p.tagline}</em>
          </>
        }
        subhead={p.blurb}
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Affiliate disclosure</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            We earn a commission when you sign up via our links.
          </h2>
          <p className="mt-4 text-neutral-900/70 leading-relaxed">
            We use {p.name} {p.usageNote} on real client campaigns. If you sign up via our link, we earn a
            commission at no extra cost to you. Read our{" "}
            <Link href="/reviews/disclosure" className="text-blue-600 underline-offset-4 hover:underline">
              editorial policy
            </Link>
            .
          </p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">In this review</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            What you'll find inside.
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2" stagger={0.03}>
          {p.clusters.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                href={`/reviews/${p.slug}/${c.slug}`}
                className="bento bento-lg group block h-full overflow-hidden hover:border-blue-600/40 transition-colors"
              >
                <div className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors break-words">
                  {c.label}
                </div>
                <div className="mt-1 text-xs text-neutral-900/55 font-mono">
                  {c.sv !== "—" && c.sv ? `${c.sv} SV` : "—"}
                  {c.cpc ? ` · ${c.cpc} CPC` : ""}
                  {c.kd ? ` · KD ${c.kd}` : ""}
                </div>
                <div className="mt-3 text-sm text-neutral-900/75 leading-relaxed break-words">
                  {c.blurb}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-blue-600">
                  {c.status === "live" ? "Read article →" : "Coming soon"}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Compare</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            {p.name} vs.{" "}
            <em className="font-serif not-italic text-blue-600">the rest of the stack.</em>
          </h2>
          <p className="mt-4 text-neutral-900/65 leading-relaxed">
            Direct head-to-head comparisons we've published. Each link below goes to a fully written article — not a placeholder.
          </p>
        </ScrollReveal>
        {crossPillar.length > 0 ? (
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.03}>
            {crossPillar.map((other) => (
              <StaggerItem key={other.slug}>
                <Link
                  href={`/reviews/${p.slug}/vs-${other.slug}`}
                  className="bento bento-lg group block h-full overflow-hidden hover:border-blue-600/40 transition-colors"
                >
                  <div className="text-sm font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors break-words">
                    {p.name} vs {other.name}
                  </div>
                  <div className="mt-1 text-xs text-neutral-900/55 break-words">
                    {other.tagline}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <p className="mt-6 text-sm text-neutral-900/55 italic">
            Head-to-head comparisons for {p.name} are in the editorial pipeline. Check back, or read the {p.name} review for now.
          </p>
        )}
      </Section>

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
    </>
  );
}

// Re-export the type for child routes
export type { ProgramSlug };
