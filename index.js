const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookieParser())

app.route("/cookie").get((req,resp)=>{
  resp.cookie('hy','hello',{
    secure:true,
    httpOnly:true,
    path:'/cookie',
    maxAge:2000
  })
  const getCookie = JSON.stringify(req.cookies)
  resp.send(`successfully send cookie ${getCookie}`)
})

app.route("/get-cookie").get((req,resp)=>{
  var getCookie = req.cookies
  resp.send(`hello cookies - ${JSON.stringify(getCookie)}`)
})
app.listen(3000, () => {
  console.log("API hit successfully");
});
