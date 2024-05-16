

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-come')

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand:String,
    Category:String
});

const SaveInDB = async () =>{
    const Product = mongoose.model('products',productSchema)
    let data  = new Product({name : "max 131",
                            price:500,
                            brand:"GHRML",
                            Category:"Store"
                        });
    const result = await data.save()
    console.log(result)
}
// main()
const UpdateInDB = async() =>{
    const Product = mongoose.model('products',productSchema)
   let data = await Product.updateMany( {name:"max 131"} ,{$set:{price:10,name:"hello Suita"}})  //updateone bhi use kar sktai hu
   console.log(data)
}

// UpdateInDB()

const DeleteInDB = async() =>{
  const Product = mongoose.model('products',productSchema)
  let data  = await Product.deleteMany({name:"hello Suita"}) //DeleOne ka bhi use kar sktai h
  console.log(data)
}

// DeleteInDB()

const FindInDB = async() =>{
    const Product = mongoose.model('products',productSchema)
    let data = await Product.find({name:'m8'})    //findOne bhi use kar sktai h
    console.log(data);
}
FindInDB()


