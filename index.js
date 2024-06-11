const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res,next)=>{
    next(new Error('Something went wrong'))
})

app.use((err,req,next)=>{
    // console.error("show error",err.stack);
    res.status(500).send('something broke !')
})

const port = 3000
app.listen(3000,()=>{
    console.log('Server is running on port')
})


