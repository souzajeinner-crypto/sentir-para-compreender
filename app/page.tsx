import Link from "next/link";

const pillars = [
  { icon: "❤️", title: "Acolher", desc: "Acreditamos na escuta empática e no respeito às singularidades de cada indivíduo.", color: "#E35CC7" },
  { icon: "🤝", title: "Incluir", desc: "Promovemos a inclusão como princípio ético e prático em todas as etapas da avaliação.", color: "#8B5CFF" },
  { icon: "🧠", title: "Compreender", desc: "Buscamos compreender além das aparências, valorizando histórias e contextos.", color: "#73B8FF" },
  { icon: "⭐", title: "Transformar", desc: "Transformamos conhecimento em ação, gerando impacto social e conscientização.", color: "#F5B84E" },
];

const stats = [
  { icon: "👥", value: "+1.200", label: "Pessoas impactadas" },
  { icon: "🌀", value: "8", label: "Experiências imersivas" },
  { icon: "❤️", value: "100%", label: "Compromisso com empatia" },
];

const audiences = [
  { icon: "🧩", title: "Pessoas neurodivergentes", desc: "Encontre recursos e experiências feitas para você." },
  { icon: "👨‍👩‍👧", title: "Familiares e amigos", desc: "Aprenda a apoiar com empatia e informação." },
  { icon: "🎓", title: "Profissionais", desc: "Aprofunde seus conhecimentos e práticas." },
  { icon: "🏫", title: "Educadores", desc: "Ferramentas para uma educação mais inclusiva." },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.3) 0%, transparent 70%)" }} />
        <div className="absolute top-[30%] left-[-200px] w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(227,92,199,0.2) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[20%] right-[-100px] w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(109,57,255,0.25) 0%, transparent 70%)" }} />
      </div>

      {/* HERO */}
      <section className="content-container-wide pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 lg:max-w-[520px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-1.5 text-sm font-medium text-violet-400 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              Bem-vindo ao Sentir
            </span>
            <h1 className="font-display text-[3.2rem] sm:text-[4rem] lg:text-[5rem] font-bold leading-[0.95] tracking-tight mb-6">
              Um espaço para{" "}
              <span className="text-gradient-hero block">sentir, compreender</span>
              <span className="block">e acolher.</span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-lg mb-8">
              Aqui, a empatia encontra a ciência.
              Exploramos emoções, experiências e vivências para
              construir um mundo mais inclusivo para todos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/teoria" className="btn-primary text-base px-8 py-4">
                Explorar o projeto
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
              <Link href="/experiencias" className="btn-secondary text-base px-8 py-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
                Como funciona
              </Link>
            </div>
          </div>

          <div className="flex-1 mt-12 lg:mt-0 flex items-center justify-center relative">
            <div className="absolute w-[520px] h-[520px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.45) 0%, transparent 65%)" }} aria-hidden="true" />
            <img
              src="/images/inicio.png.png"
              alt="Mascotes do projeto: cérebro, coração e peça de puzzle juntos representando inclusão"
              className="relative w-full max-w-xl drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 4 PILLARS */}
      <section className="content-container-wide pb-16 lg:pb-24">
        <div className="glass-card p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:divide-x lg:divide-[var(--border-glass)]">
            {pillars.map((p, i) => (
              <div key={i} className="text-center lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: p.color + "15", border: `1px solid ${p.color}25` }}>
                  <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">{p.title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + AUDIENCE */}
      <section className="content-container-wide pb-16 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* About card */}
          <div className="glass-card p-10 flex flex-col">
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-5">Sobre o projeto</h2>
            <p className="text-base leading-[1.8] text-[var(--text-secondary)] mb-8">
              O Sentir para Compreender nasceu do desejo de criar pontes entre conhecimento científico, empatia e inclusão.
              Acreditamos que a avaliação psicológica é um caminho para compreender pessoas em sua totalidade.
            </p>
            <div className="flex items-end gap-8 mt-auto">
              <div className="flex-shrink-0 w-40 h-40 rounded-2xl bg-gradient-to-br from-violet-600/10 to-violet-900/20 border border-[var(--border-glass)] flex items-center justify-center overflow-hidden">
                <img src="/images/inicio.png.png" alt="Mascotes do projeto" className="w-full h-full object-contain p-1" />
              </div>
              <div className="space-y-4 flex-1">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-violet-600/10 text-lg" aria-hidden="true">{s.icon}</span>
                    <div>
                      <p className="text-2xl font-bold text-[var(--text-primary)] leading-none">{s.value}</p>
                      <p className="text-sm text-[var(--text-muted)] mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/sobre" className="btn-secondary mt-8 self-start text-base">
              Conheça nossa história
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </Link>
          </div>

          {/* Audience card */}
          <div className="glass-card p-10 flex flex-col">
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-3">Para quem é este espaço?</h2>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-6">
              Para todas as pessoas que desejam aprender, refletir, se compreender melhor e construir relações mais humanas e conscientes.
            </p>
            <div className="space-y-4 flex-1">
              {audiences.map((a, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)] p-5 transition-all hover:border-[var(--border-glass-strong)]">
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-violet-600/10 text-xl flex-shrink-0" aria-hidden="true">{a.icon}</span>
                  <div>
                    <p className="text-base font-semibold text-[var(--text-primary)]">{a.title}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/rede-de-apoio" className="btn-secondary mt-8 self-start text-base">
              Ver todos os públicos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="content-container-wide pb-16 lg:pb-24">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "var(--bg-banner)" }}>
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 20% 50%, rgba(139,92,255,0.4), transparent 60%)" }} aria-hidden="true" />
          <div className="relative flex flex-col sm:flex-row items-center gap-8 p-10 sm:p-12">
            <div className="flex-shrink-0 w-24 h-24">
              <img src="/images/polvo.png.png" alt="" aria-hidden="true" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Você não está sozinho.</h2>
              <p className="text-base text-[var(--text-secondary)] mt-2">Estamos juntos para sentir, compreender e transformar.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/rede-de-apoio" className="btn-primary text-base px-8 py-4 whitespace-nowrap">
                Rede de Apoio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
