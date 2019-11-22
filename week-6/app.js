const express = require('express')
const bodyParser = require('body-parser')

const personRouter = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/routes/person.js')
const meetupRouter = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/routes/meetup.js')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/person', personRouter)
app.use('/meetup', meetupRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
