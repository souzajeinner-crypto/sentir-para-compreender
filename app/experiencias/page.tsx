import Link from "next/link";

const featured = [
  {
    id: "f01", name: "Clínica de Psicologia Anhanguera Uberlândia",
    desc: "Atendimentos psicológicos a baixo custo para a comunidade, com foco no cuidado e acolhimento.",
    city: "Uberlândia - MG", phone: "(34) 3292-1991", link: "Ver no Instagram", linkIcon: true,
    tags: ["Clínica", "Atendimento"], color: "#8B5CFF",
  },
  {
    id: "f02", name: "Projeto TEAbraça",
    desc: "Acolhimento e orientação para famílias de pessoas autistas, promovendo informação e apoio emocional.",
    city: "Uberlândia - MG", phone: "(34) 98888-7373", link: "Instagram", linkIcon: true,
    tags: ["Projeto", "Apoio familiar"], color: "#E35CC7",
  },
  {
    id: "f03", name: "AMA Uberlândia — Associação de Amigos do Autista",
    desc: "Oferece terapias, atividades e suporte a pessoas autistas e suas famílias desde a infância até a vida adulta.",
    city: "Uberlândia - MG", phone: "(34) 3213-6942", link: "Site oficial", linkIcon: true,
    tags: ["Associação", "Terapias"], color: "#73B8FF",
  },
  {
    id: "f04", name: "Instituto Integra",
    desc: "Promove inclusão social e profissional de pessoas com deficiência e neurodivergentes, por meio de capacitação e empregabilidade.",
    city: "Uberlândia - MG", phone: "(34) 3236-6587", link: "Site oficial", linkIcon: true,
    tags: ["Instituto", "Inclusão"], color: "#F5B84E",
  },
  {
    id: "f05", name: "Lar dos Meninos",
    desc: "Acolhe crianças e adolescentes em situação de vulnerabilidade, oferecendo educação e apoio psicológico.",
    city: "Uberlândia - MG", phone: "(34) 3214-6911", link: "Site oficial", linkIcon: true,
    tags: ["Instituição", "Acolhimento"], color: "#34d399",
  },
];

const categories = [
  { icon: "❤️", label: "Clínicas e atendimentos" },
  { icon: "🤝", label: "Projetos e ONGs" },
  { icon: "🏫", label: "Escolas e educação" },
  { icon: "🏢", label: "Empresas inclusivas" },
  { icon: "👥", label: "Comunidades e grupos" },
];

const immersiveExps = [
  { title: "Como a ansiedade distorce pensamentos", emoji: "🌀" },
  { title: "Vivendo sobrecarga sensorial", emoji: "⚡" },
  { title: "O que é dissociação?", emoji: "🌫️" },
  { title: "Como funciona o masking social?", emoji: "🎭" },
];

export default function ExperienciasPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.3), transparent 70%)" }} />
      </div>

      {/* ══ HERO ══ */}
      <section className="content-container-wide pt-6 pb-12 lg:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>Início</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[var(--text-secondary)]">Experiências</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
          {/* Hero text */}
          <div className="flex-1 lg:max-w-[520px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-5">
              Experiências ⭐
            </span>
            <h1 className="font-display text-[2.4rem] sm:text-[3rem] font-bold leading-[0.95] tracking-tight mb-5">
              Vivências que conectam,{" "}
              <span className="text-gradient-hero block">aprendizados que transformam.</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8 max-w-lg">
              Conheça projetos, iniciativas e empresas que promovem inclusão,
              apoio emocional e qualidade de vida para crianças neurodivergentes e suas famílias.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/rede-de-apoio" className="btn-primary">
                Quero compartilhar uma experiência
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
              <Link href="/experiencias-imersivas" className="btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                Experiências favoritas
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-[480px] h-[480px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.45), transparent 65%)" }} aria-hidden="true" />
            <img
              src="/images/experiencias-originais.png.png"
              alt="Mascotes representando vivências e experiências inclusivas"
              className="relative w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ══ MAIN + SIDEBAR ══ */}
      <div className="content-container-wide pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] mb-6">Experiências em destaque</h2>

            <div className="space-y-4">
              {featured.map((f) => (
                <article key={f.id} className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: f.color + "10", border: `1px solid ${f.color}20` }}>
                      <span className="text-2xl font-bold font-display" style={{ color: f.color }}>{f.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[var(--text-primary)]">{f.name}</h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">{f.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {f.tags.map((t) => (
                          <span key={t} className="rounded-full border border-[var(--border-glass)] bg-[var(--bg-card-soft)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)]">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col gap-1.5 sm:items-end sm:text-right">
                      <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {f.city}
                      </p>
                      {f.phone && (
                        <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3"/></svg>
                          {f.phone}
                        </p>
                      )}
                      {f.link && (
                        <p className="flex items-center gap-1.5 text-xs text-violet-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          {f.link}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/rede-de-apoio" className="btn-secondary text-sm">
                Ver mais experiências
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </div>

          {/* ══ SIDEBAR ══ */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-5">
            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-3">Explore por categoria</h3>
              <div className="space-y-1">
                {categories.map((c, i) => (
                  <Link key={i} href="/rede-de-apoio" className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-[var(--border-glass)] hover:bg-[var(--bg-card-soft)]">
                    <span className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                      <span aria-hidden="true">{c.icon}</span>
                      {c.label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-muted)]"><polyline points="9,6 15,12 9,18"/></svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 overflow-hidden relative" style={{ borderColor: "rgba(139,92,255,0.2)" }}>
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.5), transparent)" }} aria-hidden="true" />
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">Quer indicar uma experiência?</h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Conhece algum projeto ou iniciativa que faz a diferença? Conte pra gente!</p>
              <Link href="/sobre" className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-2 text-xs font-semibold text-violet-400 hover:bg-violet-600/15">
                Indicar experiência
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
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Experiências imersivas</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Descubra como é vivenciar diferentes situações do dia a dia.</p>
              <ul className="space-y-2 mb-4" role="list">
                {immersiveExps.map((e, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="text-sm" aria-hidden="true">{e.emoji}</span>{e.title}
                  </li>
                ))}
              </ul>
              <Link href="/experiencias-imersivas" className="btn-primary text-xs !py-2 !px-4 w-full justify-center">
                Explorar experiências <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Experiências inspiradoras</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Histórias reais que mostram que incluir é transformar vidas.</p>
              <Link href="/relatos" className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 px-3 py-1.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10">
                Ler relatos <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
