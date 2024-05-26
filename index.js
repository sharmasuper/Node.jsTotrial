const express = require('express')

const app = express()
app.use(express.json())
app.get("/data",(req,resp)=>{
    const data = {
        name : "mohit sharma",
        message : "hello world!",
        timestamp: new Date().toISOString(),
    }
    resp.format({
        'text/plain':()=>{
            resp.send(`${data.message}\n${data.timestamp}`);
        },
        'text/html': () => {
            resp.send(`<html><body><h1>${data.message}</h1><p>${data.timestamp}</p></body></html>`);
          },

          'application/json': () => {
            resp.json(data);
          },  
         
          'default': () => {
            resp.status(406).send('Not Acceptable');
          } 

    })
    //these method  we use difference type send method ,such as josn format only show josn(data) default - not acceptable html page - show html data etc
    //but when we use these method ,these do not allow to use send() method 
})
const port = 3000
app.listen(port,()=>{
    console.log("api hit successfully")
})
