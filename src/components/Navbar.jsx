import { Link, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useApp } from "../context/AppContext"
import { teams } from "../data/teams"

/**
 * Navbar - Barra de navegación principal
 *
 * Props:
 * @param {string} title - Nombre del blog/app mostrado en el logo
 */
export default function Navbar({ title }) {
  const { favorites, darkMode, toggleDarkMode } = useApp()
  const navigate = useNavigate()

  const goRandom = () => {
    const random = teams[Math.floor(Math.random() * teams.length)]
    navigate(`/teams/${random.id}`)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        {title}
      </Link>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/teams">Equipos</Link>
        <Link to="/favorites">
          Favoritos
          {favorites.length > 0 && (
            <span className="badge">{favorites.length}</span>
          )}
        </Link>
      </div>

      <div className="nav-actions">
        <button onClick={goRandom} className="btn-random">
          Aleatorio
        </button>
        <button onClick={toggleDarkMode} className="btn-theme">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}