const express = require('express')
const bodyParser=require('body-parser')
const viewsRouter=require('./routers/viewsRoutes')
const cors=require('cors')
const app = express()
const port = 3000

//midlware
app.use(bodyParser.json)
app.use(cors())
app.use(express.static('public'))
app.set('view enginr','ejs');


//rutas
app.use('/',viewsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})