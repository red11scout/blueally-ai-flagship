import { ArrowRight, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { finalCta, site } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="start"
      className="relative scroll-mt-24 overflow-hidden bg-ba-navy px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--ba-bright), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ba-light-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-ba-bright" />
            {finalCta.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ba-light-blue/90">
            {finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton
              href={site.bookHref}
              className="bg-white text-ba-navy hover:bg-ba-light-blue dark:bg-white dark:text-ba-navy dark:hover:bg-ba-light-blue"
            >
              Book the workshop
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton
              href="#method"
              variant="secondary"
              className="border-white/30 text-white hover:bg-white/10"
            >
              See the method
            </CTAButton>
          </div>
        </Reveal>

        {/* three steps */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 text-left sm:grid-cols-3">
          {finalCta.steps.map((s, i) => (
            <Reveal key={s.n} delay={0.1 + i * 0.07}>
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                <span className="text-sm font-bold text-ba-bright">{s.n}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ba-light-blue/80">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ba-light-blue">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-14 text-3xl font-light tracking-tight text-white sm:text-4xl">
            {site.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
