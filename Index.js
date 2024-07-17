const express = require('express')
const app = express()

const users = [
    {id : 1,name : "users 1"},
    {id : 2,name : "users 2"},
    {id : 3,name : "users 3"},
    {id : 4,name : "users 4"},
    {id : 5,name : "users 5"},
    {id : 6,name : "users 6"},
    {id : 7,name : "users 7"},
    {id : 8,name : "users 8"},
    {id : 9,name : "users 9"},
    {id : 10,name : "users 10"},
    {id : 11,name : "users 11"},
    {id : 12,name : "users 12"},
    {id : 13,name : "users 13"},
    {id : 14,name : "users 14"},
    {id : 15,name : "users 15"},
    {id : 16,name : "users 16"},
    {id : 17,name : "users 17"},
    {id : 18,name : "users 18"},
    {id : 19,name : "users 19"},
    {id : 20,name : "users 20"},
    {id : 21,name : "users 21"},
    {id : 22,name : "users 22"},
    {id : 23,name : "users 23"},
    {id : 24,name : "users 24"},
    {id : 25,name : "users 25"},
    {id : 26,name : "users 26"},
    {id : 27,name : "users 27"},
    {id : 28,name : "users 28"},
    {id : 29,name : "users 29"},
    {id : 30,name : "users 30"},
    {id : 31,name : "users 31"},
    {id : 32,name : "users 32"},
    {id : 33,name : "users 33"},
]




const posts = [
    {id : 1,name : "posts 1"},
    {id : 2,name : "posts 2"},
    {id : 3,name : "posts 3"},
    {id : 4,name : "posts 4"},
    {id : 5,name : "posts 5"},
    {id : 6,name : "posts 6"},
    {id : 7,name : "posts 7"},
    {id : 8,name : "posts 8"},
    {id : 9,name : "posts 9"},
    {id : 10,name : "posts 10"},
    {id : 11,name : "posts 11"},
    {id : 12,name : "posts 12"},
    {id : 13,name : "posts 13"},
    {id : 14,name : "posts 14"},
    {id : 15,name : "posts 15"},
    {id : 16,name : "posts 16"},
    {id : 17,name : "posts 17"},
    {id : 18,name : "posts 18"},
    {id : 19,name : "posts 19"},
    {id : 20,name : "posts 20"},
    {id : 21,name : "posts 21"},
    {id : 22,name : "posts 22"},
    {id : 23,name : "posts 23"},
    {id : 24,name : "posts 24"},
    {id : 25,name : "posts 25"},
    {id : 26,name : "posts 26"},
    {id : 27,name : "posts 27"},
    {id : 28,name : "posts 28"},
    {id : 29,name : "posts 29"},
    {id : 30,name : "posts 30"},
    {id : 31,name : "posts 31"},
    {id : 32,name : "posts 32"},
    {id : 33,name : "posts 33"},
]




app.get("/posts",paginatedResults(posts),(req,res)=>{
     
    res.json(res.locals.paginatedResults)
    
  

})


app.get("/users",paginatedResults(users),(req,res)=>{
  res.json(res.locals.paginatedResults)
})

function paginatedResults(model){
    return (req,res,next)=>{       
        const page = parseInt(req.query.page) 
        const limit = parseInt(req.query.limit) 
        const startIndex = (page -1) * limit 
        const endIndex = page*limit 
    //    const resultUsers = users.slice(startIndex,endIndex)
    //    res.json(resultUsers)
    
      const results = {}
    
     if(endIndex < model.length){
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
      
      results.result = model.slice(startIndex,endIndex) 
      console.log("before res ",res)  
    //   res.paginatedResults = results   
      res.locals.paginatedResults = results 
      console.log("after response ",res)
      next()
    }
}


app.listen(3000,()=>{
    console.log("api listen successfully 3000")
})

