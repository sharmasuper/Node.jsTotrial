const { default: mongoose } = require("mongoose");

const {Schema} = mongoose;

const blogSchema = new Schema({
    title : String,
    auther : String,
    body : String,
    comments : [{body : String ,date : Date}],
    date : {type : Date ,default : Date.now()},
    hidden : Boolean,
    meta : {
        voters : Number,
        favs : Number
    }
})
  
const Blog = mongoose.model('Blog',blogSchema) 

module.exports = {Blog} 






