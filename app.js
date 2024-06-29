// To work with change streams in MongoDB using Mongoose, 
// you need to be connected to a MongoDB replica set. Change streams
//  allow you to listen to real-time updates on your collections.
//   Below is an updated example of how you can set up and use change 
//   streams with Mongoose.



// K7g50h7PieDU1TPM
// ms6375349671
const mongoose = require('mongoose')
const {Schema}  = mongoose
const str = "mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.pyjdzrd.mongodb.net/mernStack?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(str).then(()=>{
  console.log("mongoose connected successfully")
})
.catch((error)=>{
  console.log("show error ",error)
})



const userschema = new Schema({
  name : String,
  
})

const Person = mongoose.model('Person',userschema)

const runfunc = async() =>{
  try{
     //create a change stream and listen for changes
     const changeStream = Person.watch()
   
     changeStream.on('change',data =>{
      console.log(new Date(),data)
     });
    //Insert a document to trigger the change stream
    console.log(new Date() , 'Inserting doc');
    const newDocs =  new Person({name :"Axi Rose"});
        console.log(newDocs)
    await  newDocs.save() 
     console.log("person saved successfully") 

  }catch(error){
    console.log("show error ",error)
  }
}

runfunc()
