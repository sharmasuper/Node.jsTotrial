const express = require('express')
const app = express()
const mongoose = require("mongoose")
const { User } = require('./users')

mongoose.connect("mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongoose connected successsfully")
})
.catch((error)=>{
    console.log("show mongoose error",error)
})
app.get("/posts",paginatedResults(User),(req,res)=>{
     
    res.json(res.locals.paginatedResults)
    
})

// const use = [User]
app.get("/users",paginatedResults(User),(req,res)=>{
  res.json(res.locals.paginatedResults)
})


function paginatedResults(model){
   console.log("show model",model)
    return async (req,res,next)=>{       
        const page = parseInt(req.query.page) 
        const limit = parseInt(req.query.limit) 
        const startIndex = (page -1) * limit 
        const endIndex = page*limit 
    //    const resultUsers = users.slice(startIndex,endIndex)
    //    res.json(resultUsers)
    
      const results = {}
    console.log(model.length)
    console.log(await model.countDocuments())

    //  if(endIndex < await  model.length){
    //     results.next = {
    //         page : page + 1, 
    //         limit : limit 
    //       }
    //  }
     if(endIndex < await model.countDocuments().exec()){
        results.next = {
            page : page + 1,
            limit : limit
          } 
     }


     if(startIndex>0){
        results.previous = {
            page : page -1,
            limit : limit
          }}
      
    //   results.result = await  model.slice(startIndex,endIndex) 
           results.result = await model.find().limit(limit).skip(startIndex).exec()
        //    console.log(await model.find())
    //   console.log("before res ",res)  
    //   res.paginatedResults = results   
      res.locals.paginatedResults = results 
    //   console.log("after response ",res)
      next()
    }
}



app.listen(3000,()=>{
    console.log("api listen successfully 3000")
})

