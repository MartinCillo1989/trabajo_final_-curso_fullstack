const express=require('express')
const route = express.Router()
const viewsController=require('../controllers/viewsController')
route.get('/login',viewsController.login)
route.get('/register',viewsController.register)
route.get('/',viewsController.home)

module.exports=route

