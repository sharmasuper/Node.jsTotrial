const express = require('express')
const app = express()
app.use(express.json())


app.route("/post").post((req,resp)=>{
 const add = req.body.map((item,index)=>{
         return `<p key=${index}>${item.name} and ${item.email}</p>`
                
 })
  
  resp.send(`hello dude how data -  and bodyis ${req.body} hello bo - ${add}`) 

})

app.route('/home').get((req,resp)=>{
  resp.send(`api need successfully - ${req.body}`)
})

app.listen(3000,()=>{
  console.log("api hit successfully")
})








