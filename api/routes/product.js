const { Router } = require('express')
const { getProducts, createProduct, getProductsById } = require('../controllers/index.js')
const server = Router();

server.get('/', getProducts)
server.post('/create', createProduct)
server.post('/:id', getProductsById)


module.exports = server;
