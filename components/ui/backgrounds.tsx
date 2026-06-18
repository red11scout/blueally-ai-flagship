import { cn } from "@/lib/utils";

/** Soft brand gradient orbs + grain — atmospheric backdrop for hero / accent sections. */
export function GradientMesh({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "subtle";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "grain pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute -top-48 left-1/2 h-[42rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow), transparent)",
          opacity: variant === "subtle" ? 0.5 : 0.9,
        }}
      />
      <div
        className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--glow-navy), transparent)",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--glow-navy), transparent)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}

/** Faint dotted grid — structural, blueprint-like texture. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "radial-gradient(var(--border-strong) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)",
      }}
    />
  );
}
