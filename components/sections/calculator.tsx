"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { site } from "@/lib/content";
import {
  industries,
  maturities,
  sliderToRevenue,
  revenueToSlider,
  computeTrappedValue,
  formatCurrency,
} from "@/lib/calculator";
import { cn } from "@/lib/utils";

export function Calculator() {
  const [slider, setSlider] = useState(() => revenueToSlider(500_000_000));
  const [industryKey, setIndustryKey] = useState(industries[0].key);
  const [maturityKey, setMaturityKey] = useState(maturities[1].key);

  const revenue = useMemo(() => sliderToRevenue(slider), [slider]);
  const industry = industries.find((i) => i.key === industryKey)!;
  const maturity = maturities.find((m) => m.key === maturityKey)!;
  const { low, high } = useMemo(
    () => computeTrappedValue(revenue, industry.rate, maturity.factor),
    [revenue, industry.rate, maturity.factor],
  );

  return (
    <Section id="calculator">
      <SectionHeading
        eyebrow="Trapped Value"
        title="How big is the prize for you?"
        intro="Three inputs. The same baseline math the workshop runs at Step 6 — deterministic and reproducible. A planning estimate, not a forecast."
      />

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* inputs */}
          <div className="rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur sm:p-8">
            <label className="block">
              <span className="text-sm font-medium text-heading">
                Annual revenue
              </span>
              <span className="float-right text-sm font-semibold text-accent-ink">
                {formatCurrency(revenue)}
              </span>
              <input
                type="range"
                min={0}
                max={100}
                step={0.5}
                value={slider}
                onChange={(e) => setSlider(Number(e.target.value))}
                aria-label="Annual revenue"
                className="ba-range mt-3 w-full"
              />
              <span className="mt-1 flex justify-between text-xs text-muted">
                <span>$10M</span>
                <span>$10B</span>
              </span>
            </label>

            <div className="mt-6">
              <span className="text-sm font-medium text-heading">Industry</span>
              <select
                value={industryKey}
                onChange={(e) => setIndustryKey(e.target.value)}
                aria-label="Industry"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:border-border-strong"
              >
                {industries.map((i) => (
                  <option key={i.key} value={i.key}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <span className="text-sm font-medium text-heading">AI maturity</span>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {maturities.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setMaturityKey(m.key)}
                    className={cn(
                      "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors",
                      maturityKey === m.key
                        ? "border-accent bg-accent/10 text-accent-ink"
                        : "border-border text-muted hover:border-border-strong",
                    )}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* output */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-border bg-ba-navy p-8 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(closest-side, var(--ba-bright), transparent)" }}
            />
            <span className="relative text-xs font-medium uppercase tracking-[0.18em] text-ba-light-blue">
              Annual trapped value
            </span>
            <div className="relative mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {formatCurrency(low)}
              <span className="px-2 text-ba-light-blue">–</span>
              {formatCurrency(high)}
            </div>
            <p className="relative mt-4 text-sm leading-relaxed text-ba-light-blue/85">
              A probability-weighted range. The CFO-defensible floor sits at the
              low end; the high end captures upside as readiness clears.
            </p>
            <CTAButton
              href={site.bookHref}
              className="relative mt-6 w-full bg-white text-ba-navy hover:bg-ba-light-blue dark:bg-white dark:text-ba-navy dark:hover:bg-ba-light-blue"
            >
              Get your validated number
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </Reveal>

      <p className="mt-6 text-center text-xs text-muted">
        Math is deterministic and reproducible — reviewed at every workshop intake.
      </p>
    </Section>
  );
}
