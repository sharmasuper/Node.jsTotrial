//The _id method is not a specific method in Mongoose. However, 
// you might be referring to handling documents by their _id field, 
// which is a unique identifier for each document in a 
// MongoDB collection.
const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log('mongoose connected successfully')
})
.catch((error)=>{
    console.log("mongoose connected  error ",error)
})

const userSchema = new Schema({
    name: String,
    email: String
  });

const User = mongoose.model('User', userSchema);

async function addUserAndFindById(){
    try{
      //Save the use to the databse 
      const newUser = new User({
        name: 'John Doe',
        email: 'john.doe@example.com'
      });
      const savedUser = await newUser.save();
      console.log('Saved User:', savedUser);

      const userId = savedUser._id;
      const foundUser = await User.findById(userId);
      console.log('Found User by _id:', foundUser);
  
      // Close the database connection
      await mongoose.connection.close();

    }catch(error){
        console.log("show error ",error)
    }
}

addUserAndFindById()














