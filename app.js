// The collection option in Mongoose allows you to specify the name of the collection that a model should use. 
// By default, Mongoose will use the pluralized and lowercased version of the model name as the collection name. However,
//  you can override this by explicitly setting the collection option.

const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connect successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const userSchema = new Schema({
    name :String,
    email : String
},{
   collection :'my_custom_collection' 
})
//
//const User = new mongoose.model('users',userSchema,"my_custom_collection")
const User = new mongoose.model('users',userSchema)
//ab data users collection ki jagah my_custom_collection mai add hoga 
const runFun = async() =>{
    try{
     const newData = new User({name : "mohitji",email : "mohit@gmail.com"})
     console.log(newData)
     await newData.save()
}catch(error){
        console.log("show error ",error)
    }
}
runFun()





