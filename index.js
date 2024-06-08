// The app.disable(name) method in Express.js is used to disable a configuration setting identified by name. 
// This method is the counterpart to app.enable(name), which enables a configuration setting.
// Here's an example demonstrating how to use app.disable(name)


const express = require('express')
const app = express()
app.enable('x-powered-by');

app.use((req,res,next)=>{
    const xPoweredByEnabled = app.get('x-powered-by')
    console.log(`'x-powered-by' enabled : ${xPoweredByEnabled}`);
    next()
})
// app.disable('x-powered-by')

app.get('/',(req,resp)=>{
    resp.send('Hello world')
})
const port = 3000;

app.listen(3000,()=>{
    console.log(`server is running on port ${port}`)
})

