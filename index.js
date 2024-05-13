const {dbConnect} = require('./mongodb')


const read = async() =>{
  try{
 const add = await dbConnect() 
 const data = await add.find().toArray() 
 console.log(data)
  }
  catch(error){
    throw("some thing went wrong",error) 
  }
}

read() 