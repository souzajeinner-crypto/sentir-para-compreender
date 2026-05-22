import type { TheoryReference } from "@/content/teoria/sections";

/**
 * ReferenceList — Lista de referências acadêmicas com ícones por tipo.
 *
 * Tipos suportados: book, article, law, resolution, convention, website.
 * Cada tipo tem um ícone diferente para facilitar a identificação visual.
 */

const typeLabels: Record<TheoryReference["type"], string> = {
  book: "Livro",
  article: "Artigo",
  law: "Lei",
  resolution: "Resolução",
  convention: "Convenção",
  website: "Website",
};

const typeIcons: Record<TheoryReference["type"], string> = {
  book: "📕",
  article: "📄",
  law: "⚖️",
  resolution: "📋",
  convention: "🌐",
  website: "🔗",
};

export function ReferenceList({
  references,
}: {
  references: TheoryReference[];
}) {
  return (
    <section aria-labelledby="references-heading">
      <h2
        id="references-heading"
        className="font-display text-heading-lg font-bold text-[var(--color-text)]"
      >
        Referências
      </h2>
      <p className="mt-2 text-sm text-[var(--color-text-dim)]">
        Fontes acadêmicas e normativas utilizadas nesta seção.
      </p>

      <ol
        className="mt-6 space-y-3"
        role="list"
        aria-label="Lista de referências"
      >
        {references.map((ref, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-card-sm border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)]/50 p-4"
          >
            <span
              className="mt-0.5 text-xs"
              aria-label={typeLabels[ref.type]}
              title={typeLabels[ref.type]}
            >
              {typeIcons[ref.type]}
            </span>
            <span className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              {ref.text}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
