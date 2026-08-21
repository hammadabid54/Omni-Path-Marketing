import { notFound } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { getLead, updateLead, type LeadStatus, type StoredLead } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

const STATUSES: LeadStatus[] = ["new", "contacted", "won", "lost"];
const STATUS_COLOR: Record<string, string> = {
  new: "bg-lime-400/15 text-lime-400 border-lime-400/30",
  contacted: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  won: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  lost: "bg-rose-400/15 text-rose-300 border-rose-400/30",
};

const TYPE_LABEL: Record<string, string> = {
  contact: "Contact form",
  audit: "Audit tool",
  intake: "Client intake",
  partner: "Partner inquiry",
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await getLead(id);
  if (!lead) notFound();

  async function update(formData: FormData) {
    "use server";
    const status = String(formData.get("status") ?? lead!.status) as LeadStatus;
    const adminNote = String(formData.get("adminNote") ?? "");
    await updateLead(id, { status, adminNote });
    revalidatePath(`/admin/leads/${id}`);
    revalidatePath("/admin/leads");
    revalidatePath("/admin");
  }

  return (
    <div>
      <div className="mb-4">
        <Link href="/admin/leads" className="text-xs text-white/55 hover:text-white">← All leads</Link>
      </div>

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-lime-400 font-semibold">
            {TYPE_LABEL[lead.type] ?? lead.type}
          </div>
          <h1 className="mt-1 text-2xl font-bold text-white">
            {lead.name ?? lead.email}
          </h1>
          {lead.company && <p className="text-sm text-white/65 mt-0.5">{lead.company}</p>}
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${STATUS_COLOR[lead.status] ?? ""}`}>
            {lead.status}
          </span>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        {/* Main column: all form fields */}
        <div className="space-y-5">
          <Section title="Contact">
            <Field label="Email" value={lead.email} mono />
            <Field label="Name" value={lead.name} />
            <Field label="Phone" value={lead.phone} mono />
            <Field label="Company" value={lead.company} />
            <Field label="Website" value={lead.url} link />
          </Section>

          {(lead.services?.length || lead.budget || lead.timeline) && (
            <Section title="Engagement">
              {lead.services && lead.services.length > 0 && (
                <Field label="Services" value={lead.services.join(", ")} />
              )}
              <Field label="Budget" value={lead.budget} />
              <Field label="Timeline" value={lead.timeline} />
            </Section>
          )}

          {lead.score != null && (
            <Section title="Lead score">
              <div className="grid grid-cols-3 gap-3">
                <Field label="Score" value={String(lead.score)} />
                <Field label="Bucket" value={lead.bucket} />
                <Field label="Signals" value={lead.signals?.join(", ")} />
              </div>
            </Section>
          )}

          {lead.message && (
            <Section title="Message">
              <p className="text-sm text-white/85 whitespace-pre-wrap">{lead.message}</p>
            </Section>
          )}

          {/* For intake form, render the full payload */}
          {lead.type === "intake" && lead.data && (
            <Section title="Intake form (full)">
              <IntakeData data={lead.data} />
            </Section>
          )}

          <Section title="Submission meta">
            <Field label="Type" value={lead.type} />
            <Field label="Source" value={lead.source} />
            <Field label="Submitted at" value={fmtDate(lead.createdAt)} />
            <Field label="IP" value={lead.ip} mono />
            <Field label="Notion page" value={lead.notionPageId} mono />
            <Field label="Resend email id" value={lead.notifyEmailId} mono />
          </Section>
        </div>

        {/* Sidebar: status + admin note */}
        <div className="space-y-5">
          <Section title="Status & notes">
            <form action={update} className="space-y-3">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">
                  Status
                </label>
                <select name="status" defaultValue={lead.status} className="select mt-1.5">
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">
                  Admin note
                </label>
                <textarea
                  name="adminNote"
                  defaultValue={lead.adminNote ?? ""}
                  rows={4}
                  className="textarea mt-1.5"
                  placeholder="Internal note for yourself…"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">Save</button>
              {lead.statusUpdatedAt && (
                <p className="text-[10px] text-white/40 text-center">
                  Last updated {fmtDate(lead.statusUpdatedAt)}
                </p>
              )}
            </form>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/8 bg-[#0d0d14] p-5">
      <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold mb-3">
        {title}
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Field({ label, value, mono, link }: { label: string; value?: string | null; mono?: boolean; link?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">{label}</div>
      <div
        className={
          "mt-0.5 text-sm text-white/85 break-words " +
          (mono ? "font-mono text-xs " : "") +
          (value ? "" : "text-white/30")
        }
      >
        {value
          ? link && /^https?:\/\//.test(value)
            ? <a href={value} target="_blank" rel="noopener" className="text-lime-400 hover:underline">{value}</a>
            : link && value.startsWith("/")
            ? <Link href={value} className="text-lime-400 hover:underline">{value}</Link>
            : value
          : "—"}
      </div>
    </div>
  );
}

function IntakeData({ data }: { data: Record<string, unknown> }) {
  const entries = Object.entries(data).filter(([_, v]) => v !== undefined && v !== "");
  if (entries.length === 0) return <p className="text-sm text-white/55">No additional data captured.</p>;
  return (
    <div className="space-y-2 text-sm">
      {entries.map(([k, v]) => (
        <div key={k} className="border-b border-white/5 pb-2 last:border-0">
          <div className="text-[10px] uppercase tracking-widest text-white/45 font-semibold">{k}</div>
          <div className="text-white/85 mt-0.5 break-words">
            {renderValue(v)}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderValue(v: unknown): React.ReactNode {
  if (v === null || v === undefined) return "—";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) return v.length === 0 ? "—" : v.join(", ");
  if (typeof v === "object") {
    const obj = v as Record<string, unknown>;
    const keys = Object.keys(obj);
    if (keys.length === 0) return "—";
    return (
      <div className="ml-2 mt-1 border-l border-white/8 pl-3 space-y-1.5">
        {keys.map((k) => (
          <div key={k}>
            <span className="text-white/55 text-[11px]">{k}:</span>{" "}
            <span className="text-white/85">{renderValue(obj[k])}</span>
          </div>
        ))}
      </div>
    );
  }
  return String(v);
}
