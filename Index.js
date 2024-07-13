const express = require('express')
const app = express()

app.set("view engine","ejs")

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extends : true}))

//global variable 
app.use((req,res,next)=>{
    res.locals.isAuthenticated = isAuthenticated
    next() 
})

const blogposts = [
    {id : "1",title : "Learning Javascript ",comment : []},
    {id : "2",title : "Using MErn Stack ",comment : []},
]

let isAuthenticated = false;
app.get("/",(req,res)=>{
    res.render('./page/home',{blogposts,isAuthenticated})
})

app.get('/pages/:id',(req,res)=>{
    const postId = req.params.id 
    
    const post = blogposts.find((item)=>item.id === postId ) 
    console.log(post)
     if(post){
        res.render('./page/post'+postId,{post,isAuthenticated})  // render the post page with the post data
     }
   else{
        res.status(404).render("./page/404") 
    }
})

app.post('/comment/:id',(req,res)=>{
   const postid = req.params.id;
   const post = blogposts.find((item)=>item.id == postid );
   if(! isAuthenticated){
    return res.redirect('/login')                   
   }
   if(post){
    const comment = req.body.comment  
    if(comment){   
        post.comment.push(comment)
        // console.log("show comment  ",post)
        res.redirect('/pages/'+postid)
           // redirect to the post page after adding comment
     }else{
        return res.redirect('page/404')
    }
   }
   
})


app.get("/login",(req,res)=>{
    res.render("./page/login"); 
})

app.post("/login",(req,res)=>{
    const {username ,password} = req.body;
    console.log(req.body)
    if(username === "john" && password === '123456'){
        isAuthenticated = true;
        res.redirect("/")
    }else{
        res.render("./page/failure")
    }
})

app.get('/logout',(req,res)=>{
    isAuthenticated = false
    res.redirect('/')
})


app.listen(5000,()=>{
    console.log("api listen on port "+5000)
})
