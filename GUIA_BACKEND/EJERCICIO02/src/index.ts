import express, { Request, Response} from 'express';
import dotenv from 'dotenv';

import { listadoProductos, Producto } from './data';
import e from 'express';

dotenv.config();
const app = express()
const PORT = process.env.PORT

app.get('/products', (req : Request, resp : Response) => {
  resp.json(listadoProductos)
})

app.get('/products/search', (req : Request, resp : Response) => {
    const name = req.query.name
    const maxPrice = req.query.maxPrice

    if (name == undefined){
      resp.status(400).json({
        msg: 'Debe enviar el query parameter name' });
      return;
    }

    if (maxPrice == undefined){
      resp.status(400).json({
        msg: 'Debe enviar el query parameter maxPrice' });
      return;
    }

    const nuevoListadoProductos : Producto[] = []

    for(let p of listadoProductos) {
      const productName = p.name.toUpperCase();
      if(productName.includes(name.toString().toUpperCase()) && p.price <= parseFloat(maxPrice.toString())){
        nuevoListadoProductos.push(p);
      }
    }

    resp.json(nuevoListadoProductos);
})

app.get('/products/:id', (req : Request, resp : Response) => {
  const id = req.params.id; //Siempre es un string

  let productoEncontrado: Producto | null = null
  for(let p of listadoProductos) {
    if(p.id.toString() === id) {
      productoEncontrado = p;
      break;
    }
  }

  if(productoEncontrado == null) {
    resp.status(400).json({ msg: 'Producto no encontrado' }); //400 significa que la culpa es del cliente
    return;
  }else {
    resp.json(productoEncontrado);
    return
  }

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});