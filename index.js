const mongoose = require('mongoose')
const express = require('express')
const app = express()
const DB = 'mongodb+srv://ms6375349671:wLcS9TRwlil9rrLH@cluster0.ys4iioh.mongodb.net/mernStack?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB
//  useNewUrlParse :true,
//  useCreateIndex :true,
//  useUnifiedTopology:true,
//  useFindAndModify:false
).then(()=>{
  console.log('connection successfully')
}).catch((err)=>{
  console.log("show error",err)
})

const middleware = (req,res,next)=>{
  console.log('Hello my mddleware')
  next()
}

app.get("/",middleware,(req,res)=>{
    res.send("api hit successfully")
})
app.listen(3000,()=>{
  console.log("api hit successfully")
})











