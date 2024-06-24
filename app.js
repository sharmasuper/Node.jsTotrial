The capped option in Mongoose is used to create a capped 
collection in 
MongoDB. A capped collection is a fixed-size collection that 
maintains insertion order and, once the specified size limit is 
reached, automatically overwrites the oldest documents when new 
documents are inserted. This is useful for use cases like logging, 
where you want to maintain a rolling log of a fixed size.


const mongoose = require('mongoose')
const {Schema} = mongoose


const url = 'mongodb://localhost:27017/test';

mongoose.connect(url)
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const userSchema = new Schema({
    message : String,
    timeStamp : {type : Date ,default : Date.now}
}
// {
//     capped : {size : 1024 ,max :100,autoIndexId : true}
// }
)
userSchema.set({'capped':{size : 1024 ,max :100,autoIndexId : true}})
const use = mongoose.model('Log',userSchema) 



const runfun = async() =>{
    try{
     const newLog = new use({ message:'this is a log message'})
      console.log(newLog)
    await  newLog.save() 
    }catch(error){
        console.log("show error ",error)
    }
}
runfun()





