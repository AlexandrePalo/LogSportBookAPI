module.exports = function(app){

    app.get('/musculargroups', function(req, res) {
      res.send('List of muscular groups')
    })
    app.get('/musculargroups/:id', function(req, res) {
      res.send('Muscular group ' + req.params['id'])
    })


}
