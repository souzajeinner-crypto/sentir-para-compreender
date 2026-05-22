import type { Metadata } from "next";
import Link from "next/link";
import { relatosIntro, testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Relatos e Depoimentos — Sentir para Compreender",
  description: relatosIntro.description,
};

const accentBorder: Record<string, string> = { violet: "border-l-violet-500", cyan: "border-l-cyan-400", rose: "border-l-rose-400", amber: "border-l-amber-400", emerald: "border-l-emerald-400" };
const accentTag: Record<string, string> = { violet: "bg-violet-500/10 text-violet-300 border-violet-500/20", cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", rose: "bg-rose-500/10 text-rose-300 border-rose-500/20", amber: "bg-amber-500/10 text-amber-300 border-amber-500/20", emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" };

export default function RelatosPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)] transition-colors">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Relatos</li></ol></nav>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">{relatosIntro.subtitle}</p>
          <h1 className="mt-3 font-display text-heading-xl font-bold text-[var(--color-text)] sm:text-hero">{relatosIntro.title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">{relatosIntro.description}</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div><p className="text-xs leading-relaxed text-amber-300/70">{relatosIntro.ethicalNotice}</p><p className="mt-2 text-xs leading-relaxed text-amber-300/50">{relatosIntro.contentWarning}</p></div>
          </div>
        </header>

        <div className="space-y-8">
          {testimonials.map((t) => (
            <article key={t.id} className={`rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] overflow-hidden`}>
              <div className={`border-l-4 ${accentBorder[t.accent]} p-7`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white`} style={{ backgroundColor: t.accent === "violet" ? "#8b5cf6" : t.accent === "cyan" ? "#22d3ee" : t.accent === "rose" ? "#fb7185" : t.accent === "amber" ? "#fbbf24" : "#34d399" }} aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]">{t.name}, {t.age}</p>
                    <p className="text-xs text-[var(--color-text-dim)]">{t.context}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {t.content.map((p, i) => (
                    <p key={i} className="text-sm leading-[1.8] text-[var(--color-text-muted)] italic">{p}</p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.themes.map((theme) => (
                    <span key={theme} className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${accentTag[t.accent]}`}>#{theme}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row sm:justify-between">
          <Link href="/perspectivas" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:border-violet-600/40 hover:text-[var(--color-text)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>Perspectivas</Link>
          <Link href="/artigos" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-glow">Próximo: Artigos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
