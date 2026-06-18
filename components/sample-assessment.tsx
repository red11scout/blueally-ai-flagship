"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { sampleAssessment as s } from "@/lib/content";
import { Counter } from "@/components/ui/counter";

const R = 54;
const C = 2 * Math.PI * R;

export function SampleAssessment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  // cumulative start percentages for each doughnut segment
  let cum = 0;
  const segments = s.pillars.map((p) => {
    const seg = { ...p, start: cum };
    cum += p.pct;
    return seg;
  });

  const readinessPct = (s.readiness / 10) * 100;
  const thresholdPct = (s.readinessThreshold / 10) * 100;

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-2xl shadow-ba-navy/10 backdrop-blur-xl sm:p-7"
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-accent-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          {s.label}
        </span>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
        </div>
      </div>

      {/* headline value */}
      <div className="mt-6">
        <div className="text-5xl font-bold tracking-tight text-heading">
          <Counter value={s.totalValue} decimals={1} prefix="$" suffix="M" />
        </div>
        <p className="mt-1 text-sm text-muted">{s.totalValueLabel}</p>
        <p className="mt-1 text-xs text-muted">
          Conservative ${s.range.low}M
          <span className="px-1.5 text-accent-ink">·</span>
          Optimistic ${s.range.high}M
        </p>
      </div>

      <div className="my-6 h-px w-full bg-border" />

      {/* value-mix doughnut + legend */}
      <div className="flex items-center gap-5">
        <svg viewBox="0 0 140 140" className="h-32 w-32 shrink-0 -rotate-0">
          <circle
            cx="70"
            cy="70"
            r={R}
            fill="none"
            stroke="var(--border)"
            strokeWidth="15"
          />
          {segments.map((seg) => {
            const dash = (seg.pct / 100) * C;
            const rot = (seg.start / 100) * 360 - 90;
            return (
              <motion.circle
                key={seg.name}
                cx="70"
                cy="70"
                r={R}
                fill="none"
                stroke={seg.color}
                strokeWidth="15"
                strokeLinecap="butt"
                strokeDasharray={`${dash} ${C - dash}`}
                transform={`rotate(${rot} 70 70)`}
                initial={reduce ? false : { strokeDashoffset: dash }}
                animate={inView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2 + seg.start / 130, ease: "easeOut" }}
              />
            );
          })}
          <text
            x="70"
            y="64"
            textAnchor="middle"
            className="fill-heading text-[1.4rem] font-bold"
          >
            {s.useCasesValidated}
          </text>
          <text
            x="70"
            y="82"
            textAnchor="middle"
            className="fill-[var(--muted)] text-[0.55rem] uppercase tracking-wider"
          >
            use cases
          </text>
        </svg>

        <ul className="flex flex-1 flex-col gap-2">
          {s.pillars.map((p) => (
            <li key={p.name} className="flex items-center gap-2 text-xs">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: p.color }}
              />
              <span className="flex-1 text-foreground">{p.name}</span>
              <span className="font-semibold text-heading">{p.pct}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6 h-px w-full bg-border" />

      {/* readiness gauge */}
      <div>
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            Readiness
          </span>
          <span className="text-sm font-semibold text-heading">
            {s.readiness.toFixed(1)}
            <span className="text-muted">/10</span>
          </span>
        </div>
        <div className="relative mt-2 h-2.5 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--ba-bright), var(--ba-green))",
            }}
            initial={reduce ? false : { width: 0 }}
            animate={inView ? { width: `${readinessPct}%` } : {}}
            transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
          />
          {/* 6.0 threshold marker */}
          <span
            className="absolute top-1/2 h-4 w-0.5 -translate-y-1/2 bg-heading/70"
            style={{ left: `${thresholdPct}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[0.7rem] text-muted">
          <span>{s.recovery}% friction-to-value recovery</span>
          <span>6.0 threshold</span>
        </div>
      </div>
    </div>
  );
}
