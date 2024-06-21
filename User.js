const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    
        street: String,
        city: String
    
})
const UserSchema = new mongoose.Schema({
    name : String,
    age : {
        type : Number,
        min : 1 ,
        max : 100,
        validate : {
            validator : v => v%2===0,
            message : props => `${props.value} is not a even number`
        }
    },
    email : {
      type :  String,
      required : true,
      minLength : 10,
    //   lowercase : true,
      uppercase : true        //autometically email upperCase and lowercase

    },
    createAt :{
        type : Date,
        immutable : true,   
        default : ()=>Date.now(),
    },
    // updateAt : Date,
    updatedAt :{
        type : Date,   
        default : ()=>Date.now(),
    },
    bestFriend :{
      type :   mongoose.SchemaTypes.ObjectId,
      ref : "User"
    },
    hobbies : [String],
    // address : {
    //     street : String,
    //     city : String
    // }
    address : addressSchema

})
UserSchema.methods.sayHi = function (){
    console.log(`My name is ${this.name}`)
}
UserSchema.statics.findByName = function(name){
    // return this.where({name : new RegExp(name,'i')})
    return this.find({name : new RegExp(name,'i')})
}
UserSchema.query.byName = function (name){
    return this.where({name : new RegExp(name,'i')})
}
//virtual method
UserSchema.virtual('namedEmail').get(function(){
    return `${this.name}<${this.email}>`
})
UserSchema.pre('save',function(next){
    this.updatedAt = Date.now()
    throw new Error("Fail Save")
    // next()
})
UserSchema.post("save",function(doc,next){
    doc.sayHi()
    next()
})
module.exports = mongoose.model("User",UserSchema)
