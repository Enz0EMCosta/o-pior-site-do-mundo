const selectionSource = 'https://www.ufs.br/conteudo/79540-liga-academica-de-desenvolvimento-web-abre-selecao-para-estudantes-de-todos-os-cursos-da-universidade';
const programSource = 'https://portalccbs.ufs.br/conteudo/80431-programacao-completa-do-ccbs-na-xii-semac-2026';
export const course = {
  title: 'Fábrica de Botões Impossíveis',
  date: '2026-11-26',
  weekday: 'quinta-feira',
  time: '15:40',
};
export const courseDateLabel = course.date.split('-').reverse().join('/');

export const archive = [
  {
    id: 'semac-2026',
    topic: 'program',
    heading: 'Semana Acadêmico-Cultural da UFS',
    title: 'A SEMAC ocupa a UFS de 23 a 28 de novembro',
    text: 'A 12ª Semana Acadêmico-Cultural da Universidade Federal de Sergipe reúne oficinas, palestras, mostras e atividades culturais em todos os campi.',
    extra: 'O tema da edição de 2026 é Universidade sem Barreiras: Diversidade, Inclusão e Justiça Social.',
    source: 'https://www.ufs.br/noticia/80380-universidade-sem-barreiras-12-semac-da-ufs-acontece-de-23-a-28-de-novembro',
  },
  {
    id: 'minicurso-power-bi',
    topic: 'program',
    heading: 'Power BI com dados clínicos',
    title: 'Power BI com dados clínicos',
    text: 'Minicurso do CCBS. Dia 27/11, das 8h às 12h, no laboratório C1 do Departamento de Computação (DCOMP).',
    extra: 'A atividade é ministrada por Michael Alves dos Santos e Cauan Teixeira Machado.',
    source: programSource,
  },
  {
    id: 'portal-ufs',
    topic: 'projects',
    heading: 'Novo Portal UFS',
    title: 'A LAWD mexeu no Portal UFS inteiro?',
    text: 'Em maio de 2026, a UFS lançou a primeira etapa de seu novo portal. Membros da LAWD trabalharam com professores e servidores na reformulação da página inicial e da seção de notícias.',
    extra: 'A equipe criou padrões visuais reutilizáveis e trabalhou para que a navegação e o acesso às informações fossem mais simples. Compare essa prioridade com a experiência de procurar algo neste blog.',
    source: 'https://www.ufs.br/noticia/79408-nos-seus-58-anos-ufs-moderniza-comunicacao-e-lanca-novo-portal-focado-em-acessibilidade',
  },
  {
    id: 'sobre-a-lawd',
    topic: 'league',
    heading: 'Sobre a LAWD',
    title: 'Quem é a LAWD?',
    text: 'A Liga Acadêmica de Desenvolvimento Web é vinculada ao DCOMP da UFS. Seus estudantes atuam em projetos web e desenvolvem conhecimento por meio de ensino, pesquisa e extensão.',
    extra: 'O processo seletivo de 2026 aceitou estudantes de qualquer curso de graduação da UFS, inclusive quem ainda estava começando a programar.',
    source: selectionSource,
  },
  {
    id: 'simgrade',
    topic: 'projects',
    heading: 'SIMGrade',
    title: 'Montar a grade antes do SIGAA travar',
    text: 'A LAWD desenvolveu o SIMGrade, um simulador de matrícula que ajuda estudantes da UFS a planejar a grade e conferir conflitos de horário.',
    extra: 'A ideia é chegar à matrícula com as combinações já testadas. O Portal UFS apresenta o simulador como uma iniciativa para aliviar a demanda sobre o SIGAA.',
    source: selectionSource,
  },
  {
    id: 'minicurso-paleosergipe',
    topic: 'program',
    heading: 'Paleoambientes do Cretáceo',
    title: 'Do navegador direto para o Cretáceo',
    text: 'O Departamento de Biologia oferece um minicurso sobre os paleoambientes de Sergipe. Dia 24/11, das 8h às 12h, na sala 2A do Bloco A do DBI.',
    extra: 'O minicurso aborda os ambientes e habitantes de Sergipe no período Cretáceo.',
    source: programSource,
  },
  {
    id: 'selecao-lawd',
    topic: 'league',
    heading: 'Processo seletivo 2026',
    title: 'Seleção 2026: tinha vaga fora do código',
    text: 'Além da frente técnica, a seleção da LAWD ofereceu oportunidades em marketing, finanças e gestão de pessoas. A participação na liga conta como atividade de extensão.',
    extra: 'As inscrições dessa edição encerraram em 19 de junho de 2026. A liga divulga novos processos seletivos em seu Instagram.',
    source: selectionSource,
  },
  {
    id: 'sistema-poa',
    topic: 'projects',
    heading: 'Sistema POA',
    title: 'Um sistema web para abrir oportunidades',
    text: 'O Portal UFS cita o Sistema POA entre os projetos da frente técnica da liga. A iniciativa é feita em parceria com o Ministério Público de Sergipe.',
    extra: 'O projeto busca ampliar oportunidades de trabalho para adolescentes em situação de vulnerabilidade.',
    source: selectionSource,
  },
  {
    id: 'minicurso-estatistica',
    topic: 'program',
    heading: 'Princípios de estatística',
    title: 'Antes do gráfico, arrume os dados',
    text: 'Em 24/11, das 8h às 12h, o Departamento de Farmácia oferece um minicurso de princípios de estatística no auditório do DFA.',
    extra: 'A atividade aborda como organizar e analisar dados. A programação foi divulgada pelo CCBS.',
    source: programSource,
  },
  {
    id: 'oficinas-lawd',
    topic: 'league',
    heading: 'Cursos e oficinas da LAWD',
    title: 'O que a liga faz além dos projetos?',
    text: 'A LAWD organiza cursos e workshops sobre desenvolvimento web com exercícios práticos. Também promove encontros que aproximam estudantes de profissionais da área.',
    extra: 'A organização mantém no GitHub repositórios públicos de projetos e materiais de atividades, incluindo um exercício de Git usado no nivelamento de 2025.',
    source: 'https://github.com/Lawd-UFS',
  },
];

export const mural: {
  author: 'Lau' | 'Enzo' | 'PP' | 'Leticia' | 'Nicolas' | 'Gabriel';
  message: string;
  target?: string;
  label?: string;
}[] = [
  { author: 'Lau', message: 'A programação que vale está no post da semana. Aqui tem três links chamados “programação”. Boa sorte.', target: 'semac-2026', label: 'Acho que era este' },
  { author: 'Enzo', message: `A oficina Fábrica de Botões Impossíveis ficou na ${course.weekday}. A pasta do arquivo tem a folha com o número do dia.`, target: 'pasta-antiga', label: 'Ver pasta' },
  { author: 'PP', message: 'Atualizei a lista de links. O da grade foi parar entre o do Cretáceo e o da seleção.', target: 'simgrade', label: 'Abrir a coisa da grade' },
  { author: 'Leticia', message: 'O início da oficina está junto da reserva do projetor. Deixaram essa caixa lá no fim das notícias.' },
  { author: 'Nicolas', message: 'Se alguém quiser ver o que foi feito no Portal UFS, o post está lá no meio.', target: 'portal-ufs', label: 'Post do portal' },
  { author: 'Gabriel', message: 'A confirmação da oficina está dentro de um bloco que parece uma enquete. Procure as ferramentas do blog.' },
];
