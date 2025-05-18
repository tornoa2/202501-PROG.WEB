import { useEffect, useState } from 'react'
import '../Juegos/JuegoForm.css'

interface Props {
  onGuardar: (noticia: Noticia, index?: number) => void
  onCancelar: () => void
  noticiaEditada?: Noticia
  editIndex?: number
}

interface Noticia {
  titulo: string
  descripcion: string
  imagen: string
}

function NoticiaForm({ onGuardar, onCancelar, noticiaEditada, editIndex }: Props) {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState('')

  useEffect(() => {
    if (noticiaEditada) {
      setTitulo(noticiaEditada.titulo)
      setDescripcion(noticiaEditada.descripcion)
      setImagen(noticiaEditada.imagen)
    }
  }, [noticiaEditada])

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
    const nuevaNoticia: Noticia = {
      titulo,
      descripcion,
      imagen
    }
    onGuardar(nuevaNoticia, editIndex)
  }

  return (
    <form className="juego-form" onSubmit={e => e.preventDefault()}>
      <label>Nombre:
        <input value={titulo} onChange={e => setTitulo(e.target.value)} required />
      </label>

      <label>Descripción:
        <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
      </label>

      <label>Foto:
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

export default NoticiaForm
