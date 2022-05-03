const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./index.html');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(homePage);
});

server.listen(5000);