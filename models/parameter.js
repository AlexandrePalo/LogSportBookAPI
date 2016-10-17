var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ParameterSchema = new Schema ({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  value: Number,
  date: Date,
  type: String
})

module.exports = mongoose.model('Parameter', ParameterSchema)
