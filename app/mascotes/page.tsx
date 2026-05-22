import Link from "next/link";
import { mascots } from "@/data/mascots";

export default function MascotesPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Mascotes</li></ol></nav>
        <header className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Conheça a turma</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white">Nossos Mascotes</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">Cada mascote representa uma emoção e tem uma história para contar. Eles vão te acompanhar por todo o site!</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mascots.map((m) => (
            <div key={m.id} className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-7 text-center transition-all hover:border-violet-500/20 hover:scale-[1.02]">
              <span className="text-5xl block mb-3" aria-hidden="true">{m.emoji}</span>
              <h2 className="font-display text-xl font-bold" style={{ color: m.color }}>{m.name}</h2>
              <p className="text-xs text-[var(--color-text-dim)] mb-1">{m.animal} · {m.emotion}</p>
              <p className="text-sm italic leading-relaxed text-[var(--color-text-muted)] mb-3" style={{ color: m.color + "99" }}>&ldquo;{m.catchphrase}&rdquo;</p>
              <p className="text-xs leading-[1.6] text-[var(--color-text-dim)]">{m.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/jornal" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-glow">Ler o Jornal do Sentir <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg></Link>
          <Link href="/podcast" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)]">Ouvir o Podcast <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
