import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

import Home from "./pages/Home.jsx"
import Events from "./pages/Events.jsx"
import EventDetails from "./pages/EventDetails.jsx"
import Projects from "./pages/Projects.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import NotFound from "./pages/NotFound.jsx"
import SavedEvents from "./pages/SavedEvents.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/saved-events" element={<SavedEvents />} />
        </Routes>
      </main>
    </>
  )
}