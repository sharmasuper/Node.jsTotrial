console.log("hello")
// In Express.js, the req.fresh property is used to determine if the request is still 
// fresh according to the HTTP caching mechanisms. It relies on request headers like If-Modified-Since and 
// If-None-Match to determine whether the content has changed since the last request. If the resource is still fresh, 
// the server can respond with a 304 Not Modified status, saving bandwidth by not sending the unchanged resource again.


const express = require('express')
const app = express()

app.use((req,resp,next)=>{
    resp.set('Last-Modified',new Date().toUTCString())
    resp.set('ETag','12345')
    next()
})
app.get('/check-cache',(req,resp)=>{
    
   if(req.fresh){
      resp.send('The response is fresh')
   }else if(req.stale){
      resp.send('The response is stale')
   }else {
      resp.send('Unable to determine freshness')
   }
})

const port = 3000
app.listen(port,()=>{
   console.log("server is running on po")
})


