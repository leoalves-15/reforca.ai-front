import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown" // Importação da biblioteca
import { useBNCC } from "../../hooks/useBncc"
import { styles } from "./styles"

export default function EducationalContent() {
  const { disciplinaId, objetoId, habilidadeId, serie } = useParams()
  const bncc = useBNCC(serie as string)
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const parseContent = (text: string) => {
    if (!text) return null;

    const extract = (regex: RegExp) => {
      const match = text.match(regex);
      if (!match || !match[1]) return "";
      
      return match[1].trim().replace(/^[\*\s'":#]+|[\*\s'":#]+$/g, "");
    };

    return {
      introducao: extract(/INTRODUÇÃO PARA O ADULTO:?\s*\*?\*?([\s\S]*?)(?=\n(?:\d\.|\*\*?\d\.|\n|$))/i),
      conversa: extract(/HORA DA CONVERSA:?\s*\*?\*?([\s\S]*?)(?=\n(?:\d\.|\*\*?\d\.|\n|$))/i),
      atividade: extract(/ATIVIDADE MÃO NA MASSA:?\s*\*?\*?([\s\S]*?)(?=\n(?:\d\.|\*\*?\d\.|\n|$))/i),
      desafio: extract(/DESAFIO RÁPIDO:?\s*\*?\*?([\s\S]*?)(?=\n(?:\d\.|\*\*?\d\.|\n|$))/i),
      dica: extract(/DICA DE OURO:?\s*\*?\*?([\s\S]*?)(?=\n(?:\d\.|\*\*?\d\.|\n|$))/i)
    };
  };

  useEffect(() => {
    async function loadContent() {
      if (!bncc || !objetoId || !habilidadeId) return
      const objeto = bncc.objects[objetoId]
      const habilidade = bncc.skills[habilidadeId]

      try {
        const response = await fetch("http://localhost:3001/api/content", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            serie,
            disciplina: disciplinaId,
            objeto: objeto.name,
            habilidade: habilidade.description
          })
        })
        const data = await response.json()
        const parsed = parseContent(data.content)
        setContent(parsed)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    loadContent()
  }, [bncc, objetoId, habilidadeId, disciplinaId, serie])

  if (loading) return <div style={styles.loadingContainer}>✨ Criando aula mágica...</div>

  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <div style={styles.contextCard}>
        <span style={styles.badge}>{serie}º ANO</span>
        <h1 style={styles.title}>{bncc?.objects[objetoId as string]?.name}</h1>
      </div>

      <div style={styles.steps}>

        {/* 1. Introdução para o Pai */}
        {content?.introducao && (
          <div style={styles.parentCard}>
            <div style={styles.cardHeader}>
              <span style={styles.icon}>👨‍🏫</span>
              <h3 style={styles.stepTitle}>Dica para o adulto</h3>
            </div>
            <div style={styles.markdownContainer}>
              <ReactMarkdown>{content.introducao}</ReactMarkdown>
            </div>
          </div>
        )}

        {/* 2. Conversa com a criança */}
        {content?.conversa && (
          <div style={styles.stepCard}>
            <div style={styles.cardHeader}>
              <span style={styles.stepNumber}>1</span>
              <h3 style={styles.stepTitle}>Hora de conversar</h3>
            </div>
            <div style={styles.bubble}>
              <div style={styles.markdownContainer}>
                <ReactMarkdown>{content.conversa}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* 3. Atividade e Desafio */}
        {(content?.atividade || content?.desafio) && (
          <div style={styles.stepCard}>
            <div style={styles.cardHeader}>
              <span style={styles.stepNumber}>2</span>
              <h3 style={styles.stepTitle}>Mão na massa</h3>
            </div>

            <div style={styles.markdownContainer}>
              <ReactMarkdown>{`**O que fazer:**\n${content.atividade}`}</ReactMarkdown>
            </div>

            {content.desafio && (
              <div style={styles.desafioBox}>
                <div style={styles.markdownContainer}>
                  <ReactMarkdown>{content.desafio}</ReactMarkdown>
                </div>
              </div>
            )}

            <button style={styles.primaryButton}>Concluímos a tarefa!</button>
          </div>
        )}
      </div>

      {/* Dica de Ouro */}
      {content?.dica && (
        <div style={styles.tipBox}>
          <span style={{ fontSize: 24 }}>💡</span>
          <div style={styles.markdownContainer}>
            <ReactMarkdown>{`**Dica de Ouro:** \n${content.dica}`}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}