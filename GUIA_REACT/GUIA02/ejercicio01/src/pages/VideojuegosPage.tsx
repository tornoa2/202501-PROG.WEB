import { useEffect, useState } from 'react';
import { SelectorAnho } from '../components/SelectorAnho';
import { ListaVideojuegos } from '../components/ListaVideojuegos';
import { MensajeVacio } from '../components/MensajeVacio';
import type { Videojuego } from '../types/Videojuego';
import './VideojuegosPage.css';

const BASE_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgOJ7peFt3_jYi4bOiH28uyvBCKUV-gFgLZLsOVCtwTW4Cu_z3a398dmU2yFVlXOeFqQgOis5nBS1ETvih3uK1u92aJLGdEd4n9aYSr3rS-xfBQF4NcqzsMdTXqu8xqylMk65o5oRiMo01Rw0LtEoYKVmXwdHnOIWznogBeo-ptbhFp233ZfIiqWuFBXu2W8t5urcM9_RmycfzIuEdAmL06IeEN9JyWGQoQHBiU4QL-1MNzPJm9hredxiHBAQ9rxpzT_bjTTr9oMYjsIau3zwywVBWGix7ekz1s35opty0Z5PH59s06b4zvM640idAkff6YArA-_kEHCvcilmQ&lib=MzCRSx2GBuDNKIz2tLnZV-XcuVyCV2Yyz';

export const VideojuegosPage = () => {
  const [anho, setAnho] = useState('-');
  const [juegos, setJuegos] = useState<Videojuego[]>([]);

  useEffect(() => {
    fetch(BASE_URL + anho)
      .then((res) => res.json())
      .then((data) => setJuegos(data))
      .catch(() => alert('Error al obtener los videojuegos.'));
  }, [anho]);

  return (
    <div className="videojuegos-page">
      <h2>Videojuegos</h2>
      <SelectorAnho anhoSeleccionado={anho} onChange={setAnho} />
      {juegos.length > 0 ? (
        <ListaVideojuegos juegos={juegos} />
      ) : (
        <MensajeVacio mensaje="No hay videojuegos para este año." />
      )}
    </div>
  );
};
