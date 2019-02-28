var Todos = require('../models/todo')
const data = [
  {
    username: 'test',
    todo: 'Learn Node',
    isDone: false,
    hasAttachment: false
  },
  {
    username: 'test2',
    todo: 'Learn Vue',
    isDone: false,
    hasAttachment: false
  },
  {
    username: 'test',
    todo: 'Learn Express',
    isDone: false,
    hasAttachment: false
  }
]
module.exports = function (app) {
  app.get('/api/setup-todos', function (req, res) {
    Todos.create(data).catch(err => console.error(err)).then((results) => {
      res.send(results)
    })
  })
}