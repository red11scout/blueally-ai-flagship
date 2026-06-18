import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { whyBlueAlly } from "@/lib/content";

export function WhyBlueAlly() {
  return (
    <Section id="why" alt>
      <SectionHeading eyebrow={whyBlueAlly.eyebrow} title={whyBlueAlly.heading} />

      {/* end-to-end arc */}
      <Reveal delay={0.08}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {whyBlueAlly.arc.map((step, i) => (
            <Fragment key={step}>
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-medium text-heading">
                {step}
              </span>
              {i < whyBlueAlly.arc.length - 1 && (
                <ArrowRight className="h-4 w-4 text-accent" />
              )}
            </Fragment>
          ))}
        </div>
      </Reveal>

      <p className="mx-auto mt-6 max-w-2xl text-center text-base text-muted">
        One team owns the whole arc — from the boardroom question to the measured
        result.
      </p>

      {/* three reasons */}
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {whyBlueAlly.points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <GlowCard className="h-full">
              <span className="text-sm font-bold text-accent-ink">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-heading">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      {/* certifications */}
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {whyBlueAlly.certs.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
