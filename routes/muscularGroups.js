var express = require('express')
var router = express.Router()

var MuscularGroup = require('../models/muscularGroup')

router.route('/')

  .post(function (req, res) {

    var muscularGroup = new MuscularGroup()
    muscularGroup.name = req.body.name

    // Send the created user is better
    // How to obtain the current id ?
    muscularGroup.save(function(err) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Created!' })
      }
    })

  })

  .get(function (req, res) {
    MuscularGroup.find( function(err, muscularGroups) {
      if (err) {
        res.send(err)
      } else {
        res.json(muscularGroups)
      }
    })
  })

router.route('/:muscularGroup_id')

  .get(function (req, res) {
    MuscularGroup.findById(req.params.muscularGroup_id, function(err, muscularGroup) {
      if (err) {
        res.send(err)
      } else {
        res.json(muscularGroup)
      }
    })
  })

  .put(function (req, res) {
    MuscularGroup.findById(req.params.muscularGroup_id, function(err, muscularGroup) {
      if (err) {
        res.send(err)
      } else {
        muscularGroup.name = req.body.name

        muscularGroup.save(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json(muscularGroup)
          }
        })
      }
    })
  })

  .delete(function (req, res) {
    MuscularGroup.findById(req.params.muscularGroup_id, function(err, muscularGroup) {
      if (err) {
        res.send(err)
      } else {
        muscularGroup.remove(function (err) {
          if (err) {
            res.send(err)
          } else {
            res.json({ message: 'Deleted !'})
          }
        })
      }
    })
  })

module.exports = router
