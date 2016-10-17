var express = require('express')
var router = express.Router()

var Parameter = require('../models/parameter')

router.route('/')

  .post(function (req, res) {

    var parameter = new Parameter()
    parameter.value = req.body.value
    parameter.type = req.body.type
    parameter.date = new Date(req.body.date)
    parameter.user = new Date(req.body.user)
    // Send the created exerciseBlock is better
    // How to obtain the current id ?
    parameter.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    Parameter.find( function(err, parameter) {
      if (err) {
        res.send(err)
      } else {
        res.json(parameter)
      }
    })
  })

router.route('/:parameter_id')

  .get(function (req, res) {
    Parameter.findById(req.params.parameter_id, function(err, parameter) {
      if (err) {
        res.send(err)
      } else {
        res.json(parameter)
      }
    })
  })

  .put(function (req, res) {
    Parameter.findById(req.params.parameter_id, function(err, parameter) {
      if (err) {
        res.send(err)
      } else {
        parameter.value = req.body.value
        parameter.type = req.body.type
        parameter.date = new Date(req.body.date)
        parameter.user = new Date(req.body.user)

        parameter.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(parameter)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    Parameter.findById(req.params.parameter_id, function(err, parameter) {
      if (err) {
        res.send(err)
      } else {
        parameter.remove(function (err) {
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
