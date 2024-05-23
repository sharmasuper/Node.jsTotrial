
const express = require('express')
const app = express()
const router = express.Router()
app.use(express.json())  

router.param('id',(req,resp,next,id)=>{
    console.log("recived id "+ id)
   if(!Number.isInteger(Number(id))){
    return resp.status(400).send("please fill correcct param")
   }
   req.id = Number(id)
   next()
})

router.param('name',(req,resp,next,name)=>{
    console.log('you recieve name is '+name)
    if(typeof name === 'string'&& name.length>=3){
        req.name = name
        next()
    }else{
        return resp.status(400).send("Invalid route name please fill correct route")
    }
})



router.route('/item/:id').get((req,resp)=>{
    resp.send(`hello get id is ${req.id}`)
})

router.route('/hello/:name').get((req,resp)=>{
    resp.send("hello only take name mohit you see"+req.name)
})

router.route('*').all((req,resp)=>{
    resp.send("hello 404 page")
})
app.use('/API',router)

app.route('*').all((req,resp)=>{
    resp.status(404).send("404 page Page Not found")
})

app.listen(3000,()=>{
    console.log("api hit successfully")
})



