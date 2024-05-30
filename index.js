// In Express.js, req.app is a property of the req (request) object that provides a reference to the Express
//  application instance that is handling the request. This can be useful when you need to access application-level
//   settings or methods from within your 
// route handlers or middleware.
const express = require('express')
const app = express()
app.set('appName','My Express App')
app.use((req,resp,next)=>{
  console.log(`Request recived at ${new Date().toISOString()}`)
  next()
})

app.route("/").get((req,resp)=>{
  // const appName  = req.app.get('appName')
  const appName = req.app.get('appName')
  resp.send(`Welcome to ${appName} !`)
})

app.listen(3000,()=>{
  console.log("api hit successfully")
})

