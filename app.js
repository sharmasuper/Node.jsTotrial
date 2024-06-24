const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongose connected successfully")
})
.catch((error)=>{
    console.log("show connection error ",error)
})

const userSchema = new Schema({
    name : String,
    email : String
})
//option
userSchema.set({autoCreate:true})
const User = mongoose.model('User',userSchema,{ autoCreate: true });

const runfun = async() =>{
    try{
    //    await User.deleteMany({})
   const newUser = new User({
    name : "mohit sharma",
    email : "Mohit@gmail.com"
   })
   console.log(newUser)
   await newUser.save()
//   await  newUser.save((err)=>{
//     if(err){
//       return "saved error"+err
//     }else{
//         return console.log("saved successfully")
//     }
//   })
}catch(error){
    console.log("show error runfun ",error)
}
}
runfun()

