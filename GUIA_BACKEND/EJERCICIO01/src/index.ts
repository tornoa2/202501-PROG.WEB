import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { userDB, TOKEN } from './users';
import { authMiddleware } from './auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.post('/login', (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (username === userDB.username && password === userDB.password) {
    res.json({ token: TOKEN });
    return;
  }

  res.status(401).json({ msg: 'Credenciales incorrectas' });
});

app.get('/profile', authMiddleware, (req: Request, res: Response): void => {
  res.json({ msg: 'Acceso concedido al perfil protegido.' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
