const express = require('express')
const { User } = require('../model/UserSchema')
const Router = express.Router()
const  JWT = require('jsonwebtoken')
//create Token 
const maxAge = 3*24*60*60
const createToken = (id) =>{
    return JWT.sign({id},"secret key token",{
      expiresIn: maxAge,
    })
}

//customize Error 
const handleError = (err) =>{
  const Error =  {email:"",password:"",name:""}
  if(err.code === 11000){
     Error.email = "Please type Unique email value"
     return Error
  }else if(err.message.includes("person validation failed")){
    Object.values(err.errors).forEach(({properties})=>{
        Error[properties.path] = properties.message 
    })
    return Error
  }else if(err.message === 'Incorrect Password' || err.message === 'Incorrect Email'){
    if(err.message === 'Incorrect Password'){
        Error.password = "Incorrect Password"
    }else{
        Error.email = 'Incorrect Email'
    }
    return Error
  }    
  
}


Router.get("/SignUp",(req,res)=>{
    res.render("signIn")
})

Router.get("/Login",(req,res)=>{
    res.render("Login")
})

Router.post("/Login",async(req,res)=>{
    try{
   const {email,password} = req.body
  const chekcUser = await User.LoginCheck(email,password) 
  const token =  createToken(chekcUser._id) 
    res.cookie('jwt',token,{httpOnly:true,maxAge : maxAge*1000}) 
    res.status(201).json(chekcUser._id) 
   }catch(err){  
    //response mai coutom error hi jayga pure error nahi jayaga so we use handleError
    const error = handleError(err)
    res.status(400).send({error})  
   } 
})
Router.post("/signUp",async(req,res)=>{
    try{
    const {name,email,password} = req.body
    const newuser = await User.create({name : name ,email : email,password:password})
     
      const token = createToken(newuser._id)
      res.cookie('jwt',token,{httpOnly:true,maxAge : maxAge*1000})
      res.status(201).json(newuser._id);
      
}catch(err){
    // console.log("show login error ",error)
    // console.log(error)
    const error = handleError(err)
      res.status(400).json({error}) 
}})

Router.get("/logout_get",(req,res)=>{
  res.cookie('jwt','',{maxAge:1}) 
  res.redirect("/Login")
})

module.exports = {Router} 

