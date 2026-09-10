import { useEffect, useState } from "react"
import { getBNCC } from "../services/bncc/bnccService"
import { indexBNCC } from "../services/bncc/bnccIndex"

export function useBNCC(serie: string) {

  const [bncc, setBNCC] = useState<any>(null)

  useEffect(() => {

    if (!serie) return

    let cancelled = false

    async function load() {

      setBNCC(null)

      const cacheKey = "bncc_index"

      const cached = localStorage.getItem(cacheKey)

      if (cached) {
        const parsed = JSON.parse(cached)

        // 🔥 verifica se o cache é da mesma série
        if (parsed?.serie === serie) {
          if (!cancelled) setBNCC(parsed.data)
          return
        }
      }

      const raw = await getBNCC()

      if (cancelled) return

      const indexed = indexBNCC(raw, serie)

      // 🔥 salva junto com a série
      localStorage.setItem(cacheKey, JSON.stringify({
        serie,
        data: indexed
      }))

      if (!cancelled) {
        setBNCC(indexed)
      }
    }

    load()

    return () => {
      cancelled = true
    }

  }, [serie])

  return bncc
}