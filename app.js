// In Mongoose, the minimize option can be used to control whether 
// empty objects are removed from 
// documents before saving them to the database. By default, minimize 
// is set to true, meaning Mongoose will remove empty objects from 
// documents.

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
}) 
.catch((error)=>{
    console.log("show coneccted error ",error)
})

const exampleSchema = new mongoose.Schema({
    name : String,
    details : {
        info : String,
        extra : Object
    }
},{minimize : false})   //by default : true

const Example = mongoose.model('users',exampleSchema)

const runDoc = async() =>{
 try{
   const examples = new Example({
      name : "Mohit Sharama",
      details : {
        info : "inof Name",
        extra : {}
      }
      
   })
   console.log(examples)
   examples.save()
   console.log("data saved successfully")
 }catch(error){
    console.log("shoe error ",error)
 }
}

runDoc()










