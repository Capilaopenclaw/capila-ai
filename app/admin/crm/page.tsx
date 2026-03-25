"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Filter, Mail, Phone, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  topic: string;
  status: "new" | "contacted" | "booked" | "converted" | "lost";
  preferredDate?: string;
  notes?: string;
  createdAt: string;
}

const statusLabels: Record<string, { label: string; color: string }> = {
  new: { label: "Nový", color: "bg-blue-500/20 text-blue-400" },
  contacted: { label: "Kontaktovaný", color: "bg-yellow-500/20 text-yellow-400" },
  booked: { label: "Objednaný", color: "bg-capila-teal/20 text-capila-teal" },
  converted: { label: "Konvertovaný", color: "bg-green-500/20 text-green-400" },
  lost: { label: "Stratený", color: "bg-slate-500/20 text-slate-400" },
};

export default function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/workshop");
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    // TODO: Implement status update
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status: status as any } : lead
    ));
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || lead.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-capila-dark">
      {/* Header */}
      <header className="border-b border-slate-800 px-4 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white">
              <ArrowLeft size={20} />
              <span>Späť</span>
            </Link>
            <h1 className="text-xl font-bold text-white">CRM Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">
              {leads.length} leadov celkom
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Hľadať..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:border-capila-teal focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl bg-slate-900 border border-slate-700 px-4 py-2 text-white focus:border-capila-teal focus:outline-none"
            >
              <option value="all">Všetky</option>
              <option value="new">Nové</option>
              <option value="contacted">Kontaktované</option>
              <option value="booked">Objednané</option>
              <option value="converted">Konvertované</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="rounded-2xl glass overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-slate-800">
              <tr className="text-left text-sm text-slate-400">
                <th className="px-6 py-4">Kontakt</th>
                <th className="px-6 py-4">Firma</th>
                <th className="px-6 py-4">Téma</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Dátum</th>
                <th className="px-6 py-4">Akcie</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{lead.name}</div>
                    <div className="text-sm text-slate-400">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{lead.company}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{lead.topic}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusLabels[lead.status]?.color}`}>
                      {statusLabels[lead.status]?.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {new Date(lead.createdAt).toLocaleDateString("sk-SK")}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateStatus(lead.id, "contacted")}
                        className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:text-white"
                        title="Označiť ako kontaktovaný"
                      >
                        <Mail size={16} />
                      </button>
                      <button
                        onClick={() => updateStatus(lead.id, "booked")}
                        className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:text-capila-teal"
                        title="Označiť ako objednaný"
                      >
                        <Clock size={16} />
                      </button>
                      <button
                        onClick={() => updateStatus(lead.id, "converted")}
                        className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:text-green-400"
                        title="Označiť ako konvertovaný"
                      >
                        <CheckCircle size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Žiadne leady neboli nájdené
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
