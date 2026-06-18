import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { epoch } from "@/lib/content";

export function Epoch() {
  return (
    <Section id="epoch">
      <SectionHeading
        eyebrow={epoch.eyebrow}
        title={epoch.heading}
        intro={epoch.intro}
      />

      {/* EPOCH acronym — five letter-led cards */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {epoch.items.map((item, i) => (
          <Reveal key={item.letter} delay={i * 0.06}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur transition-colors duration-300 hover:border-border-strong sm:p-7">
              {/* large display letter */}
              <span
                aria-hidden
                className="block text-5xl font-bold leading-none tracking-tight text-heading transition-colors duration-300 group-hover:text-accent-ink sm:text-6xl"
              >
                {item.letter}
              </span>
              <span className="mt-5 h-px w-8 bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
              <h3 className="mt-5 text-base font-semibold leading-snug text-heading">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
