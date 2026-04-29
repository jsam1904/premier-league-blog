import { teams } from "../data/teams"

// Hook para obtener todos los equipos con filtrado opcional
export function useTeams(query = "") {
  const filtered = teams.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.manager.toLowerCase().includes(query.toLowerCase()) ||
    t.city.toLowerCase().includes(query.toLowerCase())
  )
  return { teams: filtered, total: teams.length }
}

// Hook para obtener un equipo por ID
export function useTeamById(id) {
  const team = teams.find((t) => t.id === Number(id))
  return { team, notFound: !team }
}