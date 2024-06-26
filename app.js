// n Mongoose, the typeKey option allows you to specify a different 
// key name for defining types in a 
// schema. By default, Mongoose uses type as the key for type 
// definitions, but this can be customized using the typeKey option



const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})
const customTypeKey = 't'
const userSchema = new Schema({
    name : {t : String ,required : true },
    age : {t : Number ,required : true },
    email : {t : String ,required : true,unique : true },  
},{typeKey : customTypeKey})

const User = mongoose.model('User',userSchema)

const runFun = async() =>{
    try{
       newData = new User({name : "Mohit Sharma" ,age : 25 , email : 'MohitType@gmail.com'})
       await newData.save()
       console.log(newData)
    }catch(error){
        console.log("show error ",error)
    }
}
runFun()