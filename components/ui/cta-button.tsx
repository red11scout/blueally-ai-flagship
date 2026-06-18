import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  // navy on light (white text), bright-blue on dark (black text) — both approved pairs
  primary:
    "bg-ba-navy text-white shadow-sm hover:bg-ba-bright hover:text-white dark:bg-ba-bright dark:text-ba-black dark:hover:bg-white dark:hover:text-ba-black",
  secondary:
    "border border-border-strong bg-transparent text-heading hover:bg-surface-2/50",
  ghost: "text-accent-ink hover:opacity-75",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
} & Omit<ComponentProps<typeof Link>, "href" | "children">) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
