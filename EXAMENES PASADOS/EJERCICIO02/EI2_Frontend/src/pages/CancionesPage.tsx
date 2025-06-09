import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CancionesList from "../components/CancionesList";
import Footer from "../components/Footer";

export type Cancion = {
  id: number;
  nombre: string;
  genero: string;
  artista: string;
};

const URL = "http://localhost:5000";

const CancionesPage = () => {
  const navigate = useNavigate();
  const [canciones, setCanciones] = useState<Cancion[]>([]);

  // GET canciones
  const obtenerCanciones = async () => {
    try {
      const resp = await fetch(`${URL}/canciones`);
      const data = await resp.json();
      setCanciones(data);
    } catch (err) {
      console.error("Error al obtener canciones", err);
    }
  };

  // Inicialización
  useEffect(() => {
    obtenerCanciones();
  }, []);

  return (
    <div className="container">
      <h1>Canciones</h1>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/nuevaCancion")}>
        Nueva Canción
      </button>
      <CancionesList canciones={canciones} />
      <Footer />
    </div>
  );
};

export default CancionesPage;