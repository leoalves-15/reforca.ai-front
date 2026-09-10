export type Video = {
  id: string;
  title: string;
  channel: string;
  youtubeId: string;
};

export type Article = {
  id: string;
  title: string;
  source: string;
  url: string;
};

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Como Somar? Aula infantil sobre Adição',
    channel: 'Tia Lu',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'v2',
    title: 'Adição: Como aprender a somar?',
    channel: 'Profa. Carla',
    youtubeId: 'dQw4w9WgXcQ',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Introdução à Adição para Crianças',
    source: 'Portal Educação',
    url: 'https://example.com',
  },
  {
    id: 'a2',
    title: 'Dicas para ensinar adição aos alunos',
    source: 'Nova Escola',
    url: 'https://example.com',
  },
];