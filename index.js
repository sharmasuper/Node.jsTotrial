// Overriding the Express API in an Express.js application can be useful when you need to add 
// custom behavior or modify the default behavior of Express.js methods. 
// This technique involves extending or wrapping existing methods with your own functionality.

// Below is an example demonstrating how to override the res.send method in an Express.js application to add 
// a custom header to every response.


const express = require('express')
const app = express()
app.use((req,res,next)=>{
    const orignalSend = res.send
    res.send = function(body){
   res.set('X-Custom-Header','This is a custom header')
   return  orignalSend.call(this, body);
    }
   next()
})

app.get('/',(req,resp)=>{
    resp.send('Hello World !');
})



const port = 3000
app.listen(3000,()=>{
    console.log('server is running on port-3000')
})














