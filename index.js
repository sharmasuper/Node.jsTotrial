// Certainly! The res.redirect() method in Express.js is used to redirect the client to a
//  different URL. This method can take two arguments: the optional HTTP status code and the URL to redirect
//  to. If the status code is not provided, it defaults to 302 Found.

const express = require('express')
const app = express()
app.route("/hello").get((req,resp)=>{
    resp.redirect('http://google.com')
    //it is not allow to use resp.send() method when we use resp.redirect method
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})



