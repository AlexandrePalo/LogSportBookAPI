var exercices = require('../data/exercices')

module.exports = function(app){

    app.get('/exercices', function(req, res) {
      res.json(exercices)
    })
    app.get('/exercices/:id', function(req, res) {
      res.json(exercices[req.params['id']])
    })

}
