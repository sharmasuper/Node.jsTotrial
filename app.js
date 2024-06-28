// n Mongoose, the storeSubdocValidationError option determines 
// whether Mongoose should store validation errors for subdocuments. 
// By default, Mongoose does not store validation errors for 
// subdocuments. Here’s an example of how you can use this option:


const mongoose = require('mongoose')
const {Schema} = mongoose

// Define a schema for a product
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log('mongoose connected successfully')
})
.catch((error)=>{
    console.log("show error ",error)
})

const childSchema = new Schema({
  name : {type:String,required:true}
});

const parentSchema = new Schema({
    children : [childSchema] 
},
{
    storeSubdocValidationError: false
}//koi ferk hi nhi padha
)

const Parent = mongoose.model('parents',parentSchema);


const runFun = async() =>{
  try{
        const parent = new Parent({
   //correct =        children: [{ name: 'Joh' }, { name: 'hello' }] //one valid and one invalid schema
        
   //incorrect is =   //children: [{ name: 'Joh' }, { name: '' }]  
        })
        console.log(parent)
           await parent.save()
        console.log("user saved successfully")

  }catch(error){
    console.log("show error ",error)
  }
}
runFun()
























