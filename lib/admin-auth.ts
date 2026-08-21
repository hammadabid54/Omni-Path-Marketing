/**
 * Admin portal auth.
 *
 * Auth model: single shared password stored in `ADMIN_PASSWORD` env var.
 * If the env var is not set, the admin feature is disabled — every check
 * returns false and the layout renders an opt-in notice.
 *
 * Session: HMAC-signed cookie. We sign `timestamp:ADMIN_PASSWORD` with
 * ADMIN_PASSWORD as the HMAC key. To verify: re-compute the signature and
 * constant-time compare. This is stateless — no server-side session store.
 *
 * The timestamp is checked against `maxAgeMs` (7 days). When the cookie
 * is refreshed (within maxAgeMs but close to expiry), we re-set it.
 *
 * SECURITY NOTES:
 *   - Use a long random ADMIN_PASSWORD (e.g. `openssl rand -hex 24`).
 *   - This is appropriate for a one-person operation. If you add other
 *     admins or want stronger guarantees, swap to a real session table.
 *   - The cookie is HttpOnly + SameSite=Lax + Secure (in production).
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "opm_admin";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const REFRESH_THRESHOLD_MS = 24 * 60 * 60 * 1000;  // 1 day

/** True when the admin feature is enabled (ADMIN_PASSWORD is set). */
export function adminEnabled(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length > 0);
}

/** True when the current request has a valid admin session cookie. */
export async function isAdminAuthed(): Promise<boolean> {
  if (!adminEnabled()) return false;
  const password = process.env.ADMIN_PASSWORD!;
  const store = await cookies();
  const cookie = store.get(COOKIE_NAME);
  if (!cookie) return false;
  return verifyCookie(cookie.value, password);
}

/** Returns the session timestamp if valid, else null. */
export function verifyCookie(cookieValue: string, password: string): boolean {
  const [ts, sig] = cookieValue.split(".");
  if (!ts || !sig) return false;
  const tsNum = Number(ts);
  if (!Number.isFinite(tsNum)) return false;
  if (Date.now() - tsNum > SESSION_MAX_AGE_MS) return false;
  const expected = sign(ts, password);
  // Constant-time compare to avoid timing attacks.
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

/** Produce a hex HMAC-SHA256 signature for `payload` using `password` as the key. */
function sign(payload: string, password: string): string {
  return createHmac("sha256", password).update(payload).digest("hex");
}

/** Cookie value to set on a successful login. Format: `<timestamp>.<sig>`. */
export function makeCookieValue(password: string): string {
  const ts = Date.now();
  return `${ts}.${sign(String(ts), password)}`;
}

/** Set the session cookie on the response. Returns a Set-Cookie header value. */
export function setSessionCookieHeader(password: string, secure: boolean): string {
  const v = makeCookieValue(password);
  const flags = [
    `${COOKIE_NAME}=${v}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}`,
  ];
  if (secure) flags.push("Secure");
  return flags.join("; ");
}

/** Clear the session cookie (logout). */
export function clearSessionCookieHeader(secure: boolean): string {
  const flags = [
    `${COOKIE_NAME}=`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=0",
  ];
  if (secure) flags.push("Secure");
  return flags.join("; ");
}

/** Returns true if the session is past the refresh threshold (close to expiry). */
export function shouldRefreshSession(cookieValue: string): boolean {
  const [ts] = cookieValue.split(".");
  if (!ts) return false;
  const tsNum = Number(ts);
  if (!Number.isFinite(tsNum)) return false;
  return Date.now() - tsNum > SESSION_MAX_AGE_MS - REFRESH_THRESHOLD_MS;
}
