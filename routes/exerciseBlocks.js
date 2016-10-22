var express = require('express')
var router = express.Router()

var ExerciseBlock = require('../models/exerciseBlock')

var actionsExerciseBlocks = require('../actions/exerciseBlocks')

// CRUD
router.route('/')
  .post(function (req, res) { actionsExerciseBlocks.create(req.body, res) })
  .get(function (req, res) { actionsExerciseBlocks.list(req.query, res) })

router.route('/:exerciseBlock_id')
  .get(function (req, res) { actionsExerciseBlocks.retrieve(req.params.exerciseBlock_id, res) })
  .put(function (req, res) { actionsExerciseBlocks.update(req.params.exerciseBlock_id, req.body, res) })
  .delete(function (req, res) { actionsExerciseBlocks.remove(req.params.exerciseBlock_id, res) })

module.exports = router
