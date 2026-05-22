/**
 * Dados das Experiências Imersivas — Módulo 4.
 *
 * NOTA PEDAGÓGICA:
 * As experiências NÃO simulam deficiência — elas simulam BARREIRAS.
 * Não estamos fingindo "ser" uma pessoa com deficiência, mas sim
 * vivenciando brevemente as barreiras que a sociedade impõe.
 */

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: "visual" | "auditiva" | "sensorial" | "motora";
  accent: "violet" | "rose" | "amber" | "cyan";
  icon: string;
  description: string;
  fullDescription: string[];
  objectives: string[];
  ethicalNotes: string;
  pedagogicalNote: string;
  steps: { instruction: string; duration?: string }[];
  reflectionQuestions: string[];
  estimatedDuration: string;
  sensoryIntensity: "baixa" | "média" | "alta";
  contentWarning?: string;
}

export const experiencesIntro = {
  title: "Experiências Imersivas",
  subtitle: "Vivenciando barreiras, não deficiências",
  description:
    "Estas experiências breves convidam você a perceber barreiras — sensoriais, comunicacionais e sociais — que muitas pessoas enfrentam diariamente. Não são simulações de deficiência: são simulações de exclusão provocada pelo ambiente.",
  disclaimer:
    "Estas vivências são aproximações pedagógicas. Pessoas com deficiência desenvolvem estratégias, competências e perspectivas que não são captadas em exercícios breves. Respeite essa complexidade.",
};

export const experiences: Experience[] = [
  {
    id: "exp-visual",
    slug: "visual",
    title: "Percebendo pelo Som",
    subtitle: "Quando a visão não está disponível",
    type: "visual",
    accent: "violet",
    icon: "sparkles",
    description: "Como seria navegar um ambiente sem informação visual? Explore a dependência que criamos da visão e descubra como outros sentidos podem guiar a percepção.",
    fullDescription: [
      "Vivemos em um mundo profundamente visual. Sinalizações, expressões faciais, textos, cores — grande parte da informação que recebemos chega pelos olhos. Mas o que acontece quando essa via é interrompida?",
      "Esta experiência convida você a fechar os olhos por alguns minutos e perceber o ambiente apenas pelo som, tato e olfato. Não é uma simulação de cegueira — pessoas cegas desenvolvem habilidades sofisticadas de navegação e percepção.",
      "O objetivo é perceber a barreira: o quanto nossos ambientes dependem exclusivamente de informação visual, e como isso exclui pessoas que não enxergam ou enxergam de forma diferente.",
    ],
    objectives: [
      "Perceber a dependência cultural e ambiental da informação visual",
      "Identificar quais informações no seu ambiente são exclusivamente visuais",
      "Refletir sobre como tornar informações acessíveis por múltiplos sentidos",
    ],
    ethicalNotes: "Esta experiência NÃO simula cegueira. Simula a barreira que ambientes exclusivamente visuais criam. Pessoas cegas não vivem em escuridão — vivem em um mundo que frequentemente ignora outras formas de percepção. Participe apenas se se sentir confortável.",
    pedagogicalNote: "Na avaliação psicológica, instrumentos exclusivamente visuais podem ser inacessíveis para pessoas cegas ou com baixa visão. O profissional precisa conhecer adaptações e instrumentos alternativos.",
    steps: [
      { instruction: "Encontre um lugar seguro e confortável.", duration: "30s" },
      { instruction: "Feche os olhos. Respire fundo três vezes. Desloque sua atenção da visão para os outros sentidos.", duration: "30s" },
      { instruction: "Apenas ouça. Quantos sons distintos você consegue identificar? De onde vêm?", duration: "2 min" },
      { instruction: "Tente identificar: que informações ao seu redor dependem exclusivamente da visão?", duration: "1 min" },
      { instruction: "Abra os olhos. Olhe ao redor com atenção renovada.", duration: "30s" },
    ],
    reflectionQuestions: [
      "Quantas informações importantes no seu dia-a-dia são exclusivamente visuais?",
      "Como um site ou aplicativo poderia ser acessível sem depender de visão?",
      "O que significa 'descrição de imagem' e por que é importante?",
    ],
    estimatedDuration: "5 minutos",
    sensoryIntensity: "baixa",
  },
  {
    id: "exp-auditiva",
    slug: "auditiva",
    title: "Barreira Comunicacional",
    subtitle: "Quando o som não chega",
    type: "auditiva",
    accent: "cyan",
    icon: "message",
    description: "O que acontece quando a comunicação oral não é acessível? Experimente a barreira comunicacional e reflita sobre como nos comunicamos — e quem fica de fora.",
    fullDescription: [
      "A comunicação oral é tão naturalizada que raramente questionamos: e se alguém não ouve? Reuniões sem intérprete, vídeos sem legenda, atendimentos sem adaptação — a barreira comunicacional é uma das mais frequentes.",
      "Nesta experiência, você tentará compreender informações sem áudio. A diferença entre as duas experiências (sem e com legendas) revela o quanto a informação se perde.",
      "Pessoas surdas não vivem em silêncio — muitas se comunicam em Libras, uma língua completa. A barreira não é a surdez: é a sociedade que não oferece adaptação.",
    ],
    objectives: [
      "Perceber quanta informação se perde sem áudio e sem legendas",
      "Entender a diferença entre surdez e barreira comunicacional",
      "Refletir sobre a importância de legendas, intérpretes e Libras",
    ],
    ethicalNotes: "Esta experiência NÃO simula surdez. Simula a barreira que a ausência de legendas e intérpretes cria. A comunidade surda tem cultura, língua e identidade próprias. A Libras é reconhecida como língua oficial no Brasil (Lei 10.436/2002).",
    pedagogicalNote: "Na avaliação psicológica de pessoas surdas, é fundamental a presença de intérprete de Libras, uso de instrumentos adaptados e compreensão de que testes verbais orais não refletem a capacidade cognitiva de uma pessoa cuja língua é visuoespacial.",
    steps: [
      { instruction: "Assista ao trecho de vídeo com o som desligado. Tente entender o que está sendo dito apenas pela imagem.", duration: "1 min" },
      { instruction: "Anote: o que você entendeu? O que ficou confuso?", duration: "1 min" },
      { instruction: "Agora assista com legendas ativadas. Compare.", duration: "1 min" },
      { instruction: "Reflita: quantos vídeos você consome sem legendas? Quantas reuniões sem intérprete?", duration: "1 min" },
    ],
    reflectionQuestions: [
      "Se você fosse surdo(a), conseguiria participar das suas aulas como elas acontecem hoje?",
      "O que significa dizer que Libras é uma língua — não 'gestos'?",
      "Como um(a) psicólogo(a) deveria se preparar para atender uma pessoa surda?",
    ],
    estimatedDuration: "5 minutos",
    sensoryIntensity: "baixa",
  },
  {
    id: "exp-sensorial",
    slug: "sensorial",
    title: "Sobrecarga Sensorial",
    subtitle: "Quando o ambiente é demais",
    type: "sensorial",
    accent: "rose",
    icon: "sparkles",
    description: "Luzes piscando, sons sobrepostos. Para muitas pessoas autistas e com sensibilidade sensorial, o ambiente 'normal' pode ser avassalador.",
    fullDescription: [
      "Imagine um shopping lotado: música alta, luzes fluorescentes, cheiros misturados, pessoas esbarrando. Para muitas pessoas, isso é 'normal'. Para outras, é uma sobrecarga insuportável.",
      "Pessoas autistas e com outras condições de processamento sensorial podem experimentar estímulos 'normais' como extremamente intensos ou dolorosos. O problema não é a sensibilidade — é o ambiente.",
      "Esta experiência usa estímulos visuais e sonoros sobrepostos para dar uma breve amostra de como a sobrecarga sensorial afeta a concentração e o conforto.",
    ],
    objectives: [
      "Experimentar brevemente como múltiplos estímulos simultâneos afetam a cognição",
      "Compreender que sensibilidade sensorial não é 'frescura'",
      "Refletir sobre como ambientes podem ser adaptados para diferentes perfis sensoriais",
    ],
    ethicalNotes: "AVISO: Esta experiência contém estímulos visuais e sonoros que podem ser desconfortáveis. Você pode interromper a qualquer momento. Se você tem epilepsia fotossensível ou sensibilidade sensorial, pule esta experiência e leia a reflexão.",
    pedagogicalNote: "Na avaliação psicológica, o ambiente de testagem deve ser controlado. Iluminação, ruído, textura do mobiliário e temperatura podem afetar o desempenho. Um resultado obtido em ambiente inadequado não reflete a capacidade real.",
    steps: [
      { instruction: "Certifique-se de que está em um ambiente seguro. Você pode parar a qualquer momento.", duration: "15s" },
      { instruction: "Inicie a simulação. Tente ler o texto na tela enquanto estímulos competem pela sua atenção.", duration: "45s" },
      { instruction: "Pare. Respire. O desconforto que sentiu é uma fração do que muitas pessoas experimentam diariamente.", duration: "30s" },
      { instruction: "Reflita: como seria passar o dia inteiro nessa intensidade?", duration: "1 min" },
    ],
    reflectionQuestions: [
      "Você já esteve em um ambiente 'normal' para todos, mas insuportável para você?",
      "Como consultórios e espaços públicos poderiam ser mais amigáveis para pessoas com sensibilidade sensorial?",
      "O que significa um 'ambiente calmo' e por que ele não é o padrão?",
    ],
    estimatedDuration: "4 minutos",
    sensoryIntensity: "alta",
    contentWarning: "Contém estímulos visuais piscantes e sons sobrepostos. Pode ser desconfortável para pessoas com sensibilidade sensorial ou epilepsia fotossensível.",
  },
  {
    id: "exp-motora",
    slug: "motora",
    title: "Acesso Negado",
    subtitle: "Quando o espaço não foi feito para você",
    type: "motora",
    accent: "amber",
    icon: "accessibility",
    description: "Portas estreitas, degraus sem rampa, botões fora do alcance. Explore como o design do ambiente decide quem pode e quem não pode participar.",
    fullDescription: [
      "Uma escada de três degraus na entrada de um prédio. Para quem anda, é invisível. Para quem usa cadeira de rodas, é um muro. A barreira não está na pessoa — está no projeto.",
      "Barreiras motoras não se limitam ao espaço físico. Sites com botões minúsculos, formulários que exigem movimentos finos de mouse — o mundo digital também é cheio de portas estreitas.",
      "Esta experiência convida você a navegar tarefas simples com restrições de movimento, percebendo como o design determina quem participa e quem é excluído.",
    ],
    objectives: [
      "Perceber como o design do ambiente cria ou remove barreiras",
      "Entender que acessibilidade não é 'favor' — é direito",
      "Identificar barreiras de acesso no seu próprio ambiente",
    ],
    ethicalNotes: "Esta experiência NÃO simula deficiência motora. Simula a experiência de enfrentar um ambiente que não foi projetado para você. Pessoas com deficiência motora desenvolvem formas próprias de interagir com o mundo.",
    pedagogicalNote: "Na avaliação psicológica, o consultório deve ser acessível: rampas, mobiliário adaptável, instrumentos que não dependam exclusivamente de motricidade fina. Um teste que exige manipulação de peças pequenas pode ser inadequado para pessoas com paralisia cerebral.",
    steps: [
      { instruction: "Tente realizar as tarefas na tela usando apenas a tecla Tab e Enter — sem mouse.", duration: "2 min" },
      { instruction: "Observe: quais tarefas ficaram difíceis? Quais foram impossíveis?", duration: "1 min" },
      { instruction: "Olhe ao seu redor: quantos degraus sem rampa, portas estreitas ou elevadores quebrados você identifica?", duration: "1 min" },
      { instruction: "Reflita: quem foi considerado quando esse ambiente foi projetado? E quem foi esquecido?", duration: "1 min" },
    ],
    reflectionQuestions: [
      "Se você precisasse de cadeira de rodas amanhã, conseguiria chegar à sua sala de aula?",
      "Qual a diferença entre um site acessível e um site bonito? Podem ser as duas coisas?",
      "O que a Lei Brasileira de Inclusão diz sobre acessibilidade?",
    ],
    estimatedDuration: "5 minutos",
    sensoryIntensity: "baixa",
  },
];
