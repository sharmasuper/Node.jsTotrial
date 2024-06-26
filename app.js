// In Mongoose, the skipVersioning option allows you to exclude 
// specific paths from versioning. Mongoose's versioning mechanism 
// automatically increments the __v field whenever a document is 
// updated. By using skipVersioning, you can prevent updates to 
// certain fields from incrementing the document's version.

  


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
    title: String,
    content: String,
    views: {
      type: Number,
      default: 0
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }, {
    versionKey: '__v',
    skipVersioning: { views: true }  // Exclude 'views' from versioning
  });



const BlogPost = mongoose.model('sensorReadings',blogPostSchema)


const runFun = async() =>{
try{
    const post = new BlogPost({
        title: 'First Post',
        content: 'This is the content of the first post.'
      });
   await  post.save()
    console.log(post) 
    const find = await BlogPost.findById(post._id)
    find.views +=1;
   await  find.save()
    console.log('Updated views:', find.views);
    console.log('Version (should not increment):', find.__v);
   // Update a different field to see version increment
   find.title = "update title";
  await  find.save()

         console.log('Updated title:', find.title);
          console.log('Version (should increment):', find.__v);

}catch(error){
        console.log("show error ",error) 
    }
}
runFun()
