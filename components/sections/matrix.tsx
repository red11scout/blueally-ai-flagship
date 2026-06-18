"use client";

import { useState } from "react";
import { ArrowUp, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { matrix } from "@/lib/content";
import { cn } from "@/lib/utils";

const byKey = Object.fromEntries(matrix.quadrants.map((q) => [q.key, q]));
// grid order: top-left, top-right, bottom-left, bottom-right
const order = ["strategic", "champions", "foundation", "quickwins"] as const;

export function ValueReadinessMatrix() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="matrix" alt>
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={matrix.eyebrow}
            title={matrix.heading}
            intro={matrix.intro}
          />

          {/* readiness weights */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-heading">
              Readiness, weighted
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {matrix.weights.map((w, i) => (
                <Reveal key={w.name} delay={i * 0.05}>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{w.name}</span>
                      <span className="font-semibold text-heading">{w.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${w.pct}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 rounded-2xl border border-border bg-surface/60 p-4 text-sm leading-relaxed text-muted">
              {matrix.threshold}
            </p>
          </Reveal>
        </div>

        {/* the 2x2 */}
        <div className="flex gap-3">
          {/* y-axis */}
          <div className="flex flex-col items-center justify-center">
            <span className="flex rotate-180 items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted [writing-mode:vertical-rl]">
              Value
              <ArrowUp className="h-3.5 w-3.5 rotate-180" />
            </span>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3">
              {order.map((key) => {
                const q = byKey[key];
                const isChampion = key === "champions";
                const dim = active && active !== key;
                return (
                  <div
                    key={key}
                    onMouseEnter={() => setActive(key)}
                    onMouseLeave={() => setActive(null)}
                    className={cn(
                      "relative flex min-h-[150px] flex-col rounded-2xl border p-5 transition-all duration-300 sm:min-h-[180px]",
                      isChampion
                        ? "border-accent/50 bg-accent/[0.06]"
                        : "border-border bg-surface/60",
                      active === key && "border-border-strong shadow-lg shadow-ba-navy/10",
                      dim && "opacity-60",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-heading">
                        {q.title}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[0.7rem] font-medium",
                          isChampion
                            ? "bg-accent text-white dark:text-ba-black"
                            : "border border-border text-accent-ink",
                        )}
                      >
                        {q.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {q.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* x-axis */}
            <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Readiness
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
