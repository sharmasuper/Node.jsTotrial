const mongoose = require('mongoose')
const pluginTags = (schema,options) =>{
    schema.add({tags : [String]})
  //Add a tags field to the schema
    schema.methods.addTag = function (tag) {
        if(!this.tags.includes(tag)){
            this.tags.push(tag) 
        }
        return this.save(); 
    };
    //add a remove method to remove a tag
    schema.methods.removeTag = function (tag){
        this.tags = this.tags.filter((t)=>t !== tag) 
        return this.save()
    } 
    //add a method to get all tags 
    schema.methods.getTags = function(){
        return this.tags
    } 

}
module.exports = {pluginTags};  //export the plugin  to use it in other models
