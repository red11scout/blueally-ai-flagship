import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks, site, whyBlueAlly } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ba-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--ba-bright), transparent)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo variant="white" width={150} />
            <p className="mt-6 max-w-xs text-3xl font-light tracking-tight text-white">
              Conquer Complexity.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ba-light-blue/80">
              One team, end to end — from the boardroom question to the measured
              result.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ba-light-blue/80">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ba-light-blue/80">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.website}
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blueally.com
                </a>
              </li>
              <li className="pt-1 text-ba-light-blue/60">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6 text-xs text-ba-light-blue/70">
          {whyBlueAlly.certs.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/20">·</span>}
              {c}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-ba-light-blue/60 sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
