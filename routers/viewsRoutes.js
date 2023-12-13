const express=require('express')
const route = express.Router()
const viewsController=require('../controllers/viewsController')
const authMiddleware =require('../middlewares/auth')
const isAdmin=require('../middlewares/admin')
route.get('/login',viewsController.login)
route.get('/register',viewsController.register)
route.get('/',authMiddleware,viewsController.home)
route.get('/dashboard',authMiddleware,isAdmin,viewsController.dashboard)
route.get('/cart',authMiddleware,viewsController.cart)

module.exports=route
