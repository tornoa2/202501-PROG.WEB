import './estiloFormulario.css'

interface FiltroProps {
  onCancelar: () => void
}

const FiltroForm = (props: FiltroProps) => {
  return (
    <div className="form">
      <h2 className="form-titulo">Filtrar Juegos</h2>

      <label>
        Género:
        <select>
          <option value="">Todos</option>
          <option value="RPG">RPG</option>
          <option value="Aventura">Aventura</option>
          <option value="Estrategia">Estrategia</option>
          <option value="Acción">Acción</option>
        </select>
      </label>

      <div className="filtro-doble">
        <label>
          Fecha mínima:
          <input type="date" />
        </label>
        <label>
          Fecha máxima:
          <input type="date" />
        </label>
      </div>

      <div className="filtro-doble">
        <label>
          Precio mínimo:
          <input type="number" />
        </label>
        <label>
          Precio máximo:
          <input type="number" />
        </label>
      </div>

      <div className="form-buttons">
        <button type="button" onClick={props.onCancelar}>Cancelar</button>
        <button type="button">Limpiar filtros</button>
        <button type="button">Aplicar</button>
      </div>
    </div>
  )
}

export default FiltroForm