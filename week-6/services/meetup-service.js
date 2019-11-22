const BaseService = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/services/base-service.js')
const MeetupModel = require('/Users/zuni4ka/Projects/jscc2019-master/week-6/models/meetup.js')

class MeetupService extends BaseService {
    model = MeetupModel
}

module.exports = new MeetupService()
