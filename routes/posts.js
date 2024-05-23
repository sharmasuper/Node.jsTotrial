const {Router} = require('express') 
const router = Router()

router.get('/',(req,resp)=>{
    resp.send(200)
})



router.get('/postTitle/:title',(req,resp)=>{
    resp.json({title:'some random Post'})
})



module.exports = router






