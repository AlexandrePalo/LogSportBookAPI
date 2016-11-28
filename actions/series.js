var Serie = require('../models/serie')
var ExerciseBlock = require('../models/exerciseBlock')
var _ = require('lodash')

const create = function (serie, res) {
  var instance = new Serie({
    _exerciseBlock: serie._exerciseBlock,
    index: serie.index,
    repetitions: serie.repetitions,
    load: serie.load
  })
  instance.save(function(err) {
    if (err) {
      res.send(err)
    }
  })
  ExerciseBlock
  .findById(instance._exerciseBlock)
  .exec(function (err, exerciseBlock) {
    if (err) {
      res.json(err)
    } else {
      exerciseBlock.series.push(instance._id)
      exerciseBlock.save(function(err) {
        if (err) {
          res.send(err)
        } else {
          res.json(instance)
        }
      })
    }
  })
}

const list = function (query, res) {
  Serie.find(query, function(err, instances) {
    if (err) {
      res.send(err)
    } else {
      res.json(instances)
    }
  })
}

const retrieve = function (query, res) {
  Serie.findById(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      res.json(instance)
    }
  })
}

const update = function (query, data, res) {
  Serie.findById(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      for (var attr in data) {
        if (_.includes(Object.keys(Serie.schema.paths), attr)) {
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
  Serie.findById(query, function(err, instance) {
    if (err) {
      res.send(err)
    } else {
      ExerciseBlock
      .findById(instance._exerciseBlock)
      .exec(function(err, exerciseBlock) {
        if (err) {
          res.send(err)
        } else {
          var index = exerciseBlock.series.indexOf(instance._id)
          return exerciseBlock.series.slice(0, index).concat(exerciseBlock.series.slice(index + 1))
          exerciseBlock.save(function(err, e) {
            if (err) {
              res.send(err)
            }
          })
        }
      })

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
