const express = require('express')
require('./config')
const Product = require('./Product')
const app = express()

app.use(express.json())
app.get("/search/:key",async(req,resp)=>{  //but hamai query ek hi parameter pass karna hoga 
    console.log(req.params)               //  such as -  http://localhost:5000/search/Hotorola
    let data = await Product.find(
        {
            "$or":[
                {"category":{$regex:req.params.key}},   //if you search two parameter like as brand 
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
  resp.send(data) 

})

app.listen(5000)