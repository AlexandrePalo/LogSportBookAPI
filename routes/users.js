var express = require('express')
var router = express.Router()

var User = require('../models/user')
var Training = require('../models/training')

var actionsUsers = require('../actions/users')
var actionsTrainings = require('../actions/trainings')
var actionsExerciseBlocks = require('../actions/exerciseBlocks')
var actionsSeries = require('../actions/series')
var actionsParameters = require('../actions/parameters')

router.route('/:user_id/trainings')
  .get(function (req, res) { actionsTrainings.list(Object.assign(req.query, { user: req.params.user_id }), res) })
  .post(function (req, res) { actionsTrainings.create(Object.assign(req.body, { user: req.params.user_id }, res) })

router.route('/:user_id/trainings/:training_id')
  .delete(function (req, res) { actionsTrainings.remove(req.params.training_id, res) })

module.exports = router
