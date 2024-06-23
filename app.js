// Virtuals in Mongoose are document properties that are not stored in the database but are
//  computed on the fly. They are useful for defining derived properties that you want to include 
// in your documents without actually storing them in the database.

const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("mongoose connect successfully")
})
.catch((error)=>{
    console.log("mongoose connected error ",error)
})

const userSchema = new Schema({
    fristName : {type : String , required : true},
    lastName : {type : String , required : true},
    email : {type : String , required : true,unique:true},
    dateOfBirth : {type : Date , required : true}
});

userSchema.virtual('fullName').get(function(){
    return `${this.fristName} ${this.lastName}` 
})

//virtual for age 

userSchema.virtual('age').get(function(){
    const ageDifMS = Date.now() - this.dateOfBirth.getTime();
    const ageDate = new Date(ageDifMS); //milisconds from epoch

   return Math.abs(ageDate.getUTCFullYear() - 1970);

})

//Ensure virtual fields are serialized 

userSchema.set('toJSON',{virtuals:true});
userSchema.set('toObject',{virtuals:true});

const User = mongoose.model('User',userSchema);

async function run(){
    try{
       //ensoure the database connection is open
       await mongoose.connection
       
       await User.deleteMany()

       const user = await User.create({
        fristName : "John",
        lastName : "Doe",
        email : "john@gmail.com",
        dateOfBirth :new Date('2004-08-25')
       })
       console.log(user.fullName) 

       const foundUser = await User.findById(user._id)
       console.log('User with virtuals :',foundUser.toJSON());


    }catch(error){
        console.log("show run error ",error)
    }finally{
        mongoose.connection.close()
    }
}

run() 






