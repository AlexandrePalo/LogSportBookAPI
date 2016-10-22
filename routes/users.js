var express = require('express')
var router = express.Router()

var User = require('../models/user')
var Training = require('../models/training')

var actionsUsers = require('../actions/users')

// CRUD
router.route('/')
  .post(function (req, res) { actionsUsers.create(req.body, res) })
  .get(function (req, res) { actionsUsers.list(req.query, res) })

router.route('/:user_id')
  .get(function (req, res) { actionsUsers.retrieve(req.params.user_id, res) })
  .put(function (req, res) { actionsUsers.update(req.params.user_id, req.body, res) })
  .delete(function (req, res) { actionsUsers.remove(req.params.user_id, res) })

// SUB
router.route('/:user_id/trainings')

  .get(function (req, res) {
    Training.find({ user: req.params.user_id }, function(err, trainings) {
        if (err) {
          res.send(err)
        } else {
          res.json(trainings)
        }
    })
  })

module.exports = router
