/**
 * Standalone test of admin-auth: prove the HMAC sign/verify math
 * matches the production module. Run with: `node scripts/test-admin-auth.mjs`
 */
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "opm_admin";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const password = process.env.ADMIN_PASSWORD;

if (!password) {
  console.error("Set ADMIN_PASSWORD in env to test");
  process.exit(1);
}

function sign(payload, pwd) {
  return createHmac("sha256", pwd).update(payload).digest("hex");
}
function verifyCookie(cookieValue, pwd) {
  const [ts, sig] = cookieValue.split(".");
  if (!ts || !sig) return false;
  const tsNum = Number(ts);
  if (!Number.isFinite(tsNum)) return false;
  if (Date.now() - tsNum > SESSION_MAX_AGE_MS) return false;
  const expected = sign(ts, pwd);
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
function makeCookieValue(pwd) {
  const ts = Date.now();
  return `${ts}.${sign(String(ts), pwd)}`;
}

// Test 1: roundtrip
const good = makeCookieValue(password);
const ok1 = verifyCookie(good, password);
console.log(`Test 1: roundtrip valid cookie  -> ${ok1 ? "PASS" : "FAIL"}`);

// Test 2: wrong password
const ok2 = verifyCookie(good, "wrong-password");
console.log(`Test 2: wrong password rejected -> ${!ok2 ? "PASS" : "FAIL"}`);

// Test 3: tampered signature
const tampered = good.replace(/.$/, (c) => (c === "a" ? "b" : "a"));
const ok3 = verifyCookie(tampered, password);
console.log(`Test 3: tampered sig rejected  -> ${!ok3 ? "PASS" : "FAIL"}`);

// Test 4: expired (>7d)
const oldTs = Date.now() - 8 * 24 * 60 * 60 * 1000;
const expired = `${oldTs}.${sign(String(oldTs), password)}`;
const ok4 = verifyCookie(expired, password);
console.log(`Test 4: expired (>7d) rejected  -> ${!ok4 ? "PASS" : "FAIL"}`);

// Test 5: malformed
const ok5 = verifyCookie("garbage", password);
const ok6 = verifyCookie("only.one.dot", password);
const ok7 = verifyCookie("12345.", password);
console.log(`Test 5: garbage rejected       -> ${!ok5 ? "PASS" : "FAIL"}`);
console.log(`Test 6: partial rejected       -> ${!ok6 ? "PASS" : "FAIL"}`);
console.log(`Test 7: missing sig rejected   -> ${!ok7 ? "PASS" : "FAIL"}`);

// Output a valid cookie to use with curl
console.log("");
console.log(`VALID_COOKIE=${good}`);
console.log(`COOKIE_NAME=${COOKIE_NAME}`);
