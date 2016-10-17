var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ExerciseBlockSchema = new Schema ({
  training: { type: mongoose.Schema.Types.ObjectId, ref: 'Training'},
  index: Number,
  date_begin: Date,
  date_end: Date
})

module.exports = mongoose.model('ExerciseBlock', ExerciseBlockSchema)
