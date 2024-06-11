const express = require('express')
const app = express()

const router = express.Router()

const logRequestDetails = (req,res,next) =>{
    console.log(`Method: ${req.Method} ,URL : ${req.url}`)
    next()
}

router.use(logRequestDetails)
router.get('/',(req,resp)=>{
    resp.send('Welcome to the home page')
})

router.get('/about',(req,resp)=>{
    resp.send('This is the about page')
})

app.use('/router',router)


const port = 3000
app.listen(port,()=>{
    console.log('Server is running on port 3000')
})






