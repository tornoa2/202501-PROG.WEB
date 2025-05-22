import { useEffect, useState } from 'react'
import JuegoForm from '../components/Juegos/JuegoForm'
import Modal from '../components/layout/Modal'
import './GestorCatalogoPage.css'

type Juego = {
  nombre: string
  descripcion: string
  genero: string
  plataformas: string[]
  precio: number
  descuento: number
  fecha: string
  imagen: string
  visible: boolean
}

const generosDisponibles = [
  'Acción', 'Aventura', 'Cartas y mesa', 'Deportes y carreras',
  'Disparos en primera persona', 'Estrategia', 'Hack and slash', 'Indie',
  'Lucha', 'Plataforma y corredores', 'Rol', 'Roguelike', 'Simulación', 'Terror'
]

function GestorCatalogoPage() {
  const [juegos, setJuegos] = useState<Juego[]>([])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [juegoEditado, setJuegoEditado] = useState<Juego | null>(null)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [indexParaEliminar, setIndexParaEliminar] = useState<number | null>(null)

  const [filtroGenero, setFiltroGenero] = useState('')
  const [filtroPrecioMin, setFiltroPrecioMin] = useState('')
  const [filtroPrecioMax, setFiltroPrecioMax] = useState('')
  const [filtroFechaMin, setFiltroFechaMin] = useState('')
  const [filtroFechaMax, setFiltroFechaMax] = useState('')

  const [mostrarModalFiltro, setMostrarModalFiltro] = useState(false)
  const [generoTmp, setGeneroTmp] = useState('')
  const [precioMinTmp, setPrecioMinTmp] = useState('')
  const [precioMaxTmp, setPrecioMaxTmp] = useState('')
  const [fechaMinTmp, setFechaMinTmp] = useState('')
  const [fechaMaxTmp, setFechaMaxTmp] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('juegos')
    if (data) {
      setJuegos(JSON.parse(data))
    }
  }, [])

  const guardarJuego = (juego: Juego, index?: number) => {
    const copia = [...juegos]
    if (index === undefined || index === null) {
      copia.push(juego)
    } else {
      copia[index] = juego
    }
    setJuegos(copia)
    localStorage.setItem('juegos', JSON.stringify(copia))
    setMostrarFormulario(false)
    setJuegoEditado(null)
    setEditIndex(null)
  }

  const eliminarJuego = (index: number) => {
    const copia = [...juegos]
    copia.splice(index, 1)
    setJuegos(copia)
    localStorage.setItem('juegos', JSON.stringify(copia))
  }

  const alternarVisibilidad = (index: number) => {
    const copia = [...juegos]
    copia[index].visible = !copia[index].visible
    setJuegos(copia)
    localStorage.setItem('juegos', JSON.stringify(copia))
  }

  const formatearFecha = (fecha: string) => {
    const f = new Date(fecha)
    return f.toLocaleDateString('es-PE', {
      day: '2-digit', month: '2-digit', year: '2-digit'
    })
  }

  const editarJuego = (index: number) => {
    setJuegoEditado(juegos[index])
    setEditIndex(index)
    setMostrarFormulario(true)
  }

  const juegosFiltrados = juegos.filter(j => {
    if (filtroGenero && j.genero !== filtroGenero) return false
    if (filtroPrecioMin && j.precio < parseFloat(filtroPrecioMin)) return false
    if (filtroPrecioMax && j.precio > parseFloat(filtroPrecioMax)) return false
    if (filtroFechaMin && j.fecha < filtroFechaMin) return false
    if (filtroFechaMax && j.fecha > filtroFechaMax) return false
    return true
  })

  return (
    
    <div className="container">
      <div className="header">
        <h2>Catalogo de Juegos</h2>
        <div className="header-buttons">
          <button className="pillButton" onClick={() => {
            setJuegoEditado(null)
            setEditIndex(null)
            setMostrarFormulario(true)
          }}>+ Agregar</button>
          <button className="pillButton" onClick={() => {
              setGeneroTmp(filtroGenero)
              setPrecioMinTmp(filtroPrecioMin)
              setPrecioMaxTmp(filtroPrecioMax)
              setFechaMinTmp(filtroFechaMin)
              setFechaMaxTmp(filtroFechaMax)
              setMostrarModalFiltro(true)
            }}
          >
            Filtros
          </button>
          <button
            className="pillButton" onClick={() => {
              setFiltroGenero('')
              setFiltroPrecioMin('')
              setFiltroPrecioMax('')
              setFiltroFechaMin('')
              setFiltroFechaMax('')
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      {(filtroGenero || filtroPrecioMin || filtroPrecioMax || filtroFechaMin || filtroFechaMax) && (
        <div className="filtros-tags">
          {filtroGenero && (
            <div className="tag">
              Género: {filtroGenero}
              <button onClick={() => setFiltroGenero('')}>✕</button>
            </div>
          )}
          {(filtroPrecioMin || filtroPrecioMax) && (
            <div className="tag">
              Precio: {filtroPrecioMin ? `S/. ${filtroPrecioMin}` : 'Mín'} – {filtroPrecioMax ? `S/. ${filtroPrecioMax}` : 'Máx'}
              <button onClick={() => {
                setFiltroPrecioMin('')
                setFiltroPrecioMax('')
              }}>✕</button>
            </div>
          )}
          {(filtroFechaMin || filtroFechaMax) && (
            <div className="tag">
              Fecha: {filtroFechaMin || 'desde'} – {filtroFechaMax || 'hasta'}
              <button onClick={() => {
                setFiltroFechaMin('')
                setFiltroFechaMax('')
              }}>✕</button>
            </div>
          )}
        </div>
      )}

      <div className="tableWrapper">
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="cell">Titulo</th>
              <th className="cell">Fecha de Lanzamiento</th>
              <th className="cell">Genero</th>
              <th className="cell">Precio Base</th>
              <th className="cell">Descuento(%)</th>
              <th className="cell">Precio de Venta</th>
              <th className="cell">Visibilidad</th>
              <th className="cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {juegosFiltrados.map((j, i) => {
              const final = j.precio * (1 - (j.descuento / 100))
              return (
                <tr key={i}>
                  <td className="cell">{j.nombre}</td>
                  <td className="cell">{formatearFecha(j.fecha)}</td>
                  <td className="cell">{j.genero}</td>
                  <td className="cell">S/. {j.precio.toFixed(2)}</td>
                  <td className="cell">{j.descuento}%</td>
                  <td className="cell">S/. {final.toFixed(2)}</td>
                  <td className="cell">
                    <button onClick={() => alternarVisibilidad(i)}>
                      {j.visible ? 'Ocultar' : 'Mostrar'}
                    </button>
                  </td>
                  <td className="cell">
                    <button onClick={() => editarJuego(i)}>✏️</button>
                    <button onClick={() => setIndexParaEliminar(i)}>🗑️</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={mostrarFormulario}
        title={juegoEditado ? 'Editar Juego' : 'Agregar Juego'}
        onClose={() => setMostrarFormulario(false)}
      >
        <JuegoForm
          onGuardar={guardarJuego}
          onCancelar={() => {
            setMostrarFormulario(false)
            setJuegoEditado(null)
            setEditIndex(null)
          }}
          {...(juegoEditado ? { juegoEditado } : {})}
          editIndex={editIndex ?? undefined}
        />
      </Modal>

      <Modal
        isOpen={indexParaEliminar !== null}
        title="Eliminar juego"
        onClose={() => setIndexParaEliminar(null)}
        actions={
          <>
            <button onClick={() => setIndexParaEliminar(null)}>Cancelar</button>
            <button onClick={() => {
              if (indexParaEliminar !== null) eliminarJuego(indexParaEliminar)
              setIndexParaEliminar(null)
            }}>Confirmar</button>
          </>
        }
      >
        <p>¿Estás seguro de que deseas eliminar este juego?</p>
      </Modal>

      <Modal
        isOpen={mostrarModalFiltro}
        title="Filtro"
        onClose={() => setMostrarModalFiltro(false)}
        actions={null}
      >
        <div className="filters">
          <label>
            Rango de Fecha de Lanzamiento:
            <div className="inlineFilters">
              <input type="date" placeholder="min" value={fechaMinTmp} onChange={e => setFechaMinTmp(e.target.value)} className="input" />
              <input type="date" placeholder="max" value={fechaMaxTmp} onChange={e => setFechaMaxTmp(e.target.value)} className="input" />
            </div>
          </label>
          <label>
            Genero:
            <select value={generoTmp} onChange={e => setGeneroTmp(e.target.value)} className="input">
              <option value="">All</option>
              {generosDisponibles.map((gen, i) => (
                <option key={i} value={gen}>{gen}</option>
              ))}
            </select>
          </label>
          <label>
            Rango de Precio:
            <div className="inlineFilters">
              <input type="number" placeholder="min" value={precioMinTmp} onChange={e => setPrecioMinTmp(e.target.value)} className="input" />
              <input type="number" placeholder="max" value={precioMaxTmp} onChange={e => setPrecioMaxTmp(e.target.value)} className="input" />
            </div>
          </label>
          <div className="modalActions">
            <button className="pillButton" onClick={() => setMostrarModalFiltro(false)}>Cancelar</button>
            <button
              className="pillButton"
              onClick={() => {
                setFiltroGenero(generoTmp)
                setFiltroPrecioMin(precioMinTmp)
                setFiltroPrecioMax(precioMaxTmp)
                setFiltroFechaMin(fechaMinTmp)
                setFiltroFechaMax(fechaMaxTmp)
                setMostrarModalFiltro(false)
              }}
            >Aplicar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default GestorCatalogoPage