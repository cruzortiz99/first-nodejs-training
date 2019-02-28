var express = require('express')
var path = require('path')
var { dburl } = require('./config')
var mongoose = require('mongoose')
var setupController = require('./src/controllers/setupController')

var app = express()
var port = process.env.PORT || 3000

app.use('/assets', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
mongoose.connect(dburl(), {useNewUrlParser: true})
setupController(app)
app.listen(port)