const express = require('express')
const bodyParser = require('body-parser')
const viewsRouter = require('./routers/viewsRoutes')
const userRoutes = require('./routers/userRoutes')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

//midlware
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.set('view engine','ejs');


//rutas
app.use('/',viewsRouter)

//rutas de recursos
app.use('/api/user/',userRoutes)


app.listen(port, async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/mi-proyecto-final')
    console.log(`Example app listening on port ${port}`)
  }catch(error){
    console.log('error to connect mongoDB',error)
  }
  
})