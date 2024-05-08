console.log("start exe ....")



setTimeout(()=>{
    console.log("Logic exc ----")
},2000)
console.log("complete exe ....")
//dropback example in acncronous programming
let a = 2
let b = 5

setTimeout(()=>{
    b=20;
},2000)
console.log(a+b)



