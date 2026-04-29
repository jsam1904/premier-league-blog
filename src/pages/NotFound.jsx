import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <span className="not-found-icon">🟥</span>
        <h1>404 — Página no encontrada</h1>
        <p>El árbitro sacó tarjeta roja a esta URL. No existe.</p>
        <div className="not-found-links">
          <Link to="/" className="btn-primary">🏠 Ir al inicio</Link>
          <Link to="/teams" className="btn-secondary">⚽ Ver equipos</Link>
        </div>
      </div>
    </main>
  )
}