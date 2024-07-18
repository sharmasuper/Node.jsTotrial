const mongoose = require('mongoose')
const {Schema} = mongoose  

const bookSchema = new Schema({
    name : {
        type : String
    }
})

const User = mongoose.model('bases',bookSchema)

module.exports = {User}