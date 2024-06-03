const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/data',(req,resp)=>{
    const requestData = req.body;
    console.log('Recived json data',requestData);
    resp.send(`recived json data ${JSON.stringify(requestData)}`)
})
app.listen(3000,()=>{
    console.log('api hit successfully')
})
