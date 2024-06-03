const express = require('express')
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRouter')

const app = express()
app.use('/auth',authRoutes)
app.use('/user',userRoutes)


const port = 3000

app.listen(port,()=>{
    console.log('server is runnig on port')
})






