const express = require('express');
const cors = require('cors');
const app = express()
const {db} = require('./db/db');
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT= process.env.PORT

//middle ware
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((routes) => app.use('api/v1' , require('./routes/'+routes)))

const server = () => {
  db();
  app.listen(PORT, () =>{
    console.log('Listening to port: ',PORT)
  })
}

server()