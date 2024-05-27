const express = require('express')
const app = express()

app.route("/location").get((req,resp)=>{
    resp.location('http://google.com')  //when i triger the /location it should be redirecte the http:goole.com website
    resp.status(302).send('Redirecting to http://example.com')
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})





