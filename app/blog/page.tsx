import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { LinkButton } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Marketing Insights · SEO, AI, Growth | Omni Path Blog",
  description:
    "Original research, playbooks, and case studies on SEO, AI, and growth marketing. Written by the team that does the work.",
  path: "/blog",
});

const CATEGORIES = [
  { name: "Original research", d: "Industry surveys, benchmark reports." },
  { name: "Playbooks", d: "How we do X (SEO audit, link outreach, content briefs)." },
  { name: "Case studies", d: "Real client wins, numbers intact." },
  { name: "Industry news", d: "Our take on Google updates, AI shifts, etc." },
];

const POSTS = [
  { t: "State of SEO 2026", d: "Original benchmark data across 200+ client sites.", cat: "Original research" },
  { t: "How we cut SEO delivery from 25 hours to 5", d: "Our process, tools, and the math behind it.", cat: "Playbooks" },
  { t: "The 80/20 of white-label SEO", d: "What to keep in-house, what to ship to us.", cat: "Playbooks" },
  { t: "AI in marketing: what we use, what we don't", d: "Honest breakdown of our AI tool stack.", cat: "Playbooks" },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title={
          <>
            Marketing insights.{" "}
            <em className="font-serif not-italic text-lime-400">From the team that does the work.</em>
          </>
        }
        subhead="Original research, playbooks, and case studies on SEO, AI, and growth marketing. No fluff, no recycled content."
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Categories</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Browse by <em className="font-serif not-italic text-lime-400">topic.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name}>
              <div className="bento h-full">
                <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Featured</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Recent <em className="font-serif not-italic text-lime-400">posts.</em>
          </h2>
          <p className="mt-3 text-sm text-white/55">Sample posts shown. Full archive ships in Phase 2.</p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.06}>
          {POSTS.map((p) => (
            <StaggerItem key={p.t}>
              <article className="bento bento-lg h-full group cursor-pointer hover:border-lime-400/40">
                <span className="pill text-[10px]">{p.cat}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  <span className="bg-gradient-to-r from-lime-400 to-lime-400 bg-[length:0%_1px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_1px] transition-[background-size] duration-500">
                    {p.t}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-white/65">{p.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-lime-400">
                  Read <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="rounded-2xl border border-lime-400/20 bg-lime-400/4 p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">
              Get our monthly <em className="font-serif not-italic text-lime-400">transparency report.</em>
            </h3>
            <p className="mt-3 text-white/70 max-w-md mx-auto">What we shipped, what worked, what didn&apos;t. One email per month. No spam.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="you@company.com" className="input flex-1" aria-label="Email address" />
              <LinkButton href="/contact" variant="primary">Subscribe</LinkButton>
            </form>
          </div>
        </ScrollReveal>
      </Section>

      <CtaSection
        title={<>Want a 15-min audit of your site?</>}
        subhead="Skip the wait. Get a 20-point report right now."
        primaryCta={{ label: "Run a free audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
