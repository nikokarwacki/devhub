import { useState } from "react"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // MVP: auth not required yet. This is just UI.
    alert(`MVP Register (mock): ${name} / ${email}`)
  }

  return (
    <section className="stack">
      <h1>Register</h1>
      <p className="muted">MVP version: mock registration UI (no backend yet).</p>

      <form className="card stack" onSubmit={handleSubmit}>
        <label className="stack">
          <span className="label">Name</span>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>

        <label className="stack">
          <span className="label">Email</span>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <button className="btn" type="submit">Create Account</button>
      </form>
    </section>
  )
}