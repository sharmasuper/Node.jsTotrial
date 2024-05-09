const express = require('express')
const path = require('path');
const app = express()



const publicpath = path.join(__dirname,'public')  


app.set('view engine','ejs');
//jab bhi hum template engine use karai hmai views folder hi banana chihiyai ya by default hota h


app.get('',(req,resp)=>{

  resp.sendFile(`${publicpath}/index.html`)
})



app.get('/profile',(req,resp)=>{
  const user = {
    name : "anil sidu",
    email : "anil@gmail.com",
    city : "tonk"
   }

 resp.render('profile',{user})
})


app.get('/home',(req,resp)=>{
  resp.sendFile(`${publicpath}/Home.html`)
})
app.get('/about',(req,resp)=>{
  resp.sendFile(`${publicpath}/about.html`)
})



app.get('*',(req,resp)=>{
   
  resp.sendFile(`${publicpath}/PagenotFound.html`)   
})
 
app.listen(5000,()=>{ 
  console.log("api hit")
})

















