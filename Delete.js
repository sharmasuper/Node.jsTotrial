const {dbConnect} = require('./mongodb.js')
const deleteData = async() =>{
   const  data = await dbConnect()
//    const result = await data.deleteOne({name:'rajaji'})
    const result = await data.deleteMany({name:'rajaji'})
   console.log(result)
     if(result.acknowledged){
        console.log("data deleted")
     }
}
deleteData()