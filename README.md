# ⚽ Premier League Blog 2026

Mini-blog sobre la Premier League 2026 construido con Vite + React + React Router.

## 🎯 Nivel declarado: **Senior**

### Cumplimiento de requerimientos Senior:
- ✅ Estado global con Context API (favoritos + modo oscuro/claro)
- ✅ 3+ componentes con PropTypes definidos (Navbar, TeamCard, SearchBar)
- ✅ Consumo de API externa real — [football-data.org](https://www.football-data.org/) para escudos oficiales de equipos
- ✅ Página 404 para rutas no encontradas
- ✅ Búsqueda/filtro en el listado
- ✅ Botón "equipo aleatorio" con useNavigate
- ✅ Componentes reutilizables con props documentadas
- ✅ Dark/light mode con CSS variables aplicado a todo el documento

## 🚀 Cómo correr el proyecto

**Requisitos:** Node 18+

```bash
git clone https://github.com/jsam1904/premier-league-blog
cd premier-league-blog
npm install
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

## 📁 Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Home con estadísticas y top 3 |
| `/teams` | Listado completo con búsqueda |
| `/teams/:id` | Detalle de cada equipo |
| `/favorites` | Tus equipos favoritos |
| `*` | Página 404 |

## 🧩 Componentes reutilizables

### `<Navbar title={string} />`
- `title` *(string, requerido)*: Nombre del blog en el logo

### `<TeamCard team={object} />`
- `team` *(object, requerido)*: Objeto con id, name, badge, color, manager, points, etc.

### `<SearchBar value={string} onChange={func} placeholder={string} />`
- `value` *(string, requerido)*: Valor del input
- `onChange` *(func, requerido)*: Callback de cambio
- `placeholder` *(string, opcional)*: Texto placeholder

## 🛠️ Stack
- Vite + React 18
- React Router DOM v6
- Context API (sin librerías externas)
- PropTypes

## 📹 Demo

Ver video en la carpeta [`/demo`](./demo) del repositorio — muestra las rutas `/`, `/teams` y `/teams/:id` funcionando en tiempo real.
