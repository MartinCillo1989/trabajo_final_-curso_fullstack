const express=require('express')
const route = express.Router()
const usersController=require('../controllers/usersController')
route.post('/login',usersController.login)
route.post('/register',usersController.register)
route.get('/logout',usersController.logout)


module.exports=route
