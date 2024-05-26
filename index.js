const express = require('express')
const app = express()

app.route("/").get((req,resp)=>{
    data = {
        name:"mohit",
        status:"success",
        combine :{
            name:"hello world",
            today:new Date(),
            ram :["ramm","hello","hy"]
        }
    }
    resp.links({
        frist : "http://localhost:3000/name=hello",
        second : "http://localhost:3000/name=sunita",
        last : "http://localhost:3000/?name=mohit"
    })
    resp.send(data)
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})