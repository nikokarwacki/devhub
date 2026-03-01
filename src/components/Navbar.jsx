import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: isActive ? 700 : 500,
    padding: "8px 10px",
    borderRadius: 10,
    background: isActive ? "rgba(0,0,0,0.08)" : "transparent",
    color: "inherit",
  })

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-dot" />
          <span>DevHub</span>
        </div>

        <nav className="navlinks">
          <NavLink to="/" end style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/events" style={linkStyle}>
            Events
          </NavLink>
          <NavLink to="/projects" style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/login" style={linkStyle}>
            Login
          </NavLink>
          <NavLink to="/register" style={linkStyle}>
            Register
          </NavLink>
          <NavLink to="/saved-events" style={linkStyle}>
            Saved
          </NavLink>
        </nav>
      </div>
    </header>
  )
}