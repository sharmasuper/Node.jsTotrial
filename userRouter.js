const express = require('express')
const router = express.Router()

function authorize(req,res,next){
    console.log('Authorization middleware')
    next();
}

router.get('/profile',authorize,(req,res)=>{
    res.send('user profile route')
})

router.put('/profile',authorize,(req,res)=>{
    res.send('Update user profile route')
})

module.exports = router;


