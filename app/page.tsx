import Link from "next/link";

/* ── Pillar data ── */
const pillars = [
  { icon: "❤️", title: "Acolher", desc: "Acreditamos na escuta empática e no respeito às singularidades de cada indivíduo.", color: "#E35CC7" },
  { icon: "🤝", title: "Incluir", desc: "Promovemos a inclusão como princípio ético e prático em todas as etapas da avaliação.", color: "#8B5CFF" },
  { icon: "🧠", title: "Compreender", desc: "Buscamos compreender além das aparências, valorizando histórias e contextos.", color: "#73B8FF" },
  { icon: "⭐", title: "Transformar", desc: "Transformamos conhecimento em ação, gerando impacto social e conscientização.", color: "#F5B84E" },
];

/* ── Stats ── */
const stats = [
  { icon: "👥", value: "+1.200", label: "Pessoas impactadas" },
  { icon: "🌀", value: "8", label: "Experiências imersivas" },
  { icon: "❤️", value: "100%", label: "Compromisso com empatia" },
];

/* ── Audiences ── */
const audiences = [
  { icon: "🧩", title: "Pessoas neurodivergentes", desc: "Encontre recursos e experiências feitas para você." },
  { icon: "👨‍👩‍👧", title: "Familiares e amigos", desc: "Aprenda a apoiar com empatia e informação." },
  { icon: "🎓", title: "Profissionais", desc: "Aprofunde seus conhecimentos e práticas." },
  { icon: "🏫", title: "Educadores", desc: "Ferramentas para uma educação mais inclusiva." },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ── Background glows ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.3) 0%, transparent 70%)" }} />
        <div className="absolute top-[30%] left-[-200px] w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(227,92,199,0.2) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[20%] right-[-100px] w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(109,57,255,0.25) 0%, transparent 70%)" }} />
      </div>

      {/* ══════════════════════════════════════
         HERO
         ══════════════════════════════════════ */}
      <section className="content-container pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Text */}
          <div className="flex-1 lg:max-w-[440px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-1.5 text-xs font-medium text-violet-400 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-400"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              Bem-vindo ao Sentir
            </span>
            <h1 className="font-display text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[0.95] tracking-tight mb-6">
              Um espaço para{" "}
              <span className="text-gradient-hero block">sentir, compreender</span>
              <span className="block">e acolher.</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] max-w-md mb-8">
              Aqui, a empatia encontra a ciência.
              Exploramos emoções, experiências e vivências para
              construir um mundo mais inclusivo para todos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/teoria" className="btn-primary">
                Explorar o projeto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
              <Link href="/experiencias" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
                Como funciona
              </Link>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="flex-1 mt-12 lg:mt-0 flex items-center justify-center relative">
            {/* Glow behind illustration */}
            <div className="absolute w-[420px] h-[420px] rounded-full opacity-25 animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(139,92,255,0.45) 0%, transparent 65%)" }} aria-hidden="true" />
            <svg viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full max-w-md" aria-label="Ilustração: espaço acolhedor com porta iluminada e mascotes">
              {/* Portal glow layers */}
              <ellipse cx="240" cy="180" rx="120" ry="160" fill="url(#portalGrad)" opacity="0.08"/>
              <rect x="165" y="30" width="150" height="290" rx="75" fill="url(#portalGrad)" opacity="0.12"/>
              <rect x="175" y="40" width="130" height="270" rx="65" fill="url(#portalGrad)" opacity="0.2"/>
              <rect x="188" y="55" width="104" height="240" rx="52" fill="url(#portalGrad)" opacity="0.35"/>
              <rect x="200" y="70" width="80" height="210" rx="40" fill="url(#portalInner)" opacity="0.55"/>
              {/* Inner light */}
              <rect x="212" y="90" width="56" height="170" rx="28" fill="#B8A0FF" opacity="0.12"/>
              {/* Light rays from portal */}
              <line x1="240" y1="80" x2="240" y2="270" stroke="url(#portalGrad)" strokeWidth="1.5" opacity="0.2"/>
              <line x1="218" y1="100" x2="200" y2="260" stroke="#8B5CFF" strokeWidth="0.8" opacity="0.1"/>
              <line x1="262" y1="100" x2="280" y2="260" stroke="#8B5CFF" strokeWidth="0.8" opacity="0.1"/>
              <line x1="240" y1="70" x2="180" y2="20" stroke="#8B5CFF" strokeWidth="0.5" opacity="0.06"/>
              <line x1="240" y1="70" x2="300" y2="20" stroke="#8B5CFF" strokeWidth="0.5" opacity="0.06"/>

              {/* Stars/particles */}
              <circle cx="110" cy="70" r="2" fill="#8B5CFF" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/></circle>
              <circle cx="370" cy="55" r="2.5" fill="#E35CC7" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/></circle>
              <circle cx="390" cy="150" r="1.5" fill="#73B8FF" opacity="0.5"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/></circle>
              <circle cx="90" cy="210" r="2" fill="#F5B84E" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite"/></circle>
              <circle cx="350" cy="260" r="1.5" fill="#8B5CFF" opacity="0.4"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.5s" repeatCount="indefinite"/></circle>
              <circle cx="140" cy="290" r="1" fill="#E35CC7" opacity="0.3"/>
              <circle cx="320" cy="30" r="1.5" fill="#73B8FF" opacity="0.3"/>

              {/* Floating heart bubble top-right */}
              <g transform="translate(360, 70)" opacity="0.7">
                <circle cx="0" cy="0" r="20" fill="rgba(139,92,255,0.08)" stroke="rgba(139,92,255,0.18)" strokeWidth="1"/>
                <path d="M0-5c-1.5-2-4-2.5-5.5-1s-1 4 5.5 8c6.5-4 7-6.5 5.5-8s-4-1-5.5 1z" fill="#E35CC7" opacity="0.6" transform="translate(0,1) scale(0.7)"/>
              </g>

              {/* Floating brain bubble top-left */}
              <g transform="translate(120, 45)" opacity="0.6">
                <circle cx="0" cy="0" r="18" fill="rgba(139,92,255,0.06)" stroke="rgba(139,92,255,0.15)" strokeWidth="1"/>
                <path d="M-4 3c0-5 3-7 4-7s4 2 4 7M-4 0c-2 0-3.5-1.5-3.5-3.5S-5 -7-3-6M8 0c2 0 3.5-1.5 3.5-3.5S9-7 7-6" fill="none" stroke="#8B5CFF" strokeWidth="1.2" strokeLinecap="round"/>
              </g>

              {/* Floating chat bubble middle-right */}
              <g transform="translate(380, 200)" opacity="0.4">
                <circle cx="0" cy="0" r="14" fill="rgba(139,92,255,0.06)" stroke="rgba(139,92,255,0.12)" strokeWidth="1"/>
                <path d="M-5-3h10M-3 0h6M-4 3h8" stroke="#8B5CFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
              </g>

              {/* ══ PANDA mascot (Mel) — sitting left ══ */}
              <g transform="translate(190, 340)">
                {/* Body */}
                <ellipse cx="0" cy="12" rx="18" ry="22" fill="#161930" stroke="rgba(139,92,255,0.25)" strokeWidth="1.2"/>
                {/* Ears */}
                <circle cx="-12" cy="-22" r="8" fill="#161930" stroke="rgba(139,92,255,0.2)" strokeWidth="1"/>
                <circle cx="12" cy="-22" r="8" fill="#161930" stroke="rgba(139,92,255,0.2)" strokeWidth="1"/>
                <circle cx="-12" cy="-22" r="4" fill="#0d0f22"/>
                <circle cx="12" cy="-22" r="4" fill="#0d0f22"/>
                {/* Head */}
                <circle cx="0" cy="-12" r="16" fill="#161930" stroke="rgba(139,92,255,0.25)" strokeWidth="1.2"/>
                {/* Eye patches */}
                <ellipse cx="-6" cy="-14" rx="5" ry="4" fill="#0d0f22"/>
                <ellipse cx="6" cy="-14" rx="5" ry="4" fill="#0d0f22"/>
                {/* Eyes */}
                <circle cx="-6" cy="-14" r="1.5" fill="#8B5CFF" opacity="0.7"/>
                <circle cx="6" cy="-14" r="1.5" fill="#8B5CFF" opacity="0.7"/>
                {/* Nose */}
                <ellipse cx="0" cy="-9" rx="2.5" ry="1.5" fill="#2d2260"/>
                {/* Arms reaching toward portal */}
                <path d="M16 0 Q25 -5 28 -12" stroke="rgba(139,92,255,0.2)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M-16 2 Q-22 -8 -18 -16" stroke="rgba(139,92,255,0.15)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </g>

              {/* ══ FOX mascot (Flora) — sitting right ══ */}
              <g transform="translate(290, 345)">
                {/* Tail */}
                <path d="M15 20 Q30 10 28 -5 Q26 -10 20 -5 Q15 5 12 15" fill="#161930" stroke="rgba(245,158,11,0.2)" strokeWidth="1"/>
                {/* Body */}
                <ellipse cx="0" cy="12" rx="15" ry="20" fill="#161930" stroke="rgba(245,158,11,0.25)" strokeWidth="1.2"/>
                {/* Ears */}
                <path d="M-9-28 L-12-12 L-2-16 Z" fill="#161930" stroke="rgba(245,158,11,0.25)" strokeWidth="1"/>
                <path d="M9-28 L12-12 L2-16 Z" fill="#161930" stroke="rgba(245,158,11,0.25)" strokeWidth="1"/>
                <path d="M-8-25 L-10-14 L-4-16 Z" fill="rgba(245,158,11,0.08)"/>
                <path d="M8-25 L10-14 L4-16 Z" fill="rgba(245,158,11,0.08)"/>
                {/* Head */}
                <circle cx="0" cy="-10" r="14" fill="#161930" stroke="rgba(245,158,11,0.25)" strokeWidth="1.2"/>
                {/* Snout */}
                <ellipse cx="0" cy="-5" rx="6" ry="4" fill="#111428"/>
                {/* Eyes */}
                <circle cx="-5" cy="-13" r="1.5" fill="#F5B84E" opacity="0.7"/>
                <circle cx="5" cy="-13" r="1.5" fill="#F5B84E" opacity="0.7"/>
                {/* Nose */}
                <circle cx="0" cy="-7" r="2" fill="#2d2260"/>
                {/* Whiskers */}
                <line x1="-8" y1="-6" x2="-16" y2="-8" stroke="rgba(245,158,11,0.15)" strokeWidth="0.8"/>
                <line x1="-8" y1="-4" x2="-16" y2="-3" stroke="rgba(245,158,11,0.15)" strokeWidth="0.8"/>
                <line x1="8" y1="-6" x2="16" y2="-8" stroke="rgba(245,158,11,0.15)" strokeWidth="0.8"/>
                <line x1="8" y1="-4" x2="16" y2="-3" stroke="rgba(245,158,11,0.15)" strokeWidth="0.8"/>
              </g>

              {/* Ground shadow */}
              <ellipse cx="240" cy="380" rx="100" ry="6" fill="rgba(139,92,255,0.05)"/>

              <defs>
                <linearGradient id="portalGrad" x1="240" y1="30" x2="240" y2="330" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#B8A0FF"/><stop offset="50%" stopColor="#8B5CFF"/><stop offset="100%" stopColor="#6D39FF"/>
                </linearGradient>
                <linearGradient id="portalInner" x1="240" y1="70" x2="240" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4C4FF"/><stop offset="40%" stopColor="#8B5CFF"/><stop offset="100%" stopColor="#4A1FB8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         4 PILLARS
         ══════════════════════════════════════ */}
      <section className="content-container pb-16 lg:pb-24">
        <div className="glass-card p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-[var(--border-glass)]">
            {pillars.map((p, i) => (
              <div key={i} className="text-center lg:px-6 first:lg:pl-0 last:lg:pr-0">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-3" style={{ backgroundColor: p.color + "15", border: `1px solid ${p.color}25` }}>
                  <span className="text-lg" aria-hidden="true">{p.icon}</span>
                </div>
                <h3 className="font-display text-display-md font-semibold text-[var(--text-primary)] mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         ABOUT + AUDIENCE (2 cards side by side)
         ══════════════════════════════════════ */}
      <section className="content-container pb-16 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* About card */}
          <div className="glass-card p-8 flex flex-col">
            <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] mb-4">Sobre o projeto</h2>
            <p className="text-sm leading-[1.8] text-[var(--text-secondary)] mb-6">
              O Sentir para Compreender nasceu do desejo de criar pontes entre conhecimento científico, empatia e inclusão.
              Acreditamos que a avaliação psicológica é um caminho para compreender pessoas em sua totalidade.
            </p>
            {/* Illustration + stats */}
            <div className="flex items-end gap-6 mt-auto">
              <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-600/10 to-violet-900/20 border border-[var(--border-glass)] flex items-center justify-center">
                <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 opacity-60">
                  <circle cx="40" cy="32" r="18" stroke="#8B5CFF" strokeWidth="1.5" fill="none"/>
                  <path d="M32 32c0-5 3-8 8-8s8 3 8 8M28 36c-2 0-3 1-3 3s2 3 3 2M52 36c2 0 3 1 3 3s-2 3-3 2" stroke="#8B5CFF" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  <path d="M40 50v12M32 55h16" stroke="#B8AED1" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </div>
              <div className="space-y-3 flex-1">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600/10 text-sm" aria-hidden="true">{s.icon}</span>
                    <div>
                      <p className="text-lg font-bold text-[var(--text-primary)] leading-none">{s.value}</p>
                      <p className="text-xs text-[var(--text-muted)]">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/sobre" className="btn-secondary mt-6 self-start text-sm">
              Conheça nossa história
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </Link>
          </div>

          {/* Audience card */}
          <div className="glass-card p-8 flex flex-col">
            <h2 className="font-display text-display-lg font-bold text-[var(--text-primary)] mb-2">Para quem é este espaço?</h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6">
              Para todas as pessoas que desejam aprender, refletir, se compreender melhor e construir relações mais humanas e conscientes.
            </p>
            <div className="space-y-3 flex-1">
              {audiences.map((a, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card-soft)] p-4 transition-all hover:border-[var(--border-glass-strong)]">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-violet-600/10 text-base flex-shrink-0" aria-hidden="true">{a.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{a.title}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/rede-de-apoio" className="btn-secondary mt-6 self-start text-sm">
              Ver todos os públicos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         CTA BANNER
         ══════════════════════════════════════ */}
      <section className="content-container pb-16 lg:pb-24">
        <div className="relative rounded-banner overflow-hidden" style={{ background: "var(--bg-banner)" }}>
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 20% 50%, rgba(139,92,255,0.4), transparent 60%)" }} aria-hidden="true" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-violet-600/20 border border-violet-500/20 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E35CC7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Você não está sozinho.</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Estamos juntos para sentir, compreender e transformar.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/rede-de-apoio" className="btn-primary whitespace-nowrap">
                Rede de Apoio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </Link>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-20 opacity-20" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-violet-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="absolute bottom-6 right-8 opacity-15" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-violet-400"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
      </section>
    </div>
  );
}
