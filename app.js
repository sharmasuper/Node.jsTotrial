// Indexes in Mongoose (and MongoDB) are used to improve the efficiency of query operations
//  by allowing the database to find and sort records faster.
//  You can create indexes on fields to optimize queries and ensure unique constraints.
// Here is an example demonstrating how to define indexes in Mongoose, including a unique index and a compound index.

const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((err)=>{
    console.log("mongoose error ",err)
})

const userSchema = new Schema({
    firstName : {type : String,required : true },
    lastName : {type : String,required : true},
    email : {type : String ,required : true,unique : true},
    age : {type: Number , index : true} //single field index on age

})

//Compound index on firstName and LastName 
userSchema.index({firstName : 1,LastName : 1})
const User = mongoose.model('User',userSchema);

async function run (){
    try{
        await User.deleteMany({});
        await User.create([
            { firstName: 'John', lastName: 'Doe', email: 'john@example.com', age: 25 },
            { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', age: 28 },
            { firstName: 'Jim', lastName: 'Beam', email: 'jim@example.com', age: 35 }
          ]); 
        
       const userByEmail = await User.findOne({email : 'john@example.com'})
       console.log('user found by email :',userByEmail) ;
       
       const userByAge = await User.find({age : {$gte : 30}});
        console.log('User found by email :',userByAge)

      const userByName = await User.findOne({firstName : 'Jane',lastName :'Doe'})
      console.log('User found by first and last name : ',userByName)

    }catch(error){
        console.log("Show error ",error)
    }
}

run()



