require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const {NODE_ENV} = require('./config')
const sumRouter = require('./sum/sumRoute')
const cipherRouter = require('./cipher/cipherRouter')
const lottoRouter = require('./lotto/lottoRouter')

const app = express()

const morganOption = 
  ({NODE_ENV} === 'production') ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hell, World')
// })
app.use('/sum', sumRouter)
app.use('/cipher', cipherRouter)
app.use('/lotto', lottoRouter)

app.use(function errorHandler(error, req, res, next){
  let response
  if ({NODE_ENV} === 'production'){
    response = {error: {message: 'server error'}}
  } else {
    console.error(error)
    response = {message: error.message, error}
  }
  res.status(500).json(response)
})

module.exports = app