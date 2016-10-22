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
var routerMuscularGroups = require('./routes/muscularGroups')
var routerExercises = require('./routes/exercises')
var routerExerciseBlocks = require('./routes/exerciseBlocks')
var routerTrainings = require('./routes/trainings')
var routerSeries = require('./routes/series')
var routerParameters = require('./routes/parameters')
app.use('/api/users', routerUsers)
app.use('/api/muscularGroups', routerMuscularGroups)
app.use('/api/exercises', routerExercises)
app.use('/api/exerciseBlocks', routerExerciseBlocks)
app.use('/api/trainings', routerTrainings)
app.use('/api/series', routerSeries)
app.use('/api/parameters', routerParameters)

// Listening
app.listen(3000, function () {
  console.log('Listening localhost:3000')
})
