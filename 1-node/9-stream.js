// Streams

// -writeable  -readable  -Duplex  -transform

// createa a big file first
// const {writeFileSync} = require('fs')
// for (let i=0; i<1000; i++){
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
// }

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark: 9000, encoding: 'utf8'})

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=> console.log(err))