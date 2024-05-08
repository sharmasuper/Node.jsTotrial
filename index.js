const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname,"crud")
//fs.writeFileSync('apple.txt',"this file text")  //yai file merai root folder mai banaigi
//isliy mai issai crud folder mai file banauga
//create method
const filepath =  `${dirpath}/apple.txt`
// fs.writeFileSync(filepath,"this is simple text file")
//read method
// fs.readFile(filepath,'utf8',(error,item)=>{
//   console.log(item)
// })
//update method
// fs.appendFile(filepath," and file name is apple.txt",(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })

//rename
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err) {console.log("file name isUpdate")}
// })

//Delete

fs.unlinkSync(`${dirpath}/fruit.txt`)






















