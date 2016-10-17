var express = require('express')
var router = express.Router()

var Training = require('../models/training')

router.route('/')

  .post(function (req, res) {

    var training = new Exercise()
    training.description = req.body.description
    training.user = req.body.user
    training.place = req.body.place
    training.date_begin = new Date(req.body.date_begin)
    training.date_end = new Date(req.body.date_end)
    // Send the created training is better
    // How to obtain the current id ?
    training.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    Training.find( function(err, training) {
      if (err) {
        res.send(err)
      } else {
        res.json(training)
      }
    })
  })

router.route('/:training_id')

  .get(function (req, res) {
    Training.findById(req.params.training_id, function(err, training) {
      if (err) {
        res.send(err)
      } else {
        res.json(training)
      }
    })
  })

  .put(function (req, res) {
    Training.findById(req.params.training_id, function(err, training) {
      if (err) {
        res.send(err)
      } else {
        training.description = req.body.description
        training.user = req.body.user
        training.place = req.body.place
        training.date_begin = new Date(req.body.date_begin)
        training.date_end = new Date(req.body.date_end)

        training.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(training)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    Training.findById(req.params.training_id, function(err, training) {
      if (err) {
        res.send(err)
      } else {
        training.remove(function (err) {
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
