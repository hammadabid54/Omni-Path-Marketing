#!/usr/bin/env node
/**
 * intake-token.mjs — mint / list / inspect / expire intake tokens.
 *
 * Usage:
 *   node scripts/intake-token.mjs add "Acme Co"            # 14-day token
 *   node scripts/intake-token.mjs add "Acme Co" --days=30  # 30-day token
 *   node scripts/intake-token.mjs list                    # show all tokens
 *   node scripts/intake-token.mjs inspect <token>          # show one token
 *   node scripts/intake-token.mjs expire <token>          # mark expired (set expiresAt to now)
 *   node scripts/intake-token.mjs revoke <token>          # delete the token
 *
 * Storage: data/intake-tokens.json (gitignored).
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

// Resolve the project root from this script's location so it works no
// matter where `node` was invoked from. Script lives at
// `<project>/scripts/intake-token.mjs` → project root is the parent of
// `scripts/`.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

const STORE = path.join(PROJECT_ROOT, "data", "intake-tokens.json");
const TOKEN_BYTES = 18;
const DEFAULT_TTL_DAYS = 14;

function newToken() {
  return crypto.randomBytes(TOKEN_BYTES).toString("base64url");
}

async function readStore() {
  try {
    const raw = await fs.readFile(STORE, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if (err && err.code === "ENOENT") return { tokens: [] };
    throw err;
  }
}

async function writeStore(store) {
  await fs.mkdir(path.dirname(STORE), { recursive: true });
  await fs.writeFile(STORE, JSON.stringify(store, null, 2) + "\n", "utf8");
}

function parseDays(arg) {
  const m = (arg || "").match(/^--days=(\d+)$/);
  return m ? Number(m[1]) : DEFAULT_TTL_DAYS;
}

function fmtDate(iso) {
  return new Date(iso).toISOString().replace("T", " ").slice(0, 16) + "Z";
}

function statusOf(t, now = Date.now()) {
  if (t.submittedAt) return "submitted";
  if (new Date(t.expiresAt).getTime() < now) return "expired";
  return "active";
}

async function cmdAdd(name, ttlDays) {
  if (!name) {
    console.error("Usage: node scripts/intake-token.mjs add <clientName> [--days=N]");
    process.exit(1);
  }
  const store = await readStore();
  const now = new Date();
  const token = {
    token: newToken(),
    clientName: name,
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + ttlDays * 24 * 60 * 60 * 1000).toISOString(),
    submittedAt: null,
    submittedFromIp: null,
    notifyEmailId: null,
  };
  store.tokens.push(token);
  await writeStore(store);
  const url = `https://omnipathmarketing.com/intake/${token.token}`;
  console.log("");
  console.log("  ✓ Token minted");
  console.log("");
  console.log(`    Client:  ${token.clientName}`);
  console.log(`    Token:   ${token.token}`);
  console.log(`    Expires: ${fmtDate(token.expiresAt)} (${ttlDays} days)`);
  console.log(`    URL:     ${url}`);
  console.log("");
  console.log("  Send this URL to your client via your usual channel (email / Slack / WhatsApp).");
  console.log("  It is single-use and tied to this client. Do not share publicly.");
  console.log("");
}

async function cmdList() {
  const store = await readStore();
  if (store.tokens.length === 0) {
    console.log("No tokens yet. Add one with: node scripts/intake-token.mjs add \"Client Name\"");
    return;
  }
  console.log("");
  console.log("  " + "TOKEN".padEnd(28) + "CLIENT".padEnd(24) + "STATUS".padEnd(12) + "EXPIRES");
  console.log("  " + "-".repeat(80));
  for (const t of store.tokens.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))) {
    const status = statusOf(t);
    const color = status === "active" ? "🟢" : status === "submitted" ? "✅" : "⚪";
    console.log(
      "  " +
        t.token.padEnd(28) +
        t.clientName.slice(0, 22).padEnd(24) +
        `${color} ${status}`.padEnd(12) +
        fmtDate(t.expiresAt),
    );
  }
  console.log("");
}

async function cmdInspect(tokenStr) {
  if (!tokenStr) {
    console.error("Usage: node scripts/intake-token.mjs inspect <token>");
    process.exit(1);
  }
  const store = await readStore();
  const t = store.tokens.find((x) => x.token === tokenStr);
  if (!t) {
    console.error(`Token not found: ${tokenStr}`);
    process.exit(1);
  }
  console.log("");
  console.log("  Token:");
  console.log(`    ${t.token}`);
  console.log(`    Client:        ${t.clientName}`);
  console.log(`    Status:        ${statusOf(t)}`);
  console.log(`    Created:       ${fmtDate(t.createdAt)}`);
  console.log(`    Expires:       ${fmtDate(t.expiresAt)}`);
  console.log(`    Submitted at:  ${t.submittedAt ? fmtDate(t.submittedAt) : "—"}`);
  console.log(`    Submitted IP:  ${t.submittedFromIp ?? "—"}`);
  console.log(`    Notify email:  ${t.notifyEmailId ?? "—"}`);
  console.log("");
}

async function cmdExpire(tokenStr) {
  if (!tokenStr) {
    console.error("Usage: node scripts/intake-token.mjs expire <token>");
    process.exit(1);
  }
  const store = await readStore();
  const idx = store.tokens.findIndex((x) => x.token === tokenStr);
  if (idx === -1) {
    console.error(`Token not found: ${tokenStr}`);
    process.exit(1);
  }
  store.tokens[idx].expiresAt = new Date().toISOString();
  await writeStore(store);
  console.log(`  ✓ Token marked expired: ${tokenStr}`);
}

async function cmdRevoke(tokenStr) {
  if (!tokenStr) {
    console.error("Usage: node scripts/intake-token.mjs revoke <token>");
    process.exit(1);
  }
  const store = await readStore();
  const before = store.tokens.length;
  store.tokens = store.tokens.filter((x) => x.token !== tokenStr);
  if (store.tokens.length === before) {
    console.error(`Token not found: ${tokenStr}`);
    process.exit(1);
  }
  await writeStore(store);
  console.log(`  ✓ Token revoked: ${tokenStr}`);
}

const [, , cmd, ...args] = process.argv;

(async () => {
  try {
    switch (cmd) {
      case "add":
        await cmdAdd(args[0], parseDays(args[1]));
        break;
      case "list":
      case "ls":
        await cmdList();
        break;
      case "inspect":
      case "show":
        await cmdInspect(args[0]);
        break;
      case "expire":
        await cmdExpire(args[0]);
        break;
      case "revoke":
      case "rm":
      case "delete":
        await cmdRevoke(args[0]);
        break;
      default:
        console.log(`Usage:
  node scripts/intake-token.mjs add <clientName> [--days=N]
  node scripts/intake-token.mjs list
  node scripts/intake-token.mjs inspect <token>
  node scripts/intake-token.mjs expire <token>
  node scripts/intake-token.mjs revoke <token>`);
    }
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
