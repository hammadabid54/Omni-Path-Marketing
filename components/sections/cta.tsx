import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface CtaSectionProps {
  title: React.ReactNode;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "default" | "panel";
  id?: string;
}

export function CtaSection({
  title,
  subhead,
  primaryCta,
  secondaryCta,
  variant = "default",
  id,
}: CtaSectionProps) {
  if (variant === "panel") {
    return (
      <Section spacing="default">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-lime-400/5 p-8 md:p-14 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(163,230,53,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(163,230,53,0.10), transparent 40%)",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
              {subhead && <p className="mt-4 text-white/70 max-w-xl mx-auto">{subhead}</p>}
              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {primaryCta && (
                    <LinkButton href={primaryCta.href} variant="primary" size="lg" magnetic>
                      {primaryCta.label}
                    </LinkButton>
                  )}
                  {secondaryCta && (
                    <LinkButton href={secondaryCta.href} variant="ghost" size="lg">
                      {secondaryCta.label}
                    </LinkButton>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Section>
    );
  }

  return (
    <Section id={id}>
      <ScrollReveal className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
        {subhead && <p className="mt-4 text-white/70">{subhead}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primaryCta && (
              <LinkButton href={primaryCta.href} variant="primary" size="lg" magnetic>
                {primaryCta.label}
              </LinkButton>
            )}
            {secondaryCta && (
              <LinkButton href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </LinkButton>
            )}
          </div>
        )}
      </ScrollReveal>
    </Section>
  );
}
