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
      <div className="lg:hidden -mx-4 sm:-mx-6 mb-10 sticky top-20 z-10 bg-white/85 backdrop-blur-md border-y border-neutral-200/5 min-w-0">
        <div className="overflow-x-auto px-4 sm:px-6">
          <nav aria-label="On this page" className="flex gap-2 py-3 min-w-max">
            <span className="text-[0.65rem] uppercase tracking-widest text-neutral-900/45 self-center mr-1">
              On this page
            </span>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs whitespace-nowrap border border-neutral-200/10 bg-neutral-900/[0.02] text-neutral-900/70 hover:border-blue-600/40 hover:text-blue-600 transition-colors"
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
          <div className="text-xs uppercase tracking-widest text-neutral-900/45 mb-3">
            On this page
          </div>
          <nav>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block py-2 pl-4 border-l-2 border-neutral-200/8 text-sm text-neutral-900/50 hover:text-lime hover:border-lime transition-colors duration-200"
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
