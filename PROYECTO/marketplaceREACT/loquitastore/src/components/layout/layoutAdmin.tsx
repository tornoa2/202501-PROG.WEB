import { NavLink, Outlet } from 'react-router-dom'
import BarraSuperior from './BarraSuperior'
import './layoutAdmin.css'

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <BarraSuperior />

      <div className="admin-main">
        <aside className="admin-sidebar">
          <div className="admin-avatar" />
          <p className="admin-label">ADMIN</p>

          <nav className="admin-nav">
            <ul>
              <li><NavLink to="/admin/users" className={({ isActive }) => isActive ? 'active' : ''}>Usuarios</NavLink></li>
              <li><NavLink to="/admin/gestorJuegos" className={({ isActive }) => isActive ? 'active' : ''}>Juegos</NavLink></li>
              <li><NavLink to="/admin/gestorNoticias" className={({ isActive }) => isActive ? 'active' : ''}>Noticias</NavLink></li>
              <li><NavLink to="/admin/stats" className={({ isActive }) => isActive ? 'active' : ''}>Estadísticas</NavLink></li>
            </ul>
          </nav>
        </aside>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
