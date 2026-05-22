import Link from "next/link";
import { autismIntro, autismTopics } from "@/data/children-area";

export default function AutismoPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/infantil" className="hover:text-[var(--color-text)]">Área Infantil</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Autismo</li></ol></nav>
        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">🧩</div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">{autismIntro.subtitle}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white">{autismIntro.title}</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">{autismIntro.description}</p>
        </header>
        <div className="space-y-5">
          {autismTopics.map((t) => (
            <article key={t.id} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" aria-hidden="true">{t.emoji}</span>
                <h2 className="font-display text-lg font-bold" style={{ color: t.color }}>{t.title}</h2>
              </div>
              <div className="space-y-3">
                {t.content.map((p, i) => (<p key={i} className="text-sm leading-[1.8] text-[var(--color-text-muted)]">{p}</p>))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 max-w-2xl mx-auto">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p className="text-xs leading-relaxed text-amber-300/70">{autismIntro.notice}</p>
        </div>
      </div>
    </div>
  );
}
