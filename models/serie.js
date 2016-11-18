var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SerieSchema = new Schema ({
  _exerciseBlock: { type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseBlock'},
  index: Number,
  repetitions: Number,
  load: Number
})

module.exports = mongoose.model('Serie', SerieSchema)
