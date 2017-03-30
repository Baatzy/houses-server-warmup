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


app.get('/founders/:index', oneFounder)
app.get('/founders', allFounders)
