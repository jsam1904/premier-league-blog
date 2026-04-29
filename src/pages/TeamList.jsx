import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTeams } from "../hooks/useTeams"
import { teams as allTeams } from "../data/teams"
import TeamCard from "../components/TeamCard"
import SearchBar from "../components/SearchBar"

export default function TeamList() {
  const [query, setQuery] = useState("")
  const { teams, total } = useTeams(query)
  const navigate = useNavigate()

  const goRandom = () => {
    const random = allTeams[Math.floor(Math.random() * allTeams.length)]
    navigate(`/teams/${random.id}`)
  }

  return (
    <main className="team-list-page">
      <div className="list-header">
        <h1>Equipos de la Premier League</h1>
        <p>{teams.length} de {total} equipos</p>
      </div>

      <div className="list-controls">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar por equipo, manager o ciudad..."
        />
        <button onClick={goRandom} className="btn-random-list">
          Equipo aleatorio
        </button>
      </div>

      {teams.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron equipos para "{query}"</p>
          <button onClick={() => setQuery("")} className="btn-primary">
            Limpiar búsqueda
          </button>
        </div>
      ) : (
        <div className="teams-grid">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      )}
    </main>
  )
}