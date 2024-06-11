//Application-level middleware

const express = require('express')
const app = express()

const requestTimeLogger = (req,resp,next) =>{
    req.requestTime = new Date().toISOString()
    req.ms = "sharma"
    console.log(`Request ${req.ms} recived at ${req.requestTime}`)
    next()
}

app.use(requestTimeLogger);

app.get('/',(req,resp)=>{
    resp.send(`Hello World ! request recived at : ${req.requestTime}`)
})

app.get('/about', (req, res) => {
    res.send(`About Page. Request received at: ${req.requestTime}`);
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });








