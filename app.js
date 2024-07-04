//K7g50h7PieDU1TPM
//ms6375349671

const { default: mongoose, Schema } = require("mongoose");

const uri1 = 'mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0'
const uri2 = 'mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/db2?retryWrites=true&w=majority&appName=Cluster0';

const db1 = mongoose.createConnection(uri1)
const db2 = mongoose.createConnection(uri2)


db1.on('connected',()=>{
  console.log("Connected to db1")

})
db1.on('error',()=>{
  console.error("db1 is not connected show error")
})
db2.on('connected',()=>{
  console.log('connected to db2')
})

db2.on('error',()=>{
  console.error("db1 is not connected show error")
})


const conversationSchema = new Schema({numMessage :Number})
const Conversation = db2.model('Conversation',conversationSchema)


const eventSchema = new Schema({
  name : String,
  conversation : {
    type : Schema.Types.ObjectId,
    ref : 'Conversation'
  }
});


const Event = db1.model('Event',eventSchema);

async function createEventWithConversation(){
  try{
    const newConversation = new Conversation({numMessage :0})
    await newConversation.save()
    
    const newEvent = new Event({
          name : "Sample Event",
          conversation : newConversation._id
    });
    // console.log(newEvent)
    await newEvent.save()
    //Create a new Event in db1 with a reference to the doversation 

    // console.log('Event and conversation created successfully')
    // //find population 
    const event = await Event.findById(newEvent._id).populate({ 
      path: 'conversation',
      model: Conversation
    }).exec();
    console.log('Event with populated conversation:', event);
  }catch(error){
    console.error(error)
  }
}

createEventWithConversation()

























