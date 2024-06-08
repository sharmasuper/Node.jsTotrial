const express = require('express')
const app = express()
app.set('appName','My express App')
app.set('port',3000)

app.get('/',(req,resp)=>{
    const appName = app.get('appName')
    const port = app.get('port')
    const reGet = resp.get('port')
    resp.send(`Welcome to appName ${appName} port is ${port} reGet 
        is reget ${reGet}`)

})

const port = app.get('port')
app.listen(port,()=>{
    console.log("api hit successfully")
})
