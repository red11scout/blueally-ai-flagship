"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
  y?: number;
};

/**
 * Scroll-triggered fade + blur-up using a self-contained IntersectionObserver.
 * Reliable across the stack: a 1.2s mount fallback and graceful degradation
 * guarantee content can never stay hidden. `filter` resets to `none` once shown
 * (no residual compositing layer).
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const fallback = setTimeout(() => setShown(true), 1200);

    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return () => clearTimeout(fallback);
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setShown(true);
      return () => clearTimeout(fallback);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
          clearTimeout(fallback);
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        filter: shown ? "none" : "blur(8px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.22,0.61,0.27,1) ${delay}s, filter 0.6s ease ${delay}s`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
