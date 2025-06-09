import express, { Request, Response} from 'express';
import dotenv from 'dotenv';

import { listadoExpositores, Expositor } from './data';
import e from 'express';

dotenv.config();
const app = express()
const PORT = process.env.PORT

app.use(express.json());

app.get('/expositores', (req : Request, resp : Response) => {
  resp.json(listadoExpositores)
})

app.post('/expositores', (req: Request, res: Response) => {
  const nuevo = req.body;
  listadoExpositores.push(nuevo);
  res.json({ error: "" });
});

app.put('/expositores', (req: Request, res: Response) => {
  const actualizado = req.body;
  const index = listadoExpositores.findIndex(e => e.id === actualizado.id);

  if (index !== -1) {
    listadoExpositores[index] = actualizado;
    res.json({ error: "" });
  } else {
    res.status(404).json({ error: "Expositor no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});