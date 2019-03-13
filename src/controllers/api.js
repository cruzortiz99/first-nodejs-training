var Todos = require('../models/todo')
var express = require('express')
module.exports = function (app) {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/api/todos/:uname', function (req, res) {
    Todos.find({ username: req.params.uname })
      .catch(function (err) { console.error(err) })
      .then(function (response) {
        res.send({
          message: 'Get All success',
          response
        })
      })
  })
  app.get('/api/todo/:id', function (req, res) {
    Todos.findById({ _id: req.params.id })
      .catch(function (err) { console.error(err) })
      .then(function (todo) {
        res.send({
          message: 'Get one success',
          todo
        })
      })
  })
  app.post('/api/todos', function (req, res) {
    if (req.body.id) {
      Todos.findOneAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      })
        .catch(function (err) { console.error(err) })
        .then(function (response) {
          res.send({
            message: 'Update success',
            response
          })
        })
    } else {
      Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      })
        .save()
        .catch(function (err) { console.error(err) })
        .then(function (response) {
          res.send({
            message: 'Create success',
            response
          })
        })
    }
  })
  app.delete('/api/todos', function (req, res) {
    Todos.findByIdAndRemove(req.body.id)
      .catch(function (err) { console.error(err) })
      .then(function (response) {
        res.send({
          message: 'Delete success',
          response
        })
      })
  })


}