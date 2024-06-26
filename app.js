// Optimistic concurrency control is a technique used to handle concurrent updates to a document in Mongoose. 
// It ensures that changes to a document are not overwritten by concurrent updates. Mongoose uses the version key (__v by default) for 
// optimistic concurrency control. When optimisticConcurrency is set to true, Mongoose will check the version key to detect if the document has
// been modified between when it was retrieved and when it was saved.

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
    email : {t : String ,required : true},  
},
{typeKey : customTypeKey,versionKey : 'myVersionKey', optimisticConcurrency: true}
 //custom version key
)


const User = mongoose.model('User',userSchema)

const runFun = async() =>{
    try{
            // await User.deleteMany()
       newData = new User({name : "Mohit Sharma" ,
        age : 25 , email : 'MohitType1mB3@gmail.com'})
       await newData.save() 
       console.log(newData)
    }catch(error){
        console.log("show error ",error)
    }
}
runFun()
