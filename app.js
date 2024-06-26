// /The validateBeforeSave option in Mongoose can be used to 
// disable automatic validation before saving a document. By 
// default, Mongoose validates documents before saving them to the 
// database. However, you can change this behavior by setting 
// validateBeforeSave to false.


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
            // await User.deleteMany()
       newData = new User({name : "Mohit Sharma" ,age : 25 , email : 'MohitType1@gmail.com'})
       await newData.save({ validateBeforeSave: true }) 
       console.log(newData)
    }catch(error){
        console.log("show error ",error)
    }
}
runFun()






