/**
 * Mascotes, Jornal do Sentir e Podcast — Implementação 3.
 */

export interface Mascot {
  id: string;
  name: string;
  animal: string;
  emoji: string;
  emotion: string;
  personality: string;
  color: string;
  colorLight: string;
  catchphrase: string;
  bio: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  mascotId: string;
  category: "historia" | "noticia" | "dica" | "reflexao";
  content: string[];
  moral?: string;
  tags: string[];
}

export interface PodcastEpisode {
  id: string;
  title: string;
  mascotId: string;
  description: string;
  duration: string;
  topics: string[];
  transcript: string[];
}

export const mascots: Mascot[] = [
  {
    id: "raposa", name: "Flora", animal: "Raposa", emoji: "🦊",
    emotion: "Ansiedade", personality: "Esperta mas preocupada. Pensa em tudo que pode dar errado — e depois descobre que deu certo.",
    color: "#f59e0b", colorLight: "#fef3c7", catchphrase: "E se... e se... ah, deu tudo certo!",
    bio: "Flora é uma raposinha que vive com mil pensamentos na cabeça. Ela aprende, pouco a pouco, que nem tudo que a preocupa vai acontecer de verdade.",
  },
  {
    id: "tartaruga", name: "Tito", animal: "Tartaruga", emoji: "🐢",
    emotion: "Sobrecarga social", personality: "Calmo, observador e precisa de pausas. Leva seu tempo — e tudo bem.",
    color: "#14b8a6", colorLight: "#ccfbf1", catchphrase: "Devagar, no meu ritmo.",
    bio: "Tito é uma tartaruguinha que se sente sobrecarregado em lugares muito agitados. Ele ensina que precisar de pausas não é preguiça — é autocuidado.",
  },
  {
    id: "panda", name: "Mel", animal: "Panda", emoji: "🐼",
    emotion: "Acolhimento", personality: "Carinhoso, acolhedor, sempre tem um abraço pronto.",
    color: "#8b5cf6", colorLight: "#ede9fe", catchphrase: "Tá tudo bem sentir. Vem cá.",
    bio: "Mel é um pandinha que acolhe todo mundo. Ele sabe que às vezes a gente não precisa de conselhos — só de um abraço.",
  },
  {
    id: "coruja", name: "Sofia", animal: "Coruja", emoji: "🦉",
    emotion: "Conhecimento emocional", personality: "Sábia, curiosa, adora explicar coisas de um jeito simples.",
    color: "#6366f1", colorLight: "#e0e7ff", catchphrase: "Sabia que...? Vem que eu te explico!",
    bio: "Sofia é uma corujinha que adora aprender e ensinar. Ela transforma temas complexos em histórias simples que todo mundo entende.",
  },
  {
    id: "polvo", name: "Otto", animal: "Polvo", emoji: "🐙",
    emotion: "Sensibilidade emocional", personality: "Sente tudo com muita intensidade. Muitas emoções ao mesmo tempo.",
    color: "#ec4899", colorLight: "#fce7f3", catchphrase: "Eu sinto tudo... e tá tudo bem.",
    bio: "Otto é um polvinho com oito braços — cada um sentindo uma emoção diferente! Ele ensina que sentir muito não é defeito, é profundidade.",
  },
];

export const journalIntro = {
  title: "Jornal do Sentir",
  subtitle: "Histórias que ensinam emoções",
  description: "Pequenas histórias narradas pelos mascotes sobre emoções, escola, amizade, inclusão e convivência. Porque aprender a sentir não precisa parecer aula.",
};

export const journalEntries: JournalEntry[] = [
  {
    id: "j01", title: "O dia em que Flora não conseguiu dormir", mascotId: "raposa", category: "historia",
    content: [
      "Era véspera da apresentação da escola. Flora estava na cama, mas a cabeça não parava: 'E se eu esquecer tudo? E se todo mundo rir de mim? E se eu tropeçar?'",
      "Ela respirou fundo, como a Sofia tinha ensinado. 'Flora', disse pra si mesma, 'você ensaiou 20 vezes. Você sabe.'",
      "No dia seguinte, Flora tremeu um pouquinho... mas fez a apresentação inteira. E sabe o que aconteceu? Todo mundo aplaudiu.",
      "A ansiedade não foi embora. Mas Flora aprendeu que podia fazer coisas incríveis MESMO com ela ali.",
    ],
    moral: "Ter ansiedade não significa que você não consegue. Significa que você se importa. E isso é bonito.",
    tags: ["ansiedade", "escola", "coragem"],
  },
  {
    id: "j02", title: "Tito e o recreio barulhento", mascotId: "tartaruga", category: "historia",
    content: [
      "O recreio era o momento que todo mundo adorava. Menos o Tito. Era barulhento demais: gritos, bolas quicando, gente correndo pra todo lado.",
      "Um dia, a professora percebeu que Tito ficava sempre no canto. Ela não obrigou ele a brincar. Em vez disso, criou um 'cantinho da calma' na sala ao lado.",
      "Tito passou a ir pro cantinho quando precisava. Às vezes ficava lá 5 minutos, às vezes 20. E quando voltava, conseguia brincar um pouco.",
      "Os colegas entenderam: Tito não era antipático. Ele só precisava de um ritmo diferente.",
    ],
    moral: "Inclusão é criar espaço para que cada pessoa participe do seu jeito, no seu tempo.",
    tags: ["sobrecarga", "inclusão", "escola"],
  },
  {
    id: "j03", title: "Mel e o colega que estava triste", mascotId: "panda", category: "historia",
    content: [
      "Na hora do lanche, Mel viu o Lucas sentado sozinho, olhando pro chão. Mel sentou do lado dele. Não disse nada. Só ficou ali.",
      "Depois de um tempão, Lucas falou: 'Meus pais estão brigando muito.' Mel ouviu. Não deu conselho. Não disse 'vai ficar tudo bem'. Só disse: 'Puxa, isso deve ser difícil.'",
      "Lucas olhou pra Mel e deu um sorrisinho pequeno. 'Obrigado por ficar aqui.'",
      "Às vezes, a melhor coisa que a gente pode fazer por alguém é simplesmente estar presente.",
    ],
    moral: "Você não precisa ter todas as respostas. Às vezes, estar junto já é o suficiente.",
    tags: ["acolhimento", "empatia", "amizade"],
  },
  {
    id: "j04", title: "Sofia explica: por que algumas pessoas usam fones?", mascotId: "coruja", category: "noticia",
    content: [
      "Sabe quando você vê alguém usando fones o tempo todo? Às vezes no mercado, na escola, no ônibus?",
      "Pode ser que essa pessoa tenha sensibilidade auditiva. Sons que pra você são normais — como a sirene da escola ou o barulho do trânsito — podem ser muito intensos pra ela.",
      "Os fones ajudam a diminuir o volume do mundo. Não é falta de educação. É uma ferramenta de acessibilidade.",
      "Da próxima vez que vir alguém com fones, lembre-se: cada pessoa tem uma forma diferente de navegar o mundo. E tá tudo bem.",
    ],
    tags: ["sensibilidade sensorial", "acessibilidade", "respeito"],
  },
  {
    id: "j05", title: "Otto e as emoções misturadas", mascotId: "polvo", category: "reflexao",
    content: [
      "Otto acordou se sentindo... estranho. Feliz porque ia ver os amigos. Ansioso porque tinha prova. Triste porque a avó estava doente. Irritado porque não dormiu bem.",
      "Quatro emoções ao mesmo tempo! Como assim?",
      "A Sofia explicou: 'Otto, a gente não sente uma emoção de cada vez. O coração é grande o suficiente pra sentir tudo junto.'",
      "Otto entendeu: não precisava escolher uma emoção. Podia sentir todas. E cada uma merecia atenção.",
    ],
    moral: "Sentir muitas coisas ao mesmo tempo não é confusão — é ser humano (ou polvo!).",
    tags: ["emoções complexas", "validação", "autoconhecimento"],
  },
];

export const podcastIntro = {
  title: "Podcast do Sentir",
  subtitle: "Histórias narradas pelos mascotes",
  description: "Mini episódios com histórias, conversas e acolhimento. Para ouvir sozinho, com a família ou na escola.",
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep01", title: "Bem-vindos ao Podcast do Sentir!", mascotId: "panda", description: "Mel apresenta o podcast e os mascotes. Uma conversa sobre por que falar de emoções é importante.", duration: "3:00",
    topics: ["apresentação", "emoções", "acolhimento"],
    transcript: ["Oi! Eu sou o Mel, e esse é o Podcast do Sentir!", "Aqui a gente conversa sobre emoções de um jeito leve e acolhedor.", "Você vai conhecer meus amigos: Flora, Tito, Sofia e Otto. Cada um sente o mundo de um jeito diferente.", "E sabe o que é mais legal? Todos os jeitos são válidos."],
  },
  {
    id: "ep02", title: "Quando o mundo é barulhento demais", mascotId: "tartaruga", description: "Tito conta como é viver com sensibilidade sensorial e o que ajuda nos dias difíceis.", duration: "4:30",
    topics: ["sobrecarga", "sensibilidade", "estratégias"],
    transcript: ["Sabe aquele dia em que tudo parece alto demais?", "A sirene, o recreio, até a conversa dos colegas...", "Eu sou o Tito, e pra mim, muitos dias são assim.", "Mas eu aprendi que posso pedir uma pausa. E que pausa não é fraqueza."],
  },
  {
    id: "ep03", title: "Flora e os 'e se...'", mascotId: "raposa", description: "Flora fala sobre ansiedade de um jeito que crianças entendem.", duration: "3:45",
    topics: ["ansiedade", "pensamentos", "respiração"],
    transcript: ["E se eu errar? E se ninguém gostar? E se...", "Oi! Eu sou a Flora. E minha cabeça é cheia de 'e se'.", "Mas sabe o que eu descobri? A maioria dos 'e se' nunca acontece!", "Respira comigo? Enche o balão... e solta devagar..."],
  },
];
