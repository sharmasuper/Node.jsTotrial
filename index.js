const express = require('express')
const app = express()

app.use((req,res,next)=>{
  console.log('Client IP',req.ip)
  next()
})

app.get("/mohit",(req,resp)=>{
  resp.send(`Hello my api Ip address is ${req.ip}`)
})
app.listen(3000,()=>{
  console.log("api hit on port 3000")
})
