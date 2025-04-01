const promise = require('fs').promises;
    const fsp = promise.writeFile('data.txt',"Hello using promise");
    fsp.then(()=>{
        console.log("write success")
    }).catch((err)=>{
        console.log("err : "+ err);
    }).finally(()=>{
        console.log("Finally clode resorces");
    })


    async function readFileAsync(){
        const data = await promise.readFile('file.txt','utf-8');
        console.log(data)
    }