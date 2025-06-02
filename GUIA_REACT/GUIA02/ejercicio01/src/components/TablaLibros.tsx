import type { Libro } from '../types/Libro';
import { LibroFila } from './LibroFila';
import './TablaLibros.css';

interface Props {
  libros: Libro[];
}

export const TablaLibros = ({ libros }: Props) => {
  return (
    <table className="tabla-libros">
      <thead>
        <tr>
          <th>Id.</th>
          <th>Nombre</th>
          <th>Año</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro) => (
          <LibroFila key={libro.id} libro={libro} />
        ))}
      </tbody>
    </table>
  );
};
