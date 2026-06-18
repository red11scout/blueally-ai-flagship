import Image from "next/image";
import { cn } from "@/lib/utils";

const FULL = { src: "/logos/blueally-fullcolor.png", w: 197, h: 62 };
const WHITE = { src: "/logos/blueally-white.png", w: 225, h: 70 };

/**
 * BlueAlly logo. Per brand rules: full-colour on light, white on dark — never
 * recolour or crop.
 *  - "auto" (default): both render; CSS shows the right one by theme (no JS flash)
 *  - "white" / "fullcolor": force a single variant (e.g. on a navy band)
 */
export function Logo({
  className,
  width = 150,
  variant = "auto",
}: {
  className?: string;
  width?: number;
  variant?: "auto" | "white" | "fullcolor";
}) {
  if (variant !== "auto") {
    const v = variant === "white" ? WHITE : FULL;
    return (
      <span
        className={cn("inline-block leading-none", className)}
        style={{ width }}
        aria-label="BlueAlly"
      >
        <Image
          src={v.src}
          alt="BlueAlly"
          width={v.w}
          height={v.h}
          priority
          className="block h-auto w-full"
        />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-block leading-none", className)}
      style={{ width }}
      aria-label="BlueAlly"
    >
      <Image
        src={FULL.src}
        alt="BlueAlly"
        width={FULL.w}
        height={FULL.h}
        priority
        className="block h-auto w-full dark:hidden"
      />
      <Image
        src={WHITE.src}
        alt="BlueAlly"
        width={WHITE.w}
        height={WHITE.h}
        priority
        className="hidden h-auto w-full dark:block"
      />
    </span>
  );
}
