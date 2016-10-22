var express = require('express')
var router = express.Router()

var Serie = require('../models/serie')

var actionsSeries = require('../actions/series')

// CRUD
router.route('/')
  .post(function (req, res) { actionsSeries.create(req.body, res) })
  .get(function (req, res) { actionsSeries.list(req.query, res) })

router.route('/:serie_id')
  .get(function (req, res) { actionsSeries.retrieve(req.params.serie_id, res) })
  .put(function (req, res) { actionsSeries.update(req.params.serie_id, req.body, res) })
  .delete(function (req, res) { actionsSeries.remove(req.params.serie_id, res) })

module.exports = router
