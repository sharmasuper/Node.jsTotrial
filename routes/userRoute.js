
const express = require('express');
const {fetch,create,getAllUser, update,deleteUser} = require('../controller/userController')
const route = express.Router()
route.use(express.json())
route.get('/fetch',fetch) 
route.post('/create',create)  
route.get('/getAllUser',getAllUser)
route.put('/update/:id', update) 
route.delete('/deleteUser/:id',deleteUser)



module.exports = route;