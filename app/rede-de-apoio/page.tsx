"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  redeIntro, categories, resources, firstSteps, clinicaEscola,
} from "@/data/support-network";

export default function RedeDeApoioPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = resources;
    if (activeCategory) list = list.filter((r) => r.categoryId === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.city?.toLowerCase().includes(q) ||
          r.address?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeCategory]);

  return (
    <div className="content-container py-section">
      <div className="max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Início</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[var(--text-secondary)]">Rede de Apoio</li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">{redeIntro.subtitle}</p>
          <h1 className="mt-3 font-display text-heading-xl font-bold text-[var(--text-primary)] sm:text-[2.8rem]">{redeIntro.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">{redeIntro.description}</p>
        </header>

        {/* Emergency alert */}
        <div className="mb-10 flex items-start gap-3 rounded-banner border border-rose-500/25 bg-rose-500/5 p-6" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-rose-400"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3"/></svg>
          <div>
            <p className="text-sm font-bold text-rose-300">Em situação de risco?</p>
            <p className="mt-1 text-sm leading-relaxed text-rose-300/70">{redeIntro.emergencyNotice}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {resources.filter(r => r.isEmergency && r.phone).slice(0, 4).map(r => (
                <span key={r.id} className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-4 py-2 text-sm font-bold text-rose-300">
                  {r.name.includes("CVV") ? "CVV" : r.name.includes("SAMU") ? "SAMU" : r.name.includes("100") ? "Disque" : "Ligue"}: {r.phone}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Clinic highlight */}
        <section className="mb-12 glass-card p-8" style={{ borderColor: "rgba(139,92,255,.25)", background: "linear-gradient(135deg, rgba(109,57,255,0.06), transparent)" }}>
          <div className="flex items-start gap-3 mb-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-600/10 text-violet-400 flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/></svg>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Destaque</p>
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">{clinicaEscola.name}</h2>
              <p className="text-sm text-[var(--text-muted)]">{clinicaEscola.institution}</p>
            </div>
          </div>
          <p className="text-sm leading-[1.8] text-[var(--text-secondary)] mb-4">{clinicaEscola.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {clinicaEscola.services.map((s) => (
              <span key={s} className="rounded-full bg-violet-600/8 border border-violet-500/15 px-3 py-1 text-[11px] text-violet-300">{s}</span>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">Telefone</p>
              <p className="text-sm text-violet-300 font-medium">{clinicaEscola.contact.phone}</p>
              <p className="text-xs text-violet-300/60">{clinicaEscola.contact.phone2}</p>
            </div>
            <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">Horário</p>
              <p className="text-sm text-[var(--text-secondary)]">{clinicaEscola.contact.hours}</p>
            </div>
            <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">Tipo</p>
              <p className="text-sm text-emerald-400 font-medium">Gratuito (lista de espera)</p>
            </div>
          </div>
        </section>

        {/* Search + category filters */}
        <section className="mb-8">
          <div className="relative mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="search" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome, cidade ou serviço..."
              className="w-full rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card)] pl-11 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
              aria-label="Buscar recursos de apoio"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            <button onClick={() => setActiveCategory(null)} className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${activeCategory === null ? "border-violet-500/40 bg-violet-600/10 text-violet-300" : "border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-secondary)]"}`} aria-pressed={activeCategory === null}>
              Todos
            </button>
            {categories.map((c) => (
              <button key={c.id} onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)} className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${activeCategory === c.id ? "border-violet-500/40 bg-violet-600/10 text-violet-300" : "border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-secondary)]"}`} aria-pressed={activeCategory === c.id}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-14">
          {filtered.length > 0 ? (
            <div className="space-y-4">
              {filtered.map((r) => {
                const cat = categories.find((c) => c.id === r.categoryId);
                return (
                  <article key={r.id} className={`glass-card p-6 transition-all ${r.isHighlight ? "!border-violet-500/25" : ""} ${r.isEmergency ? "!border-rose-500/20" : ""}`}>
                    <div className="flex items-start gap-2 mb-2 flex-wrap">
                      <span className="rounded-full bg-violet-600/8 border border-violet-500/15 px-2.5 py-0.5 text-[10px] font-medium text-violet-300">{cat?.emoji} {cat?.label}</span>
                      {r.city && <span className="text-[10px] text-[var(--text-muted)]">{r.city}{r.state ? `, ${r.state}` : ""}</span>}
                      {r.isHighlight && <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[9px] font-bold text-amber-400">★ DESTAQUE</span>}
                      {r.isEmergency && <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[9px] font-bold text-rose-300">24H</span>}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">{r.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{r.description}</p>
                    {r.address && <p className="mt-2 text-xs text-[var(--text-muted)] flex items-start gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>{r.address}</p>}
                    {r.hours && <p className="mt-1 text-xs text-[var(--text-muted)] flex items-start gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>{r.hours}</p>}
                    {r.notes && <p className="mt-2 text-[10px] italic text-amber-300/50">⚠ {r.notes}</p>}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.phone && <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/8 border border-rose-500/15 px-3 py-1.5 text-[11px] font-medium text-rose-300">📞 {r.phone}</span>}
                      {r.phone2 && <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/8 border border-rose-500/15 px-3 py-1.5 text-[11px] font-medium text-rose-300">📞 {r.phone2}</span>}
                      {r.whatsapp && <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 px-3 py-1.5 text-[11px] font-medium text-emerald-300">💬 WhatsApp: {r.whatsapp}</span>}
                      {r.email && <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/8 border border-cyan-500/15 px-3 py-1.5 text-[11px] font-medium text-cyan-300">✉ {r.email}</span>}
                      {r.website && <a href={r.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/8 border border-violet-500/15 px-3 py-1.5 text-[11px] font-medium text-violet-300 hover:bg-violet-600/15 transition-colors">🔗 Site oficial</a>}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 glass-card">
              <p className="text-sm text-[var(--text-muted)]">Nenhum recurso encontrado.</p>
              <button onClick={() => { setSearch(""); setActiveCategory(null); }} className="mt-2 text-sm text-violet-400 hover:text-violet-300">Limpar filtros</button>
            </div>
          )}
        </section>

        {/* Editorial note */}
        <div className="mb-10 flex items-start gap-3 rounded-card border border-amber-500/20 bg-amber-500/5 p-5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-amber-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p className="text-xs leading-relaxed text-amber-300/70">{redeIntro.editorialNote}</p>
        </div>

        {/* First steps */}
        <section className="mb-14">
          <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] mb-2">O primeiro passo</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">Informações acolhedoras para quem está pensando em buscar ajuda.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {firstSteps.map((step, i) => (
              <div key={i} className="glass-card p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/8 text-violet-400 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={step.icon}/></svg>
                </span>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">{step.title}</h3>
                <p className="text-xs leading-[1.7] text-[var(--text-muted)]">{step.content}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center border-t border-[var(--border-glass)] pt-8">
          <Link href="/" className="btn-secondary text-sm">← Voltar ao início</Link>
        </div>
      </div>
    </div>
  );
}
