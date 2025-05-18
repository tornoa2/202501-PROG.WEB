import { useEffect, useState } from 'react'

type Noticia = {
  titulo: string
  contenido: string
  fecha: string
}

function NoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([])

  useEffect(() => {
    const data = localStorage.getItem('noticias')
    if (data) {
      setNoticias(JSON.parse(data))
    }
  }, [])

  const formatearFecha = (textoFecha: string) => {
    const fecha = new Date(textoFecha)
    return fecha.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).toUpperCase()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Noticias</h2>

      {noticias.length === 0 ? (
        <p>Aún no hay noticias publicadas.</p>
      ) : (
        noticias.map((noticia, i) => (
          <div key={i} style={{ background: '#2a475e', color: '#fff', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <h3>{noticia.titulo}</h3>
            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{formatearFecha(noticia.fecha)}</p>
            <p>{noticia.contenido}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default NoticiasPage
