/**
 * Local leads store — single source of truth for the admin portal.
 *
 * Why a local JSON file (not just Notion):
 *   - Works even when Notion isn't configured
 *   - Survives Notion API rate limits / outages
 *   - Fast admin reads (no API calls)
 *   - Easy to back up: just `cp data/leads.json`
 *
 * For multi-host scale, swap readStore/writeStore for a Postgres-backed
 * implementation — the public API stays the same.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export type LeadType = "contact" | "audit" | "intake" | "partner";
export type LeadBucket = "hot" | "warm" | "cold";
export type LeadStatus = "new" | "contacted" | "won" | "lost";

export interface StoredLead {
  /** Unique id. */
  id: string;
  type: LeadType;
  /** ISO 8601. */
  createdAt: string;
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  url?: string;
  score?: number;
  bucket?: LeadBucket;
  /** Source form name — e.g. "contact-form", "audit-tool", "intake-form". */
  source?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  message?: string;
  signals?: string[];
  status: LeadStatus;
  /** Notion page id (if pushed to Notion). */
  notionPageId?: string;
  /** Resend email id for the internal notification. */
  notifyEmailId?: string;
  /** IP address of submitter. */
  ip?: string;
  /**
   * Full form payload. For intake forms, this includes services, credentials
   * plan, and every other field. For other types, this is usually null
   * (data is in the top-level fields).
   */
  data?: Record<string, unknown>;
  /** When the lead was last status-updated. */
  statusUpdatedAt?: string;
  /** Optional free-form note set by the admin. */
  adminNote?: string;
}

interface Store {
  leads: StoredLead[];
}

const STORE_PATH = path.join(process.cwd(), "data", "leads.json");

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Store;
    if (!Array.isArray(parsed.leads)) return { leads: [] };
    return parsed;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return { leads: [] };
    throw err;
  }
}

async function writeStore(store: Store): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2) + "\n", "utf8");
}

/** Generate a short id (10 chars, base64url-safe). */
function newId(): string {
  return crypto.randomBytes(8).toString("base64url");
}

export interface AddLeadInput {
  type: LeadType;
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  url?: string;
  score?: number;
  bucket?: LeadBucket;
  source?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  message?: string;
  signals?: string[];
  status?: LeadStatus;
  notionPageId?: string;
  notifyEmailId?: string;
  ip?: string;
  data?: Record<string, unknown>;
}

/** Append a new lead. Returns the created record. */
export async function addLead(input: AddLeadInput): Promise<StoredLead> {
  const store = await readStore();
  const lead: StoredLead = {
    id: newId(),
    type: input.type,
    createdAt: new Date().toISOString(),
    email: input.email,
    name: input.name,
    company: input.company,
    phone: input.phone,
    url: input.url,
    score: input.score,
    bucket: input.bucket,
    source: input.source,
    services: input.services,
    budget: input.budget,
    timeline: input.timeline,
    message: input.message,
    signals: input.signals,
    status: input.status ?? "new",
    notionPageId: input.notionPageId,
    notifyEmailId: input.notifyEmailId,
    ip: input.ip,
    data: input.data,
  };
  store.leads.push(lead);
  await writeStore(store);
  return lead;
}

/** List leads, newest first. */
export async function listLeads(filter?: {
  type?: LeadType | "all";
  search?: string;
  status?: LeadStatus | "all";
  limit?: number;
}): Promise<StoredLead[]> {
  const store = await readStore();
  let leads = store.leads.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  if (filter?.type && filter.type !== "all") {
    leads = leads.filter((l) => l.type === filter.type);
  }
  if (filter?.status && filter.status !== "all") {
    leads = leads.filter((l) => l.status === filter.status);
  }
  if (filter?.search) {
    const q = filter.search.toLowerCase();
    leads = leads.filter(
      (l) =>
        l.email.toLowerCase().includes(q) ||
        (l.name ?? "").toLowerCase().includes(q) ||
        (l.company ?? "").toLowerCase().includes(q) ||
        (l.url ?? "").toLowerCase().includes(q),
    );
  }
  if (filter?.limit) {
    leads = leads.slice(0, filter.limit);
  }
  return leads;
}

/** Get a single lead by id. Returns null if not found. */
export async function getLead(id: string): Promise<StoredLead | null> {
  const store = await readStore();
  return store.leads.find((l) => l.id === id) ?? null;
}

export interface UpdateLeadInput {
  status?: LeadStatus;
  adminNote?: string;
}

/** Update a lead's status and/or admin note. */
export async function updateLead(
  id: string,
  input: UpdateLeadInput,
): Promise<StoredLead | null> {
  const store = await readStore();
  const idx = store.leads.findIndex((l) => l.id === id);
  if (idx === -1) return null;
  const existing = store.leads[idx];
  const updated: StoredLead = {
    ...existing,
    status: input.status ?? existing.status,
    adminNote: input.adminNote ?? existing.adminNote,
    statusUpdatedAt: new Date().toISOString(),
  };
  store.leads[idx] = updated;
  await writeStore(store);
  return updated;
}

/** Aggregate counts for the dashboard. */
export async function leadStats(): Promise<{
  total: number;
  byType: Record<LeadType, number>;
  byStatus: Record<LeadStatus, number>;
  byBucket: Record<LeadBucket, number>;
  last7Days: number;
}> {
  const leads = await listLeads();
  const now = Date.now();
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

  const byType: Record<LeadType, number> = { contact: 0, audit: 0, intake: 0, partner: 0 };
  const byStatus: Record<LeadStatus, number> = { new: 0, contacted: 0, won: 0, lost: 0 };
  const byBucket: Record<LeadBucket, number> = { hot: 0, warm: 0, cold: 0 };
  let last7Days = 0;

  for (const l of leads) {
    byType[l.type] += 1;
    byStatus[l.status] = (byStatus[l.status] ?? 0) + 1;
    if (l.bucket) byBucket[l.bucket] = (byBucket[l.bucket] ?? 0) + 1;
    if (new Date(l.createdAt).getTime() >= sevenDaysAgo) last7Days += 1;
  }

  return { total: leads.length, byType, byStatus, byBucket, last7Days };
}
