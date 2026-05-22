/**
 * Área Infantil e Neurodivergente — Implementação 2.
 *
 * Espaço seguro e educativo com identidade visual lúdica.
 * Linguagem acolhedora, não patologizante, respeitosa.
 */

/* ══════════════════════════════════════
   1. EMOÇÕES EXPLICADAS PARA CRIANÇAS
   ══════════════════════════════════════ */

export interface Emotion {
  id: string;
  name: string;
  metaphor: string;
  color: string;
  colorLight: string;
  emoji: string;
  description: string;
  whatItFeels: string[];
  whatHelps: string[];
  message: string;
}

export const emotions: Emotion[] = [
  {
    id: "raiva", name: "Raiva", metaphor: "Um vulcão", color: "#ef4444", colorLight: "#fecaca", emoji: "🌋",
    description: "A raiva é como um vulcão que cresce dentro da gente. Ela esquenta, esquenta... e às vezes explode! Mas sentir raiva é normal. Todo mundo sente.",
    whatItFeels: ["O rosto fica quente", "As mãos fecham", "O coração bate rápido", "Vontade de gritar"],
    whatHelps: ["Respirar fundo 5 vezes", "Contar até 10 devagar", "Apertar uma almofada", "Desenhar o que está sentindo"],
    message: "Sentir raiva não te torna uma pessoa ruim. O que importa é o que você faz com ela.",
  },
  {
    id: "tristeza", name: "Tristeza", metaphor: "Uma chuva", color: "#3b82f6", colorLight: "#bfdbfe", emoji: "🌧️",
    description: "A tristeza é como uma chuva que cai dentro do peito. Às vezes é uma garoa fininha, às vezes é uma tempestade. E tudo bem — depois da chuva, vem o arco-íris.",
    whatItFeels: ["Vontade de ficar quieto", "Os olhos ficam pesados", "O peito aperta", "Parece que tudo está cinza"],
    whatHelps: ["Chorar (chorar faz bem!)", "Abraçar alguém querido", "Ouvir uma música gostosa", "Falar sobre o que sente"],
    message: "Não precisa estar feliz o tempo todo. Às vezes a chuva precisa cair para as flores crescerem.",
  },
  {
    id: "ansiedade", name: "Ansiedade", metaphor: "Uma tempestade", color: "#f59e0b", colorLight: "#fde68a", emoji: "⛈️",
    description: "A ansiedade é como uma tempestade de pensamentos. Tudo vem ao mesmo tempo: 'e se acontecer isso?', 'e se der errado?'. A cabeça não para!",
    whatItFeels: ["A barriga fica apertada", "As mãos suam", "O coração dispara", "Pensamentos não param"],
    whatHelps: ["Respirar como se enchesse um balão", "Pensar em 5 coisas que você vê agora", "Abraçar um bichinho de pelúcia", "Lembrar que já passou por coisas difíceis antes"],
    message: "A ansiedade quer te proteger, mas às vezes exagera. Você pode dizer: 'obrigado, mas eu consigo!'",
  },
  {
    id: "alegria", name: "Alegria", metaphor: "Um sol brilhante", color: "#22c55e", colorLight: "#bbf7d0", emoji: "☀️",
    description: "A alegria é como um sol que brilha dentro de você! Ela aparece quando algo bom acontece, quando estamos com quem amamos ou quando nos sentimos seguros.",
    whatItFeels: ["O sorriso vem sozinho", "O corpo fica leve", "Vontade de pular e dançar", "O coração parece brilhar"],
    whatHelps: ["Guardar esse momento na memória", "Compartilhar com alguém", "Dançar e cantar", "Agradecer por estar feliz"],
    message: "Guarde os momentos felizes no coração. Eles são seus e ninguém pode tirar!",
  },
  {
    id: "medo", name: "Medo", metaphor: "Uma sombra", color: "#8b5cf6", colorLight: "#ddd6fe", emoji: "👻",
    description: "O medo é como uma sombra que parece maior do que realmente é. Ele existe para nos proteger de perigos — mas às vezes aparece quando não precisa.",
    whatItFeels: ["O corpo trava", "As pernas tremem", "A voz some", "Vontade de se esconder"],
    whatHelps: ["Acender a luz (real ou imaginária)", "Falar sobre o medo com alguém", "Lembrar que sombras não machucam", "Dar um nome para o medo ('Oi, medo. Eu te vi!')"],
    message: "Ter medo não é ser fraco. Os mais corajosos também sentem medo — eles só não deixam o medo decidir por eles.",
  },
  {
    id: "frustracao", name: "Frustração", metaphor: "Uma parede", color: "#ec4899", colorLight: "#fbcfe8", emoji: "🧱",
    description: "A frustração é como bater numa parede quando você queria seguir em frente. Você tentou, tentou... e não deu certo. Isso dói. E tudo bem doer.",
    whatItFeels: ["Vontade de desistir", "Sensação de que nada funciona", "Irritação misturada com tristeza", "Os olhos ardem"],
    whatHelps: ["Parar um pouquinho e respirar", "Lembrar de coisas que já conseguiu", "Pedir ajuda (isso é inteligência!)", "Tentar de um jeito diferente"],
    message: "Não conseguir de primeira não é fracasso. É aprendizado. Cada tentativa te deixa mais forte.",
  },
];

/* ══════════════════════════════════════
   2. AUTISMO EXPLICADO VISUALMENTE
   ══════════════════════════════════════ */

export interface AutismTopic {
  id: string;
  title: string;
  content: string[];
  color: string;
  emoji: string;
}

export const autismIntro = {
  title: "Entendendo o Autismo",
  subtitle: "Para crianças, famílias e educadores",
  description: "O autismo não é uma doença. É uma forma diferente de perceber o mundo. Vamos entender juntos?",
  notice: "Este conteúdo é educativo e não substitui avaliação profissional.",
};

export const autismTopics: AutismTopic[] = [
  { id: "tea", title: "O que é o TEA?", content: ["TEA significa Transtorno do Espectro Autista. 'Espectro' quer dizer que existe muita diversidade — cada pessoa autista é única!", "Algumas pessoas autistas falam muito, outras pouco. Algumas gostam de abraços, outras preferem não ser tocadas. Não existe um 'jeito certo' de ser autista."], color: "#8b5cf6", emoji: "🧩" },
  { id: "sensorial", title: "Sensibilidade Sensorial", content: ["Muitas pessoas autistas sentem sons, luzes e texturas de forma mais intensa. Uma luz fluorescente pode parecer um holofote. O barulho do recreio pode parecer um show de rock.", "Isso não é 'frescura' — é uma forma diferente de processar o mundo. Respeitar isso é inclusão."], color: "#3b82f6", emoji: "🎧" },
  { id: "rotina", title: "Rotina e Previsibilidade", content: ["Muitas pessoas autistas se sentem mais seguras quando sabem o que vai acontecer. Mudanças repentinas podem causar desconforto ou ansiedade.", "Rotina não é rigidez — é uma estratégia de organização. Avisar sobre mudanças com antecedência ajuda muito!"], color: "#22c55e", emoji: "📋" },
  { id: "comunicacao", title: "Comunicação", content: ["Nem toda comunicação é verbal. Algumas pessoas autistas se comunicam por gestos, imagens, aplicativos ou escrita.", "Se alguém não responde do 'jeito esperado', não significa que não entendeu. Significa que se comunica de forma diferente."], color: "#f59e0b", emoji: "💬" },
  { id: "masking", title: "Masking (Camuflagem)", content: ["Muitas pessoas autistas aprendem a 'imitar' comportamentos neurotípicos para serem aceitas. Isso se chama masking.", "O masking é exaustivo. É como atuar o dia inteiro sem nunca sair do palco. Criar espaços seguros onde a pessoa pode ser ela mesma é essencial."], color: "#ec4899", emoji: "🎭" },
  { id: "inclusao", title: "Inclusão Escolar", content: ["Incluir não é colocar uma criança autista na sala e esperar que ela se adapte. É adaptar o ambiente para que ela possa participar.", "Inclusão é rampa de acesso, é material visual, é respeitar o tempo de cada um, é não forçar contato visual, é celebrar diferenças."], color: "#14b8a6", emoji: "🏫" },
];

/* ══════════════════════════════════════
   3. JOGOS EMOCIONAIS
   ══════════════════════════════════════ */

export interface EmotionalGame {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  type: "quiz" | "builder" | "chooser" | "tracker";
}

export const games: EmotionalGame[] = [
  { id: "reconhecer", title: "Qual é a emoção?", description: "Olhe a expressão e tente adivinhar o que a pessoa está sentindo.", emoji: "🎯", color: "#8b5cf6", type: "quiz" },
  { id: "montar", title: "Monte a carinha", description: "Escolha olhos, boca e sobrancelhas para montar expressões faciais.", emoji: "🎨", color: "#f59e0b", type: "builder" },
  { id: "estrategias", title: "Escolha a estratégia", description: "Algo difícil aconteceu! Qual é a melhor estratégia para lidar?", emoji: "🧠", color: "#22c55e", type: "chooser" },
  { id: "sentindo", title: "Como estou hoje?", description: "Escolha a emoção que melhor representa como você está agora.", emoji: "💭", color: "#3b82f6", type: "tracker" },
];

/* ══════════════════════════════════════
   4. AUTORREGULAÇÃO
   ══════════════════════════════════════ */

export interface SelfRegTool {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

export const selfRegTools: SelfRegTool[] = [
  { id: "respiracao", title: "Respiração do balão", description: "Inspire enchendo a barriga como um balão... e solte o ar bem devagar. Repita 5 vezes.", emoji: "🎈", color: "#ef4444" },
  { id: "5sentidos", title: "5 sentidos", description: "Encontre: 5 coisas que você vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que saboreia.", emoji: "🌟", color: "#f59e0b" },
  { id: "cantinho", title: "Meu cantinho seguro", description: "Imagine um lugar onde você se sente seguro e em paz. Como ele é? O que tem lá?", emoji: "🏡", color: "#22c55e" },
  { id: "corpo", title: "Escaneando o corpo", description: "Feche os olhos. Comece pelos pés e vá subindo. Onde está a tensão? Respire nesse lugar.", emoji: "🧘", color: "#8b5cf6" },
  { id: "musica", title: "Música calmante", description: "Coloque uma música suave, feche os olhos e deixe a melodia te embalar.", emoji: "🎵", color: "#3b82f6" },
  { id: "desenho", title: "Desenhe o que sente", description: "Pegue lápis e papel. Não precisa ser bonito — só precisa ser verdadeiro.", emoji: "✏️", color: "#ec4899" },
];

/* ══════════════════════════════════════
   5. FILMES E DESENHOS
   ══════════════════════════════════════ */

export interface MovieRecommendation {
  id: string;
  title: string;
  year: string;
  themes: string[];
  whyWatch: string;
  color: string;
  emoji: string;
}

export const movies: MovieRecommendation[] = [
  { id: "divertidamente", title: "Divertida Mente", year: "2015", themes: ["emoções", "memórias", "crescimento"], whyWatch: "Mostra que todas as emoções são importantes — até a tristeza. A alegria não precisa estar no controle o tempo todo.", color: "#f59e0b", emoji: "🧠" },
  { id: "divertidamente2", title: "Divertida Mente 2", year: "2024", themes: ["ansiedade", "adolescência", "identidade"], whyWatch: "Explora a ansiedade de forma sensível e mostra que nossos sentimentos mais difíceis fazem parte de quem somos.", color: "#8b5cf6", emoji: "😰" },
  { id: "red", title: "Red: Crescer é uma Fera", year: "2022", themes: ["identidade", "família", "emoções intensas"], whyWatch: "Fala sobre aceitar todas as partes de si mesmo — inclusive as que parecem 'demais'.", color: "#ef4444", emoji: "🐼" },
  { id: "luca", title: "Luca", year: "2021", themes: ["pertencimento", "diferença", "amizade"], whyWatch: "Uma metáfora sobre esconder quem você é por medo de rejeição. Sobre encontrar pessoas que te aceitem.", color: "#3b82f6", emoji: "🌊" },
  { id: "extraordinario", title: "Extraordinário", year: "2017", themes: ["inclusão", "bullying", "empatia"], whyWatch: "Auggie nos ensina que todo mundo merece ser olhado com gentileza. Inclusão começa com um sorriso.", color: "#22c55e", emoji: "🌟" },
  { id: "soul", title: "Soul", year: "2020", themes: ["propósito", "ansiedade", "autoconhecimento"], whyWatch: "Nem todo mundo precisa de um 'grande propósito'. Às vezes, estar presente já é extraordinário.", color: "#14b8a6", emoji: "🎷" },
];

/* ══════════════════════════════════════
   NAVEGAÇÃO INFANTIL
   ══════════════════════════════════════ */

export const infantilSections = [
  { id: "emocoes", title: "Emoções", subtitle: "Entendendo o que sentimos", emoji: "🌈", href: "/infantil/emocoes", color: "#f59e0b" },
  { id: "autismo", title: "Autismo", subtitle: "Entendendo o TEA", emoji: "🧩", href: "/infantil/autismo", color: "#8b5cf6" },
  { id: "sobrecarga", title: "Sobrecarga", subtitle: "Quando é demais", emoji: "⚡", href: "/infantil/sobrecarga", color: "#ef4444" },
  { id: "jogos", title: "Jogos", subtitle: "Aprender brincando", emoji: "🎮", href: "/infantil/jogos", color: "#22c55e" },
  { id: "autorregulacao", title: "Calma", subtitle: "Ferramentas de paz", emoji: "🧘", href: "/infantil/autorregulacao", color: "#3b82f6" },
  { id: "filmes", title: "Filmes", subtitle: "Aprender assistindo", emoji: "🎬", href: "/infantil/filmes", color: "#ec4899" },
];
