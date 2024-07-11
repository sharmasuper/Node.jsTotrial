const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv') 

const { Router } = require('./RouterPath/RouteControler')
const cookieParse = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
const app = express()
dotenv.config()
mongoose.connect(process.env.Str)

.then(()=>{ 
    console.log("mongoose connected successfully")
    app.listen(process.env.port,()=>{
        console.log("api on port"+process.env.port)
    })
})
.catch((error)=>{
    console.log("show mongoose error ",error)
})
//middlewares  
app.use(express.static('public'))
app.set('view engine','ejs') 
app.use(express.json())
app.use(cookieParse())
// app.use(bodyParser())

app.get('*',checkUser) 
app.get("/",requireAuth,(req,res)=>{
    res.render('home')
})  
app.get('/viewList',requireAuth,(req,res)=>{
    res.render('ViewList') 
})


app.use(Router)

