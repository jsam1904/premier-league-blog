import { Link } from "react-router-dom"
import { teams, leagueInfo } from "../data/teams"
import { useApp } from "../context/AppContext"

export default function Home() {
  const { crests } = useApp()
  const top3 = teams.slice(0, 3)

  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">
          Premier League <span className="accent">{leagueInfo.season}</span>
        </h1>
        <p className="hero-subtitle">
          Jornada {leagueInfo.matchday} de {leagueInfo.totalMatchdays} — La lucha por el título continúa
        </p>
        <Link to="/teams" className="btn-primary">
          Ver todos los equipos →
        </Link>
      </section>

      <section className="league-stats">
        <h2>Estadísticas de la temporada</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">👟</span>
            <p className="stat-title">Goleador</p>
            <p className="stat-main">{leagueInfo.topScorer.name}</p>
            <p className="stat-sub">{leagueInfo.topScorer.team} — {leagueInfo.topScorer.goals} goles</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <p className="stat-title">Asistidor</p>
            <p className="stat-main">{leagueInfo.topAssists.name}</p>
            <p className="stat-sub">{leagueInfo.topAssists.team} — {leagueInfo.topAssists.assists} asistencias</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <p className="stat-title">Líder</p>
            <p className="stat-main">{top3[0].name}</p>
            <p className="stat-sub">{top3[0].points} puntos</p>
          </div>
        </div>
      </section>

      <section className="top3">
        <h2>Top 3 de la tabla</h2>
        <div className="podium">
          {top3.map((team, i) => (
            <Link
              key={team.id}
              to={`/teams/${team.id}`}
              className="podium-card"
              style={{ "--team-color": team.color }}
            >
              <span className="podium-pos">#{i + 1}</span>
              {crests[team.shortName]
                ? <img src={crests[team.shortName]} alt={team.name} className="podium-badge-img" />
                : <span className="podium-badge">{team.badge}</span>
              }
              <p className="podium-name">{team.name}</p>
              <p className="podium-pts">{team.points} pts</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}