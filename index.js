const express = require('express')
const cookieparser = require('cookie-parser')
const app = express()

app.use(cookieparser())


app.get("/",(req,resp)=>{
    resp.send("hello Cookie")
})

app.get("/set-cookie",(req,resp)=>{
    // resp.setHeader('set-cookie',"foo=bar")
    //resp.setHeader("name of header","key=value")
    resp.cookie('foo','bar',{
        // maxAge:5000,
        // expires:new Date('22 May 2024')
        // httpOnly : true  //it means this cookie could not be accessable in client side  ; this not secure
      //  secure : true // then the cookie only were set only http over connection not over the plane http connection 
    //   domain : 'example.com'
    })
    // resp.cookie('fizz','buzz')
    resp.send("cookie are set")
})

app.get('/get-cookie',(req,resp)=>{
    console.log(req.cookies)
    resp.send(req.cookies)
})

app.get('/del-cookie',(req,resp)=>{

    resp.clearCookie('fizz')
    resp.send("Cookie has been deleted")
    
})


app.listen(3000,()=>{
    console.log("Cookie server on port 3000")
})









