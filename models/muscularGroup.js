var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MuscularGroupSchema = new Schema ({
  name: String
})

module.exports = mongoose.model('MuscularGroup', MuscularGroupSchema)
