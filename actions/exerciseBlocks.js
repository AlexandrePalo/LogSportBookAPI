var ExerciseBlock = require('../models/exerciseBlock')
var _ = require('lodash')

const create = function (exerciseBlock, res) {
  var instance = new ExerciseBlock({
    training: exerciseBlock.training,
    index: exerciseBlock.index,
    date_begin: new Date(exerciseBlock.date_begin),
    date_end: new Date(exerciseBlock.date_end)
  })
  instance.save(function(err) {
    if (err) {
      res.send(err)
    } else {
      res.json(instance)
    }
  })
}

const list = function (query, res) {
  ExerciseBlock.find(query, function(err, instances) {
    if (err) {
      res.send(err)
    } else {
      res.json(instances)
    }
  })
}

const retrieve = function (query, res) {
  ExerciseBlock.findOne(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      res.json(instance)
    }
  })
}

const update = function (query, data, res) {
  ExerciseBlock.findOne(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      for (var attr in data) {
        if (_.includes(Object.keys(ExerciseBlock.schema.paths), attr)) {
          instance[attr] = data[attr]
        }
      }
      instance.save(function(err) {
        if (err) {
          res.send(err)
        } else {
          res.json(instance)
        }
      })
    }
  })
}

const remove = function (query, res) {
  ExerciseBlock.findOne(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      instance.remove(function (err) {
        if (err) {
          res.send(err)
        } else {
          res.json(instance)
        }
      })
    }
  })
}

module.exports = { create, list, retrieve, update, remove }
