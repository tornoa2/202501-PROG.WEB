import CancionesItem from "./CancionesItem"

type Cancion = {
  id: number;
  nombre: string;
  genero: string;
  artista: string;
};

type Props = {
  canciones: Cancion[];
};

const CancionesList = ({ canciones }: Props) => {
  return (
    <div className="container">
      <div className="row">
        {canciones.map((cancion) => (
          <CancionesItem key={cancion.id} cancion={cancion} />
        ))}
      </div>
    </div>
  );
};

export default CancionesList