"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, BookOpen, Users, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MessageSquare,
    title: "AI Konzultant",
    description: "Pohovorte si s našim AI expertom. Získajte personalizované use cases a ROI odhad pre váš biznis.",
    href: "/konzultant",
  },
  {
    icon: Users,
    title: "Workshopy",
    description: "Bezplatný 45-minútový intro workshop alebo hodinový deep-dive s naším tímom.",
    href: "/workshop",
  },
  {
    icon: BookOpen,
    title: "Bezplatná Kniha",
    description: "50 overených AI use cases pre slovenské firmy. Stiahnite si náš kompletný sprievodca.",
    href: "/kniha",
  },
];

const caseStudies = [
  {
    industry: "Finančné Služby",
    title: "Automatizácia reportingu pre investičný fond",
    result: "Úspora 40 hodín mesačne",
    description: "Implementovali sme AI pipeline pre konsolidáciu dát z 18 entít. Reporting sa skrátil z 5 dní na 6 hodín.",
  },
  {
    industry: "Logistika",
    title: "Predikčná údržba vozového parku",
    result: "Zníženie nákladov o 25%",
    description: "AI model predikuje poruchy vozidiel predtým, než nastanú. Preventívna údržba nahradila reaktívnu.",
  },
  {
    industry: "Real Estate",
    title: "Automatizácia správy nehnuteľností",
    result: "3x rýchlejšie spracovanie faktúr",
    description: "OCR + AI extrakcia dát z faktúr. Integrácia s účtovným systémom bez manuálneho zadávania.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-capila-dark">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-capila-teal/10 via-transparent to-capila-purple/10 animate-gradient-x" />
        
        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-capila-teal/30 bg-capila-teal/10 px-4 py-1.5 text-sm text-capila-teal mb-8">
              <Sparkles size={16} />
              <span>Pre slovenské firmy a korporácie</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI Pre{" "}
              <span className="gradient-text">Slovenské Firmy</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Objavte, ako umelá inteligencia môže zvýšiť efektivitu vášho biznisu, 
              znížiť náklady a vytvoriť konkurenčnú výhodu. Bez rizika, s merateľným ROI.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/konzultant"
                className="group inline-flex items-center gap-2 rounded-full bg-capila-teal px-8 py-4 text-lg font-semibold text-capila-dark transition-all hover:bg-capila-teal/90 hover:scale-105 glow"
              >
                Vyskúšajte AI Konzultanta
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/workshop"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800"
              >
                Objednajte Bezplatný Workshop
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ako Začnite S AI
            </h2>
            <p className="mt-4 text-slate-400">
              Tri cesty, ako objaviť potenciál AI pre váš biznis
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className="group block h-full rounded-2xl glass p-8 transition-all hover:border-capila-teal/30 hover:bg-slate-800/50"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-capila-teal/10 p-3 text-capila-teal">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-capila-teal transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-capila-teal">
                    <span className="text-sm font-medium">Začať teraz</span>
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Výsledky Našich Klientov
            </h2>
            <p className="mt-4 text-slate-400">
              Reálne projekty pre slovenské firmy (anonymizované)
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl glass p-8"
              >
                <div className="mb-4 text-sm font-medium text-capila-teal">
                  {study.industry}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {study.title}
                </h3>
                <div className="mb-4 inline-flex rounded-lg bg-capila-purple/20 px-3 py-1 text-sm font-semibold text-capila-purple">
                  {study.result}
                </div>
                <p className="text-sm text-slate-400">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl glass p-12 glow"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Pripravení Objaviť AI Pre Váš Biznis?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Začnite bezplatným workshopom. Žiadne záväzky, len praktické know-how.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/workshop"
                className="inline-flex items-center gap-2 rounded-full bg-capila-teal px-8 py-4 text-lg font-semibold text-capila-dark transition-all hover:scale-105"
              >
                Objednať Bezplatný Workshop
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-capila-teal" />
              <span className="text-xl font-bold text-white">Capila.ai</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2026 Capila, s.r.o. Všetky práva vyhradené.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/konzultant" className="text-sm text-slate-400 hover:text-white">
                AI Konzultant
              </Link>
              <Link href="/workshop" className="text-sm text-slate-400 hover:text-white">
                Workshopy
              </Link>
              <Link href="/kniha" className="text-sm text-slate-400 hover:text-white">
                Kniha
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
