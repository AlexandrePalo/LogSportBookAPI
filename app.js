var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Database connection
mongoose.connect('mongodb://admin:admin@ds059306.mlab.com:59306/logsportbookapi')

// Testing schemas
var User = require('./models/user')

router.route('/users')

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
        res.json({ message: 'User created!' })
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

router.route('/users/:user_id')

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
            res.json({ message: 'deleted !'})
          }
        })
      }
    })
  })

app.use('/api', router)

app.listen(3000, function () {
  console.log('Listening localhost:3000')
})
