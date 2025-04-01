const fs = require('fs').promises;
// const { response } = require('express');
const http = require('http')
const PORT = 2527
const server = http.createServer(async (request, response) => {
    // try {
    //     response.setHeader('Content-Type', 'text/html')
    //     response.write("Welcome to http and fs place")
    //     const data = await fs.readFile('student.json', 'utf-8');
    //     response.write(<h1 style='color:blue'>${data}</h1>)
        
    // } catch (error) {
    //     response.end("Error in reading file")
    // }

    if (request.url === '/home' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html')
        const htmltemplate = await fs.readFile('home.html')
        response.end(htmltemplate)

    }
    else if (request.url === '/textdata' && request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json')
        const data = await fs.readFile('student.txt', 'utf-8');
        response.end(data)
        
    }
    else{
        response.setHeader('Content-Type', 'text/html')
        const errortemplate = await fs.readFile('error.html')
        response.end(errortemplate)
    }
})

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })