import Link from "next/link";
import { leadStats, listLeads } from "@/lib/leads-store";
import { listTokens } from "@/lib/intake-tokens";

export const dynamic = "force-dynamic";

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

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

export default async function AdminDashboard() {
  const [stats, recent, tokens] = await Promise.all([
    leadStats(),
    listLeads({ limit: 8 }),
    listTokens(),
  ]);

  const activeTokens = tokens.filter((t) => !t.submittedAt && new Date(t.expiresAt).getTime() > Date.now());
  const submittedTokens = tokens.filter((t) => t.submittedAt);

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-white/55 mt-1">Leads, intake tokens, recent activity.</p>
        </div>
      </div>

      {/* Top stats grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total leads" value={stats.total} />
        <Stat label="Last 7 days" value={stats.last7Days} accent="lime" />
        <Stat label="Active intake tokens" value={activeTokens.length} accent="amber" />
        <Stat label="Submitted intake" value={submittedTokens.length} accent="emerald" />
      </div>

      {/* Breakdown by type + status */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Breakdown title="By type" rows={[
          { label: "Contact", value: stats.byType.contact },
          { label: "Audit", value: stats.byType.audit },
          { label: "Intake", value: stats.byType.intake },
          { label: "Partner", value: stats.byType.partner },
        ]} />
        <Breakdown title="By status" rows={[
          { label: "New", value: stats.byStatus.new },
          { label: "Contacted", value: stats.byStatus.contacted },
          { label: "Won", value: stats.byStatus.won },
          { label: "Lost", value: stats.byStatus.lost },
        ]} />
        <Breakdown title="By bucket" rows={[
          { label: "Hot", value: stats.byBucket.hot, color: "text-lime-400" },
          { label: "Warm", value: stats.byBucket.warm, color: "text-amber-300" },
          { label: "Cold", value: stats.byBucket.cold, color: "text-rose-300" },
        ]} />
        <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-4">
          <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold mb-3">Quick links</div>
          <div className="space-y-2 text-sm">
            <Link href="/admin/leads" className="block text-lime-400 hover:text-lime-300">→ View all leads</Link>
            <Link href="/admin/intake" className="block text-lime-400 hover:text-lime-300">→ Manage intake tokens</Link>
            <a href={process.env.NEXT_PUBLIC_SITE_URL ?? "https://omnipathmarketing.com"} target="_blank" rel="noopener" className="block text-lime-400 hover:text-lime-300">→ Open public site ↗</a>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-8">
        <div className="flex items-end justify-between gap-3 mb-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/55">Recent activity</h2>
          <Link href="/admin/leads" className="text-xs text-lime-400 hover:text-lime-300">See all →</Link>
        </div>
        {recent.length === 0 ? (
          <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-6 text-center text-sm text-white/45">
            No leads yet. Submit the contact form on <Link href="/contact" target="_blank" rel="noopener" className="text-lime-400 hover:underline">/contact</Link> to test.
          </div>
        ) : (
          <div className="rounded-xl border border-white/8 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/4 text-[10px] uppercase tracking-widest text-white/45">
                <tr>
                  <th className="text-left px-4 py-2.5 font-semibold">Type</th>
                  <th className="text-left px-4 py-2.5 font-semibold">Name / Email</th>
                  <th className="text-left px-4 py-2.5 font-semibold hidden sm:table-cell">Company</th>
                  <th className="text-left px-4 py-2.5 font-semibold">Status</th>
                  <th className="text-right px-4 py-2.5 font-semibold hidden sm:table-cell">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recent.map((l) => (
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
                    <td className="px-4 py-2.5 text-white/75 hidden sm:table-cell">{l.company ?? "—"}</td>
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
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: "lime" | "amber" | "emerald" }) {
  const color =
    accent === "amber" ? "text-amber-300" : accent === "emerald" ? "text-emerald-300" : "text-lime-400";
  return (
    <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-5">
      <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">{label}</div>
      <div className={`mt-1.5 text-3xl font-bold ${color}`}>{value}</div>
    </div>
  );
}

function Breakdown({ title, rows }: { title: string; rows: { label: string; value: number; color?: string }[] }) {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-4">
      <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold mb-3">{title}</div>
      <div className="space-y-1.5 text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="text-white/65">{r.label}</span>
            <span className={`font-semibold ${r.color ?? "text-white"}`}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
