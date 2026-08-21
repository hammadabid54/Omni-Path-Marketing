/**
 * Client-safe env helpers. Use these from "use client" components.
 * The server `lib/env.ts` re-validates from process.env at request time.
 */
export function turnstileEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}
