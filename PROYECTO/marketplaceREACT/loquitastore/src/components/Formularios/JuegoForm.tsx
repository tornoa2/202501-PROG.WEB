import './estiloFormulario.css'

type JuegoFormProps = {
  onCancelar?: () => void
  juegoEditado?: boolean
}

const JuegoForm = (props: JuegoFormProps) => {
  return (
    <div className="form">
      <h2 className="form-titulo">
        {props.juegoEditado ? 'Editar Juego' : 'Agregar Juego'}
      </h2>

      <label>
        Nombre:
        <input type="text" placeholder="Nombre" />
      </label>

      <label>
        Descripción:
        <textarea placeholder="Descripción" />
      </label>

      <label>
        Género:
        <select>
          <option value="">Seleccione un género</option>
          <option value="Acción">Acción</option>
          <option value="Aventura">Aventura</option>
          <option value="RPG">RPG</option>
          <option value="Estrategia">Estrategia</option>
        </select>
      </label>

      <label>
        Plataformas:
        <div className="checkbox-group">
          <label><input type="checkbox" /> PC</label>
          <label><input type="checkbox" /> PS5</label>
          <label><input type="checkbox" /> Xbox Series X</label>
          <label><input type="checkbox" /> Nintendo Switch</label>
        </div>
      </label>

      <label>
        Precio:
        <input type="number" placeholder="0" />
      </label>

      <label>
        Descuento:
        <input type="number" placeholder="0" />
      </label>

      <label>
        Fecha de lanzamiento:
        <input type="date" />
      </label>

      <label>
        Imagen:
        <input type="file" />
      </label>

      <div className="form-buttons">
        <button type="button" onClick={props.onCancelar}>Cancelar</button>
        <button type="button">Guardar</button>
      </div>
    </div>
  )
}

export default JuegoForm