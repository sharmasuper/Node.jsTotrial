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


const userSchema = new Schema({
  phone : {
    type : String,
    validate : {
      validator : function (v){
        if(v[0]==='5'){
          return v
        }else{
          throw new Error("please write correct field")
        }
      }
    }
  }
})
const User = mongoose.model('Person',userSchema)
const runfunction = async() =>{
  try{
    const validateData = await  User.create({phone : '5344'})
   console.log(validateData)

  }catch(error){
    console.log("show error ",error)
  }
   
}

runfunction()
