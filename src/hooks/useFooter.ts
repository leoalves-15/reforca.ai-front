import { useSerie } from '../domain/series/SerieContext';

export type FooterItem = {
  id: string;
  label: string;
  route: string;
  icon: string;
};

export function useFooter() {
  const { serie } = useSerie();

  const items: FooterItem[] = [
    { id: 'home', label: 'Início', route: `/home/${serie}`, icon: '🏠' },
    { id: 'assistente', label: 'Assistente', route: '/assistente', icon: '🤖' },
  ];

  return { items };
}