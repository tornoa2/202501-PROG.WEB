import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import DashboardPage from './pages/DashboardPage'
import GestorCatalogoPage from './pages/GestorCatalogoPage'
import GestorNoticiasPage from './pages/GestorNoticiasPage'
import NoticiasPage from './pages/NoticiasPage'
import TiendaPage from './pages/TiendaPage'

function App() {
  return (
    <Routes>
      {/* Público */}
      <Route path="/" element={<TiendaPage />} />
      <Route path="/noticias" element={<NoticiasPage />} />

      {/* Admin layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="gestorJuegos" element={<GestorCatalogoPage />} />
        <Route path="gestorNoticias" element={<GestorNoticiasPage />} />
        <Route path="users" element={<p></p>} />
        <Route path="stats" element={<p></p>} />

        
      </Route>
    </Routes>
  )
}

export default App
