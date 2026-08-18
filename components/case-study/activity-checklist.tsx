/**
 * ActivityChecklist — 10-item grid of SEO deliverables for a case study.
 * Server component. Two columns on sm+, single column below.
 */
interface Activity {
  title: string;
  description: string;
}

export function ActivityChecklist({ items }: { items: Activity[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((a) => (
        <div key={a.title} className="bento">
          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-lime-400/10 text-lime-400"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 6.5L4.5 9L10 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <div className="text-sm font-medium text-white">{a.title}</div>
              <div className="mt-1 text-xs text-white/55 leading-relaxed">
                {a.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
