var express = require('express')
var router = express.Router()

var Serie = require('../models/serie')

router.route('/')

  .post(function (req, res) {

    var serie = new Serie()
    serie.exerciseBlock = req.body.exerciseBlock
    serie.index = req.body.index,
    serie.repetition = req.body.repetition,
    serie.load = req.body.load
    // Send the created serie is better
    // How to obtain the current id ?
    serie.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    Serie.find( function(err, serie) {
      if (err) {
        res.send(err)
      } else {
        res.json(serie)
      }
    })
  })

router.route('/:serie_id')

  .get(function (req, res) {
    Serie.findById(req.params.serie_id, function(err, serie) {
      if (err) {
        res.send(err)
      } else {
        res.json(serie)
      }
    })
  })

  .put(function (req, res) {
    Serie.findById(req.params.serie_id, function(err, serie) {
      if (err) {
        res.send(err)
      } else {
        serie.exerciseBlock = req.body.exerciseBlock
        serie.index = req.body.index,
        serie.repetition = req.body.repetition,
        serie.load = req.body.load

        serie.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(serie)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    Serie.findById(req.params.serie_id, function(err, serie) {
      if (err) {
        res.send(err)
      } else {
        serie.remove(function (err) {
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
