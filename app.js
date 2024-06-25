// The read option in Mongoose allows you to specify the read preference for queries, which can be useful in a replicated 
// MongoDB setup. This option lets you define how the query should be distributed among the replica set members. Common read 
// preferences include primary, 
// primaryPreferred, secondary, secondaryPreferred, and nearest.

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const userschema = new mongoose.Schema({
    name : String,
    details : {
        info : String,
        extra : String
    }
})

const Example = mongoose.model('users',userschema)

const runExample = async() =>{
    try{
    await Example.deleteMany({})
 const newDocs = new Example({
    name : 'Example Name',
    details : {
        info : 'Some info',
        extra : 'Some extra details'
    }
 })

    const result = await newDocs.save() 
         console.log(result) 
       const docs =   Example.find().read('secondaryPreferred')          
       console.log(docs)
    }catch(error){
        console.log("shoe error ",error)
    }
}

runExample()









