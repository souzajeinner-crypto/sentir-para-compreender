import Link from "next/link";
import { movies } from "@/data/children-area";

export default function FilmesPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/infantil" className="hover:text-[var(--color-text)]">Área Infantil</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Filmes</li></ol></nav>

        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">🎬</div>
          <h1 className="font-display text-3xl font-bold text-white">Aprendendo Emoções com Filmes</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">Filmes que ensinam sobre emoções, inclusão e empatia de um jeito lindo.</p>
        </header>

        <div className="space-y-5">
          {movies.map((m) => (
            <article key={m.id} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6 transition-all hover:border-violet-500/15">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{m.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-display text-lg font-bold" style={{ color: m.color }}>{m.title}</h2>
                    <span className="text-[10px] text-[var(--color-text-dim)]">({m.year})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {m.themes.map((t) => (
                      <span key={t} className="rounded-full bg-violet-500/8 border border-violet-500/12 px-2.5 py-0.5 text-[10px] text-violet-300">{t}</span>
                    ))}
                  </div>
                  <p className="text-sm leading-[1.7] text-[var(--color-text-muted)]">{m.whyWatch}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 max-w-2xl mx-auto">
          <p className="text-xs leading-relaxed text-amber-300/70">
            💡 Dica: Assista os filmes junto com a criança e converse sobre o que sentiram. Perguntas como &ldquo;o que você faria no lugar dele?&rdquo; ajudam a desenvolver empatia.
          </p>
        </div>
      </div>
    </div>
  );
}
