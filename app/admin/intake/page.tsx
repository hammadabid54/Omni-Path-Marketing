import { revalidatePath } from "next/cache";
import Link from "next/link";
import { listTokens, mintToken, expireToken, revokeToken } from "@/lib/intake-tokens";
import { listLeads } from "@/lib/leads-store";
import CopyButton from "./copy-button-client";

export const dynamic = "force-dynamic";

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

function statusOf(t: { submittedAt: string | null; expiresAt: string }): "active" | "submitted" | "expired" {
  if (t.submittedAt) return "submitted";
  if (new Date(t.expiresAt).getTime() < Date.now()) return "expired";
  return "active";
}

const STATUS_COLOR = {
  active: "bg-lime-400/15 text-lime-400 border-lime-400/30",
  submitted: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  expired: "bg-rose-400/15 text-rose-300 border-rose-400/30",
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omnipathmarketing.com";

export default async function AdminIntakePage() {
  const [tokens, leads] = await Promise.all([listTokens(), listLeads({ type: "intake" })]);
  const sorted = tokens.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  async function mint(formData: FormData) {
    "use server";
    const clientName = String(formData.get("clientName") ?? "").trim();
    const days = Number(formData.get("days") ?? 14);
    if (!clientName) return;
    await mintToken({ clientName, ttlDays: days });
    revalidatePath("/admin/intake");
  }

  async function expire(formData: FormData) {
    "use server";
    const token = String(formData.get("token") ?? "");
    if (token) await expireToken(token);
    revalidatePath("/admin/intake");
  }

  async function revoke(formData: FormData) {
    "use server";
    const token = String(formData.get("token") ?? "");
    if (token) await revokeToken(token);
    revalidatePath("/admin/intake");
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Intake tokens</h1>
          <p className="text-sm text-white/55 mt-1">
            Mint private links to <code className="text-white/65">/intake/[token]</code>. Each link is single-use.
          </p>
        </div>
      </div>

      {/* Mint new */}
      <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-5 mb-6">
        <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold mb-3">Mint a new token</div>
        <form action={mint} className="flex flex-wrap items-end gap-3">
          <label className="flex-1 min-w-[200px]">
            <span className="text-xs text-white/55">Client name</span>
            <input type="text" name="clientName" required placeholder="e.g. Acme Co" className="input mt-1" />
          </label>
          <label className="w-32">
            <span className="text-xs text-white/55">Days</span>
            <input type="number" name="days" defaultValue={14} min={1} max={365} className="input mt-1" />
          </label>
          <button type="submit" className="btn btn-primary">Generate link</button>
        </form>
      </div>

      {/* Tokens table */}
      {sorted.length === 0 ? (
        <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-6 text-center text-sm text-white/55">
          No tokens yet. Use the form above to mint one.
        </div>
      ) : (
        <div className="rounded-xl border border-white/8 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/4 text-[10px] uppercase tracking-widest text-white/45">
              <tr>
                <th className="text-left px-4 py-2.5 font-semibold">Client</th>
                <th className="text-left px-4 py-2.5 font-semibold">Status</th>
                <th className="text-left px-4 py-2.5 font-semibold hidden md:table-cell">Created</th>
                <th className="text-left px-4 py-2.5 font-semibold hidden md:table-cell">Expires</th>
                <th className="text-left px-4 py-2.5 font-semibold hidden lg:table-cell">Submitted</th>
                <th className="text-right px-4 py-2.5 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sorted.map((t) => {
                const status = statusOf(t);
                // Match submission by ip + submittedAt timestamp — both are
                // recorded on the lead when the intake form posts.
                const matchingLead = t.submittedAt
                  ? leads.find(
                      (l) =>
                        l.type === "intake" &&
                        l.ip === t.submittedFromIp &&
                        l.createdAt === t.submittedAt,
                    )
                  : undefined;
                return (
                  <tr key={t.token} className="hover:bg-white/2">
                    <td className="px-4 py-2.5">
                      <div className="font-medium text-white">{t.clientName}</div>
                      <div className="text-[10px] font-mono text-white/40 truncate max-w-[200px]">{t.token}</div>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${STATUS_COLOR[status]}`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-white/55 text-xs hidden md:table-cell">{fmtDate(t.createdAt)}</td>
                    <td className="px-4 py-2.5 text-white/55 text-xs hidden md:table-cell">{fmtDate(t.expiresAt)}</td>
                    <td className="px-4 py-2.5 text-white/55 text-xs hidden lg:table-cell">
                      {t.submittedAt ? fmtDate(t.submittedAt) : "—"}
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <div className="flex items-center justify-end gap-1.5 flex-wrap">
                        {status === "active" && (
                          <CopyButton url={`${SITE_URL}/intake/${t.token}`} />
                        )}
                        {matchingLead && (
                          <Link
                            href={`/admin/leads/${matchingLead.id}`}
                            className="text-[10px] uppercase tracking-widest text-lime-400 hover:text-lime-300"
                          >
                            View
                          </Link>
                        )}
                        {status !== "submitted" && (
                          <form action={expire} className="inline">
                            <input type="hidden" name="token" value={t.token} />
                            <button
                              type="submit"
                              className="text-[10px] uppercase tracking-widest text-amber-300/70 hover:text-amber-300"
                            >
                              Expire
                            </button>
                          </form>
                        )}
                        {status !== "submitted" && (
                          <form action={revoke} className="inline">
                            <input type="hidden" name="token" value={t.token} />
                            <button
                              type="submit"
                              className="text-[10px] uppercase tracking-widest text-rose-300/70 hover:text-rose-300 ml-2"
                            >
                              Revoke
                            </button>
                          </form>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
