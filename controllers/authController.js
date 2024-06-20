const User  = require('../models/User')
const jwt = require('jsonwebtoken')

//handle error

const handleErrors = (err) =>{
    //all error will be get
 console.log("Show error ",err.message,err.code);
 let errors = {email: "",password : ""};
 
 //dublicated key error

//  if(err.message === 'Error: incorrect email' || err.message === 'Error: incorrect email'){
//     errors.email = 'that Email is not registered';
//     errors.password = 'that password is not correct';
//     return errors   //we domt use this code because both error combine are comming
//  }
if(err.message == 'incorrect email'){
   errors.email = 'that email is not registered';
   return errors
}


 if(err.message == 'incorrect password'){
    errors.password = 'that password is not correct';
    return errors
 }
//duplcate error code
 if(err.code === 11000){
    errors.email = "Email already registered";
    return errors
 }
 //validation error
 if(err.message.includes('users validation failed')){
     console.log("handle error",err.errors)
     Object.values(err.errors).forEach(({properties}) =>{
        console.log("check error",properties)
        errors[properties.path] = properties.message; 
     })
    
    return errors
 }

}
const maxAge = 3*24*60*60
const createToken = (id) =>{
   //return  // jwt.sign({id},'mysecretkey',{expiresIn: 3*24*60
    return jwt.sign({id},'net ninja secret ',{
        expiresIn: maxAge,
        

    })
}


module.exports.signup_get = (req,res) =>{
    res.render('signup') 
}
module.exports.login_get = (req,res) =>{
    res.render('login')
} 
module.exports.signup_post = async(req,res) =>{
    const {email,password} = req.body 
   try{
    const user =  await  User.create({email,password});
    const token = createToken(user._id)
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    //  res.status(201).json(user)
    res.status(201).json({user:user._id})
   }catch(error){
  const showError =   handleErrors(error) 
    console.log("show error",showError)
    res.status(400).json({showError})
   }
} 

module.exports.login_post = async(req,res) =>{
   const {email,password} = req.body
   try{
    const user = await  User.login(email,password)
    const token = createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    res.status(200).json({user:user._id});
   }catch(error){ 
    const showError =   handleErrors(error)
    console.log("show login post error",{showError})
    res.status(400).json({showError}) 
   }
}


