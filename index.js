const express = require('express') 
const mongoose = require('mongoose')
const  bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const route = require('./routes/userRoute')
app.use(bodyParser.json())
 
dotenv.config(); 
const PORT  = process.env.PORT || 5000  
const MONGOURL = process.env.MONGO_URL; 
// console.log(MONGOURL)   
mongoose.connect(MONGOURL).then(()=>{
    console.log("MongoDb Connect successfully")   
    app.listen(PORT,()=>{
        console.log(`server is running on port on - ${PORT} `)
    })
}).catch((error)=>{
    console.log("show error",error)
})

app.use('/api/user',route)


