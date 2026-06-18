import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { principle } from "@/lib/content";

/** Small tracked subhead that labels each group within the section. */
function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">
        {children}
      </h3>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Principle() {
  return (
    <Section id="principle">
      <SectionHeading
        eyebrow={principle.eyebrow}
        title={principle.heading}
        intro={principle.intro}
      />

      <div className="mt-14 flex flex-col gap-12">
        {/* 1 — Traditional core */}
        <div>
          <Reveal>
            <GroupLabel>Traditional core</GroupLabel>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principle.traditional.map((t, i) => (
              <Reveal key={t.verb} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors duration-300 hover:border-border-strong">
                  <span className="text-lg font-bold tracking-tight text-heading">
                    {t.verb}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">
                    {t.body}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2 — Generative layer (visually distinct: the additive layer) */}
        <div>
          <Reveal>
            <GroupLabel>Generative layer</GroupLabel>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {principle.generative.map((g, i) => (
              <Reveal key={g.verb} delay={i * 0.05} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-accent/40 bg-accent/10 p-6 backdrop-blur transition-colors duration-300 hover:border-accent/60">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Additive
                    </span>
                  </div>
                  <span className="mt-4 text-2xl font-bold tracking-tight text-heading">
                    {g.verb}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-foreground">
                    {g.body}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3 — Compound architectures */}
        <div>
          <Reveal>
            <GroupLabel>Compound architectures</GroupLabel>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principle.compound.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors duration-300 hover:border-border-strong">
                  <h4 className="text-base font-semibold tracking-tight text-heading">
                    {c.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* kicker — the disciplines become the tools */}
      <Reveal delay={0.1}>
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-2xl font-light leading-snug tracking-tight text-heading sm:text-3xl">
          {principle.kicker}
        </p>
      </Reveal>
    </Section>
  );
}
