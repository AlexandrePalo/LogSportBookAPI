var muscularGroups = require('../data/muscularGroups')

module.exports = function(app){

    app.get('/musculargroups', function(req, res) {
      res.json(muscularGroups)
    })
    app.get('/musculargroups/:id', function(req, res) {
      res.json(muscularGroups[req.params['id']])
    })


}
