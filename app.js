var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Database connection
mongoose.connect('mongodb://admin:admin@ds059306.mlab.com:59306/logsportbookapi')

// Connecting routes
var routerUsers = require('./routes/users')
app.use('/api/users', routerUsers)

app.listen(3000, function () {
  console.log('Listening localhost:3000')
})
