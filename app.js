const mongoose = require('mongoose')
const User = require('./User')
mongoose.connect("mongodb://localhost:27017/myNewDatabase").then(()=>{ 
    console.log('mongodb Connected successfully')
}).catch((err)=>{
    console.log("mogo err",err)
})
// const user = new User({name : 'Kayle',age : 26})
// user.save().then(()=>console.log("User Saved successfully"))
run()
async function run(){
    // const user = new User({name : 'Kayle',age : 26})  both method are same
    // User.findById().save()
    try{
    // const user = await User.create(
    //     {name : "kale",
    //     age:27,
    //     email : "Test@gmail.com",
    //     hobbies : ["Weight Lifting ","Bowling"],
    //     address : {
    //         street : "123 Main St",
    //     }
    // }
    // )
    // // await user.save()  
    // //change property
    // //   user.name = 'Sally'
    // user.createAt = 5
    //   await user.save()
    //  console.log(user)
    //  console.log("seend saved ",user)
//   const user =  await  User.findById("6675bde94e9a934ebc8637de")
//const user = await User.find({name : 'kale'})     //issai id search nahi hogi
 //const user = await User.find({name : 's'}) //output - [] Array
//  const user = await User.exists({name : "kal"}) //id else null
// const user = await User.deleteOne({name : "kale"})
//const user = await User.where()  //all find Method who is mongodb and have deleted
// const user = await User.where("name").equals("kale")
//  const user = await User.where("age").gt("1").limit(2).select("age")
 //user[0].bestFriend = "6675bde94e9a934ebc8637de"     //hum isko esai ref sai change kar skatai h
//  user[0].save() 
// const user = await User.where('age').gt(12).where("name").equals("kale").populate("bestFriend").limit(1) 
// const user = await User.findOne({name : "Kayle"})
// const user = await User.findByName("Kayle")
// const user = await User.find().byName("Kayle")
// const user = await User.where().find('Kayle')  //show error
const user = await User.findOne({name:'Sally'})   //ager document mai email h to likhnai ki jarurath nahi padaigi
  console.log("user find =>",user)
  await  user.save()  hamai other document banakai save karna hoga because yai isami proper require field nahi h
  console.log("saved User",user)
  console.log("namedEmail is",user.namedEmail)  //output- mohit<mohit@gmail.com>
//   user.sayHi()      
}catch(err){
    console.log("show schema err ",err)
}  
}


