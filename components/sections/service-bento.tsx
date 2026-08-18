import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/cn";

export interface BentoService {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  fromPrice?: string;
  /** "feature" adds the lime gradient sheen on hover. */
  feature?: boolean;
}

interface ServiceBentoProps {
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: string;
  services: BentoService[];
}

export function ServiceBento({ eyebrow, title, subhead, services }: ServiceBentoProps) {
  return (
    <Section>
      <ScrollReveal className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h2>
        {subhead && <p className="mt-4 text-white/70 max-w-xl">{subhead}</p>}
      </ScrollReveal>

      <StaggerGroup
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.06}
        as="ul"
      >
        {services.map((s) => (
          <StaggerItem key={s.href} as="li">
            <BentoCard service={s} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

function BentoCard({ service }: { service: BentoService }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className={cn(
        "bento group flex h-full flex-col gap-4",
        service.feature && "bento-feature sm:col-span-2 lg:col-span-2 bento-lg",
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
          <Icon className="h-5 w-5" />
        </span>
        {service.feature && (
          <span className="text-[11px] uppercase tracking-widest text-lime-400 font-semibold">
            Flagship
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="text-sm text-white/65 leading-relaxed flex-1">{service.description}</p>
      <div className="mt-2 flex items-center justify-between">
        {service.fromPrice && (
          <span className="text-xs text-white/45">From {service.fromPrice}</span>
        )}
        <span className="inline-flex items-center gap-1.5 text-sm text-lime-400 group-hover:gap-2.5 transition-all">
          Explore <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
