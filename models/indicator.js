var mongoose = require('mongoose')
var Schema = mongoose.Schema

var IndicatorSchema = new Schema ({
  name: String,
  description: String,
  frequency_update: String, // Iso8601 duration string, ie P1Y2M3DT4H5M6S
})

module.exports = mongoose.model('Indicator', IndicatorSchema)
