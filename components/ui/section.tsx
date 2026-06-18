import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Eyebrow } from "./eyebrow";

export function Section({
  id,
  alt,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  alt?: boolean;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:py-32",
        alt && "bg-background-alt",
        className,
      )}
    >
      <div
        className={cn("relative z-10 mx-auto w-full max-w-6xl", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl text-balance text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
