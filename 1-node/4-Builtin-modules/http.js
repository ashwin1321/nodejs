// http module  --  setting the web server   

import { createServer } from 'http';

const server = createServer((req,res)=>{
    // console.log(req);
    if (req.url==='/')
    {
        res.end('Welcome to our homepage');
    }
        
    else if (req.url==='/about')
    {
        res.end('Welcome to our aboutpage');
    }
    
    else
    {
        res.end(`
        <h1>oops!</h1>
        <p>page not found</p>
        <a href="/">home</a>`)
    }

});

server.listen(8000);
