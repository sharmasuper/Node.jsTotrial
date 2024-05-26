const express = require('express')
const app = express()

app.route("/").get((req,resp)=>{
    const data = [
        {
            "name" :"mohit",
            number : "6375349671",
            status :["hello","hy","name"]
        }
    ]

   resp.send(data) 
})

app.listen(3000,()=>{
    console.log("api hit successfully")
})