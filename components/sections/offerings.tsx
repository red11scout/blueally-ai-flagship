import { ArrowDown, Check, ShieldCheck, FileCheck2, Activity } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { offerings } from "@/lib/content";
import { cn } from "@/lib/utils";

const wrapIcons = [ShieldCheck, FileCheck2, Activity] as const;

/** Subtle label that names the relationship between two layers of the stack. */
function LayerJoint({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center" delay={0.05}>
      <span className="inline-flex items-center gap-2 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">
        {children}
        <ArrowDown className="h-3.5 w-3.5 text-accent" aria-hidden />
      </span>
    </Reveal>
  );
}

/** Status pill — "Available now" reads as success; everything else stays accent/muted. */
function StatusBadge({ status }: { status: string }) {
  const live = /available/i.test(status);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        live
          ? "bg-success/12 text-success"
          : "border border-border bg-surface-2/40 text-muted",
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          live ? "bg-success" : "bg-accent",
        )}
      />
      {status}
    </span>
  );
}

export function Offerings() {
  return (
    <Section id="offerings" alt>
      <SectionHeading
        eyebrow={offerings.eyebrow}
        title={offerings.heading}
        intro={offerings.intro}
      />

      {/* The operating-system stack: advisory → pillars → foundation → governance wrap */}
      <div className="mx-auto mt-16 max-w-5xl">
        {/* ── 1 · ADVISORY (top — guides the system) ── */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-ink">
                  Advisory Layer
                </span>
                <h3 className="mt-2 text-xl font-semibold text-heading sm:text-2xl">
                  {offerings.advisory.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {offerings.advisory.sub}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:max-w-md sm:justify-end">
                {offerings.advisory.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <LayerJoint>Advises</LayerJoint>

        {/* ── 2 · THE THREE PILLARS (middle — the engines) ── */}
        <div className="grid gap-4 lg:grid-cols-3">
          {offerings.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <GlowCard className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-heading">
                    {pillar.title}
                  </h3>
                </div>
                <div className="mt-3">
                  <StatusBadge status={pillar.status} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {pillar.body}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 -mx-6 -mb-6 border-t border-border bg-surface-2/40 px-6 py-4 sm:-mx-8 sm:-mb-8 sm:px-8">
                  <p className="text-sm font-medium text-accent-ink">
                    <span className="text-muted">You get: </span>
                    {pillar.get}
                  </p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <LayerJoint>Runs on</LayerJoint>

        {/* ── 3 · FOUNDATION (base — what the pillars sit on) ── */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface-2/40 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-ink">
                    Foundation Layer
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-heading sm:text-2xl">
                    {offerings.foundation.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {offerings.foundation.sub}
                  </p>
                </div>
                <p className="text-sm font-medium text-accent-ink sm:max-w-xs sm:text-right">
                  <span className="text-muted">You get: </span>
                  {offerings.foundation.get}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                {offerings.foundation.items.map((item, i) => (
                  <span key={item} className="flex items-center gap-2 text-sm">
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="hidden text-border-strong sm:inline"
                      >
                        ·
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-background/60 px-3 py-1.5 font-medium text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <LayerJoint>Governed by</LayerJoint>

        {/* ── 4 · WRAP (bottom — governance & operations around everything) ── */}
        <div className="grid gap-4 sm:grid-cols-3">
          {offerings.wrap.map((service, i) => {
            const Icon = wrapIcons[i] ?? ShieldCheck;
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-border-strong">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-heading">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
