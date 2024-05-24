const express = require('express');
const path = require('path'); // Node.js path module for file paths
const app = express();

// Set the view engine and the views directory

app.set('views', path.join(__dirname, 'route')); // Assuming your views are in a folder named 'views' //defaut folder change
// app.locals.users= {name:"Mohit",role:"developer"}
// app.locals.name = {name:"sharma",role:'index'}   //globaly define kar sktai h functio mai bhi or route fynction mai bhi
app.use((req,resp,next)=>{
    resp.locals.users = {name :"mohit sharma",role:"hello developer"}
    resp.locals.name = {name :"hello mohit",role:"hello developer 2"}
    console.log("hello mohig",resp.locals) //it give a object
    next()
})  
app.get("/", (req, resp) => {
    // resp.locals.users = {name :"mohit sharma",role:"hello developer"}
    // resp.locals.name = {name :"hello mohit",role:"hello developer 2"}
  resp.render('index'); // Render the 'hello' view
});
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
