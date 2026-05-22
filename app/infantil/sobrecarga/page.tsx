"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  stimuli,
  floatingThoughts,
  questions,
  feedbackMessage,
  ethicalMessage,
  phases,
  warningItems,
} from "@/data/sensoryOverloadExperience";

type Stage = "intro" | "modal" | "experience" | "feedback";
type Intensity = "low" | "medium" | "high";

export default function SobrecargaPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [intensity, setIntensity] = useState<Intensity>("medium");
  const [currentPhase, setCurrentPhase] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [flashesOff, setFlashesOff] = useState(false);
  const [visibleThoughts, setVisibleThoughts] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const phaseTimer = useRef<NodeJS.Timeout | null>(null);

  // Phase progression
  useEffect(() => {
    if (stage !== "experience" || isPaused) return;
    const interval = intensity === "low" ? 8000 : intensity === "medium" ? 5000 : 3000;
    phaseTimer.current = setTimeout(() => {
      if (currentPhase < 5) setCurrentPhase((p) => p + 1);
    }, interval);
    return () => { if (phaseTimer.current) clearTimeout(phaseTimer.current); };
  }, [stage, currentPhase, isPaused, intensity]);

  // Floating thoughts
  useEffect(() => {
    if (stage !== "experience" || isPaused) return;
    const available = floatingThoughts
      .map((_, i) => i)
      .filter((i) => floatingThoughts[i].minPhase <= currentPhase && !visibleThoughts.includes(i));
    if (available.length === 0) return;
    const delay = intensity === "high" ? 1500 : intensity === "medium" ? 2500 : 4000;
    const timer = setTimeout(() => {
      const idx = available[Math.floor(Math.random() * available.length)];
      setVisibleThoughts((prev) => [...prev.slice(-5), idx]);
    }, delay);
    return () => clearTimeout(timer);
  }, [stage, currentPhase, isPaused, intensity, visibleThoughts]);

  const activeStimuli = stimuli.filter((s) => s.startPhase <= currentPhase);

  const handleStart = useCallback((mode: Intensity) => {
    setIntensity(mode);
    setCurrentPhase(1);
    setVisibleThoughts([]);
    setIsPaused(false);
    setSubmitted(false);
    setAnswers({});
    setStage("experience");
  }, []);

  const handleExit = useCallback(() => {
    setStage("intro");
    setCurrentPhase(1);
    setVisibleThoughts([]);
    setIsPaused(false);
  }, []);

  const handleSubmit = useCallback(() => setSubmitted(true), []);

  // Glitch intensity multiplier
  const glitchLevel = isPaused ? 0 : intensity === "high" ? currentPhase * 1.2 : intensity === "medium" ? currentPhase * 0.8 : currentPhase * 0.4;

  return (
    <div className="min-h-screen" style={{ background: "#080613" }}>

      {/* ══ INTRO ══ */}
      {stage === "intro" && (
        <div className="content-container py-section">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/infantil" className="hover:text-[var(--color-text)]">Área Infantil</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Sobrecarga Sensorial</li></ol></nav>
            <div className="text-center">
              <span className="text-5xl block mb-4" aria-hidden="true">⚡</span>
              <h1 className="font-display text-4xl font-bold text-white">Sobrecarga Sensorial</h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)] max-w-lg mx-auto">
                Vivencie como estímulos em excesso podem afetar o corpo, a atenção e as emoções. Uma experiência interativa e imersiva.
              </p>
            </div>

            <div className="mt-10 max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
              {/* What happens */}
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6">
                <h2 className="text-sm font-bold text-[var(--color-text)] mb-3">O que pode acontecer:</h2>
                <ul className="space-y-2" role="list">
                  {warningItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-text-dim)]">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Phases */}
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6">
                <h2 className="text-sm font-bold text-[var(--color-text)] mb-3">Etapas (1 a 5):</h2>
                <ul className="space-y-2" role="list">
                  {phases.map((p) => (
                    <li key={p.id} className="flex items-start gap-2 text-xs text-[var(--color-text-dim)]">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-violet-500/10 text-violet-300 text-[9px] font-bold flex-shrink-0">{p.id}</span>
                      <div><span className="font-medium text-[var(--color-text-muted)]">{p.label}</span> — {p.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ethical + CTA */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p className="text-xs leading-relaxed text-amber-300/70">Esta experiência é educativa e pode ser pausada ou encerrada a qualquer momento.</p>
              </div>
              <div className="flex justify-center">
                <button onClick={() => setStage("modal")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:from-violet-500 hover:to-violet-600">
                  Iniciar experiência
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ SAFETY MODAL ══ */}
      {stage === "modal" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-3xl border border-[var(--color-border-subtle)] bg-[#0d0a1c] p-8" role="dialog" aria-modal="true" aria-label="Antes de começar">
            <h2 className="font-display text-xl font-bold text-white mb-3">Antes de começar</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-6">
              Esta experiência contém estímulos visuais e simulação de sobrecarga sensorial. Você pode pausar, reduzir a intensidade ou sair a qualquer momento.
            </p>
            <div className="space-y-3">
              <button onClick={() => handleStart("low")} className="w-full rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/15 transition-all">
                🌤️ Começar no modo leve
              </button>
              <button onClick={() => handleStart("medium")} className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 py-3 text-sm font-semibold text-white hover:from-violet-500 hover:to-violet-600 transition-all">
                Começar experiência
              </button>
              <button onClick={() => setStage("intro")} className="w-full rounded-xl border border-[var(--color-border-subtle)] py-3 text-sm font-medium text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-all">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ EXPERIENCE ══ */}
      {stage === "experience" && (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* LEFT PANEL */}
          <aside className="lg:w-64 xl:w-72 flex-shrink-0 border-r border-[var(--color-border-subtle)] bg-[#0a0718] p-5 lg:p-6">
            <h2 className="font-display text-lg font-bold text-white mb-2">Sobrecarga Sensorial</h2>
            <p className="text-xs text-[var(--color-text-dim)] leading-relaxed mb-5">
              Vivencie como estímulos em excesso afetam atenção e emoções.
            </p>
            {/* Phase indicator */}
            <div className="mb-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)] mb-2">Fase {currentPhase} de 5</p>
              <div className="flex gap-1.5">
                {phases.map((p) => (
                  <div key={p.id} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${p.id <= currentPhase ? "bg-violet-500" : "bg-[var(--color-bg-panel-hover)]"}`} />
                ))}
              </div>
              <p className="mt-1.5 text-[10px] text-violet-300">{phases[currentPhase - 1]?.label}</p>
            </div>
            {/* Intensity control */}
            <div className="mb-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)] mb-2">Intensidade</p>
              <div className="flex gap-2">
                {(["low", "medium", "high"] as const).map((lvl) => (
                  <button key={lvl} onClick={() => setIntensity(lvl)} className={`flex-1 rounded-lg border py-1.5 text-[10px] font-medium transition-all ${intensity === lvl ? "border-violet-500/40 bg-violet-500/10 text-violet-300" : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)]"}`}>
                    {lvl === "low" ? "🌤️ Leve" : lvl === "medium" ? "⛅ Média" : "⛈️ Alta"}
                  </button>
                ))}
              </div>
            </div>
            {/* Controls */}
            <div className="space-y-2 mb-5">
              <button onClick={() => setIsPaused(!isPaused)} className={`w-full rounded-lg border py-2 text-xs font-medium transition-all ${isPaused ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}`}>
                {isPaused ? "▶ Retomar" : "⏸ Pausar"}
              </button>
              <button onClick={() => setFlashesOff(!flashesOff)} className={`w-full rounded-lg border py-2 text-xs font-medium transition-all ${flashesOff ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)]"}`}>
                {flashesOff ? "✓ Flashes desligados" : "💡 Desligar flashes"}
              </button>
              <button onClick={handleExit} className="w-full rounded-lg border border-rose-500/30 bg-rose-500/10 py-2 text-xs font-medium text-rose-300 hover:bg-rose-500/15">
                ✕ Sair da experiência
              </button>
            </div>
            {/* Ethical */}
            <p className="text-[10px] leading-relaxed text-[var(--color-text-dim)] italic">{ethicalMessage}</p>
          </aside>

          {/* CENTER — CLASSROOM */}
          <main className="flex-1 flex flex-col relative overflow-hidden">
            {/* Glitch overlay */}
            {!isPaused && !flashesOff && currentPhase >= 2 && (
              <div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-1000" style={{ opacity: Math.min(glitchLevel * 0.08, 0.4), background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,92,246,${glitchLevel * 0.02}) 2px, rgba(139,92,246,${glitchLevel * 0.02}) 4px)`, animation: currentPhase >= 3 ? `flicker ${3 / glitchLevel}s infinite` : "none" }} />
            )}

            {/* Paused overlay */}
            {isPaused && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
                <div className="text-center">
                  <p className="text-2xl mb-2">⏸</p>
                  <p className="text-sm font-bold text-white">Experiência pausada</p>
                  <p className="text-xs text-[var(--color-text-dim)] mt-1">Respire. Quando estiver pronto, clique em retomar.</p>
                </div>
              </div>
            )}

            {/* Classroom SVG Scene */}
            <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
              <div className="w-full max-w-3xl aspect-[16/10] rounded-2xl border border-[var(--color-border-subtle)] relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${currentPhase >= 4 ? "#1a0a2e" : "#100b20"} 0%, #0a0618 100%)` }}>
                <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Cenário de sala de aula">
                  {/* Floor */}
                  <rect x="0" y="350" width="800" height="150" fill="#0d0920" />
                  <line x1="0" y1="350" x2="800" y2="350" stroke="#1e1640" strokeWidth="1" />

                  {/* Back wall */}
                  <rect x="0" y="0" width="800" height="350" fill="#0f0b22" />

                  {/* Whiteboard */}
                  <rect x="250" y="50" width="300" height="180" rx="4" stroke="#2d2260" strokeWidth="1.5" fill="#12102a" />
                  <text x="400" y="145" textAnchor="middle" fill="#3d3470" fontSize="14" fontFamily="DM Sans">Quadro</text>

                  {/* Clock */}
                  <circle cx="680" cy="80" r="22" stroke="#3d3470" strokeWidth="1" fill="#0f0b22" />
                  <circle cx="680" cy="80" r="1.5" fill="#7c3aed" />
                  <line x1="680" y1="80" x2="680" y2="65" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round">
                    {!isPaused && <animateTransform attributeName="transform" type="rotate" from="0 680 80" to="360 680 80" dur="60s" repeatCount="indefinite" />}
                  </line>
                  <line x1="680" y1="80" x2="690" y2="80" stroke="#a78bfa" strokeWidth="1" strokeLinecap="round">
                    {!isPaused && <animateTransform attributeName="transform" type="rotate" from="0 680 80" to="360 680 80" dur="3600s" repeatCount="indefinite" />}
                  </line>

                  {/* Ceiling light */}
                  <rect x="360" y="0" width="80" height="8" rx="2" fill="#1e1640" />
                  <rect x="380" y="8" width="40" height="15" rx="2" fill={!flashesOff && !isPaused && currentPhase >= 2 ? "#fbbf24" : "#2d2260"} opacity={!flashesOff && !isPaused && currentPhase >= 2 ? (currentPhase >= 4 ? 0.7 : 0.3) : 0.15}>
                    {!flashesOff && !isPaused && currentPhase >= 2 && <animate attributeName="opacity" values={currentPhase >= 4 ? "0.2;0.8;0.3;0.7;0.2" : "0.15;0.35;0.15"} dur={currentPhase >= 4 ? "0.8s" : "2s"} repeatCount="indefinite" />}
                  </rect>
                  {/* Light glow */}
                  {!flashesOff && !isPaused && currentPhase >= 2 && (
                    <ellipse cx="400" cy="30" rx="120" ry="60" fill="#fbbf24" opacity={currentPhase >= 4 ? 0.04 : 0.02}>
                      <animate attributeName="opacity" values={currentPhase >= 4 ? "0.01;0.06;0.02;0.05;0.01" : "0.01;0.03;0.01"} dur={currentPhase >= 4 ? "0.8s" : "2s"} repeatCount="indefinite" />
                    </ellipse>
                  )}

                  {/* Door */}
                  <rect x="50" y="120" width="60" height="230" rx="3" stroke="#2d2260" strokeWidth="1.5" fill="#0c0918" />
                  <circle cx="100" cy="240" r="3" fill="#3d3470" />
                  {!isPaused && currentPhase >= 3 && (
                    <rect x="50" y="120" width="60" height="230" rx="3" fill="#7c3aed" opacity="0.03">
                      <animate attributeName="opacity" values="0;0.06;0" dur="4s" repeatCount="indefinite" />
                    </rect>
                  )}

                  {/* Teacher */}
                  <g transform="translate(400, 260)">
                    <circle cx="0" cy="-30" r="12" fill="#2d2260" stroke="#7c3aed" strokeWidth="0.8" />
                    <rect x="-15" y="-18" width="30" height="45" rx="6" fill="#1a1440" stroke="#3d3470" strokeWidth="0.8" />
                    {!isPaused && currentPhase >= 2 && (
                      <g>
                        <circle cx="20" cy="-25" r="8" fill="#7c3aed" opacity="0.06"><animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite"/></circle>
                        <circle cx="25" cy="-30" r="5" fill="#7c3aed" opacity="0.04"><animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite"/></circle>
                      </g>
                    )}
                  </g>

                  {/* Students row 1 */}
                  {[180, 320, 460, 600].map((x, i) => (
                    <g key={`s1-${i}`} transform={`translate(${x}, 380)`}>
                      <rect x="-20" y="0" width="40" height="25" rx="2" fill="#12102a" stroke="#1e1640" strokeWidth="0.8" />
                      <circle cx="0" cy="-12" r="8" fill="#1a1440" stroke="#2d2260" strokeWidth="0.8" />
                      <rect x="-10" y="-4" width="20" height="22" rx="4" fill="#12102a" stroke="#1e1640" strokeWidth="0.8" />
                      {!isPaused && currentPhase >= 3 && i % 2 === 0 && (
                        <g opacity="0.5">
                          <circle cx="14" cy="-15" r="4" fill="#a78bfa" opacity="0.06"><animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.3}s`}/></circle>
                        </g>
                      )}
                    </g>
                  ))}

                  {/* Students row 2 */}
                  {[220, 360, 500].map((x, i) => (
                    <g key={`s2-${i}`} transform={`translate(${x}, 430)`}>
                      <rect x="-20" y="0" width="40" height="25" rx="2" fill="#12102a" stroke="#1e1640" strokeWidth="0.8" />
                      <circle cx="0" cy="-12" r="8" fill="#1a1440" stroke="#2d2260" strokeWidth="0.8" />
                      <rect x="-10" y="-4" width="20" height="22" rx="4" fill="#12102a" stroke="#1e1640" strokeWidth="0.8" />
                    </g>
                  ))}

                  {/* Backpack */}
                  <rect x="640" y="400" width="25" height="35" rx="5" fill="#1e1640" stroke="#2d2260" strokeWidth="0.8" />

                  {/* Smell visual (phase 4+) */}
                  {!isPaused && currentPhase >= 4 && (
                    <g opacity="0.3">
                      <path d="M700 380 Q705 370 710 380 Q715 370 720 380" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.4"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite"/></path>
                      <path d="M705 375 Q710 365 715 375" stroke="#fbbf24" strokeWidth="0.8" fill="none" opacity="0.3"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></path>
                    </g>
                  )}
                </svg>

                {/* Floating thoughts overlay */}
                {!isPaused && visibleThoughts.length > 0 && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {visibleThoughts.slice(-6).map((idx, i) => {
                      const t = floatingThoughts[idx];
                      const positions = [
                        { top: "15%", left: "10%" }, { top: "25%", right: "12%" },
                        { top: "45%", left: "20%" }, { top: "35%", right: "8%" },
                        { top: "60%", left: "5%" }, { top: "55%", right: "15%" },
                      ];
                      const pos = positions[i % positions.length];
                      return (
                        <div key={`${idx}-${i}`} className="absolute rounded-xl bg-violet-500/10 border border-violet-500/15 backdrop-blur-sm px-3 py-2 animate-fade-in" style={{ ...pos, animation: `fadeInFloat 1.5s ease-out forwards, floatUp ${4 + i}s ease-in-out infinite ${i * 0.5}s` }}>
                          <p className="text-[11px] italic text-violet-300/70 whitespace-nowrap">&ldquo;{t.text}&rdquo;</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* QUESTIONS AREA */}
            <div className="border-t border-[var(--color-border-subtle)] bg-[#0a0718] p-5 lg:p-6">
              {!submitted ? (
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text)] mb-4">Responda enquanto vivencia</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {questions.map((q) => (
                      <div key={q.id}>
                        <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">{q.question}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {q.options.map((opt) => (
                            <button key={opt} onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))} className={`rounded-lg border px-3 py-1.5 text-[10px] font-medium transition-all ${answers[q.id] === opt ? "border-violet-500/40 bg-violet-500/10 text-violet-300" : "border-[var(--color-border-subtle)] text-[var(--color-text-dim)] hover:text-[var(--color-text-muted)]"}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={handleSubmit} disabled={Object.keys(answers).length < 2} className={`mt-4 rounded-full px-6 py-2.5 text-xs font-semibold transition-all ${Object.keys(answers).length >= 2 ? "bg-gradient-to-r from-violet-600 to-violet-700 text-white" : "bg-[var(--color-bg-panel-hover)] text-[var(--color-text-dim)] cursor-not-allowed"}`}>
                    Enviar resposta
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                  <p className="text-sm leading-relaxed text-emerald-300/80">{feedbackMessage}</p>
                  <button onClick={handleExit} className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-violet-400 hover:text-violet-300">
                    ← Voltar ao início
                  </button>
                </div>
              )}
            </div>
          </main>

          {/* RIGHT PANEL — Active stimuli */}
          <aside className="lg:w-56 xl:w-64 flex-shrink-0 border-l border-[var(--color-border-subtle)] bg-[#0a0718] p-5 lg:p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dim)] mb-4">Estímulos ativos</h2>
            <div className="space-y-3">
              {stimuli.map((s) => {
                const isActive = s.startPhase <= currentPhase;
                return (
                  <div key={s.id} className={`rounded-xl border p-3 transition-all duration-500 ${isActive ? "border-violet-500/15 bg-violet-500/[0.03]" : "border-[var(--color-border-subtle)] opacity-30"}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm" aria-hidden="true">{s.icon}</span>
                      <div className="flex-1">
                        <p className="text-[11px] font-medium text-[var(--color-text)]">{s.label}</p>
                        {isActive && <p className="text-[9px] text-violet-400 font-medium">Ativo</p>}
                      </div>
                    </div>
                    {isActive && (
                      <div className="mt-2 h-1 rounded-full bg-[var(--color-bg-panel-hover)] overflow-hidden">
                        <div className="h-full rounded-full bg-violet-500 transition-all duration-1000" style={{ width: `${Math.min(((currentPhase - s.startPhase + 1) / 3) * 100, 100)}%` }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      )}

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInFloat { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatUp { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes flicker { 0%,100% { opacity: 1; } 50% { opacity: 0.95; } 75% { opacity: 0.98; } }
        .animate-fade-in { animation: fadeInFloat 1s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  );
}
