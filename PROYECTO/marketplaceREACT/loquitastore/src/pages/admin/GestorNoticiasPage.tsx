import { useState } from 'react'
import Modal from '../../components/layout/ventanaModal'
import NoticiaForm from '../../components/Formularios/NoticiaForm'
import './estiloGestores.css'

const noticiaTest = [
  {
    titulo: 'The Witcher 3: Wild Hunt tiene un precio de regalo en la eShop de Nintendo Switch',
    descripcion: 'Nintendo Switch sigue con una gran popularidad y se mantiene ofreciendo promociones atractivas.'
  }
]

function GestorNoticiasPage() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [modoEdicion, setModoEdicion] = useState(false)
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)

  return (
    <div className="container">
      <div className="header">
        <h1>Gestor de Noticias</h1>
        <div className="header-buttons">
          <button
            className="pillButton"
            onClick={() => {
              setMostrarFormulario(true)
              setModoEdicion(false)
            }}
          >
            + Agregar
          </button>
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
            {noticiaTest.map((noticia, i) => (
              <tr key={i}>
                <td className="cell">{noticia.titulo}</td>
                <td className="cell descripcion">{noticia.descripcion}</td>
                <td className="cell">
                  <button
                    className="pillButton"
                    onClick={() => {
                      setMostrarFormulario(true)
                      setModoEdicion(true)
                    }}
                  >
                    ✏️
                  </button>
                  <button
                    className="pillButton"
                    onClick={() => {
                      setMostrarConfirmacion(true)
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*ventana del formualrio de la noticia*/}
      <Modal isOpen={mostrarFormulario} onClose={() => setMostrarFormulario(false)}>
        <NoticiaForm
          onCancelar={() => setMostrarFormulario(false)}
          noticiaEditada={modoEdicion}
        />
      </Modal>

      {/*ventana para confirmacion de eliminacion*/}
      <Modal isOpen={mostrarConfirmacion} onClose={() => setMostrarConfirmacion(false)}>
        <p>¿Estás seguro que deseas eliminar la noticia?</p>
        <div className="botones-confirmacion">
          <button className="pillButton" onClick={() => setMostrarConfirmacion(false)}>Cancelar</button>
          <button className="pillButton">Confirmar</button>
        </div>
      </Modal>
    </div>
  )
}

export default GestorNoticiasPage