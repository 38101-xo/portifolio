export const projectsData = [
  {
    id: "pink-store",
    title: "Pink Store",
    tagline: "E-commerce conceitual com foco em experiência visual e design minimalista",
    category: "Desenvolvimento Front-end & E-commerce",
    badge: "Projeto Conceitual Demonstrativo",
    featured: true,
    year: "2025",
    description: "Uma loja virtual fictícia pensada para explorar as melhores práticas de layout moderno, arquitetura de componentes de vitrine de produtos, filtros por categorias e carrinho interativo responsivo.",
    technologies: ["HTML5", "CSS3 / Flexbox & Grid", "JavaScript (ES6+)", "UI Design", "Responsividade"],
    conceptDetails: {
      objective: "Criar uma experiência fluida de compras online para uma marca autoral de itens de tecnologia, papelaria e acessórios de design.",
      highlights: [
        "Vitrine dinâmica com cards de produtos com hover interativo",
        "Filtragem instantânea por categorias (Acessórios, Tech Decor, Office)",
        "Gaveta de carrinho interativa com cálculo de subtotal automático",
        "Layout totalmente adaptado para telas mobile, tablet e desktop"
      ],
      deliverables: ["Prototipagem no Figma", "Componentização estrutural", "Interatividade em JavaScript"]
    },
    demoItems: [
      { id: 1, name: "Teclado Mecânico Rose Minimal", category: "Tech Decor", price: 289.90, color: "#D98CA3" },
      { id: 2, name: "Mousepad Ergonômico Blush", category: "Acessórios", price: 79.90, color: "#F7E8ED" },
      { id: 3, name: "Suporte Articulado Vinho Matte", category: "Office", price: 149.00, color: "#6D2945" },
      { id: 4, name: "Luminária LED Minimalist Ambient", category: "Tech Decor", price: 119.50, color: "#D98CA3" }
    ]
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "Aplicativo de produtividade e gestão ágil de tarefas diárias",
    category: "Aplicação Web Interativa",
    badge: "Projeto Conceitual Demonstrativo",
    featured: true,
    year: "2025",
    description: "Aplicativo conceitual de organização pessoal e de estudos. Permite cadastrar, categorizar, filtrar e concluir tarefas com uma interface limpa, focada em usabilidade e redução de distrações.",
    technologies: ["JavaScript Moderno", "Manipulação de Estado", "HTML Semântico", "CSS Avançado", "UX Research"],
    conceptDetails: {
      objective: "Desenvolver uma ferramenta rápida e intuitiva para estudantes e profissionais de TI organizarem sprints de estudos e entregas.",
      highlights: [
        "Criação, checagem e exclusão de tarefas em tempo real",
        "Indicador visual de progresso e estatísticas de conclusão",
        "Filtros de status: Todas, Pendentes e Concluídas",
        "Design visual com feedback tátil e microinterações elegantes"
      ],
      deliverables: ["Lógica de arrays e filtros em JS", "Design acessível", "Armazenamento conceitual em memória"]
    },
    initialTasks: [
      { id: 1, text: "Estruturar tags semânticas no HTML5", completed: true, category: "Estudo" },
      { id: 2, text: "Ajustar alinhamentos no CSS Flexbox", completed: true, category: "Prática" },
      { id: 3, text: "Implementar interatividade com eventos em JavaScript", completed: false, category: "Código" },
      { id: 4, text: "Testar responsividade em dispositivos móveis", completed: false, category: "Testes" }
    ]
  },
  {
    id: "techcare",
    title: "TechCare",
    tagline: "Plataforma de soluções e suporte técnico com atendimento humanizado",
    category: "Landing Page & Plataforma Institucional",
    badge: "Projeto Conceitual Demonstrativo",
    featured: true,
    year: "2025",
    description: "Plataforma conceitual de suporte tecnológico voltada para pequenas empresas e autônomos. Apresenta catálogo de serviços especializados, triagem inteligente de chamados e canal de agendamento ágil.",
    technologies: ["Design Responsivo", "Validação de Formulários", "Estrutura Semântica", "CSS Moderno", "UI/UX"],
    conceptDetails: {
      objective: "Transmitir confiança, clareza técnica e acessibilidade no atendimento a demandas de infraestrutura, websites e suporte de TI.",
      highlights: [
        "Apresentação estruturada de pacotes de serviços e SLA",
        "Simulador interativo de diagnóstico rápido de TI",
        "Formulário conceitual de abertura de chamado com validações",
        "Identidade visual executiva com paleta suave e contrastes claros"
      ],
      deliverables: ["Arquitetura de informação", "Guia de estilo digital", "Simulação de fluxo de atendimento"]
    },
    services: [
      {
        title: "Suporte e Diagnóstico Remoto",
        desc: "Resolução ágil de lentidão, configurações de rede e softwares essenciais com segurança.",
        tag: "TI Essencial"
      },
      {
        title: "Otimização e Presença Web",
        desc: "Manutenção preventiva de sites, melhorias de carregamento e adaptação mobile.",
        tag: "Web Solutions"
      },
      {
        title: "Segurança & Backup em Nuvem",
        desc: "Estratégias de preservação de dados e proteção de credenciais para home office.",
        tag: "Proteção"
      }
    ]
  }
];
