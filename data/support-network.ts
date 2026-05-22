/**
 * Rede de Apoio — Dados verificados (maio/2026).
 *
 * Fontes: páginas oficiais da UFU, UNITRI, Prefeitura de Uberlândia,
 * AACD, Governo Federal, CVV e páginas institucionais dos projetos.
 *
 * NOTA EDITORIAL: Informações revisadas em 20/05/2026.
 * Confirme disponibilidade diretamente no canal oficial antes do atendimento.
 *
 * NÃO PUBLICAR: APAE (telefone não confirmado em fonte oficial estável),
 * CREAS Idoso/PcD (telefone de 2021, não confirmado como vigente),
 * COMPOD (endereço divergente entre fontes).
 */

export interface SupportCategory {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

export interface SupportResource {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  phone2?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  hours?: string;
  notes?: string;
  isHighlight?: boolean;
  isEmergency?: boolean;
}

export interface FirstStepSection {
  title: string;
  content: string;
  icon: string;
}

export const redeIntro = {
  title: "Você não está sozinho",
  subtitle: "Rede de apoio e acolhimento",
  description:
    "Buscar ajuda é um ato de coragem, não de fraqueza. Aqui você encontra " +
    "recursos de apoio psicológico, serviços acessíveis e informações para " +
    "dar o primeiro passo em direção ao cuidado com sua saúde mental.",
  emergencyNotice:
    "Se você ou alguém próximo está em situação de risco imediato, ligue " +
    "para o CVV (188) ou SAMU (192). A ligação é gratuita e funciona 24h.",
  editorialNote:
    "Informações revisadas em 20/05/2026. Confirme disponibilidade " +
    "diretamente no canal oficial antes do atendimento.",
};

export const categories: SupportCategory[] = [
  { id: "emergencia", label: "Emergência", emoji: "🚨", description: "Ligações de emergência 24h — gratuitas e imediatas." },
  { id: "atendimento", label: "Atendimento Psicológico", emoji: "🧠", description: "Clínicas-escola e serviços de psicologia em Uberlândia." },
  { id: "reabilitacao", label: "Reabilitação e Apoio", emoji: "♿", description: "Centros de reabilitação e atendimento especializado." },
  { id: "protecao", label: "Proteção e Direitos", emoji: "🛡️", description: "Denúncias, proteção e defesa de direitos humanos." },
  { id: "acessibilidade", label: "Acessibilidade Digital", emoji: "💻", description: "Projetos e ferramentas de acessibilidade e inclusão." },
  { id: "instituicoes", label: "Instituições Nacionais", emoji: "🏛️", description: "Organizações de referência nacional em inclusão." },
  { id: "local", label: "Projetos Locais", emoji: "📍", description: "Iniciativas de Uberlândia para inclusão e acessibilidade." },
];

export const resources: SupportResource[] = [
  /* ══════════════════════════════════════
     EMERGÊNCIA (24h, gratuitos)
     ══════════════════════════════════════ */
  {
    id: "e01", name: "CVV — Centro de Valorização da Vida", categoryId: "emergencia",
    description: "Apoio emocional e prevenção do suicídio. Atendimento por telefone, chat e e-mail. Funciona 24h, todos os dias. Ligação gratuita.",
    phone: "188", website: "https://cvv.org.br", hours: "24 horas, todos os dias",
    notes: "O número oficial atual é 188. O antigo 141 foi descontinuado.", isEmergency: true,
  },
  {
    id: "e02", name: "SAMU — Serviço de Atendimento Móvel de Urgência", categoryId: "emergencia",
    description: "Atendimento pré-hospitalar em casos de urgência e emergência clínica, cirúrgica, traumática e psiquiátrica. Gratuito e 24h.",
    phone: "192", hours: "24 horas, todos os dias", isEmergency: true,
  },
  {
    id: "e03", name: "Disque 100 — Direitos Humanos", categoryId: "emergencia",
    description: "Canal nacional para denúncias de violações de direitos humanos, inclusive contra pessoas com deficiência. Gratuito e 24h.",
    phone: "100", hours: "24 horas, todos os dias", isEmergency: true,
  },
  {
    id: "e04", name: "Ligue 180 — Central da Mulher", categoryId: "emergencia",
    description: "Acolhimento, orientação e denúncia em casos de violência contra a mulher. Gratuito e 24h.",
    phone: "180", hours: "24 horas, todos os dias", isEmergency: true,
  },
  {
    id: "e05", name: "Polícia Militar", categoryId: "emergencia",
    description: "Emergências de segurança pública.", phone: "190", hours: "24 horas", isEmergency: true,
  },
  {
    id: "e06", name: "Corpo de Bombeiros", categoryId: "emergencia",
    description: "Incêndios, resgates e emergências.", phone: "193", hours: "24 horas", isEmergency: true,
  },
  {
    id: "e07", name: "Conselho Tutelar de Uberlândia", categoryId: "protecao",
    description: "Proteção de crianças e adolescentes. Atendimento presencial no Complexo Social Iracema Marques.",
    address: "Rua Varginha, 149, Daniel Fonseca, Uberlândia-MG",
    city: "Uberlândia", state: "MG",
    notes: "Cada conselho tem telefone específico para horário comercial e plantão.",
  },

  /* ══════════════════════════════════════
     ATENDIMENTO PSICOLÓGICO
     ══════════════════════════════════════ */
  {
    id: "a01", name: "Centro de Psicologia da UFU", categoryId: "atendimento",
    description: "Atendimento psicológico gratuito à comunidade, com lista de espera. Atende crianças, adolescentes, adultos e idosos. Serviço supervisionado por professores da UFU.",
    phone: "(34) 3225-8503", phone2: "(34) 3225-8508",
    city: "Uberlândia", state: "MG",
    hours: "Segunda a sexta, 8h às 18h",
    isHighlight: true,
  },
  {
    id: "a02", name: "Núcleo de Psicologia Aplicada — UNITRI", categoryId: "atendimento",
    description: "Agendamento centralizado por WhatsApp. Oferece triagem psicológica e psicoterapia individual supervisionada.",
    whatsapp: "(34) 4009-9156",
    city: "Uberlândia", state: "MG",
    hours: "Segunda a sexta, 8h às 21h",
    notes: "Confirme condições de gratuidade/taxa social diretamente com a instituição.",
  },
  {
    id: "a03", name: "Clínica de Psicologia — Anhanguera Pitágoras Uberlândia", categoryId: "atendimento",
    description: "Atendimento psicológico supervisionado. Agendamento por WhatsApp.",
    whatsapp: "(34) 3292-1991",
    address: "Avenida dos Vinhedos, 1200, Morada da Colina, Uberlândia-MG",
    city: "Uberlândia", state: "MG",
    notes: "Horário não confirmado em fonte institucional estável. Confirme diretamente.",
  },

  /* ══════════════════════════════════════
     REABILITAÇÃO E APOIO ESPECIALIZADO
     ══════════════════════════════════════ */
  {
    id: "r01", name: "CER — Centro Especializado de Reabilitação", categoryId: "reabilitacao",
    description: "Unidade tipo III com reabilitação intelectual, visual e física/neurológica. Rede municipal de saúde.",
    phone: "(34) 3211-4013",
    address: "Avenida Cesário Alvim, 4513, Custódio Pereira, Uberlândia-MG",
    city: "Uberlândia", state: "MG",
    hours: "Segunda a sexta, 7h às 18h",
  },
  {
    id: "r02", name: "Campus Municipal de Atendimento à Pessoa com Deficiência", categoryId: "reabilitacao",
    description: "Serviços municipais especializados para pessoas com deficiência.",
    phone: "(34) 3219-3021",
    address: "Rua Maria Salvina de Carvalho, 300, Morada da Colina, Uberlândia-MG",
    city: "Uberlândia", state: "MG",
  },
  {
    id: "r03", name: "AACD Uberlândia", categoryId: "reabilitacao",
    description: "Centro de Reabilitação com atendimento por SUS, planos de saúde e particular. Oficina Ortopédica disponível.",
    phone: "(34) 3228-8000",
    address: "Rua da Doméstica, 250, Planalto, Uberlândia-MG",
    city: "Uberlândia", state: "MG",
    hours: "Centro de Reabilitação: segunda a sexta, 7h às 17h40",
  },
  {
    id: "r04", name: "Ouvidoria da Saúde — Uberlândia", categoryId: "reabilitacao",
    description: "Canal para reclamações, sugestões e solicitações relacionadas aos serviços de saúde do município.",
    phone: "0800-940-1480", phone2: "(34) 3256-3800",
    hours: "Telefone: 7h às 18h | Presencial: 8h às 17h",
    notes: "Ouvidoria Geral do SUS: 136",
  },

  /* ══════════════════════════════════════
     ACESSIBILIDADE DIGITAL
     ══════════════════════════════════════ */
  {
    id: "d01", name: "VLibras", categoryId: "acessibilidade",
    description: "Suíte gratuita e de código aberto do Governo Federal que traduz conteúdos digitais em português para Libras.",
    website: "https://vlibras.gov.br",
  },
  {
    id: "d02", name: "Hand Talk", categoryId: "acessibilidade",
    description: "Plataforma brasileira de acessibilidade digital com plugin para sites e aplicativo de tradução para línguas de sinais.",
    website: "https://handtalk.me",
  },
  {
    id: "d03", name: "Livox", categoryId: "acessibilidade",
    description: "Aplicativo de comunicação alternativa com inteligência artificial para dar voz a pessoas com deficiência.",
    website: "https://livox.com.br",
    city: "Olinda", state: "PE",
  },

  /* ══════════════════════════════════════
     INSTITUIÇÕES NACIONAIS
     ══════════════════════════════════════ */
  {
    id: "n01", name: "Fundação Dorina Nowill para Cegos", categoryId: "instituicoes",
    description: "Reabilitação, educação inclusiva, clínica de visão subnormal, empregabilidade e materiais acessíveis.",
    phone: "(11) 5087-0999",
    website: "https://fundacaodorina.org.br",
  },
  {
    id: "n02", name: "Instituto Jô Clemente (IJC)", categoryId: "instituicoes",
    description: "Prevenção e promoção da saúde de pessoas com deficiência intelectual. Serviços ligados ao TEA e transtornos do neurodesenvolvimento.",
    phone: "(11) 5080-7000", email: "atendimento@ijc.org.br",
    website: "https://ijc.org.br",
  },

  /* ══════════════════════════════════════
     PROJETOS LOCAIS
     ══════════════════════════════════════ */
  {
    id: "l01", name: "Mãos que Conectam", categoryId: "local",
    description: "Projeto da Prefeitura de Uberlândia para intermediação da comunicação em Libras nos equipamentos públicos municipais, em parceria com a plataforma Icom.",
    city: "Uberlândia", state: "MG",
  },
];

export const firstSteps: FirstStepSection[] = [
  {
    title: "Buscar ajuda é coragem",
    content: "Procurar apoio psicológico não é sinal de fraqueza. É um ato de autocuidado e respeito consigo mesmo. Muitas pessoas sentem medo ou vergonha — e tudo bem sentir isso. O importante é não deixar o medo decidir por você.",
    icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  },
  {
    title: "Como funciona a terapia",
    content: "Na terapia, você conversa com um profissional qualificado em um espaço seguro e sigiloso. Não existe certo ou errado no que você sente. O psicólogo está ali para acolher, não para julgar. As sessões costumam durar cerca de 50 minutos.",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  },
  {
    title: "A primeira consulta",
    content: "É normal sentir ansiedade antes da primeira sessão. Você não precisa ter tudo organizado na cabeça. O primeiro encontro é para vocês se conhecerem. Você pode perguntar, pode chorar, pode até ficar em silêncio. O ritmo é seu.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Saúde mental sem estigma",
    content: "Cuidar da mente é tão importante quanto cuidar do corpo. Não existe 'frescura' ou 'drama' quando falamos de sofrimento emocional. Cada pessoa tem sua história, seus limites e suas dores. Todas elas merecem acolhimento.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

export const clinicaEscola = {
  name: "Centro de Psicologia da UFU",
  institution: "Universidade Federal de Uberlândia",
  description:
    "Atendimento psicológico gratuito à comunidade, supervisionado por professores " +
    "da UFU. Atende crianças, adolescentes, adultos e idosos. Funciona com lista " +
    "de espera.",
  services: [
    "Triagem psicológica",
    "Psicoterapia individual",
    "Atendimento infantil",
    "Atendimento a adolescentes",
    "Atendimento a adultos e idosos",
  ],
  contact: {
    phone: "(34) 3225-8503",
    phone2: "(34) 3225-8508",
    hours: "Segunda a sexta, 8h às 18h",
  },
};
