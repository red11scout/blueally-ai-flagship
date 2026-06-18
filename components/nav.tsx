"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CTAButton } from "@/components/ui/cta-button";
import { navLinks, hero } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <nav
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2.5 pl-5 transition-all duration-300",
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-ba-navy/5 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#top" aria-label="BlueAlly — back to top" className="shrink-0">
          <Logo width={132} />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CTAButton href={hero.ctaPrimary.href} className="hidden sm:inline-flex">
            {hero.ctaPrimary.label}
          </CTAButton>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-heading lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-2/50 hover:text-accent-ink"
              >
                {l.label}
              </Link>
            ))}
            <CTAButton
              href={hero.ctaPrimary.href}
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {hero.ctaPrimary.label}
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
