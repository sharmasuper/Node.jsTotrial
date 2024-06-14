const mongoose = require('mongoose')
  
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})
//  console.log(userSchema)
const User = mongoose.model('User',userSchema)
module.exports = User





