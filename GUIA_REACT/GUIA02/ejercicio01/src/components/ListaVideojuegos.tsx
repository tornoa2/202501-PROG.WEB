import type { Videojuego } from '../types/Videojuego';
import { TarjetaVideojuego } from './TarjetaVideojuego';
import './ListaVideojuegos.css';

interface Props {
  juegos: Videojuego[];
}

export const ListaVideojuegos = ({ juegos }: Props) => {
  return (
    <div className="lista-videojuegos">
      {juegos.map((juego) => (
        <TarjetaVideojuego key={juego.id} juego={juego} />
      ))}
    </div>
  );
};
