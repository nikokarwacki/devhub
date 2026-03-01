import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="stack">
      <h1>404 - Not Found</h1>
      <p className="muted">That page doesn’t exist.</p>
      <Link className="btn" to="/">Go Home</Link>
    </section>
  )
}