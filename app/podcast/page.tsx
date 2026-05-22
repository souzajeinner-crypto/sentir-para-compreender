"use client";

import { useState } from "react";
import Link from "next/link";
import { mascots, podcastIntro, podcastEpisodes } from "@/data/mascots";

export default function PodcastPage() {
  const [openTranscript, setOpenTranscript] = useState<string | null>(null);

  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Podcast</li></ol></nav>
        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">🎙️</div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">{podcastIntro.subtitle}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white">{podcastIntro.title}</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">{podcastIntro.description}</p>
        </header>

        <div className="space-y-5">
          {podcastEpisodes.map((ep) => {
            const mascot = mascots.find((m) => m.id === ep.mascotId)!;
            const isOpen = openTranscript === ep.id;
            return (
              <article key={ep.id} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full text-2xl" style={{ backgroundColor: mascot.color + "15" }} aria-hidden="true">{mascot.emoji}</span>
                    <div className="flex-1">
                      <h2 className="text-sm font-bold text-[var(--color-text)]">{ep.title}</h2>
                      <p className="text-[10px] text-[var(--color-text-dim)]">Com {mascot.name} · {ep.duration}</p>
                    </div>
                    {/* Play button placeholder */}
                    <button className="flex items-center justify-center w-10 h-10 rounded-full border border-violet-500/20 bg-violet-500/8 text-violet-400" aria-label={`Reproduzir ${ep.title}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed text-[var(--color-text-dim)] mb-3">{ep.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ep.topics.map((t) => (<span key={t} className="rounded-full bg-violet-500/8 border border-violet-500/12 px-2.5 py-0.5 text-[10px] text-violet-300">{t}</span>))}
                  </div>
                  <button onClick={() => setOpenTranscript(isOpen ? null : ep.id)} className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors" aria-expanded={isOpen}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                    {isOpen ? "Ocultar transcrição" : "Ver transcrição"}
                  </button>
                  {isOpen && (
                    <div className="mt-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/50 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)] mb-3">Transcrição</p>
                      <div className="space-y-2">
                        {ep.transcript.map((t, i) => (<p key={i} className="text-sm leading-[1.7] text-[var(--color-text-muted)]">{t}</p>))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 max-w-md mx-auto">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p className="text-xs text-amber-300/70">🎧 Os áudios são placeholders. O grupo deve gravar os episódios reais. Todas as transcrições estão disponíveis para acessibilidade.</p>
        </div>
      </div>
    </div>
  );
}
