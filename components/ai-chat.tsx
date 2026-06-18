"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "motion/react";
import { MessageSquare, X, ArrowUp, Sparkles } from "lucide-react";
import type { UIMessage } from "ai";
import { cn } from "@/lib/utils";

const SUGGESTED = [
  "What is the seven-step method?",
  "How do you score AI readiness?",
  "What happens in the two-day workshop?",
  "What is the AI Operating System?",
];

function messageText(m: UIMessage): string {
  return m.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function submit(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  }

  return (
    <>
      {/* launcher */}
      <button
        type="button"
        aria-label={open ? "Close assistant" : "Ask BlueAlly AI"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ba-navy text-white shadow-xl shadow-ba-navy/30 transition-transform hover:scale-105 dark:bg-ba-bright dark:text-ba-black sm:bottom-6 sm:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 0.61, 0.27, 1] }}
            className="fixed bottom-24 right-5 z-50 flex h-[min(560px,72vh)] w-[min(390px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-ba-navy/20 sm:right-6"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-border bg-ba-navy px-5 py-4 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Sparkles className="h-4 w-4 text-ba-bright" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">BlueAlly AI</p>
                <p className="text-xs text-ba-light-blue/80">Grounded in our method</p>
              </div>
              <button
                type="button"
                aria-label="Close assistant"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-ba-light-blue transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
              {messages.length === 0 && (
                <div className="flex flex-col gap-4 pt-2">
                  <p className="text-sm leading-relaxed text-muted">
                    Ask about BlueAlly&rsquo;s approach to enterprise AI — the
                    method, readiness scoring, the workshop, or the offerings.
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => submit(s)}
                        className="rounded-2xl border border-border bg-background/60 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-border-strong hover:text-accent-ink"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-ba-navy text-white dark:bg-ba-bright dark:text-ba-black"
                        : "border border-border bg-background/70 text-foreground",
                    )}
                  >
                    {messageText(m)}
                  </div>
                </div>
              ))}

              {status === "submitted" && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl border border-border bg-background/70 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <p className="text-center text-xs text-muted">
                  Something went wrong. Please try again, or email ai@blueally.com.
                </p>
              )}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="border-t border-border p-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 focus-within:border-border-strong">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about BlueAlly's AI method…"
                  className="flex-1 bg-transparent py-1.5 text-sm text-foreground outline-none placeholder:text-muted"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  disabled={!input.trim() || busy}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ba-navy text-white transition-opacity disabled:opacity-40 dark:bg-ba-bright dark:text-ba-black"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[0.7rem] text-muted">
                AI assistant — for specifics, book the workshop.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
