console.log(process)
//process ek object hota h jskai ander node js ka almost sab hota
//property ko access karo
//console.log(process.argv)
 //argv means = argunment vector
//he give two response frist
//frist jaha hamari file save /install h vo
//second jaha sai hum isko run kar rahai vo ya file run kar rahai h
//iskai badh jo bhi hum input likhtai vo hami mil jata h
//ex - node .\index.js hello
//result frist - install, second - file run path thrid- argunment ----

//target - 
//console.log(process.argv[2])
//command run - node .\index.js hello mohit
//result - hello


//ab iski help sai meanfull chijai banatai h
const fs = require('fs')
const input  = process.argv
 //fs.writeFileSync(input[3],input[4])
//writeFilesync create file fristargunment - fileName
//                        second argunment - jobhi file kai ander data ko add karna chahtai h
//command run - node index.js apple.text 'this file make process command"
//condiiton base
if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("invalid input")
}


node index.js apple.text 'this file make process command"  run command
node index.js remove orane isssai remove ho jayga
node index.js add orane.text "file add text"



