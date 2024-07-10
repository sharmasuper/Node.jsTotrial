const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParse = require('body-parser')
const cookieParser = require('cookie-parser')
const { router } = require('./routes/authRoutes') 
const { requireAuth, checkUser } = require('./middleware/authmiddleware')


const app = express()
app.use(bodyParse.json())
// app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser()) 
app.set('view engine','ejs')
dotenv.config()
mongoose.connect(process.env.connectedSTr)
.then(()=>{
  console.log("mongodb connected successfully")
  app.listen(process.env.PORT,()=>{
    console.log("application run successfully " + process.env.PORT)
  })

})
.catch((error)=>{
  console.log("mongoose error ",error)
})

app.get("*",checkUser);
app.get('/',(req,res)=>{
  res.render('home')
}) 

app.get("/smoothies",requireAuth,(req,res)=>{
   res.render('smoothies')
})

app.use(router)
// //cookie
app.get('/set-cookies',(req,res)=>{
  //res.setHeader('Set-Cookie','newUser=true')
  res.cookie('newUser',false)
  res.cookie('isEmployee',true,{maxAge:1000*60*60*24})
  res.send('you got the cookies')
})
// app.get('/read-cookies',(req,res)=>{
//   const cookies = req.cookies;
//   console.log(cookies)
//   res.json(cookies)  

// })



