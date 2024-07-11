const mongoose = require('mongoose')
const {Schema} = mongoose
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    name : {type : String,
            required : [true,'Please type your name'],
            validate: {
                validator: function(v) {
                    return /^[A-Z][a-z]*\s*/.test(v); // Ensure the first word starts with a capital letter
                },
                message: props => `${props.value} does not start with a capital letter!`
            }
            },
    email : {
        type : String,
        required: [true,"Please fill your Email"],
        unique :[ true, "Please filled unique email"],
        validate : [isEmail,"Please type correct email format"],
        lowercase : true
    },
    password : {
        type : String,
        required : [true,"Please fill your password"],
        minLength : [6,'minimam password length is 6 character '] 
    }        
}) 

userSchema.pre('save',async function(next){
 const salt = await bcrypt.genSalt() 
 this.password = await bcrypt.hash(this.password,salt) 
      next() 
})
userSchema.statics.LoginCheck = async function(email,password){
        const user = await this.findOne({email:email})
        if(user){
                const auth = await bcrypt.compare(password,user.password)
                if(auth){
                    return user 
                }
                    throw Error("Incorrect Password")
                
        }
            throw Error("Incorrect Email")
        
}

const User =  mongoose.model("person",userSchema)
module.exports = {User}
