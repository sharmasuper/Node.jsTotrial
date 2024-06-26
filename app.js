// Mongoose plugins allow you to encapsulate reusable schema logic.
//  You can define a plugin to handle specific functionality, 
//  such as managing tags on documents. Here’s an example of how to 
//  create a plugin for adding tags to Mongoose documents.

const mongoose = require('mongoose') 
const { pluginTags } = require('./pluginTags')
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


blogPostSchema.plugin(pluginTags)
const BlogPost = mongoose.model('sensorReadings',blogPostSchema)


const runFun = async() =>{
try{
   const post = new BlogPost({
    title : "First Post",
    content : "This is the content of the post",
    author : 'John Doe'
   })
    await  post.save()   
   console.log("post saved ",post)
     //add another tag 
     await post.addTag('Programming');
   console.log("add post ",post)

   //remove a tag
   await post.removeTag('Programming');
   console.log("remove post ",post)

   //get all tags
  const tags = await post.getTags();
  console.log(tags)

}catch(error){
        console.log("show error ",error) 
    }
}
runFun()
