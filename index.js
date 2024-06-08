// Sure! Let's create an example using the EJS templating engine with Express.js. EJS (Embedded JavaScript) is a simple
// templating language that lets you generate HTML markup with plain JavaScript.

const Express = require('express')
const app = Express();

app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,resp)=>{
    resp.render('index',{title:"hey",message:'Hello there !'})
})

app.get('/render',(req,resp)=>{
    app.render('index',{title:'Rendered',message:"this is rendered content"},(err,html)=>{
      if(err){
        resp.status(500).send('Error rendering the view')
        return 
      }  
      console.log("html",html)
      resp.send(html)
    //   resp.send("hello")
    })
   
})

const port = 3000
app.listen(3000,()=>{
    console.log('Server api hit successfully ')
});











