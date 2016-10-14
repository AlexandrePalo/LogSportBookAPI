var express = require('express')
var app = express()

// Route files
require('./routes/users')(app)
require('./routes/muscularGroups')(app)
require('./routes/exercices')(app)

// Base routes
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Listening localhost:3000')
})
