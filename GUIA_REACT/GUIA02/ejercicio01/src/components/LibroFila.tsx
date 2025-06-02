import type { Libro } from '../types/Libro';

interface Props {
  libro: Libro;
}

export const LibroFila = ({ libro }: Props) => {
  return (
    <tr>
      <td>{libro.id}</td>
      <td>{libro.nombre}</td>
      <td>{libro.anho}</td>
      <td>{libro.autor}</td>
    </tr>
  );
};
