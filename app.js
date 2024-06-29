// Sure! Here is the full code that includes the getter method for the picture field in a Mongoose schema, along with the ability to control whether getters 
// are applied when converting the document to an object.

const mongoose = require('mongoose');
const {Schema} = mongoose
const path = require('path')
const rootpath = path.join(__dirname,'operations')
// const root = 'https://s3.amazonaws.com/mybucket'
console.log(rootpath)
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define a schema

const userSchema = new Schema({
  name : String,
  picture : {
    type : String,
    get : v => `${rootpath}${v}`
  }
})
// Apply the getters to the JSON and Object output by default
userSchema.set('toJSON',{getters: true});
userSchema.set('toObject',{getters : true});


const User =  mongoose.model('User',userSchema)

async function run(){
  try{
  //  const newDoc = new User({
  //   name : "bollywood Actress",
  //   picture : '/katrina.jpg'
  //  })
  //  console.log(newDoc)
  //console.log("show docs",newDoc.toObject({ getters: false }).picture)
  //console.log(doc.toObject().picture)
  //give all link
  ///Katrina.jpg
  //  await newDoc.save()

   const  findUser = await  User.find({name:'bollywood Actress'})
   console.log(findUser)
   console.log(findUser.toJSON())
  // console.log(findUser.toObject({ getters: true }).picture) 
    //yai wrong h cpde 
  }catch(error){
    console.log("show error ",error)
  }
}
run()

