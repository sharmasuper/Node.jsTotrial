const express = require('express')
const path = require('path');
const app = express()


// const publicPath = path.join(__dirname,'public')
const publicpath = path.join(__dirname,'public')  //yai ab public folder ki jitni bhi file h unko access kraiga
 //node js root page ko by default index.html samjtha h
  ///but isasai hum style.css or image add nahi kar sktai 
                                   //isko esai access kar sktai h http://localhost:5000/about.html
app.use(express.static(publicpath));

app.listen(5000,()=>{
  console.log("api hit")
})

















