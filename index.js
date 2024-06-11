// const express = require('express')
// const app = express()

// app.get('/',(req,resp)=>{
//     resp.send('Hello,world')
// })
// app.get('/error',(req,resp)=>{
//     throw new Error('This is a sample error !')
// })

// const port = 3000
// app.listen(3000,()=>{
//     console.log('api hit successfully')
// })

const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,resp)=>{
    resp.send('Hello,world !')
})
app.get('/error',(req,resp)=>{
    throw new Error('This is a sample error') 
})

app.use((err,req,res,next)=>{
    console.error("show error",err.stack);
    res.status(500).json({
        status:'error',
        message:err.message || 'Internnal Srver Error'
    })
})
const port = 3000

app.listen(3000,()=>{
    console.log("api hit successfully")
})


