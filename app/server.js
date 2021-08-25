const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

port = 5000
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("Database connected"), { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})