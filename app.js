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
////////////////////////////most theory //////////////////////////////////
// A pipeline is used when creating a MongoDB view to define how the data from the source collection should be transformed or filtered before being presented in the view. This allows you to project only specific fields, rename fields, aggregate data, and apply other transformations.

// In this case, the pipeline is used to redact the name and email fields by showing only the first three characters followed by "...". This is useful for hiding sensitive information.

// Here’s the complete code including the creation of a pipeline for redacting sensitive information:



const userSchema = new Schema({
  name : String,
  email : String,
   roles: [String]
},{autoCreate:false,autoIndex:false})


const User = mongoose.model('Ram',userSchema)
const RedactedUser = mongoose.model('RedactedUser',userSchema)


const createView = async() =>{
  try{
    //connect to database
     // Create a pipeline for redacting sensitive information
      await mongoose.connection 
      await User.createCollection()
    await RedactedUser.createCollection({
      viewOn : 'rams',//set viewOn the colleciton name , **not** model
      pipeline : [
        { 
          $set : {
            name : {$concat : [{$substr : ['$name',0,3]},'...']},
            email : {$concat : [{$substr : ['$email',0,3]},'...']},
           
          }
        }
      ]
    })

 const newData =  await User.create(
  [{name : "LadduammohitTannu gandhi",email : 'mohitgandhi2@gmail.com',roles : ["mohhyuc","fattu2"]
  },
  {name :"LadduohitTannu",email : "mohit@gmail.com",roles : ["soniya2",'soniya1']}
])
  console.log(newData)
  //fetch and log redacted user data with admin data

  // const redactedUsers = await RedactedUser.find()

const redactedUsers = await RedactedUser.find({roles : "soniya2"})
  console.log("find Users",redactedUsers)





mongoose.connection.close()
  }catch(error){
    console.log("show error ",error)
  }
}

createView()










