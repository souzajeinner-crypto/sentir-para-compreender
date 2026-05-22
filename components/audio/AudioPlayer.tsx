"use client";

import { useState } from "react";
import type { AudioTrack } from "@/data/audio-tracks";

const accentStyles = {
  violet: { bar: "bg-violet-500", icon: "text-violet-400", ring: "bg-violet-500/10 border-violet-500/20", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20" },
  cyan: { bar: "bg-cyan-400", icon: "text-cyan-400", ring: "bg-cyan-500/10 border-cyan-500/20", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
  rose: { bar: "bg-rose-400", icon: "text-rose-400", ring: "bg-rose-500/10 border-rose-500/20", tag: "bg-rose-500/10 text-rose-300 border-rose-500/20" },
  amber: { bar: "bg-amber-400", icon: "text-amber-400", ring: "bg-amber-500/10 border-amber-500/20", tag: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
} as const;

const categoryLabels: Record<string, string> = {
  conceito: "Conceito",
  reflexao: "Reflexão",
  depoimento: "Depoimento",
  ambiente: "Paisagem sonora",
};

export function AudioPlayer({ track }: { track: AudioTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscription, setShowTranscription] = useState(false);
  const [progress, setProgress] = useState(0);
  const style = accentStyles[track.accent];

  // Simulated play toggle (real audio requires actual audio element)
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <article className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] overflow-hidden transition-all hover:border-violet-600/20">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${style.tag}`}>
                {categoryLabels[track.category]}
              </span>
              <span className="text-[10px] text-[var(--color-text-dim)]">{track.duration}</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{track.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-dim)]">{track.description}</p>
          </div>
        </div>

        {/* Player controls */}
        <div className="mt-5 flex items-center gap-4">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className={`flex items-center justify-center w-12 h-12 rounded-full border ${style.ring} transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]`}
            aria-label={isPlaying ? `Pausar ${track.title}` : `Reproduzir ${track.title}`}
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={style.icon}>
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={style.icon}>
                <polygon points="8,5 19,12 8,19" />
              </svg>
            )}
          </button>

          {/* Progress bar */}
          <div className="flex-1">
            <div className="relative h-1.5 rounded-full bg-[var(--color-bg-panel-hover)] overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 rounded-full ${style.bar} transition-all duration-300`}
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Progresso de ${track.title}`}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-[var(--color-text-dim)]">
                {Math.floor((progress / 100) * track.durationSeconds / 60)}:{String(Math.floor((progress / 100) * track.durationSeconds % 60)).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-[var(--color-text-dim)]">{track.duration}</span>
            </div>
          </div>
        </div>

        {/* Transcription toggle */}
        <div className="mt-4 border-t border-[var(--color-border-subtle)] pt-4">
          <button
            onClick={() => setShowTranscription(!showTranscription)}
            className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] rounded"
            aria-expanded={showTranscription}
            aria-controls={`transcription-${track.id}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={showTranscription ? "text-violet-400" : ""}>
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            {showTranscription ? "Ocultar transcrição" : "Ver transcrição"}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${showTranscription ? "rotate-180" : ""}`}>
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </button>

          {showTranscription && (
            <div
              id={`transcription-${track.id}`}
              className="mt-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/50 p-5"
              role="region"
              aria-label={`Transcrição de ${track.title}`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)] mb-3">
                Transcrição
              </p>
              <div className="space-y-3">
                {track.transcription.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-[1.8] text-[var(--color-text-muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
