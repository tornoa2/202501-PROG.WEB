interface Props {
  valor: string;
  onChange: (nuevoValor: string) => void;
}

export const FiltroAutor = ({ valor, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Autor"
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '0.5rem',
        fontSize: '1rem',
        marginBottom: '1rem',
        borderRadius: '6px',
        border: '1px solid #ccc',
        width: '200px',
      }}
    />
  );
};
