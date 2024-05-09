const express = require('express')
const app = express()

const reqFilter = (req,resp,next) =>{
  // console.log('reqFilter') ;   //ab is step mai server gumptha hi jayga jab tak hum next() method ka use nahi karaigai
  // next()   //ab issai yai home route or user route per perfectly chlaiga
//iska use case

if(!req.query.age){
  resp.send('please provide age')
}
else if(req.query.age<18){
  resp.send("You can not access the page")
}
else
{
  next()
}

}

app.use(reqFilter)    //use method sai hum middleware ko access kartai 
//The app.use() method in Express.js is primarily used to mount middleware
// functions in the application's request processing pipeline. 

app.get('/',(req,resp)=>{
  resp.send("<h1>hello home page</h1>")
})

app.get('/user',(req,resp)=>{
  resp.send("<h1>hello users page</h1>")
})


app.listen(5000,()=>{console.log("sharma")})