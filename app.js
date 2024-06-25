// /In Mongoose, the shardKey option is used to specify the shard key 
// for a collection in a sharded MongoDB cluster. The shard key is a
//  field (or fields) used to distribute the data across the shards.
//   Setting a shard key in Mongoose is done at the schema level.

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show mongoose errr",error)
})

const exampleSchema = new mongoose.Schema({
    name : String,
    category: String,
    details : {
        info: String,
        extra : String
    }
},{shardKey : {category:1}}) //Shard key on the category field


const Example = mongoose.model('Example',exampleSchema)

const runfun = async() =>{
    try{
//   const newDocs = new Example({
//     name : "Example Name",
//     category : "Category A",
//     details : {
//         info : "Some Info",
//         extra : 'Some extra details'
//     }
//   })
//   console.log(newDocs) 
// //saved user
//   newDocs.save() 
//find 
const check = Example.find()
console.log(check)

  // Connect to the MongoDB instance via mongo shell and run:
//whenever we find it 
  // use test 
// sh.enableSharding("test")
// sh.shardCollection("test.examples", { category: 1 })

}catch(error){
    console.log("show error ",error) 
}  
}
runfun()











