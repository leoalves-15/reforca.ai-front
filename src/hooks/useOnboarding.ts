import { useSerie } from '../domain/series/SerieContext';
import { isValidGrade } from '../domain/onboarding/onboardingRules';

export function useOnboarding() {
  const { serie, setSerie } = useSerie();

  function updateSerie(value: string) {
    setSerie(value)
    localStorage.setItem("serie", value) 
  }

  function submit() {
    if (!isValidGrade(serie)) return false
    return true
  }

  return {
    serie,
    setSerie: updateSerie, 
    submit,
  };
}