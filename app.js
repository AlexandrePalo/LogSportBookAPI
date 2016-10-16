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

  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {

      var user = new User()
      user.first_name = req.body.first_name
      user.last_name = req.body.last_name
      user.email = req.body.email
      user.password = req.body.password

      user.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'User created!' })
      })

  })

app.use('/api', router)

app.listen(3000, function () {
  console.log('Listening localhost:3000')
})
