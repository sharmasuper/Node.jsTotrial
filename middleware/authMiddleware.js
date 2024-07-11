const jwt = require('jsonwebtoken')
const { User } = require('../model/UserSchema')

const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt 
    //check json web token exists & is verified 
    if(token){
        jwt.verify(token,'secret key token',(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.redirect('/Login')
            }else{
                console.log(decodedToken)
                next()
            }
        })
    }else{
        res.redirect('/Login') 
    }
}
//check corrent user
const checkUser = (req,res,next) =>{
    const token = req.cookies.jwt 
    if(token){
        jwt.verify(token,'secret key token',async(err,decodedToken)=>{
           if(err){
            console.log(err.message)
            res.locals.user = null
            next()
           }else{
            console.log(decodedToken)
            let user = await User.findById({_id:decodedToken.id});
            res.locals.user = user
            next()

           } 
        })
    }else{
        res.locals.user = null
        next()
    }
}



module.exports = {requireAuth,checkUser}







