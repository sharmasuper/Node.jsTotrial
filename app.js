// In Mongoose, collectionOptions allows you to specify options when 
// creating a collection. These options are typically used to set 
// various collection-level configurations such as collation, capped 
// collections, and more.

const mongoose = require('mongoose');
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

  const schemaOptions = {
    collation: { locale: 'en', strength: 2 }, // Collation option
    capped: { size: 1024, max: 100 }, // Capped collection option
  };


const userSchema = new Schema({
    name : {type : String,required : true},
    age : {type : Number,required:true}
},schemaOptions)
  

const User = mongoose.model('User',userSchema,'Ms')

const runfun = async() =>{
 try{
    const user = new User({name: 'John Doe', age: 30})
    await user.save()
    console.log('User saved successfully!') 
    
 }catch(error){
    console.log("show error ",error)
 }
}
runfun()

