const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    //console.log("data send by browser ,", req.query)   //result check on terminal - {nam:"anil",sharma:"ram"}
    console.log("data send by browser ,", req.query.sharma)
//    resp.send("welcome ,this is home page") 
  resp.send('welcome,this is home page  '+req.query.sharma)
})

app.get('/about',(req,resp)=>{
    resp.send("welcome,this is about page")
})

app.get("/help",(req,resp)=>{
    resp.send("welcome this is help page")
})
                        //http://localhost:5000/?name=anil&sharma=ram asai get api bnai
app.listen(5000)




