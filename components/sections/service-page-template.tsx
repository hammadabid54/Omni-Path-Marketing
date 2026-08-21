import { type ReactNode } from "react";
import { Hero } from "./hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "./faq";
import { CtaSection } from "./cta";
import type { FaqItem } from "@/lib/seo";
import { ServiceDefinition } from "./service-definition";

export interface FeatureCard {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface TierRow {
  tier: string;
  price: string;
  includes: string;
  popular?: boolean;
}

interface ServicePageTemplateProps {
  /** Hero content */
  heroEyebrow?: string;
  heroLiveBadge?: string;
  heroTitle: ReactNode;
  heroSubhead: string;
  heroPrimaryCta: { label: string; href: string };
  heroSecondaryCta?: { label: string; href: string };
  heroTrustMicrocopy?: string;

  /**
   * GEO: C02 — 40-60 word direct answer rendered in the first 150 words
   * of body content (immediately after the hero). Self-contained,
   * quotable, format: "[Service] is [category] that [primary function],
   * [key characteristic]." AI engines (Google AI Overviews, ChatGPT,
   * Perplexity, Claude) extract this paragraph for citations.
   */
  definition?: string;

  /** What we do (feature grid) */
  whatWeDoEyebrow?: string;
  whatWeDoTitle: ReactNode;
  whatWeDoSubhead?: string;
  features: FeatureCard[];

  /** Pricing tables (rendered conditionally) */
  whiteLabelEyebrow?: string;
  whiteLabelTitle?: ReactNode;
  whiteLabelSubhead?: string;
  whiteLabelTiers?: TierRow[];

  directEyebrow?: string;
  directTitle?: ReactNode;
  directSubhead?: string;
  directTiers?: TierRow[];

  /** FAQ */
  faqEyebrow?: string;
  faqTitle?: ReactNode;
  faqSubhead?: string;
  faqItems?: FaqItem[];
  /**
   * If true, the FAQ section is not rendered. Use when the calling page
   * wants to render FAQ elsewhere (e.g. after additional sections like
   * a portfolio slider). Other service pages leave this false.
   */
  hideFaq?: boolean;

  /** Final CTA */
  finalCtaTitle?: ReactNode;
  finalCtaSubhead?: string;
  finalCtaPrimary?: { label: string; href: string };
  finalCtaSecondary?: { label: string; href: string };
  /**
   * If true, the final CTA section is not rendered. Use when the calling
   * page wants to render the CTA elsewhere (e.g. after additional
   * sections). Other service pages leave this false.
   */
  hideCta?: boolean;
}

export function ServicePageTemplate(props: ServicePageTemplateProps) {
  return (
    <>
      <Hero
        eyebrow={props.heroEyebrow}
        liveBadge={props.heroLiveBadge}
        title={props.heroTitle}
        subhead={props.heroSubhead}
        primaryCta={props.heroPrimaryCta}
        secondaryCta={props.heroSecondaryCta}
        trustMicrocopy={props.heroTrustMicrocopy}
      />

      {/* GEO: C02 — direct answer in the first 150 words of body content */}
      {props.definition && <ServiceDefinition text={props.definition} />}

      {/* What we do */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          {props.whatWeDoEyebrow && <Eyebrow className="mb-4">{props.whatWeDoEyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            {props.whatWeDoTitle}
          </h2>
          {props.whatWeDoSubhead && <p className="mt-4 text-white/70">{props.whatWeDoSubhead}</p>}
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {props.features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="bento h-full">
                {f.icon && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                    {f.icon}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Pricing tables */}
      {(props.whiteLabelTiers?.length || 0) > 0 && (
        <Section>
          <ScrollReveal className="max-w-2xl">
            {props.whiteLabelEyebrow && <Eyebrow className="mb-4">{props.whiteLabelEyebrow}</Eyebrow>}
            {props.whiteLabelTitle && (
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                {props.whiteLabelTitle}
              </h2>
            )}
            {props.whiteLabelSubhead && (
              <p className="mt-4 text-white/70">{props.whiteLabelSubhead}</p>
            )}
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-10">
            <div className="overflow-x-auto rounded-2xl border border-white/8">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-4 font-medium">Tier</th>
                    <th className="px-5 py-4 font-medium">Price</th>
                    <th className="px-5 py-4 font-medium">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {props.whiteLabelTiers!.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        row.popular
                          ? "border-b border-white/5 bg-lime-400/5 last:border-0"
                          : "border-b border-white/5 last:border-0"
                      }
                    >
                      <td className="px-5 py-4 text-white/85 font-medium">
                        {row.tier}
                        {row.popular && (
                          <span className="ml-2 pill pill-accent text-[10px]">Popular</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-lime-400 font-semibold">{row.price}</td>
                      <td className="px-5 py-4 text-white/70">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Section>
      )}

      {(props.directTiers?.length || 0) > 0 && (
        <Section>
          <ScrollReveal className="max-w-2xl">
            {props.directEyebrow && <Eyebrow className="mb-4">{props.directEyebrow}</Eyebrow>}
            {props.directTitle && (
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                {props.directTitle}
              </h2>
            )}
            {props.directSubhead && (
              <p className="mt-4 text-white/70">{props.directSubhead}</p>
            )}
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-10">
            <div className="overflow-x-auto rounded-2xl border border-white/8">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-4 font-medium">Tier</th>
                    <th className="px-5 py-4 font-medium">Price</th>
                    <th className="px-5 py-4 font-medium">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {props.directTiers!.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        row.popular
                          ? "border-b border-white/5 bg-lime-400/5 last:border-0"
                          : "border-b border-white/5 last:border-0"
                      }
                    >
                      <td className="px-5 py-4 text-white/85 font-medium">
                        {row.tier}
                        {row.popular && (
                          <span className="ml-2 pill pill-accent text-[10px]">Popular</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-lime-400 font-semibold">{row.price}</td>
                      <td className="px-5 py-4 text-white/70">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Section>
      )}

      {!props.hideFaq && props.faqItems && props.faqItems.length > 0 && (
        <FaqSection
          eyebrow={props.faqEyebrow ?? "FAQ"}
          title={props.faqTitle}
          subhead={props.faqSubhead}
          items={props.faqItems}
        />
      )}

      {!props.hideCta && props.finalCtaTitle && props.finalCtaPrimary && (
        <CtaSection
          variant="panel"
          title={props.finalCtaTitle}
          subhead={props.finalCtaSubhead}
          primaryCta={props.finalCtaPrimary}
          secondaryCta={props.finalCtaSecondary}
        />
      )}
    </>
  );
}
