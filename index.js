const express = require('express')
const app = express()

app.use((req,resp,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

app.all('/example',(req,resp,next)=>{
    console.log('this runs for all http methods on/example')
    next();
})

app.get('/example',(req,resp)=>{
    resp.send('Get request to/example')
})

app.post('/example',(req,resp)=>{
    resp.send('Post request to/example')
})

app.put('/example',(req,resp)=>{
    resp.send('Put request to/example')
})
app.delete('/example',(req,resp)=>{
    resp.send("Delete request to/example")
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})







