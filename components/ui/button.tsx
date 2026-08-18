"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

type Variant = "primary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  children?: ReactNode;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  link: "btn-link",
};

const sizeClass: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

function buildClass(variant: Variant, size: Size, className?: string) {
  return cn("btn", variantClass[variant], sizeClass[size], className);
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Standard button. Use for forms, ghost CTAs, secondary actions.
 * For the magnetic effect, set `magnetic` or use `MagneticButton` instead.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", magnetic, className, children, type = "button", ...rest },
  ref,
) {
  if (magnetic) {
    return (
      <MagneticButton variant={variant} size={size} className={className} {...rest}>
        {children}
      </MagneticButton>
    );
  }
  return (
    <button ref={ref} type={type} className={buildClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
});

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  prefetch?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export function LinkButton({
  href,
  external,
  prefetch,
  target,
  rel,
  variant = "primary",
  size = "md",
  magnetic,
  className,
  children,
  onClick,
  ...rest
}: LinkButtonProps) {
  const cls = buildClass(variant, size, className);

  if (magnetic) {
    return (
      <MagneticLink href={href} external={external} className={cls} onClick={onClick} {...rest}>
        {children}
      </MagneticLink>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        className={cls}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} prefetch={prefetch} className={cls} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}

/* =====================================================
   MagneticButton / MagneticLink — primary CTA affordance.
   Cursor pulls the button by up to ~12px within its bounds.
   ===================================================== */

interface MagneticProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  id?: string;
  name?: string;
  value?: string | number | readonly string[];
  form?: string;
  [key: string]: unknown;
}

export function MagneticButton(props: MagneticProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
    disabled,
    onClick,
    ...rest
  } = props;
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });

  if (reduced) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={buildClass(variant, size, className)}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * 0.3);
        y.set((e.clientY - cy) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      transition={motionTokens.fast}
      className={buildClass(variant, size, className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

function MagneticLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
}: MagneticProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });

  const motionProps = reduced
    ? {}
    : {
        onMouseMove: (e: React.MouseEvent<HTMLElement>) => {
          const el = e.currentTarget;
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          x.set((e.clientX - cx) * 0.3);
          y.set((e.clientY - cy) * 0.3);
        },
        onMouseLeave: () => {
          x.set(0);
          y.set(0);
        },
        style: { x: sx, y: sy },
        whileTap: { scale: 0.97 },
        transition: motionTokens.fast,
      };

  const cls = buildClass(variant, size, className);

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cls}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.span {...motionProps} className="inline-block">
      <Link href={href ?? "#"} onClick={onClick} className={cls}>
        {children}
      </Link>
    </motion.span>
  );
}
