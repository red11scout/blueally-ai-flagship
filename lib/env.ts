/**
 * Lazy key resolution — read at request time, never at module load, so Vercel
 * builds don't fail when the var is absent. Falls back to AI_PROVIDER_KEY /
 * CLAUDE_KEY for local dev (Claude Code's sandbox can strip ANTHROPIC_API_KEY
 * from child processes by name).
 */
export function getAnthropicKey(): string | undefined {
  return (
    process.env.ANTHROPIC_API_KEY ||
    process.env.AI_PROVIDER_KEY ||
    process.env.CLAUDE_KEY ||
    undefined
  );
}
