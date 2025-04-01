const fs = require('fs')

fs.writeFile('one.txt', "Welcome" , ()=>{
    console.log("hello");
})

fs.appendFile('one.txt', "__here" , (err)=>{
    if(err){
        console.log("error reading data :" + err);
    }
    console.log("edited");
})

fs.readFile('one.txt',(err,data)=>{
    if(err){
        console.log("error reading data :" + err);
    }
    console.log(data.toString());
})

fs.unlink('one.txt', (err)=>{
    if(err){
        console.log("error reading data :" + err);
    }
    console.log("deleted");
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