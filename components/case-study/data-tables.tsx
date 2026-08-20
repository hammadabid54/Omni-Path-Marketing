/**
 * DataTable — keyword or landing page table for a case study.
 * Server component. Renders the top 6-8 rows with monospace numbers and lime highlights.
 */
interface KeywordRow {
  keyword: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  leads?: number;
}

interface LandingRow {
  path: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export function KeywordTable({
  rows,
  showLeads = true,
}: {
  rows: KeywordRow[];
  showLeads?: boolean;
}) {
  const display = rows.slice(0, 6);
  return (
    <div className="bento overflow-hidden p-0">
      {/* Mobile: hide CTR, Avg pos, leads; show only keyword + clicks + impressions. */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5">
                Keyword
              </th>
              <th className="px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                Clicks
              </th>
              <th className="hidden sm:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                Impr.
              </th>
              <th className="hidden md:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                CTR
              </th>
              <th className="hidden md:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                Avg. pos.
              </th>
              {showLeads && (
                <th className="hidden md:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                  Est. leads
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {display.map((r) => (
              <tr key={r.keyword} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3.5 border-b border-white/5 text-white/85">{r.keyword}</td>
                <td className="px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-lime whitespace-nowrap">
                  {r.clicks.toLocaleString()}
                </td>
                <td className="hidden sm:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                  {r.impressions.toLocaleString()}
                </td>
                <td className="hidden md:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                  {r.ctr.toFixed(2)}%
                </td>
                <td className="hidden md:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                  {r.position.toFixed(2)}
                </td>
                {showLeads && (
                  <td className="hidden md:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                    {r.leads?.toFixed(1) ?? "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 text-xs text-white/45 text-center border-t border-white/5">
        Showing top {display.length} of {rows.length} · 5% lead conversion estimate · Source: Google Search Console ·{" "}
        <span className="sm:hidden">Swipe →</span>
      </div>
    </div>
  );
}

export function LandingPageTable({ rows }: { rows: LandingRow[] }) {
  const display = rows.slice(0, 6);
  return (
    <div className="bento overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5">
                Page
              </th>
              <th className="px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                Clicks
              </th>
              <th className="hidden sm:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                Impr.
              </th>
              <th className="hidden md:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                CTR
              </th>
              <th className="hidden md:table-cell px-4 py-3 text-right text-[0.7rem] font-medium uppercase tracking-widest text-white/45 border-b border-white/5 whitespace-nowrap">
                Avg. pos.
              </th>
            </tr>
          </thead>
          <tbody>
            {display.map((r) => (
              <tr key={r.path} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3.5 border-b border-white/5 text-white/85 font-mono text-xs">
                  {r.path}
                </td>
                <td className="px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-lime whitespace-nowrap">
                  {r.clicks.toLocaleString()}
                </td>
                <td className="hidden sm:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                  {r.impressions.toLocaleString()}
                </td>
                <td className="hidden md:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                  {r.ctr.toFixed(2)}%
                </td>
                <td className="hidden md:table-cell px-4 py-3.5 border-b border-white/5 text-right font-mono text-sm text-white whitespace-nowrap">
                  {r.position.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 text-xs text-white/45 text-center border-t border-white/5">
        Showing top {display.length} of {rows.length} commercial landing pages · Source: Google Search Console ·{" "}
        <span className="sm:hidden">Swipe →</span>
      </div>
    </div>
  );
}
