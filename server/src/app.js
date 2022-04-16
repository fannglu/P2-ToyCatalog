const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// const mongoose = require('mongoose')
// const dotenv = require('dotenv').config
const app = express()
const port = process.env.PORT || 8081

// middlewares
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// test backend
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(port)
