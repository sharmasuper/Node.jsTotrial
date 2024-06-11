// Handling errors effectively in an Express.js application involves using error-handling middleware
//  to catch errors and respond appropriately. Below is an example that demonstrates how to handle errors, 
// catch exceptions, and use custom error-handling middleware in Express.js.


const express = require('express')
const app = express()
app.use(express.json())

app.get('/error',(req,res,next)=>{
    const error = new Error('This is a sample error')
    error.status = 400
    next(error)
})
app.get('/',(req,res)=>{
    res.send('Hello ,world')
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(err.status || 500).json({
        status:'error',
        message:err.message || 'Internal server Error'
    })
})

app.listen(3000,()=>{
    console.log("spi hit successfully")
})







