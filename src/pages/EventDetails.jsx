import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getEventById } from "../services/ticketmasterapi"
import { useAuth } from "../context/AuthContext.jsx"

export default function EventDetails() {
  const { id } = useParams()
  const { saveEvent, removeEvent, isEventSaved } = useAuth()

  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function load() {
      try {
        const data = await getEventById(id)
        setEvent(data)
      } catch (err) {
        console.error(err)
        setError("Error loading event details. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id])

  if (loading) {
    return (
      <section className="stack">
        <h1>Event Details</h1>
        <p>Loading event...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="stack">
        <h1>Event Details</h1>
        <p style={{ color: "red" }}>{error}</p>
        <Link className="btn" to="/events">← Back to Events</Link>
      </section>
    )
  }

  if (!event) return null

  const saved = isEventSaved(event.id)

  const image = event?.images?.[0]?.url
  const venue = event?._embedded?.venues?.[0]
  const date = event?.dates?.start?.localDate
  const time = event?.dates?.start?.localTime

  return (
    <section className="stack">
      <h1>{event?.name}</h1>

      {image && (
        <img
          src={image}
          alt={event?.name}
          style={{ width: "100%", borderRadius: "12px" }}
        />
      )}

      <p className="muted">
        {date || "Date TBD"}
        {time ? ` • ${time}` : ""}
        {venue?.name ? ` • ${venue.name}` : ""}
      </p>

      <p>{event?.info || event?.pleaseNote || "No description available."}</p>

      {venue && (
        <div className="card">
          <h2>Location</h2>
          <p className="muted">
            {venue.city?.name || ""}{" "}
            {venue.state?.stateCode ? `, ${venue.state.stateCode}` : ""}
          </p>
          <p className="muted">{venue.address?.line1 || ""}</p>
        </div>
      )}

      <div className="row">
        <Link className="btn" to="/events">← Back</Link>

        <button
          className="btn"
          onClick={() => (saved ? removeEvent(event.id) : saveEvent(event))}
        >
          {saved ? "Remove from Saved" : "Save Event"}
        </button>

        {event?.url && (
          <a className="btn" href={event.url} target="_blank" rel="noreferrer">
            View on Ticketmaster
          </a>
        )}
      </div>
    </section>
  )
}