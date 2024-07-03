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

const topicSchema = new Schema({
  title : {
    type : String,
    required : [true,'Title is required'],
    minlength : [5,'Title must be at least 5 characters long'],
    maxlength : [100,'title cannot exceed 100 characters']
  },
  description : {
    type : String,
    required : [true,'Description is required'],
    minlength : [10,"description must be at least 10 character long"]
  },
  createAt : {
    type : Date,
    default : Date.now
  }
})

const Topic = mongoose.model('Topic',topicSchema)

const runfunction = async() =>{
 try{
    const topic = await Topic.create([{
      title : "Mohit",
      description : "This is a topic about Mohit",
      createAt : new Date() 
    },
    {
      title : "second array",
      description : "This is a topic about Mohit",
      createAt : new Date() 
    },
    {
      title : "Third Arrray",
      description : "This is a topic about Mohit",
      createAt : new Date() 
    }
  ])
  // const topic = new Topic(
  //   {title : 'mohit1',description : "This is a topic about mohit"}
  // ) 
   //issai only ek data hi insert kar sktai h or fir save kartai 
   //jabhi create ka use karnai per save ki need nahi hoti h


    console.log("show data ",topic)
 }catch(error){
  console.log("show error ",error)
 }
}

runfunction()








