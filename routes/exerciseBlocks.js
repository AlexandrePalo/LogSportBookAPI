var express = require('express')
var router = express.Router()

var ExerciseBlock = require('../models/exerciseBlock')

router.route('/')

  .post(function (req, res) {

    var exerciseBlock = new ExerciseBlock()
    exerciseBlock.training = req.body.training
    exerciseBlock.index = req.body.index
    exerciseBlock.date_begin = new Date(req.body.date_begin)
    exerciseBlock.date_end = new Date(req.body.date_end)
    // Send the created exerciseBlock is better
    // How to obtain the current id ?
    exerciseBlock.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    ExerciseBlock.find( function(err, exerciseBlock) {
      if (err) {
        res.send(err)
      } else {
        res.json(exerciseBlock)
      }
    })
  })

router.route('/:exerciseBlock_id')

  .get(function (req, res) {
    ExerciseBlock.findById(req.params.exerciseBlock_id, function(err, exerciseBlock) {
      if (err) {
        res.send(err)
      } else {
        res.json(exerciseBlock)
      }
    })
  })

  .put(function (req, res) {
    ExerciseBlock.findById(req.params.exerciseBlock_id, function(err, exerciseBlock) {
      if (err) {
        res.send(err)
      } else {
        exerciseBlock.training = req.body.training
        exerciseBlock.index = req.body.index
        exerciseBlock.date_begin = new Date(req.body.date_begin)
        exerciseBlock.date_end = new Date(req.body.date_end)

        exerciseBlock.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(exerciseBlock)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    ExerciseBlock.findById(req.params.exerciseBlock_id, function(err, exerciseBlock) {
      if (err) {
        res.send(err)
      } else {
        exerciseBlock.remove(function (err) {
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
