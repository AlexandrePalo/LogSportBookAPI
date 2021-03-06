var Training = require('../models/training')
var Exercise = require('../models/exercise')
var ExerciseBlock = require('../models/exerciseBlock')
var Serie = require('../models/serie')
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
  let builtQuery = Object.assign(
    {},
    {
      $or: [
        {'description': new RegExp(query.search, 'i')},
        {'place': new RegExp(query.search, 'i')}
      ]
    },
    _.omit(query, ['search', 'limit', 'order', 'from', 'to'])
  )
  query.from && (builtQuery['date_end'] = { $gte: new Date(query.from)})
  query.to && (builtQuery['date_end'] = Object.assign({}, builtQuery['date_end'],
    { $lte: new Date(query.to) }
  ))
  Training
  .find(builtQuery)
  .limit(query.limit && Number(query.limit))
  .sort(query.order ? query.order : '-date_end')
  .exec(function(err, instances) {
    if (err) {
      res.send(err)
    } else {
      Training.populate(instances, { path: 'exerciseBlocks', model: 'ExerciseBlock'}, function(err, subInstance) {
          if (err) {
            res.json(err)
          } else {
            Exercise.populate(subInstance, { path: 'exerciseBlocks._exercise', model: 'Exercise' }, function(err, subInstance2) {
              if (err) {
                res.json(err)
              }
            })
            Serie.populate(subInstance, { path: 'exerciseBlocks.series', model: 'Serie'}, function(err, subInstance3) {
              if (err) {
                res.json(err)
              } else {
                res.json(subInstance3)
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
