import { useState } from "react"

export default function Projects() {
  const [name, setName] = useState("")
  const [projects, setProjects] = useState([
    { id: crypto.randomUUID(), name: "DevHub MVP", status: "In Progress" },
  ])

  function addProject(e) {
    e.preventDefault()
    if (!name.trim()) return

    const newProject = {
      id: crypto.randomUUID(),
      name: name.trim(),
      status: "In Progress",
    }

    setProjects((prev) => [newProject, ...prev])
    setName("")
  }

  function removeProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  function toggleStatus(id) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Completed" ? "In Progress" : "Completed" }
          : p
      )
    )
  }

  return (
    <section className="stack">
      <h1>Projects</h1>
      <p className="muted">
        Simple local-state project tracker (MVP). Later we can move this into Context.
      </p>

      <form className="card stack" onSubmit={addProject}>
        <label className="stack">
          <span className="label">Project name</span>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Build DevHub events page"
          />
        </label>
        <button className="btn" type="submit">Add Project</button>
      </form>

      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p.id}>
            <h2>{p.name}</h2>
            <p className="muted">Status: <strong>{p.status}</strong></p>

            <div className="row">
              <button className="btn" type="button" onClick={() => toggleStatus(p.id)}>
                Toggle Status
              </button>
              <button className="btn danger" type="button" onClick={() => removeProject(p.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}