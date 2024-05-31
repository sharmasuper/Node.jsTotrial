const express = require('express')
const app = express()

app.use((req,resp,next)=>{
console.log("Hostname",req.hostname)
next()
})

app.get("/",(req,resp)=>{
  if(req.hostname === 'localhost'){
    resp.send("Hello from localhost") 
  }else if(req.hostname === 'api.example.com'){
    resp.send("Hello form api.example.com!")
  }else{
    resp.send("Hello From an unknow domain")
  }
})
const port = 3000
app.listen(3000,()=>{
  console.log(`Server is running on port ${port}`)

})