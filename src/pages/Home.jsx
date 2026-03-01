import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="stack">
      <h1>DevHub</h1>
      <p className="muted">
        Discover tech events, track personal projects, and stay organized — all in one place.
      </p>

      <div className="grid">
        <div className="card">
          <h2>Discover Events</h2>
          <p className="muted">Browse upcoming tech-related events and open details.</p>
          <Link className="btn" to="/events">Go to Events</Link>
        </div>

        <div className="card">
          <h2>Track Projects</h2>
          <p className="muted">Manage your personal coding projects and progress.</p>
          <Link className="btn" to="/projects">Go to Projects</Link>
        </div>
      </div>
    </section>
  )
}