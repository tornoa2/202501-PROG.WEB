import type { Videojuego } from '../types/Videojuego';
import './TarjetaVideojuego.css';

interface Props {
  juego: Videojuego;
}

export const TarjetaVideojuego = ({ juego }: Props) => {
  return (
    <div className="tarjeta-videojuego">
      <h3>{juego.nombre}</h3>
      <span className="anho">{juego.anho}</span>
      <p>{juego.descripcion}</p>
    </div>
  );
};
