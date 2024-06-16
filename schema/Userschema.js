const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})
const User = mongoose.model('MS',userSchema) 
module.exports = User
   
   

 //exporting the model so that it can be used in other files

