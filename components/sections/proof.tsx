import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { proof } from "@/lib/content";

export function Proof() {
  return (
    <Section id="proof">
      <SectionHeading eyebrow={proof.eyebrow} title={proof.heading} />

      {/* ── 1 · ROI — four hard numbers ── */}
      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {proof.roi.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.07}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-surface/60 p-6 backdrop-blur">
              <div className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── 2 · CASE STUDIES — three engagements that shipped ── */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {proof.cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <GlowCard className="flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c.industry}
                </span>
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {c.weeks}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-border pt-5">
                {c.results.map((result) => (
                  <li
                    key={result}
                    className="flex gap-2.5 text-sm font-medium text-foreground"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      aria-hidden
                    />
                    <span className="leading-snug">{result}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      {/* ── 3 · TIMELINE — value compounds across three windows ── */}
      <Reveal delay={0.05} className="mt-20">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-ink">
          How the value compounds
        </p>
      </Reveal>

      <div className="relative mt-8 grid gap-4 lg:grid-cols-3 lg:gap-6">
        {/* connecting line through the sequence (desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[16%] top-7 hidden h-px bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 lg:block"
        />
        {proof.timeline.map((phase, i) => (
          <Reveal key={phase.window} delay={i * 0.1}>
            <div className="relative flex h-full flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-9 items-center rounded-full border border-border-strong bg-surface px-4 text-sm font-semibold text-heading">
                  {phase.window}
                </span>
                {i < proof.timeline.length - 1 && (
                  <ArrowRight
                    className="h-4 w-4 text-accent lg:hidden"
                    aria-hidden
                  />
                )}
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                {phase.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
