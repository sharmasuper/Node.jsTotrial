//K7g50h7PieDU1TPM
const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/MERNFirst?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("mongoose connected successfully")
})
.catch((error)=>{
  console.log("show error ",error) 
})
// Certainly! The pre method in Mongoose is a middleware that allows you to run some function before a particular operation (like save, validate, remove, etc.) is executed. In this case, 
// you want to execute a function before a child document is saved.


const childSchema = new Schema({
  name : {
    type : String,
    required : true
  }
})
//only have pre method like - pre('validate') or pre('save)
childSchema.pre('save',function(next){
  if(this.name === 'invalid'){
    return next(new Error("#sadpanda"))
  }
  next()
 });
 const parentSchema = new Schema({
  children : [childSchema]
 })
 const Parent = mongoose.model('Parent',parentSchema);
const runfunction = async() =>{
 try{
     
     const parent = await  Parent.create({
      // children : [{name : 'helllo'}]  //no Error
      children : [{name : "invalid"}]  // show error

     })
     console.log(parent)
     

    
 }catch(error){
  console.log("show error ",error)
 }finally{
  mongoose.connection.close()
 }
}

runfunction()








