// const express = require('express')
// const app = express()
// app.param('id',(req,resp,next,name)=>{
//   console.log(`param name is ${name}`)
//   if(typeof name === 'string'){
//     req.id = name
//     next()
//   }else{
//     resp.status(400).send("invalid router param")
//   }
// })

// app.get("/name/:id",(req,resp)=>{
//  resp.send(`hello response how you ${req.id}`)
// })
// app.listen(3000,()=>{
//   console.log("api hit successfully")
// })

const express = require('express')
const app = express()
app.get("/name/:id",(req,resp)=>{
   resp.send(`hello how you ${req.params.id}`)
})
app.listen(3000,()=>{
  console.log("api hit successfully")
})






