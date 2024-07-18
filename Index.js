const mongoose = require('mongoose')
const env = require('dotenv')
const express = require('express')
const { User } = require('./UserModel/model')
const app = express()
env.config()

mongoose.connect(process.env.Str)
.then(()=>{ 
    app.listen(process.env.port,()=>{
        console.log("api connected successfully  "+process.env.port )
    })
})
.catch((error)=>{
    console.log("show mongoose error ",error)
})

app.use(express.json())
app.use(express.static('public')) 
app.set('view engine','ejs') 
 
const paginationFunctionality = (StaticData) =>{
    return async (req,res,next) =>{
        const page = parseInt(req.query.page,10) 
        const limit = parseInt(req.query.limit,10)
        const results = {} 
       
        const totalDocslength = await StaticData.countDocuments()
        const totalPages =  Math.ceil( totalDocslength/limit) 
        results.totalPages = totalPages  
         results.currentPage = page 
        const startIndex = (page-1)*limit
        const endIndex = page*limit
        
        if(startIndex > 0 ){
            results.prevPage = page-1
        }
        if(endIndex < await StaticData.countDocuments() ){
         results.nextPage = page+1
        }
     
        const paginatedData = await StaticData.find().limit(limit).skip(startIndex)
        results.paginatedData = paginatedData
        res.Variableassign = results
        next()
    }
   
}


app.get("/Users",paginationFunctionality(User),(req,res)=>{
          res.json(res.Variableassign)
})

app.get("/getPaginationRender",(req,res)=>{
   res.render('Index')
})










