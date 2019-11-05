const express = require('express')

lottoRouter = express.Router()

lottoRouter.route('').get((req, res, next) => {
  const numbers = req.query.arr

  matchCount = 0
  // make lucky numbers array
  let luckyNumbers = []
  for(let i=0; i<6; i++){
    luckyNumbers.push(Math.floor(Math.random()*20)+1)
  }
  console.log(luckyNumbers)
  // luckyNumbers = [1,8,20,1,3,13]

  // make object with unique numbers
  const numbersObject = {}
  for(let i=0; i<numbers.length; i++){
    // if the obj doesn't have the arr[i] add it
    if(!numbersObject[numbers[i]]){
      numbersObject[numbers[i]] = numbers[i]
    }
  }

  // check if lucky numbers are in object
  for(let i=0; i<luckyNumbers.length; i++){
    if(numbersObject[luckyNumbers[i]]){
      matchCount += 1
    }
  }

  if(matchCount<4){
    return res.json({ message: 'sorry you lose' })
  }
  else if(matchCount===4){
    return res.json({ message: 'you win a free ticket' })
  }
  else if(matchCount===5){
    return res.json({ message: 'you win 100$$$' })
  } 
  else {
    return res.json({ message: 'you win megamillions' })
  }

})

module.exports = lottoRouter
