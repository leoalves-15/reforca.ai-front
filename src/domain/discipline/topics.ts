export type Topic = {
  id: string;
  title: string;
  description: string;
  disciplineId: string;
};

export const TOPICS: Topic[] = [
  {
    id: 'adicao',
    title: 'Adição',
    description: 'Aprenda a somar números de forma simples e prática',
    disciplineId: 'matematica',
  },
  {
    id: 'subtracao',
    title: 'Subtração',
    description: 'Entenda como tirar quantidades e resolver problemas',
    disciplineId: 'matematica',
  },
  {
    id: 'leitura',
    title: 'Leitura e interpretação',
    description: 'Desenvolva a compreensão de textos',
    disciplineId: 'portugues',
  },
];