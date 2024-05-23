const { Router} = require('express')
const router = Router()

router.use((req,resp,next)=>{
    console.log('Request made to /users Route')   //mount ho raha h
    next()
})
router.get('/',(req,resp)=>{
    resp.send(200);
    
})
router.get('/posts',(req,resp)=>{
    resp.json({title:'Some random posts'})
})

module.exports = router;

