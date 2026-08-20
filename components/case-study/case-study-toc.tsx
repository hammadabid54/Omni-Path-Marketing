/**
 * CaseStudyToc — sticky table of contents for a case study detail page.
 * Server component. Renders a sticky vertical list on lg+, a horizontal
 * scrollable chip list on mobile/tablet.
 */
import { cn } from "@/lib/cn";

export interface TocItem {
  id: string;
  label: string;
}

export function CaseStudyToc({ items }: { items: TocItem[] }) {
  return (
    <>
      {/* Mobile + tablet: horizontal chip list, sticky below header */}
      <div className="lg:hidden -mx-4 sm:-mx-6 mb-10 sticky top-20 z-10 bg-[#0a0a0f]/85 backdrop-blur-md border-y border-white/5">
        <div className="overflow-x-auto px-4 sm:px-6">
          <nav aria-label="On this page" className="flex gap-2 py-3 min-w-max">
            <span className="text-[0.65rem] uppercase tracking-widest text-white/45 self-center mr-1">
              On this page
            </span>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs whitespace-nowrap border border-white/10 bg-white/[0.02] text-white/70 hover:border-lime-400/40 hover:text-lime-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop: sticky vertical list */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <div className="text-xs uppercase tracking-widest text-white/45 mb-3">
            On this page
          </div>
          <nav>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block py-2 pl-4 border-l-2 border-white/8 text-sm text-white/50 hover:text-lime hover:border-lime transition-colors duration-200"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
