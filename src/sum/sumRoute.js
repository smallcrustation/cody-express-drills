const express = require('express')

const sumRouter = express.Router()

sumRouter.route('/')
  .get((req, res, next)=> {
    let {a, b} = req.query
    a = parseInt(a)
    b = parseInt(b)
    
    let answer = a + b

    return res.json({answer})
  })

  module.exports = sumRouter