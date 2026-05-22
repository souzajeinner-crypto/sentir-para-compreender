/**
 * Dados da Página Inicial — Módulo 2.
 *
 * Todo o conteúdo textual da home vive aqui, separado dos componentes,
 * facilitando edição pelo grupo sem mexer em código de UI.
 */

export interface HomeSectionCard {
  title: string;
  description: string;
  href: string;
  /** Nome do ícone SVG inline */
  icon: string;
  /** Cor de acento: violet, rose, amber, cyan, emerald */
  accent: "violet" | "rose" | "amber" | "cyan" | "emerald";
}

export const heroContent = {
  /** Título principal do site — renderizado com gradiente */
  title: "Sentir para Compreender",
  /** Subtítulo abaixo do título */
  subtitle: "Avaliação Psicológica para Pessoas com Deficiência",
  /** Frase guia/epígrafe */
  quote:
    "A deficiência não está apenas no indivíduo, mas também nas barreiras impostas pela sociedade.",
  /** CTA principal */
  ctaPrimary: {
    label: "Iniciar a Jornada",
    href: "/teoria",
  },
  /** CTA secundário */
  ctaSecondary: {
    label: "Explorar Perspectivas",
    href: "/perspectivas",
  },
};

export const introContent = {
  heading: "Uma experiência interativa sobre inclusão",
  paragraphs: [
    "Este projeto acadêmico convida você a vivenciar, refletir e compreender os desafios da avaliação psicológica para pessoas com deficiência.",
    "Através de experiências sensoriais imersivas, reflexões teóricas, perspectivas de autores da Psicologia e depoimentos reais, construímos um espaço de aprendizagem que coloca a acessibilidade no centro.",
  ],
};

export const sectionCards: HomeSectionCard[] = [
  {
    title: "Avaliação Psicológica",
    description:
      "Fundamentos teóricos sobre avaliação psicológica, deficiência, modelo social e capacitismo.",
    href: "/teoria",
    icon: "book",
    accent: "violet",
  },
  {
    title: "Experiências Imersivas",
    description:
      "Vivências breves que simulam barreiras sensoriais, comunicacionais e sociais.",
    href: "/experiencias",
    icon: "sparkles",
    accent: "rose",
  },
  {
    title: "Perspectivas da Psicologia",
    description:
      "Como Freud, Lacan, Klein, Winnicott, Rogers e outros pensariam inclusão e deficiência.",
    href: "/perspectivas",
    icon: "users",
    accent: "cyan",
  },
  {
    title: "Relatos e Depoimentos",
    description:
      "Histórias de pessoas com deficiência sobre inclusão, barreiras e superação.",
    href: "/relatos",
    icon: "message",
    accent: "amber",
  },
  {
    title: "Quiz Reflexivo",
    description:
      "Teste seus conhecimentos e preconceitos sobre acessibilidade e inclusão.",
    href: "/quiz",
    icon: "clipboard",
    accent: "emerald",
  },
  {
    title: "Artigos do Grupo",
    description:
      "Produção acadêmica do grupo sobre avaliação psicológica e deficiência.",
    href: "/artigos",
    icon: "file-text",
    accent: "violet",
  },
];

export const closingQuote = {
  text: "Cada teoria oferece um olhar único. A soma delas nos aproxima da complexidade humana.",
  /** CTA de fechamento */
  cta: {
    label: "Ver mais reflexões",
    href: "/perspectivas",
  },
};
