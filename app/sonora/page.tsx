"use client";

import { useState } from "react";
import Link from "next/link";
import { audioTracks, sonoraIntro, categories } from "@/data/audio-tracks";
import { AudioPlayer } from "@/components/audio/AudioPlayer";

export default function SonoraPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [readingMode, setReadingMode] = useState(false);

  const filteredTracks = activeCategory
    ? audioTracks.filter((t) => t.category === activeCategory)
    : audioTracks;

  return (
    <div className="content-container py-section">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-[var(--color-text-muted)]">Área Sonora</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            {sonoraIntro.subtitle}
          </p>
          <h1 className="mt-3 font-display text-heading-xl font-bold text-[var(--color-text)] sm:text-hero">
            {sonoraIntro.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
            {sonoraIntro.description}
          </p>
        </header>

        {/* Controls: category filter + reading mode */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] ${
                activeCategory === null
                  ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                  : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)] hover:border-violet-500/20 hover:text-[var(--color-text-muted)]"
              }`}
              aria-pressed={activeCategory === null}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] ${
                  activeCategory === cat.id
                    ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                    : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)] hover:border-violet-500/20 hover:text-[var(--color-text-muted)]"
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Reading mode toggle */}
          <button
            onClick={() => setReadingMode(!readingMode)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] ${
              readingMode
                ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)] hover:border-amber-500/20 hover:text-amber-300"
            }`}
            aria-pressed={readingMode}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
            {readingMode ? "Modo leitura ativo" : "Modo leitura"}
          </button>
        </div>

        {/* No-audio notice */}
        {readingMode && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
            <p className="text-sm leading-relaxed text-amber-300/80">
              {sonoraIntro.noAudioNote}
            </p>
          </div>
        )}

        {/* Track listing */}
        <div className="space-y-6">
          {filteredTracks.map((track) => (
            <div key={track.id}>
              {readingMode ? (
                /* Reading mode: show transcription directly */
                <article className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                      track.accent === "violet" ? "bg-violet-500/10 text-violet-300 border-violet-500/20" :
                      track.accent === "cyan" ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" :
                      track.accent === "rose" ? "bg-rose-500/10 text-rose-300 border-rose-500/20" :
                      "bg-amber-500/10 text-amber-300 border-amber-500/20"
                    }`}>
                      {track.category === "conceito" ? "Conceito" :
                       track.category === "reflexao" ? "Reflexão" :
                       track.category === "depoimento" ? "Depoimento" : "Paisagem sonora"}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-dim)]">{track.duration}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{track.title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-dim)]">{track.description}</p>
                  <div className="mt-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/50 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)] mb-3">Transcrição</p>
                    <div className="space-y-3">
                      {track.transcription.map((p, i) => (
                        <p key={i} className="text-sm leading-[1.8] text-[var(--color-text-muted)]">{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ) : (
                <AudioPlayer track={track} />
              )}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredTracks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-[var(--color-text-dim)]">Nenhuma trilha encontrada nesta categoria.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-3 text-sm text-violet-400 hover:text-violet-300"
            >
              Ver todas as trilhas
            </button>
          </div>
        )}

        {/* Bottom nav */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row sm:justify-between">
          <Link
            href="/experiencias"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:border-violet-600/40 hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>
            Experiências Imersivas
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:from-violet-500 hover:to-violet-600 hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
          >
            Próximo: Quiz Reflexivo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
