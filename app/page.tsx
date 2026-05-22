import Link from "next/link";

const values = [
  { icon: "❤️", title: "Empatia", desc: "No centro de tudo que fazemos." },
  { icon: "⭐", title: "Inclusão", desc: "Para que todos se sintam vistos e ouvidos." },
  { icon: "🧠", title: "Ciência", desc: "Base que fortalece e dá sentido ao que desenvolvemos." },
];

const pipeline = [
  { icon: "💡", num: 1, title: "Ideia do projeto", desc: "Tudo começa com o propósito de tornar a avaliação mais humana e acessível." },
  { icon: "✏️", num: 2, title: "Desenvolvimento", desc: "Unimos ciência, tecnologia e design para criar uma experiência acolhedora." },
  { icon: "🧠", num: 3, title: "Experiências", desc: "Construímos atividades imersivas que estimulam o autoconhecimento e a empatia." },
  { icon: "👥", num: 4, title: "Inclusão", desc: "Criamos com foco em acessibilidade para que todas as pessoas se sintam representadas." },
  { icon: "🚀", num: 5, title: "Impacto", desc: "Queremos impactar vidas e criar conexões, gerando inspiração que move o futuro." },
];

const highlights = [
  { img: "/images/inicio.png.png", title: "Projeto em desenvolvimento", desc: "Crescendo com propósito e responsabilidade.", wide: true },
  { icon: "💧", title: "Experiências imersivas", desc: "Atividades interativas baseadas em ciência e sensibilidade.", color: "#73B8FF" },
  { icon: "❤️", title: "Compromisso com empatia", desc: "Cada detalhe pensado para acolher e incluir.", color: "#E35CC7" },
  { icon: "♿", title: "Acessível para todos", desc: "Conteúdo inclusivo e de fácil acesso ao máximo de pessoas e realidades.", color: "#8B5CFF" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.3) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] left-[-200px] w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(227,92,199,0.2) 0%, transparent 70%)" }} />
      </div>

      {/* ══ SOBRE O PROJETO — hero com imagem lateral ══ */}
      <section className="content-container-wide pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="glass-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Texto */}
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
                  Sobre o projeto
                </h1>
                <p className="text-base lg:text-lg leading-relaxed text-[var(--text-secondary)] mb-10 max-w-md">
                  O Sentir para Compreender nasceu do desejo de criar pontes entre o conhecimento científico, empatia e inclusão.
                  Acreditamos que a avaliação psicológica é uma ferramenta poderosa que transforma compreensão em ação e cuidado.
                </p>
                {/* Values row */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {values.map((v, i) => (
                    <div key={i} className="flex flex-col items-start gap-2">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center border border-[var(--border-glass)] bg-[var(--bg-card-soft)] text-xl">
                        {v.icon}
                      </div>
                      <p className="text-base font-semibold text-[var(--text-primary)]">{v.title}</p>
                      <p className="text-sm text-[var(--text-muted)] leading-snug">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/sobre" className="btn-secondary self-start text-base px-7 py-3">
                Conheça nossa história
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            {/* Imagem mascotes */}
            <div className="lg:w-[480px] flex items-center justify-center p-8 lg:p-0 relative">
              <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 60% 50%, rgba(139,92,255,0.5) 0%, transparent 70%)" }} aria-hidden="true" />
              {/* Flores decorativas */}
              <div className="absolute top-6 right-12 text-violet-400 opacity-30 text-3xl">✿</div>
              <div className="absolute top-16 right-6 text-violet-400 opacity-20 text-xl">✿</div>
              <div className="absolute bottom-12 left-8 text-violet-400 opacity-20 text-2xl">✿</div>
              <img
                src="/images/inicio.png.png"
                alt="Mascotes do projeto reunidos"
                className="relative w-full max-w-sm lg:max-w-none drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ PIPELINE — como transformamos conhecimento ══ */}
      <section className="content-container-wide pb-10 lg:pb-12">
        <div className="glass-card p-10 lg:p-12">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-10">
            Como transformamos conhecimento em compreensão
          </h2>
          {/* Linha conectora */}
          <div className="relative">
            {/* Linha horizontal — só desktop */}
            <div className="hidden lg:block absolute top-[22px] left-[44px] right-[44px] h-[2px] bg-gradient-to-r from-[var(--brand-violet)] via-[var(--accent-magenta)] to-[var(--accent-blue)] opacity-30" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {pipeline.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  {/* Ícone com número */}
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-glass)] text-xl z-10 relative">
                      {p.icon}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--brand-violet)] text-white text-[10px] font-bold flex items-center justify-center z-20">
                      {p.num}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-[var(--text-primary)]">{p.title}</p>
                  <p className="text-sm text-[var(--text-muted)] leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHTS — grid de cards ══ */}
      <section className="content-container-wide pb-16 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card largo com imagem */}
          <div className="glass-card p-8 flex flex-col gap-4 lg:col-span-2">
            <img
              src="/images/inicio.png.png"
              alt="Mascotes do projeto"
              className="w-full max-w-[220px] object-contain"
            />
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
              Projeto em<br />desenvolvimento
            </h3>
            <p className="text-base text-[var(--text-muted)]">Crescendo com propósito e responsabilidade.</p>
          </div>

          {/* Cards menores */}
          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)]" style={{ color: "#73B8FF" }}>
              💧
            </div>
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">Experiências imersivas</h3>
            <p className="text-sm text-[var(--text-muted)]">Atividades interativas baseadas em ciência e sensibilidade.</p>
          </div>

          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)]" style={{ color: "#E35CC7" }}>
              ❤️
            </div>
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">Compromisso com empatia</h3>
            <p className="text-sm text-[var(--text-muted)]">Cada detalhe pensado para acolher e incluir.</p>
          </div>

          {/* Card com CTA */}
          <div className="glass-card p-8 flex flex-col gap-4" style={{ background: "linear-gradient(135deg, rgba(109,57,255,0.25) 0%, rgba(31,18,81,0.82) 100%)" }}>
            <div className="w-24 h-24 flex items-center justify-center">
              <img src="/images/polvo.png.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">Você não<br />está sozinho.</h3>
            <p className="text-sm text-[var(--text-muted)]">Nossa rede de apoio está aqui sempre que precisar.</p>
            <Link href="/rede-de-apoio" className="btn-primary mt-auto text-sm px-5 py-3 self-start">
              Rede de Apoio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
