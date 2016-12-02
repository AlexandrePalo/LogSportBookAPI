var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MeasureSchema = new Schema ({
  value: Number,
  unit: String,
  date: Date,
  _indicator: { type: mongoose.Schema.Types.ObjectId, ref: 'Indicator'},
  _user: String
})

module.exports = mongoose.model('Measure', MeasureSchema)
