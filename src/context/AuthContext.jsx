import { createContext, useContext, useEffect, useMemo, useState } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("devhub_user")
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

 
  const [savedEvents, setSavedEvents] = useState(() => {
    try {
      const raw = localStorage.getItem("savedEvents")
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("devhub_user", JSON.stringify(user))
  }, [user])

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents))
  }, [savedEvents])

  
  function login(email) {
    setUser({ email, role: "regular" })
  }

  function logout() {
    setUser(null)
  }

  
  function saveEvent(event) {
    setSavedEvents((prev) => {
      if (prev.some((e) => e.id === event.id)) return prev

      const minimal = {
        id: event.id,
        name: event.name,
        image: event.images?.[0]?.url || "",
        date: event.dates?.start?.localDate || "",
        venue: event._embedded?.venues?.[0]?.name || "",
      }

      return [minimal, ...prev]
    })
  }

  function removeEvent(id) {
    setSavedEvents((prev) => prev.filter((e) => e.id !== id))
  }

  function isEventSaved(id) {
    return savedEvents.some((e) => e.id === id)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      savedEvents,
      saveEvent,
      removeEvent,
      isEventSaved,
    }),
    [user, savedEvents]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}