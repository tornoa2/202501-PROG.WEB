import { Request, Response, NextFunction } from 'express';
import { TOKEN } from './users';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== `Bearer ${TOKEN}`) {
    res.status(403).json({ msg: 'Token inválido o ausente' });
    return; // importante para detener el flujo
  }

  next();
};