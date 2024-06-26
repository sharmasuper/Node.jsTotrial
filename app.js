// In MongoDB 5.0 and later, you can create a time series collection, which is optimized for storing and querying
//  time series data. Mongoose, as of my last update, does not have direct support for creating time series collections 
//  in its schema definition. However, you can still interact with time series collections using Mongoose by creating the
//   collection manually and then using Mongoose for CRUD operations.



////firststep before using this

// db.createCollection("sensorReadings", {
//     timeseries: {
//       timeField: "timestamp",
//       metaField: "metadata",
//       granularity: "minutes"
//     }
//   });
  

const { Timestamp } = require('mongodb')
const mongoose = require('mongoose') 
const {Schema} = mongoose   
mongoose.connect('mongodb://localhost:27017/test') 
.then(()=>{ 
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const sensorReadingSchema = new Schema({
     timestamp : {
        type : Date ,
        required : true
     },
     metadata : {
        sensorId : String,
        location : String
     },
     value : {
        type : Number,
        required : true
     }

});


const User = mongoose.model('sensorReadings',sensorReadingSchema)


const runFun = async() =>{
    try{
//     const newData = new User({
//         timestamp: new Date(),
//         metadata: {
//           sensorId: 'sensor_1',
//           location: 'building_1'
//         },
//         value: 23.5
//     })
      
//    await  newData.save() 
//     console.log(newData)
//find method
// const findata = await User.find({'metadata.sensorId': 'sensor_1'}).sort({ timestamp: -1 })

// const updateUser = await  User.updateOne(
//     // { 'metadata.sensorId': 'sensor_1' },{$set:{value:24.0}}) 
//     { 'metadata.sensorId': 'sensor_1' },{value:25.0})                    //timestamp :specificDate
//   console.log(updateUser)   
// //
//deleteOne
const deleteUser = await  User.deleteOne({ 'metadata.sensorId': 'sensor_1' })
 console.log(deleteUser) 
//  User.deleteOne({ 'metadata.sensorId': 'sensor_1', timestamp: specificDate })
    }catch(error){
        console.log("show error ",error)
    }
}
runFun()
