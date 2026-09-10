import { useNavigate } from "react-router-dom"

export function useHome(serie: string) {

  const navigate = useNavigate()

  function openSubject(disciplinaId: string) {
    navigate(`/disciplina/${serie}/${disciplinaId}`)
  }

  return {
    openSubject
  }
}