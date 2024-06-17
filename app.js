const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/authRoutes')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
// app.use(express.json())
app.use(express.static('public'))
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
app.get('/',(req,res)=>{
    res.render('home') 
}) 

app.get('/smoothies',(req,res)=>res.render('smoothies'))


app.use(route)


