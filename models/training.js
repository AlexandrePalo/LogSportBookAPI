var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TrainingSchema = new Schema ({
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  place: String,
  date_begin: Date,
  date_end: Date
})

module.exports = mongoose.model('Training', TrainingSchema)
