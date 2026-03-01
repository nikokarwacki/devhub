import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"
import SavedEvents from "../pages/SavedEvents"

test("shows empty state when no saved events exist", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <SavedEvents />
      </AuthProvider>
    </BrowserRouter>
  )

  expect(screen.getByText(/haven’t saved any events yet/i)).toBeInTheDocument()
})