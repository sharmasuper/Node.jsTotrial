const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/authRoutes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
const app = express()
app.use(bodyParser.json())
// app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.set('view engine','ejs')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,{}).then(()=>{
    console.log("mongodb connect successfully")
    app.listen(process.env.PORT,()=>{
        console.log("application run successfully on port "+process.env.PORT)
    })
}).catch((error)=>{
    console.log("Show connect error "+error)
})
//routes
app.get("*",checkUser);
app.get('/',(req,res)=>{
    res.render('home') 
}) 

app.get('/smoothies',requireAuth,(req,res)=>res.render('smoothies'))
app.get('/set-cookies',(req,res)=>{
   // res.setHeader('Set-Cookie','newUser=true')
   res.cookie('newUser',false)
   res.cookie('isEmployee',true,{maxAge:1000*60*60*24,httpOnly:true});
   res.send('You got the cookies!');

});
app.get('/read-cookies',(req,res)=>{
const cookies = req.cookies;
console.log(cookies);
res.json(cookies)

})

app.use(route)
