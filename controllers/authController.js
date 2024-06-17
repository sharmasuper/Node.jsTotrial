const User  = require('../models/User')

//handle error
const handleErrors = (err) =>{
    //all error will be get
 console.log("Show error ",err.message,err.code);
 let errors = {email: "",password : ""};
 //dublicated key error
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
module.exports.signup_get = (req,res) =>{
    res.render('signup') 
}
module.exports.login_get = (req,res) =>{
    res.render('login')
} 
module.exports.signup_post = async(req,res) =>{
    const {email,password} = req.body
   try{
    const user =  await  User.create({email,password})
     res.status(201).json(user)
   }catch(error){
  const showError =   handleErrors(error)
    // console.log("show error",error)
    res.status(400).json({showError})
   }
}

module.exports.login_post = async(req,res) =>{
    // const {email,password} = req.body
    // try{
    //  const user =  await  User.create({email,password})
    //   res.status(201).json(user)
    // }catch(error){
    //     handleErrors(error)
    // //  console.log("show error",error)
    //  res.status(400).json(error)
    // }
}


