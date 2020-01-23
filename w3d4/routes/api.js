const express = require('express')
const api = express.Router()


const oldUrlDataBase = {
  "b2xvn2": "http://faquecest.ca"
}

const newUrlDatabase = {
  "b2xvn2": {
    longURL: "http://faquecest.ca",
    userId: "j2kj40f"
  }
}

//Before the database transition

// api.get('/api/v1/urls', (req,res) => {
//   res.json(oldUrlDataBase)
//   // res.send(JSON.stringify(oldUrlDataBase))
// })

//After database transition

api.get('/v1/urls', (req, res) => {
  const legacyDatabaseTemp = {}
  for (const key in newUrlDatabase) {
    legacyDatabaseTemp[key] = newUrlDatabase[key].longURL
  }
  
  res.json(legacyDatabaseTemp)
})

api.get('/v2/urls', (req, res) => {
  res.json(newUrlDatabase)
})

api.get('/users/:id')
module.exports = api