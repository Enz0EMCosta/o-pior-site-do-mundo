import presentation from '../assets/historia/apresentacao-root.png';
import whatsapp from '../assets/historia/mensagem-whatsapp.png';
import firstSelection from '../assets/historia/primeira-selecao.png';
import hackathon from '../assets/historia/hackathon.png';
import secondSelection from '../assets/historia/segunda-selecao.png';
import semac from '../assets/historia/semac.png';

export const historyEntries = [
  {
    id: 'projeto-root',
    milestone: '2022 · Projeto Root',
    title: 'De uma mensagem a uma liga',
    text: 'Na volta às aulas presenciais da UFS, estudantes de Sistemas de Informação se reuniram para criar um site que ajudasse os próximos calouros do DCOMP. O Projeto Root chegou a uma primeira versão, apresentada ao departamento, e abriu caminho para a criação da LAWD.',
    image: presentation,
    width: 842,
    height: 470,
    alt: 'Estudantes apresentam a primeira versão do site do DCOMP em uma sala de aula.',
  },
  {
    id: 'mensagem-whatsapp',
    milestone: '20 de julho de 2022',
    title: 'Tudo começou no WhatsApp',
    text: 'Uma mensagem no grupo da turma convidava todo mundo a construir o site. A proposta era reunir informações úteis sobre os cursos e compartilhar o que cada pessoa sabia. Ninguém precisava saber programar para participar.',
    image: whatsapp,
    width: 290,
    height: 378,
    alt: 'Captura do grupo de Sistemas de Informação com a mensagem que apresenta e convida a turma para o Projeto Root.',
  },
  {
    id: 'primeira-selecao',
    milestone: 'Fundação e primeira seleção',
    title: 'A equipe cresce para 20 membros',
    text: 'O grupo se apresentou como liga ao DCOMP e à UFS, junto à LADATA, em dezembro de 2022. Em 31 de agosto de 2023, a PROEX aprovou a fundação da LAWD. O primeiro processo seletivo ampliou a equipe para 20 membros e abriu espaço para novas parcerias.',
    image: firstSelection,
    width: 883,
    height: 501,
    alt: 'Integrantes da LAWD reunidos do lado de fora na primeira reunião após a seleção.',
  },
  {
    id: 'hackathon',
    milestone: '2024 · Eventos e parcerias',
    title: 'A liga ganha espaço em novos eventos',
    text: 'Em 2024, a LAWD ampliou sua participação em eventos e projetos com o DCOMP e a UFS. O Hackathon Sebrae foi um dos momentos registrados pela equipe.',
    image: hackathon,
    width: 785,
    height: 396,
    alt: 'Equipe reunida diante do painel do Hackathon Sebrae 2024.',
  },
  {
    id: 'segunda-selecao',
    milestone: '2025 · Expansão',
    title: 'De 20 para 36 integrantes',
    text: 'A segunda seleção teve 88 inscrições e três etapas. Com 16 novos membros, a liga cresceu e começou, junto à SECOM, à STI, à DAIN e ao DCOMP, a reformular o Portal UFS. Dessa colaboração também veio o Web Lab.',
    extra: 'A LAWD também desenvolveu uma aplicação para o Programa Oportunidade Aprendiz em parceria com o Ministério Público de Sergipe e ofereceu um curso de desenvolvimento web full stack à STI da UFS.',
    image: secondSelection,
    width: 841,
    height: 457,
    alt: 'Integrantes da segunda seleção da LAWD reunidos em uma sala de aula.',
  },
  {
    id: 'decima-semac',
    milestone: 'Memória da 10ª SEMAC',
    title: 'Duzentas vagas em menos de dez minutos',
    text: 'Na 10ª SEMAC, a liga levou o desenvolvimento web à comunidade em minicursos e workshops. As 200 vagas se esgotaram em menos de dez minutos. O espírito do Projeto Root seguia ali: aprender em conjunto e abrir espaço para quem está começando.',
    image: semac,
    width: 250,
    height: 296,
    alt: 'Quadro com desenhos de programação e o título da 10ª SEMAC.',
  },
];
