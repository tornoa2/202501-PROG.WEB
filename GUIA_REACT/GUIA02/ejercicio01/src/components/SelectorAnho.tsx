interface Props {
  anhoSeleccionado: string;
  onChange: (nuevoAnho: string) => void;
}

export const SelectorAnho = ({ anhoSeleccionado, onChange }: Props) => {
  return (
    <select
      value={anhoSeleccionado}
      onChange={(e) => onChange(e.target.value)}
      className="selector-anho"
    >
      <option value="-">Todos</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
    </select>
  );
};
