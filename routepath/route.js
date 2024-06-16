const express = require('express')
const route = express.Router() 
const User = require('../schema/Userschema') 
console.log("user seen ",User) 
route.route("/fetch").get(async(req,resp)=>{
   try{ 
    return resp.status(201).json("Hello World .") 

   }catch(error){
    resp.status(500).json({error :"Internal server error"})
   }

})

route.route('/create').post(async(req,resp)=>{
     try{
       
        const newData = new User(req.body)
         console.log("save data",newData)
         const {email} = newData
         const userExist = await User.findOne({email})
         if(userExist){
            return resp.status(400).json({message : "User already exist"})

         }else{
            const savedUser = await newData.save()
            resp.status(201).json(savedUser)
         }

     }catch(error){
        console.log("Show Post Error",error)
        resp.status(500).json({error : "Internal server error "+ error})
     }
})
  
route.route('/getAllUser').get(async(req,resp)=>{
    try{
     const data = await User.find() 
     if(data.length === 0){  
        return resp.status(404).json({"message":"no user found "})
     }else{  
     return  resp.status(200).json(data)  
     }   
    }catch(error){
        console.log("show read error",error)
        resp.status(500).json({"message":"network error in read "+error})

    }
})

route.route('/UserUpdate/:id').put(async(req,resp)=>{
   try{
      const id = req.params.id
      console.log("Id is ",id)
      const userId = await User.findOne({_id:id})
      if(!userId){
         return resp.status(404).json({message:"User not found !"})
      }else{
         const getPostData = req.body
         const updateData = await User.findByIdAndUpdate(id,getPostData,{new : true});
        return  resp.status(201).json(updateData)
      }
     
   }catch(error){
      console.log("show update error "+error)
      return resp.status(500).json({message:"User update network error "+error})
   }

  
})

route.route('/deleteUser/:id').delete(async(req,resp)=>{
   try{
      const id = req.params.id
      console.log("delete Id is",id)
      const DeleteId = await User.findById({_id:id})
      if(!DeleteId){
        return  resp.status(404).json({message:"User Id not exist"})
      }else{
         const deleteDataById = await  User.findByIdAndDelete(id)
         return   resp.status(201).json(deleteDataById) 
      }

   }catch(error){
      console.log("show delete error "+error)
      return resp.status(500).json({message:"User delete network error "+error})
   }
})

module.exports = {
    route : route
}