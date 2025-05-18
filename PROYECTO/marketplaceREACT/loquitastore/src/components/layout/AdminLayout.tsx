import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        backgroundColor: '#f0f0f0',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#ccc',
            marginBottom: '1rem'
          }}
        />
        <p style={{ marginBottom: '2rem', fontWeight: 'bold' }}>ADMIN</p>

        <nav style={{ width: '100%' }}>
          <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
            <li><NavLink to="/admin/users" style={linkStyle}>Usuarios</NavLink></li>
            <li><NavLink to="/admin/gestorJuegos" style={linkStyle}>Juegos</NavLink></li>
            <li><NavLink to="/admin/gestorNoticias" style={linkStyle}>Noticias</NavLink></li>
            <li><NavLink to="/admin/stats" style={linkStyle}>Estadisticas</NavLink></li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  display: 'block',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
  color: isActive ? '#000' : '#666',
  fontWeight: isActive ? 'bold' : 'normal',
  backgroundColor: isActive ? '#ddd' : 'transparent',
  borderRadius: '6px',
  marginBottom: '0.5rem'
})

export default AdminLayout
