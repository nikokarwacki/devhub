import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

export default function SavedEvents() {
  const { savedEvents, removeEvent } = useAuth()

  if (!savedEvents.length) {
    return (
      <section className="stack">
        <h1>Saved Events</h1>
        <p className="muted">You haven’t saved any events yet.</p>
        <Link className="btn" to="/events">Browse Events</Link>
      </section>
    )
  }

  return (
    <section className="stack">
      <h1>Saved Events</h1>

      <div className="grid">
        {savedEvents.map((event) => (
          <div className="card" key={event.id}>
            {event.image && (
              <img
                src={event.image}
                alt={event.name}
                style={{ width: "100%", borderRadius: "12px" }}
              />
            )}

            <h2>{event.name}</h2>
            <p className="muted">
              {event.date || "Date TBD"}
              {event.venue ? ` • ${event.venue}` : ""}
            </p>

            <div className="row">
              <Link className="btn" to={`/events/${event.id}`}>
                View Details
              </Link>
              <button className="btn danger" onClick={() => removeEvent(event.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}