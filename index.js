const express = require("express")
const app = express()

app.route("/content").get((req,resp)=>{
    resp.vary('hello')
  
    if(req.accepts('json')){
        resp.type('text').send('Hello, plain text!');
    }
    if(req.accepts('html')){
        resp.send("<h1>hello, how vary</h1>")
    }else if(req.accepts('json')){
        resp.json({message :"hello josn !!"})
    }else {
        resp.type('text').send('Hello, plain text!');
    }
})

app.get('/language', (req, res) => {
    // Ensure the response varies based on the 'Accept-Language' header
    res.vary('Accept-Language');
  
    const lang = req.acceptsLanguages('en', 'es');
    if (lang === 'es') {
      res.send('Hola, Mundo!');
    } else {
      res.send('Hello, World!');
    }
  });


app.listen(3000,()=>{
    console.log("api hit successfully")
})












