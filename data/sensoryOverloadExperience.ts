/**
 * Sobrecarga Sensorial — Experiência Imersiva Completa.
 * Dados para estímulos, pensamentos, perguntas e áudios.
 */

export interface Stimulus {
  id: string;
  label: string;
  icon: string; // emoji
  description: string;
  /** Fase em que aparece (1-5) */
  startPhase: number;
  audioPaths?: string[];
}

export interface FloatingThought {
  text: string;
  /** Fase mínima para aparecer */
  minPhase: number;
}

export interface ExperienceQuestion {
  id: string;
  question: string;
  options: string[];
}

export const stimuli: Stimulus[] = [
  { id: "luz", label: "Luz piscando", icon: "💡", description: "Lâmpada fluorescente instável", startPhase: 1, audioPaths: ["/audio/sobrecarga/lampada.mp3"] },
  { id: "relogio", label: "Tique-taque", icon: "🕐", description: "Relógio da parede", startPhase: 1, audioPaths: ["/audio/sobrecarga/relogio.mp3"] },
  { id: "professora", label: "Professora falando", icon: "👩‍🏫", description: "Voz contínua explicando a matéria", startPhase: 2, audioPaths: ["/audio/sobrecarga/professora.mp3"] },
  { id: "cadeira", label: "Cadeira arrastando", icon: "🪑", description: "Metal contra o piso", startPhase: 2, audioPaths: ["/audio/sobrecarga/cadeira.mp3"] },
  { id: "sussurros", label: "Colegas sussurrando", icon: "🗣️", description: "Conversas paralelas", startPhase: 3, audioPaths: ["/audio/sobrecarga/sussurros.mp3"] },
  { id: "porta", label: "Porta batendo", icon: "🚪", description: "Batida repentina", startPhase: 3, audioPaths: ["/audio/sobrecarga/porta.mp3"] },
  { id: "cheiro", label: "Cheiro de lanche", icon: "🍎", description: "Estímulo olfativo intenso", startPhase: 4 },
  { id: "ambiente", label: "Ruído ambiente", icon: "🔊", description: "Todos os sons juntos", startPhase: 4, audioPaths: ["/audio/sobrecarga/sala-ambiente.mp3"] },
];

export const floatingThoughts: FloatingThought[] = [
  { text: "E se eu errar?", minPhase: 2 },
  { text: "Está barulhento demais.", minPhase: 2 },
  { text: "Não consigo me concentrar.", minPhase: 3 },
  { text: "Preciso sair daqui.", minPhase: 3 },
  { text: "Todo mundo está olhando?", minPhase: 4 },
  { text: "Por que isso está tão intenso?", minPhase: 4 },
  { text: "Minha cabeça vai explodir.", minPhase: 5 },
  { text: "Eu não aguento mais.", minPhase: 5 },
  { text: "Onde é a saída?", minPhase: 5 },
  { text: "Por favor, silêncio.", minPhase: 5 },
];

export const questions: ExperienceQuestion[] = [
  {
    id: "q1",
    question: "Como você está se sentindo neste momento?",
    options: ["Estou tranquilo(a)", "Um pouco incomodado(a)", "Muito incomodado(a)", "Não aguento mais"],
  },
  {
    id: "q2",
    question: "O que está mais difícil para você agora?",
    options: ["Me concentrar", "Ignorar os sons", "Organizar meus pensamentos", "Controlar a ansiedade", "Permanecer no ambiente", "Outra coisa"],
  },
];

export const feedbackMessage =
  "Obrigado por responder. Em situações reais, muitas pessoas neurodivergentes vivenciam " +
  "estímulos intensos de forma ainda mais complexa. A proposta aqui é refletir sobre " +
  "acessibilidade, acolhimento e respeito aos limites sensoriais.";

export const ethicalMessage =
  "Esta experiência não representa todas as vivências neurodivergentes e não substitui " +
  "escuta real, diagnóstico ou acompanhamento profissional. Ela é apenas uma ferramenta " +
  "educativa para promover empatia e reflexão.";

export const phases = [
  { id: 1, label: "Ambiente inicial", description: "Sons leves do ambiente" },
  { id: 2, label: "Estímulos crescem", description: "Mais sons e vozes aparecem" },
  { id: 3, label: "Sobrecarga começa", description: "Tudo ao mesmo tempo" },
  { id: 4, label: "Pico de estímulos", description: "Difícil se concentrar" },
  { id: 5, label: "Colapso", description: "O limite foi atingido" },
];

export const warningItems = [
  "Sons altos e inesperados",
  "Luzes piscando",
  "Várias conversas ao mesmo tempo",
  "Movimentos ao redor",
  "Cheiros e estímulos diversos",
];
