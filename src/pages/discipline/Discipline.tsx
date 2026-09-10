import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useBNCC } from "../../hooks/useBncc"
import { styles } from "./styles"

export default function Discipline() {

  const { disciplinaId, serie } = useParams()
  const navigate = useNavigate()

  const bncc = useBNCC(serie as string) 

  const [search, setSearch] = useState("")
  const [openTopic, setOpenTopic] = useState<string | null>(null)
  const [openObject, setOpenObject] = useState<string | null>(null)

  if (!bncc) {
    return (
      <div style={styles.container}>
        Carregando conteúdos...
      </div>
    )
  }

  const discipline = bncc.disciplines[disciplinaId as string]

  if (!discipline) {
    return (
      <div style={styles.container}>
        Disciplina não encontrada
      </div>
    )
  }

  const topics = discipline.topics
    .map((topicId: string) => bncc.topics[topicId])
    .filter((topic: any) =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    )

  function toggleTopic(topicId: string) {

    if (openTopic === topicId) {
      setOpenTopic(null)
      return
    }

    setOpenTopic(topicId)
    setOpenObject(null)
  }

  function toggleObject(e: any, objectId: string) {

    e.stopPropagation()

    if (openObject === objectId) {
      setOpenObject(null)
      return
    }

    setOpenObject(objectId)
  }

  function openSkill(
    e: any,
    objectId: string,
    skillId: string
  ) {

    e.stopPropagation()

    navigate(`/conteudo/${disciplinaId}/${serie}/${encodeURIComponent(objectId)}/${skillId}`)

  }

  return (
    <div style={styles.container}>

      <div style={styles.containSearch}>
        <input
          name="search-content"
          type="text"
          placeholder="Pesquisar unidade temática..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      </div>

      <div style={styles.list}>

        {!topics?.length && (
          <div>Nenhum conteúdo encontrado</div>
        )}

        {topics.map((topic: any) => (

          <div key={topic.id}>

            <div
              style={styles.card}
              onClick={() => toggleTopic(topic.id)}
            >
              <div style={styles.cardTitle}>
                {topic.name}
              </div>
            </div>

            {openTopic === topic.id && (

              <div style={{ marginLeft: 20 }}>

                {topic.objects.map((objectId: string) => {

                  const obj = bncc.objects[objectId]

                  return (

                    <div key={obj.id}>

                      <div
                        style={styles.cardObject}
                        onClick={(e) => toggleObject(e, obj.id)}
                      >
                        {obj.name}
                      </div>

                      {openObject === obj.id && (

                        <div style={{ marginLeft: 20 }}>

                          {obj.skills.map((skillId: string) => {

                            const skill = bncc.skills[skillId]

                            return (
                              <div
                                key={skill.id}
                                style={styles.cardSkill}
                                onClick={(e) =>
                                  openSkill(e, obj.id, skill.id)
                                }
                              >
                                {skill.description}
                              </div>
                            )

                          })}

                        </div>

                      )}

                    </div>

                  )

                })}

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  )
}