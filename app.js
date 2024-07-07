
const mongoose = require('mongoose')
const {Schema} = mongoose 
const str = 'mongodb+srv://ms6375349671:K7g50h7PieDU1TPM@cluster0.wv4kfmu.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(str)
.then(()=>{
  console.log("mongoose connected successfully")
})
.catch((error)=>{
  console.log("show error ",error)
})

const option  = {discriminatorKey : 'kind'};

const baseSchema = new Schema({
  name : {type : String ,required : true},
  createAt : {type : Date ,default : Date.now}
},option)

const Base = mongoose.model('Base',baseSchema)

const carSchema = new Schema({
  model : {type : String,required : true},
  year : {type : Number,required : true}
})

const Car = Base.discriminator('Car',carSchema)

const bikeSchema = new Schema({
  brand : {type : String,required : true},
  gearCount : {type : Number,required : true}
})

const Bike = Base.discriminator('Bike',bikeSchema)


const runfunction = async() => {
   const car = new Car({name : "Mycar",model : 'Toyota',year : 2020})
   await car.save()

   const bike = new Bike({name : 'MyBike',brand : 'Giant',gearCount :21})
   await bike.save()

   const cars = await Car.find()
   const bikes = await Bike.find()

   console.log("Cars",cars)

   console.log("Bikes ",bikes);

   await mongoose.connection.close();

}

runfunction() 





















