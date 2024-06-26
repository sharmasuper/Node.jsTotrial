// In Mongoose, the versionKey option is used to specify the version key's name in a schema. 
// By default, Mongoose adds a __v property to documents to keep track of the document version for 
// concurrency control. You can change the name of this property using the versionKey option or disable it entirely.

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
{typeKey : customTypeKey,versionKey : 'myVersionKey'}
 //custom version key
)


const User = mongoose.model('User',userSchema)

const runFun = async() =>{
    try{
            // await User.deleteMany()
       newData = new User({name : "Mohit Sharma" ,
        age : 25 , email : 'MohitType1m3@gmail.com'})
       await newData.save() 
       console.log(newData)
    }catch(error){
        console.log("show error ",error)
    }
}
runFun()
