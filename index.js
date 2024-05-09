const express = require('express')
const app = express()
const Filter = require('./Middleware/Middleware')
const Filter1 = Filter.reqFilter
const route = express.Router()       //isai hum group level middleware kahta h 
  route.use(Filter1)  
//leki jab hamrai pass 20-25 route h tab easai ek ek kai Filter1 uper likaigai to yai acchi practice nahi h 
//isliy hum route import kargai


// const reqFilter = (req,resp,next) =>{
//   // console.log('reqFilter') ;   //ab is step mai server gumptha hi jayga jab tak hum next() method ka use nahi karaigai
//   // next()   //ab issai yai home route or user route per perfectly chlaiga
// //iska use case

// if(!req.query.age){
//   resp.send('please provide age')
// }
// else if(req.query.age<18){
//   resp.send("You can not access the page")
// }
// else
// {
//   next()
// }

// }   

//app.use(reqFilter)     



// app.get('/',(req,resp)=>{
//   resp.send("<h1>hello home page</h1>")
// })

// //leki jab hamrai pass 20-25 route h tab easai ek ek kai uper dalaigai to yai acchi practice nahi h 
// //isliy hum route import kargai


// app.get('/user',Filter1,(req,resp)=>{   //yai sirf ab user page per hi kam karaiga other page per kam nahi karaiga
//                                             //other page per kam nahi karaiga
//   resp.send("<h1>hello users page</h1>")
// })                                                   
// app.get('/about',Filter1,(req,resp)=>{    //ab yai sirf about or user per hi route kam karaiga
//                                                //agar hum reqFilter ji route per likaigai yai uski route per middleware lagaiga
//   resp.send("<h1>hello about page</h1>")
// })


app.get('/',(req,resp)=>{
  resp.send("<h1>Hello home page</h1>")
})


route.get('/about',(req,resp)=>{
  resp.send("<h1>Hello about page</h1>")
})


app.get('/user',(req,resp)=>{
  resp.send("<h1>Hello User page</h1>")
})

route.get('/contact',(req,resp)=>{
  resp.send("<h1>Hello contact page</h1>")
})

//ab mujai route contact or about page per lagu karnai h to hum app.get ki jagah route.get kar degai

app.use('/',route)  //or yai line lkhni h last mai 


app.listen(5000,()=>{console.log("sharma")})







