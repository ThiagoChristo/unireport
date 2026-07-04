// Dados Padrão (Template Base) para o Relatório
export const defaultData = {
    curso: "Engenharia de Software",
    aluno: "",
    ru: "",
    ano: 2026,
    intro_profissao: "",
    intro_motivo: "",
    atividades: [
        "Desenvolver e manter sistemas web e desktop de alto desempenho",
        "Projetar e otimizar arquiteturas de banco de dados relacionais e não relacionais",
        "Escrever testes de software (unitários e de integração) para assegurar a qualidade do produto"
    ],
    setores: [
        "Empresas de desenvolvimento de tecnologia (Software Houses) e Startups",
        "Setor corporativo tradicional (Bancos, Seguradoras, E-commerces)",
        "Atuação como profissional autônomo (Freelancer) ou trabalho remoto internacional"
    ],
    comp_tecnicas: [
        { nome: "Programação e lógica em linguagens modernas", desc: "Necessário para codificar soluções computacionais utilizando Javascript, Python, Java, C#, C++ ou Kotlin." },
        { nome: "Modelagem e consultas em bancos de dados", desc: "Importante para persistir, organizar e acessar os dados de negócios eficientemente via SQL (Postgres, MySQL) ou NoSQL." },
        { nome: "Versionamento de código com Git/GitHub", desc: "Indispensável para o trabalho colaborativo no dia a dia, organização de branches e revisão de código." },
        { nome: "Estruturas de Dados e Algoritmos", desc: "Base conceitual essencial para estruturar soluções de forma performática e otimizar o consumo de recursos." },
        { nome: "Conceitos de redes e APIs RESTful", desc: "Necessário para criar a integração de serviços web e comunicação entre sistemas distribuídos." }
    ],
    comp_comportamentais: [
        { nome: "Comunicação clara e assertiva", desc: "Essencial para traduzir a necessidade dos clientes ou stakeholders de negócio em especificações técnicas." },
        { nome: "Trabalho em equipe e colaboração", desc: "O desenvolvimento é multidisciplinar, envolvendo gerentes de produto, designers e outros programadores." },
        { nome: "Resolução de problemas complexos", desc: "Habilidade mental de quebrar problemas grandes em partes acionáveis menores e lógicas." },
        { nome: "Adaptabilidade e resiliência", desc: "A área de tecnologia passa por constantes mudanças de escopo e atualizações rápidas de ferramentas." },
        { nome: "Aprendizado contínuo (Autodidatismo)", desc: "Como a tecnologia evolui exponencialmente, a capacidade de se autoeducar é o maior ativo de carreira." }
    ],
    tecnologias: [
        { nome: "Visual Studio Code / WebStorm", desc: "Ambiente de desenvolvimento integrado (IDE) principal para edição do código de forma ágil." },
        { nome: "Docker / Conteinerização", desc: "Usado para empacotar o projeto em containers, garantindo que rode exatamente da mesma forma em qualquer máquina." },
        { nome: "Git / GitLab / GitHub", desc: "Plataformas de hospedagem de repositórios, revisão de código e automação de pipelines." },
        { nome: "PostgreSQL / SQLite", desc: "Sistemas gerenciadores de banco de dados robustos para manipulação de registros de dados." },
        { nome: "Postman / Insomnia", desc: "Ferramentas essenciais para testar o comportamento e as rotas das APIs durante a codificação." }
    ],
    ingresso: [
        "Estágio acadêmico durante a graduação para ganho de experiência inicial",
        "Desenvolvimento de projetos práticos autorais para exibição de portfólio no GitHub",
        "Participação ativa em comunidades locais de desenvolvedores e eventos de tecnologia (Hackathons)"
    ],
    desafios: [
        { nome: "Alta velocidade de obsolescência das tecnologias", desc: "Focar em entender conceitos fundamentais sólidos (lógica, algoritmos, arquitetura de sistemas) que não mudam." },
        { nome: "Conquista da primeira oportunidade sem experiência comercial", desc: "Criar projetos próprios completos publicados, documentar a jornada e participar de comunidades profissionais." },
        { nome: "Lidar com a Síndrome do Impostor", desc: "Manter uma rotina de autoavaliação baseada em entregas concretas e não se comparar com profissionais sêniores." }
    ],
    tendencias: [
        "Adoção massiva de assistentes de Inteligência Artificial (copilotos) na escrita e revisão de código",
        "Aumento da demanda por arquiteturas em nuvem (Cloud Computing) e segurança cibernética integrada",
        "Flexibilidade do trabalho remoto com foco em entregas e gestão ágil de projetos (Scrum / Kanban)"
    ],
    relacao: [
        "A disciplina de Lógica de Programação ensina a estruturar as primeiras instruções e raciocínio lógico",
        "A disciplina de Banco de Dados fornece a bagagem teórica e prática para armazenar e organizar informações",
        "O Projeto Interdisciplinar estimula a pesquisa empírica, a organização e o desenvolvimento profissional planejado"
    ],
    ref_91: "",
    ref_92: "",
    ref_93: "",
    ref_94: "",
    ref_95: "",
    ref_96: "",
    ref_97: "",
    planejamento: [
        { prazo: "Próximos 6 meses", acad: "", prof: "", acao: "" },
        { prazo: "Próximo 1 ano", acad: "", prof: "", acao: "" },
        { prazo: "Próximos 3 anos", acad: "", prof: "", acao: "" }
    ],
    custos: [
        { item: "Internet/celular", nec: "Sim", valor: "120,00", obs: "Acesso estável a internet banda larga para aulas e estudos" },
        { item: "Computador ou manutenção", nec: "Sim", valor: "3.500,00", obs: "Notebook adequado com mínimo de 16GB RAM e SSD" },
        { item: "Curso complementar", nec: "Não", valor: "0,00", obs: "Aproveitamento de plataformas gratuitas e materiais da universidade" },
        { item: "Certificação", nec: "Não", valor: "0,00", obs: "Planejado para médio prazo após consolidação na carreira" },
        { item: "Livros ou materiais", nec: "Não", valor: "0,00", obs: "Utilização da biblioteca digital universitária" },
        { item: "Transporte ou deslocamento", nec: "Não", valor: "0,00", obs: "Curso realizado na modalidade EaD, polo visitado ocasionalmente" },
        { item: "Outro item", nec: "Não", valor: "0,00", obs: "Cadeira ergonômica para manter saúde postural" }
    ],
    fin_meta: "",
    fin_valor: "",
    fin_prazo: "",
    fin_mensal: "",
    fin_ajuste: "",
    aprendizados: [
        "A carreira em Computação exige aprendizado contínuo devido ao avanço constante das tecnologias",
        "Identificar a combinação necessária de competências comportamentais e técnicas ajuda a guiar o foco dos estudos",
        "A educação financeira e o planejamento de longo prazo evitam escolhas impulsivas e desorganização acadêmica"
    ],
    contribuicao: [
        "Esclareceu quais são as reais atribuições de um engenheiro de software no mercado corporativo atual",
        "Permitiu estabelecer metas concretas de curto e médio prazo de forma realista"
    ],
    intencoes: [
        "Focar no domínio de estruturas de dados e algoritmos nos próximos meses",
        "Criar um cronograma diário fixo para estudos práticos e desenvolvimento de projetos pessoais"
    ],
    referencias: [
        "SBC - Sociedade Brasileira de Computação. Guia de Carreiras em TI. Disponível em: <https://www.sbc.org.br>.",
        "Roadmap.sh. Developer Learning Roadmaps. Disponível em: <https://roadmap.sh>.",
        "LinkedIn / InfoJobs. Consulta a anúncios de vagas de nível júnior em computação. Acessado em 2026."
    ],
    checklist_manual: {}
};

// Itens oficiais do Checklist da UNINTER
export const checklistItems = [
    { id: 'chk_profissao', text: 'Escolhi uma profissão ou área da Computação.', sec: 'capa' },
    { id: 'chk_o_que_faz', text: 'Expliquei o que esse profissional faz.', sec: 'profissao' },
    { id: 'chk_onde_atua', text: 'Identifiquei onde esse profissional pode atuar.', sec: 'profissao' },
    { id: 'chk_comp_tec', text: 'Listei competências técnicas.', sec: 'competencias' },
    { id: 'chk_comp_comport', text: 'Listei competências comportamentais.', sec: 'competencias' },
    { id: 'chk_tecnologias', text: 'Apontei tecnologias e ferramentas utilizadas.', sec: 'tecnologias' },
    { id: 'chk_ingresso', text: 'Expliquei formas de ingresso na área.', sec: 'ingresso' },
    { id: 'chk_desafios', text: 'Descrevi desafios da profissão.', sec: 'desafios' },
    { id: 'chk_tendencias', text: 'Comentei tendências futuras.', sec: 'tendencias' },
    { id: 'chk_relacao_curso', text: 'Relacionei a profissão com meu curso.', sec: 'relacao-curso' },
    { id: 'chk_reflexao', text: 'Fiz uma reflexão pessoal sobre carreira (Questões 9.1 a 9.7).', sec: 'reflexao' },
    { id: 'chk_planejamento', text: 'Preenchi o planejamento inicial de carreira (Prazos na Tabela).', sec: 'planejamento' },
    { id: 'chk_financeira', text: 'Incluí a parte de educação financeira (Custos e Meta).', sec: 'financeiro' },
    { id: 'chk_conclusao', text: 'Escrevi a conclusão.', sec: 'conclusao' },
    { id: 'chk_referencias', text: 'Listei as referências bibliográficas.', sec: 'referencias' }
];
