const express = require('express')
const app = express()

const logRequest = (req,resp,next) =>{
    console.log(`Recived ${req.method} request for ${req.url} `)
    next();
}

const authenticate = (req,res,next) =>{
    const authenticate = true;
    if(authenticate){
        next()
    }else{
    res.status(401).send("unauthenticate")
    }
}

app.delete('/recource/:id',logRequest,authenticate,(req,resp)=>{
    const resourceId = req.params.id;
    console.log(`deleting resource with Id: ${resourceId}`)
    resp.send(`resource with Id ${resourceId} has been deleted`)
})
const port = 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})








