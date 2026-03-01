import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    
    alert(`MVP Login (mock): ${email}`)
  }

  return (
    <section className="stack">
      <h1>Login</h1>
      <p className="muted">MVP version: mock login UI (no backend yet).</p>

      <form className="card stack" onSubmit={handleSubmit}>
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

        <label className="stack">
          <span className="label">Password</span>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  )
}