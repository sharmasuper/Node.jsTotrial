//The toJSON method in Mongoose is used to customize the JSON representation of documents when they are converted to JSON. This can be particularly useful for hiding sensitive information or transforming data before it is sent to clients.

const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
},
{
    toJSON : {
        virtuals : true , //Include virtuals 
        versionKey : false,
        transform : function (doc ,ret) {
            delete ret._id, //Remove _id
            delete ret.id //delete default Id
            delete ret.password; //Remove password
            return ret;
           
        }
    }
})
//Create a Model
const User = mongoose.model('User',userSchema)

const runfunc = async() =>{
 try{
    const user = new User({
        name : 'John Doe',
        email : 'mohit123@gmail.com',
        password : 'secretpassword'
     }) 
      await  user.save()
       console.log(user)
  
     //find the document and convert into JSON
     const findJsonUser = await User.findOne({email : 'mohit123@gmail.com' })
      console.log("findJson user ",findJsonUser.toJSON())
   


 }catch(error){
    console.log("show error ",error)
 }
} 
runfunc()





