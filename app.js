// The toObject method in Mongoose is used to convert a Mongoose 
// document to a plain JavaScript object. This can be useful when you 
// need to work with the document data in a more straightforward manner
//  or when you want to customize the output, such as hiding sensitive
//   information or modifying certain fields before sending the data 
//   to a client.


  const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
},
{
    // toJSON : {
    //     virtuals : true , //Include virtuals 
    //     versionKey : false,
    //     transform : function (doc ,ret) {
    //         delete ret._id, //Remove _id
    //         delete ret.id //delete default Id  //beacause when we delete _id default id - id has come so i delete both id
    //         delete ret.password; //Remove password
    //         return ret;
           
    //     }
    // }
   toObject : {
    virtuals : true, //include virtuals
    versionKey : false,//remove version _c key
    transform : function (doc,ret) {
        delete ret._id;
        delete ret.id;
        delete ret.password; //remove password
        return ret; 
    }
   }

})
//Create a Model
const User = mongoose.model('User',userSchema)

const runFun = async() =>{
try{
    const userDoc = new User({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'secretpassword1234'
    });
    console.log("saved user ",userDoc)
  await  userDoc.save()
  
  const user = await User.findById(userDoc._id) 
  console.log("find user ",user.toObject()) 
mongoose.connection.close()
}catch(error){
    console.log("show error ",error)
}
}


runFun()