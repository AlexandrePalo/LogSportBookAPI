var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SerieSchema = new Schema ({
  exerciseBlock: { type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseBlock'},
  index: Number,
  repetition: Number,
  load: Number
})

module.exports = mongoose.model('Serie', SerieSchema)
