const { rmSync } = require("fs")
const http  = require("http")


// const server = http.createServer(req,res)=>{
    // res.end('Welcome')
// })


// Using Event Emitter API
const server = http.createServer()
// emit request event
// listen to it/ respond to it
server.on('request',(req,res)=>{
    res.end(`welcome`)
})

server.listen(5000)
