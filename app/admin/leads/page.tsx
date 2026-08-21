import Link from "next/link";
import { listLeads, type LeadType, type LeadStatus } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

const TYPES: { id: LeadType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "contact", label: "Contact" },
  { id: "audit", label: "Audit" },
  { id: "intake", label: "Intake" },
  { id: "partner", label: "Partner" },
];

const STATUSES: { id: LeadStatus | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "contacted", label: "Contacted" },
  { id: "won", label: "Won" },
  { id: "lost", label: "Lost" },
];

const TYPE_LABEL: Record<string, string> = {
  contact: "Contact",
  audit: "Audit",
  intake: "Intake",
  partner: "Partner",
};

const STATUS_COLOR: Record<string, string> = {
  new: "bg-lime-400/15 text-lime-400 border-lime-400/30",
  contacted: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  won: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  lost: "bg-rose-400/15 text-rose-300 border-rose-400/30",
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; status?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const type = (sp.type as LeadType | "all") ?? "all";
  const status = (sp.status as LeadStatus | "all") ?? "all";
  const q = sp.q ?? "";

  const leads = await listLeads({
    type,
    status,
    search: q || undefined,
    limit: 200,
  });

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-sm text-white/55 mt-1">
            {leads.length} {leads.length === 1 ? "lead" : "leads"} matching your filters.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <form action="/admin/leads" method="get" className="mb-5 flex flex-wrap items-center gap-2">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search email, name, company…"
          className="input max-w-xs"
        />
        <div className="flex items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-white/45 font-semibold mr-1">Type</span>
          {TYPES.map((t) => (
            <FilterPill key={t.id} href={buildHref({ type: t.id, status, q })} active={type === t.id} label={t.label} />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-white/45 font-semibold mr-1">Status</span>
          {STATUSES.map((s) => (
            <FilterPill key={s.id} href={buildHref({ type, status: s.id, q })} active={status === s.id} label={s.label} />
          ))}
        </div>
        <button type="submit" className="btn btn-ghost">Apply</button>
        {(type !== "all" || status !== "all" || q) && (
          <Link href="/admin/leads" className="text-xs text-white/55 hover:text-white">Clear all</Link>
        )}
      </form>

      {leads.length === 0 ? (
        <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-8 text-center text-sm text-white/55">
          No leads match the current filters.
        </div>
      ) : (
        <div className="rounded-xl border border-white/8 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/4 text-[10px] uppercase tracking-widest text-white/45">
              <tr>
                <th className="text-left px-4 py-2.5 font-semibold">Type</th>
                <th className="text-left px-4 py-2.5 font-semibold">Name / Email</th>
                <th className="text-left px-4 py-2.5 font-semibold hidden md:table-cell">Company / URL</th>
                <th className="text-left px-4 py-2.5 font-semibold hidden lg:table-cell">Score</th>
                <th className="text-left px-4 py-2.5 font-semibold">Status</th>
                <th className="text-right px-4 py-2.5 font-semibold hidden sm:table-cell">When</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((l) => (
                <tr key={l.id} className="hover:bg-white/2">
                  <td className="px-4 py-2.5">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-white/65">
                      {TYPE_LABEL[l.type] ?? l.type}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <Link href={`/admin/leads/${l.id}`} className="block hover:text-lime-400">
                      <div className="font-medium text-white">{l.name ?? "—"}</div>
                      <div className="text-xs text-white/55">{l.email}</div>
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-white/75 hidden md:table-cell">
                    <div>{l.company ?? "—"}</div>
                    {l.url && <div className="text-xs text-white/45 truncate max-w-[200px]">{l.url}</div>}
                  </td>
                  <td className="px-4 py-2.5 hidden lg:table-cell">
                    {l.score != null ? (
                      <span className={`font-mono text-sm font-semibold ${
                        l.bucket === "hot" ? "text-lime-400" :
                        l.bucket === "warm" ? "text-amber-300" : "text-rose-300"
                      }`}>
                        {l.score}
                      </span>
                    ) : (
                      <span className="text-white/30">—</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${STATUS_COLOR[l.status] ?? ""}`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-white/55 text-xs hidden sm:table-cell">
                    {fmtDate(l.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FilterPill({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={
        "pill text-[10px] " + (active ? "pill-accent" : "hover:border-white/30 text-white/65")
      }
    >
      {label}
    </Link>
  );
}

function buildHref({ type, status, q }: { type: string; status: string; q: string }): string {
  const p = new URLSearchParams();
  if (type && type !== "all") p.set("type", type);
  if (status && status !== "all") p.set("status", status);
  if (q) p.set("q", q);
  const qs = p.toString();
  return qs ? `/admin/leads?${qs}` : "/admin/leads";
}
