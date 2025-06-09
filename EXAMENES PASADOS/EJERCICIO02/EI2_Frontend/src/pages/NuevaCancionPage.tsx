import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000";

const NuevaCancionPage = () => {
  const navigate = useNavigate();

  // Inputs controlados (3 puntos)
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [artista, setArtista] = useState("");

  // guardarCancionHandler (1 + 3 puntos)
  const guardarCancionHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevaCancion = {
      nombre,
      genero,
      artista
    };

    try {
      const resp = await fetch(`${URL}/canciones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevaCancion)
      });

      if (resp.ok) {
        navigate("/"); // Volver a CancionesPage
      } else {
        const data = await resp.json();
        alert("Error: " + (data.msg || "No se pudo guardar la canción"));
      }
    } catch (err) {
      console.error("Error en el guardado:", err);
      alert("Error de red");
    }
  };

  return (
    <div className="container">
      <h2>Registrar nueva canción</h2>

      <form onSubmit={guardarCancionHandler}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Género</label>
          <input
            type="text"
            className="form-control"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Artista</label>
          <input
            type="text"
            className="form-control"
            value={artista}
            onChange={(e) => setArtista(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Guardar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/")}>Cancelar</button>
      </form>
    </div>
  );
};

export default NuevaCancionPage;