const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    //console.log("data send by browser ,", req.query)   //result check on terminal - {nam:"anil",sharma:"ram"}
    console.log("data send by browser ,", req.query.sharma)
//    resp.send("welcome ,this is home page") 
  //resp.send('welcome,this is home page  '+req.query.sharma)
  resp.send(`<h1>welcome , to home page</h1>,<a href="/about">Goabout</a>`)

  resp.send()
})

app.get('/about',(req,resp)=>{
    resp.send(`
       <input type="text" placeholder="user name" value=${req.query.name} />
       <button>ClickMe</button>
    `)                          //html add 
})

app.get("/help",(req,resp)=>{
   // resp.send({name:"anil",email:"anil@gmail.com"})  //send json data
   resp.send([{name:"Mohit",email:"mohit@gmial.com"},{name:"sharma",email:"sharma@gmail.com"}])
})
                        //http://localhost:5000/?name=anil&sharma=ram asai get api bnai
app.listen(5000)




