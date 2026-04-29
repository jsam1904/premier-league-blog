import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()
const API_TOKEN = import.meta.env.VITE_FOOTBALL_API_TOKEN

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const [crests, setCrests] = useState({})

  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "light"
  }, [darkMode])

  useEffect(() => {
    console.log("[crests] token:", API_TOKEN)
    if (!API_TOKEN || API_TOKEN === "pon_tu_token_aqui") {
      console.log("[crests] sin token, abortando")
      return
    }

    sessionStorage.removeItem("pl_crests")

    fetch("/api-football/v4/competitions/PL/teams", {
      headers: { "X-Auth-Token": API_TOKEN },
    })
      .then((r) => {
        console.log("[crests] status:", r.status)
        return r.json()
      })
      .then((data) => {
        console.log("[crests] respuesta:", data)
        const map = {}
        data.teams?.forEach((t) => { map[t.tla] = t.crest })
        console.log("[crests] mapa generado:", map)
        sessionStorage.setItem("pl_crests", JSON.stringify(map))
        setCrests(map)
      })
      .catch((err) => console.error("[crests] error:", err))
  }, [])

  const toggleFavorite = (team) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === team.id)
        ? prev.filter((f) => f.id !== team.id)
        : [...prev, team]
    )
  }

  const isFavorite = (id) => favorites.some((f) => f.id === id)

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <AppContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, darkMode, toggleDarkMode, crests }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)