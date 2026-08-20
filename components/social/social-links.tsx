import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { SOCIAL_PROFILES } from "@/lib/seo";

/**
 * Brand social profiles. Single source of truth = lib/seo.ts SOCIAL_PROFILES.
 * Used in footer, contact page, and the Organization schema's sameAs.
 */

const ICON_PROPS = {
  size: 18,
  strokeWidth: 1.75,
  "aria-hidden": true,
} as const;

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M12.04 2C6.51 2 2 6.51 2 12.04c0 4.24 2.65 7.86 6.39 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.49 1.81 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.19-4.08-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.07.31-.25 1-.28 1.13-.05.19-.15.23-.34.14-1.27-.59-2.07-2.45-2.07-3.94 0-3.2 2.33-6.15 6.71-6.15 3.52 0 6.26 2.51 6.26 5.86 0 3.5-2.2 6.31-5.26 6.31-1.03 0-2-.54-2.33-1.17 0 0-.51 1.94-.63 2.42-.23.88-.85 1.99-1.27 2.66.95.3 1.96.46 3.01.46 5.52 0 10.02-4.5 10.02-10.04C22.04 6.51 17.55 2 12.04 2z" />
    </svg>
  );
}

export function SocialLinks({
  variant = "default",
  className = "",
  showLabels = false,
}: {
  variant?: "default" | "compact" | "large";
  className?: string;
  showLabels?: boolean;
}) {
  const sizeClass =
    variant === "large"
      ? "h-11 w-11"
      : variant === "compact"
      ? "h-8 w-8"
      : "h-10 w-10";
  const iconClass = variant === "large" ? "h-5 w-5" : "h-4 w-4";

  const links = [
    { label: "LinkedIn", href: SOCIAL_PROFILES.linkedin, Icon: Linkedin },
    { label: "Instagram", href: SOCIAL_PROFILES.instagram, Icon: Instagram },
    { label: "Facebook", href: SOCIAL_PROFILES.facebook, Icon: Facebook },
    { label: "X (Twitter)", href: SOCIAL_PROFILES.x, Icon: Twitter },
    { label: "Pinterest", href: SOCIAL_PROFILES.pinterest, Icon: PinterestIcon },
  ];

  return (
    <ul
      className={`flex flex-wrap items-center gap-2 ${className}`}
      aria-label="Omni Path Marketing on social media"
    >
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`Omni Path Marketing on ${label}`}
            className={`inline-flex items-center justify-center ${sizeClass} rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-lime-400/40 hover:bg-lime-400/10 hover:text-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60`}
          >
            <Icon {...ICON_PROPS} className={iconClass} />
            {showLabels && <span className="ml-2 text-sm">{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
