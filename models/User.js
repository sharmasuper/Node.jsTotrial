
const mongoose = require('mongoose')
const { default: isEmail } = require('validator/lib/isEmail')
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: [true,"Please enter an email"],
        unique : true,
        lowercase : true,
        validate : [isEmail,"Please enter a valid email"]

    },
    password : {
        type : String,
        required :[ true,"Please enter a password"],
        minLength : [6,"Minimun password length is 6 character"],

    }
})
const user = mongoose.model('users',userSchema)
module.exports = user 
