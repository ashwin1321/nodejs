// fs = file system

const {readFileSync,writeFileSync} = require('fs');
console.log('start');

const first = readFileSync("../content/first.txt",'utf8');
const seconf = readFileSync("../content/second.txt",'utf8');
// console.log(`${first}\n${seconf}`);

writeFileSync('../content/third.txt',`Here is the result: \n${first}\n${seconf}`);

console.log("done with the task");
console.log("starting the next task");