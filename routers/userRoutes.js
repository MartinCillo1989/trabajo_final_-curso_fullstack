const express=require('express')
const route = express.Router()
const usersController=require('../controllers/usersController')
route.post('/login',usersController.login)
route.post('/register',usersController.register)


module.exports=route
