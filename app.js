//K7g50h7PieDU1TPM
const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/MERNFirst?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("mongoose connected successfully")
})
.catch((error)=>{
  console.log("show error ",error) 
})

const personSchema = new Schema({
  region : String,
  sales : Number
})


const Sale = mongoose.model('Sales',personSchema)

async function streamDocument(){
  try{
  //   const newData = await Sale.create([
  //     { "region": "North", "sales": 100 },
  // { "region": "South", "sales": 150 },
  // { "region": "North", "sales": 200 },
  // { "region": "East", "sales": 250 },
  // { "region": "West", "sales": 300 },
  // { "region": "South", "sales": 100 }
  //   ])
   const results = await Sale.aggregate([
      {
        $group : {
          _id : "$region",
          totalSales : { $sum : "$sales" }
        }
      },
      {
        $sort : {totalSales:1}
      }
   ])

   console.log(results)
   
  }catch(error){
    console.log('Error streaming document :',error)
  }
  finally{
    mongoose.connection.close()
  }
}

streamDocument()





