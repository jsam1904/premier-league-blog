import { Link } from "react-router-dom"
import { useApp } from "../context/AppContext"
import TeamCard from "../components/TeamCard"

export default function Favorites() {
  const { favorites } = useApp()

  return (
    <main className="favorites-page">
      <h1>Mis equipos favoritos</h1>

      {favorites.length === 0 ? (
        <div className="empty-favs">
          <p>Aún no tienes favoritos guardados.</p>
          <p>Explora los equipos y dale corazon a los que más te gusten.</p>
          <Link to="/teams" className="btn-primary">Ver equipos</Link>
        </div>
      ) : (
        <>
          <p>{favorites.length} equipo{favorites.length !== 1 ? "s" : ""} guardado{favorites.length !== 1 ? "s" : ""}</p>
          <div className="teams-grid">
            {favorites.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}