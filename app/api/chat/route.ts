import { createAnthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { getAnthropicKey } from "@/lib/env";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat-system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const apiKey = getAnthropicKey();
  if (!apiKey) {
    return Response.json(
      { error: "The AI assistant is not configured yet." },
      { status: 503 },
    );
  }

  let messages: UIMessage[];
  try {
    ({ messages } = await req.json());
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // @ai-sdk/anthropic@3 drops /v1 by default → 404; set it explicitly.
  const anthropic = createAnthropic({
    apiKey,
    baseURL: "https://api.anthropic.com/v1",
  });

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: CHAT_SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    temperature: 0.4,
    maxOutputTokens: 800,
  });

  return result.toUIMessageStreamResponse();
}
