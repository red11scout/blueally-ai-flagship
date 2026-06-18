import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueally-ai-flagship.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BlueAlly AI — Conquer Complexity",
    template: "%s · BlueAlly AI",
  },
  description:
    "95% of enterprise AI initiatives fail. The gap is method, not ambition. BlueAlly's seven-step method moves pilots into production — one team, end to end, from the boardroom question to the measured result.",
  keywords: [
    "enterprise AI",
    "AI strategy",
    "AI value assessment",
    "AI workshop",
    "AI readiness",
    "BlueAlly",
    "agentic AI",
    "RAG",
    "AI governance",
  ],
  authors: [{ name: "BlueAlly Technology Solutions" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "BlueAlly AI — Conquer Complexity",
    description:
      "The method behind enterprise AI that ships. Seven steps from a business challenge to measurable value — one accountable team, end to end.",
    siteName: "BlueAlly AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueAlly AI — Conquer Complexity",
    description:
      "The method behind enterprise AI that ships. From the boardroom question to the measured result.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} h-full`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
