// The excludeIndexes option in Mongoose is used to prevent Mongoose
//  from automatically building indexes defined in the schema. 
//  This can be useful in situations where you want to manage indexes
//   manually or when working with large collections where building 
//   indexes automatically can cause performance issues.

const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("mongoose error ",error)
})

const userSchema = new mongoose.Schema({
    name : {type : String,index : true},
    email : {type : String,unique : true,index : true}
},{excludeIndexes:true})

const User = mongoose.model('users',userSchema)

const runFunc = async() =>{
    try{
    const newData = new User({name : "Mohit ",email :"sharma@gmail.com"})
    console.log(newData)
    await newData.save()
    console.log("data saved successfully")
    //check indexes
  const indexes = await User.listIndexes()
    console.log("indexes ",indexes) 


    }catch(error){
      console.log("show error ",error)
    }
}

runFunc()




