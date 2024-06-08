
// In Express.js, the app.mountpath property contains the path pattern(s) on which a sub-app was mounted. 
// When you create a sub-application and mount it on a specific path, 
// you can use app.mountpath to retrieve that path

const express = require('express')
const app = express()
const subapp = express()
subapp.use((req,resp,next)=>{
    console.log('subapp Middleware ');
    next()
})
subapp.get('/ms',(req,resp)=>{
     resp.send('Hello from Subapp !')
})
app.use('/sub',subapp)
app.get('/',(req,resp)=>{
    resp.send("Hello from Main App")
})
subapp.use((req,res,next)=>{
    console.log(`Mounted on : ${subapp.mountpath}`)  //sub
    next()
})
const port = 3000;
app.listen(port,()=>{
    console.log('server is running on port 3000')
})
