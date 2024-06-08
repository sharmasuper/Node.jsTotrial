// const express = require('express')
// const app = express()

// app.enable('x-powered-by')

// app.use((req,resp,next)=>{
//     const xPowerdByEnabled = app.get('x-powered-by')
//     console.log(`x-powered-by enabled : ${xPowerdByEnabled}`)
//     next()
// });

// app.disabled('x-powered-by');

// app.get('/',(req,resp)=>{
//     resp.send('hello world')
// })

// const port = 3000
// app.listen(port,()=>{
//     console.log(`Serever is running on port ${port}`)
// })

//second example 

const express = require('express')
const app = express()

app.enable('trust proxy')

app.use((req,resp,next)=>{
    const trustproxyEnabled = !app.disabled('trust proxy')
    console.log(`'trust proxy' enabled before disabled : ${trustproxyEnabled}`)
    next()
})
app.disabled('trust proxy');
app.use((req,resp,next)=>{
const trustproxyEnabled = !app.disabled('trust proxy')
console.log(`'trust proxy' enabled afetr disabled: ${trustproxyEnabled}`)
next();
})

app.get('/',(req,resp)=>{
    resp.send('Hello world !')
})
const port = 3000
app.listen(3000,()=>{
    console.log("server is running on port 3000}")
})















