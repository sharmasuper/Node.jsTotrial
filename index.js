const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const {route} = require('./routepath/route')
dotenv.config()
const app = express()
app.use(bodyparser.json())


const port = process.env.PORT || 5000
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {
   
    
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log('Server is running on port '+port);
    });
}).catch((error)=>{
    console.log("show error "+ error)
})
    
app.use('/api/user',route)


