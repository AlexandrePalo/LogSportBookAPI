var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')

// cors
app.use(cors())

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
app.use('/users', routerUsers)
app.use('/muscularGroups', routerMuscularGroups)
app.use('/exercises', routerExercises)
app.use('/exerciseBlocks', routerExerciseBlocks)
app.use('/trainings', routerTrainings)
app.use('/series', routerSeries)

// Listening
app.listen(3000, function () {
  console.log('Listening localhost:3000')
})
