"use client";

import { useState } from "react";
import Link from "next/link";
import { games, emotions } from "@/data/children-area";

export default function JogosPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [feeling, setFeeling] = useState<string | null>(null);

  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/infantil" className="hover:text-[var(--color-text)]">Área Infantil</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Jogos</li></ol></nav>

        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">🎮</div>
          <h1 className="font-display text-3xl font-bold text-white">Jogos Emocionais</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">Aprender sobre emoções brincando!</p>
        </header>

        {!activeGame ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {games.map((g) => (
              <button key={g.id} onClick={() => setActiveGame(g.id)} className="group rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6 text-left transition-all hover:border-violet-500/20 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]">
                <span className="text-3xl mb-2 block" aria-hidden="true">{g.emoji}</span>
                <h2 className="font-display text-lg font-bold text-[var(--color-text)]">{g.title}</h2>
                <p className="mt-1 text-xs text-[var(--color-text-dim)]">{g.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-violet-400">Jogar <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg></span>
              </button>
            ))}
          </div>
        ) : activeGame === "sentindo" ? (
          /* Como estou hoje? */
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-8 text-center">
            <h2 className="font-display text-xl font-bold text-white mb-2">Como estou me sentindo hoje?</h2>
            <p className="text-sm text-[var(--color-text-dim)] mb-6">Escolha a emoção que melhor representa você agora</p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {emotions.map((e) => (
                <button key={e.id} onClick={() => setFeeling(e.id)} className={`flex flex-col items-center gap-1 rounded-2xl border p-4 w-20 transition-all ${feeling === e.id ? "border-white/20 bg-white/5 scale-110" : "border-[var(--color-border-subtle)] hover:border-white/10"}`}>
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-[10px] text-[var(--color-text-dim)]">{e.name}</span>
                </button>
              ))}
            </div>
            {feeling && (
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/50 p-5">
                <p className="text-sm text-[var(--color-text-muted)]">{emotions.find(e => e.id === feeling)?.message}</p>
              </div>
            )}
            <button onClick={() => { setActiveGame(null); setFeeling(null); }} className="mt-6 text-xs text-violet-400 hover:text-violet-300">← Voltar aos jogos</button>
          </div>
        ) : (
          /* Other games - placeholder */
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-8 text-center">
            <span className="text-4xl mb-3 block">{games.find(g => g.id === activeGame)?.emoji}</span>
            <h2 className="font-display text-xl font-bold text-white mb-2">{games.find(g => g.id === activeGame)?.title}</h2>
            <p className="text-sm text-[var(--color-text-dim)] mb-4">{games.find(g => g.id === activeGame)?.description}</p>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 max-w-sm mx-auto">
              <p className="text-xs text-amber-300/70">🚧 Este jogo está sendo desenvolvido! Em breve estará disponível.</p>
            </div>
            <button onClick={() => setActiveGame(null)} className="mt-6 text-xs text-violet-400 hover:text-violet-300">← Voltar aos jogos</button>
          </div>
        )}
      </div>
    </div>
  );
}
