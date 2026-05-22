/**
 * Metadados globais do site.
 *
 * Centralizar aqui evita repetição em layouts e componentes.
 * Quando o grupo definir identidade visual, atualizar este arquivo.
 *
 * [ASSUNÇÃO] Dados provisórios — ajustar nome da instituição, curso, etc.
 */
export const siteConfig = {
  name: "Sentir para Compreender",
  subtitle: "Avaliação Psicológica para Pessoas com Deficiência",
  tagline:
    "A deficiência não está apenas no indivíduo, mas também nas barreiras impostas pela sociedade.",
  description:
    "Site acadêmico interativo sobre avaliação psicológica para pessoas com deficiência. " +
    "Uma experiência acessível e impactante sobre inclusão, barreiras e ética profissional.",

  // Dados do grupo
  institution: "[Nome da Instituição]",
  course: "Psicologia",
  discipline: "Avaliação Psicológica",
  professor: "[Nome do(a) Professor(a)]",
  semester: "2026.1",
  city: "Uberlândia",
  state: "MG",

  // [ASSUNÇÃO] Preencher quando o site for publicado
  url: "https://sentir-para-compreender.vercel.app",

  // Contato do grupo para termos de consentimento
  contactEmail: "[email do grupo]",
} as const;

export type SiteConfig = typeof siteConfig;
