const express = require('express')

cipherRouter = express.Router()

cipherRouter.route('/')
  .get((req, res, next)=>{
    let {text, shift } = req.query
    shift = parseInt(shift)%26
    encryptedText = ''
    for(let i in text){
      const tempCharCode = text[i].charCodeAt(0) + shift
      encryptedText += String.fromCharCode(tempCharCode)
    }
    return res.json({encryptedText, shift})
  })

module.exports = cipherRouter