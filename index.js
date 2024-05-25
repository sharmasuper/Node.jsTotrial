const express = require('express')
const app = express()
// app.use(express.json())

app.route('/end').get((req,resp)=>{
    console.log("hello how are you")
    resp.write("response send successfully")
    resp.end()
})
app.route('/hello').get((req,resp)=>{
    // resp.write("hello route how are you")
    resp.setHeader('Content-Type', 'application/json')
    const data = JSON.stringify([{"name":"Ram","hello":"sharma"}])
    // // resp.write(data)
    resp.end(data) 
})

app.listen(3000,()=>{
    console.log("api hit successfully") 
})


