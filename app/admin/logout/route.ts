import { NextResponse } from "next/server";
import { clearSessionCookieHeader } from "@/lib/admin-auth";

/**
 * POST /admin/logout — clears the admin session cookie and redirects to
 * the login prompt.
 */
export async function POST(req: Request) {
  const url = new URL("/admin", req.url);
  const secure = (req.headers.get("x-forwarded-proto") ?? "http") === "https";
  const res = NextResponse.redirect(url, { status: 303 });
  res.headers.append("Set-Cookie", clearSessionCookieHeader(secure));
  return res;
}
