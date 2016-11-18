var Serie = require('../models/serie')
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
    } else {
      res.json(instance)
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
