const express = require('express')
const router = express.Router()


function authenticate(req,res ,next){
    console.log('Authentication middleware')
    next()
}

router.post('/login',authenticate,(req,res)=>{
    res.send('Login route')
})

router.post('/logout',authenticate,(req,res)=>{
    res.send("Logout route")
})

module.exports = router;



