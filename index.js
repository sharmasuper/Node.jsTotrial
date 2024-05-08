
const http = require('http')
const data = require('./data')
http.createServer((req,resp)=>{         
    resp.writeHead(200,{'Content-Type':'application\json'})        //abh hum response send kar rahai h rep.writehead(reponsecode,jistypeka data send kartai h)
                                   //jab user sai data lagai tab req ka use karraugai              
  // resp.write(JSON.stringify({name:"Mohit sharma",email:'Mohit@gmail.com'}))  //body
  resp.write(JSON.stringify(data))
    resp.end()
}).listen(4500) 





