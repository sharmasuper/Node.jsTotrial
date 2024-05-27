const express = require("express")
const app = express()
const path = require("path")
// const filepath = path.join(__dirname,'History.txt')


app.route("/").get((req,resp)=>{

  const options = {
    root : path.join(__dirname),
    headers : {
        'date':new Date(),
         'recived':true
    }
    
  }

   resp.sendFile('Histor.txt',options,(err,html)=>{
    if(err){
        resp.status(400).send("file not found")
    }else{
        console.log("file send successfully with response")
       
    }
   })
})

app.listen(3000,()=>{
    console.log("api hit successfully")
})

