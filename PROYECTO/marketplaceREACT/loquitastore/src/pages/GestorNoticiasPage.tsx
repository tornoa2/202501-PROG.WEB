import { useEffect, useState } from 'react'
import Modal from '../components/layout/Modal'
import NoticiaForm from '../components/Noticias/NoticiaForm'
import './GestorCatalogoPage.css'

interface Noticia {
  titulo: string
  descripcion: string
  imagen: string
}

function GestorNoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [noticiaEditada, setNoticiaEditada] = useState<Noticia | null>(null)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [indexParaEliminar, setIndexParaEliminar] = useState<number | null>(null)

  useEffect(() => {
    const data = localStorage.getItem('noticias')
    if (data) {
      setNoticias(JSON.parse(data))
    }
  }, [])

  const guardarNoticia = (noticia: Noticia, index?: number) => {
    const copia = [...noticias]
    if (index === undefined || index === null) {
      copia.push(noticia)
    } else {
      copia[index] = noticia
    }
    setNoticias(copia)
    localStorage.setItem('noticias', JSON.stringify(copia))
    setMostrarFormulario(false)
    setNoticiaEditada(null)
    setEditIndex(null)
  }

  const eliminarNoticia = (index: number) => {
    const copia = [...noticias]
    copia.splice(index, 1)
    setNoticias(copia)
    localStorage.setItem('noticias', JSON.stringify(copia))
  }

  const editarNoticia = (index: number) => {
    setNoticiaEditada(noticias[index])
    setEditIndex(index)
    setMostrarFormulario(true)
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Gestor de Noticias</h2>
        <div className="header-buttons">
          <button className="pillButton" onClick={() => {
            setNoticiaEditada(null)
            setEditIndex(null)
            setMostrarFormulario(true)
          }}>+ Agregar</button>
        </div>
      </div>

      <div className="tableWrapper">
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="cell">Titulo</th>
              <th className="cell">Descripcion</th>
              <th className="cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {noticias.map((n, i) => (
              <tr key={i}>
                <td className="cell">{n.titulo}</td>
                <td className="cell">{n.descripcion}</td>
                <td className="cell">
                  <button onClick={() => editarNoticia(i)}>✏️</button>
                  <button onClick={() => setIndexParaEliminar(i)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={mostrarFormulario}
        title={noticiaEditada ? 'Edit News' : 'Add News'}
        onClose={() => setMostrarFormulario(false)}
      >
        <NoticiaForm
          onGuardar={guardarNoticia}
          onCancelar={() => {
            setMostrarFormulario(false)
            setNoticiaEditada(null)
            setEditIndex(null)
          }}
          {...(noticiaEditada ? { noticiaEditada } : {})}
          editIndex={editIndex ?? undefined}
        />
      </Modal>

      <Modal
        isOpen={indexParaEliminar !== null}
        title="Delete news"
        onClose={() => setIndexParaEliminar(null)}
        actions={
          <>
            <button onClick={() => setIndexParaEliminar(null)}>Cancel</button>
            <button onClick={() => {
              if (indexParaEliminar !== null) eliminarNoticia(indexParaEliminar)
              setIndexParaEliminar(null)
            }}>Confirm</button>
          </>
        }
      >
        <p>¿Estás seguro que deseas eliminar esta noticia?</p>
      </Modal>
    </div>
  )
}

export default GestorNoticiasPage
