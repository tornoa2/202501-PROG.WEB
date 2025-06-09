type Props = {
  cancion: {
    id: number;
    nombre: string;
    genero: string;
    artista: string;
  };
};

const CancionesItem = ({ cancion }: Props) => {
    return (
        <div className="col-4 border p-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{cancion.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{cancion.genero}</h6>
                    <p className="card-text">{cancion.artista}</p>
                </div>
            </div>
        </div>
    )
}

export default CancionesItem