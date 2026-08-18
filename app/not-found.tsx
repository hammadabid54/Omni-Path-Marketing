import { LinkButton } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section>
      <div className="container-page text-center max-w-xl mx-auto py-20">
        <p className="text-lime-400 uppercase tracking-widest text-xs font-semibold">404</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          That page <em className="font-serif not-italic text-lime-400">doesn&apos;t exist.</em>
        </h1>
        <p className="mt-4 text-white/70">
          The link may be old, or the page may have moved. Let&apos;s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/" variant="primary" size="md" magnetic>
            Take me home
          </LinkButton>
          <LinkButton href="/contact" variant="ghost" size="md">
            Contact us
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
