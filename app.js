var express = require("express")
var founders = require("./founders.js")
var members = require("./members.js")
var app = express()
var port = process.env.PORT || 3000



function allFounders(req,res) {
  res.json(founders)
}


function oneFounder(req,res) {
  var index = req.params.index
  var founder = founders[index]

  res.json(founder)
}

function deleteFounder (req, res) {
  //http DELETE http://localhost:3000/founders/INDEX
  var index = req.params.index
  var founder = founders[index]

  founders.splice(index, 1)
  res.json(founders)
}


function listenHandler () {
  console.log(`We are listening to you on port ${port}`);
}




app.get('/founders/:index', oneFounder)
app.get('/founders', allFounders)
app.listen(port, listenHandler)
app.delete('/founders/:index', deleteFounder)
