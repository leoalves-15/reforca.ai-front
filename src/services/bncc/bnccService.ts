const BNCC_URL = "https://cientificar1992.pythonanywhere.com/bncc_fundamental/"

const CACHE_KEY = "bncc-cache"
const CACHE_TIME_KEY = "bncc-cache-time"

const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000 

let memoryCache: any = null
let loadingPromise: Promise<any> | null = null

export async function getBNCC() {

  if (memoryCache) {
    return memoryCache
  }

  const cached = localStorage.getItem(CACHE_KEY)
  const cacheTime = localStorage.getItem(CACHE_TIME_KEY)

  if (cached && cacheTime) {

    const age = Date.now() - Number(cacheTime)

    if (age < CACHE_DURATION) {
      memoryCache = JSON.parse(cached)
      return memoryCache
    }
  }

  if (loadingPromise) {
    return loadingPromise
  }

  loadingPromise = fetchBNCC()

  return loadingPromise
}

async function fetchBNCC() {

  try {

    const response = await fetch(BNCC_URL)

    const text = await response.text()

    if (!text.startsWith("{") && !text.startsWith("[")) {
      throw new Error("API retornou HTML em vez de JSON")
    }

    const json = JSON.parse(text)

    memoryCache = json

    localStorage.setItem(CACHE_KEY, JSON.stringify(json))
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString())

    return json

  } catch (error) {

    alert("Não foi possível carregar a BNCC. Verifique sua conexão e tente novamente.")

    const cached = localStorage.getItem(CACHE_KEY)

    if (cached) {
      memoryCache = JSON.parse(cached)
      return memoryCache
    }

    throw error
  } finally {

    loadingPromise = null
  }
}