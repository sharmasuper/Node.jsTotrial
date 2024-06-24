const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("mogooose connected error ",error)
})

const userSchema = new Schema({
    firstName : {type : String,required : true},
    lastname : {type : String,required : true},
    email : {type : String,required : true,unique : true},
    dateOfBirth : {type :Date,required : true}
})
// userSchema.set({'autoIndex':true})
// userSchema.index({email : 1});
// userSchema.index({lastname:1,firstName:1});
const User = mongoose.model('User',userSchema) 
User.on('index',error =>{
    if(error){
        console.log('Indexed could not be created : ',error)
    }else{
        console.log('Indexed created successfully')
    }
})


//second print seen

async function run() {
    try {  
      // Ensure the database connection is open
      await mongoose.connection;
  
      // Clear the collection for a fresh start
      await User.deleteMany({});
  
      // Create a user
      const user = await User.create({
        firstName: 'John',
        lastname: 'Doe',
        email: 'john@example.com',
        dateOfBirth: new Date('1990-06-15')
      });
  
      // Manually ensure indexes are created
    //   await User.syncIndexes();
  
      // Retrieve and log the user
      const foundUser = await User.findById(user._id);
      console.log('User:', foundUser.toJSON());
  
    } catch (error) {
      console.error(error);
    } finally {
      // Close the connection
      mongoose.connection.close();
    }
  }
  
run();
  





















