module.exports = function(app){

    app.get('/users', function(req, res) {
      res.send('List of users')
    })
    app.get('/users/:id', function(req, res) {
      res.send('User ' + req.params['id'])
    })


}
