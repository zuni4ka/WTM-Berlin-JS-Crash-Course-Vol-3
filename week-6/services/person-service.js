const BaseService = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/services/base-service.js')
const PersonModel = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/models/person.js')

class PersonService extends BaseService {
    model = PersonModel

    async attendMeetup(person, meetup) {
        person.meetups.push(meetup)
        meetup.attendees.push(person)
        await person.save()
        await meetup.save()
    }
}

module.exports = new PersonService()
