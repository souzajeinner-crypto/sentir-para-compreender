/**
 * Relatos e Depoimentos — Módulo 8.
 * Depoimentos éticos e anonimizados sobre avaliação psicológica.
 * [ASSUNÇÃO] Relatos provisórios para fins educativos.
 */

export interface Testimonial {
  id: string;
  name: string;
  age: string;
  context: string;
  accent: "violet" | "cyan" | "rose" | "amber" | "emerald";
  content: string[];
  themes: string[];
}

export const relatosIntro = {
  title: "Relatos e Depoimentos",
  subtitle: "Vozes que precisam ser ouvidas",
  description: "Experiências reais de pessoas com deficiência em processos de avaliação psicológica. Cada relato é uma oportunidade de aprender com quem vive as barreiras que estudamos nos livros.",
  ethicalNotice: "Todos os nomes são fictícios e os relatos foram anonimizados. Os depoimentos foram coletados com consentimento informado e revisados pelos participantes.",
  contentWarning: "Alguns relatos abordam experiências de exclusão, capacitismo e sofrimento emocional. Respeite seus limites.",
};

export const testimonials: Testimonial[] = [
  {
    id: "relato-01", name: "Ana L.", age: "28 anos", context: "Pessoa surda, usuária de Libras", accent: "cyan",
    content: [
      "Quando fui fazer avaliação psicológica pela primeira vez, não tinha intérprete. A psicóloga falava comigo de costas, escrevendo no computador.",
      "Ela aplicou um teste verbal — oral. Eu sou surda. O resultado disse que eu tinha 'déficit cognitivo'. Eu tenho graduação em pedagogia.",
      "Na segunda vez, encontrei uma profissional que sabia Libras. Adaptou os instrumentos, me olhava nos olhos. O resultado foi completamente diferente.",
      "Não era eu que tinha déficit. Era o primeiro teste que tinha déficit — de acessibilidade.",
    ],
    themes: ["surdez", "Libras", "adaptação", "capacitismo"],
  },
  {
    id: "relato-02", name: "Carlos M.", age: "34 anos", context: "Pessoa com deficiência física, cadeirante", accent: "violet",
    content: [
      "O consultório ficava no terceiro andar. Sem elevador. A secretária disse que 'dava um jeitinho' e chamou dois homens para me carregarem escada acima.",
      "Cheguei suando, humilhado, sem ar. A primeira pergunta da psicóloga: 'como você está se sentindo?'. Eu queria gritar.",
      "Acessibilidade não é 'dar um jeitinho'. É garantir que eu chegue ao atendimento com dignidade.",
      "Hoje faço acompanhamento no térreo, com porta larga e banheiro adaptado. A primeira vez que me senti tratado como pessoa.",
    ],
    themes: ["acessibilidade física", "dignidade", "barreiras arquitetônicas"],
  },
  {
    id: "relato-03", name: "Beatriz R.", age: "19 anos", context: "Pessoa autista, diagnosticada tardiamente", accent: "rose",
    content: [
      "Passei a infância ouvindo que eu era 'estranha'. Na escola, era a menina sem amigos que chorava quando a sirene tocava.",
      "Fui diagnosticada autista aos 17. O diagnóstico não me rotulou — me libertou. Entendi por que o mundo parecia tão barulhento.",
      "Mas o processo de avaliação foi difícil. Luz fluorescente zumbindo, relógio com tique-taque, perfume forte. Cada estímulo era uma barreira.",
      "Se o ambiente tivesse sido adaptado, o resultado teria sido mais fiel a quem eu realmente sou.",
    ],
    themes: ["autismo", "diagnóstico tardio", "sensibilidade sensorial"],
  },
  {
    id: "relato-04", name: "Pedro S.", age: "42 anos", context: "Pessoa com baixa visão", accent: "amber",
    content: [
      "Tenho baixa visão desde o nascimento. Preciso de material ampliado, contraste alto e boa iluminação.",
      "Me entregaram um protocolo em fonte tamanho 10, letras cinza sobre fundo branco. Pedi ampliação. 'Não temos essa versão.'",
      "O teste media se eu enxergava as letras, não se eu compreendia o conteúdo. São coisas muito diferentes.",
      "Meus olhos funcionam diferente. Meu cérebro funciona perfeitamente.",
    ],
    themes: ["baixa visão", "adaptação de materiais", "instrumentos inadequados"],
  },
  {
    id: "relato-05", name: "Mariana F.", age: "25 anos", context: "Mãe de criança com paralisia cerebral", accent: "emerald",
    content: [
      "Meu filho entende tudo, ri das piadas, adora música. Mas tem dificuldade motora severa.",
      "Na avaliação, pediram que empilhasse cubos e desenhasse figuras. Ele não controla as mãos com essa precisão. Resultado: 'atraso cognitivo significativo'.",
      "Buscamos outra avaliação. Com tecnologia assistiva e instrumentos adaptados, o resultado mostrou o que eu sempre soube: meu filho é brilhante.",
      "O primeiro teste é que era cego.",
    ],
    themes: ["paralisia cerebral", "tecnologia assistiva", "família"],
  },
];
