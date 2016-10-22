var express = require('express')
var router = express.Router()

var Parameter = require('../models/parameter')

var actionsParameters = require('../actions/parameters')

// CRUD
router.route('/')
  .post(function (req, res) { actionsParameters.create(req.body, res) })
  .get(function (req, res) { actionsParameters.list(req.query, res) })

router.route('/:parameter_id')
  .get(function (req, res) { actionsParameters.retrieve(req.params.parameter_id, res) })
  .put(function (req, res) { actionsParameters.update(req.params.parameter_id, req.body, res) })
  .delete(function (req, res) { actionsParameters.remove(req.params.parameter_id, res) })

module.exports = router
