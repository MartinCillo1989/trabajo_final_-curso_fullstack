const express=require('express')
const route = express.Router()
const viewsController=require('../controllers/viewsController')
const authMiddleware =require('../middlewares/auth')
route.get('/login',viewsController.login)
route.get('/register',viewsController.register)
route.get('/home:token',authMiddleware,viewsController.home)

module.exports=route
