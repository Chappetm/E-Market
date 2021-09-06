const { Router } = require('express')
const { getProducts, createProduct, getProductsById, removeProduct, updateProduct } = require('../controllers/index.js')
const server = Router();

server.get('/', getProducts)
server.post('/create', createProduct)
server.get('/:id', getProductsById)
server.delete('/delete/:id', removeProduct)
server.put('/update', updateProduct)


module.exports = server;
