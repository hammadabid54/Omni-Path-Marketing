/**
 * CaseStudyToc — sticky table of contents for a case study detail page.
 * Server component. Hidden on mobile.
 */
import { cn } from "@/lib/cn";

export interface TocItem {
  id: string;
  label: string;
}

export function CaseStudyToc({ items }: { items: TocItem[] }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <div className="text-xs uppercase tracking-widest text-white/45 mb-3">
          On this page
        </div>
        <nav>
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={cn("block py-2 pl-4 border-l-2 border-white/8 text-sm text-white/50 hover:text-lime hover:border-lime transition-colors duration-200")}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
