// In Mongoose, the bufferCommands option allows you to enable or 
// disable the buffering of commands. When buffering is enabled,
//  Mongoose will queue up operations if the connection to the 
//  database is not established, and will execute them once the 
//  connection is available. By default, bufferCommands is set to true.
const mongoose = require('mongoose')
const {Schema} = mongoose

const url = 'mongodb://localhost:27017/test';

mongoose.connect(url)
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show mongoose connected error ",error)
})

const userSchema = new Schema({
    name : String,
    email : String
});

// userSchema.set('bufferCommands',false)
const User = mongoose.model('users',userSchema)

const run = async() =>{
    try{
        await User.deleteMany({})
  const newUser = new User({name : "John Doe",email : 'john@gmail.com'})
  console.log(newUser)
   newUser.save() 
    // newUser.save((err)=>{
//     if(err){
//          console.log("saved error ",err)
//     }else{
//         console.log('User saved successfully')
//     }
//   }) 
}catch(error){
    console.log("shoe errr",error)
}
}
run()
