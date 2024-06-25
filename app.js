// The strict option in Mongoose defines how the schema behaves with 
// fields that are not specified in the schema. By default, strict is 
// set to true, meaning Mongoose will strip out any fields that are not
//  defined in the schema. If strict is set to false, Mongoose will 
//  allow the addition of fields that are not in the schema.


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show mongoose errr",error)
})

const exampleSchema = new mongoose.Schema({
    _id : String,
    name : String,
    category: String,
    details : {
        info: String,
        extra : String
    }
},{strict:true}) // Allow fields not defined in the schema if true


const Example = mongoose.model('Example',exampleSchema)

const runFunc = async() =>{
 try{
  await Example.deleteMany({})
  const example = new Example({
      _id:1,          // id:'1', isisai kam nahi chalaiga _id hi lkhni hogi
      name : "example1",
      category : "category1",
      details : {
          info : "info1",
          extra : "extra1"
      },
  },{
    additionalField : "This field is not in the schema "
  }

)
  await example.save()
 
 const find =  await Example.find({}) 
 console.log(find)
 }catch(error){
    console.log("show error ",error) 
 }
}

runFunc()













