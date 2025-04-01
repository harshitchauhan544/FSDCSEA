const http = require('http');
const port = 2527;

const server = http.createServer((req, res) => {
    console.log("hello harshit");
    res.write("Welcome to node server ");
    res.end("server end");


});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});