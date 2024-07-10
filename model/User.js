const mongoose = require('mongoose')
const {Schema} = mongoose;
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    email : {
        type : String,
        required :[ true,'Please enter an email'],
        unique : true,
        lowercase : true,
        validate : [isEmail,'Please enter a valid email']
    },
    password : {
        type : String,
        minLength :[ 6,"Minimum password length in 6 character"],
        required :[ true,"Please enter an password"]
    }

})

//Fire a function after doc saved tp db 

// userSchema.post('save',function(doc,next){
// console.log("New user was created & saved ",doc)
// next()
// })
//fire a function before doc saved to db 
userSchema.pre('save',async function(next){
//hashing password
const salt = await bcrypt.genSalt();
this.password = await bcrypt.hash(this.password,salt) 
    next()
})
//static method to login user 
userSchema.statics.login = async function (email,password){
    const user = await this.findOne({email:email});
    
    if(user){
     const auth = await bcrypt.compare(password,user.password) 
     if(auth){
        return user
     }
     throw  Error('incorrect Password')
    }
    throw  Error('incorrect email') 

}
const User = mongoose.model('user',userSchema)
module.exports = User;



