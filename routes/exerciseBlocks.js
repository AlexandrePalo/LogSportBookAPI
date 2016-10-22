var express = require('express')
var router = express.Router()

var ExerciceBlock = require('../models/exerciceBlock')

var actionsExerciceBlocks = require('../actions/exerciceBlocks')

// CRUD
router.route('/')
  .post(function (req, res) { actionsExerciceBlocks.create(req.body, res) })
  .get(function (req, res) { actionsExerciceBlocks.list(req.query, res) })

router.route('/:exerciseBlock_id')
  .get(function (req, res) { actionsExerciceBlocks.retrieve(req.params.exerciseBlock_id, res) })
  .put(function (req, res) { actionsExerciceBlocks.update(req.params.exerciseBlock_id, req.body, res) })
  .delete(function (req, res) { actionsExerciceBlocks.remove(req.params.exerciseBlock_id, res) })

module.exports = router
