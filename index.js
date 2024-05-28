
const express = require('express')
const app = express()
const port = 3000

app.use((req,resp,next)=>{
    const userAgent  = req.get('User-Agent')
    const acceptLanguage = req.get('Accept-Language')
    const customHeader = req.get('X-Custom-header')
    const power = req.get('Connection')
    console.log("frist",userAgent)
    console.log("second",acceptLanguage)
    console.log("third",customHeader)
    console.log("power",power)
      next()
})
app.get('/data',(req,resp)=>{
    resp.send("Check the console for logged header values")

})
app.listen(3000,()=>{
    console.log("api hit successfully")
})








