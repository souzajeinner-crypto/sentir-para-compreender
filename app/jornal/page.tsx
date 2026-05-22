"use client";

import { useState } from "react";
import Link from "next/link";
import { mascots, journalIntro, journalEntries } from "@/data/mascots";

const catLabels: Record<string, string> = { historia: "História", noticia: "Notícia", dica: "Dica", reflexao: "Reflexão" };

export default function JornalPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? journalEntries.filter((e) => e.mascotId === filter) : journalEntries;

  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Jornal do Sentir</li></ol></nav>
        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">📰</div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">{journalIntro.subtitle}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white">{journalIntro.title}</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">{journalIntro.description}</p>
        </header>

        {/* Mascot filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filtrar por mascote">
          <button onClick={() => setFilter(null)} className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${filter === null ? "border-violet-500/40 bg-violet-500/10 text-violet-300" : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)]"}`}>Todos</button>
          {mascots.map((m) => (
            <button key={m.id} onClick={() => setFilter(filter === m.id ? null : m.id)} className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${filter === m.id ? "border-violet-500/40 bg-violet-500/10 text-violet-300" : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)]"}`}>
              {m.emoji} {m.name}
            </button>
          ))}
        </div>

        {/* Entries */}
        <div className="space-y-6">
          {filtered.map((entry) => {
            const mascot = mascots.find((m) => m.id === entry.mascotId)!;
            return (
              <article key={entry.id} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">{mascot.emoji}</span>
                    <div>
                      <p className="text-sm font-bold" style={{ color: mascot.color }}>{mascot.name}</p>
                      <p className="text-[10px] text-[var(--color-text-dim)]">{catLabels[entry.category]}</p>
                    </div>
                  </div>
                  <h2 className="font-display text-lg font-bold text-[var(--color-text)] mb-3">{entry.title}</h2>
                  <div className="space-y-3">
                    {entry.content.map((p, i) => (<p key={i} className="text-sm leading-[1.8] text-[var(--color-text-muted)]">{p}</p>))}
                  </div>
                  {entry.moral && (
                    <div className="mt-5 rounded-xl p-4" style={{ backgroundColor: mascot.color + "08", border: `1px solid ${mascot.color}15` }}>
                      <p className="text-xs font-semibold mb-1" style={{ color: mascot.color }}>Moral da história</p>
                      <p className="text-sm italic text-[var(--color-text-dim)]">{entry.moral}</p>
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((t) => (<span key={t} className="rounded-full bg-violet-500/8 border border-violet-500/12 px-2.5 py-0.5 text-[10px] text-violet-300">#{t}</span>))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
