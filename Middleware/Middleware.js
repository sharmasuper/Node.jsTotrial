//  reqFilter = (req,resp,next) =>{
//     if(!req.query.age){
//           resp.send('please provide age')
//         }
//         else if(req.query.age<18){
//           resp.send("You can not access the page")
//         }
//         else
//         {
//           next() 
//         }
// } 
//  WarFilter = (req,resp,next) =>{
//     if(!req.query.age){
//           resp.send('please provide age')
//         }
//         else if(req.query.age<18){
//           resp.send("You can not access the page")
//         }
//         else
//         {
//           next() 
//         }
// }  
// module.exports = {
//     reqFilter : reqFilter,               //  if you export two middlele
//     WarFilter : WarFilter
// }; 


const  reqFilter = (req,resp,next) =>{
    if(!req.query.age){
          resp.send('please provide age')
        }
        else if(req.query.age<18){
          resp.send("You can not access the page")
        }
        else
        {
          next() 
        }
} 

 module.exports = {
    reqFilter :reqFilter
 }