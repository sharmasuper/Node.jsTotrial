const express = require('express')
const app = express()
const multer = require('multer')
const env = require('dotenv')
// const upload = multer({ dest:  'uploads/' })

env.config() 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
    //  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //  cb(null, file.fieldname + '-' + uniqueSuffix)
    //same file repeat karnai kai liy
     //  cb(null,file.originalname)
     cb(null,Math.floor(Math.random()*100000) + file.originalname) 
    }
  })
  
  const upload = multer({ storage: storage })
app.post('/upoading',upload.single("file1"),(req,res)=>{
    console.log(req.file) 
    res.send("hello")
})

app.listen(process.env.port,()=>{
    console.log("api listen on port "+ process.env.port)
})










