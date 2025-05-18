import { useEffect, useState } from 'react'
import './JuegoForm.css'

interface Props {
  onGuardar: (juego: Juego, index?: number) => void
  onCancelar: () => void
  juegoEditado?: Juego
  editIndex?: number
}

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

const plataformasDisponibles = [
  'PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Nintendo Switch'
]

function JuegoForm({ onGuardar, onCancelar, juegoEditado, editIndex }: Props) {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [genero, setGenero] = useState('')
  const [plataformas, setPlataformas] = useState<string[]>([])
  const [precio, setPrecio] = useState(0)
  const [descuento, setDescuento] = useState(0)
  const [fecha, setFecha] = useState('')
  const [imagen, setImagen] = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (juegoEditado) {
      setNombre(juegoEditado.nombre)
      setDescripcion(juegoEditado.descripcion)
      setGenero(juegoEditado.genero)
      setPlataformas(juegoEditado.plataformas)
      setPrecio(juegoEditado.precio)
      setDescuento(juegoEditado.descuento)
      setFecha(juegoEditado.fecha)
      setImagen(juegoEditado.imagen)
      setVisible(juegoEditado.visible)
    }
  }, [juegoEditado])

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImagen(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    const nuevoJuego: Juego = {
      nombre,
      descripcion,
      genero,
      plataformas,
      precio,
      descuento,
      fecha,
      imagen,
      visible
    }
    onGuardar(nuevoJuego, editIndex)
  }

  return (
    <form className="juego-form" onSubmit={e => e.preventDefault()}>
      <label>Nombre:
        <input value={nombre} onChange={e => setNombre(e.target.value)} required />
      </label>

      <label>Descripción:
        <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
      </label>

      <label>Género:
        <select value={genero} onChange={e => setGenero(e.target.value)} required>
          <option value="">Seleccione un género</option>
          {generosDisponibles.map((gen, i) => (
            <option key={i} value={gen}>{gen}</option>
          ))}
        </select>
      </label>

      <label>Plataformas:</label>
      <div className="checkbox-group">
        {plataformasDisponibles.map((p, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={plataformas.includes(p)}
              onChange={e => {
                if (e.target.checked) {
                  setPlataformas([...plataformas, p])
                } else {
                  setPlataformas(plataformas.filter(x => x !== p))
                }
              }}
            /> {p}
          </label>
        ))}
      </div>

      <label>Precio:
        <input type="number" value={precio} onChange={e => setPrecio(parseFloat(e.target.value))} required />
      </label>

      <label>Descuento (%):
        <input type="number" value={descuento} onChange={e => setDescuento(parseFloat(e.target.value))} />
      </label>

      <label>Fecha de lanzamiento:
        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} required />
      </label>

      <label>Imagen:
        <input type="file" accept="image/*" onChange={handleImagen} />
      </label>

      {imagen && <img src={imagen} alt="preview" className="preview" />}

      <div className="form-buttons">
        <button type="button" onClick={onCancelar}>Cancelar</button>
        <button type="button" onClick={handleSubmit}>Guardar</button>
      </div>
    </form>
  )
}

export default JuegoForm
