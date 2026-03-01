const BASE_URL = "https://app.ticketmaster.com/discovery/v2"
const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY

function uniqueById(events) {
  const map = new Map()
  for (const e of events) map.set(e.id, e)
  return Array.from(map.values())
}

function isSports(event) {
  const seg = event?.classifications?.[0]?.segment?.name?.toLowerCase() || ""
  return seg === "sports"
}

function looksTech(event) {
  const name = (event?.name || "").toLowerCase()

  const include = [
    "tech", "software", "developer", "coding", "hackathon",
    "cyber", "security", "ai", "data", "cloud",
    "javascript", "react", "python", "web",
    "conference", "summit", "meetup"
  ]

  const exclude = [
    "vs", "basketball", "football", "soccer", "hockey", "baseball",
    "nfl", "nba", "mlb", "nhl", "ufc", "boxing", "wrestling"
  ]

  const hasInclude = include.some((t) => name.includes(t))
  const hasExclude = exclude.some((t) => name.includes(t))

  return hasInclude && !hasExclude
}

async function fetchEvents(params) {
  const url = `${BASE_URL}/events.json?${params}&apikey=${API_KEY}`
  const res = await fetch(url)

  if (!res.ok) {
    let details = ""
    try {
      const data = await res.json()
      details = data?.errors?.[0]?.detail || JSON.stringify(data)
    } catch {
      details = await res.text()
    }
    throw new Error(`Ticketmaster error ${res.status}: ${details}`)
  }

  const data = await res.json()
  return data._embedded?.events || []
}

export async function getTechEvents() {
  if (!API_KEY) {
    throw new Error("Missing API key: VITE_TICKETMASTER_API_KEY (check .env, then restart npm run dev)")
  }

  
  const keywords = [
    "technology",
    "software",
    "developer",
    "programming",
    "coding",
    "hackathon",
    "cybersecurity",
    "data",
    "ai",
    "startup",
    "innovation",
    "product management"
  ]

  let combined = []

 
  for (const kw of keywords) {
    const events = await fetchEvents(
      `keyword=${encodeURIComponent(kw)}&size=20&sort=date,asc&countryCode=US`
    )

    combined = uniqueById(combined.concat(events))
      .filter((e) => !isSports(e)) 

   
    if (combined.length >= 15) break
  }

  
  const filtered = combined.filter((event) => {
    const name = (event?.name || "").toLowerCase()
    const exclude = [
      " vs ",
      "basketball",
      "football",
      "soccer",
      "hockey",
      "baseball",
      "nfl",
      "nba",
      "mlb",
      "nhl",
      "ufc",
      "boxing",
      "wrestling"
    ]
    return !exclude.some((t) => name.includes(t))
  })


  if (filtered.length >= 8) return filtered.slice(0, 20)

  return combined.slice(0, 20)
}

export async function getEventById(id) {
  if (!API_KEY) {
    throw new Error("Missing API key: VITE_TICKETMASTER_API_KEY")
  }

  const url = `${BASE_URL}/events/${id}.json?apikey=${API_KEY}`
  const res = await fetch(url)

  if (!res.ok) {
    let details = ""
    try {
      const data = await res.json()
      details = data?.errors?.[0]?.detail || JSON.stringify(data)
    } catch {
      details = await res.text()
    }
    throw new Error(`Ticketmaster error ${res.status}: ${details}`)
  }

  return res.json()
}