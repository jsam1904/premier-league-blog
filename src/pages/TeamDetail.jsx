import { useParams, Link, useNavigate } from "react-router-dom"
import { useTeamById } from "../hooks/useTeams"
import { useApp } from "../context/AppContext"
import HeartIcon from "../components/HeartIcon"

export default function TeamDetail() {
  const { id } = useParams()
  const { team, notFound } = useTeamById(id)
  const { isFavorite, toggleFavorite, crests } = useApp()
  const crest = crests[team?.shortName]
  const navigate = useNavigate()

  if (notFound) {
    return (
      <main className="not-found">
        <h1>Equipo no encontrado</h1>
        <p>El equipo con ID #{id} no existe en nuestra base de datos.</p>
        <Link to="/teams" className="btn-primary">Volver al listado</Link>
      </main>
    )
  }

  const gd = team.goalsFor - team.goalsAgainst
  const fav = isFavorite(team.id)

  return (
    <main className="team-detail" style={{ "--team-color": team.color }}>
      <div className="detail-back">
        <button onClick={() => navigate(-1)} className="btn-back">
          ← Volver
        </button>
      </div>

      <div className="detail-hero" style={{ borderColor: team.color }}>
        {crest
          ? <img src={crest} alt={team.name} className="detail-badge-img" />
          : <span className="detail-badge">{team.badge}</span>
        }
        <div className="detail-hero-info">
          <h1>{team.name}</h1>
          <p className="detail-short">{team.shortName} · {team.city}</p>
          <p className="detail-founded">Fundado en {team.founded}</p>
        </div>
        <button
          className={`fav-btn-lg ${fav ? "active" : ""}`}
          onClick={() => toggleFavorite(team)}
        >
          <HeartIcon filled={fav} size={18} />
          {fav ? " En favoritos" : " Añadir a favoritos"}
        </button>
      </div>

      <p className="detail-description">{team.description}</p>

      <div className="detail-grid">
        <div className="detail-section">
          <h2>📋 Info del club</h2>
          <ul className="detail-list">
            <li><strong>Manager:</strong> {team.manager}</li>
            <li><strong>Estadio:</strong> {team.stadium}</li>
            <li><strong>Capacidad:</strong> {team.capacity.toLocaleString()} personas</li>
            <li><strong>Títulos de PL:</strong> {team.titles}</li>
          </ul>
        </div>

        <div className="detail-section">
          <h2>📊 Temporada {new Date().getFullYear()}</h2>
          <ul className="detail-list">
            <li><strong>Posición:</strong> #{team.currentPosition}</li>
            <li><strong>Puntos:</strong> {team.points}</li>
            <li><strong>Partidos:</strong> {team.played} (G{team.won} E{team.drawn} P{team.lost})</li>
            <li><strong>Goles:</strong> {team.goalsFor} a favor / {team.goalsAgainst} en contra</li>
            <li><strong>Diferencia:</strong> {gd > 0 ? `+${gd}` : gd}</li>
          </ul>
        </div>
      </div>

      <div className="detail-scorer">
        <h2>🥇 Máximo goleador del equipo</h2>
        <p className="scorer-name">{team.topScorer}</p>
        <p className="scorer-goals">{team.topScorerGoals} goles esta temporada</p>
      </div>

      <div className="detail-nav">
        {team.id > 1 && (
          <Link to={`/teams/${team.id - 1}`} className="btn-secondary">
            ← Equipo anterior
          </Link>
        )}
        {team.id < 10 && (
          <Link to={`/teams/${team.id + 1}`} className="btn-secondary">
            Equipo siguiente →
          </Link>
        )}
      </div>
    </main>
  )
}