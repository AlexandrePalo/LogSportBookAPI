var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ExerciseBlockSchema = new Schema ({
  _training: { type: mongoose.Schema.Types.ObjectId, ref: 'Training'},
  _exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'},
  index: Number,
  date_begin: Date,
  date_end: Date
})

module.exports = mongoose.model('ExerciseBlock', ExerciseBlockSchema)
