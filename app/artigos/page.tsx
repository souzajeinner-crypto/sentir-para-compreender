import type { Metadata } from "next";
import Link from "next/link";
import { artigosIntro, articles } from "@/data/articles";

export const metadata: Metadata = { title: "Artigos — Sentir para Compreender", description: artigosIntro.description };

const accentBorder: Record<string, string> = { violet: "border-l-violet-500", cyan: "border-l-cyan-400", rose: "border-l-rose-400" };
const accentTag: Record<string, string> = { violet: "bg-violet-500/10 text-violet-300 border-violet-500/20", cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", rose: "bg-rose-500/10 text-rose-300 border-rose-500/20" };

export default function ArtigosPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)] transition-colors">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Artigos</li></ol></nav>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">{artigosIntro.subtitle}</p>
          <h1 className="mt-3 font-display text-heading-xl font-bold text-[var(--color-text)] sm:text-hero">{artigosIntro.title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">{artigosIntro.description}</p>
        </header>

        <div className="space-y-6">
          {articles.map((a) => (
            <article key={a.id} className={`rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] border-l-4 ${accentBorder[a.accent]} p-7`}>
              <div className="flex items-center gap-2 mb-2">
                {a.tags.map((t) => (<span key={t} className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${accentTag[a.accent]}`}>#{t}</span>))}
                <span className="text-[10px] text-[var(--color-text-dim)]">{a.publishedDate}</span>
              </div>
              <h2 className="font-display text-xl font-bold text-[var(--color-text)]">
                <Link href={`/artigos/${a.slug}`} className="hover:text-violet-300 transition-colors">{a.title}</Link>
              </h2>
              <p className="mt-1 text-xs text-[var(--color-text-dim)]">Por {a.authors.join(", ")}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{a.abstract}</p>
              <Link href={`/artigos/${a.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors">
                Ler artigo completo <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row sm:justify-between">
          <Link href="/relatos" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>Relatos</Link>
          <Link href="/sobre" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-glow">Sobre o projeto <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
