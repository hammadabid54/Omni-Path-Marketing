import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export interface ServiceIndexRow {
  name: string;
  icon: LucideIcon;
  href: string;
  fromPrice: string;
  direct: string;
  whiteLabel: string;
  description: string;
}

interface ServicesIndexSectionProps {
  rows: ServiceIndexRow[];
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: string;
}

export function ServicesIndexSection({ rows, eyebrow, title, subhead }: ServicesIndexSectionProps) {
  return (
    <Section>
      <ScrollReveal className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
        {subhead && <p className="mt-4 text-neutral-900/70">{subhead}</p>}
      </ScrollReveal>
      <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2" stagger={0.06}>
        {rows.map((r) => {
          const Icon = r.icon;
          return (
            <StaggerItem key={r.href}>
              <Link
                href={r.href}
                className="bento group flex h-full flex-col gap-4 hover:border-blue-600/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900">{r.name}</h3>
                </div>
                <p className="text-sm text-neutral-900/65 leading-relaxed">{r.description}</p>
                <dl className="mt-2 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <dt className="text-neutral-900/45">From</dt>
                    <dd className="text-neutral-900/85 font-medium">{r.fromPrice}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-900/45">Direct</dt>
                    <dd className="text-neutral-900/85 font-medium">{r.direct}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-900/45">White-label</dt>
                    <dd className="text-blue-600 font-medium">{r.whiteLabel}</dd>
                  </div>
                </dl>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 group-hover:gap-2.5 transition-all">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
