"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Card with a pointer-following ambient glow — the premium "lit" feel. */
export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors duration-300 hover:border-border-strong sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(440px circle at var(--mx, 50%) var(--my, 50%), var(--glow), transparent 55%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
