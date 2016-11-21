var Training = require('../models/training')
var Exercise = require('../models/exercise')
var ExerciseBlock = require('../models/exerciseBlock')
var _ = require('lodash')

const create = function (training, res) {
  var instance = new Training({
    description: training.description,
    user: training.user,
    place: training.place,
    date_begin: new Date(training.date_begin),
    date_end: new Date(training.date_end),
    exerciseBlocks: []
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
  Training
  .find(Object.assign({}, {'description' : new RegExp(query.search, 'i')}, _.omit(query, ['search', 'limit', 'order'])))
  .limit(query.limit && Number(query.limit))
  .sort(query.order ? query.order : 'date_begin')
  .exec(function(err, instances) {
    if (err) {
      res.send(err)
    } else {
      Training.populate(instances, { path: 'exerciseBlocks', model: 'ExerciseBlock'}, function(err, trainings) {
          if (err) {
            res.json(err)
          } else {
            Exercise.populate(trainings, { path: 'exerciseBlocks._exercise', model: 'Exercise' }, function(err, training) {
              if (err) {
                res.json(err)
              } else {
                res.json(trainings)
              }
            })
          }
      })
    }
  })
}

const retrieve = function (query, res) {
  Training
  .findById(query)
  .populate({ path: 'exerciseBlocks', model: 'ExerciseBlock'})
  .exec(function (err, instance) {
    Training.populate(instance, { path: 'exerciseBlocks._exercise', model: 'Exercise' }, function(err, training) {
        if (err) {
          res.json(err)
        } else {
          res.json(training)
        }
    })
  })
}

const update = function (query, data, res) {
  Training.findById(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      for (var attr in data) {
        if (_.includes(Object.keys(Training.schema.paths), attr)) {
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
  Training.findById(query, function(err, instance) {
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
