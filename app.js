// In Mongoose, the id method is used to retrieve a 
// subdocument by its _id from an array of subdocuments within a 
// document. This method is particularly useful when working with 
// nested documents,
//  such as an array of comments within a blog post
const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log('mongoose connected successfully')
})
.catch((error)=>{
    console.log("mongoose connected  error ",error)
})

const commentSchema = new Schema({
    text : String,
    author : String
});


const PostSchema = new Schema({
    title : String,
    content : String,
    comments : [commentSchema]
})

// Create the Post model
const Post = mongoose.model('Post',PostSchema)

const addPostAndFindComment = async() =>{
try{
   const newPost = new Post({
    title : "My first Post",
    content : 'This is the content of my first post',
    comments : [
        { text: 'Great post!', author: 'Alice' },
        { text: 'Thanks for sharing!', author: 'Bob' }
        //both id create different
    ]
   })
  console.log(newPost)
  await newPost.save()
  console.log("docs saved successfully");
  const commentId = newPost.comments[0]._id;
  console.log("comment id is ",commentId)
  //id method is use  for nested document 
  const comment = newPost.comments.id(commentId);
  console.log('Retrieved Comment:', comment);
  await mongoose.connection.close();
}catch(error){
    console.log("show error ",error)
}
}
addPostAndFindComment()
















