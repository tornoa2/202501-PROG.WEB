import { useState } from 'react'
import JuegoForm from '../../components/Formularios/JuegoForm'
import FiltroForm from '../../components/Formularios/FiltroForm'
import Modal from '../../components/layout/ventanaModal'
import './estiloGestores.css'

const juegosTest = [
  {
    id: '1',
    nombre: 'Cyberpunk 2077',
    descripcion: 'Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.',
    genero: 'RPG',
    plataformas: 'PC, PS5, Xbox Series X',
    precio: 59.99,
    descuento: 10,
    fecha: '2020-12-10',
    visible: true
  },
  {
    id: '2',
    nombre: 'The Legend of Zelda: Breath of the Wild',
    descripcion: 'Explora la vasta tierra y los cielos de Hyrule.',
    genero: 'Aventura',
    plataformas: 'Nintendo Switch',
    precio: 49.99,
    descuento: 0,
    fecha: '2017-03-03',
    visible: true
  }
]

const GestorCatalogoPage = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [modoEdicion, setModoEdicion] = useState(false)
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  return (
    <div className="container">
      <div className="header">
        <h1>Gestor de Juegos</h1>
        <div className="header-buttons">
          <button
            className="pillButton"
            onClick={() => {
              setMostrarFormulario(true)
              setModoEdicion(false)
            }}
          >
            Agregar Juego
          </button>
          <button className="pillButton" onClick={() => setMostrarFiltros(true)}>
            Filtros
          </button>
        </div>
      </div>

      <div className="tableWrapper">
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="cell">Título</th>
              <th className="cell">Fecha</th>
              <th className="cell">Género</th>
              <th className="cell">Precio</th>
              <th className="cell">Descuento</th>
              <th className="cell">Precio Final</th>
              <th className="cell">Visibilidad</th>
              <th className="cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {juegosTest.map((juego) => (
              <tr key={juego.id}>
                <td className="cell">{juego.nombre}</td>
                <td className="cell">{new Date(juego.fecha).toLocaleDateString('es-PE')}</td>
                <td className="cell">{juego.genero}</td>
                <td className="cell">S/. {juego.precio.toFixed(2)}</td>
                <td className="cell">{juego.descuento}%</td>
                <td className="cell">S/. {(juego.precio * (1 - juego.descuento / 100)).toFixed(2)}</td>
                <td className="cell">
                  <button className="pillButton">Ocultar</button>
                </td>
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

      {/*ventana del formulario de jeugos*/}
      <Modal isOpen={mostrarFormulario} onClose={() => setMostrarFormulario(false)}>
        <JuegoForm
          onCancelar={() => setMostrarFormulario(false)}
          juegoEditado={modoEdicion}
        />
      </Modal>

      {/*ventana del boton de eliminar*/}
      <Modal isOpen={mostrarConfirmacion} onClose={() => setMostrarConfirmacion(false)}>
        <p>¿Estás seguro que deseas eliminar el juego?</p>
        <div className="botones-confirmacion">
          <button className="pillButton" onClick={() => setMostrarConfirmacion(false)}>Cancelar</button>
          <button className="pillButton">Confirmar</button>
        </div>
      </Modal>

      {/*ventana para los filtros*/}
      <Modal isOpen={mostrarFiltros} onClose={() => setMostrarFiltros(false)}>
        <FiltroForm onCancelar={() => setMostrarFiltros(false)} />
      </Modal>
    </div>
  )
}

export default GestorCatalogoPage