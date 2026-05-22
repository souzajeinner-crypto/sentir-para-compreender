"use client";

import { useState } from "react";
import Link from "next/link";

const quizThemes = [
  { id: "emocoes", icon: "😊", title: "Emoções", desc: "Teste seus conhecimentos sobre emoções, sentimentos e inteligência emocional.", questions: 10, difficulty: "Fácil", color: "#E35CC7" },
  { id: "autismo", icon: "🧩", title: "Autismo", desc: "Descubra mais sobre o autismo, características, mitos e inclusão.", questions: 15, difficulty: "Médio", color: "#8B5CFF" },
  { id: "tdah", icon: "🧠", title: "TDAH", desc: "Aprenda sobre o TDAH, foco, atenção e estratégias que fazem a diferença.", questions: 15, difficulty: "Médio", color: "#73B8FF" },
  { id: "ansiedade", icon: "❤️", title: "Ansiedade", desc: "Conhecimentos sobre ansiedade, gatilhos e formas de cuidado.", questions: 10, difficulty: "Fácil", color: "#22c55e" },
  { id: "inclusao", icon: "🤝", title: "Inclusão", desc: "Teste o que você sabe sobre inclusão, diversidade e respeito às diferenças.", questions: 12, difficulty: "Médio", color: "#F5B84E" },
  { id: "comunicacao", icon: "💬", title: "Comunicação e Empatia", desc: "Desafios sobre comunicação empática e relações saudáveis.", questions: 10, difficulty: "Fácil", color: "#14b8a6" },
  { id: "escola", icon: "📚", title: "Escola e Aprendizagem", desc: "Quiz sobre aprendizagem, adaptações e ambientes escolares inclusivos.", questions: 12, difficulty: "Médio", color: "#6366f1" },
  { id: "familia", icon: "👨‍👩‍👧", title: "Família e Convivência", desc: "Desafios sobre convivência, apoio familiar e construção de vínculos.", questions: 12, difficulty: "Fácil", color: "#ec4899" },
  { id: "diversidade", icon: "🌍", title: "Diversidade e Sociedade", desc: "Questões sobre diversidade, respeito e construção de uma sociedade mais justa.", questions: 12, difficulty: "Difícil", color: "#f59e0b" },
];

const ranking = [
  { pos: "1º", name: "Ana Clara", pts: "2.450 pts", medal: "🥇" },
  { pos: "2º", name: "Lucas M.", pts: "2.150 pts", medal: "🥈" },
  { pos: "3º", name: "Mariana S.", pts: "1.980 pts", medal: "🥉" },
  { pos: "4º", name: "João P.", pts: "1.650 pts", medal: "🏅" },
  { pos: "5º", name: "Você", pts: "1.320 pts", medal: "🏅" },
];

const howItWorks = [
  { icon: "🎯", title: "1. Escolha um tema", desc: "Selecione o quiz que te interessa." },
  { icon: "▶️", title: "2. Responda", desc: "Responda às perguntas com atenção e divirta-se!" },
  { icon: "📊", title: "3. Veja seu resultado", desc: "Receba seu resultado e explicações comentadas." },
  { icon: "🚀", title: "4. Aprenda e evolua", desc: "Acompanhe seu progresso e conquiste novos selos!" },
];

const whyQuiz = [
  "Aprendizado leve e interativo",
  "Conteúdos confiáveis e atualizados",
  "Desenvolve empatia e compreensão",
  "Ajuda a fixar o conhecimento",
  "Diversão com propósito",
];

const diffColor: Record<string, string> = {
  "Fácil": "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  "Médio": "text-amber-400 border-amber-500/20 bg-amber-500/5",
  "Difícil": "text-rose-400 border-rose-500/20 bg-rose-500/5"
};

export default function QuizPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.3), transparent 70%)" }} />
      </div>

      {/* ══ HERO ══ */}
      <section className="content-container-wide pt-6 pb-12 lg:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>Início</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[var(--text-secondary)]">Quiz</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
          {/* Texto */}
          <div className="flex-1 lg:max-w-[520px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-5">
              Quiz ⭐
            </span>
            <h1 className="font-display text-[2.4rem] sm:text-[3rem] font-bold leading-[0.95] tracking-tight mb-5">
              Teste seus conhecimentos,{" "}
              <span className="text-gradient-hero block">aprenda e se divirta!</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8 max-w-lg">
              Desafios interativos para aprender mais sobre emoções, neurodivergências, inclusão e diversos temas importantes de forma leve e acessível.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#quizzes" className="btn-primary">
                Explorar quizzes
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
              <button className="btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                Meus resultados
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-[480px] h-[480px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.45), transparent 65%)" }} aria-hidden="true" />
            <img
              src="/images/personagens-quiz.png.png"
              alt="Mascotes do quiz: cérebro com prancheta, mundo e estrela"
              className="relative w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ══ MAIN + SIDEBAR ══ */}
      <div className="content-container-wide pb-16 lg:pb-24" id="quizzes">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)]">Escolha um tema e comece o quiz</h2>
              <div className="section-heading-line mt-2" style={{ margin: "8px 0 0" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {quizThemes.map((q) => (
                <Link key={q.id} href={`/quiz`} className="glass-card p-5 group transition-all hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-3" style={{ backgroundColor: q.color + "12", border: `1px solid ${q.color}22` }} aria-hidden="true">{q.icon}</div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{q.title}</h3>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed mb-3">{q.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-[var(--border-glass)] bg-[var(--bg-card-soft)] px-2.5 py-0.5 text-[10px] text-[var(--text-muted)]">{q.questions} perguntas</span>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${diffColor[q.difficulty]}`}>{q.difficulty}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[var(--text-muted)] group-hover:text-violet-400 transition-colors"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-4 mb-10" style={{ borderColor: "rgba(245,184,78,0.2)", background: "linear-gradient(135deg, rgba(245,184,78,0.04), transparent)" }}>
              <span className="text-3xl" aria-hidden="true">🏆</span>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-sm font-bold text-[var(--text-primary)]">Complete quizzes e ganhe conquistas!</h3>
                <p className="text-xs text-[var(--text-muted)]">A cada quiz concluído, você ganha selos e acompanha sua evolução.</p>
              </div>
              <Link href="#" className="btn-secondary text-xs !py-2">
                Ver minhas conquistas <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <section>
              <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] text-center mb-8">Como funciona?</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {howItWorks.map((h, i) => (
                  <div key={i} className="glass-card p-5 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-600/10 border border-violet-500/15 text-2xl mb-3" aria-hidden="true">{h.icon}</div>
                    <h3 className="text-xs font-bold text-[var(--text-primary)] mb-1">{h.title}</h3>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ══ SIDEBAR ══ */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-5">
            <div className="glass-card p-5 overflow-hidden relative" style={{ borderColor: "rgba(139,92,255,0.2)" }}>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.5), transparent)" }} aria-hidden="true" />
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">Desafie-se diariamente!</h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Um novo quiz todo dia para você aprender algo novo.</p>
              <Link href="/quiz" className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-2 text-xs font-semibold text-violet-400 hover:bg-violet-600/15">
                Fazer quiz do dia <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-4">Ranking de participantes</h3>
              <div className="space-y-2.5">
                {ranking.map((r, i) => (
                  <div key={i} className={`flex items-center gap-3 ${i === 4 ? "rounded-xl border border-violet-500/15 bg-violet-600/5 p-2 -mx-2" : ""}`}>
                    <span className="text-xs font-bold text-[var(--text-muted)] w-5 text-right">{r.pos}</span>
                    <span className="text-sm" aria-hidden="true">{r.medal}</span>
                    <span className={`flex-1 text-sm ${i === 4 ? "font-bold text-violet-300" : "text-[var(--text-secondary)]"}`}>{r.name}</span>
                    <span className="text-xs text-[var(--text-muted)] font-medium">{r.pts}</span>
                  </div>
                ))}
              </div>
              <Link href="#" className="flex items-center justify-center gap-1.5 mt-4 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                Ver ranking completo <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-3">Por que fazer quizzes?</h3>
              <ul className="space-y-2" role="list">
                {whyQuiz.map((w, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-emerald-400"><polyline points="20,6 9,17 4,12"/></svg>
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-5" style={{ borderColor: "rgba(227,92,199,0.15)" }}>
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">Sugira um tema</h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Tem um tema que gostaria de ver por aqui? Conta pra gente!</p>
              <Link href="/sobre" className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/5 border border-rose-500/20 px-4 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-500/10">
                Enviar sugestão <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
