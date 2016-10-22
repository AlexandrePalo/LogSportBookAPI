var express = require('express')
var router = express.Router()

var Training = require('../models/training')

var actionsTrainings = require('../actions/trainings')

// CRUD
router.route('/')
  .post(function (req, res) { actionsTrainings.create(req.body, res) })
  .get(function (req, res) { actionsTrainings.list(req.query, res) })

router.route('/:training_id')
  .get(function (req, res) { actionsTrainings.retrieve(req.params.training_id, res) })
  .put(function (req, res) { actionsTrainings.update(req.params.training_id, req.body, res) })
  .delete(function (req, res) { actionsTrainings.remove(req.params.training_id, res) })


module.exports = router
