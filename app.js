// Query Helpers in Mongoose allow you to add custom helper methods to your Mongoose models. 
// These helpers are especially useful for reusing commonly used query operations. 
// Here is an example to demonstrate how you can define and use Query Helpers in Mongoose.
//Query Helpers
const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((err)=>{
    console.log('show mongose error ',err)
})

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String
});

userSchema.query.byFirstName = function (firstName){
    return this.where({firstName : new RegExp(firstName,'i')}) ;

}

const User = mongoose.model('User',userSchema) 

//create function 

async function findUsers(){
    try{

        await User.create([
            { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
            { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
            { firstName: 'Johnny', lastName: 'Appleseed', email: 'johnny@example.com' }
          ]);

        // User the query Helper to find users by first name
        const userNamedJohn = await User.find().byFirstName('john');
        console.log("userNamedJohn ",userNamedJohn)   


    }catch(error){
        console.log("Show method error ",error)
    }
}

findUsers()





