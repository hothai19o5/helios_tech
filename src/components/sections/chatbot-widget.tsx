"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Maximize2, Minimize2, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export function ChatbotWidget() {
  const t = useTranslations("Chatbot");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: t("welcome"),
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMinimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isMinimized]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    const currentInput = input;
    setInput("");

    setTimeout(() => {
      let reply = t("defaultReply");
      const q = currentInput.toLowerCase();
      if (q.includes("giá") || q.includes("pricing") || q.includes("bảng giá") || q.includes("cost") || q.includes("price")) {
        reply = t("pricingReply");
      } else if (q.includes("ai") || q.includes("data") || q.includes("chatbot") || q.includes("llm")) {
        reply = t("aiReply");
      } else if (q.includes("web") || q.includes("website") || q.includes("saas") || q.includes("landing")) {
        reply = t("webReply");
      } else if (q.includes("mobile") || q.includes("app") || q.includes("ios") || q.includes("android")) {
        reply = t("mobileReply");
      }
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, 900);
  };

  // Floating button khi chưa mở
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 size-14 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-105 transition-all z-50 flex items-center justify-center p-0"
        aria-label="Open AI Assistant"
      >
        <Bot className="size-7" />
      </Button>
    );
  }

  return (
    <div
      className={`fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/50 transition-all duration-300 overflow-hidden ${isMinimized
        ? "w-72 h-14"
        : "w-[calc(100vw-2rem)] sm:w-[380px] h-[480px]"
        }`}
    >
      {/* Header — luôn hiển thị, h-14 cố định */}
      <div
        className="flex h-14 shrink-0 items-center justify-between px-4 border-b border-border/50 cursor-pointer select-none"
        onClick={() => setIsMinimized((v) => !v)}
      >
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-accent/20 rounded-md">
            <Bot className="size-4 text-accent" />
          </div>
          <span className="text-sm font-semibold">{t("header")}</span>
          {isMinimized && (
            <span className="ml-1 text-xs text-muted-foreground">{t("minimized")}</span>
          )}
        </div>
        <div className="flex items-center gap-0.5" onClick={(e) => e.stopPropagation()}>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMinimized((v) => !v)}
            aria-label=""
          >
            {isMinimized ? <Maximize2 className="size-4" /> : <Minimize2 className="size-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => { setIsOpen(false); setIsMinimized(false); }}
            aria-label="Close"
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>

      {/* Body — chỉ render khi không minimize */}
      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <div className="text-center text-xs text-muted-foreground">{t("today")}</div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                    ? "bg-accent text-accent-foreground rounded-tr-sm"
                    : "bg-secondary text-secondary-foreground rounded-tl-sm border border-border/30"
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 p-3 border-t border-border/50 bg-card/40"
          >
            <Input
              type="text"
              placeholder={t("inputPlaceholder")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 h-10 bg-background border-border/50 focus-visible:ring-accent"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim()}
              className="size-10 shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
              aria-label="Send"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
