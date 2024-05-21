const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false})) //these  method we handle post req
app.use(express.json())  //when we send josn data it convert Array data to json format
app.use((req,resp,next)=>{
    console.log(`${req.method} - ${req.url}`)
    next()  //inovke next moddleware function or next function
})

const users = [
    {name:"mohitsharma",email:"mohit@gmail.com"},
    {name:"sunitasharma",email:"sunita@gmail.com"},
    {name:"hellosharma",email:"hello@gmail.com"}
]

const post = [
    {title:"My name is mohit",author:"mohit"},
    {title:"sunita home",author:"sunita"},
    {title:"laddu ji or badham ji",author:"laddu ji bdham"}
]

app.get("/",(req,resp)=>{
    resp.send({
        msg:"hello!",
        user:{ }
    })
})

app.post('/',(req,resp)=>{
   const use = req.body
   users.push(use)
   console.log(users)
    resp.status(200).send('Created user') 
})




app.get("/user",(req,resp)=>{
    resp.status(200).send(users)
})

app.get('/user/:name',(req,resp)=>{
    const {name} = req.params
    const user = users.find((user)=>user.name===name)
   
    if(user) resp.status(200).send(user);
    else resp.status(200).send('Not found');
   
})


app.get("/post",(req,resp)=>{
   
    const {author} = req.query
    console.log("author",author)
    if(author){
        const posts = post.find((post)=>post.author === author)
           
        if(posts) resp.status(200).send(posts);
        else resp.status(404).send("not found page") ;
    }else{
        resp.status(200).send(post)
    }
   
})


function validateAuthToken(req,res,next){
    console.log("inside Validate Auth Token")
   const {authorization} = req.headers;
   if(authorization && authorization === '123'){
    next()
   }else {
    res.status(403).send({msg:"forbidden . Incorrect Credentials"})
   }
}



app.post('/posts',validateAuthToken,(req,resp)=>{
   // console.log(req.headers)
   // console.log(req.body)
   // const {authorization} = req.headers;  //how headers work 
    // console.log(authorization) 

       const posts = req.body 
       console.log(posts)
       post.push(posts) 
       console.log(post) 
       resp.status(201).send(posts) 
        
})




app.listen(3000,()=>{
    console.log("server api is hit on port 3000")
})



