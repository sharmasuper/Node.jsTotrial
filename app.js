// /The autoIndex option in Mongoose is used to specify whether or 
// not Mongoose should automatically build indexes defined in your 
// schema when your application starts. By default, autoIndex is set 
// to true in development mode and false in production mode. However,
//  you can override this behavior based on your specific requirements.


const mongoose = require('mongoose');
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

//   const schemaOptions = {
//     collation: { locale: 'en', strength: 2 }, // Collation option
//     capped: { size: 1024, max: 100 }, // Capped collection option
//   };


const userSchema = new Schema({
    name : {type : String,required : true},
    age : {type : Number,required:true}
},{autoIndex:true}) // Automatically build indexes for this schema
  

const User = mongoose.model('User',userSchema,"Ms")

const runfun = async() =>{
 try{
    const session = await mongoose.startSession();
    // session.startTransaction();
    // const user = new User({name: 'John Doe', age: 30})
    const user = await User.findOne({username:'john_doe'}).session(session).readConcern('majority');
       await session.commitTransaction()
          session.endSession()
       console.log('User found ',user)   
 }catch(error){
    console.log("show error ",error)
 }
}
runfun()

