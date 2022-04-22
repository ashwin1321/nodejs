// fs = file system

const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync("../content/first.txt",'utf8');
const seconf = readFileSync("../content/second.txt",'utf8');
// console.log(`${first}\n${seconf}`);

writeFileSync('../content/third.txt',`Here is the result: \n${first}\n${seconf}`);
