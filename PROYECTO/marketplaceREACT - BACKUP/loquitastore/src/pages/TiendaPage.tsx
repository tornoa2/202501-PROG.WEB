import { useEffect, useState } from 'react'

type Juego = {
  nombre: string
  descripcion: string
  categoria: string[]
  plataformas: string[]
  precio: number
  descuento: number
  fecha: string
  imagen: string // base64
  visible: boolean
}

function TiendaPage() {
  const [juegos, setJuegos] = useState<Juego[]>([])

  useEffect(() => {
    const data = localStorage.getItem('juegos')
    if (data) {
      const todos = JSON.parse(data) as Juego[]
      setJuegos(todos.filter(j => j.visible))
    }
  }, [])

  const obtenerIconos = (plataformas: string[]) => {
    const iconos: Record<string, string> = {
      windows: '/assets/icons/icon_platform_win_dark.png',
      macos: '/assets/icons/logotipo-de-mac-os.png',
      xbox: '/assets/icons/logotipo-de-xbox.png',
      playstation: '/assets/icons/logotipo-de-playstation.png',
      nintendo: '/assets/icons/nintendo-switch.png'
    }

    return plataformas.map((p, i) =>
      iconos[p] ? (
        <img
          key={i}
          src={iconos[p]}
          alt={p}
          title={p}
          style={{ height: '18px', marginRight: '6px' }}
        />
      ) : null
    )
  }

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
      <h2>Catálogo de Juegos</h2>

      {juegos.length === 0 ? (
        <p>Aún no hay juegos disponibles.</p>
      ) : (
        juegos.map((juego, i) => {
          const precioFinal = juego.precio * (1 - (juego.descuento || 0) / 100)
          return (
            <div
              key={i}
              style={{
                background: '#2a475e',
                color: '#fff',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <img
                src={juego.imagen}
                alt={juego.nombre}
                style={{ width: '160px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
              />

              <div style={{ flex: 1 }}>
                <h3>{juego.nombre}</h3>
                <div style={{ marginBottom: '0.5rem' }}>{obtenerIconos(juego.plataformas)}</div>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                  {juego.categoria.join(', ')}
                </p>
                <p style={{ fontSize: '0.9rem' }}>{juego.descripcion}</p>
              </div>

              <div style={{ textAlign: 'right' }}>
                {juego.descuento > 0 ? (
                  <>
                    <div style={{ color: '#a4d007', fontWeight: 'bold' }}>-{juego.descuento}%</div>
                    <div style={{ textDecoration: 'line-through', color: '#ccc' }}>
                      S/{juego.precio.toFixed(2)}
                    </div>
                    <div style={{ fontWeight: 'bold' }}>S/{precioFinal.toFixed(2)}</div>
                  </>
                ) : (
                  <div style={{ fontWeight: 'bold' }}>S/{precioFinal.toFixed(2)}</div>
                )}
                <div style={{ fontSize: '0.8rem', marginTop: '6px', color: '#ccc' }}>
                  {formatearFecha(juego.fecha)}
                </div>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default TiendaPage
