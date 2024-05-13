const {dbConnect} = require('./mongodb')
const updateData = async() =>{
     const data = await dbConnect()
    // const result = await data.updateOne({name:'Laddu'},{$set:{name :"mohitji"}}) //it has print only one
    const result = await data.updateMany({name:'raju'},{$set:{name :"rajaji"}})  //it has print all data

     console.log(result) 
    // return 'done' if you want 
}



updateData()




