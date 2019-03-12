var express = require('express')
var path = require('path')
var { dburl } = require('./config')
var mongoose = require('mongoose')
var setupController = require('./src/controllers/setupController')
var api = require('./src/controllers/api')

var app = express()
var port = process.env.PORT || 3000

app.use('/assets', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
mongoose.connect(dburl(), { useNewUrlParser: true }).catch(function (err) { console.error(err) })
setupController(app)
api(app)
app.listen(port)