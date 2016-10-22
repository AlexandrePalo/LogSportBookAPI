var express = require('express')
var router = express.Router()

var User = require('../models/user')
var Training = require('../models/training')

var actionsUsers = require('../actions/users')
var actionsTrainings = require('../actions/trainings')
var actionsExerciseBlocks = require('../actions/exerciseBlocks')
var actionsSeries = require('../actions/series')
var actionsParameters = require('../actions/parameters')

// CRUD USERS
router.route('/')
  .post(function (req, res) { actionsUsers.create(req.body, res) })
  .get(function (req, res) { actionsUsers.list(req.query, res) })
router.route('/:user_id')
  .get(function (req, res) { actionsUsers.retrieve({ _id: req.params.user_id }, res) })
  .put(function (req, res) { actionsUsers.update({ _id: req.params.user_id }, req.body, res) })
  .delete(function (req, res) { actionsUsers.remove({ _id: req.params.user_id }, res) })

// SUB PARAMETERS
router.route('/:user_id/parameters')
  .get(function (req, res) { actionsParameters.list(Object.assign(req.query, { user: req.params.user_id }), res) })
  .post(function (req, res) { actionsParameters.create(Object.assign(req.body, { user: req.params.user_id }), res)})
router.route('/:user_id/parameters/:parameter_id')
  .get(function (req, res) { actionsParameters.retrieve({ user: req.params.user_id, _id: req.params.parameter_id }, res) })
  .put(function (req, res) { actionsParameters.update({ user: req.params.user_id, _id: req.params.parameter_id }, req.body, res) })
  .delete(function (req, res) { actionsParameters.remove({ user: req.params.user_id, _id: req.params.parameter_id }, res) })

// SUB TRAININGS
router.route('/:user_id/trainings')
  .get(function (req, res) { actionsTrainings.list(Object.assign(req.query, { user: req.params.user_id }), res) })
  .post(function (req, res) { actionsTrainings.create(Object.assign(req.body, { user: req.params.user_id }), res)})
router.route('/:user_id/trainings/:training_id')
  .get(function (req, res) { actionsTrainings.retrieve({ user: req.params.user_id, _id: req.params.training_id }, res) })
  .put(function (req, res) { actionsTrainings.update({ user: req.params.user_id, _id: req.params.training_id }, req.body, res) })
  .delete(function (req, res) { actionsTrainings.remove({ user: req.params.user_id, _id: req.params.training_id }, res) })

// SUB TRAININGS EXERCISEBLOCKS
router.route('/:user_id/trainings/:training_id/exerciseblocks')
  .get(function (req, res) { actionsExerciseBlocks.list(Object.assign(req.query, { training: req.params.training_id }), res) })
  .post(function (req, res) { actionsExerciseBlocks.create(Object.assign(req.body, { training: req.params.training_id }), res)})
// BUG: we should have a query over user_id here, however this attribute is not present in the exerciseBlocks
// We need to add a query in the find, perhaps with where ?
router.route('/:user_id/trainings/:training_id/exerciseblocks/:exerciseblock_id')
  .get(function (req, res) { actionsExerciseBlocks.retrieve({ training: req.params.training_id, _id: req.params.exerciseblock_id }, res) })
  .put(function (req, res) { actionsExerciseBlocks.update({ training: req.params.training_id, _id: req.params.exerciseblock_id }, req.body, res) })
  .delete(function (req, res) { actionsExerciseBlocks.remove({ training: req.params.training_id, _id: req.params.exerciseblock_id }, res) })

// SUB TRAININGS EXERCISEBLOCKS SERIES
router.route('/:user_id/trainings/:training_id/exerciseblocks/:exerciseblock_id/series')
  .get(function (req, res) { actionsSeries.list(Object.assign(req.query, { exerciseBlock: req.params.exerciseblock_id }), res) })
  .post(function (req, res) { actionsSeries.create(Object.assign(req.body, { exerciseBlock: req.params.exerciseblock_id }), res)})
// BUG: we should have a query over user_id and training here, however this attribute is not present in the serie
// We need to add a query in the find, perhaps with where ?
router.route('/:user_id/trainings/:training_id/exerciseblocks/:exerciseblock_id/series/serie_id')
  .get(function (req, res) { actionsSeries.retrieve({ exerciseBlock: req.params.exerciseblock_id, _id: req.params.serie_id }, res) })
  .put(function (req, res) { actionsSeries.update({ exerciseBlock: req.params.exerciseblock_id, _id: req.params.serie_id }, req.body, res) })
  .delete(function (req, res) { actionsSeries.remove({ exerciseBlock: req.params.exerciseblock_id, _id: req.params.serie_id }, res) })

module.exports = router
