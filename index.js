const express = require('express')
const app = express()

app.route('/').get((req,resp)=>{
    resp.append('multipl-Value',['val1','val2','val3'])
   
    resp.send("hello append")
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})







