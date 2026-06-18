import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { method } from "@/lib/content";

export function Method() {
  return (
    <Section id="method" alt>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* sticky rail */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={method.eyebrow}
            title={method.heading}
            intro={method.intro}
          />
          <div className="mt-8 flex flex-col gap-4">
            {method.pillars.map((p) => (
              <Reveal key={p.title}>
                <div className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <h3 className="text-sm font-semibold text-heading">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* steps */}
        <ol className="relative flex flex-col gap-4">
          {method.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <li className="group relative flex gap-5 rounded-3xl border border-border bg-surface/60 p-5 backdrop-blur transition-colors hover:border-border-strong sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ba-navy text-base font-bold text-white dark:bg-ba-bright dark:text-ba-black">
                  {step.n}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-heading">{step.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.line}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {step.deliverable}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                      Closes: {step.closes}
                    </span>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
