const express = require('express')
const app = express()

app.use(express.json());
app.set('appName','express res app example mohit')

app.use((req,resp,next)=>{
    console.log(`or middleware response message is ${resp.app.get('appName')}`)
    next()   
}) 

app.route('/api').get((req,resp)=>{
    resp.status(200).send(`hello my message is ${req.app.get('appName')}`)
})

app.listen(3000,()=>{

    console.log("hello api hit successfully")


})









