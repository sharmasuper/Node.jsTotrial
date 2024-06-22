const mongoose = require('mongoose')
const { createBlogPost ,getAllBlogPosts,getBlogPostById, updateBlogPost, deleteBlogPost} = require('./operations/MongoOperation')
mongoose.connect("mongodb://localhost:27017/myNewDatabase").then(()=>{
    console.log("mongodb connected successfully")
})
.catch((error)=>{
    console.log("mongodb connected error ",error)
})

// const newBlogPost = {
//     title: "MOHIT title",
//     author: "Mohit author",
//     body: "MOHIT body",
//     comments: [{ body: "mohit", date: new Date() }],
//     date: new Date(),
//     hidden: true,
//     meta: {
//       voters: 5,
//       favs: 4
//     }
//   };

createBlogPost("mohit title","mohit auther","mohit body") 
// getAllBlogPosts() 
getBlogPostById("6676910fc24294acd470ad87")
updateBlogPost("6676910fc24294acd470ad87","priranka title","priyanka author","priyanka body")
deleteBlogPost("6676910fc24294acd470ad87")
