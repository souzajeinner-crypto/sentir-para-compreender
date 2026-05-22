import Link from "next/link";

const perspectives = [
  {
    id: "p01", title: "Educação inclusiva para todos",
    desc: "Repensar práticas pedagógicas e ambientes escolares para garantir que cada criança possa aprender e se desenvolver com equidade.",
    tags: ["Educação", "Inclusão", "Futuro"], color: "#22c55e", icon: "🤝",
  },
  {
    id: "p02", title: "Saúde mental e neurodivergência",
    desc: "Promover acolhimento, informação e acesso a cuidados que respeitem as individualidades e fortaleçam o bem-estar emocional.",
    tags: ["Saúde mental", "Neurodivergência", "Acolhimento"], color: "#8B5CFF", icon: "🧠",
  },
  {
    id: "p03", title: "Empatia que transforma relações",
    desc: "Construir relações mais humanas, baseadas na escuta ativa, no respeito às diferenças e na valorização do outro.",
    tags: ["Empatia", "Relações", "Convivência"], color: "#E35CC7", icon: "❤️",
  },
  {
    id: "p04", title: "Trabalho com propósito e inclusão",
    desc: "Ambientes de trabalho acessíveis e diversos geram inovação, pertencimento e desenvolvimento para todos.",
    tags: ["Trabalho", "Diversidade", "Acessibilidade"], color: "#73B8FF", icon: "💼",
  },
  {
    id: "p05", title: "Acessibilidade como direito",
    desc: "Acessibilidade vai além da estrutura física: é informação, comunicação, atitude e oportunidade para todos.",
    tags: ["Acessibilidade", "Direitos", "Sociedade"], color: "#F5B84E", icon: "♿",
  },
];

const themes = [
  { icon: "📚", label: "Educação" },
  { icon: "🧠", label: "Saúde mental" },
  { icon: "🤝", label: "Inclusão social" },
  { icon: "💼", label: "Trabalho e carreira" },
  { icon: "👨‍👩‍👧", label: "Família e convivência" },
  { icon: "♿", label: "Direitos e acessibilidade" },
];

export default function PerspectivasPage() {
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
            <li className="text-[var(--text-secondary)]">Perspectivas</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
          <div className="flex-1 lg:max-w-[520px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-5">
              Perspectivas ⭐
            </span>
            <h1 className="font-display text-[2.4rem] sm:text-[3rem] font-bold leading-[0.95] tracking-tight mb-5">
              Novos olhares,{" "}
              <span className="text-gradient-hero block">mais inclusão,</span>
              <span className="block">um futuro melhor.</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8 max-w-lg">
              Reflexões, tendências e caminhos para construirmos uma sociedade mais empática, consciente e acessível para todos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#perspectivas" className="btn-primary">
                Explorar perspectivas
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
              <Link href="/relatos" className="btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                Perspectivas favoritas
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-[480px] h-[480px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.45), transparent 65%)" }} aria-hidden="true" />
            <img
              src="/images/relatos.png.png"
              alt="Mascotes representando perspectivas e histórias inclusivas"
              className="relative w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ══ MAIN + SIDEBAR ══ */}
      <div className="content-container-wide pb-16 lg:pb-24" id="perspectivas">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)]">Perspectivas em destaque</h2>
              <p className="text-sm text-[var(--text-muted)] mt-1">Ideias e reflexões que inspiram ações e transformações.</p>
            </div>

            <div className="space-y-4">
              {perspectives.map((p) => (
                <article key={p.id} className="glass-card p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: p.color + "12", border: `1px solid ${p.color}22` }} aria-hidden="true">
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[var(--text-primary)]">{p.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full border border-[var(--border-glass)] bg-[var(--bg-card-soft)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)]">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-glass)] text-[var(--text-muted)] hover:border-[var(--border-glass-strong)] hover:text-[var(--text-primary)] transition-all cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,6 15,12 9,18"/></svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/perspectivas" className="btn-secondary text-sm">
                Ver mais perspectivas
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </div>

          {/* ══ SIDEBAR ══ */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-5">
            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-3">Explore por tema</h3>
              <div className="space-y-1">
                {themes.map((t, i) => (
                  <button key={i} className="flex items-center justify-between w-full rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-[var(--border-glass)] hover:bg-[var(--bg-card-soft)] text-left">
                    <span className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                      <span aria-hidden="true">{t.icon}</span>{t.label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-muted)]"><polyline points="9,6 15,12 9,18"/></svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 overflow-hidden relative" style={{ borderColor: "rgba(227,92,199,0.2)", background: "linear-gradient(135deg, rgba(227,92,199,0.04), transparent)" }}>
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10" style={{ background: "radial-gradient(circle, rgba(227,92,199,0.5), transparent)" }} aria-hidden="true" />
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">Participe da mudança!</h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Compartilhe suas ideias, sugestões e perspectivas sobre um mundo mais inclusivo.</p>
              <Link href="/sobre" className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-2 text-xs font-semibold text-violet-400 hover:bg-violet-600/15">
                Deixar minha perspectiva
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-rose-400 mb-1">Jornal dos Bichinhos</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Histórias e novidades contadas pelos nossos amigos!</p>
              <Link href="/jornal" className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 px-3 py-1.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10">
                Ler jornal <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Podcast do Sentir</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Conversas e aprendizados para ouvir quando quiser!</p>
              <Link href="/podcast" className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 px-3 py-1.5 text-xs font-semibold text-violet-400 hover:bg-violet-600/15">
                Ouvir agora <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Futuro que acolhe</h3>
              <p className="text-[11px] text-[var(--text-muted)]">
                Cada passo rumo à inclusão hoje, constrói um amanhã mais justo e acolhedor para todos.
              </p>
              <span className="block mt-3 text-lg" aria-hidden="true">💜</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
