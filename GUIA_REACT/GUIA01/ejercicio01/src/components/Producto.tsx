type ProductoProps = {
  nombre: string;
  precio: number;
  descripcion: string;
};

export const Producto = ({ nombre, precio, descripcion }: ProductoProps) => {
    return (
        <div className="producto">
        <h2>{nombre}</h2>
        <p>Precio: ${precio.toFixed(2)}</p>
        <p>Descripción: {descripcion}</p>
        </div>
    );
};