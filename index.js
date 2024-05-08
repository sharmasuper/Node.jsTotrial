const fs = require('fs')
// // fs.unlinkSync('apple.text') file delete command
// fs.writeFileSync('apple.txt','this is a apple file')

//issai sirf ek file create ho rahi h but mai chahtha hu ki loop mai ek sath kahi file cereate ho tab
//jab bhi file create karai to humai uska path ki need hoti ki hum issai kis folder mai create karaigai 
// const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'files');
// console.log(dirPath)
// for(let i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple tet file")
// }
//ab is file ko read karna h 
//read tab kara sktai h jab file kai ander content ho
 fs.readdir(dirPath,(error,files)=>{
    // console.warn(files)   //return files in array
    files.forEach((item)=>{
        console.log("files name is ",item)
    })
 })

//hum iss flder ka data dusrai folder mai access nahi kar sktai 
//nahi get because yai ek web server

console.log("notes")


