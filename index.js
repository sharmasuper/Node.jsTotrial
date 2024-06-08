// Sure! The app.locals object in Express.js is used to store
//  variables that are accessible to all templates and routes within 
//  the application. This is useful for defining global variables that
//   you want to be available in 
// your views.

const express = require('express')
const path = require('path')
const app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.locals.siteTitle = 'My Awesome Site';

app.get('/',(req,res)=>{
    res.render('index',{message:"Welcome to the home page !"})
})


app.get('/about',(req,resp)=>{
    resp.render('about',{message:"Learn more about us."})
})

const port = 3000

app.listen(3000,()=>{
    console.log("api hit successfully")
})







