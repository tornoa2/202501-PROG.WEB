import { useEffect, useState } from 'react';
import { TablaLibros } from '../components/TablaLibros';
import { FiltroAutor } from '../components/FiltroAutor';
import { MensajeVacio } from '../components/MensajeVacio';
import type { Libro } from '../types/Libro';
import './LibrosPage.css';

const ENDPOINT = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgDm4FLbq5vezPeJEyuMmzX8WyXzfdswgPZb7HnrxRF7y_i4dV9nOhGIfYeed4_JIn7hGX2RiFF8uBgBkOUACP4UikbPBNYbEhByScjVIW8cmKeWLxOmuKS5m-FHrYgxf8AOFbAke0rw8hmNAK2TMBtQRjikxZWKi0jnkcW4yAJI1YwEyNw6qV3nhYyzdFFUxyT6MsnhYNdv67doUSmnm9BYcPxl7_h7M1COtvSXsCsvQgrfiEEqgmWkiBd1Y8AgM9oT-4Gjgm4eIMCAbBUpVZr4GcefFFMh-szlR29uXFsdwkOkNc&lib=MzCRSx2GBuDNKIz2tLnZV-XcuVyCV2Yyz';

export const LibrosPage = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [filtroAutor, setFiltroAutor] = useState('');

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setLibros(data);
      })
      .catch(() => {
        alert('Error al cargar los libros.');
      });
  }, []);

  const librosFiltrados = libros.filter((libro) =>
    libro.autor.toLowerCase().includes(filtroAutor.toLowerCase())
  );

  return (
    <div className="libros-page">
      <h2>Libros</h2>

      <FiltroAutor valor={filtroAutor} onChange={setFiltroAutor} />

      {librosFiltrados.length > 0 ? (
        <TablaLibros libros={librosFiltrados} />
      ) : (
        <MensajeVacio />
      )}
    </div>
  );
};
