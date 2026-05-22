import { SectionIcon } from "@/components/ui/SectionIcon";
import type { TheorySection as SectionData } from "@/content/teoria/sections";

/**
 * TheorySection — Componente reutilizável para seções da área teórica.
 *
 * Cada seção tem:
 * - Indicador lateral colorido (acento)
 * - Ícone + título como heading
 * - Parágrafos de conteúdo
 * - Conceitos-chave em grid
 * - Citação de destaque (pull quote)
 * - Perguntas reflexivas
 *
 * NOTA PEDAGÓGICA:
 * A largura máxima do texto é limitada a ~65 caracteres por linha
 * (max-w-prose) para leitura confortável. O espaçamento vertical
 * generoso entre parágrafos e seções facilita a digestão do conteúdo.
 *
 * Semântica: cada seção é um <section> com aria-labelledby apontando
 * para o heading, permitindo que leitores de tela naveguem por regiões.
 */

const accentColors = {
  violet: {
    border: "border-l-violet-500",
    iconText: "text-violet-400",
    conceptBg: "bg-violet-500/5 border-violet-500/15",
    conceptTerm: "text-violet-300",
    quoteBorder: "border-violet-500/30",
    quoteIcon: "text-violet-400/40",
    reflectionBg: "bg-violet-500/5 border-violet-500/15",
  },
  rose: {
    border: "border-l-rose-400",
    iconText: "text-rose-400",
    conceptBg: "bg-rose-500/5 border-rose-500/15",
    conceptTerm: "text-rose-300",
    quoteBorder: "border-rose-500/30",
    quoteIcon: "text-rose-400/40",
    reflectionBg: "bg-rose-500/5 border-rose-500/15",
  },
  amber: {
    border: "border-l-amber-400",
    iconText: "text-amber-400",
    conceptBg: "bg-amber-500/5 border-amber-500/15",
    conceptTerm: "text-amber-300",
    quoteBorder: "border-amber-400/30",
    quoteIcon: "text-amber-400/40",
    reflectionBg: "bg-amber-500/5 border-amber-500/15",
  },
  cyan: {
    border: "border-l-cyan-400",
    iconText: "text-cyan-400",
    conceptBg: "bg-cyan-500/5 border-cyan-500/15",
    conceptTerm: "text-cyan-300",
    quoteBorder: "border-cyan-400/30",
    quoteIcon: "text-cyan-400/40",
    reflectionBg: "bg-cyan-500/5 border-cyan-500/15",
  },
  emerald: {
    border: "border-l-emerald-400",
    iconText: "text-emerald-400",
    conceptBg: "bg-emerald-500/5 border-emerald-500/15",
    conceptTerm: "text-emerald-300",
    quoteBorder: "border-emerald-400/30",
    quoteIcon: "text-emerald-400/40",
    reflectionBg: "bg-emerald-500/5 border-emerald-500/15",
  },
} as const;

export function TheorySectionComponent({
  section,
}: {
  section: SectionData;
}) {
  const colors = accentColors[section.accent];
  const headingId = `theory-${section.id}`;

  return (
    <section
      className={`border-l-4 ${colors.border} pl-6 sm:pl-8`}
      aria-labelledby={headingId}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className={colors.iconText} aria-hidden="true">
          <SectionIcon name={section.icon} size={24} />
        </span>
        <h2
          id={headingId}
          className="font-display text-heading-lg font-bold text-[var(--color-text)]"
        >
          {section.title}
        </h2>
      </div>

      {/* Parágrafos */}
      <div className="mt-6 space-y-4 max-w-prose">
        {section.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-[var(--color-text-muted)]"
          >
            {p}
          </p>
        ))}
      </div>

      {/* Pull Quote */}
      {section.pullQuote && (
        <blockquote
          className={`relative mt-8 border-l-2 ${colors.quoteBorder} pl-6 py-2 max-w-lg`}
        >
          <span
            className={`absolute -left-1 -top-2 text-3xl font-serif ${colors.quoteIcon}`}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="text-base italic leading-relaxed text-[var(--color-text)]">
            {section.pullQuote.text}
          </p>
          <footer className="mt-2 text-sm text-[var(--color-text-dim)]">
            — {section.pullQuote.source}
          </footer>
        </blockquote>
      )}

      {/* Conceitos-chave */}
      {section.keyConcepts && section.keyConcepts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-heading-sm font-display font-semibold text-[var(--color-text)]">
            {section.keyConceptsTitle || "Conceitos-chave"}
          </h3>
          <dl className="mt-4 space-y-3">
            {section.keyConcepts.map((concept) => (
              <div
                key={concept.term}
                className={`rounded-card-sm border ${colors.conceptBg} p-4`}
              >
                <dt className={`text-sm font-semibold ${colors.conceptTerm}`}>
                  {concept.term}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {concept.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Perguntas reflexivas */}
      {section.reflectionQuestions &&
        section.reflectionQuestions.length > 0 && (
          <div
            className={`mt-8 rounded-card border ${colors.reflectionBg} p-5`}
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={colors.iconText}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Para refletir
            </h3>
            <ul className="mt-3 space-y-2" role="list">
              {section.reflectionQuestions.map((q, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-[var(--color-text-muted)]"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        )}
    </section>
  );
}
