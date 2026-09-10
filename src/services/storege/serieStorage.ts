//No RN: troca por AsyncStorage, o resto fica igual.
const KEY = 'serieSelecionada';

export function getSerie(): string | null {
  return localStorage.getItem(KEY);
}

export function saveSerie(serie: string) {
  localStorage.setItem(KEY, serie);
}