import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { failureModes } from "@/lib/content";

export function FailureModes() {
  return (
    <Section id="failure-modes">
      <SectionHeading eyebrow={failureModes.eyebrow} title={failureModes.heading} />

      {/* five failure modes */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {failureModes.modes.map((mode, i) => (
          <Reveal key={mode.numeral} delay={i * 0.06} className="h-full">
            <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors duration-300 hover:border-border-strong sm:p-8">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold leading-none tracking-tight text-accent-ink sm:text-6xl">
                  {mode.numeral}
                </span>
                <span
                  aria-hidden
                  className="h-px flex-1 translate-y-[-0.35rem] bg-border"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-heading">
                  {mode.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{mode.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* the pattern lands */}
      <Reveal delay={0.1}>
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-2xl font-light leading-snug tracking-tight text-heading sm:text-3xl">
          {failureModes.kicker}
        </p>
      </Reveal>
    </Section>
  );
}
