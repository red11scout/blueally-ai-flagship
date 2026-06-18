import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientMesh, DotGrid } from "@/components/ui/backgrounds";
import { SampleAssessment } from "@/components/sample-assessment";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pb-28 lg:pt-44"
    >
      <GradientMesh />
      <DotGrid className="opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance text-[2.6rem] font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-[4rem]">
              {hero.headlineTop}{" "}
              <span className="text-gradient">{hero.headlineEm}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              <CTAButton href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-xs font-medium text-muted">
              {hero.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <SampleAssessment />
        </Reveal>
      </div>
    </section>
  );
}
