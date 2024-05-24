const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    if(!resp.headersSent){
        resp.set('Content-type','text/plain')
          console.log
         resp.status(200).send(`Hello world - ${resp.get('Content-type')}`)
    } 
   
    if(resp.headersSent){
      
        console.log('Headers have been send to the client')
    }
    try{
        resp.set("X-Example","Value")
    }catch(err){
        console.error('Error setting header',err.message)
    }
})
app.use((req, res, next) => {
    if (res.headersSent) {
       
      return next(err);
    }
    
    res.status(500).send('Server error!');
 
  });

app.get('/item',(req,resp)=>{
    resp.send('hello item no-2') 
})


app.listen(3000,()=>{
    console.log("api hit successfully")
})

