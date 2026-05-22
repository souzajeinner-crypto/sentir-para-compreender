import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Acessibilidade — Sentir para Compreender", description: "Nosso compromisso com acessibilidade digital e as ferramentas implementadas." };

const features = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: "Contraste e cores", desc: "Modo escuro com alto contraste. Cores testadas para conformidade WCAG 2.1 AA. Informações nunca dependem apenas de cor." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>, title: "Tipografia acessível", desc: "Fontes legíveis, tamanhos adequados, espaçamento confortável. O site respeita as configurações de zoom do navegador." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: "Navegação por teclado", desc: "Todas as funcionalidades acessíveis via teclado. Foco visível em todos os elementos interativos. Skip links para navegação rápida." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Leitores de tela", desc: "Marcação semântica HTML5, landmarks ARIA, alt text em imagens, labels em formulários. Testado com NVDA e VoiceOver." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>, title: "Transcrições", desc: "Todo conteúdo em áudio possui transcrição completa. Modo leitura disponível na Área Sonora." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>, title: "Avisos de conteúdo", desc: "Experiências sensoriais possuem avisos prévios, controle de intensidade e opção de saída." },
];

export default function AcessibilidadePage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Acessibilidade</li></ol></nav>

        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">Compromisso com a inclusão</p>
          <h1 className="mt-3 font-display text-heading-xl font-bold text-[var(--color-text)] sm:text-hero">Acessibilidade</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
            Este projeto foi construído com acessibilidade como princípio fundamental, não como complemento. Conheça as ferramentas e práticas que implementamos.
          </p>
        </header>

        {/* WCAG badge */}
        <div className="mb-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            </span>
            <div>
              <p className="text-sm font-bold text-emerald-300">WCAG 2.1 — Nível AA</p>
              <p className="text-xs text-emerald-300/60">Diretrizes de Acessibilidade para Conteúdo Web</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[var(--color-text-dim)]">
            Seguimos as diretrizes WCAG 2.1 nível AA como baseline. Nosso objetivo é garantir que o conteúdo seja perceptível, operável, compreensível e robusto para todos os usuários.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/8 text-violet-400 mb-3" aria-hidden="true">{f.icon}</span>
              <h3 className="text-sm font-bold text-[var(--color-text)]">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-dim)]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Report issues */}
        <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-[var(--color-text)]">Encontrou uma barreira?</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Acessibilidade é um processo contínuo. Se você encontrou alguma dificuldade ao navegar este site, queremos saber. Sua experiência nos ajuda a melhorar.
          </p>
          <p className="mt-4 text-sm text-[var(--color-text-dim)]">
            Entre em contato pelo e-mail: <span className="text-violet-400 font-medium">acessibilidade@sentirparacompreender.com.br</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>Voltar ao início</Link>
        </div>
      </div>
    </div>
  );
}
