const express = require('express')
const app = express()

app.route("/location").get((req,resp)=>{
    resp.location('http://google.com')  //when i triger the /location it should be redirecte the http:goole.com website
    resp.status(302).send('Redirecting to a http://example.com')
    // resp.status(201).send('Redirecting to a http://example.com')
    // resp.send('Redirecting to a http://example.com')
    // This is commonly used in conjunction with a 302 Found or 201 Created response to indicate the url
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})





