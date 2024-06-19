
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
//fire a function after doc saved to db
//this is mmongoose middleware
userSchema.post('save', function(doc, next) {
    console.log('new user was created & saved ',doc)
  next()
})
//fire a function before doc saved to db
userSchema.pre('save',function(next){
 console.log('user about to be created & saved ',this)
 next()
})

const user = mongoose.model('users',userSchema)
module.exports = user 
