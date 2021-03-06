const { Router } = require('express');
const { logIn, logUp, updateUser, getUsers,getUserById, removeUser, resetPassword, setSubscription, confirmPassword, checkLogin, sendEmail, sendEmailCheckout, loginGoogle, addToWishList,
    getWishList, deleteWishItem } = require('../controllers/index.js')


const server = Router();


server.post('/login', logIn)
server.get('/checkLogin', checkLogin)
server.post('/logup', logUp)
server.put('/update/:id', updateUser)
server.patch('/update/:token', confirmPassword)
server.get('/', getUsers)
server.get('/:id', getUserById)
server.delete('/delete/:id', removeUser)
server.post('/resetPassword', resetPassword)
server.post('/subscription', setSubscription)
server.post('/sendEmail', sendEmail)
server.post('/sendEmailCheckout/:id', sendEmailCheckout)
server.post("/loginGoogle", loginGoogle)
server.post("/addToWishList", addToWishList);
server.get("/wishlist/:id", getWishList);
server.delete('/wishlist/delete', deleteWishItem)

module.exports = server;
