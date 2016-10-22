var express = require('express')
var router = express.Router()

var Exercise = require('../models/exercise')

var actionsExercises = require('../actions/exercises')

// CRUD
router.route('/')
  .post(function (req, res) { actionsExercises.create(req.body, res) })
  .get(function (req, res) { actionsExercises.list(req.query, res) })

router.route('/:exercise_id')
  .get(function (req, res) { actionsExercises.retrieve(req.params.exercise_id, res) })
  .put(function (req, res) { actionsExercises.update(req.params.exercise_id, req.body, res) })
  .delete(function (req, res) { actionsExercises.remove(req.params.exercise_id, res) })

module.exports = router
