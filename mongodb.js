const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'e-come';

const dbConnect = async() =>{
  const result =   await client.connect();
  const data = result.db(dbName)
  const collection = data.collection('products')
  return collection
}


module.exports = {
    dbConnect:dbConnect
}