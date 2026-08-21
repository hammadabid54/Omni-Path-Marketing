import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { resolveTokenStatus } from "@/lib/intake-tokens";
import { IntakeForm } from "@/components/forms/intake-form";
import { Lock, Clock, CheckCircle2, Mail, Phone } from "lucide-react";
import { BRAND_EMAIL, BRAND_PHONE_DISPLAY, BRAND_PHONE_TEL } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Client Intake · Omni Path",
  description: "Private client intake form. Token required.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/intake" },
};

export default async function IntakePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  // Token can contain URL-unsafe chars in theory; trim and validate.
  if (!/^[A-Za-z0-9_-]{6,64}$/.test(token)) {
    notFound();
  }
  const { status, record } = await resolveTokenStatus(token);
  if (status === "not-found") notFound();

  if (status === "expired") {
    return <ExpiredView token={token} />;
  }
  if (status === "submitted") {
    return <AlreadySubmittedView />;
  }
  return <FreshView token={token} clientName={record!.clientName} expiresAt={record!.expiresAt} />;
}

function FreshView({
  token,
  clientName,
  expiresAt,
}: {
  token: string;
  clientName: string;
  expiresAt: string;
}) {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-white/8 bg-[#0a0a0f]">
        <div className="container-page py-5 flex items-center justify-between gap-4">
          <Link href="/" className="text-white font-semibold tracking-tight" aria-label="Omni Path — home">
            Omni Path
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-lime-400">
            <Lock className="h-3 w-3" /> Private intake
          </span>
        </div>
      </header>

      <section className="container-page py-10 md:py-16 max-w-3xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">
            Onboarding for {clientName}
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Welcome. <em className="font-serif not-italic text-lime-400">Let&apos;s get you set up.</em>
          </h1>
          <p className="mt-3 text-white/65 max-w-2xl">
            6 short steps. Plain English. No public access — this link is single-use and tied to your
            onboarding. Save the link; it expires on{" "}
            <span className="text-white/85 font-medium">{new Date(expiresAt).toLocaleDateString()}</span>.
          </p>
          <p className="mt-2 text-[11px] text-white/40 font-mono">ref: {token}</p>
        </div>

        <IntakeForm token={token} />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 text-sm text-white/55">
          <a href={`mailto:${BRAND_EMAIL}`} className="flex items-center gap-2 hover:text-lime-400">
            <Mail className="h-4 w-4" /> {BRAND_EMAIL}
          </a>
          <a href={BRAND_PHONE_TEL} className="flex items-center gap-2 hover:text-lime-400">
            <Phone className="h-4 w-4" /> {BRAND_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}

function ExpiredView({ token }: { token: string }) {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#11111A] p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-400/10 text-rose-400">
          <Clock className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-white">This link has expired.</h1>
        <p className="mt-2 text-white/65 text-sm">
          The link you used is no longer valid. We issue links with a 14-day window for security.
        </p>
        <p className="mt-2 text-xs text-white/40 font-mono">ref: {token}</p>
        <a
          href={`mailto:${BRAND_EMAIL}?subject=New%20intake%20link%20needed&body=Hi%2C%20I%20need%20a%20new%20intake%20link.%20Old%20ref%3A%20${encodeURIComponent(token)}`}
          className="btn btn-primary mt-6 w-full"
        >
          Request a new link
        </a>
      </div>
    </main>
  );
}

function AlreadySubmittedView() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-lime-400/30 bg-lime-400/5 p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-white">Already submitted.</h1>
        <p className="mt-2 text-white/65 text-sm">
          You&apos;ve already submitted this intake. We have everything we need — you&apos;ll hear from
          us within 1 business day.
        </p>
        <a href={`mailto:${BRAND_EMAIL}`} className="btn btn-ghost mt-6 w-full">
          Need to send more info? Email us.
        </a>
      </div>
    </main>
  );
}
