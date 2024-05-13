const express = require('express')
const {dbConnect} = require('./mongodb') 
const mongodb = require('mongodb')    //hamai issai import karna hoga
const app = express();

app.use(express.json())  //data json mai enable ho jay
app.get('/',async(req,resp)=>{
    let data = await dbConnect()
    data = await data.find().toArray();
    console.log(data)
    //resp.send({name:"anil"})
      resp.send(data)                //basic api with mongodb
})

app.post('/',async(req,resp)=>{
    console.log(req.body)  //body is a property
   // resp.send({name:"Mohit"})
//    resp.send(req.body)
  let data = await dbConnect()
//    let result = await data.insertMany([req.body])
let result = await data.insertOne(req.body)

   resp.send(result)
})
  
app.put('/:name',async(req,resp)=>{
    // here we have write name and we have access name property only 
    //jab hum params pass kartai h tab likhna jaruri hota
    const data = await dbConnect()
    // const result = await data.updateMany({name:req.body.name},{$set:req.body})
    // const result = await data.updateMany({name:"mohit"},{$set:req.body})
    //hum deleteOne k bhi use kar skai h
    const result = await data.updateMany({name:req.params.name},{$set:req.body}) 
    // resp.send({result:"update"})
    resp.send(result)
})

app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id)
    const data = await dbConnect()
    object_id = new mongodb.ObjectId(req.params.id) //is tarah sai 
    const result = await data.deleteMany({_id:object_id})  //hamai id ko object id bnna hoga
    //mongodb mai object id hoti or _id vali id hoti 
//    resp.send("done")
resp.send(result)
})

app.listen(5000)






