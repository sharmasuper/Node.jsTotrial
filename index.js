const mongoose = require('mongoose')
const main = async() =>{
    await mongoose.connect("mongodb://localhost:27017/e-come")
    const ProductSchema = new mongoose.Schema({
        name : String,
        price : Number  // now price will be entering in result 
    });
    const ProductModal = mongoose.model('products',ProductSchema)
  //products have database name
  //let data = new  ProductModal({name:"m8"})   //result name enter ho gaya
  let data = new ProductModal({name:"m8",price:1000}) //but Price have not enter bacause In validation we had not written price
  let result = await data.save();
  console.log(result)

}
main()



// {
//     name: 'm8',
//     price: 1000,
//     _id: new ObjectId('664665f89d9e1e40447ff2b0'),
//     __v: 0
//   }
// result






