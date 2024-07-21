const mongoose = require('mongoose')
// const env = require('dotenv')
// env.config()
mongoose.connect(process.env.Str)
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show connection error ",error)
})
