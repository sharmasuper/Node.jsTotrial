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
  name : String
})
childSchema.pre('validate',function (next){
  console.log('child validate 2 call')
  next()
})
//only have pre method like - pre('validate') or pre('save)
// childSchema.pre('save',function(next){
//   if(this.name === 'invalid'){
//     return next(new Error("#sadpanda"))
//   }
//   next()
//  });
 childSchema.pre('save',function(next){
  console.log("3 save detaction child save")
  next()
 })
 
 const parentSchema = new Schema({
  child : childSchema
 })

 parentSchema.pre('validate',function(next){
  console.log("123 parent validate call ")
  next()
 })
 parentSchema.pre('save', function(next) {
  console.log('4 parent save');
  next();
});
const Parent = mongoose.model('Parent',parentSchema)
const runfunction = async() =>{
 try{
     
    const parent =  await Parent.create({
      child : {name : "example"}
    })
    // await parent.validate()
    // console.log("parent validate")
    // await parent.save()
    // console.log("Parent saved")
    
 }catch(error){
  console.log("show error ",error)
 }finally{
  mongoose.connection.close()
 }
}

runfunction()








