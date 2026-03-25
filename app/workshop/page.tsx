"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Building, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";

const topics = [
  { id: "intro", label: "Úvod do AI pre biznis (45 min)", duration: "45 minút" },
  { id: "strategy", label: "AI Stratégia pre vašu firmu (60 min)", duration: "60 minút" },
  { id: "finance", label: "AI v Účtovníctve a Financiách", duration: "60 minút" },
  { id: "operations", label: "AI v Operáciách a Logistike", duration: "60 minút" },
  { id: "sales", label: "AI v Sales a Marketingu", duration: "60 minút" },
];

export default function WorkshopPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "intro",
    preferredDate: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/workshop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-capila-dark flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-capila-teal/20">
            <CheckCircle className="h-10 w-10 text-capila-teal" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Ďakujeme za záujem!
          </h1>
          <p className="text-slate-400 mb-8">
            Potvrdili sme váš záujem o workshop. Do 24 hodín vám pošleme email s dostupnými termínmi.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-capila-teal px-6 py-3 font-semibold text-capila-dark"
          >
            Späť na domov
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-capila-dark">
      {/* Header */}
      <header className="border-b border-slate-800 px-4 py-4">
        <div className="mx-auto max-w-2xl flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white">
            <ArrowLeft size={20} />
            <span>Späť</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-white mb-4">
            Objednajte Si Workshop
          </h1>
          <p className="text-slate-400 mb-8">
            Bezplatný workshop pre váš tím. Žiadne záväzky, len praktické know-how.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                <User size={16} className="inline mr-2" />
                Vaše meno
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-capila-teal focus:outline-none"
                placeholder="Meno Priezvisko"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-capila-teal focus:outline-none"
                placeholder="vas@email.sk"
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                <Building size={16} className="inline mr-2" />
                Názov firmy
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-capila-teal focus:outline-none"
                placeholder="Vaša Firma, s.r.o."
              />
            </div>

            {/* Topic */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                <Clock size={16} className="inline mr-2" />
                Téma workshopu
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:border-capila-teal focus:outline-none"
              >
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.label} — {topic.duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                <Calendar size={16} className="inline mr-2" />
                Preferovaný termín
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:border-capila-teal focus:outline-none"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Poznámky (voliteľné)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-capila-teal focus:outline-none"
                placeholder="Čo by ste chceli na workshope prebrať?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-capila-teal px-6 py-4 font-semibold text-capila-dark transition-all hover:bg-capila-teal/90 disabled:opacity-50"
            >
              {isSubmitting ? "Odosielam..." : "Objednať Workshop"}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
