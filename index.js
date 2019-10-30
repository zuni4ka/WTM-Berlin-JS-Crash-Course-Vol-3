const Person = require('./person')
const Meetup = require('./meetup')
const Chalk = require('chalk')
const Database = require('./database')

const maria = new Person('Maria', 34)
const bogdan = new Person('Bogdan', 33)

printName = person => console.log(person.name)

maria.greet(bogdan)

  const wtmb = new Meetup('WTM Berlin')
  maria.attend(wtmb)
  bogdan.attend(wtmb)

  wtmb.printAttendeeNames()

  Database.save('meetup.json', wtmb)
  Database.save('person.json', wtmb)

  const loadedFile = Database.load('meetup.json')

  //console.log(loadedFile)
  console.log(loadedFile.name)
  //console.log(Chalk.blue.bgRed.bold(wtmb.name))
