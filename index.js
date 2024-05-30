const express = require('express')
const app = express()
const router = express.Router()

router.route('/base').get((req,resp)=>{
  url = req.baseUrl
  ug = req.url
  resp.send(`hello router url - ${url} and personal is ${ug} `)
  // api hit url is /hello
})

app.use('/hello',router)

app.route("/home").get((req,resp)=>{
  hu = req.url
  resp.send(`api hit url is  ${hu}`)
  // api hit url is /home
})

app.listen(3000,()=>{
  console.log("api hit successfully")
})






