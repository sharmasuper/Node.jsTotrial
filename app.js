// In Mongoose, collation is used to define the rules for string 
// comparison, such as sorting and searching, in MongoDB queries. 
// It allows you to specify language-specific rules for string 
// comparison, such as case sensitivity and accent sensitivity. 
// Here’s an example of how to use collation in Mongoose:

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
    name : {type : String ,required : true },
    
    email : {type : String },  
},

 
)


const User = mongoose.model('User',userSchema)

const runFun = async() =>{
    try{
            // await User.deleteMany()
    //const find =   await  User.find({name : 'Vasu Sharma3'}).collation({locale:'en',strength:2}).sort({name:1})
      const find =   await  User.find().collation({locale:'en',strength:2}).sort({name:1})
      
    console.log(find)
       
       
    }catch(error){
        console.log("show error ",error)
    }
}
runFun()
