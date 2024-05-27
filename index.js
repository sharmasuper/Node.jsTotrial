const express = require('express')
const app = express()
const path = require('path')
const filepath = path.join(__dirname,'index.ejs')
app.set('view engine','ejs')
app.set('views',filepath)
const data = {
    name :"mohit",
    number:"6375349671"
}

app.route("/").get((req,resp)=>{
    // resp.render(filepath,data,(err,html)=>{
    //   resp.send(html)       it is optional to use
    // }) 
      resp.render(filepath,data)
})


app.listen(3000,()=>{
    console.log("api hit successfully")
})