// The app.param([name], callback) method in Express.js allows you to define middleware for route parameters. 
// This method is particularly useful when you want to perform preprocessing on route parameters before they 
// are handled by route handlers.
//  Here's an example to illustrate its usage:

const express = require('express')
const app = express()

app.param('name',(req,resp,next,name)=>{
    if(!name){
      return name
    }else{
        console.log("name param get",name)
        req.name = name
        next()
    }
})

app.route('/param/:name').get((req,resp)=>{
    resp.send(`Api hit successfully on prama name ${req.name}`)
})

app.listen(3000,()=>[
    console.log("api hit successfully")
])








