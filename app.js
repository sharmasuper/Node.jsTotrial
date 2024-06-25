// The strictQuery option in Mongoose controls how Mongoose handles 
// fields that are not defined in the schema during query operations. 
// When strictQuery is set to true, Mongoose will strip out any fields 
// in the query that are not defined in the schema. When set to false, 
// it allows querying with fields not defined in the schema.

const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const userSchema = new Schema({
    name : String,
    category : String,
    details : {
        info : String,
        extra : String
    }
})

mongoose.set('strictQuery',false) 
//allow fields not defined in the schema for quries
// by default false h yai matlab iskai true honai per vo field jo schema 
//mai nahi h vo search kartha h yai
const Example = mongoose.model('Example',userSchema)


const runExample = async() =>{
    try{
  const example = new Example({
    name : "example",
    category : "example",
    details : {
        info : "example",
        extra : "example"
    }
   
  })

  await example.save()
  
  console.log(example)
  console.log("user saved successfully")

 //find - query with a field not defined in the schema

 const findUser =  await  Example.find({nonExistentField: 'value'})
console.log(findUser)

}catch(error){
    console.log("shoe error ",error) 
}
}
runExample()







