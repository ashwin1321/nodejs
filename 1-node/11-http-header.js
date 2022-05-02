const  http = require('http');
const { url } = require('inspector');
// import {http} from 'http';
const server = http.createServer((req, res) => {
    
    console.log("User hit the server");

    // http header
    res.writeHead(200, {'Content-Type': 'text/html'});     // 200 is  status code  // text/html is the type of content  
    res.end("<h1>Hei Hei</h1>");
    
});

server.listen(5000);


