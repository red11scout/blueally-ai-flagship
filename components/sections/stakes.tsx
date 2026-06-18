import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { GlowCard } from "@/components/ui/glow-card";
import { stakes } from "@/lib/content";

export function Stakes() {
  return (
    <Section id="stakes" alt>
      <SectionHeading eyebrow={stakes.eyebrow} title={stakes.heading} />

      {/* stat strip */}
      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stakes.stats.map((stat, i) => {
          const decimals = Number.isInteger(stat.value) ? 0 : 1;
          return (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <div className="text-5xl font-bold tracking-tight text-heading sm:text-6xl">
                <Counter value={stat.value} decimals={decimals} suffix={stat.suffix} />
              </div>
              <p className="mx-auto mt-3 max-w-[18ch] text-sm leading-relaxed text-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-xs text-muted">{stat.source}</p>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-2xl font-light leading-snug tracking-tight text-heading sm:text-3xl">
          {stakes.kicker}
        </p>
      </Reveal>

      {/* customer constants */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stakes.constants.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.06}>
            <GlowCard className="h-full">
              <h3 className="text-base font-semibold text-accent-ink">{c.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
