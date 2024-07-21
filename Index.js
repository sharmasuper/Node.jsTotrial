const express = require('express')
const app = express()
const dotenv = require('dotenv')
const multer = require('multer')
const { v4: uuidv4, } = require('uuid');
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary');
const { default: mongoose } = require('mongoose');
// const upload = multer({ dest: 'uploads/' })
dotenv.config()
require('./db/db')
//cloudinary use
cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret   // Click 'View Credentials' below to copy your API secret
});
//mongoose schema create 

const Image = mongoose.model('Image',new mongoose.Schema({
    image_url: String,
    created_at: { type: Date, default: Date.now }
}))



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // console.log("inside file function ",file)
        const random = uuidv4()
        // cb(null, file.fieldname + '-' + Date.now() + file.originalname); correct method 
        cb(null, random+""+ file.originalname);  // correct method 
    }
})
  
const upload = multer({ storage: storage })
 
app.post('/uploads',upload.single('myfile'),async(req,res)=>{
    try{
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        // Log the result of the upload
        const new_data = await Image.create({image_url :uploadResult.secure_url}) 
        console.log("new_data",new_data) 
        console.log("Upload result: ", uploadResult);
        fs.unlinkSync(req.file.path)
        


        res.send("Hello")
    }catch(error){
        console.log("show error ",error)
    }   
})
app.get("/",()=>{
    res.send("Welcome to my website!")
})  

app.listen(process.env.port,()=>{
    console.log("api listen on port "+ process.env.port)
}) 







