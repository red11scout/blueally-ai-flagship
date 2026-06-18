import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { CTAButton } from "@/components/ui/cta-button";
import { workshop, site } from "@/lib/content";

export function Workshop() {
  return (
    <Section id="workshop" alt>
      <SectionHeading
        eyebrow={workshop.eyebrow}
        title={workshop.heading}
        intro={workshop.intro}
      />

      {/* 1 · The two-day arc — three phases */}
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {workshop.phases.map((phase, i) => (
          <Reveal key={phase.n} delay={i * 0.08}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/70 p-7 backdrop-blur transition-colors duration-300 hover:border-border-strong sm:p-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold tracking-tight text-accent-ink sm:text-5xl">
                  {phase.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-heading">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {phase.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 2 · Seven deliverables */}
      <Reveal className="mt-20">
        <h3 className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl">
          Seven deliverables
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-muted">
          Everything you leave with — the working artifacts, not a slide deck.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workshop.deliverables.map((d, i) => (
          <Reveal
            key={d.n}
            delay={(i % 3) * 0.06}
            className={d.n === 7 ? "lg:col-span-3" : undefined}
          >
            <GlowCard className="flex h-full gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ba-navy text-sm font-bold text-white dark:bg-ba-bright dark:text-ba-black">
                {d.n}
              </span>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-heading">{d.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.body}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      {/* 3 · Differentiators — three, not thirty */}
      <Reveal className="mt-20">
        <h3 className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl">
          Three, not thirty.
        </h3>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {workshop.differentiators.map((d, i) => (
          <Reveal key={d} delay={(i % 2) * 0.06}>
            <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors duration-300 hover:border-border-strong">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Check className="h-4 w-4 text-accent" strokeWidth={2.5} />
              </span>
              <p className="text-sm leading-relaxed text-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 4 · CTA */}
      <Reveal delay={0.05} className="mt-16 flex justify-center">
        <CTAButton href={site.bookHref}>Book the workshop</CTAButton>
      </Reveal>
    </Section>
  );
}
