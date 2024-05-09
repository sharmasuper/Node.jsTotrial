const express = require('express')
const path = require('path');
const app = express()



const publicpath = path.join(__dirname,'public')  

// app.use(express.static(publicpath));
app.get('',(req,resp)=>{
  resp.sendFile(`${publicpath}/index.html`)
})

app.get('/home',(req,resp)=>{
  resp.sendFile(`${publicpath}/Home.html`)
})
app.get('/about',(req,resp)=>{
  resp.sendFile(`${publicpath}/about.html`)
})

//but koi bhi route match nahi ho to 404 page kasia banai
//uper valai route mai sai koi bhi route match nahi ho ta kaya karai

app.get('*',(req,resp)=>{
  resp.sendFile(`${publicpath}/PagenotFound.html`)   //koi bhi match nahi hoga to yai about.html page per redirect kar dega
})
 
app.listen(5000,()=>{
  console.log("api hit")
})

















