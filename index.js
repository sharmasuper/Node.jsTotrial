const express = require('express')
const app = express()
const port = 3000
const cookieparser = require('cookie-parser')
app.use(cookieparser())

app.get('/set-secure-cookie',(req,resp)=>{
    resp.cookie('secureCookie','thisisASecureCookieValue',{
        secure : true,
        httpOnly : true,
        maxAge : 1000*60*60
    })
    resp.send('Secure Cookie has been set')
})

app.get('/check-cookie',(req,resp)=>{
    const secureCookie = req.cookies.secureCookie
    if(secureCookie){
        resp.send(`secure cookie value : ${secureCookie}`)
    }else{
        resp.send('NO secure cookie found')
    }
})
app.listen(3000,()=>{
    console.log('Serevr is running on port 3000')
})


