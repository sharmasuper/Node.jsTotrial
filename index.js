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

app.get('/list',async(req,resp)=>{
    let data = await Product.find()
    resp.send(data)
})

//delete
app.delete('/delete/:_id',async(req,resp)=>{
     console.log(req.params) 
     let data = await Product.deleteOne(req.params) 
     resp.send(data)
})

app.put('/update/:_id',async (req,resp)=>{
    console.log(req.params)
    console.log(req)
    let data = await Product.updateMany(req.params,{$set:req.body})  //UpdateOne
    resp.send(data)    //mai data ko query params sai bhi lai sktah hu or update ka sktaha hu or body sai bhi
})





app.listen(5000)








