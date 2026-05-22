"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { newExperiences } from "@/data/new-experiences";

type Stage = "warning" | "experience" | "educational";

export default function ExperiencePage() {
  const params = useParams();
  const exp = newExperiences.find((e) => e.slug === params.slug);
  const [stage, setStage] = useState<Stage>("warning");
  const [phaseIndex, setPhaseIndex] = useState(0);

  const handleNextPhase = useCallback(() => {
    if (!exp) return;
    if (phaseIndex + 1 < exp.phases.length) {
      setPhaseIndex(phaseIndex + 1);
    } else {
      setStage("educational");
    }
  }, [phaseIndex, exp]);

  if (!exp) {
    return (
      <div className="content-container py-section text-center">
        <p className="text-[var(--color-text-dim)]">Experiência não encontrada.</p>
        <Link href="/experiencias-imersivas" className="mt-4 inline-block text-violet-400 text-sm">← Voltar</Link>
      </div>
    );
  }

  const phase = exp.phases[phaseIndex];

  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">

        {/* ══ WARNING ══ */}
        {stage === "warning" && (
          <div className="text-center">
            <span className="text-5xl block mb-4" aria-hidden="true">{exp.emoji}</span>
            <h1 className="font-display text-3xl font-bold text-white">{exp.title}</h1>
            <p className="mt-2 text-sm text-[var(--color-text-dim)]">{exp.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)] max-w-lg mx-auto">{exp.description}</p>

            <div className="mt-8 max-w-md mx-auto rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-left">
              <h2 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Aviso de conteúdo
              </h2>
              <p className="text-xs leading-relaxed text-amber-300/70">{exp.contentWarning}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 items-center">
              <button onClick={() => setStage("experience")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-8 py-3.5 text-sm font-semibold text-white shadow-glow">
                Entendi, quero começar
              </button>
              <Link href="/experiencias-imersivas" className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                ← Voltar às experiências
              </Link>
            </div>
          </div>
        )}

        {/* ══ EXPERIENCE ══ */}
        {stage === "experience" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="font-display text-lg font-bold text-white">{exp.title}</h1>
                <p className="text-xs text-[var(--color-text-dim)]">
                  Fase {phaseIndex + 1} de {exp.phases.length} — {phase.title}
                </p>
              </div>
              <button onClick={() => { setStage("warning"); setPhaseIndex(0); }} className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs font-medium text-rose-300 hover:bg-rose-500/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Sair
              </button>
            </div>

            {/* Progress */}
            <div className="h-1.5 rounded-full bg-[var(--color-bg-panel-hover)] overflow-hidden mb-6">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${((phaseIndex + 1) / exp.phases.length) * 100}%`, backgroundColor: exp.color }} />
            </div>

            {/* Intensity badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)]">Intensidade:</span>
              {[1, 2, 3].map((n) => (
                <span key={n} className={`w-3 h-3 rounded-full ${n <= phase.intensity ? "" : "opacity-20"}`} style={{ backgroundColor: exp.color }} />
              ))}
              <span className="text-[10px] text-[var(--color-text-dim)]">
                {phase.intensity === 1 ? "Leve" : phase.intensity === 2 ? "Moderada" : "Intensa"}
              </span>
            </div>

            {/* Narrative */}
            <div className={`rounded-2xl border border-[var(--color-border-subtle)] p-8 transition-all duration-700 ${phase.intensity === 3 ? "bg-[#1a0e2e]" : phase.intensity === 2 ? "bg-[#110b22]" : "bg-[var(--color-bg-panel)]"}`}>
              <p className="text-base leading-[1.8] text-[var(--color-text-muted)] mb-6">{phase.narrative}</p>

              {/* Stimuli */}
              <div className="flex flex-wrap gap-2 mb-4">
                {phase.stimuli.map((s, i) => (
                  <span key={i} className={`rounded-full border px-3 py-1.5 text-xs transition-all ${phase.intensity === 3 ? "animate-pulse border-rose-500/30 bg-rose-500/10 text-rose-300" : phase.intensity === 2 ? "border-amber-500/20 bg-amber-500/5 text-amber-300" : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)]"}`} style={phase.intensity >= 2 ? { animationDelay: `${i * 0.15}s` } : {}}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Thoughts */}
              {phase.thoughts && (
                <div className="space-y-2 mt-4 border-t border-[var(--color-border-subtle)] pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-dim)]">Pensamentos internos:</p>
                  {phase.thoughts.map((t, i) => (
                    <p key={i} className={`text-sm italic ${phase.intensity === 3 ? "text-rose-300/60" : phase.intensity === 2 ? "text-amber-300/50" : "text-[var(--color-text-dim)]"}`}>
                      &ldquo;{t}&rdquo;
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Next */}
            <div className="mt-6 flex justify-end">
              <button onClick={handleNextPhase} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-glow">
                {phaseIndex + 1 < exp.phases.length ? "Próxima fase" : "Ver explicação"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </button>
            </div>
          </div>
        )}

        {/* ══ EDUCATIONAL ══ */}
        {stage === "educational" && (
          <div>
            <div className="text-center mb-8">
              <span className="text-4xl block mb-3" aria-hidden="true">{exp.emoji}</span>
              <h1 className="font-display text-2xl font-bold text-white">{exp.educational.title}</h1>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-8 mb-6">
              <div className="space-y-4">
                {exp.educational.content.map((p, i) => (
                  <p key={i} className="text-sm leading-[1.8] text-[var(--color-text-muted)]">{p}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-6 mb-8">
              <h2 className="text-sm font-bold text-emerald-300 mb-3">O que pode ajudar</h2>
              <ul className="space-y-2" role="list">
                {exp.educational.resources.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-dim)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-emerald-400"><polyline points="20,6 9,17 4,12"/></svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button onClick={() => { setStage("warning"); setPhaseIndex(0); }} className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1,4 1,10 7,10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
                Refazer experiência
              </button>
              <Link href="/experiencias-imersivas" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-glow">
                Outras experiências
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
