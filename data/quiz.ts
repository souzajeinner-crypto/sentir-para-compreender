/**
 * Quiz Reflexivo — Módulo 6.
 *
 * Perguntas reflexivas sobre avaliação psicológica inclusiva.
 * NÃO é um teste de conhecimento — é uma ferramenta de
 * autoavaliação e reflexão sobre práticas e vieses.
 *
 * Cada resposta tem um valor de 1-4 que indica o nível de
 * consciência sobre inclusão e acessibilidade.
 */

export interface QuizOption {
  text: string;
  value: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context?: string;
  options: QuizOption[];
}

export interface QuizResult {
  range: [number, number];
  title: string;
  emoji: string;
  description: string;
  recommendations: string[];
  nextSteps: string;
}

export const quizIntro = {
  title: "Quiz Reflexivo",
  subtitle: "Autoavaliação sobre inclusão",
  description:
    "Este quiz não tem respostas certas ou erradas. É uma ferramenta de reflexão " +
    "sobre suas percepções, atitudes e conhecimentos em relação à avaliação " +
    "psicológica de pessoas com deficiência.",
  disclaimer:
    "Este quiz tem caráter educativo e reflexivo. Não é um instrumento " +
    "diagnóstico ou avaliativo. Use-o como ponto de partida para " +
    "aprofundar seus estudos sobre inclusão.",
  estimatedTime: "5–8 minutos",
  totalQuestions: 10,
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quando você pensa em 'pessoa com deficiência', qual imagem vem primeiro à mente?",
    context: "Essa pergunta explora seus vieses implícitos sobre deficiência.",
    options: [
      { text: "Alguém em cadeira de rodas ou com limitação visível", value: 1 },
      { text: "Depende — há muitos tipos de deficiência", value: 2 },
      { text: "Uma pessoa com características e vivências diversas", value: 3 },
      { text: "Alguém que enfrenta barreiras criadas pela sociedade", value: 4 },
    ],
  },
  {
    id: 2,
    question: "Um teste psicológico foi padronizado apenas com pessoas sem deficiência. Você pode usá-lo para avaliar uma pessoa surda?",
    options: [
      { text: "Sim, o teste é válido para todos", value: 1 },
      { text: "Sim, mas fazendo algumas adaptações informais", value: 2 },
      { text: "Depende — preciso verificar se existe versão adaptada", value: 3 },
      { text: "Não sem adaptações formais, e o resultado deve ser interpretado com cautela", value: 4 },
    ],
  },
  {
    id: 3,
    question: "O que significa 'adaptação razoável' no contexto da avaliação psicológica?",
    options: [
      { text: "Não sei ao certo", value: 1 },
      { text: "Fazer concessões para facilitar a vida da pessoa", value: 2 },
      { text: "Modificar procedimentos para garantir participação equitativa", value: 3 },
      { text: "Ajustes necessários para remover barreiras sem alterar o que se avalia", value: 4 },
    ],
  },
  {
    id: 4,
    question: "Uma criança autista teve desempenho abaixo da média em um teste de QI aplicado em sala iluminada com lâmpadas fluorescentes. O que você pensa?",
    options: [
      { text: "O resultado confirma dificuldades cognitivas", value: 1 },
      { text: "Talvez o resultado não seja tão preciso", value: 2 },
      { text: "O ambiente pode ter afetado o desempenho significativamente", value: 3 },
      { text: "O resultado reflete a inadequação do ambiente, não a capacidade da criança", value: 4 },
    ],
  },
  {
    id: 5,
    question: "Qual é a diferença entre o modelo médico e o modelo social de deficiência?",
    options: [
      { text: "Não conheço esses modelos", value: 1 },
      { text: "Um foca na doença, outro na sociedade", value: 2 },
      { text: "O médico vê a deficiência no corpo; o social vê nas barreiras", value: 3 },
      { text: "O social reconhece que a deficiência é produzida pela interação pessoa-ambiente", value: 4 },
    ],
  },
  {
    id: 6,
    question: "Você recebe um paciente cadeirante. Seu consultório fica no 2º andar sem elevador. O que você faz?",
    options: [
      { text: "Peço que alguém o carregue escada acima", value: 1 },
      { text: "Atendo na recepção do térreo", value: 2 },
      { text: "Busco um espaço acessível para o atendimento", value: 3 },
      { text: "Reconheço a barreira, providencio espaço acessível e reflito sobre meu próprio ambiente", value: 4 },
    ],
  },
  {
    id: 7,
    question: "A frase 'Apesar da deficiência, ela é muito inteligente' é:",
    options: [
      { text: "Um elogio sincero", value: 1 },
      { text: "Uma observação bem-intencionada", value: 2 },
      { text: "Problemática — sugere que deficiência e inteligência são incompatíveis", value: 3 },
      { text: "Capacitista — revela um viés de que pessoas com deficiência seriam menos capazes", value: 4 },
    ],
  },
  {
    id: 8,
    question: "Na devolutiva de uma avaliação psicológica de uma pessoa com deficiência, o foco principal deve ser:",
    options: [
      { text: "As limitações identificadas pela deficiência", value: 1 },
      { text: "O diagnóstico e as dificuldades encontradas", value: 2 },
      { text: "As potencialidades e recomendações para suporte", value: 3 },
      { text: "A pessoa como um todo, incluindo contexto, barreiras, potencialidades e direitos", value: 4 },
    ],
  },
  {
    id: 9,
    question: "Libras (Língua Brasileira de Sinais) é:",
    options: [
      { text: "Uma forma de mímica ou gestos", value: 1 },
      { text: "Uma linguagem simplificada para surdos", value: 2 },
      { text: "Uma língua com estrutura gramatical própria", value: 3 },
      { text: "Uma língua completa, reconhecida por lei, com gramática, regionalismos e literatura", value: 4 },
    ],
  },
  {
    id: 10,
    question: "Após este quiz, qual atitude você considera mais importante?",
    context: "Reflexão final sobre seu compromisso com a inclusão.",
    options: [
      { text: "Acho que já sei o suficiente sobre o tema", value: 1 },
      { text: "Vou prestar mais atenção no assunto", value: 2 },
      { text: "Quero estudar mais sobre avaliação inclusiva", value: 3 },
      { text: "Vou buscar formação, ouvir pessoas com deficiência e repensar minha prática", value: 4 },
    ],
  },
];

export const quizResults: QuizResult[] = [
  {
    range: [10, 17],
    title: "Início da jornada",
    emoji: "🌱",
    description:
      "Você está no começo do caminho. Muitos dos conceitos sobre deficiência, inclusão e avaliação psicológica adaptada ainda são novos para você — e tudo bem. O importante é a disposição para aprender.",
    recommendations: [
      "Leia a seção 'Avaliação Psicológica' do nosso site para conhecer os fundamentos",
      "Explore o conceito de 'modelo social de deficiência'",
      "Assista a depoimentos de pessoas com deficiência sobre suas experiências",
      "Conheça a Lei Brasileira de Inclusão (Lei 13.146/2015)",
    ],
    nextSteps: "Comece pelas experiências imersivas do site — elas oferecem uma vivência inicial sobre barreiras.",
  },
  {
    range: [18, 25],
    title: "Consciência em construção",
    emoji: "🌿",
    description:
      "Você já reconhece que o tema é importante e tem noções sobre inclusão, mas ainda há lacunas em conceitos técnicos e na aplicação prática. Continue investigando!",
    recommendations: [
      "Aprofunde seu conhecimento sobre adaptações razoáveis em avaliação psicológica",
      "Estude sobre capacitismo e como ele se manifesta na prática profissional",
      "Busque instrumentos psicológicos que tenham versões adaptadas",
      "Converse com profissionais que atuam com pessoas com deficiência",
    ],
    nextSteps: "Explore a área teórica do site e ouça as trilhas da Área Sonora para ampliar sua compreensão.",
  },
  {
    range: [26, 33],
    title: "Olhar sensível",
    emoji: "🌳",
    description:
      "Você demonstra sensibilidade e conhecimento sobre inclusão na avaliação psicológica. Reconhece barreiras, questiona vieses e busca alternativas. Continue refinando sua prática!",
    recommendations: [
      "Busque supervisão e formação continuada em avaliação inclusiva",
      "Participe de eventos e grupos de estudo sobre psicologia e deficiência",
      "Contribua para a produção de conhecimento na área",
      "Envolva pessoas com deficiência como consultoras em seu trabalho",
    ],
    nextSteps: "Leia os artigos do grupo e compartilhe suas reflexões na seção de Perspectivas.",
  },
  {
    range: [34, 40],
    title: "Compromisso ativo",
    emoji: "🌻",
    description:
      "Você demonstra compreensão profunda sobre os desafios da avaliação psicológica inclusiva. Sua postura ética e crítica é fundamental para transformar a prática profissional.",
    recommendations: [
      "Seja multiplicador(a) — compartilhe seu conhecimento com colegas",
      "Produza conteúdo acadêmico ou educativo sobre o tema",
      "Advogue por políticas institucionais de acessibilidade",
      "Mantenha-se atualizado(a) — o campo está sempre evoluindo",
    ],
    nextSteps: "Considere contribuir com artigos, depoimentos ou experiências para ampliar este projeto.",
  },
];
