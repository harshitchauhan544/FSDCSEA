const fs = require('fs')

fs.writeFile('one.txt', "Welcome" , ()=>{
    console.log("hello");
})






// function dataWrite(){
//     try{
//     fs.writeFileSync('hello.txt','hello');
//     console.log("success")
//     }catch(err){
//         console.log("error : data not written : " + err)
//     }
// }

// function dataRead(){
//     try{
//     const rf = fs.readFileSync('hello.txt',{encoding:'utf-8'});
//     console.log(rf)
//     }catch(err){
//         console.log("error")
//     }
// }

// function dataAppend(){
//     try{
//         fs.appendFileSync('hello.txt',"append");
//     }catch(err){
//         console.log("error")
//     }
// }
// function unlink(){
//     try{
//     fs.unlinkSync('hello.txt');
//     console.log("eerr")
//     }catch(err){
//         console.log("eerr")
//     }

// }
// module.exports = {
//     dataWrite,
//     dataRead,
//     dataAppend,
//     unlink
// };