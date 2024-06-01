const express = require("express")
const app = express()

app.get('/user/:id',(req,resp)=>{
  const id = req.param('id')
  resp.send(`User Id is - ${id}`)
})

app.get("/search",(req,resp)=>{
  const query = req.param('q')
  //these method we question for url
  resp.send(`search query is - ${query}`)
})

app.listen(3000,()=>{
  console.log("api hit successfully")
})








