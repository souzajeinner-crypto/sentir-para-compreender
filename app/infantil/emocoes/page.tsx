"use client";

import { useState } from "react";
import Link from "next/link";
import { emotions } from "@/data/children-area";

export default function EmocoesPage() {
  const [active, setActive] = useState(emotions[0].id);
  const current = emotions.find((e) => e.id === active) ?? emotions[0];

  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/infantil" className="hover:text-[var(--color-text)]">Área Infantil</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Emoções</li></ol></nav>

        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">🌈</div>
          <h1 className="font-display text-3xl font-bold text-white">Emoções explicadas</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">Clique em uma emoção para entender melhor o que ela é</p>
        </header>

        {/* Emotion selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Escolha uma emoção">
          {emotions.map((e) => (
            <button key={e.id} onClick={() => setActive(e.id)} role="tab" aria-selected={active === e.id} className={`flex flex-col items-center gap-1 rounded-2xl border p-4 w-20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] ${active === e.id ? "border-white/20 bg-white/5 scale-110" : "border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] hover:border-white/10"}`}>
              <span className="text-2xl">{e.emoji}</span>
              <span className="text-[10px] font-medium text-[var(--color-text-dim)]">{e.name}</span>
            </button>
          ))}
        </div>

        {/* Emotion detail */}
        <div className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-8 transition-all" role="tabpanel" aria-label={current.name}>
          <div className="text-center mb-6">
            <span className="text-5xl" aria-hidden="true">{current.emoji}</span>
            <h2 className="mt-3 font-display text-2xl font-bold" style={{ color: current.color }}>{current.name}</h2>
            <p className="text-sm text-[var(--color-text-dim)]">{current.metaphor}</p>
          </div>

          <p className="text-sm leading-[1.8] text-[var(--color-text-muted)] text-center max-w-lg mx-auto mb-8">
            {current.description}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/50 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dim)] mb-3">O que a gente sente</h3>
              <ul className="space-y-2" role="list">
                {current.whatItFeels.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: current.color }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/50 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dim)] mb-3">O que pode ajudar</h3>
              <ul className="space-y-2" role="list">
                {current.whatHelps.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="2" className="mt-0.5 flex-shrink-0"><polyline points="20,6 9,17 4,12"/></svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl p-5 text-center" style={{ backgroundColor: current.color + "10", borderColor: current.color + "20", border: "1px solid" }}>
            <p className="text-sm italic leading-relaxed" style={{ color: current.color }}>{current.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
