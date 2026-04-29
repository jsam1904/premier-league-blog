import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(true)

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
      value={{ favorites, toggleFavorite, isFavorite, darkMode, toggleDarkMode }}
    >
      <div className={darkMode ? "dark" : "light"}>{children}</div>
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)