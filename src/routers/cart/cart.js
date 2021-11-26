const express = require('express');
const daosCart = require('../../daos/indexCart');

const cartRouter = express.Router();

const CartDaos = daosCart;

cartRouter.post('/', async (req, res) => {
    const cart = req.body;
    const cartId = await CartDaos.getNewId(cart);
    res.send({ data: cartId });
});

cartRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const cartDeletedId = await CartDaos.deleteById(id);
    res.send({ data: cartDeletedId });
});

cartRouter.get('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const cart = await CartDaos.getById(id);
    const { productos } = cart;
    res.send({ data: productos });
});

cartRouter.post('/:id/productos', async (req, res) => {
    const id = req.params.id;
    const products = req.body;
    const cart = await CartDaos.addProductById(id, products);
    res.send({ data: cart });
});

cartRouter.delete('/:id/productos/:id_prod', async (req, res) => {
    const cartId = req.params.id;
    const productId = req.params.id_prod;
    const cart = await CartDaos.deleteProductById(cartId, productId);
    res.send({ data: cart });
});


module.exports = cartRouter;