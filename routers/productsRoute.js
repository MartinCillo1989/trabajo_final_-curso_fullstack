const express=require('express')
const route = express.Router()
const productsControllers = require('../controllers/productsControllers')
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/admin')

route.get('/',productsControllers.get)
route.post('/',productsControllers.create)
route.put('/',productsControllers.update)
route.delete('/',productsControllers.remove)




module.exports=route