export function indexBNCC(raw: any, serieSelecionada: string) {

  const disciplines: any = {}
  const topics: any = {}
  const objects: any = {}
  const skills: any = {}

  function normalize(text: string) {
    return text
      ?.toLowerCase()
      ?.normalize("NFD")
      ?.replace(/[\u0300-\u036f]/g, "")
      ?.replaceAll(" ", "_")
  }

  const serieNumero = (serieSelecionada || "").replace(/\D/g, "") 

  Object.entries(raw).forEach(([disciplinaId, disciplina]: any) => {

    disciplines[disciplinaId] = {
      id: disciplinaId,
      name: disciplina.nome_disciplina,
      topics: []
    }
    var serieMatch = false;

    disciplina.ano?.forEach((ano: any) => {

      if (disciplinaId == "arte" || disciplinaId == "educacao_fisica" || disciplinaId == "lingua_inglesa") {
        const anos = ano.nome_ano?.flatMap((item: string) =>
          item.split(",").map((parte) => parte.trim().replace(/\D/g, ""))
        )
        serieMatch = !anos?.includes(serieNumero)
      } else {
        const anoNumero = ano.nome_ano?.[0]?.replace(/\D/g, "")
        serieMatch = anoNumero !== serieNumero
      }

      if (serieMatch) return

      ano.unidades_tematicas?.forEach((unidade: any) => {

        const topicId = `${disciplinaId}_${normalize(unidade.nome_unidade)}`

        if (!topics[topicId]) {

          topics[topicId] = {
            id: topicId,
            name: unidade.nome_unidade,
            discipline: disciplinaId,
            objects: []
          }

          disciplines[disciplinaId].topics.push(topicId)
        }

        unidade.objeto_conhecimento?.forEach((obj: any) => {

          const objectId = `${topicId}_${normalize(obj.nome_objeto)}`

          if (!objects[objectId]) {

            objects[objectId] = {
              id: objectId,
              name: obj.nome_objeto,
              topic: topicId,
              skills: []
            }

            topics[topicId].objects.push(objectId)
          }

          obj.habilidades?.forEach((skill: any) => {

            const codigo = skill.nome_habilidade?.match(/\((.*?)\)/)?.[1]

            if (!codigo) return

            if (!skills[codigo]) {
              skills[codigo] = {
                id: codigo,
                description: skill.nome_habilidade
              }
            }

            if (!objects[objectId].skills.includes(codigo)) {
              objects[objectId].skills.push(codigo)
            }

          })

        })

      })

    })

  })

  return {
    disciplines,
    topics,
    objects,
    skills
  }
}