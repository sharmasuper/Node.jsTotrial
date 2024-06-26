// In Mongoose, the timestamps option automatically adds createdAt
//  and updatedAt fields to your schema, which track the creation and
//   modification times of the documents. This is particularly useful 
//   for maintaining a record of when documents were created and last 
//   updated.

  


const mongoose = require('mongoose') 
const {Schema} = mongoose   
mongoose.connect('mongodb://localhost:27017/test') 
.then(()=>{ 
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const blogPostSchema = new mongoose.Schema({
    title : String,
    content : String,
    auther : String
},{timestamps:true}) //Adds createAt and upodateAt fields



const BlogPost = mongoose.model('sensorReadings',blogPostSchema)


const runFun = async() =>{
try{
    const post = new BlogPost({
        title: 'Hello Post',
        content: 'This is the content of the first post.',
        auther:"john Post"
      });
   await  post.save()
    console.log(post) 
    const find = await BlogPost.findById(post._id)
    // find.views +=1;
   await  find.save()
    // console.log('Updated views:', find.views);
    console.log('Version (should not increment):', find.__v);
   // Update a different field to see version increment
   find.title = "update title";
  await  find.save()

         console.log('Updated title:', find.title);
          console.log('Version (should increment):', find.__v);
   //esai hum check kar sktai or update kar sktai h
}catch(error){
        console.log("show error ",error) 
    }
}
runFun()
