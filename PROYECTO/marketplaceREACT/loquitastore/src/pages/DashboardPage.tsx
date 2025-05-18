import { Link } from 'react-router-dom'

function DashboardPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Panel de Administrador</h1>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Link
          to="/gestor-catalogo"
          style={{
            padding: '1rem',
            backgroundColor: '#2a475e',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#fff',
            width: '240px',
            display: 'block',
          }}
        >
          <h3>Gestor de Catálogo</h3>
          <p>Agregar, editar, eliminar y filtrar juegos.</p>
        </Link>

        <Link
          to="/gestor-noticias"
          style={{
            padding: '1rem',
            backgroundColor: '#2a475e',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#fff',
            width: '240px',
            display: 'block',
          }}
        >
          <h3>Gestor de Noticias</h3>
          <p>Publicar, editar o eliminar noticias.</p>
        </Link>
      </div>
    </div>
  )
}

export default DashboardPage
