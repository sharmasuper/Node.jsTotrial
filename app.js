//example - 1
// const mongoose = require('mongoose')
// const {Schema} = mongoose

// mongoose.connect('mongodb://localhost:27017/test').then(()=>{
//     console.log("mongodb connected successfully")
// })
// .catch((err)=>{
//     console.log("show mongon connected error ",err)
// })

// const userSchema = new Schema({
//     firstName : String,
//     lastName : String,
//     email : String,
//     age : Number
// })

// //instance method
// userSchema.methods.getFullName = function(){
//     return `${this.firstName} and ${this.lastName}`;
// }

// userSchema.methods.canVote = function (){
//     return this.age >= 18
// }

// const User = mongoose.model('User',userSchema);

// async function runExample(){
//     await mongoose.connection.dropDatabase()
//     try{
//     const user = new User({
//         firstName:"mohit",
//         lastName : "Doe",
//         email : 'john@gmail.com',
//         // age : 2
//         age : 25
//     })
//   const seendata =  await user.save();
//   console.log(seendata)
//   //call instance methods
//   console.log('Full Name : ',user.getFullName())
//   console.log('can vote :',user.canVote()) ;

//     }catch(error){
//         console.log("show docs create error",error)
//     }
// }
// runExample()


//example -2 

const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
}).catch((error)=>{
    console.log("mongoose connected error ",error)
})


const userSchema = new Schema({
    fristName : String,
    lastName : String,
    email : String,
    age : Number
})

//Define an Instance method
userSchema.methods.getFullName = function (){
   return `${this.fristName} and ${this.lastName}` 
}

userSchema.methods.canVote = function (){
    return this.age >= 18
}

const User = mongoose.model('User',userSchema);

async function runExample (){
    await mongoose.connection.dropDatabase()
    try{
        const user = new User({
            fristName : "mohit",
            lastName : "Doe",
            email : 'john@gmail.com',
            age : 25
        })
        const seendata = await user.save();
        console.log(seendata)
        //call instance methods
        console.log('Full Name : ',user.getFullName())
        console.log('can vote :',user.canVote()) ;
//second user add ==>
        const youngerUser =new User({
            fristName : 'Jane',
            lastName : 'Smith',
            email : 'jane@gmail.com',
            age : 16
        })
        const secondSeenDate = await youngerUser.save();
        console.log(secondSeenDate)  
        console.log('Full Name :',youngerUser.getFullName())
        console.log('Can Vote :',youngerUser.canVote())
        mongoose.disconnect()
    }catch(error){
        console.log("show docs create error",error)
    } 
}
runExample().catch((error)=>{
    console.log("Show error second",error)
})













