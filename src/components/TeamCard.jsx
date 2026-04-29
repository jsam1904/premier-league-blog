import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useApp } from "../context/AppContext"
import HeartIcon from "./HeartIcon"

/**
 * TeamCard - Tarjeta de equipo para el listado
 *
 * Props:
 * @param {object} team        - Objeto con datos del equipo
 * @param {number} team.id
 * @param {string} team.name
 * @param {string} team.badge
 * @param {string} team.color
 * @param {string} team.manager
 * @param {number} team.points
 * @param {number} team.currentPosition
 * @param {string} team.topScorer
 * @param {number} team.topScorerGoals
 */
export default function TeamCard({ team }) {
  const { isFavorite, toggleFavorite, crests } = useApp()
  const crest = crests[team.shortName]
  const fav = isFavorite(team.id)

  return (
    <div className="team-card" style={{ "--team-color": team.color }}>
      <div className="card-header">
        <span className="position-badge">#{team.currentPosition}</span>
        {crest
          ? <img src={crest} alt={team.name} className="team-badge-img" />
          : <span className="team-badge-emoji">{team.badge}</span>
        }
        <button
          className={`fav-btn ${fav ? "active" : ""}`}
          onClick={() => toggleFavorite(team)}
          aria-label="Toggle favorito"
        >
          <HeartIcon filled={fav} size={20} />
        </button>
      </div>

      <h3 className="team-name">{team.name}</h3>
      <p className="team-manager">👤 {team.manager}</p>

      <div className="card-stats">
        <div className="stat">
          <span className="stat-value">{team.points}</span>
          <span className="stat-label">Pts</span>
        </div>
        <div className="stat">
          <span className="stat-value">{team.won}</span>
          <span className="stat-label">G</span>
        </div>
        <div className="stat">
          <span className="stat-value">{team.drawn}</span>
          <span className="stat-label">E</span>
        </div>
        <div className="stat">
          <span className="stat-value">{team.lost}</span>
          <span className="stat-label">P</span>
        </div>
      </div>

      <p className="top-scorer">
        ⚽ {team.topScorer} — {team.topScorerGoals} goles
      </p>

      <Link to={`/teams/${team.id}`} className="card-link">
        Ver detalle →
      </Link>
    </div>
  )
}

TeamCard.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    manager: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    currentPosition: PropTypes.number.isRequired,
    won: PropTypes.number.isRequired,
    drawn: PropTypes.number.isRequired,
    lost: PropTypes.number.isRequired,
    topScorer: PropTypes.string.isRequired,
    topScorerGoals: PropTypes.number.isRequired,
  }).isRequired,
}