const express = require('express')
const app = express()

// app.use((req,res,next)=>{
//     console.log("subdomain",req.subdomains)
//     next()
// })
app.get('/',(req,resp)=>{
    console.log(req.subdomains)
    resp.send('Hello From the main domain !')
})

app.get('/sub',(req,resp)=>{
    if(req.subdomains.length>0){
        resp.send(`Hello from the subdomain :${req.subdomains.join('.')}`)

    }else{
        resp.send('No subdomain present')
    }
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})











