import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { listAvailableIndustries } from "@/lib/industries-config";

export const metadata: Metadata = buildMetadata({
  title: "Industries — Niche Marketing for Dentists, Lawyers, Plumbers, and Real Estate",
  description:
    "Industry-specific marketing playbooks for dental practices, law firms, plumbing companies, and real estate teams. SEO, paid ads, web design, and social — built for how each niche actually buys.",
  path: "/industries",
});

export default function IndustriesIndexPage() {
  const niches = listAvailableIndustries();

  return (
    <>
      <Hero
        eyebrow="Industries · niche marketing"
        title={
          <>
            Marketing that fits your industry.{" "}
            <em className="font-serif not-italic text-blue-600">
              Not a generic playbook.
            </em>
          </>
        }
        subhead="Industry-specific marketing playbooks for dental practices, law firms, plumbing companies, and real estate teams. Built for how each niche actually searches, books, and buys."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Section>
        <ScrollReveal>
          <div
            id="tldr"
            className="rounded-2xl border border-blue-600/20 bg-blue-600/[0.04] p-6 md:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
              TL;DR
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight tracking-tight text-neutral-900">
              Industries we run playbooks for
            </h2>
            <ul className="mt-5 space-y-3 text-sm md:text-base text-neutral-900/85">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <span>
                  <strong className="font-semibold text-neutral-900">
                    Dentists (live)
                  </strong>{" "}
                  — solo practices, multi-location groups, and DSOs. SEO, paid
                  ads, web design, and social under one retainer.
                </span>
              </li>
              </ul>
            <p className="mt-5 text-xs md:text-sm text-neutral-900/55">
              More industries coming Q4 2026 — Q1 2027.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Live niches</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Pick your industry.{" "}
            <em className="font-serif not-italic text-blue-600">
              Read the playbook.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Every niche below runs on a dedicated hub page with the same
            structure: why the discipline is its own, what we ship, the data
            that anchors the plan, the engagement model, and the spoke pages
            for SEO, ads, web design, and social.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {niches.map((niche) => (
            <StaggerItem key={niche.slug}>
              <Link
                href={niche.href}
                className="bento group flex h-full flex-col gap-4 hover:border-blue-600/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600 text-sm font-semibold">
                    {niche.label.slice(0, 1)}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {niche.label}
                  </h3>
                </div>
                <p className="text-sm text-neutral-900/65 leading-relaxed">
                  {niche.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 group-hover:gap-2.5 transition-all">
                  Read the {niche.label.toLowerCase()} playbook{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        variant="panel"
        title={
          <>
            Don&apos;t see your industry?{" "}
            <em className="font-serif not-italic text-blue-600">
              We probably serve it.
            </em>
          </>
        }
        subhead="Tell us what you sell and who buys it. We'll send back a free audit and a direct answer on whether we're the right team."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Script
        id="ld-bc-industries"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
            ])
          ),
        }}
      />
    </>
  );
}
