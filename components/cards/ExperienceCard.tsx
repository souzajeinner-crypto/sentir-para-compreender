import Link from "next/link";
import { SectionIcon } from "@/components/ui/SectionIcon";
import type { Experience } from "@/data/experiences";

const accentStyles = {
  violet: { iconColor: "text-violet-400", borderHover: "hover:border-violet-600/50", glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]", gradient: "from-violet-600/10", badge: "bg-violet-500/10 text-violet-300 border-violet-500/20" },
  cyan: { iconColor: "text-cyan-400", borderHover: "hover:border-cyan-500/40", glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]", gradient: "from-cyan-500/10", badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
  rose: { iconColor: "text-rose-400", borderHover: "hover:border-rose-500/40", glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.12)]", gradient: "from-rose-500/10", badge: "bg-rose-500/10 text-rose-300 border-rose-500/20" },
  amber: { iconColor: "text-amber-400", borderHover: "hover:border-amber-500/40", glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.12)]", gradient: "from-amber-500/10", badge: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
} as const;

export function ExperienceCard({ experience }: { experience: Experience }) {
  const style = accentStyles[experience.accent];

  return (
    <article className={`group relative overflow-hidden rounded-card border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] transition-all duration-300 ${style.borderHover} ${style.glow} hover:bg-[var(--color-bg-panel-hover)]`}>
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${style.gradient} to-transparent pointer-events-none`} aria-hidden="true" />
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <span className={style.iconColor} aria-hidden="true"><SectionIcon name={experience.icon} size={28} /></span>
          {experience.contentWarning && (
            <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-rose-300 uppercase tracking-wider">Aviso</span>
          )}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-text)]">
          <Link href={`/experiencias/${experience.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            <span className="focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] rounded">{experience.title}</span>
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--color-text-dim)]">{experience.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{experience.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${style.badge}`}>{experience.estimatedDuration}</span>
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${experience.sensoryIntensity === "alta" ? "bg-rose-500/10 text-rose-300 border-rose-500/20" : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"}`}>Intensidade {experience.sensoryIntensity}</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-text-dim)] transition-all duration-300 group-hover:text-[var(--color-text-muted)] group-hover:translate-x-1" aria-hidden="true">
            Iniciar <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </span>
        </div>
      </div>
    </article>
  );
}
