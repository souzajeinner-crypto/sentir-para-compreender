import Link from "next/link";
import { newExperiencesIntro, newExperiences } from "@/data/new-experiences";

export default function ExperienciasImersivasPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Experiências Imersivas</li></ol></nav>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">{newExperiencesIntro.subtitle}</p>
          <h1 className="mt-3 font-display text-heading-xl font-bold text-[var(--color-text)] sm:text-hero">{newExperiencesIntro.title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">{newExperiencesIntro.description}</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-xs leading-relaxed text-amber-300/70">{newExperiencesIntro.ethicalNotice}</p>
          </div>
        </header>
        <div className="grid gap-5 sm:grid-cols-2">
          {newExperiences.map((exp) => (
            <Link key={exp.id} href={`/experiencias-imersivas/${exp.slug}`} className="group rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6 transition-all hover:border-violet-500/20 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]">
              <span className="text-3xl block mb-3" aria-hidden="true">{exp.emoji}</span>
              <h2 className="font-display text-lg font-bold" style={{ color: exp.color }}>{exp.title}</h2>
              <p className="text-xs text-[var(--color-text-dim)] mt-1">{exp.subtitle}</p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-dim)]">{exp.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-violet-400 group-hover:text-violet-300">
                Iniciar experiência <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
