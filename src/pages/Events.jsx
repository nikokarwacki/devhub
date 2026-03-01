import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTechEvents } from "../services/ticketmasterapi" // <-- make sure this matches your file name

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getTechEvents()
        setEvents(data)
      } catch (err) {
        console.error("Events load error:", err)
        setError(err?.message || "Error loading events")
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  if (loading) {
    return (
      <section className="stack">
        <h1>Tech Events</h1>
        <p>Loading events...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="stack">
        <h1>Tech Events</h1>
        <p style={{ color: "red" }}><strong>{error}</strong></p>
        <p className="muted">Open DevTools → Console to see the full error.</p>
      </section>
    )
  }

  if (!events.length) {
    return (
      <section className="stack">
        <h1>Tech Events</h1>
        <p>No events found.</p>
      </section>
    )
  }

  return (
    <section className="stack">
      <h1>Tech Events</h1>

      <div className="grid">
        {events.map((event) => {
          const image = event.images?.[0]?.url
          const date = event.dates?.start?.localDate

          return (
            <div className="card" key={event.id}>
              {image && (
                <img
                  src={image}
                  alt={event.name}
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              )}

              <h2>{event.name}</h2>
              <p className="muted">{date || "Date TBD"}</p>

              <Link className="btn" to={`/events/${event.id}`}>
                View Details
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}