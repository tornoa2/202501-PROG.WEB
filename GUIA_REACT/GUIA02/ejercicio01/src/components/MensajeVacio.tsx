interface Props {
  mensaje?: string;
}

export const MensajeVacio = ({ mensaje = 'No se encontraron resultados.' }: Props) => {
  return (
    <p style={{ fontStyle: 'italic', color: '#555' }}>
      {mensaje}
    </p>
  );
};
