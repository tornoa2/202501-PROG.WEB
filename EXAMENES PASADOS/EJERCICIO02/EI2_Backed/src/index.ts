import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { listaCanciones, Cancion } from "./data";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Configuración del servidor
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Endpoints
app.get("/", (req: Request, resp: Response) => {
  resp.send("API de canciones");
});

app.get("/canciones", (req: Request, resp: Response) => {
  resp.json(listaCanciones);
});

app.post("/canciones", (req: Request, resp: Response) => {
  const cancion = req.body;
  const canciones = listaCanciones;

  if (
    cancion.nombre == undefined ||
    cancion.genero == undefined ||
    cancion.artista == undefined
  ) {
    resp.status(400).json({
      msg: "Debe enviar todos los campos"
    });
    return;
  }

  canciones.push({
    nombre: cancion.nombre,
    genero: cancion.genero,
    artista: cancion.artista,
    id: new Date().getTime()
  });

  resp.json({
    msg: "Canción registrada correctamente"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
