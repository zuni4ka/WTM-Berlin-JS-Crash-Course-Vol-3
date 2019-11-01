const Database = require('./database')
const Meetup = require('./meetup')
const Person = require('./person')
const stuffToDoAfterLoadingDB = Database.load('./meetup.json')

//const maria = new Person('Maria', 34)
//const bogdan = new Person('Bogdan', 33)

  const wtmb = new Meetup.create({name: 'Why?'})
  const jenia = new Person('Jenia', 18)

  jenia.attend(wtmb)
  Database.save('./meetup.js', wtmb)
  wtmb.printAttendeeNames()
  console.log(wtmb.name)
