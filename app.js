// The writeConcern option in Mongoose allows you to specify the level of acknowledgment requested from MongoDB for write operations. This can be particularly important for ensuring data durability and consistency.

// Write concern levels include:

// w: The number of replicas that must acknowledge the write before it is considered successful.
// j: If set to true, the write operation waits for the journal to be written to disk.
// wtimeout: The timeout in milliseconds for write concern acknowledgment.


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show mongoose errr",error)
})


const Schema = new  mongoose.Schema({
    name : String ,
    details : {
        info : String,
        extra : String
    }
}
// {
//    writeConcern : {
//      w : 1,
//      j : true,
//      wtimeout : 1000
//    }

// }
)

const Example = mongoose.model('Example',Schema)

const runFunc = async() =>{
try{
    const newDocs = new Example({
        name : "Eample Name",
        details : {
            info : "Example Info",
            extra : "Example Extra"
        } 
    })
     //show user 
     console.log(newDocs)
     //save user
     await newDocs.save()
     console.log("save successfully")
   

}catch(error){
    console.log("show error ",error)
}
}
runFunc()

