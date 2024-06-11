// In Express.js, you can write custom error handlers to handle different types 
// of errors more gracefully. Error handlers are middleware functions that take four arguments: 
// err, req, res, and next. Here are a few examples of different types of error handlers in an Express application.


const Express = require('express')
const app = Express()

app.use(Express.json())

app.get('/',(req,res,next)=>{
    const err = new Error('Something went wrong')
    err.status = 400
    next(err);
})
app.get('/error',(req,res,next)=>{
    next(new Error('Another type of error!'))
})

app.use((req,res,next)=>{
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({
        message : err.message,

    })
})


const port = 3000
app.listen(3000,()=>{
    console.log("server api hit successfully")
})















