// The app.METHOD(path, callback [, callback ...]) method in Express.
// js is used to define route handlers for HTTP methods (such as GET, POST, PUT, DELETE, etc.) at specified paths. 
// METHOD is a placeholder for the actual HTTP method you want to handle, like app.get, app.post, app.put, app.delete, etc.

const express = require('express')
const app = express()
app.use(express.json())

app.get('/',(req,resp)=>{
    resp.send('Get request to the homepage')
})

app.post('/submit',(req,resp)=>{
    const data = req.body;
    resp.send(`Post Method to /submit with date: ${JSON.stringify(data)}`)
})

app.put('/update/:id',(req,resp)=>{
    const id = req.params.id;
    const data = req.body;
    resp.send(`put request to /update/${id} with date : ${JSON.stringify(data)}`)

})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    res.send(`Delete request to /delete/${id}`)
})

app.listen(3000,()=>{
    console.log("api hit successfully")
})





