"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const SERVICES = [
  { label: "SEO", href: "/services/seo" },
  { label: "Paid Ads", href: "/services/paid-ads" },
  { label: "Branding", href: "/services/branding" },
  { label: "Web & CRO", href: "/services/web-design" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "TikTok + LinkedIn", href: "/services/tiktok-linkedin-ads" },
  { label: "Email & Lifecycle", href: "/services/email-lifecycle" },
  { label: "Analytics", href: "/services/analytics" },
];

const PRIMARY = [
  { label: "For Agencies", href: "/for-agencies" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "White-Label SEO", href: "/white-label-seo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "bg-[#0a0a0f]/85 border-b border-white/8"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-semibold tracking-tight"
          aria-label="Omni Path Marketing — home"
        >
          <LogoMark />
          <span className="text-[15px]">Omni Path</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          <NavDropdown
            label="Services"
            items={SERVICES}
            isOpen={servicesOpen}
            onOpenChange={setServicesOpen}
            pathname={pathname}
          />
          {PRIMARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                pathname === item.href
                  ? "text-lime-400"
                  : "text-white/75 hover:text-white hover:bg-white/5",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <LinkButton href="/audit" variant="ghost" size="sm" className="text-white/85">
            Free audit
          </LinkButton>
          <LinkButton href="/contact" variant="primary" size="sm">
            Get started
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/8 bg-[#0a0a0f]">
          <nav aria-label="Mobile" className="container-page py-4 flex flex-col gap-1">
            <div className="text-xs uppercase tracking-widest text-white/45 px-3 pt-2 pb-1">Services</div>
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5"
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-white/8 my-2" />
            {PRIMARY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md",
                  pathname === item.href ? "text-lime-400" : "text-white/80 hover:text-white hover:bg-white/5",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5"
            >
              Blog
            </Link>
            <Link
              href="/case-studies"
              className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5"
            >
              Case studies
            </Link>
            <Link
              href="/tools"
              className="px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5"
            >
              Tools
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <LinkButton href="/audit" variant="ghost">
                Free audit
              </LinkButton>
              <LinkButton href="/contact" variant="primary">
                Get started
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavDropdown({
  label,
  items,
  isOpen,
  onOpenChange,
  pathname,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onOpenChange: (v: boolean) => void;
  pathname: string;
}) {
  const isActive = items.some((i) => pathname === i.href);
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "px-3 py-2 text-sm rounded-md transition-colors inline-flex items-center gap-1",
          isActive ? "text-lime-400" : "text-white/75 hover:text-white hover:bg-white/5",
        )}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-[260px]">
          <div className="rounded-xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md p-2 shadow-2xl">
            {items.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm",
                  pathname === s.href
                    ? "bg-lime-400/10 text-lime-400"
                    : "text-white/80 hover:text-white hover:bg-white/5",
                )}
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-white/8 my-1" />
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-sm text-white/60 hover:text-lime-400"
            >
              All services →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden>
      <defs>
        <linearGradient id="omni-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a3e635" />
          <stop offset="1" stopColor="#bef264" />
        </linearGradient>
      </defs>
      <path
        d="M16 3 L29 26 H21 L16 17 L11 26 H3 Z"
        fill="url(#omni-mark)"
      />
      <circle cx="16" cy="22" r="2" fill="#0a0a0f" />
    </svg>
  );
}
