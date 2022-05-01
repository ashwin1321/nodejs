const {readFile,writeFile} = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// yo use garda tala jasari read write garna milyo
// const first = await readFilePromise('./content/first.txt','utf8')

const start = async() =>{
    try {
    const first = await readFile('./content/first.txt','utf8')            // fs import garda .promise rakhda yesari ni garnna payo
    const second = await readFile('./content/second.txt','utf8')

    await writeFile('./content/result.txt',`This  is is result file : ${first} and ${second}`)

    console.log(first,second);
        
    } catch (error) {
        console.log(error);   
    }
}
start()



// const getText = (path) =>{
//     // promise has 2 parameters resolve and reject/
//     return new Promise((resolve, reject)=> {
//         readFile(path,'utf8', (err,data) =>{
//             if(err){
//                 reject()
//             }
//             else{
//                 resolve(data)
//             }
//         })

//     })
// }

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
