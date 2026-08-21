/**
 * Intake token store. Tokens are small JSON records that gate access to
 * the private client intake form at /intake/[token].
 *
 * Storage is intentionally simple: a single JSON file at
 * `data/intake-tokens.json` (gitignored). Mint / list / expire / consume
 * tokens via `scripts/intake-token.mjs`.
 *
 * Why a JSON file and not a DB:
 *   - 100s of clients/year, single-tenant, single-host
 *   - No real concurrency: Hammad mints tokens, one at a time, by hand
 *   - Easy to back up (just `cp data/intake-tokens.json`)
 *   - No schema migration overhead
 *
 * For multi-host scale, swap the `readStore` / `writeStore` helpers for
 * a Notion DB or Postgres-backed implementation — the public API stays
 * the same.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export type IntakeService =
  | "seo"
  | "paid-ads"
  | "branding"
  | "web-cro"
  | "social-media"
  | "tiktok-linkedin"
  | "email-lifecycle"
  | "analytics";

export interface IntakeToken {
  /** URL-safe random token. The form URL is /intake/{token}. */
  token: string;
  /** Optional human label — helps Hammad recognise the client in the JSON. */
  clientName: string;
  /** ISO 8601 timestamp. */
  createdAt: string;
  /** ISO 8601 timestamp. After this, the form 404s. */
  expiresAt: string;
  /** ISO 8601 timestamp when client submitted. null until used. */
  submittedAt: string | null;
  /** IP address that submitted (audit). */
  submittedFromIp: string | null;
  /** Resend email id for the internal notification, for cross-referencing. */
  notifyEmailId: string | null;
}

interface Store {
  tokens: IntakeToken[];
}

const STORE_PATH = path.join(process.cwd(), "data", "intake-tokens.json");

/** Token defaults: 14 days validity, URL-safe random of 24 chars. */
export const DEFAULT_TTL_DAYS = 14;
export const TOKEN_BYTES = 18; // 18 bytes → 24 base64url chars

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Store;
    if (!Array.isArray(parsed.tokens)) return { tokens: [] };
    return parsed;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return { tokens: [] };
    throw err;
  }
}

async function writeStore(store: Store): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2) + "\n", "utf8");
}

/** Generate a URL-safe random token. */
export function generateToken(bytes = TOKEN_BYTES): string {
  return crypto.randomBytes(bytes).toString("base64url");
}

/** Mint a new token. Returns the created record. */
export async function mintToken(opts: {
  clientName: string;
  ttlDays?: number;
}): Promise<IntakeToken> {
  const store = await readStore();
  const now = new Date();
  const ttl = opts.ttlDays ?? DEFAULT_TTL_DAYS;
  const token: IntakeToken = {
    token: generateToken(),
    clientName: opts.clientName,
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + ttl * 24 * 60 * 60 * 1000).toISOString(),
    submittedAt: null,
    submittedFromIp: null,
    notifyEmailId: null,
  };
  store.tokens.push(token);
  await writeStore(store);
  return token;
}

/** Look up a token record. Returns null if not found. */
export async function getToken(token: string): Promise<IntakeToken | null> {
  const store = await readStore();
  return store.tokens.find((t) => t.token === token) ?? null;
}

export type TokenStatus = "valid" | "expired" | "submitted" | "not-found";

/**
 * Resolve a token's status. The form page uses this to decide what to render
 * (the form, an "expired" page, an "already submitted" page, or 404).
 */
export async function resolveTokenStatus(token: string): Promise<{
  status: TokenStatus;
  record: IntakeToken | null;
}> {
  const record = await getToken(token);
  if (!record) return { status: "not-found", record: null };
  if (record.submittedAt) return { status: "submitted", record };
  if (new Date(record.expiresAt).getTime() < Date.now()) {
    return { status: "expired", record };
  }
  return { status: "valid", record };
}

/** Mark a token as submitted. Idempotent on the same record. */
export async function markSubmitted(
  token: string,
  meta: { ip: string; notifyEmailId: string | null },
): Promise<IntakeToken | null> {
  const store = await readStore();
  const idx = store.tokens.findIndex((t) => t.token === token);
  if (idx === -1) return null;
  const existing = store.tokens[idx];
  if (existing.submittedAt) return existing; // already submitted; no-op
  const updated: IntakeToken = {
    ...existing,
    submittedAt: new Date().toISOString(),
    submittedFromIp: meta.ip,
    notifyEmailId: meta.notifyEmailId,
  };
  store.tokens[idx] = updated;
  await writeStore(store);
  return updated;
}

/** List all tokens (admin / CLI). */
export async function listTokens(): Promise<IntakeToken[]> {
  const store = await readStore();
  return store.tokens;
}

/** Mark a token as expired by setting its expiresAt to now. */
export async function expireToken(token: string): Promise<IntakeToken | null> {
  const store = await readStore();
  const idx = store.tokens.findIndex((t) => t.token === token);
  if (idx === -1) return null;
  store.tokens[idx] = { ...store.tokens[idx], expiresAt: new Date().toISOString() };
  await writeStore(store);
  return store.tokens[idx];
}

/** Delete a token entirely. */
export async function revokeToken(token: string): Promise<boolean> {
  const store = await readStore();
  const before = store.tokens.length;
  store.tokens = store.tokens.filter((t) => t.token !== token);
  if (store.tokens.length === before) return false;
  await writeStore(store);
  return true;
}
