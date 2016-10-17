var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.route('/')

  .post(function (req, res) {

    var user = new User()
    user.first_name = req.body.first_name
    user.last_name = req.body.last_name
    user.email = req.body.email
    user.password = req.body.password

    // Send the created user is better
    // How to obtain the current id ?
    user.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    User.find( function(err, users) {
      if (err) {
        res.send(err)
      } else {
        res.json(users)
      }
    })
  })

router.route('/:user_id')

  .get(function (req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        res.send(err)
      } else {
        res.json(user)
      }
    })
  })

  .put(function (req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        res.send(err)
      } else {
        user.first_name = req.body.first_name
        user.last_name = req.body.last_name
        user.email = req.body.email
        user.password = req.body.password

        user.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(user)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        res.send(err)
      } else {
        user.remove(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json({ message: 'Deleted !'})
          }
        })
      }
    })
  })

module.exports = router
