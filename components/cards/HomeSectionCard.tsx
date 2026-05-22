import Link from "next/link";
import { SectionIcon } from "@/components/ui/SectionIcon";
import type { HomeSectionCard as CardData } from "@/data/home";

/**
 * HomeSectionCard — Card de navegação por seções na página inicial.
 *
 * Cada card tem:
 * - Ícone SVG com cor de acento
 * - Título e descrição
 * - Link que cobre toda a área do card (acessível)
 * - Efeito de hover com glow na borda e elevação
 * - Gradiente sutil no topo baseado na cor de acento
 */

const accentStyles = {
  violet: {
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-600/50",
    glowShadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    gradientTop: "from-violet-600/10 to-transparent",
    tagBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  rose: {
    iconColor: "text-rose-400",
    borderHover: "hover:border-rose-500/40",
    glowShadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.12)]",
    gradientTop: "from-rose-500/10 to-transparent",
    tagBg: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  },
  amber: {
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    glowShadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.12)]",
    gradientTop: "from-amber-500/10 to-transparent",
    tagBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  cyan: {
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
    glowShadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]",
    gradientTop: "from-cyan-500/10 to-transparent",
    tagBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  emerald: {
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    glowShadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.12)]",
    gradientTop: "from-emerald-500/10 to-transparent",
    tagBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
} as const;

export function HomeSectionCard({ card }: { card: CardData }) {
  const style = accentStyles[card.accent];

  return (
    <article
      className={`
        group relative overflow-hidden rounded-card
        border border-[var(--color-border-subtle)]
        bg-[var(--color-bg-panel)]
        transition-all duration-300
        ${style.borderHover} ${style.glowShadow}
        hover:bg-[var(--color-bg-panel-hover)]
      `}
    >
      {/* Gradiente sutil no topo do card */}
      <div
        className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${style.gradientTop} pointer-events-none`}
        aria-hidden="true"
      />

      <div className="relative p-6">
        {/* Ícone */}
        <div className={`mb-4 ${style.iconColor}`}>
          <SectionIcon name={card.icon} size={28} />
        </div>

        {/* Título */}
        <h3 className="text-lg font-display font-bold text-[var(--color-text)]">
          <Link
            href={card.href}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            <span className="focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] rounded">
              {card.title}
            </span>
          </Link>
        </h3>

        {/* Descrição */}
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {card.description}
        </p>

        {/* Seta indicativa (aparece no hover) */}
        <div
          className="mt-4 flex items-center gap-1 text-xs font-medium text-[var(--color-text-dim)] transition-all duration-300 group-hover:text-[var(--color-text-muted)] group-hover:translate-x-1"
          aria-hidden="true"
        >
          Explorar
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12,5 19,12 12,19" />
          </svg>
        </div>
      </div>
    </article>
  );
}
