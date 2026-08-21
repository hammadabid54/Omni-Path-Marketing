import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isAdminAuthed, adminEnabled, setSessionCookieHeader } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin · Omni Path", robots: { index: false, follow: false } };

/**
 * Admin layout. Gates the entire /admin tree.
 *
 *  - If ADMIN_PASSWORD is unset, the route 404s (feature opt-in).
 *  - If a valid session cookie is present, the requested child page renders.
 *  - Otherwise, the password prompt renders inline.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!adminEnabled()) {
    notFound();
  }

  const authed = await isAdminAuthed();

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
        <PasswordGate />
      </main>
    );
  }

  return <AdminShell>{children}</AdminShell>;
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-white/8 bg-[#0a0a0f]">
        <div className="container-page py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-white font-semibold tracking-tight" aria-label="Admin home">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-lime-400/15 text-lime-400 text-xs font-bold">
                  A
                </span>
                <span>Omni Path Admin</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              <AdminLink href="/admin" label="Dashboard" />
              <AdminLink href="/admin/leads" label="Leads" />
              <AdminLink href="/admin/intake" label="Intake tokens" />
            </nav>
          </div>
          <form action="/admin/logout" method="post">
            <button
              type="submit"
              className="text-xs text-white/55 hover:text-white transition-colors"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="container-page py-8">{children}</main>
    </div>
  );
}

function AdminLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-md text-white/65 hover:text-white hover:bg-white/5 transition-colors"
    >
      {label}
    </Link>
  );
}

function PasswordGate() {
  async function login(formData: FormData) {
    "use server";
    const submitted = String(formData.get("password") ?? "");
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) notFound();
    if (submitted !== expected) {
      const { redirect } = await import("next/navigation");
      redirect("/admin?error=1");
    }
    const h = await headers();
    const secure = (h.get("x-forwarded-proto") ?? "http") === "https";
    const cookieValue = setSessionCookieHeader(expected, secure);
    // Parse the Set-Cookie attributes out of the constructed string
    // so we can use cookies().set() (the App Router API for actions).
    const [name, ...rest] = cookieValue.split(";").map((s) => s.trim());
    const eq = name.indexOf("=");
    const value = name.slice(eq + 1);
    const opts: Record<string, string> = {};
    for (const s of rest) {
      const [k, v] = s.split("=").map((x) => x.trim());
      opts[k.toLowerCase()] = v ?? "true";
    }
    (await cookies()).set("opm_admin", value, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: Number(opts["max-age"]) || 604800,
      secure: Boolean(opts["secure"]),
    });
    const { redirect: r } = await import("next/navigation");
    r("/admin");
  }

  return (
    <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#11111A] p-8">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 text-xl font-bold">
        A
      </div>
      <h1 className="mt-4 text-2xl font-semibold text-white">Admin sign-in</h1>
      <p className="mt-1 text-sm text-white/55">
        Enter the admin password to manage intake links and view lead submissions.
      </p>
      <form action={login} className="mt-6 space-y-3">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/45">Password</span>
          <input
            type="password"
            name="password"
            autoFocus
            required
            className="input mt-1.5"
            placeholder="••••••••"
          />
        </label>
        <button type="submit" className="btn btn-primary w-full">Sign in</button>
      </form>
      <p className="mt-3 text-xs text-white/40">
        Wrong password? Check <code className="text-white/55">ADMIN_PASSWORD</code> in <code className="text-white/55">.env.local</code>.
      </p>
    </div>
  );
}
