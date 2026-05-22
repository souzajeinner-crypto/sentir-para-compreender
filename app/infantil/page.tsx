"use client";

import Link from "next/link";
import { infantilSections } from "@/data/children-area";

export default function InfantilPage() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0c0820 0%, #140e2e 50%, #0c0820 100%)" }}>
      <div className="content-container py-section">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]">
              <li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[var(--color-text-muted)]">Área Infantil</li>
            </ol>
          </nav>

          <header className="text-center mb-14">
            <div className="text-5xl mb-4" aria-hidden="true">🌈</div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Espaço seguro e acolhedor
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              Sentir para<br />Compreender <span className="text-amber-300">Kids</span>
            </h1>
            <p className="mt-4 mx-auto max-w-lg text-base leading-relaxed text-[var(--color-text-muted)]">
              Um espaço feito com carinho para crianças, famílias e educadores.
              Aqui a gente aprende sobre emoções, respeito e inclusão — brincando!
            </p>
          </header>

          {/* Section grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {infantilSections.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-7 transition-all hover:border-violet-500/20 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{s.emoji}</div>
                <h2 className="font-display text-xl font-bold text-[var(--color-text)] group-hover:text-violet-300 transition-colors">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--color-text-dim)]">{s.subtitle}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-violet-400 group-hover:text-violet-300">
                  Explorar
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 max-w-2xl mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-xs leading-relaxed text-amber-300/70">
              Este espaço é educativo e foi feito com muito cuidado. Se você é criança, convide um adulto de confiança para explorar junto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
