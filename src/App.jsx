import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TeamList from "./pages/TeamList"
import TeamDetail from "./pages/TeamDetail"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar title="PL Blog 2026" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}