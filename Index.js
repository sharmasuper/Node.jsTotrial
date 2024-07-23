const express = require('express')
const app = express()
const morgan = require('morgan')
// app.use(morgan('tiny')) first method 

morgan.token("host",(req,res)=>{
    return req.hosname
})
app.use(morgan(`:method :url :host`))

app.get("/",(req,res)=>{
  res.status(200).json({msg:"Welcome to thapa technical again"})
})

app.get("/server",(req,res)=>{
 res.json("api on server")
})
app.listen(3000,()=>{
  console.log("api listen on port "+3000)
})




