"use client";

import { useChat } from "@ai-sdk/react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

/**
 * Floating Phlantic AI assistant. Lives in the z-chatbot (70) layer; the
 * Calendly popup at z-popup (100) renders above it intentionally.
 *
 * Shape:
 *   collapsed → 56px circular FAB at bottom-right
 *   expanded  → 380×560 panel anchored to FAB position, dark theme + brand
 *               accents (red for user bubble, teal for primary action)
 */
export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat();
  const isStreaming = status === "submitted" || status === "streaming";

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Autoscroll to newest message.
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [messages, isStreaming]);

  // Focus input on open.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isStreaming) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <>
      {/* Panel */}
      <div
        role="dialog"
        aria-label="Phlantic asistanı"
        aria-hidden={!open}
        className={`fixed bottom-20 right-4 z-chatbot flex w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0f0f10] text-[#ededed] shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-300 sm:bottom-24 sm:right-6 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
        style={{ height: "min(560px, calc(100vh - 9rem))" }}
      >
        {/* Header */}
        <header className="relative flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-[#141416] to-[#0f0f10] px-4 py-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary-container/15">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(14,155,148,0.18)]" />
          </span>
          <div className="flex-1">
            <p className="font-display text-sm font-bold tracking-tight">
              Phlantic Asistan
            </p>
            <p className="text-[11px] text-white/50">
              7/24 · Türkçe / İngilizce
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Kapat"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/5 hover:text-white"
          >
            <X size={18} />
          </button>
        </header>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}
        >
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="flex flex-col gap-4">
              {messages.map((m) => (
                <MessageBubble key={m.id} role={m.role} parts={m.parts} />
              ))}
              {isStreaming &&
                messages[messages.length - 1]?.role === "user" && (
                  <li className="self-start">
                    <TypingDots />
                  </li>
                )}
            </ul>
          )}

          {error && (
            <div className="mt-4 rounded-lg border border-primary-container/40 bg-primary-container/10 p-3 text-sm text-primary-container">
              {error.message || "Bir hata oluştu, lütfen tekrar deneyin."}
            </div>
          )}
        </div>

        {/* Composer */}
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 border-t border-white/10 bg-[#0a0a0b] px-3 py-3"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajını yaz…"
            disabled={isStreaming}
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isStreaming}
            aria-label="Gönder"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-secondary text-white transition hover:bg-secondary/85 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp size={18} />
          </button>
        </form>
      </div>

      {/* FAB */}
      <button
        type="button"
        aria-label={open ? "Asistanı kapat" : "Asistanı aç"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-chatbot flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-white shadow-[0_12px_30px_rgba(224,20,40,0.45)] transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_18px_40px_rgba(224,20,40,0.55)] active:translate-y-0 sm:bottom-6 sm:right-6"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-secondary/30 blur-xl" />
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}

function EmptyState() {
  const suggestions = [
    "Süreçlerinizi nasıl optimize ederiz?",
    "n8n ile ne tür entegrasyonlar yapıyorsunuz?",
    "Bir AI asistan oluşturmak istiyorum.",
  ];
  return (
    <div className="flex h-full flex-col items-start justify-end gap-4">
      <div className="rounded-lg bg-white/5 px-3 py-2.5 text-sm text-white/80">
        Phlantic'e hoş geldiniz. Hangi süreci kolaylaştırmak istersiniz?
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <SuggestionChip key={s} text={s} />
        ))}
      </div>
    </div>
  );
}

function SuggestionChip({ text }: { text: string }) {
  // Static visual chip — clicking is non-functional by design (the AI
  // assistant is meant to be conversational, not menu-driven). Future
  // iterations can wire `sendMessage({ text })` here if needed.
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
      {text}
    </span>
  );
}

type Role = "user" | "assistant" | "system";

function MessageBubble({
  role,
  parts,
}: {
  role: Role;
  parts: ReadonlyArray<{ type: string; text?: string }>;
}) {
  const text = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");
  if (!text) return null;
  const isUser = role === "user";
  return (
    <li
      className={`flex max-w-[85%] flex-col gap-1 ${
        isUser ? "self-end items-end" : "self-start items-start"
      }`}
    >
      <span className="px-1 text-[11px] font-medium text-white/40">
        {isUser ? "Sen" : "Phlantic"}
      </span>
      <div
        className={`whitespace-pre-wrap rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-primary-container text-white"
            : "bg-white/5 text-white/90"
        }`}
      >
        {text}
      </div>
    </li>
  );
}

function TypingDots() {
  return (
    <div className="flex max-w-[85%] flex-col gap-1">
      <span className="px-1 text-[11px] font-medium text-white/40">Phlantic</span>
      <div className="flex items-center gap-1 rounded-xl bg-white/5 px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-secondary"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
