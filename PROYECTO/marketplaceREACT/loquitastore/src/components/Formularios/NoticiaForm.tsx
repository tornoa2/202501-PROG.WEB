import './estiloFormulario.css'

interface NoticiaProps {
  onCancelar?: () => void
  noticiaEditada?: boolean
}

const NoticiaForm = (props: NoticiaProps) => {
  return (
    <div className="form">
      <h2 className="form-titulo">
        {props.noticiaEditada ? 'Editar Noticia' : 'Agregar Noticia'}
      </h2>

      <label>
        Título:
        <input type="text" placeholder="Título de la noticia" />
      </label>

      <label>
        Descripción:
        <textarea placeholder="Descripción de la noticia" />
      </label>

      <label>
        Foto:
        <input type="file" accept="image/*" />
      </label>

      <div className="form-buttons">
        <button type="button" onClick={props.onCancelar}>Cancelar</button>
        <button type="button">Guardar</button>
      </div>
    </div>
  )
}

export default NoticiaForm