const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    names: {
        type:String
    },
    email: {
        type:String
    },
    subject: {
        type:String
    },
    message: {
        type:String
    }
})

const Contact = mongoose.model('Contact', clientSchema)

module.exports = Contact