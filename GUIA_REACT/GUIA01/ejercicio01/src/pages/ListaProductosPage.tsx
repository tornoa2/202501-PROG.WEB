import { Producto } from '../components/Producto';
import { useState } from 'react';

export function ListaProductosPage() {
    const [productos, setProductos] = useState([
    {
        nombre: 'Laptop Gamer',
        precio: 1500,
        descripcion: 'Laptop con GPU RTX y 16GB RAM',
    },
    {
        nombre: 'Mouse Inalámbrico',
        precio: 30,
        descripcion: 'Mouse ergonómico con conexión Bluetooth',
    },
    {
        nombre: 'Teclado Mecánico',
        precio: 80,
        descripcion: 'Teclado con switches rojos y retroiluminación',
    },
    ]);

    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: '',
        precio: 0,
        descripcion: '',}
    );

    const handleAgregarProducto = () => {
        if (!nuevoProducto.nombre.trim() || !nuevoProducto.precio || !nuevoProducto.descripcion.trim()) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const nuevo = {
            nombre: nuevoProducto.nombre,
            precio: nuevoProducto.precio,
            descripcion: nuevoProducto.descripcion,
        };
        
        setProductos([...productos, nuevo]);
        
        setNuevoProducto({
            nombre: '',
            precio: 0,
            descripcion: '',
        });
    };

  return (
    <div>
        <h1>Lista de Productos</h1>
        <form>
            <h2>Agregar nuevo producto</h2>
            
            <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                value = {nuevoProducto.nombre}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
            />
            <br />

            <input
                type="number"
                placeholder="Precio"
                name="precio"
                value = {nuevoProducto.precio}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: Number(e.target.value) })}
            />
            <br />

            <input
                type="text"
                placeholder="Descripción"
                name="descripcion"
                value = {nuevoProducto.descripcion}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })}
            />
            <br />

            <button type="button" onClick={handleAgregarProducto} className="boton-agregar">
                Agregar producto
            </button>
        </form>

        <div className="lista-productos">
            {productos.map((producto, index) => (
            <Producto
                key={index}
                nombre={producto.nombre}
                precio={producto.precio}
                descripcion={producto.descripcion}
            />
            ))}
        </div>
    </div>
  );
}