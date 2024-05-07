const http = require('http');

function datacontrol(req,resp){
    resp.write("<h1>Hello this is anil Mohit<h1>");
    resp.end();
}

// http.createServer((req,resp)=>{     //asai bhi kar sktai h
 
//     // resp.write("<h1>Hello this is anil sidhu<h1>");
//     // resp.end();
 
// }).listen(4500)   
http.createServer(datacontrol).listen(4500)


//createServer take function as parameter

// test(a,b){

// }
// test()