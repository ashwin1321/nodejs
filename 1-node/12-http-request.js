// http request object

const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req.method);           // get or post
    // console.log(req.url);           
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('<h1>Hello World</h1>');

    if(req.url == '/') {
        res.write('<h1>Home page ho la</h1>');
    }
    else if (req.url == '/about'){
        res.write('<h1>About page ho la</h1>');
    }
    else{
        res.write('<h1>kina hero</h1>');
    }
    res.end();
})

server.listen(5000);