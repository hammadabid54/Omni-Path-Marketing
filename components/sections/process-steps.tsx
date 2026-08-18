import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/cn";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  meta?: string;
  icon?: React.ReactNode;
}

interface ProcessStepsProps {
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: string;
  steps: ProcessStep[];
  totalNote?: string;
}

export function ProcessSteps({ eyebrow, title, subhead, steps, totalNote }: ProcessStepsProps) {
  return (
    <Section>
      <ScrollReveal className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
        {subhead && <p className="mt-4 text-white/70 max-w-xl">{subhead}</p>}
      </ScrollReveal>

      <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <div className="bento h-full">
              <div className="flex items-center gap-2 text-lime-400 text-xs uppercase tracking-widest font-semibold">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/10">
                  {step.number}
                </span>
                Step
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{step.description}</p>
              {step.meta && (
                <p className="mt-3 text-xs text-white/45 inline-flex items-center gap-1.5">
                  <span className="dot" /> {step.meta}
                </p>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {totalNote && (
        <ScrollReveal className="mt-10 text-center text-sm text-white/55" delay={0.2}>
          {totalNote}
        </ScrollReveal>
      )}
    </Section>
  );
}

interface TimingRow {
  step: string;
  what: string;
  time: string;
  type: "Automated" | "Human";
  tool?: string;
}

interface TimingTableProps {
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: string;
  rows: TimingRow[];
  totalNote?: string;
}

export function TimingTable({ eyebrow, title, subhead, rows, totalNote }: TimingTableProps) {
  return (
    <Section>
      <ScrollReveal className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
        {subhead && <p className="mt-4 text-white/70 max-w-xl">{subhead}</p>}
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-10">
        <div className="overflow-x-auto rounded-2xl border border-white/8">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-4 font-medium">Step</th>
                <th className="px-5 py-4 font-medium">What</th>
                <th className="px-5 py-4 font-medium">Time</th>
                <th className="px-5 py-4 font-medium">Type</th>
                <th className="px-5 py-4 font-medium hidden md:table-cell">Tool</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="px-5 py-4 text-white/85 font-medium">{row.step}</td>
                  <td className="px-5 py-4 text-white/70">{row.what}</td>
                  <td className="px-5 py-4 text-white/80">{row.time}</td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "pill",
                        row.type === "Automated" ? "pill-accent" : "",
                      )}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-white/55 text-xs hidden md:table-cell">{row.tool ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalNote && <p className="mt-4 text-sm text-white/55">{totalNote}</p>}
      </ScrollReveal>
    </Section>
  );
}
