// const { MongoClient, Collection } = require('mongodb');
// const axios = require('axios')
// const url = 'mongodb://localhost:27017'
// const database = 'e-come'
// const client = new MongoClient(url)


// async function dbConnect() {    
//   let result = await client.connect() 
//   let db = result.db(database); 
//   return db.collection('products')
  // let collection = db.collection('products')
  // console.log(collection.find().toArray())
  // let response = await collection.find({}).toArray() 
  // if we want to find data name
 // let response = await collection.find({name:'sharma'}).toArray()  //he has showed result
  // console.log(response)              
  //  // i have one query in my mind,how i will create db.collection  file
  //  answer its simple  - 
  //  step1 - create file mongodb.js
// }
// console.log(dbConnect()) //promise age mujai function mai sai data nikalna h to mujai promise handle karna hoga
  //1st method // dbConnect().then((resp)=>{
//  // console.log(resp.find().toArray()) //proise pending because toArray bhi promise return kartha h
//  resp.find().toArray().then((data)=>{
//   console.log(data)
//  })
// })

//2nd method

//easy way 
const Connect = require('./mongodb')
 const dbConnect = Connect.dbConnect
const main = async() =>{
try{
  const response = await dbConnect()
     data = await response.find().toArray()
     console.log(data)
}catch(error){
  throw("something went wrong")
}
}

main()













