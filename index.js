// const express = require('express')
// const app = express()

// app.get("/set-cookie",(req,resp)=>{
//   resp.cookie('name','value',{
//     maxAge :60*60*24*1000,
//     httpOnly:true,
//     secure :true
//   })
  
//   resp.send("hello home route")
// })


// app.listen(3000,()=>{
//   console.log("api hit successfully")
// })

const express = require("express")
const app = express()
app.get("/cookie-set",(req,resp)=>{
  resp.cookie('name','mohit',{
    maxAge :2000,
    httpOnly : true,
    secure : true
  })
  resp.send("cookie is set successfully")
})

app.get("/clear-cookie",(req,resp)=>{
  resp.clearCookie('name',{
    httpOnly:true,
    secure :true
  })
  resp.send("cookie clear seccessfully")
})

app.listen(3000,()=>{
  console.log("api send successfully")
})

