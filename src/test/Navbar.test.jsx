import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"

test("renders DevHub in the navbar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  expect(screen.getByText(/devhub/i)).toBeInTheDocument()
})