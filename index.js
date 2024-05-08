//how Node js is work

//code =>calll Stack => NodeAPI =>event Loop
console.log("Starting up")

setTimeout(()=>{
    console.log("2 second log")
},2000)

setTimeout(()=>{
    console.log("0 second log")
},0)

console.log("Finishing up")