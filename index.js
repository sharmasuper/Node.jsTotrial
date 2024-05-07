const app = require('./app')

// console.log(app.x)
// console.log(app.y)
// console.log(app)
// console.log(app.z)
// console.log(app.z())
//use filter method
arr = [2,3,4,5,6,7]

const result  = arr.filter((item)=>{
    return item === 3
}) 

console.log(result)