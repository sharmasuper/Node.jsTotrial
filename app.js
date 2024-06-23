// Aliases in Mongoose allow you to define alternate names for fields. This can be particularly useful 
// when you need to interact with different data sources or APIs that use different naming conventions. 
// Aliases let you map external names to your internal schema field names,
//  making your code more flexible and easier to maintain.

const mongoose = require('mongoose')
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("mongoose error ",error)
})

const userSchema = new Schema({
    firstname : {type : String , required : true,alias : 'first_name'},
    lastName : {type : String ,required : true ,alias : "last_name"},
    email : {type : String ,required : true,unique : true},
    dateOfBirth : {type : Date , required : true}
    
});

const User = mongoose.model('User',userSchema)

 async function run(){
    try{
        //ensure connection 
        await mongoose.connection;
        //clear the collection before a fresh start
        await User.deleteMany({})
        
        const user = await User.create({
            first_name : "John",
            last_name : "Doe",
            email : "john.doe",
            dateOfBirth : new Date("1990-01-01")
        })
    //Retrieve and log the user
    // const foundUser = await User.findById(user._id).exec()
    const foundUser = await User.findById(user._id)
    console.log("User : ",foundUser)
     // Access fields using aliases
     console.log('First Name:', foundUser.first_name); // Alias
     console.log('Last Name:', foundUser.last_name);   // Alias
     //output - john Doe
    }catch(error){
        console.log("show run error ",error)
    }finally{
        mongoose.connection.close();
    }
}
run()













