// const express = require('express')
// const path = require('path')
// const app = express()

// app.get('/download',(req,resp)=>{
//     const filepath = path.join(__dirname,'history.txt',)
//     const filename = 'download_example.txt'
//     resp.download(filepath,filename,(err)=>{
//         if(err){ 
//             console.error("error whiling download file",err)
//             resp.status(500).send('Error ocured while file downloading')
//         }else {
//             console.log('file download successfully')
           
//         }
//     }) 

// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })

const express = require('express')
const path = require('path')
const filedir = path.join(__dirname,'History.txt')
const app = express()
app.get("/attachment",(req,resp)=>{
      resp.attachment('hello.txt')
      resp.sendFile(filedir)
})
app.listen(3000,()=>{
    console.log("api hiy successfully")
})
















