/**
 * Deterministic trapped-value model. No AI, no randomness — the same inputs
 * always produce the same range. Midpoints are illustrative annual AI-value
 * opportunity as a share of revenue, varied by industry and AI maturity.
 * This is a planning estimate; the workshop replaces it with a Step-6 Value Map.
 */

export type Industry = { key: string; label: string; rate: number };
export type Maturity = { key: string; label: string; factor: number; note: string };

export const industries: Industry[] = [
  { key: "manufacturing", label: "Manufacturing", rate: 0.011 },
  { key: "financial", label: "Financial Services", rate: 0.013 },
  { key: "healthcare", label: "Healthcare & Life Sciences", rate: 0.01 },
  { key: "insurance", label: "Insurance", rate: 0.012 },
  { key: "retail", label: "Retail & Consumer Goods", rate: 0.009 },
  { key: "energy", label: "Energy & Utilities", rate: 0.012 },
  { key: "technology", label: "Technology & Software", rate: 0.014 },
  { key: "telecom", label: "Telecommunications", rate: 0.011 },
  { key: "logistics", label: "Logistics & Supply Chain", rate: 0.01 },
  { key: "professional", label: "Professional Services", rate: 0.01 },
  { key: "construction", label: "Construction & Engineering", rate: 0.009 },
  { key: "public", label: "Public Sector", rate: 0.007 },
  { key: "education", label: "Higher Education", rate: 0.006 },
];

export const maturities: Maturity[] = [
  { key: "exploring", label: "Exploring", factor: 0.85, note: "Building the case." },
  { key: "piloting", label: "Piloting", factor: 1.0, note: "Pilots in flight." },
  { key: "scaling", label: "Scaling", factor: 1.18, note: "Ready to compound." },
];

/** Revenue slider runs on a log scale from $10M to $10B. */
export const REVENUE_MIN = 10_000_000;
export const REVENUE_MAX = 10_000_000_000;

/** slider position 0–100 → revenue (log scale) */
export function sliderToRevenue(t: number): number {
  const ratio = REVENUE_MAX / REVENUE_MIN; // 1000
  return REVENUE_MIN * Math.pow(ratio, t / 100);
}

/** revenue → slider position 0–100 */
export function revenueToSlider(revenue: number): number {
  const ratio = REVENUE_MAX / REVENUE_MIN;
  return (Math.log(revenue / REVENUE_MIN) / Math.log(ratio)) * 100;
}

export function computeTrappedValue(
  revenue: number,
  industryRate: number,
  maturityFactor: number,
): { low: number; mid: number; high: number } {
  const mid = revenue * industryRate * maturityFactor;
  return { low: mid * 0.7, mid, high: mid * 1.3 };
}

export function formatCurrency(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}
