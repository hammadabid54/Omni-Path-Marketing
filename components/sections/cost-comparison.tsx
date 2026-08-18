import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/cn";

export interface ComparisonRow {
  label: string;
  values: (string | number)[];
  highlight?: boolean;
  note?: string;
}

interface CostComparisonProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subhead?: string;
  /** Column headers (left-most column is row label). */
  columns: string[];
  rows: ComparisonRow[];
  highlightColumn?: number;
  className?: string;
  caption?: string;
}

export function CostComparison({
  eyebrow,
  title,
  subhead,
  columns,
  rows,
  highlightColumn = 0,
  className,
  caption,
}: CostComparisonProps) {
  return (
    <Section className={className}>
      <ScrollReveal className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
        {subhead && <p className="mt-4 text-white/70 max-w-xl">{subhead}</p>}
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-10">
        <div className="overflow-x-auto rounded-2xl border border-white/8 bg-white/2">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <th className="px-5 py-4 font-medium">Option</th>
                {columns.map((c, i) => (
                  <th
                    key={c}
                    className={cn(
                      "px-5 py-4 font-medium",
                      i === highlightColumn && "text-lime-400",
                    )}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={cn(
                    "border-b border-white/5 last:border-0",
                    row.highlight && "bg-lime-400/5",
                  )}
                >
                  <td className="px-5 py-4 text-white/80 font-medium">{row.label}</td>
                  {row.values.map((v, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "px-5 py-4",
                        ci === highlightColumn
                          ? "text-lime-400 font-semibold"
                          : "text-white/75",
                        typeof v === "string" && v.startsWith("~~") && "line-through text-white/45",
                      )}
                    >
                      {v}
                      {row.note && ci === highlightColumn && (
                        <span className="block text-xs text-white/50 mt-1 font-normal">{row.note}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {caption && <p className="mt-4 text-xs text-white/45">{caption}</p>}
      </ScrollReveal>
    </Section>
  );
}
