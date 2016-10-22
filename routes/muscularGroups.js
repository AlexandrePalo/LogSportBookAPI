var express = require('express')
var router = express.Router()

var MuscularGroup = require('../models/muscularGroup')

var actionsMuscularGroups = require('../actions/muscularGroups')

// CRUD
router.route('/')
  .post(function (req, res) { actionsMuscularGroups.create(req.body, res) })
  .get(function (req, res) { actionsMuscularGroups.list(req.query, res) })

router.route('/:muscularGroup_id')
  .get(function (req, res) { actionsMuscularGroups.retrieve(req.params.muscularGroup_id, res) })
  .put(function (req, res) { actionsMuscularGroups.update(req.params.muscularGroup_id, req.body, res) })
  .delete(function (req, res) { actionsMuscularGroups.remove(req.params.muscularGroup_id, res) })

module.exports = router
