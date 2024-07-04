//K7g50h7PieDU1TPM
const mongoose = require('mongoose')
const { Schema, Types } = mongoose;

mongoose.connect('mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/MERNFirst?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("mongoose connected successfully")
})
.catch((error)=>{
  console.log("show error ",error) 
})

const conversationSchema = new Schema({numMessage : Number});
//issai hum different database bana sktai h
const Conversation = mongoose.model('Conversation', 
  conversationSchema, 'conversations', { db: 'db2' });


const eventSchema = new Schema({
  name : String,
  conversation : {
    type : Types.ObjectId,
    ref :  'Conversation'
  }
})

const Event = mongoose.model('Event', eventSchema, 
  'events', { db: 'db1' });


async function createEventWithConversation(){
  try{
   
   const newConversation = new Conversation({numMessage:0});
   await newConversation.save()

   const newEvent = new Event({
    name : 'Sample Event',
    conversation : newConversation._id
   });
    
   await newEvent.save();
  console.log("Event and Conversation created successfully");

  }catch(error){
    console.log("show error ",error)
  }
}

createEventWithConversation()


