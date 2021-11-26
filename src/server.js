require('dotenv').config();
const express = require('express');
const productsRouter = require('./routers/products/products');
const cartRouter = require('./routers/cart/cart');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api/productos', productsRouter);
server.use('/api/carrito', cartRouter);

let port = process.env.PORT || 8080;

server.get('/', (req, res) => {
    res.json({mensaje: 'Funcionamiento correcto'});
});

const app = server.listen(port, ()=>{
    console.log(`Servidor corriendo en ${port}`);
});

app.on('error', (error)=>{
    console.log(`Error: ${error}`);
});