/**
 * Conteúdo da Área Teórica — Módulo 3.
 *
 * NOTA PEDAGÓGICA:
 * Todo o conteúdo textual vive neste arquivo, separado dos componentes.
 * Isso permite que qualquer membro do grupo edite textos sem precisar
 * mexer em código de UI.
 *
 * [ASSUNÇÃO] Os textos abaixo são acadêmicos e provisórios.
 * O grupo deve substituí-los pelo conteúdo próprio, mantendo a estrutura.
 *
 * Referências:
 * - Resolução CFP nº 009/2018
 * - Lei Brasileira de Inclusão (13.146/2015)
 * - Convenção sobre os Direitos das Pessoas com Deficiência (ONU, 2006)
 * - SASSAKI, R. K. (2010). Inclusão: construindo uma sociedade para todos.
 * - VYGOTSKY, L. S. (1997). Fundamentos de Defectologia.
 */

export interface TheorySection {
  id: string;
  title: string;
  /** Ícone SVG inline — nome semântico */
  icon: string;
  /** Cor de acento para o indicador lateral */
  accent: "violet" | "rose" | "amber" | "cyan" | "emerald";
  /** Parágrafos de conteúdo */
  paragraphs: string[];
  /** Conceitos-chave destacados */
  keyConceptsTitle?: string;
  keyConcepts?: { term: string; definition: string }[];
  /** Citação de destaque dentro da seção */
  pullQuote?: {
    text: string;
    source: string;
  };
  /** Perguntas reflexivas ao final da seção */
  reflectionQuestions?: string[];
}

export interface TheoryReference {
  text: string;
  type: "book" | "article" | "law" | "resolution" | "convention" | "website";
}

export const theoryPageIntro = {
  title: "Avaliação Psicológica",
  subtitle: "Fundamentos para uma prática inclusiva",
  description:
    "A avaliação psicológica é um processo técnico-científico que deve considerar o contexto, as barreiras e as potencialidades de cada pessoa — não apenas suas limitações.",
};

export const theorySections: TheorySection[] = [
  {
    id: "o-que-e",
    title: "O que é Avaliação Psicológica?",
    icon: "book",
    accent: "violet",
    paragraphs: [
      "A avaliação psicológica é um processo técnico-científico de coleta de dados, estudo e interpretação de informações a respeito dos fenômenos psicológicos. É uma prática exclusiva do(a) psicólogo(a) e deve ser conduzida com responsabilidade ética, respeitando a diversidade humana.",
      "Diferente do que muitos pensam, avaliação psicológica não se resume à aplicação de testes. Ela envolve entrevistas, observações, análise de documentos e uso de instrumentos padronizados — sempre contextualizados à realidade da pessoa avaliada.",
      "Quando falamos de pessoas com deficiência, a avaliação precisa ir além dos instrumentos tradicionais. É necessário adaptar procedimentos, considerar barreiras comunicacionais e ambientais, e compreender que a deficiência não define a pessoa.",
    ],
    keyConcepts: [
      {
        term: "Processo técnico-científico",
        definition:
          "A avaliação não é uma opinião subjetiva. Ela segue métodos validados cientificamente e normas éticas específicas.",
      },
      {
        term: "Contextualização",
        definition:
          "O resultado de qualquer instrumento só faz sentido quando interpretado dentro do contexto de vida da pessoa.",
      },
      {
        term: "Adaptação razoável",
        definition:
          "Modificações e ajustes necessários para garantir que a pessoa com deficiência possa participar da avaliação em igualdade de condições.",
      },
    ],
    pullQuote: {
      text: "A avaliação psicológica deve ser um instrumento de inclusão, não de exclusão. Avaliar não é rotular — é compreender.",
      source: "Adaptado de Resolução CFP nº 009/2018",
    },
    reflectionQuestions: [
      "Você já parou para pensar em como um teste psicológico pode ser inacessível para alguém com deficiência visual?",
      "O que muda quando o(a) psicólogo(a) considera o contexto social da pessoa avaliada?",
    ],
  },
  {
    id: "modelo-social",
    title: "Modelo Social vs. Modelo Médico",
    icon: "users",
    accent: "cyan",
    paragraphs: [
      "Historicamente, a deficiência foi compreendida pelo modelo médico — que localiza o 'problema' no corpo ou na mente da pessoa e busca 'consertar' ou 'curar'. Nessa perspectiva, a pessoa com deficiência é vista como alguém incompleto, que precisa de reabilitação para se adequar à sociedade.",
      "O modelo social, por outro lado, propõe uma inversão fundamental: a deficiência não está no indivíduo, mas nas barreiras que a sociedade impõe. Uma pessoa cadeirante não é 'incapaz de subir escadas' — ela está diante de um prédio que não tem rampa. A limitação é do ambiente, não da pessoa.",
      "Essa mudança de perspectiva tem implicações profundas para a avaliação psicológica. Se adotamos o modelo social, precisamos avaliar não apenas a pessoa, mas também o contexto em que ela vive — as barreiras arquitetônicas, comunicacionais, atitudinais e informacionais que ela enfrenta.",
      "A Lei Brasileira de Inclusão (2015) adota oficialmente o modelo biopsicossocial, que integra aspectos biológicos, psicológicos e sociais. Esse modelo reconhece que a experiência da deficiência é resultado da interação entre características pessoais e barreiras do ambiente.",
    ],
    keyConceptsTitle: "Comparando os modelos",
    keyConcepts: [
      {
        term: "Modelo médico",
        definition:
          "Foco no indivíduo. A deficiência é um 'defeito' a ser corrigido. Vocabulário: paciente, tratamento, reabilitação, cura.",
      },
      {
        term: "Modelo social",
        definition:
          "Foco no ambiente. A deficiência é produzida por barreiras sociais. Vocabulário: acessibilidade, inclusão, participação, direitos.",
      },
      {
        term: "Modelo biopsicossocial",
        definition:
          "Integra biológico, psicológico e social. Adotado pela CIF (OMS) e pela Lei Brasileira de Inclusão.",
      },
    ],
    pullQuote: {
      text: "A deficiência não está apenas no indivíduo, mas também nas barreiras impostas pela sociedade.",
      source: "Convenção sobre os Direitos das Pessoas com Deficiência, ONU, 2006",
    },
    reflectionQuestions: [
      "Pense em um espaço que você frequenta diariamente. Quais barreiras uma pessoa com deficiência encontraria ali?",
      "Como o modelo que adotamos (médico ou social) muda a forma como avaliamos alguém?",
    ],
  },
  {
    id: "capacitismo",
    title: "Capacitismo: o preconceito invisível",
    icon: "accessibility",
    accent: "rose",
    paragraphs: [
      "Capacitismo é o preconceito e a discriminação contra pessoas com deficiência. Assim como o racismo e o sexismo, o capacitismo opera de forma estrutural — está presente nas leis, nas instituições, na linguagem e nas atitudes cotidianas, muitas vezes de forma invisível.",
      "Expressões como 'que mancada', 'retardado', 'dar uma de cego' ou 'fingir demência' são exemplos de capacitismo linguístico. Mas o capacitismo vai além da linguagem: está presente quando um prédio não tem rampa, quando um site não é acessível, quando um profissional assume que uma pessoa com deficiência não pode tomar decisões sobre sua própria vida.",
      "Na avaliação psicológica, o capacitismo pode se manifestar quando o(a) psicólogo(a) reduz a pessoa à sua deficiência, quando utiliza instrumentos inadequados sem adaptação, ou quando interpreta resultados sem considerar barreiras ambientais e sociais. Uma avaliação ética é, necessariamente, uma avaliação anticapacitista.",
      "Reconhecer o capacitismo é o primeiro passo. Combatê-lo exige formação contínua, escuta ativa das pessoas com deficiência e revisão constante das nossas práticas profissionais.",
    ],
    keyConcepts: [
      {
        term: "Capacitismo estrutural",
        definition:
          "Sistema de opressão que hierarquiza corpos e mentes a partir de um padrão de 'normalidade'. Opera nas instituições, leis e práticas sociais.",
      },
      {
        term: "Inspiração pornográfica (inspiration porn)",
        definition:
          "Uso de pessoas com deficiência como 'exemplo de superação' para motivar pessoas sem deficiência. Reduz a pessoa a um objeto de inspiração.",
      },
      {
        term: "Nada sobre nós sem nós",
        definition:
          "Lema do movimento internacional de pessoas com deficiência. Reivindica participação ativa nas decisões que afetam suas vidas.",
      },
    ],
    pullQuote: {
      text: "Não me chame de especial. Não me use de inspiração. Me trate como pessoa — com direitos, não com pena.",
      source: "Adaptado do movimento anticapacitista",
    },
    reflectionQuestions: [
      "Você já reproduziu capacitismo sem perceber? Como?",
      "Como um(a) psicólogo(a) pode evitar o capacitismo na prática clínica?",
    ],
  },
  {
    id: "etica",
    title: "Ética profissional e inclusão",
    icon: "clipboard",
    accent: "emerald",
    paragraphs: [
      "O Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005) estabelece que o(a) psicólogo(a) deve trabalhar visando promover a saúde e a qualidade de vida das pessoas, contribuindo para a eliminação de quaisquer formas de negligência, discriminação e opressão.",
      "A Resolução CFP nº 009/2018, que regulamenta a avaliação psicológica, reforça que os procedimentos devem considerar as especificidades da pessoa avaliada, incluindo condições de saúde, deficiência, contexto social e cultural. Instrumentos devem ser adequados à população e, quando necessário, adaptados.",
      "Na prática, isso significa que o(a) psicólogo(a) tem a responsabilidade de verificar se os instrumentos que utiliza são adequados para pessoas com deficiência, se precisam de adaptação, e se os resultados podem ser interpretados de forma justa e contextualizada. Aplicar um teste visual a uma pessoa cega sem adaptação não é apenas inadequado — é antiético.",
      "A ética na avaliação psicológica para pessoas com deficiência também envolve a comunicação dos resultados. O laudo deve ser redigido de forma clara, respeitosa e acessível, evitando rótulos e linguagem capacitista.",
    ],
    keyConcepts: [
      {
        term: "Resolução CFP nº 009/2018",
        definition:
          "Norma que regulamenta a avaliação psicológica no Brasil. Exige uso de instrumentos aprovados pelo SATEPSI e adaptação a especificidades da pessoa avaliada.",
      },
      {
        term: "SATEPSI",
        definition:
          "Sistema de Avaliação de Testes Psicológicos do CFP. Lista instrumentos com parecer favorável para uso profissional.",
      },
      {
        term: "Consentimento informado",
        definition:
          "A pessoa avaliada deve ser informada sobre o processo, seus objetivos e como os resultados serão utilizados, podendo consentir ou não.",
      },
    ],
    pullQuote: {
      text: "A ética não é um capítulo do código — é a base de toda prática profissional.",
      source: "Adaptado do Código de Ética Profissional do Psicólogo",
    },
    reflectionQuestions: [
      "Um teste padronizado para a população geral pode ser aplicado sem adaptação a uma pessoa com deficiência intelectual?",
      "Como garantir que o laudo psicológico não reforce estereótipos sobre a pessoa avaliada?",
    ],
  },
  {
    id: "barreiras",
    title: "Tipos de barreiras",
    icon: "sparkles",
    accent: "amber",
    paragraphs: [
      "A Lei Brasileira de Inclusão (Lei 13.146/2015) classifica as barreiras em seis tipos. Compreender cada uma é essencial para uma avaliação psicológica que considere o contexto da pessoa.",
      "Na prática da avaliação psicológica, todas essas barreiras podem impactar o processo. Um consultório no segundo andar sem elevador impede o acesso físico. Um teste exclusivamente visual exclui pessoas cegas. A atitude de um profissional que subestima a capacidade de uma pessoa com deficiência intelectual compromete toda a avaliação.",
    ],
    keyConceptsTitle: "As 6 barreiras segundo a LBI",
    keyConcepts: [
      {
        term: "Barreiras urbanísticas",
        definition: "Obstáculos em vias, espaços públicos e no entorno das edificações.",
      },
      {
        term: "Barreiras arquitetônicas",
        definition: "Obstáculos dentro de edifícios públicos e privados.",
      },
      {
        term: "Barreiras nos transportes",
        definition: "Obstáculos nos sistemas e meios de transporte.",
      },
      {
        term: "Barreiras nas comunicações",
        definition:
          "Obstáculos que dificultam a expressão ou o recebimento de mensagens por qualquer meio.",
      },
      {
        term: "Barreiras atitudinais",
        definition:
          "Atitudes ou comportamentos que impedem a participação social em igualdade de condições — como preconceito, estigma e discriminação.",
      },
      {
        term: "Barreiras tecnológicas",
        definition:
          "Obstáculos que dificultam o acesso a tecnologias — incluindo sites e aplicativos inacessíveis.",
      },
    ],
    reflectionQuestions: [
      "Quais barreiras você encontrou hoje ao longo do seu dia?",
      "Como um consultório psicológico pode se tornar mais acessível?",
    ],
  },
];

export const theoryReferences: TheoryReference[] = [
  {
    text: "BRASIL. Lei nº 13.146, de 6 de julho de 2015. Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).",
    type: "law",
  },
  {
    text: "CONSELHO FEDERAL DE PSICOLOGIA. Resolução CFP nº 009/2018. Estabelece diretrizes para a realização de Avaliação Psicológica no exercício profissional da psicóloga e do psicólogo.",
    type: "resolution",
  },
  {
    text: "CONSELHO FEDERAL DE PSICOLOGIA. Resolução CFP nº 010/2005. Código de Ética Profissional do Psicólogo.",
    type: "resolution",
  },
  {
    text: "ORGANIZAÇÃO DAS NAÇÕES UNIDAS. Convenção sobre os Direitos das Pessoas com Deficiência. Nova York, 2006.",
    type: "convention",
  },
  {
    text: "SASSAKI, R. K. Inclusão: construindo uma sociedade para todos. 8. ed. Rio de Janeiro: WVA, 2010.",
    type: "book",
  },
  {
    text: "VYGOTSKY, L. S. Fundamentos de Defectologia. Obras Escogidas, tomo V. Madrid: Visor, 1997.",
    type: "book",
  },
  {
    text: "MELLO, A. G. Deficiência, incapacidade e vulnerabilidade: do capacitismo ou a preeminência capacitista e biomédica do Comitê de Ética em Pesquisa da UFSC. Ciência & Saúde Coletiva, v. 21, n. 10, 2016.",
    type: "article",
  },
  {
    text: "DINIZ, D. O que é deficiência. São Paulo: Brasiliense, 2007. (Coleção Primeiros Passos).",
    type: "book",
  },
];
