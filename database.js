const fs = require('fs')

const save = function(filename, data) {
    fs.writeFile(filename, JSON.stringify(data))
}

const load = function(filename, callback) {
    fs.readFileSync(filename, 'utf8', (err, file) => {
        if (err) {
            console.log('There is an error!', err)
            callback(err)
            return
        }
        else {
            callback(JSON.parse(file));  
        }
    })
}

module.exports = { save, load }