// In Express.js, the app.on('mount', callback(parent)) method is an event listener that gets triggered when 
// a sub-application is mounted onto a parent application. This is useful when you want to execute some logic 
// whenever your sub-application is added to a parent app. 
// Here's an example demonstrating how to use it:


const express  = require('express')
const app = express()

const subapp = express()

subapp.get('/',(req,resp)=>{
    resp.send('Hello from sub-application')
})

subapp.on('mount',(parent)=>{
    console.log('Sub-application has been mounted')
    console.log('Parent app :',parent)
})
app.use('/sub',subapp);
app.get('/',(req,resp)=>{
    resp.send('Hello from the main application')
})


const port = 3000
app.listen(3000,()=>{
console.log("server api hi successfully")
})









