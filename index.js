const express = require('express')
require('./config')
const Product = require('./Product')
const app = express()
app.use(express.json())
app.post("/create",async (req,resp)=>{
    let data = new Product(req.body)
    let result = await data.save()
    console.log(result)                       //these Post api have send only one object not array 
                                                 //test api i thunderClient and Postman
    // console.log(req.body)
    resp.send("done")

})

app.listen(5000)








