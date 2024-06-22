// Instance methods in Mongoose are methods that you define on the schema and can be called on 
// instances of the model. 
// They are useful for encapsulating logic that applies to individual documents.

const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})

.catch((error)=>{
    console.log("show connected error ",error)
})

//userSchema create
const userSchema = new Schema({
    fristName : String,
    lastName : String,
    email : String,
    age : Number
});
//define a static method to find users by email
userSchema.statics.findByEmail = function(email){
    // return  this.findOne({email:email}); 
    return  this.findOne({email:email}); 
}

userSchema.statics.findAllAboveAge = function(age){
    return this.find({age : {$gt : age}})
}

const User = mongoose.model('User',userSchema); 


async function runExample(){
    await mongoose.connection.dropDatabase();
    const users = [
        {fristName : 'John',lastName : 'Doe',email : 'John@gmail.com',age:25},
        {fristName: "Jane",lastName:"Samith",email :"Jane@gmail.com",age:30},
        {fristName:"Alice",lastName : 'JohnName',email:"alice.johnson@gmail.com"},
        {fristName : 'Bob',lastName : 'Brown',email : 'bob.brown@gmail.com'}
    ];

 await User.insertMany(users)
 
 //call static methods 
 const userByEmail = await User.findByEmail('John@gmail.com');
 console.log('User found by email :',userByEmail)

 const userAboveAge = await User.findAllAboveAge(20)
 console.log('User above age 20 :',userAboveAge);

//  disconnect from the database
 mongoose.disconnect()
}

runExample().catch(err=>console.log(err));














