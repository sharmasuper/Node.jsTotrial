const express = require('express')
const app = express()

app.use((req,resp,next)=>{
  resp.set('Last-Modified',new Date().toUTCString())
  resp.set('ETag','12345')
  next()
})

app.get("/",(req,resp)=>{
  if(req.fresh){
    resp.status(304).end()
  }else{
    resp.status(200).send("This is a fresh response with new content")
  }
})



app.listen(3000,()=>{
  console.log("api hot successsfully")
})

