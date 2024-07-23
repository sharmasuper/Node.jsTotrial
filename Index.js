const compression = require('compression')
const express = require('express')
const app = express()

app.use(compression({
    level : 6 ,  //best optimizaion on server and cpu 
    threshold : 1000*1000, //any data 100 bites should not be compress
    filter : (req,res)=>{
        if(req.headers['x-no-compression']){
            return false 
        }else{
            return compression.filter(req,res)
        }
    }
}))

app.get("/",(req,res)=>{
    const payload = "Faster app which uses less BANDWIDTH too ...."
    res.send(payload.repeat(100))

})
app.listen(3000,()=>{
    console.log("api listen on port "+ 3000)
})