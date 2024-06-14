const  User = require('../model/userModel.js') 

const create = async(req,res) =>{

    try{
        console.log(req.body)
      const userData = new User(req.body) 
      console.log(userData) 
      const {email} = userData  
      const useExist = await User.findOne({email}) 
      if(useExist){   
          return res.status(400).json({message:"User already exist"}) 
      } 
      const savedUser = await userData.save()
      res.status(201).json(savedUser) 
    }catch(err){
        console.log("show route error",err)
    }
}


 const fetch = async(req,resp) =>{
    try{
    return   resp.json('Hello world.')
    }catch(error){
        resp.status(500).json({error:"Internal server error"})
    } 
}

const getAllUser = async(req,resp) =>{
    try{
        const users = await User.find();
        if(users.length === 0){
            return resp.status(404).json({"message":"no user find"})
        }
        resp.status(200).json(users)
    }catch(error){
        console.log("show error",error)
        resp.status(500).json({error:`show error - ${error}`})
    }
}

const update = async(req,res) =>{
 try{ 
    const id = req.params.id 
    console.log("Id is",id)
    const usersExist = await User.findOne({_id:id}) 
    
    if(!usersExist){ 
        return res.status(404).json({message:'User not found'}) 
    } 
    console.log("Req.body",req.body) 
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser) 

 }catch(error){
    console.log("internal error show",error) 
    res.status(500).json({message:"Internal server error",error:error.message}) 
 }
}

const deleteUser = async(req,res) =>{
    try{
         const id = req.params.id
         const userExist = await User.findById({_id:id})
         if(!userExist){
             return res.status(404).json({message:"User not found"})
         }else{
             const deletedUser = await User.findByIdAndDelete(id)
             res.status(201).json({message:"user delete successfully "+deletedUser})
         }

    }catch(error){
        console.log("show error")
        res.status(500).json({message:error.message})
    }
}







module.exports = {
    getAllUser : getAllUser, 
    create :create ,
    fetch:fetch,
    update: update,
    deleteUser:deleteUser
}