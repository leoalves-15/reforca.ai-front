import { useParams } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { styles } from "./styles"
import { useBNCC } from "../../hooks/useBncc"

export default function Home() {

  const { serie } = useParams() 
  const { openSubject } = useHome(serie as string) 
  const bncc = useBNCC(serie as string) 

  if (!bncc) {
    return <div style={styles.container}>Carregando disciplinas...</div>
  }

  const disciplinas = Object.values(bncc.disciplines)

  return (
    <div style={styles.container}>
      <div style={styles.imagePlaceholder} />

      <h1 style={styles.title}>
        Vamos aprender juntos!
      </h1>

      <h2 style={styles.subtitle}>
        Escolha uma disciplina para começar:
      </h2>

      <div style={styles.grid}>
        {disciplinas.map((disciplina: any) => (
          <div
            key={disciplina.id}
            style={styles.card}
            onClick={() => openSubject(disciplina.id)}
          >
            <div style={styles.label}>{disciplina.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}