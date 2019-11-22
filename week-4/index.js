/*const Person = require('./models/person')
const Meetup = require('./models/meetup')
const PersonService = require('./services/person-service')
const MeetupService = require('./services/meetup-service')

console.log('Hello World!')
console.log('Hello World!')

async function main() {
  const mert = new Person('Mert', 33)
  const armagan = new Person('Armagan', 34)

  const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')
  armagan.attend(wtmb)
  mert.attend(wtmb)
  wtmb.report()

  await PersonService.add(mert)
  await PersonService.add(armagan)

  const people = await PersonService.findAll()

  console.log(people[0].name)

  await PersonService.del(1)

  const newPeople = await PersonService.findAll()
  
  console.log(newPeople[0].name)
}

main()
*/

const express = require('express')
const bodyParser = require('body-parser')
const PersonService = require('/Users/zuni4ka/Projects/jscc2019-master/week-4/services/person-service.js')

const app = express()

app.use(bodyParser.json())
app.set('view engine', 'pug')
app.set('')

app.get('/', (request, response) => {
  // response.send('Hello')
  // response.sendFile(__dirname + '/index.html')
  response.render('index')
})

app.get('/person/all', async (request, response) => {
  const people = await PersonService.findAll()
  response.render('person', { people: people })
})

app.get('/person/:id', async (request, response) => {
  const id = request.params.id
  const person = await PersonService.find(id)
  response.send(person)
})

app.post('/person', async (request, response) => {
  const person = await PersonService.add(request.body)
  response.send(person)
})

app.delete('/person/:id', async (request, response) => {
  await PersonService.del(request.params.id)
  response.send('OK!')
} )

app.listen(3000, () => {
  console.log('Server listening')
})
