var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ExerciseSchema = new Schema ({
  name: String,
  muscularGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'MuscularGroup'}
})

module.exports = mongoose.model('Exercise', ExerciseSchema)
