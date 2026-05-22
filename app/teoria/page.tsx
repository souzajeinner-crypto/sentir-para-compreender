import Link from "next/link";

/* ── Data ── */
const principles = [
  { icon: "🔬", title: "Processo científico", desc: "Baseado em métodos, instrumentos validados e conhecimento técnico." },
  { icon: "🔒", title: "Ética e sigilo", desc: "Todas as informações são tratadas com confidencialidade." },
  { icon: "🧩", title: "Individualidade", desc: "Cada pessoa é única e deve ser compreendida em seu contexto." },
  { icon: "🎯", title: "Objetivos claros", desc: "Auxilia em diagnósticos, orientações e tomadas de decisão." },
];

const purposes = [
  "Auxiliar no diagnóstico psicológico",
  "Compreender dificuldades emocionais e comportamentais",
  "Apoiar decisões em contextos escolares, clínicos, organizacionais e jurídicos",
  "Planejar intervenções e tratamentos adequados",
  "Promover autoconhecimento e desenvolvimento pessoal",
];

const steps = [
  { num: "1", title: "Entrevista inicial", desc: "Conhecimento da história e da demanda da pessoa.", icon: "📋" },
  { num: "2", title: "Definição dos instrumentos", desc: "Escolha dos testes e técnicas mais adequados para cada caso.", icon: "🧰" },
  { num: "3", title: "Aplicação", desc: "Realização dos testes e dinâmicas em um ambiente acolhedor e ético.", icon: "👤" },
  { num: "4", title: "Análise", desc: "Interpretação cuidadosa dos resultados obtidos.", icon: "📊" },
  { num: "5", title: "Devolutiva", desc: "Apresentação dos resultados e orientações de forma clara e humanizada.", icon: "💬" },
];

const types = [
  { icon: "❤️", title: "Clínica", desc: "Saúde mental e bem-estar emocional.", color: "#E35CC7" },
  { icon: "🧠", title: "Neuropsicológica", desc: "Funções cognitivas e comportamento.", color: "#8B5CFF" },
  { icon: "📚", title: "Educacional", desc: "Aprendizagem e desenvolvimento escolar.", color: "#73B8FF" },
  { icon: "🏢", title: "Organizacional", desc: "Seleção, desempenho e desenvolvimento.", color: "#F5B84E" },
  { icon: "🧭", title: "Orientação Profissional", desc: "Escolhas e planejamento de carreira.", color: "#34d399" },
];

const tools = [
  { icon: "🌬️", title: "Respiração guiada", sub: "3 min", href: "/infantil/autorregulacao" },
  { icon: "🏡", title: "Cantinho seguro", sub: "Acalme sua mente", href: "/infantil/autorregulacao" },
  { icon: "📋", title: "Rotina visual", sub: "Organize seu dia", href: "/infantil/autorregulacao" },
  { icon: "🃏", title: "Cartões de emoções", sub: "Reconheça o que sente", href: "/infantil/emocoes" },
];

const immersiveExps = [
  { title: "Como a ansiedade distorce pensamentos", emoji: "🌀" },
  { title: "Vivendo sobrecarga sensorial", emoji: "⚡" },
  { title: "O que é dissociação?", emoji: "🌫️" },
  { title: "Como funciona o masking social?", emoji: "🎭" },
];

export default function TeoriaPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.3), transparent 70%)" }} />
      </div>

      {/* ══ HERO ══ */}
      <section className="content-container-wide pt-6 pb-12 lg:pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>Início</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-[var(--text-secondary)]">Avaliação Psicológica</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Hero left */}
          <div className="flex-1 lg:max-w-[520px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-5">
              Avaliação Psicológica ⭐
            </span>
            <h1 className="font-display text-[2.4rem] sm:text-[3rem] font-bold leading-[0.95] tracking-tight mb-5">
              Entender para incluir,{" "}
              <span className="text-gradient-hero block">avaliar para transformar.</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8 max-w-lg">
              A avaliação psicológica é uma ferramenta científica que investiga
              aspectos emocionais, cognitivos e comportamentais para compreender
              o indivíduo em sua totalidade, respeitando suas singularidades.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#conteudo" className="btn-primary">
                Entenda mais sobre a avaliação
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
              <Link href="/rede-de-apoio" className="btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                Para responsáveis
              </Link>
            </div>
          </div>

          {/* Hero right — illustration */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-[350px] h-[350px] rounded-full opacity-20 animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.4), transparent 65%)" }} aria-hidden="true" />
            <svg viewBox="0 0 400 350" fill="none" className="relative w-full max-w-sm" aria-label="Ilustração de avaliação psicológica">
              {/* Clipboard */}
              <rect x="100" y="30" width="200" height="260" rx="16" fill="#161930" stroke="rgba(139,92,255,0.3)" strokeWidth="1.5"/>
              <rect x="160" y="18" width="80" height="24" rx="6" fill="#161930" stroke="rgba(139,92,255,0.3)" strokeWidth="1.5"/>
              <circle cx="200" cy="30" r="4" fill="#8B5CFF" opacity="0.5"/>
              {/* Title on clipboard */}
              <text x="200" y="72" textAnchor="middle" fill="#8B5CFF" fontSize="9" fontWeight="600" fontFamily="Inter" opacity="0.7">AVALIAÇÃO PSICOLÓGICA</text>
              {/* Checkmarks */}
              {[90, 115, 140, 165, 190].map((y, i) => (
                <g key={i}>
                  <rect x="125" y={y} width="14" height="14" rx="3" stroke={i < 3 ? "#8B5CFF" : "#2d2260"} strokeWidth="1.2" fill={i < 3 ? "rgba(139,92,255,0.1)" : "none"}/>
                  {i < 3 && <path d={`M${128} ${y+7}l2.5 2.5 4-4`} stroke="#8B5CFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>}
                  <line x1="148" y1={y+7} x2={280 - i*8} y2={y+7} stroke="#2d2260" strokeWidth="1" strokeLinecap="round"/>
                </g>
              ))}
              {/* Brain illustration */}
              <g transform="translate(200, 245)">
                <ellipse cx="0" cy="0" rx="28" ry="24" fill="rgba(227,92,199,0.1)" stroke="#E35CC7" strokeWidth="1" opacity="0.6"/>
                <path d="M-8 8c0-10 5-16 8-16s8 6 8 16M-12 0c-4 0-6-3-6-6s3-6 6-5M16 0c4 0 6-3 6-6s-3-6-6-5" fill="none" stroke="#E35CC7" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
                <circle cx="-6" cy="-2" r="1" fill="#E35CC7" opacity="0.4"/>
                <circle cx="6" cy="-4" r="1" fill="#E35CC7" opacity="0.4"/>
                <circle cx="0" cy="4" r="1" fill="#E35CC7" opacity="0.4"/>
              </g>
              {/* Floating elements */}
              <circle cx="60" cy="80" r="2" fill="#8B5CFF" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/></circle>
              <circle cx="340" cy="60" r="1.5" fill="#E35CC7" opacity="0.4"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/></circle>
              <circle cx="350" cy="200" r="2" fill="#F5B84E" opacity="0.3"/>
              <circle cx="50" cy="250" r="1.5" fill="#73B8FF" opacity="0.4"/>
            </svg>
          </div>

          {/* Hero sidebar quote */}
          <div className="hidden xl:flex flex-col items-center justify-center w-48 flex-shrink-0">
            <div className="glass-card p-5 text-center">
              <p className="text-sm italic leading-relaxed text-[var(--text-secondary)]">
                Cada pessoa é única, e cada história merece ser compreendida.
              </p>
              <span className="block mt-3 text-lg" aria-hidden="true">💜</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT + SIDEBAR ══ */}
      <div className="content-container-wide pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8" id="conteudo">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* O que é + Para que serve */}
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {/* O que é */}
              <div className="glass-card p-7">
                <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] mb-4">O que é a avaliação psicológica?</h2>
                <p className="text-sm leading-[1.8] text-[var(--text-secondary)] mb-6">
                  É um processo técnico e ético realizado por psicólogos para coletar informações e auxiliar na compreensão de questões emocionais, cognitivas, comportamentais e/ou relacionais de uma pessoa.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {principles.map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600/8 text-base flex-shrink-0" aria-hidden="true">{p.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-[var(--text-primary)]">{p.title}</p>
                        <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Para que serve */}
              <div className="glass-card p-7">
                <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] mb-4">Para que serve?</h2>
                <ul className="space-y-3" role="list">
                  {purposes.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-violet-400"><polyline points="20,6 9,17 4,12"/></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Como acontece o processo */}
            <section className="mb-10">
              <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] text-center mb-8">Como acontece o processo?</h2>
              <div className="glass-card p-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {steps.map((s, i) => (
                    <div key={i} className="text-center relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-600/10 border border-violet-500/15 text-2xl mb-3" aria-hidden="true">{s.icon}</div>
                      <h3 className="text-xs font-bold text-[var(--text-primary)] mb-1">{s.num}. {s.title}</h3>
                      <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tipos de avaliação */}
            <section className="mb-10">
              <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] text-center mb-8">Tipos de avaliação</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {types.map((t, i) => (
                  <div key={i} className="glass-card p-5 text-center">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-3 text-lg" style={{ backgroundColor: t.color + "15", border: `1px solid ${t.color}25` }} aria-hidden="true">{t.icon}</div>
                    <h3 className="text-xs font-bold text-[var(--text-primary)] mb-1">{t.title}</h3>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom cards */}
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {/* Motivational */}
              <div className="glass-card p-7 flex items-start gap-4" style={{ borderColor: "rgba(227,92,199,0.15)" }}>
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-500/10 text-3xl flex-shrink-0" aria-hidden="true">🧠</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">A avaliação psicológica não rotula.</h3>
                  <p className="text-sm leading-[1.7] text-[var(--text-secondary)] mt-2">
                    Ela amplia possibilidades, promove inclusão e ajuda a construir caminhos mais conscientes e respeitosos.
                  </p>
                </div>
              </div>

              {/* Importante lembrar */}
              <div className="glass-card p-7">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-3">Importante lembrar</h3>
                <ul className="space-y-2" role="list">
                  {[
                    "Não existe um único teste que defina uma pessoa.",
                    "Os resultados não determinam o futuro, mas orientam escolhas.",
                    "Avaliação psicológica é um direito e um cuidado.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ══ SIDEBAR ══ */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-5">
            {/* Ferramentas rápidas */}
            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">🛠️</span> Ferramentas rápidas
              </h3>
              <div className="space-y-2">
                {tools.map((t, i) => (
                  <Link key={i} href={t.href} className="flex items-center gap-3 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)] p-3 transition-all hover:border-[var(--border-glass-strong)]">
                    <span className="text-lg" aria-hidden="true">{t.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">{t.title}</p>
                      <p className="text-[10px] text-[var(--text-muted)]">{t.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Precisa de apoio */}
            <div className="glass-card p-5" style={{ borderColor: "rgba(227,92,199,0.2)", background: "linear-gradient(135deg, rgba(227,92,199,0.04), transparent)" }}>
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">Precisa de apoio?</h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Se você ou alguém que conhece precisa conversar, busque ajuda.</p>
              <Link href="/rede-de-apoio" className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors">
                Ver contatos de apoio
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            {/* Jornal dos Bichinhos */}
            <div className="glass-card p-5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.4), transparent)" }} aria-hidden="true" />
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Jornal dos Bichinhos</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Histórias e novidades contadas pelos nossos amigos!</p>
              <Link href="/jornal" className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300">
                Ler jornal <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            {/* Podcast */}
            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Podcast do Sentir</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Conversas e aprendizados para ouvir quando quiser!</p>
              <Link href="/podcast" className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 px-3 py-1.5 text-xs font-semibold text-violet-400 hover:bg-violet-600/15">
                Ouvir agora <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>

            {/* Experiências imersivas */}
            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-1">Experiências imersivas</h3>
              <p className="text-[11px] text-[var(--text-muted)] mb-3">Descubra como é vivenciar diferentes situações do dia a dia.</p>
              <ul className="space-y-2 mb-4" role="list">
                {immersiveExps.map((e, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="text-sm" aria-hidden="true">{e.emoji}</span>
                    {e.title}
                  </li>
                ))}
              </ul>
              <Link href="/experiencias-imersivas" className="btn-primary text-xs !py-2 !px-4 w-full justify-center">
                Explorar experiências
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ══ CTA BANNER ══ */}
      <section className="content-container-wide pb-16 lg:pb-24">
        <div className="relative rounded-banner overflow-hidden" style={{ background: "var(--bg-banner)" }}>
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 30% 50%, rgba(139,92,255,0.4), transparent 60%)" }} aria-hidden="true" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Precisa de orientação ou avaliação psicológica?</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Procure um psicólogo e cuide da sua saúde emocional.</p>
            </div>
            <Link href="/rede-de-apoio" className="btn-secondary whitespace-nowrap">
              Encontrar ajuda
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
