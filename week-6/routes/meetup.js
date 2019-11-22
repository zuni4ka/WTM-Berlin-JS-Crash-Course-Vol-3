const express = require('express')
const router = express.Router()

const MeetupService = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/services/meetup-service.js')

router.get('/all', async (req, res) => {
  const meetups = await MeetupService.findAll()
  res.render('list', { items: meetups })
})

router.get('/:id', async (req, res) => {
  const meetup = await MeetupService.find(req.params.id)
  res.render('data', { data: meetup })
})

router.post('/', async (req, res) => {
  const meetup = await MeetupService.add(req.body)
  res.send(meetup)
})

router.delete('/:id', async (req, res) => {
  const meetup = await MeetupService.del(req.params.id)
  res.send(meetup)
})

module.exports = router
