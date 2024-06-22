const { Blog } = require("../modal/SchemaModel");

async function createBlogPost(title,author,body){
    try{
        const newBlog = new Blog({title,author,body});
        await newBlog.save() 
        console.log('Blog post created successfully: ',newBlog);
    }catch(err){
        console.error('Error creating blog post:', err);
    }
} 

async function getAllBlogPosts(){
    try{
       const blogs = await Blog.find();
       console.log("All Blog posts :",blogs)
    }catch(error){
        console.log("Blog error show ",error)
    }
}

async function getBlogPostById(id){
    try{
        const blog  = await Blog.findById(id);
        console.log("Blog posts :",blog)
        
    }catch(err){
        console.log("show id error ",err)
    }
}

async function updateBlogPost(id,title,author,body){
    try{
        const updateBlog = await Blog.findByIdAndUpdate(id,{title,author,body},{new : true}) // { new: true } returns the updated document
        console.log("Update blog post :",updateBlog)
    }catch(err){
        console.log('Error updating blog post : ',err)
    }
}

async function deleteBlogPost(id){
    try{
    const deleteBlog = await Blog.findByIdAndDelete(id);
    }catch(error){
        console.log("show error ",error)
    }
}

module.exports = {createBlogPost,getAllBlogPosts,getBlogPostById,updateBlogPost,deleteBlogPost} 




