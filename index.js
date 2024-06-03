
// The express.raw([options]) middleware in Express.js is used to parse incoming request bodies as a Buffer object. 
// This is useful when you need to handle raw binary data, such as images or files, in your Express application.

const express = require('express')
const app = express()
app.use(express.raw({ type: 'application/json' }))
//issai hum buffer kai rup mai data get kartai h
app.post('/rawdata',(req,resp)=>{
    console.log('Raw data recived :',req.body)
    resp.send('Raw data recived successfully'+JSON.stringify(req.body))
})

const port = 3000
app.listen(port,()=>{
    console.log("server is running")
})




