import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small uppercase label pill above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent-ink backdrop-blur",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
