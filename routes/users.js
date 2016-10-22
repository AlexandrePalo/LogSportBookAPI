var express = require('express')
var router = express.Router()

var User = require('../models/user')
var Training = require('../models/training')

var actionsUsers = require('../actions/users')
var actionsTrainings = require('../actions/trainings')

// CRUD USERS
router.route('/')
  .post(function (req, res) { actionsUsers.create(req.body, res) })
  .get(function (req, res) { actionsUsers.list(req.query, res) })
router.route('/:user_id')
  .get(function (req, res) { actionsUsers.retrieve({ _id: req.params.user_id }, res) })
  .put(function (req, res) { actionsUsers.update({ _id: req.params.user_id }, req.body, res) })
  .delete(function (req, res) { actionsUsers.remove({ _id: req.params.user_id }, res) })

// SUB TRAININGS
router.route('/:user_id/trainings')
  .get(function (req, res) { actionsTrainings.list(Object.assign(req.query, { user: req.params.user_id }), res) })
  .post(function (req, res) { actionsTrainings.create(Object.assign(req.body, { user: req.params.user_id }), res)})
router.route('/:user_id/trainings/:training_id')
  .get(function (req, res) { actionsTrainings.retrieve({ user: req.params.user_id, _id: req.params.training_id }, res) })
  .put(function (req, res) { actionsTrainings.update({ user: req.params.user_id, _id: req.params.training_id }, req.body, res) })
  .delete(function (req, res) { actionsTrainings.remove({ user: req.params.user_id, _id: req.params.training_id }, res) })
module.exports = router
