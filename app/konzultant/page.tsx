"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessage: Message = {
  role: "assistant",
  content: "Ahoj! Som váš AI konzultant. Povedzte mi niečo o vašom biznise — akú firmu vediete, koľko ľudí máte, a aký je váš najväčší problém, ktorý by AI mohol vyriešiť?",
  timestamp: new Date(),
};

export default function KonzultantPage() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: "Prepáčte, nastala chyba. Skúste to prosím znova.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-capila-dark">
      {/* Header */}
      <header className="border-b border-slate-800 px-4 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white">
            <ArrowLeft size={20} />
            <span>Späť</span>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="text-capila-teal" size={20} />
            <span className="font-semibold text-white">AI Konzultant</span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Chat Container */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl glass overflow-hidden"
        >
          {/* Messages */}
          <div className="h-[60vh] overflow-y-auto p-6 space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    message.role === "user"
                      ? "bg-capila-teal text-capila-dark"
                      : "bg-capila-purple text-white"
                  }`}
                >
                  {message.role === "user" ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    message.role === "user"
                      ? "bg-capila-teal text-capila-dark"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <span className="mt-2 block text-xs opacity-60">
                    {message.timestamp.toLocaleTimeString("sk-SK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-capila-purple text-white">
                  <Bot size={20} />
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-slate-800 px-5 py-3 text-slate-400">
                  <span className="animate-pulse">●</span>
                  <span className="animate-pulse delay-100">●</span>
                  <span className="animate-pulse delay-200">●</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-slate-800 p-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Napíšte správu..."
                className="flex-1 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-capila-teal focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex items-center gap-2 rounded-xl bg-capila-teal px-6 py-3 font-semibold text-capila-dark transition-all hover:bg-capila-teal/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Odoslať</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 rounded-xl bg-slate-900/50 border border-slate-800 p-4 text-center text-sm text-slate-400"
        >
          <p>
            Tento konzultant vám pomôže identifikovať AI príležitosti pre váš biznis. 
            Po konverzácii môžete objednať bezplatný workshop pre hlbší rozbor.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
