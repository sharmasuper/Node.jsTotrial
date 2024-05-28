const express = require("express")
const app = express()

app.use((req,resp,next)=>{
    const acceptedLanguage = req.acceptsLanguages( 'en','es', 'fr')
    if(acceptedLanguage){
        req.language = acceptedLanguage
    }else{
        resp.status(400).send("Not accepted")
        return 
    }
    next()
})

app.route("/data").get((req,resp)=>{
    let greeting;
    switch(req.language){
        case 'en' :
            greeting = "hello en"
            break
        case 'es' :
            greeting = " hello es"   
            break 
        case 'fr' :
            greeting = "hello fr" 
            break
        default :
          greeting = "hy default"       
    }
    resp.send(`api hit successfully helo gre - ${greeting} and ${req.language}`)
})
app.listen(3000,()=>{
    console.log("api hit successfully")
})





