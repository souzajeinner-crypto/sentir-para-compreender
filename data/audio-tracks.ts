/**
 * Dados da Área Sonora — Módulo 5.
 *
 * Trilhas sonoras educativas sobre avaliação psicológica
 * e inclusão. Cada trilha tem transcrição completa para
 * acessibilidade (pessoas surdas/com baixa audição).
 *
 * [ASSUNÇÃO] URLs de áudio são placeholders. O grupo deve
 * gravar e hospedar os áudios reais.
 */

export interface AudioTrack {
  id: string;
  title: string;
  description: string;
  /** Duração formatada */
  duration: string;
  /** Duração em segundos (para player) */
  durationSeconds: number;
  /** Categoria temática */
  category: "conceito" | "reflexao" | "depoimento" | "ambiente";
  /** Cor de acento */
  accent: "violet" | "cyan" | "rose" | "amber";
  /** URL do arquivo de áudio — placeholder */
  audioUrl: string;
  /** Transcrição completa do áudio */
  transcription: string[];
  /** Palavras-chave para busca */
  tags: string[];
}

export const sonoraIntro = {
  title: "Área Sonora",
  subtitle: "Escuta, reflexão e acessibilidade",
  description:
    "Ouça trilhas sonoras que exploram conceitos de avaliação psicológica, " +
    "inclusão e ética profissional. Todas as trilhas possuem transcrição " +
    "completa — porque acessibilidade começa pelo acesso à informação.",
  noAudioNote:
    "Prefere ler? Todas as trilhas possuem transcrição completa. " +
    "Ative o modo leitura para acessar o conteúdo sem áudio.",
};

export const audioTracks: AudioTrack[] = [
  {
    id: "track-01",
    title: "O que é avaliação psicológica?",
    description:
      "Uma introdução ao conceito de avaliação psicológica, seus objetivos e sua importância para a compreensão da pessoa em sua totalidade.",
    duration: "4:32",
    durationSeconds: 272,
    category: "conceito",
    accent: "violet",
    audioUrl: "/audio/track-01-avaliacao-psicologica.mp3",
    transcription: [
      "A avaliação psicológica é um processo técnico-científico que vai muito além de aplicar testes.",
      "Ela envolve entrevistas, observações, análise de documentos e, sim, instrumentos padronizados — mas sempre com o objetivo de compreender a pessoa em seu contexto.",
      "Quando falamos de avaliação psicológica para pessoas com deficiência, precisamos repensar nossos métodos.",
      "Um teste projetado para pessoas sem deficiência pode criar barreiras artificiais que nada dizem sobre a capacidade real da pessoa avaliada.",
      "O profissional precisa conhecer adaptações razoáveis, instrumentos alternativos e, acima de tudo, reconhecer que a deficiência não é o centro da avaliação — a pessoa é.",
      "A avaliação psicológica ética e inclusiva exige formação continuada, humildade epistemológica e compromisso com os direitos humanos.",
    ],
    tags: ["avaliação", "conceito", "introdução", "processo"],
  },
  {
    id: "track-02",
    title: "Modelo social vs. modelo médico",
    description:
      "Entenda a diferença entre ver a deficiência como um 'problema do indivíduo' e reconhecê-la como uma construção social.",
    duration: "5:15",
    durationSeconds: 315,
    category: "conceito",
    accent: "cyan",
    audioUrl: "/audio/track-02-modelo-social.mp3",
    transcription: [
      "Durante muito tempo, a deficiência foi vista exclusivamente como um problema médico — algo a ser tratado, corrigido ou curado.",
      "Nesse modelo, chamado de modelo médico, a pessoa com deficiência era vista como 'defeituosa' e a responsabilidade pela adaptação recaía sobre ela.",
      "O modelo social, que ganhou força a partir dos anos 1970, propõe uma inversão radical: a deficiência não está no corpo, mas na sociedade que cria barreiras.",
      "Uma pessoa que usa cadeira de rodas não é 'incapaz de subir escadas' — ela está diante de um prédio que não tem rampa.",
      "Para a avaliação psicológica, essa mudança de paradigma é fundamental. Não estamos avaliando o que a pessoa 'não consegue fazer', mas identificando as barreiras que a impedem de participar plenamente.",
      "O modelo social não nega a dimensão biológica da deficiência, mas recusa que ela seja o único fator determinante.",
      "Na prática, isso significa adaptar instrumentos, considerar o contexto e ouvir a pessoa avaliada como protagonista de sua própria história.",
    ],
    tags: ["modelo social", "modelo médico", "deficiência", "paradigma"],
  },
  {
    id: "track-03",
    title: "Capacitismo: reconhecer para combater",
    description:
      "O que é capacitismo, como ele se manifesta na prática profissional e por que combatê-lo é uma responsabilidade ética.",
    duration: "3:48",
    durationSeconds: 228,
    category: "reflexao",
    accent: "rose",
    audioUrl: "/audio/track-03-capacitismo.mp3",
    transcription: [
      "Capacitismo é a discriminação contra pessoas com deficiência. É a crença — muitas vezes inconsciente — de que pessoas sem deficiência são superiores ou mais capazes.",
      "Na psicologia, o capacitismo pode se manifestar de formas sutis: usar instrumentos inadequados sem adaptação, interpretar resultados sem considerar barreiras, ou assumir que a deficiência é o problema central.",
      "Frases como 'apesar da deficiência, ele é muito inteligente' revelam um viés capacitista — como se inteligência e deficiência fossem incompatíveis.",
      "Combater o capacitismo exige estudo, autocrítica e escuta. Exige reconhecer nossos próprios vieses e transformar nossa prática.",
      "Como profissionais, temos a responsabilidade ética de garantir que nossa avaliação não reproduza opressões. Isso significa adaptar nossos métodos, não esperar que a pessoa se adapte a eles.",
    ],
    tags: ["capacitismo", "discriminação", "ética", "viés"],
  },
  {
    id: "track-04",
    title: "Sons do cotidiano: barreiras invisíveis",
    description:
      "Uma paisagem sonora que ilustra barreiras auditivas do dia a dia — semáforos sem sinal sonoro, anúncios apenas por áudio, ambientes ruidosos.",
    duration: "2:30",
    durationSeconds: 150,
    category: "ambiente",
    accent: "amber",
    audioUrl: "/audio/track-04-sons-cotidiano.mp3",
    transcription: [
      "[Paisagem sonora — descrição para acessibilidade]",
      "Trecho 1: Som de trânsito intenso. Um semáforo muda, mas não há sinal sonoro. Como uma pessoa cega saberia que pode atravessar?",
      "Trecho 2: Anúncio em estação de metrô, com eco e ruído de fundo. A mensagem é quase ininteligível. Para uma pessoa com dificuldade auditiva, é completamente inacessível.",
      "Trecho 3: Ambiente de sala de espera de consultório. Música ambiente, conversas sobrepostas, televisão ligada. Para uma pessoa autista com sensibilidade sensorial, este ambiente 'normal' pode ser avassalador.",
      "Trecho 4: Silêncio. Um momento para refletir: quantas informações do seu dia-a-dia dependem exclusivamente do som? E quantas pessoas ficam excluídas por isso?",
    ],
    tags: ["paisagem sonora", "barreiras", "acessibilidade", "cotidiano"],
  },
];

export const categories = [
  { id: "conceito", label: "Conceitos", accent: "violet" },
  { id: "reflexao", label: "Reflexões", accent: "rose" },
  { id: "depoimento", label: "Depoimentos", accent: "cyan" },
  { id: "ambiente", label: "Paisagens sonoras", accent: "amber" },
] as const;
