export type Subject = {
  id: string;
  label: string;
  icon: string;
  route: string;
};

export const SUBJECTS: Subject[] = [
  { id: 'portugues', label: 'Português', icon: '📘', route: '/conteudos/:portugues' },
  { id: 'matematica', label: 'Matemática', icon: '➗', route: '/conteudos/:matematica' },
];