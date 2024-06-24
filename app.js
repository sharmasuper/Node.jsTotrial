// The discriminatorKey option in Mongoose allows you to create multiple models that
//  inherit from a base schema but have additional fields specific to each model.
//   These models are stored in the same MongoDB collection, and the discriminatorKey field 
// is used to distinguish between the different models.


const mongoose  = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const options = {discriminatorKey : 'Kind'}
const userSchema = new Schema({
    name : String,
    email : String
},options)
const User = mongoose.model('User',userSchema)

const studentSchema = new mongoose.Schema({
    major : String,
    year : Number
});
const teacherSchema = new mongoose.Schema({
    subject : String,
    yearOfExperience : Number
});

//Create discriminators 

const Student = User.discriminator('Student',studentSchema)
const Teacher = User.discriminator('Teacher',teacherSchema)


const runFunc = async() =>{
    try{
    const newStudent = new Student({name : "Alice",email : 'alice@gmail.com'})
    console.log(newStudent)
    await newStudent.save() 
    //second seceha teacher
    const newTeacher = new Teacher({name: 'Bob',email : 'bob@gmail.com'})
       console.log(newTeacher)
    await   newTeacher.save()
     //ek sath dono schema add hogai
    //base user find

    const users = await User.find();
    console.log('All users:', users);

      // Query only students
      const students = await Student.find();
      console.log('All students:', students);
      //Query only teachers
      const teachers = await Teacher.find();
      console.log('All teachers:', teachers);


    }catch(error){
        console.log(error)
    }
}

runFunc()











