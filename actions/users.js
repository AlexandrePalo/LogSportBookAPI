var User = require('../models/user')
var _ = require('lodash')

const create = function (user, res) {
  var newUser = new User({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    birth_date: new Date(user.birth_date),
    password: user.password
  })
  newUser.save(function(err) {
    if (err) {
      res.send(err)
    } else {
      res.json(newUser)
    }
  })
}

const list = function (query, res) {
  User.find(query, function(err, users) {
    if (err) {
      res.send(err)
    } else {
      res.json(users)
    }
  })
}

const retrieve = function (id, res) {
  User.findById(id, function(err, user) {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}

const update = function (id, data, res) {
  User.findById(id, function(err, user) {
    if (err) {
      res.send(err)
    } else {
      for (var attr in data) {
        if (_.includes(Object.keys(User.schema.paths), attr)) {
          user[attr] = data[attr]
        }
      }
      user.save(function(err) {
        if (err) {
          res.send(err)
        } else {
          res.json(user)
        }
      })
    }
  })
}

const remove = function (id, res) {
  User.findById(id, function(err, user) {
    if (err) {
      res.send(err)
    } else {
      user.remove(function (err) {
        if (err) {
          res.send(err)
        } else {
          res.json(user)
        }
      })
    }
  })
}

module.exports = { create, list, retrieve, update, remove }
