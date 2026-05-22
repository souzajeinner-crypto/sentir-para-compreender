/**
 * Perspectivas da Psicologia — Módulo 7.
 *
 * Feed estilo "rede social acadêmica" com posts de autores
 * clássicos da psicologia, reinterpretados pelo grupo para
 * discutir avaliação psicológica e deficiência.
 *
 * AVISO EDITORIAL: Os textos são interpretações acadêmicas
 * livres, não citações diretas dos autores. Representam como
 * cada abordagem PODERIA dialogar com a temática da inclusão.
 *
 * [ASSUNÇÃO] Os textos são provisórios e devem ser revisados
 * pelo grupo com orientação docente.
 */

export interface PerspectiveAuthor {
  id: string;
  name: string;
  approach: string;
  /** Corrente teórica para filtro */
  school: "psicanalise" | "humanista" | "desenvolvimento" | "relacional";
  /** Cor do avatar */
  avatarColor: string;
  /** Iniciais para avatar */
  initials: string;
  /** Bio breve */
  bio: string;
}

export interface PerspectivePost {
  id: string;
  authorId: string;
  title: string;
  content: string[];
  /** Temas abordados */
  themes: string[];
  /** Pergunta reflexiva */
  reflection?: string;
}

export const perspectivasIntro = {
  title: "Perspectivas da Psicologia",
  subtitle: "Diálogos teóricos sobre inclusão",
  description:
    "Como diferentes abordagens da psicologia podem contribuir para uma avaliação " +
    "mais humana e inclusiva? Explore reflexões inspiradas em autores clássicos, " +
    "reinterpretadas para o contexto da deficiência e da acessibilidade.",
  editorialNotice:
    "Os textos abaixo são interpretações acadêmicas livres, elaboradas pelo grupo de " +
    "estudos. Não são citações diretas dos autores. Representam como cada abordagem " +
    "poderia dialogar com a temática da inclusão na avaliação psicológica.",
};

export const authors: PerspectiveAuthor[] = [
  {
    id: "freud",
    name: "Sigmund Freud",
    approach: "Psicanálise",
    school: "psicanalise",
    avatarColor: "#8b5cf6",
    initials: "SF",
    bio: "Fundador da psicanálise. Explorou o inconsciente, os mecanismos de defesa e a importância da escuta na compreensão do sujeito.",
  },
  {
    id: "lacan",
    name: "Jacques Lacan",
    approach: "Psicanálise Lacaniana",
    school: "psicanalise",
    avatarColor: "#6366f1",
    initials: "JL",
    bio: "Releitura estruturalista da psicanálise. Enfatizou a linguagem, o desejo e a constituição do sujeito pela relação com o Outro.",
  },
  {
    id: "klein",
    name: "Melanie Klein",
    approach: "Psicanálise Kleiniana",
    school: "relacional",
    avatarColor: "#ec4899",
    initials: "MK",
    bio: "Pioneira na psicanálise infantil. Desenvolveu a teoria das relações objetais e a importância do mundo interno.",
  },
  {
    id: "winnicott",
    name: "Donald Winnicott",
    approach: "Psicanálise das Relações Objetais",
    school: "relacional",
    avatarColor: "#14b8a6",
    initials: "DW",
    bio: "Pediatra e psicanalista. Desenvolveu conceitos como 'mãe suficientemente boa', 'objeto transicional' e 'verdadeiro self'.",
  },
  {
    id: "erikson",
    name: "Erik Erikson",
    approach: "Psicologia do Desenvolvimento",
    school: "desenvolvimento",
    avatarColor: "#f59e0b",
    initials: "EE",
    bio: "Teorizou os estágios do desenvolvimento psicossocial ao longo de toda a vida, com ênfase na identidade.",
  },
  {
    id: "rogers",
    name: "Carl Rogers",
    approach: "Abordagem Centrada na Pessoa",
    school: "humanista",
    avatarColor: "#22c55e",
    initials: "CR",
    bio: "Fundador da abordagem centrada na pessoa. Defendeu a empatia, a congruência e a aceitação incondicional.",
  },
];

export const posts: PerspectivePost[] = [
  {
    id: "post-freud-1",
    authorId: "freud",
    title: "O sujeito além do diagnóstico",
    content: [
      "Na perspectiva psicanalítica, o sujeito nunca se reduz a um diagnóstico. O inconsciente não conhece categorias médicas — ele fala através de sintomas, sonhos, atos falhos e repetições.",
      "Quando avaliamos uma pessoa com deficiência, corremos o risco de escutar apenas o que a deficiência 'diz' sobre ela, silenciando o que o sujeito tem a dizer sobre si mesmo.",
      "A escuta analítica convida a suspender nossos pressupostos. Antes de aplicar um teste, precisamos perguntar: o que este sujeito deseja comunicar? O que está por trás da demanda?",
    ],
    themes: ["inconsciente", "escuta", "diagnóstico"],
    reflection: "Quando você avalia alguém, escuta o sujeito ou o rótulo?",
  },
  {
    id: "post-lacan-1",
    authorId: "lacan",
    title: "A deficiência como significante do Outro",
    content: [
      "Para Lacan, o sujeito se constitui na relação com o Outro — a linguagem, a cultura, as instituições. A deficiência, nesse sentido, é também um significante: algo que a sociedade nomeia, classifica e posiciona.",
      "Ser 'deficiente' não é um atributo natural — é uma posição discursiva que o Outro social produz. A avaliação psicológica, como prática institucional, participa dessa produção de significados.",
      "O desafio ético é não reduzir o sujeito ao significante 'deficiente'. Há um sujeito desejante ali, que excede qualquer categoria diagnóstica.",
    ],
    themes: ["linguagem", "significante", "Outro"],
    reflection: "De que forma a linguagem que usamos na avaliação produz (ou reproduz) a deficiência?",
  },
  {
    id: "post-klein-1",
    authorId: "klein",
    title: "O mundo interno e as barreiras externas",
    content: [
      "Klein nos ensinou que o mundo interno é rico, complexo e ativo desde os primeiros meses de vida. Fantasias, ansiedades e mecanismos de defesa compõem a experiência subjetiva.",
      "Para uma criança com deficiência, o mundo externo frequentemente apresenta barreiras que impactam a formação desse mundo interno. Mas isso não significa um mundo interno empobrecido — significa um mundo interno que se organiza de formas singulares.",
      "Na avaliação psicológica infantil, precisamos de instrumentos que acessem essa riqueza interna, não que a meçam por padrões que ignoram a singularidade.",
    ],
    themes: ["mundo interno", "infância", "singularidade"],
    reflection: "Seus instrumentos de avaliação infantil conseguem acessar o mundo interno, ou apenas comportamentos observáveis?",
  },
  {
    id: "post-winnicott-1",
    authorId: "winnicott",
    title: "O ambiente facilitador na avaliação",
    content: [
      "Winnicott nos ensinou que o desenvolvimento saudável depende de um 'ambiente facilitador' — um espaço que se adapta às necessidades do indivíduo, não o contrário.",
      "Na avaliação psicológica, o consultório é esse ambiente. Se ele não é acessível — física, sensorial ou comunicacionalmente — não é facilitador. É uma barreira disfarçada de espaço profissional.",
      "O conceito de 'mãe suficientemente boa' pode ser transposto: precisamos ser psicólogos 'suficientemente bons' — que reconhecem suas limitações e se adaptam às necessidades de quem avaliamos.",
    ],
    themes: ["ambiente facilitador", "adaptação", "holding"],
    reflection: "Seu espaço de atendimento é um ambiente facilitador para TODAS as pessoas?",
  },
  {
    id: "post-erikson-1",
    authorId: "erikson",
    title: "Identidade e deficiência ao longo da vida",
    content: [
      "Erikson descreveu o desenvolvimento psicossocial como uma série de crises que moldam a identidade. Para pessoas com deficiência, essas crises ganham camadas adicionais.",
      "A crise de 'identidade vs. confusão de papéis' na adolescência, por exemplo, é vivida em uma sociedade que frequentemente impõe identidades limitadas: 'o cadeirante', 'a cega', 'o autista'.",
      "A avaliação psicológica pode contribuir para que a pessoa construa uma narrativa identitária que integre — mas não se reduza a — a deficiência. Potencialidades, desejos e projetos de vida devem estar no centro.",
    ],
    themes: ["identidade", "desenvolvimento", "ciclo vital"],
    reflection: "Sua avaliação ajuda a pessoa a construir identidade ou a reforçar rótulos?",
  },
  {
    id: "post-rogers-1",
    authorId: "rogers",
    title: "Empatia e aceitação incondicional na inclusão",
    content: [
      "Rogers defendeu que o crescimento pessoal acontece quando há empatia, congruência e aceitação incondicional positiva. Esses três pilares são fundamentais na avaliação inclusiva.",
      "Empatia não é sentir pena — é se esforçar genuinamente para compreender a experiência do outro. Aceitar incondicionalmente não é concordar com tudo — é reconhecer o valor da pessoa independentemente de suas características.",
      "Na prática, isso significa acolher a pessoa com deficiência sem condescendência, sem paternalismo e sem a expectativa de que ela se 'supere'. A pessoa já é suficiente como é.",
    ],
    themes: ["empatia", "aceitação", "congruência"],
    reflection: "Você consegue oferecer aceitação incondicional a uma pessoa cujas experiências são muito diferentes das suas?",
  },
];

export const schools = [
  { id: "psicanalise", label: "Psicanálise", color: "violet" },
  { id: "relacional", label: "Relações Objetais", color: "rose" },
  { id: "desenvolvimento", label: "Desenvolvimento", color: "amber" },
  { id: "humanista", label: "Humanista", color: "emerald" },
] as const;
