var express = require('express')
var router = express.Router()

var Exercise = require('../models/exercise')

router.route('/')

  .post(function (req, res) {

    var exercise = new Exercise()
    exercise.name = req.body.name
    exercise.muscularGroup = req.body.muscularGroup
    // Send the created user is better
    // How to obtain the current id ?
    exercise.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    Exercise.find( function(err, exercise) {
      if (err) {
        res.send(err)
      } else {
        res.json(exercise)
      }
    })
  })

router.route('/:exercise_id')

  .get(function (req, res) {
    Exercise.findById(req.params.exercise_id, function(err, exercise) {
      if (err) {
        res.send(err)
      } else {
        res.json(exercise)
      }
    })
  })

  .put(function (req, res) {
    Exercise.findById(req.params.exercise_id, function(err, exercise) {
      if (err) {
        res.send(err)
      } else {
        exercise.name = req.body.name
        exercice.muscularGroup = req.body.muscularGroup

        exercise.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(exercise)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    Exercise.findById(req.params.exercise_id, function(err, exercise) {
      if (err) {
        res.send(err)
      } else {
        exercise.remove(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json({ message: 'Deleted !'})
          }
        })
      }
    })
  })

module.exports = router
