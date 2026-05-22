/**
 * Novas Experiências Imersivas — Implementação 4.
 *
 * 4 experiências narrativas interativas com foco em
 * empatia e compreensão. NUNCA sensacionalistas.
 *
 * Todas possuem: aviso de conteúdo, controle de intensidade,
 * botão de saída, explicação educativa pós-interação.
 */

export interface ImmersiveExperience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  contentWarning: string;
  description: string;
  /** Fases da experiência */
  phases: ExperiencePhase[];
  /** Explicação educativa ao final */
  educational: {
    title: string;
    content: string[];
    resources: string[];
  };
}

export interface ExperiencePhase {
  id: string;
  title: string;
  narrative: string;
  /** Estímulos visuais/textuais */
  stimuli: string[];
  /** Pensamentos intrusivos ou internos */
  thoughts?: string[];
  intensity: 1 | 2 | 3;
}

export const newExperiencesIntro = {
  title: "Experiências Imersivas",
  subtitle: "Sentir para compreender",
  description:
    "Experiências interativas que promovem empatia através da vivência. " +
    "Não são simulações exatas — são convites para aproximar-se da experiência do outro.",
  ethicalNotice:
    "Estas experiências foram desenvolvidas com orientação ética. Não pretendem " +
    "reproduzir fielmente a vivência de ninguém, nem transformar sofrimento em espetáculo. " +
    "São ferramentas educativas de sensibilização.",
};

export const newExperiences: ImmersiveExperience[] = [
  {
    id: "exp-ansiedade",
    slug: "ansiedade",
    title: "Como a ansiedade distorce pensamentos",
    subtitle: "Distorção cognitiva",
    emoji: "🌀",
    color: "#f59e0b",
    contentWarning:
      "Esta experiência simula pensamentos ansiosos e distorções cognitivas. " +
      "Pode ser desconfortável para pessoas com ansiedade. Você tem controle " +
      "total e pode sair a qualquer momento.",
    description:
      "Vivenciar como a ansiedade transforma pensamentos simples em catástrofes " +
      "imaginárias, com notificações, pressão e distorção.",
    phases: [
      {
        id: "ans-1", title: "Um dia normal", intensity: 1,
        narrative: "Você acorda. Olha o celular. Uma mensagem do trabalho: 'Precisamos conversar.'",
        stimuli: ["Mensagem recebida", "Notificação"],
        thoughts: ["O que será que aconteceu?"],
      },
      {
        id: "ans-2", title: "A espiral começa", intensity: 2,
        narrative: "Seu cérebro começa a criar cenários. Cada um pior que o anterior.",
        stimuli: ["Notificação", "E-mail", "Lembrete", "Mensagem", "Alarme"],
        thoughts: [
          "Será que fiz algo errado?",
          "Vão me demitir?",
          "E se eu não conseguir pagar as contas?",
          "Todo mundo vai achar que sou um fracasso",
        ],
      },
      {
        id: "ans-3", title: "O pico", intensity: 3,
        narrative: "Tudo ao mesmo tempo. Pensamentos se sobrepõem. O coração acelera. O ar parece faltar.",
        stimuli: ["Urgente!", "Responda agora", "Prazo!", "Reunião em 5min", "Ligação perdida", "Cobrança", "Erro detectado"],
        thoughts: [
          "Eu não consigo",
          "Eu não sou capaz",
          "Tudo vai desmoronar",
          "Eu preciso sair daqui",
          "Ninguém me entende",
          "E se nunca parar?",
        ],
      },
    ],
    educational: {
      title: "O que aconteceu?",
      content: [
        "A ansiedade ativa o sistema de 'luta ou fuga' do cérebro. Uma mensagem simples — 'precisamos conversar' — foi interpretada como ameaça.",
        "Isso se chama distorção cognitiva: o cérebro ansioso transforma possibilidades em certezas negativas. 'E se me demitirem?' vira 'Vão me demitir.'",
        "A pessoa com ansiedade não escolhe pensar assim. O cérebro faz isso automaticamente. Por isso, frases como 'é só relaxar' não ajudam — e podem piorar.",
      ],
      resources: [
        "Técnica 5-4-3-2-1: 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que saboreia",
        "Respiração diafragmática: inspire por 4s, segure 4s, expire por 6s",
        "Questionamento socrático: 'Qual a evidência real de que isso vai acontecer?'",
      ],
    },
  },
  {
    id: "exp-sobrecarga",
    slug: "sobrecarga-sensorial",
    title: "Vivendo sobrecarga sensorial",
    subtitle: "Excesso de estímulos",
    emoji: "⚡",
    color: "#ef4444",
    contentWarning:
      "Esta experiência simula excesso de estímulos sensoriais (visuais e textuais). " +
      "Pode ser desconfortável para pessoas com sensibilidade sensorial.",
    description:
      "Sentir como é quando todos os estímulos do ambiente chegam com a mesma intensidade, " +
      "sem filtro, sem pausa.",
    phases: [
      {
        id: "sob-1", title: "Entrando no supermercado", intensity: 1,
        narrative: "Você entra no supermercado. Luz fluorescente branca. Música ambiente. Ar-condicionado forte.",
        stimuli: ["Luz fluorescente", "Música ambiente", "Ar-condicionado"],
      },
      {
        id: "sob-2", title: "Os estímulos aumentam", intensity: 2,
        narrative: "Mais pessoas chegam. Carrinhos batem. Uma criança chora. O caixa bipa sem parar.",
        stimuli: ["Carrinhos", "Criança chorando", "Bip do caixa", "Conversa alta", "Anúncio no alto-falante", "Cheiro de peixe"],
        thoughts: ["Tá ficando difícil", "Muita coisa ao mesmo tempo"],
      },
      {
        id: "sob-3", title: "O colapso", intensity: 3,
        narrative: "Tudo se mistura num ruído contínuo. A luz fica insuportável. O corpo trava. Você precisa sair.",
        stimuli: ["PROMOÇÃO!", "Bip bip bip", "Gritaria", "Música alta", "Luz piscando", "Anúncio", "Alarme", "Bebê chorando"],
        thoughts: [
          "Preciso sair",
          "Não consigo pensar",
          "Tudo dói",
          "Onde é a saída?",
          "Por favor, silêncio",
        ],
      },
    ],
    educational: {
      title: "O que aconteceu?",
      content: [
        "A maioria das pessoas filtra automaticamente os estímulos do ambiente: ignora a luz, não percebe o ar-condicionado, não nota o bip do caixa.",
        "Para muitas pessoas autistas ou com processamento sensorial diferente, esse filtro não funciona da mesma forma. Todos os estímulos chegam com a mesma intensidade.",
        "Isso não é 'frescura' ou 'drama'. É uma diferença neurológica real que pode causar dor, exaustão e colapso (shutdown ou meltdown).",
      ],
      resources: [
        "Fones de ouvido com cancelamento de ruído",
        "Ambientes com iluminação suave",
        "Respeitar quando a pessoa pede para sair",
        "Horários de 'baixo estímulo' em estabelecimentos",
      ],
    },
  },
  {
    id: "exp-masking",
    slug: "masking-social",
    title: "Como funciona o masking social",
    subtitle: "A exaustão de fingir",
    emoji: "🎭",
    color: "#ec4899",
    contentWarning:
      "Esta experiência aborda masking (camuflagem social). Pode ressoar " +
      "emocionalmente com pessoas neurodivergentes.",
    description:
      "Vivenciar o esforço constante de monitorar expressões, respostas e " +
      "comportamentos para 'parecer normal'.",
    phases: [
      {
        id: "mask-1", title: "Preparação matinal", intensity: 1,
        narrative: "Você acorda e começa a se preparar. Não para o trabalho — para a performance.",
        stimuli: ["Checklist mental ativado"],
        thoughts: [
          "Lembrar de fazer contato visual",
          "Não falar sobre meu interesse especial",
          "Sorrir quando cumprimentarem",
        ],
      },
      {
        id: "mask-2", title: "No trabalho", intensity: 2,
        narrative: "Cada interação é um cálculo. Cada resposta é ensaiada. O sorriso é mantido.",
        stimuli: ["'Bom dia!'", "'Como foi o fim de semana?'", "'Vamos almoçar?'", "Reunião em grupo"],
        thoughts: [
          "Qual é a resposta esperada aqui?",
          "Estou fazendo contato visual demais ou de menos?",
          "Minha expressão está adequada?",
          "Quando é minha vez de falar?",
          "Não demonstrar cansaço",
        ],
      },
      {
        id: "mask-3", title: "A exaustão", intensity: 3,
        narrative: "São 17h. Você sobreviveu mais um dia. Mas a energia acabou horas atrás.",
        stimuli: ["Mais uma reunião", "Happy hour?", "Responder mensagens", "Parecer animado"],
        thoughts: [
          "Não aguento mais sorrir",
          "Quero ir embora",
          "Estou fingindo há 9 horas",
          "Ninguém sabe quem eu realmente sou",
          "Se eu parar de fingir, vão me rejeitar",
          "Quanto mais eu finjo, menos eu me reconheço",
        ],
      },
    ],
    educational: {
      title: "O que aconteceu?",
      content: [
        "Masking é o esforço consciente de camuflar características neurodivergentes para se adequar a expectativas sociais neurotípicas.",
        "Envolve suprimir stims (movimentos repetitivos), forçar contato visual, ensaiar respostas sociais e monitorar constantemente a própria expressão.",
        "O masking é exaustivo e pode levar a burnout autístico, perda de identidade e problemas graves de saúde mental. Criar espaços onde as pessoas possam ser autênticas é essencial.",
      ],
      resources: [
        "Permitir stims (fidgets, movimentos repetitivos) sem julgamento",
        "Não forçar contato visual",
        "Aceitar formas diferentes de socializar",
        "Criar espaços seguros onde a pessoa pode 'tirar a máscara'",
      ],
    },
  },
  {
    id: "exp-dissociacao",
    slug: "dissociacao",
    title: "Dissociação e desconexão",
    subtitle: "Quando o mundo fica distante",
    emoji: "🌫️",
    color: "#6366f1",
    contentWarning:
      "Esta experiência aborda dissociação. Se você vivencia episódios " +
      "dissociativos, avalie se deseja prosseguir. Você pode sair a qualquer momento.",
    description:
      "Uma representação de como a dissociação pode fazer o mundo parecer " +
      "irreal, distante e desconectado.",
    phases: [
      {
        id: "dis-1", title: "O início", intensity: 1,
        narrative: "Você está numa conversa com amigos. De repente, algo muda. As vozes ficam abafadas.",
        stimuli: ["Vozes ficam distantes"],
        thoughts: ["Algo está diferente..."],
      },
      {
        id: "dis-2", title: "A desconexão", intensity: 2,
        narrative: "O ambiente parece estranho. Familiar, mas irreal. Como se você estivesse assistindo de fora.",
        stimuli: ["Tudo parece embaçado", "Sons ficam abafados", "As cores desbotam"],
        thoughts: [
          "Isso é real?",
          "Parece um sonho",
          "Eu estou aqui... estou?",
          "Meu corpo parece distante",
        ],
      },
      {
        id: "dis-3", title: "A distância", intensity: 3,
        narrative: "Alguém te chama pelo nome. Você ouve, mas parece vir de muito longe. Seu corpo se move, mas não parece seu.",
        stimuli: ["...seu nome...", "...está ouvindo?...", "...tudo bem?..."],
        thoughts: [
          "Onde eu estou?",
          "Quem é essa pessoa no espelho?",
          "Estou flutuando",
          "Não consigo me conectar",
          "Quanto tempo passou?",
        ],
      },
    ],
    educational: {
      title: "O que aconteceu?",
      content: [
        "A dissociação é um mecanismo de proteção do cérebro. Quando a realidade é avassaladora — por estresse, trauma ou sobrecarga — o cérebro 'desconecta' como forma de proteção.",
        "A pessoa pode sentir que o mundo é irreal (desrealização), que o próprio corpo não é seu (despersonalização) ou ter lapsos de memória.",
        "Dissociação não é 'viajar' ou 'estar distraído'. É uma experiência real que pode ser assustadora. A pessoa não controla quando acontece.",
      ],
      resources: [
        "Técnica de aterramento: sentir os pés no chão, segurar algo frio",
        "Não sacudir ou gritar com a pessoa — falar calmamente",
        "Ajudar a pessoa a nomear onde está e o que é real",
        "Buscar acompanhamento profissional se episódios forem frequentes",
      ],
    },
  },
];
