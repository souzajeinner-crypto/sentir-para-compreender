/**
 * Dados de navegação do site — atualizado com todas as páginas.
 *
 * mainNavItems → Header desktop/mobile
 * navGroups → Agrupamentos com sublinks (para megas ou dropdowns futuros)
 * footerNavItems → Footer
 */

export interface NavItem {
  label: string;
  href: string;
  description: string;
  icon?: string;
  /** Sub-itens opcionais para dropdown */
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "Início",
    href: "/",
    description: "Página inicial do projeto",
    icon: "home",
  },
  {
    label: "Avaliação Psicológica",
    href: "/teoria",
    description: "Fundamentos teóricos sobre avaliação psicológica e deficiência",
    icon: "book",
  },
  {
    label: "Experiências",
    href: "/experiencias",
    description: "Vivências sobre barreiras sensoriais, comunicacionais e sociais",
    icon: "sparkles",
    children: [
      { label: "Experiências Originais", href: "/experiencias", description: "4 experiências sobre barreiras" },
      { label: "Experiências Imersivas", href: "/experiencias-imersivas", description: "Ansiedade, masking, dissociação e sobrecarga" },
    ],
  },
  {
    label: "Área Sonora",
    href: "/sonora",
    description: "Trilhas sonoras educativas com transcrição",
    icon: "headphones",
  },
  {
    label: "Quiz",
    href: "/quiz",
    description: "Quiz reflexivo sobre inclusão e acessibilidade",
    icon: "clipboard",
  },
  {
    label: "Perspectivas",
    href: "/perspectivas",
    description: "Feed acadêmico — reflexões de autores clássicos",
    icon: "users",
  },
  {
    label: "Relatos",
    href: "/relatos",
    description: "Depoimentos sobre inclusão e barreiras",
    icon: "message",
  },
  {
    label: "Artigos",
    href: "/artigos",
    description: "Artigos produzidos pelo grupo",
    icon: "file-text",
  },
  {
    label: "Kids",
    href: "/infantil",
    description: "Área infantil e neurodivergente",
    icon: "rainbow",
    children: [
      { label: "Área Infantil", href: "/infantil", description: "Hub principal" },
      { label: "Emoções", href: "/infantil/emocoes", description: "Emoções explicadas para crianças" },
      { label: "Autismo", href: "/infantil/autismo", description: "Entendendo o TEA" },
      { label: "Sobrecarga", href: "/infantil/sobrecarga", description: "Experiência imersiva" },
      { label: "Jogos", href: "/infantil/jogos", description: "Jogos emocionais" },
      { label: "Calma", href: "/infantil/autorregulacao", description: "Ferramentas de paz" },
      { label: "Filmes", href: "/infantil/filmes", description: "Aprender assistindo" },
    ],
  },
  {
    label: "Mascotes",
    href: "/mascotes",
    description: "Conheça a turma do Sentir",
    icon: "panda",
    children: [
      { label: "Mascotes", href: "/mascotes", description: "Conheça os personagens" },
      { label: "Jornal do Sentir", href: "/jornal", description: "Histórias narradas pelos mascotes" },
      { label: "Podcast", href: "/podcast", description: "Mini episódios de acolhimento" },
    ],
  },
  {
    label: "Rede de Apoio",
    href: "/rede-de-apoio",
    description: "Você não está sozinho — recursos e acolhimento",
    icon: "heart",
  },
  {
    label: "Sobre",
    href: "/sobre",
    description: "O projeto, equipe e compromisso ético",
    icon: "info",
  },
];

export const footerNavItems: NavItem[] = [
  { label: "Acessibilidade", href: "/acessibilidade", description: "Compromisso com acessibilidade digital", icon: "accessibility" },
  { label: "Sobre o Projeto", href: "/sobre", description: "Créditos, equipe e compromisso ético", icon: "info" },
  { label: "Rede de Apoio", href: "/rede-de-apoio", description: "Recursos de apoio psicológico", icon: "heart" },
  { label: "CVV: 188", href: "tel:188", description: "Centro de Valorização da Vida", icon: "phone" },
];

export const allNavItems: NavItem[] = [
  ...mainNavItems,
  ...mainNavItems.flatMap((item) => item.children ?? []),
  ...footerNavItems,
];
