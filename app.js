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

//Define User Schema with autoCreate and autoIndex disabled

//jab hum single data schema add kartai h tab hamai pipeline ki 
//need nahi hoti but jab ek array mai data insert kartai h tab hamai 
//pipeline ki need hoti h 

const userSchema = new Schema({
  name : String,
  email : String,
   roles: [String]
},{autoCreate:false,autoIndex:false})


const User = mongoose.model('Ram',userSchema)
// const RedactedUser = mongoose.model('RedactedUser',userSchema)


const createView = async() =>{
  try{
 

 const newData =  await User.create(
  [{name : "RammohitTannu gandhi",email : 'mohitgandhi2@gmail.com',roles : ["mohhyuc","fattu2"]
  },
  {name :"RammohitTannu",email : "mohit@gmail.com",roles : ["soniya2",'soniya1']}
])
  
  console.log(newData)
  }catch(error){
    console.log("show error ",error)
  }
}

createView()










