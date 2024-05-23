//goal basic base 
//router.all topic
const express = require("express")
const router = express.Router()
const app = express()
router.route('/example').get((req,resp)=>{
    resp.send("hello my name is mohit sharma get")
})
router.route('/example').post((req,resp)=>{
    resp.send("hello post")
})
router.route('/example').put((req,resp)=>{
    resp.send("hello put")
})
router.route('/example').delete((req,resp)=>{
      resp.send("hello delete")
})
router.route('*').all((req,resp)=>{
    resp.status(404).send(`Request Method: ${req.method}, Request Path: ${req.path}`) 
})

app.use('/add',router)
app.route('*').all((req,resp)=>{
    resp.status(404).send("404page 1")
})
app.listen(3000,()=>{
    console.log('api hit successfully')
})


